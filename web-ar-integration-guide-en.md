# Web AR SDK Integration Guide

## Table of Contents
- [Introduction](#introduction)
- [System Requirements](#system-requirements)
- [Installation](#installation)
- [Basic Usage](#basic-usage)
- [Advanced Features](#advanced-features)
- [Best Practices](#best-practices)
- [Troubleshooting](#troubleshooting)

## Introduction

Web AR SDK is a powerful augmented reality development toolkit for web platforms, based on WebGL and WebAssembly. It supports face tracking, virtual try-on, beauty effects, and more. This guide will help you quickly integrate and utilize these features.

## System Requirements

- Browser Requirements:
  - Chrome 83+
  - Firefox 76+
  - Safari 13+
- Device Requirements:
  - Camera
  - WebGL 2.0 support
  - WebAssembly support
  - Hardware acceleration recommended
- Network Requirements:
  - HTTPS environment (required for camera access)
  - Stable network connection (for loading models and effects)

## Installation

### NPM Installation
```bash
npm install @banuba/webar
```

### CDN Reference
```html
<script src="https://cdn.jsdelivr.net/npm/@banuba/webar/dist/BanubaSDK.browser.js"></script>
```

## Basic Usage

### 1. Project Configuration

First, configure the necessary files:

```javascript
// Configure SDK core files
const files = {
  "BanubaSDK.data": "/path/to/BanubaSDK.data",
  "BanubaSDK.wasm": "/path/to/BanubaSDK.wasm",
  "BanubaSDK.simd.wasm": "/path/to/BanubaSDK.simd.wasm"  // SIMD support (optional)
}
```

### 2. SDK Initialization

```javascript
import { Player, Module, Effect, Dom } from '@banuba/webar'

// Create player instance
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

### 3. Camera Setup

```javascript
import { Webcam } from '@banuba/webar'

// Create camera instance
const webcam = new Webcam({
  facingMode: "user",  // Use front camera
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

// Start camera and player
try {
  await webcam.start()
  await player.use(webcam)
  player.play()
  
  // Handle page visibility changes
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
  console.error("Camera startup failed:", error)
}
```

### 4. Loading Modules and Effects

```javascript
// Core modules configuration
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

// Load modules as needed
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

## Advanced Features

### 1. Virtual Try-On

```javascript
class VirtualTryOn {
  constructor(player) {
    this.player = player
  }

  async init() {
    // Load required modules
    await loadModules(['face_tracker', 'face_attributes'])
    
    // Enable face attribute recognition
    this.player.evalJs(`
      bnb.scene.enableRecognizerFeature(bnb.FeatureID.FACE_ATTRIBUTES);
    `)
  }
  
  async applyEffect(effectPath) {
    try {
      const effect = await Effect.preload(effectPath)
      await this.player.applyEffect(effect)
    } catch (error) {
      console.error('Effect loading failed:', error)
    }
  }
  
  // Listen for face data
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

### 2. Beauty Effects

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

### 3. Background Effects

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

### 4. Face Recognition and Tracking

```javascript
class FaceRecognition {
  constructor(player) {
    this.player = player
    this.recognizer = null
  }

  async init() {
    await loadModules(['face_tracker'])
    
    // Initialize recognizer
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
        console.error("Face data processing error:", error)
      }
    })
  }
}
```

## Best Practices

### 1. Performance Optimization

```javascript
// Optimize camera settings
const webcam = new Webcam({
  facingMode: "user",
  width: { ideal: window.innerWidth },
  height: { ideal: window.innerHeight },
  frameRate: { ideal: 30 }
})

// Monitor performance
let frameCount = 0
let lastTime = performance.now()

player.addEventListener("frameprocessed", ({detail}) => {
  frameCount++
  const now = performance.now()
  
  if (now - lastTime >= 1000) {
    const fps = Math.round((frameCount * 1000) / (now - lastTime))
    console.log(`FPS: ${fps}, Processing time: ${detail.averagedDuration}ms`)
    frameCount = 0
    lastTime = now
  }
})
```

### 2. Resource Management

```javascript
class ARManager {
  constructor() {
    this.player = null
    this.webcam = null
    this.effects = new Map()
  }
  
  async initialize() {
    // Initialize player
    this.player = await Player.create({/*config*/})
    
    // Initialize camera
    this.webcam = new Webcam({/*config*/})
    
    // Page lifecycle management
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

## Troubleshooting

### Common Issues and Solutions

1. **WebAssembly Loading Failure**
```javascript
// Check WebAssembly support
if (!('WebAssembly' in window)) {
  throw new Error('Current browser does not support WebAssembly')
}

// Handle WASM loading errors
player.addEventListener('error', (error) => {
  if (error instanceof WebAssembly.CompileError) {
    console.error('WASM compilation error:', error)
  } else if (error instanceof WebAssembly.LinkError) {
    console.error('WASM linking error:', error)
  } else if (error instanceof WebAssembly.RuntimeError) {
    console.error('WASM runtime error:', error)
  }
})
```

2. **Camera Permission Issues**
```javascript
async function checkCameraPermission() {
  try {
    const stream = await navigator.mediaDevices.getUserMedia({ video: true })
    stream.getTracks().forEach(track => track.stop())
    return true
  } catch (error) {
    if (error.name === 'NotAllowedError') {
      console.error('Camera permission denied')
    } else if (error.name === 'NotFoundError') {
      console.error('No camera device found')
    } else {
      console.error('Camera access error:', error)
    }
    return false
  }
}
```

3. **Performance Monitoring**
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
Performance Metrics:
- Processing Time: ${this.metrics.processingTime.toFixed(2)}ms
- Memory Usage: ${this.metrics.memoryUsage.toFixed(2)}MB
      `)
    }, 5000)
  }
}
```

## Additional Resources

- [Complete API Documentation](#)
- [Example Projects](#)
- [Effects Marketplace](#)
- [Technical Support](#) 