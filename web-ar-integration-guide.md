# Web AR SDK 集成指南

## 目录
- [简介](#简介)
- [系统要求](#系统要求)
- [安装](#安装)
- [基础用法](#基础用法)
- [高级功能](#高级功能)
- [最佳实践](#最佳实践)
- [故障排除](#故障排除)

## 简介

Web AR SDK 是一个基于 WebGL 和 WebAssembly 的网页端增强现实开发工具包，支持人脸追踪、虚拟试戴、美颜特效等多种功能。本指南将帮助你快速集成并使用这些功能。

## 系统要求

- 浏览器要求：
  - Chrome 83+
  - Firefox 76+
  - Safari 13+
- 设备要求：
  - 摄像头
  - WebGL 2.0 支持
  - WebAssembly 支持
  - 建议使用支持硬件加速的设备
- 网络环境：
  - HTTPS 环境（访问摄像头必需）
  - 稳定的网络连接（用于加载模型和效果）

## 安装

### NPM 安装
```bash
npm install @banuba/webar
```

### CDN 引用
```html
<script src="https://cdn.jsdelivr.net/npm/@banuba/webar/dist/BanubaSDK.browser.js"></script>
```

## 基础用法

### 1. 项目配置

首先需要配置必要的文件：

```javascript
// 配置 SDK 所需的核心文件
const files = {
  "BanubaSDK.data": "/path/to/BanubaSDK.data",
  "BanubaSDK.wasm": "/path/to/BanubaSDK.wasm",
  "BanubaSDK.simd.wasm": "/path/to/BanubaSDK.simd.wasm"  // SIMD 支持（可选）
}
```

### 2. 初始化 SDK

```javascript
import { Player, Module, Effect, Dom } from '@banuba/webar'

// 创建播放器实例
const player = await Player.create({
  clientToken: 'your-client-token',
  locateFile: files,
  canvas: document.querySelector('#webar-canvas'),
  logger: {
    warn: console.warn,
    error: console.error
  }
})
```

### 3. 相机设置

```javascript
import { Webcam } from '@banuba/webar'

// 创建相机实例
const webcam = new Webcam({
  facingMode: "user",  // 使用前置摄像头
  width: { 
    min: 640,
    ideal: 1280,
    max: 1920
  },
  height: { 
    min: 480,
    ideal: 720,
    max: 1080
  }
})

// 启动相机和播放器
try {
  await webcam.start()
  await player.use(webcam)
  player.play()
  
  // 处理页面可见性变化
  document.addEventListener("visibilitychange", async () => {
    if (document.hidden) {
      await webcam.stop()
    } else {
      await webcam.start()
      await player.use(webcam)
      player.play()
    }
  })
} catch (error) {
  console.error("摄像头启动失败:", error)
}
```

### 4. 加载模块和效果

```javascript
// 加载核心模块
const modules = {
  background: false,
  body: false,
  eyes: false,
  face_attributes: false,
  face_tracker: false,
  hair: false,
  hands: false,
  lips: false,
  makeup: false,
  skin: false
}

// 根据需要加载模块
async function loadModules(requiredModules) {
  const modulePromises = []
  
  requiredModules.forEach(moduleName => {
    if (!modules[moduleName]) {
      modulePromises.push(
        player.addModule(new Module(`modules/${moduleName}.zip`))
      )
      modules[moduleName] = true
    }
  })
  
  await Promise.all(modulePromises)
}
```

## 高级功能

### 1. 虚拟试戴

```javascript
class VirtualTryOn {
  constructor(player) {
    this.player = player
  }

  async init() {
    // 加载必要模块
    await loadModules(['face_tracker', 'face_attributes'])
    
    // 启用人脸特征识别
    this.player.evalJs(`
      bnb.scene.enableRecognizerFeature(bnb.FeatureID.FACE_ATTRIBUTES);
    `)
  }
  
  async applyEffect(effectPath) {
    try {
      const effect = await Effect.preload(effectPath)
      await this.player.applyEffect(effect)
    } catch (error) {
      console.error('效果加载失败:', error)
    }
  }
  
  // 监听人脸数据
  onFaceData(callback) {
    this.player.addEventListener("framedata", (event) => {
      const faceData = event.detail.get("faceAttributes")
      if (faceData) {
        callback(JSON.parse(faceData.value()))
      }
    })
  }
}
```

### 2. 美颜/美妆

```javascript
class BeautyEffect {
  constructor(player) {
    this.player = player
  }

  async init() {
    await loadModules(['face_tracker', 'makeup', 'skin'])
  }
  
  setBeautyParams(params) {
    const { smoothness = 0.5, brightness = 0.5 } = params
    
    this.player.evalJs(`
      bnb.scene.beauty.setSmoothness(${smoothness});
      bnb.scene.beauty.setBrightness(${brightness});
    `)
  }
  
  async applyMakeup(type, options) {
    const makeupEffect = await Effect.preload(`effects/makeup/${type}.zip`)
    await this.player.applyEffect(makeupEffect)
    
    if (options) {
      this.player.evalJs(`
        bnb.scene.makeup.setParams(${JSON.stringify(options)});
      `)
    }
  }
}
```

### 3. 背景替换

```javascript
class BackgroundEffect {
  constructor(player) {
    this.player = player
  }

  async init() {
    await loadModules(['background'])
  }
  
  async setBackground(type, options = {}) {
    const { blur = 5, url } = options
    
    switch(type) {
      case 'blur':
        await this.player.applyEffect(new Effect('effects/background_blur.zip'))
        this.player.evalJs(`
          bnb.scene.background.setBlur(${blur});
        `)
        break
        
      case 'image':
        await this.player.applyEffect(new Effect('effects/background_image.zip'))
        if (url) {
          this.player.evalJs(`
            bnb.scene.background.setImage("${url}");
          `)
        }
        break
        
      case 'none':
        await this.player.clearEffect()
        break
    }
  }
}
```

### 4. 人脸识别与追踪

```javascript
class FaceRecognition {
  constructor(player) {
    this.player = player
    this.recognizer = null
  }

  async init() {
    await loadModules(['face_tracker'])
    
    // 初始化识别器
    const sdk = this.player._sdk
    this.recognizer = sdk.Recognizer.create(sdk.RecognizerMode.SYNCHRONOUS)
    this.recognizer.setFeatures([
      sdk.FeatureId.FRX,
      sdk.FeatureId.ACTION_UNITS,
      sdk.FeatureId.FACE_MATCH
    ])
    this.recognizer.setOfflineMode(true)
    this.recognizer.setMaxFaces(10)
  }
  
  startTracking(callback) {
    this.player.addEventListener("framedata", async ({detail}) => {
      try {
        const faceData = detail.get("frxRecognitionResult.faces.0")
        if (faceData?.hasFace()) {
          const faceAttributes = JSON.parse(
            detail.get("faceAttributes")?.value() || "{}"
          )
          callback({
            face: faceData,
            attributes: faceAttributes
          })
        }
      } catch (error) {
        console.error("人脸数据处理错误:", error)
      }
    })
  }
}
```

## 最佳实践

### 1. 性能优化

```javascript
// 优化相机设置
const webcam = new Webcam({
  facingMode: "user",
  width: { ideal: window.innerWidth },
  height: { ideal: window.innerHeight },
  frameRate: { ideal: 30 }
})

// 监控性能
let frameCount = 0
let lastTime = performance.now()

player.addEventListener("frameprocessed", ({detail}) => {
  frameCount++
  const now = performance.now()
  
  if (now - lastTime >= 1000) {
    const fps = Math.round((frameCount * 1000) / (now - lastTime))
    console.log(`FPS: ${fps}, 处理时间: ${detail.averagedDuration}ms`)
    frameCount = 0
    lastTime = now
  }
})
```

### 2. 资源管理

```javascript
class ARManager {
  constructor() {
    this.player = null
    this.webcam = null
    this.effects = new Map()
  }
  
  async initialize() {
    // 初始化播放器
    this.player = await Player.create({/*配置*/})
    
    // 初始化相机
    this.webcam = new Webcam({/*配置*/})
    
    // 页面生命周期管理
    window.addEventListener('beforeunload', () => this.destroy())
    document.addEventListener('visibilitychange', () => {
      this.handleVisibilityChange()
    })
  }
  
  async loadEffect(name, path) {
    if (!this.effects.has(name)) {
      const effect = await Effect.preload(path)
      this.effects.set(name, effect)
    }
    return this.effects.get(name)
  }
  
  destroy() {
    this.webcam?.stop()
    this.player?.destroy()
    this.effects.clear()
  }
  
  handleVisibilityChange() {
    if (document.hidden) {
      this.webcam?.stop()
    } else {
      this.webcam?.start()
        .then(() => this.player.use(this.webcam))
        .then(() => this.player.play())
        .catch(console.error)
    }
  }
}
```

## 故障排除

### 常见问题及解决方案

1. **WebAssembly 加载失败**
```javascript
// 检查 WebAssembly 支持
if (!('WebAssembly' in window)) {
  throw new Error('当前浏览器不支持 WebAssembly')
}

// 处理 WASM 加载错误
player.addEventListener('error', (error) => {
  if (error instanceof WebAssembly.CompileError) {
    console.error('WASM 编译错误:', error)
  } else if (error instanceof WebAssembly.LinkError) {
    console.error('WASM 链接错误:', error)
  } else if (error instanceof WebAssembly.RuntimeError) {
    console.error('WASM 运行时错误:', error)
  }
})
```

2. **相机权限问题**
```javascript
async function checkCameraPermission() {
  try {
    const stream = await navigator.mediaDevices.getUserMedia({ video: true })
    stream.getTracks().forEach(track => track.stop())
    return true
  } catch (error) {
    if (error.name === 'NotAllowedError') {
      console.error('摄像头权限被拒绝')
    } else if (error.name === 'NotFoundError') {
      console.error('未找到摄像头设备')
    } else {
      console.error('摄像头访问错误:', error)
    }
    return false
  }
}
```

3. **性能监控**
```javascript
class PerformanceMonitor {
  constructor(player) {
    this.player = player
    this.metrics = {
      fps: 0,
      processingTime: 0,
      memoryUsage: 0
    }
  }
  
  start() {
    this.player.addEventListener("frameprocessed", ({detail}) => {
      this.metrics.processingTime = detail.averagedDuration
    })
    
    setInterval(() => {
      if (performance.memory) {
        this.metrics.memoryUsage = performance.memory.usedJSHeapSize / 1048576
      }
      
      console.log(`
性能指标:
- 处理时间: ${this.metrics.processingTime.toFixed(2)}ms
- 内存使用: ${this.metrics.memoryUsage.toFixed(2)}MB
      `)
    }, 5000)
  }
}
```

## 更多资源

- [完整 API 文档](#)
- [示例项目](#)
- [效果市场](#)
- [技术支持](#) 