var Ah = Object.defineProperty;
var Ih = (r, o, n) => o in r ? Ah(r, o, { enumerable: !0, configurable: !0, writable: !0, value: n }) : r[o] = n;
var fe = (r, o, n) => (Ih(r, typeof o != "symbol" ? o + "" : o, n), n);
let Ph = 0;
const vs = () => Ph++, Es = "KGZ1bmN0aW9uKCl7InVzZSBzdHJpY3QiO2FkZEV2ZW50TGlzdGVuZXIoIm1lc3NhZ2UiLCh7ZGF0YTp0fSk9Pntjb25zdCBzPXtpZDp0LmlkfTtzZXRUaW1lb3V0KHBvc3RNZXNzYWdlLHQudGltZW91dCxzKX0pfSkoKTsK", Ea = typeof window < "u" && window.Blob && new Blob([atob(Es)], { type: "text/javascript;charset=utf-8" });
function Dh() {
  let r;
  try {
    if (r = Ea && (window.URL || window.webkitURL).createObjectURL(Ea), !r)
      throw "";
    return new Worker(r);
  } catch {
    return new Worker("data:application/javascript;base64," + Es);
  } finally {
    r && (window.URL || window.webkitURL).revokeObjectURL(r);
  }
}
let An;
const Si = /* @__PURE__ */ new Map(), xs = (r, o) => {
  const n = vs(), l = { id: n, timeout: o };
  return Si.set(l.id, r), An || (An = new Dh(), An.onmessage = ({ data: y }) => {
    const v = Si.get(y.id);
    Si.delete(y.id), v();
  }), An.postMessage(l), n;
}, kh = 60, xa = 1e3 / kh, In = [];
let Sa = 0;
const Ss = (r) => {
  const o = vs();
  if (In.length === 0) {
    const n = performance.now(), l = xa - (n - Sa) % xa;
    xs(() => {
      const y = Sa = performance.now(), v = [...In];
      In.length = 0, v.forEach((w) => w(y));
    }, l);
  }
  return In.push(r), o;
}, Lh = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  requestAnimationFrame: Ss,
  setTimeout: xs
}, Symbol.toStringTag, { value: "Module" })), Mh = (...r) => window.setTimeout(...r), On = /* @__PURE__ */ new Map(), Bh = (r) => {
  const o = window.requestAnimationFrame((...n) => {
    On.delete(o), r(...n);
  });
  return On.set(o, r), o;
};
typeof document < "u" && document.addEventListener("visibilitychange", () => {
  document.visibilityState !== "visible" && On.forEach((r, o) => {
    On.delete(o), cancelAnimationFrame(o), Ss(r);
  });
});
const Nh = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  requestAnimationFrame: Bh,
  setTimeout: Mh
}, Symbol.toStringTag, { value: "Module" })), Oh = typeof document < "u" ? document : { visibilityState: "hidden" }, Ts = () => Oh.visibilityState === "visible" ? Nh : Lh, Xr = (r) => Ts().requestAnimationFrame(r), Cs = (r, o) => Ts().setTimeout(r, o), Fs = (r) => Promise.resolve().then(r), fo = {
  requestAnimationFrame: Xr,
  setTimeout: Cs
}, kb = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  nextTick: Fs,
  requestAnimationFrame: Xr,
  setTimeout: Cs,
  timers: fo
}, Symbol.toStringTag, { value: "Module" })), jh = () => new Promise((r) => Xr(r)), co = (r = -1) => function(o, n, l) {
  const y = l, v = y.value;
  return { ...y, value: async function* (...D) {
    const k = v.apply(this, D);
    let B = 0, J = 0;
    for (; ; ) {
      const se = 1e3 / r, X = 0.1 * se;
      for (; (J = performance.now()) - B < se - X; )
        await jh();
      B = J;
      const { done: z, value: pe } = await k.next();
      if (z)
        return pe;
      const _e = yield pe;
      typeof _e < "u" && (r = _e);
    }
  } };
}, $n = async (r, o = {}) => new Promise((n) => {
  const l = document.createElement("video");
  if (l.muted = !0, l.controls = !1, l.playsInline = !0, Object.assign(l, o), r instanceof globalThis.MediaStream)
    l.srcObject = r, l.addEventListener("ended", () => l.srcObject = null, { once: !0 }), r.addEventListener("inactive", () => l.dispatchEvent(new CustomEvent("ended")), {
      once: !0
    });
  else {
    if (typeof r != "string") {
      const v = r = URL.createObjectURL(r);
      l.addEventListener("emptied", () => URL.revokeObjectURL(v), { once: !0 });
    }
    l.crossOrigin = "anonymous", l.src = r, l.addEventListener("ended", () => l.src = "", { once: !0 });
  }
  l.style.position = "fixed", l.style.zIndex = "-9999999", l.style.opacity = "0.0000000001", document.body.appendChild(l), l.addEventListener("emptied", () => l.remove(), { once: !0 });
  const y = setInterval(() => l.readyState, 300);
  l.addEventListener("play", () => clearInterval(y), { once: !0 }), l.addEventListener("play", () => n(l), { once: !0 }), l.addEventListener("loadedmetadata", () => l.play(), { once: !0 });
}), Uh = (r) => new Promise((o, n) => {
  const l = document.createElement("img");
  l.onload = () => o(l), l.onerror = n, l.crossOrigin = "anonymous", l.src = typeof r == "string" ? r : URL.createObjectURL(r);
}), Ta = /* @__PURE__ */ new Map(), Wh = (r, o, n) => r * (1 - n) + o * n, Yi = (r) => `webar::${r}:start`, Ti = (r) => `webar::${r}:end`, ho = (r) => {
  let o = { internalName: r + ":" + Math.random() };
  return performance.mark(Yi(o.internalName)), o;
}, po = (r) => {
  const o = r.internalName;
  performance.mark(Ti(o));
  let n = performance.measure(o, Yi(o), Ti(o));
  n || (n = performance.getEntriesByName(o)[0]), performance.clearMarks(Yi(o)), performance.clearMarks(Ti(o)), performance.clearMeasures(o);
  const { duration: l } = n, y = o.split(":")[0];
  let { averagedDuration: v = 0 } = Ta.get(y) || {};
  return v = Wh(v, l, 0.05), Ta.set(y, { averagedDuration: v }), { instantDuration: l, averagedDuration: v };
}, Rs = (r, o = (n) => console.warn(n)) => function(n, l, y) {
  const v = y.value;
  if (typeof v != "function")
    throw new TypeError("Only functions can be marked as deprecated");
  return { ...y, value: function(...D) {
    return o.call(
      this,
      `DEPRECATION: ${n.constructor.name}.${l}() is deprecated. ${r}`
    ), v.call(this, ...D);
  } };
};
let Zr = class {
  constructor() {
    fe(this, "_emitter", new EventTarget());
  }
  addEventListener(o, n, l) {
    this._emitter.addEventListener(o, n, l);
  }
  removeEventListener(o, n, l) {
    this._emitter.removeEventListener(o, n, l);
  }
  dispatchEvent(o) {
    return this._emitter.dispatchEvent(o);
  }
  removeAllEventListeners() {
    this._emitter = new EventTarget();
  }
};
const $h = (r, o, n) => fetch(r, o).then((l) => {
  if (!l.body)
    return l;
  let y = 0;
  const v = Number(l.headers.get("content-length") || 0), w = l.body.getReader();
  return new Response(
    new ReadableStream({
      async start(_) {
        for (; ; ) {
          const { done: D, value: k } = await w.read();
          if (D ? y = v : y += k.byteLength, n?.onProgress?.({ total: v, transferred: y }), D)
            break;
          _.enqueue(k);
        }
        _.close();
      }
    }),
    l
  );
}), Gh = () => (
  // The meta.env.SUPPORTED_BROWSERS will be replaced during build with RegExp, see vite.config.js
  /Edge?\/(79|[89]\d|\d{3,})(\.\d+|)(\.\d+|)|Firefox\/(6[5-9]|[7-9]\d|\d{3,})\.\d+(\.\d+|)|Chrom(ium|e)\/(5[7-9]|[6-9]\d|\d{3,})\.\d+(\.\d+|)([\d.]+$|.*Safari\/(?![\d.]+ Edge\/[\d.]+$))|Maci.* Version\/(1[5-9]|[2-9]\d|\d{3,})\.\d+([,.]\d+|)( Mobile\/\w+|) Safari\/|Chrome.+OPR\/(4[4-9]|[5-9]\d|\d{3,})\.\d+\.\d+|(CPU[ +]OS|iPhone[ +]OS|CPU[ +]iPhone|CPU IPhone OS|CPU iPad OS)[ +]+(1[5-9]|[2-9]\d|\d{3,})[._]\d+([._]\d+|)|Mobile Safari.+OPR\/(7[2-9]|[89]\d|\d{3,})\.\d+\.\d+|Android.+Chrom(ium|e)\/(10[7-9]|1[1-9]\d|[2-9]\d{2}|\d{4,})\.\d+(\.\d+|)|Android.+(UC? ?Browser|UCWEB|U3)[ /]?(1[3-9]|[2-9]\d|\d{3,})\.\d+\.\d+|SamsungBrowser\/([7-9]|\d{2,})\.\d+|Android.+MQ{2}Browser\/(1[3-9]|[2-9]\d|\d{3,})(\.\d+|)(\.\d+|)|baidubrowser[\s/](1[3-9]|[2-9]\d|\d{3,})(\.\d+|)(\.\d+|)/.test(navigator.userAgent)
), Vh = typeof window < "u" && /^((?!chrome|android).)*safari/i.test(window.navigator?.userAgent), As = typeof OffscreenCanvas < "u" && !Vh, Is = {
  // https://developer.mozilla.org/en-US/docs/Web/API/WebGL_API/WebGL_best_practices#avoid_alphafalse_which_can_be_expensive
  alpha: !0,
  antialias: !1,
  depth: !1,
  // since this context is designed to process video, it's better to be synchronized with the browser renderer
  desynchronized: !1,
  // avoid setting `powerPreference` to `"high-performance"` - it highly increases GPU usage
  // powerPreference: "high-performance",
  premultipliedAlpha: !1,
  preserveDrawingBuffer: !1,
  stencil: !1
};
let le;
const zh = (() => {
  if (typeof window > "u" || !Gh())
    return !1;
  le ?? (le = Ps().getContext("webgl2", Is));
  const r = le.createTexture();
  le.bindTexture(le.TEXTURE_2D, r), le.texImage2D(le.TEXTURE_2D, 0, le.RGB, 1, 1, 0, le.RGB, le.UNSIGNED_BYTE, null);
  const o = le.createFramebuffer();
  le.bindFramebuffer(le.FRAMEBUFFER, o), le.framebufferTexture2D(le.FRAMEBUFFER, le.COLOR_ATTACHMENT0, le.TEXTURE_2D, r, 0);
  const n = le.getParameter(le.IMPLEMENTATION_COLOR_READ_FORMAT);
  return le.bindFramebuffer(le.FRAMEBUFFER, null), le.bindTexture(le.TEXTURE_2D, null), le.deleteFramebuffer(o), le.deleteTexture(r), n === le.RGB;
})(), Hh = async (r, o, n, l = "RGBA") => {
  le ?? (le = Ps().getContext("webgl2", Is)), le.canvas.width = r.width, le.canvas.height = r.height, l === "RGB" && le.pixelStorei(le.PACK_ALIGNMENT, 1);
  const y = le.createTexture();
  le.bindTexture(le.TEXTURE_2D, y), le.texParameteri(le.TEXTURE_2D, le.TEXTURE_MIN_FILTER, le.NEAREST), le.texParameteri(le.TEXTURE_2D, le.TEXTURE_MAG_FILTER, le.LINEAR), le.texImage2D(le.TEXTURE_2D, 0, le[l], le[l], le.UNSIGNED_BYTE, r);
  const v = le.createFramebuffer();
  le.bindFramebuffer(le.FRAMEBUFFER, v), le.framebufferTexture2D(le.FRAMEBUFFER, le.COLOR_ATTACHMENT0, le.TEXTURE_2D, y, 0);
  const w = le.createBuffer();
  le.bindBuffer(le.PIXEL_PACK_BUFFER, w), le.bufferData(le.PIXEL_PACK_BUFFER, o.byteLength, le.STREAM_READ), le.readPixels(
    n.x,
    n.y,
    n.width,
    n.height,
    le[l],
    le.UNSIGNED_BYTE,
    0
  ), le.bindBuffer(le.PIXEL_PACK_BUFFER, null), le.bindFramebuffer(le.FRAMEBUFFER, null), le.deleteFramebuffer(v), le.bindTexture(le.TEXTURE_2D, null), le.deleteTexture(y);
  const _ = le.fenceSync(le.SYNC_GPU_COMMANDS_COMPLETE, 0);
  le.flush(), await Kh(le, _).finally(() => le.deleteSync(_)), le.bindBuffer(le.PIXEL_PACK_BUFFER, w), le.getBufferSubData(
    le.PIXEL_PACK_BUFFER,
    0,
    new DataView(o.buffer()),
    o.byteOffset,
    o.byteLength
  ), le.bindBuffer(le.PIXEL_PACK_BUFFER, null), le.deleteBuffer(w);
}, Kh = (r, o) => new Promise(
  (n, l) => function y() {
    const v = r.clientWaitSync(o, 0, 0);
    if (v === r.WAIT_FAILED)
      return l(new Error("GPU operations complete wait failed"));
    if (v === r.CONDITION_SATISFIED || v === r.ALREADY_SIGNALED)
      return n();
    fo.setTimeout(y, 2);
  }()
);
function Yh(r = 256, o = 128) {
  const n = document.createElement("canvas");
  return n.width = r, n.height = o, n;
}
function Xh(r = 256, o = 128) {
  return new OffscreenCanvas(r, o);
}
function Ps(r = 256, o = 128) {
  return As ? Xh(r, o) : Yh(r, o);
}
const mo = (r = {}) => {
  const o = ({ displayWidth: l, displayHeight: y, visibleRect: v = null }) => {
    let w = v?.x ?? 0, _ = v?.y ?? 0, D = v?.width ?? l, k = v?.height ?? y;
    if (r.crop) {
      const [B, J, se, X] = r.crop(D, k);
      [w, _, D, k] = [w + B, _ + J, se, X];
    }
    return [l, y] = [D, k], {
      visibleRect: { x: w, y: _, width: D, height: k },
      displayWidth: l,
      displayHeight: y,
      horizontalFlip: !!r.horizontalFlip
    };
  };
  return { getSourceOptions: (l) => {
    let y = l instanceof HTMLVideoElement ? l.videoWidth : l.width, v = l instanceof HTMLVideoElement ? l.videoHeight : l.height;
    return o({ displayWidth: y, displayHeight: v });
  }, getFrameOptions: o };
};
class Gn {
  constructor(o, n = {}, l = null) {
    fe(this, "_source", null);
    fe(this, "_visibleRect", { x: 0, y: 0, width: 0, height: 0 });
    fe(this, "_deleter");
    fe(this, "horizontalFlip", !1);
    const y = o instanceof HTMLVideoElement ? o.videoWidth : o.width, v = o instanceof HTMLVideoElement ? o.videoHeight : o.height;
    this._visibleRect.x = n.visibleRect?.x ?? 0, this._visibleRect.y = n.visibleRect?.y ?? 0, this._visibleRect.width = n.visibleRect?.width ?? y, this._visibleRect.height = n.visibleRect?.height ?? v, this.horizontalFlip = n.horizontalFlip ?? this.horizontalFlip, o.width = y, o.height = v, this._source = o, this._deleter = l;
  }
  /** @internal */
  get texture() {
    return this._source?.width == this.displayWidth && this._source?.height == this.displayHeight ? this._source : null;
  }
  get displayWidth() {
    return this._visibleRect.width;
  }
  get displayHeight() {
    return this._visibleRect.height;
  }
  /** Pixel format of the Frame */
  get format() {
    return this._source ? zh ? "RGB" : "RGBA" : null;
  }
  /** @returns The number of bytes required to hold the Frame pixels */
  allocationSize() {
    if (!this.format)
      throw new Error("Failed to execute 'allocationSize' on 'Frame': Frame is closed.");
    const { width: o, height: n } = { width: this._visibleRect.width, height: this._visibleRect.height };
    return o * n * this.format.length;
  }
  /** Copies the Frame pixels to the destination */
  async copyTo(o) {
    if (!this._source)
      throw new Error("Failed to execute 'copyTo' on 'Frame': Frame is closed.");
    return await Hh(this._source, o, this._visibleRect, this.format), [];
  }
  /** Releases GPU resources held by the Frame */
  close() {
    this._deleter && this._deleter(), this._source = null;
  }
}
var Zh = Object.defineProperty, qh = Object.getOwnPropertyDescriptor, Qh = (r, o, n, l) => {
  for (var y = l > 1 ? void 0 : l ? qh(o, n) : o, v = r.length - 1, w; v >= 0; v--)
    (w = r[v]) && (y = (l ? w(o, n, y) : w(y)) || y);
  return l && y && Zh(o, n, y), y;
}, Ds;
let Jh = class {
  constructor(o) {
    fe(this, "_src");
    /** @internal */
    fe(this, "kind", "image");
    this._src = o;
  }
  async *[Ds = Symbol.asyncIterator](o) {
    const n = await Uh(this._src), l = mo(o);
    yield new Gn(n, l.getSourceOptions(n), () => {
      URL.revokeObjectURL(n.src), n.src = "";
    });
  }
};
Qh([
  co(30)
], Jh.prototype, Ds, 1);
var ep = Object.defineProperty, tp = Object.getOwnPropertyDescriptor, rp = (r, o, n, l) => {
  for (var y = l > 1 ? void 0 : l ? tp(o, n) : o, v = r.length - 1, w; v >= 0; v--)
    (w = r[v]) && (y = (l ? w(o, n, y) : w(y)) || y);
  return l && y && ep(o, n, y), y;
}, ks, Ut;
const Ls = (Ut = class {
  /**
   * Creates MediaStream input from {@link https://developer.mozilla.org/en-US/docs/Web/API/MediaStream/MediaStream | MediaStream}
   * @example
   * ```ts
   * const stream = new MediaStream(
   *  await navigator.mediaDevices.getUserMedia({ video: true })
   * )
   * ```
   */
  constructor(o) {
    // @ts-expect-error: Property '_stream' has no initializer and is not definitely assigned in the constructor.
    fe(this, "_stream");
    /** @internal */
    fe(this, "kind", "stream");
    if (!Ut.cache.has(o))
      Ut.cache.set(o, this);
    else
      return Ut.cache.get(o);
    this._stream = o;
  }
  async *[ks = Symbol.asyncIterator](o) {
    const n = mo(o);
    if ("MediaStreamTrackProcessor" in window) {
      const y = new MediaStreamTrackProcessor({ track: this._stream.getVideoTracks()[0] }).readable.getReader();
      try {
        for (; ; ) {
          const { done: v, value: w } = await y.read();
          if (v)
            return;
          const _ = new VideoFrame(w, n.getFrameOptions(w));
          _.horizontalFlip = o?.horizontalFlip ?? !0, w.close(), yield _;
        }
      } finally {
        y.releaseLock();
      }
    } else {
      const l = await $n(this._stream), y = "requestVideoFrameCallback" in l ? l.requestVideoFrameCallback.bind(l) : requestAnimationFrame;
      for (; !l.paused; )
        await new Promise(y), yield new Gn(l, n.getSourceOptions(l));
      URL.revokeObjectURL(l.src), l.src = "", l.srcObject = null;
    }
  }
  /** Stops underlying media stream */
  stop() {
    for (const o of this._stream.getVideoTracks())
      o.stop();
    this._stream && Ut.cache.delete(this._stream);
  }
}, fe(Ut, "cache", /* @__PURE__ */ new WeakMap()), Ut);
rp([
  co(30)
], Ls.prototype, ks, 1);
let Ci = Ls;
var np = Object.defineProperty, ip = Object.getOwnPropertyDescriptor, op = (r, o, n, l) => {
  for (var y = l > 1 ? void 0 : l ? ip(o, n) : o, v = r.length - 1, w; v >= 0; v--)
    (w = r[v]) && (y = (l ? w(o, n, y) : w(y)) || y);
  return l && y && np(o, n, y), y;
}, Ms;
const ap = {
  loop: !1
};
class sp {
  /** @param options - options to be merged with {@link defaultVideoOptions} */
  constructor(o, n) {
    fe(this, "_src");
    fe(this, "_options");
    fe(this, "_video", null);
    /** @internal */
    fe(this, "kind", "video");
    this._src = o, this._options = {
      ...ap,
      ...n
    };
  }
  async *[Ms = Symbol.asyncIterator](o) {
    const n = await (this._video ?? (this._video = $n(this._src, this._options))), l = mo(o), y = "requestVideoFrameCallback" in n ? n.requestVideoFrameCallback.bind(n) : requestAnimationFrame;
    for (; !n.paused; )
      await new Promise(y), yield new Gn(n, l.getSourceOptions(n));
  }
  /** Stops underlying video */
  stop() {
    this._video && this._video.then(
      (o) => (URL.revokeObjectURL(o.src), o.src = "", o.srcObject = null)
    ), this._video = null;
  }
}
op([
  co(30)
], sp.prototype, Ms, 1);
const up = `#define GLSLIFY 1
attribute vec2 a_position;
varying vec2 v_tex_uv;

void main() {
  v_tex_uv.x = (a_position.x + 1.) * .5;
  v_tex_uv.y = 1. - (a_position.y + 1.) * .5;
  gl_Position = vec4(a_position, 0., 1.);
}
`, lp = `precision highp float;
#define GLSLIFY 1

varying vec2 v_tex_uv;

uniform sampler2D u_texture;
uniform vec2 u_viewsize;

/**
 * u_filters.x - denoising algorithm to use
 *   1 - FSR
 *   2 - Bilateral
 *   any other value - none
 * u_filters.y - light correction coefficient in [0, 2]
 *   1 - no light correction
 */
uniform vec2 u_filters;

// https://github.com/glslify/glslify#importing-a-glsl-module
// https://github.com/glslify/glslify#passing-references-between-modules
// Copyright (c) 2021 Advanced Micro Devices, Inc. All rights reserved.
//
// Permission is hereby granted, free of charge, to any person obtaining a copy
// of this software and associated documentation files (the "Software"), to deal
// in the Software without restriction, including without limitation the rights
// to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
// copies of the Software, and to permit persons to whom the Software is
// furnished to do so, subject to the following conditions:
//
// The above copyright notice and this permission notice shall be included in
// all copies or substantial portions of the Software.
//
// THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
// IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
// FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT.  IN NO EVENT SHALL THE
// AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
// LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
// OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
// THE SOFTWARE.
//
// FidelityFX FSR v1.0.2 by AMD
// ported to mpv by agyild - https://gist.github.com/agyild/82219c545228d70c5604f865ce0b0ce5
// ported to WebGL by goingdigital - https://www.shadertoy.com/view/stXSWB
// using colorspace functions from tobspr - https://github.com/tobspr/GLSL-Color-Spaces/blob/master/ColorSpaces.inc.glsl

#define SHARPENING 2.0 // Sharpening intensity: Adjusts sharpening intensity by averaging the original pixels to the sharpened result. 1.0 is the unmodified default. 0.0 to 1.0.
#define CONTRAST 2.0 // Adjusts the range the shader adapts to high contrast (0 is not all the way off). Higher values = more high contrast sharpening. 0.0 to 1.0.
#define PERFORMANCE 1 // Whether to use optimizations for performance with loss of quality

// Used to convert from linear RGB to XYZ space
const mat3 RGB_2_XYZ_2717090884 = (mat3(
  0.4124564, 0.2126729, 0.0193339,
  0.3575761, 0.7151522, 0.1191920,
  0.1804375, 0.0721750, 0.9503041
));

// Used to convert from XYZ to linear RGB space
const mat3 XYZ_2_RGB_2717090884 = (mat3(
   3.2404542,-0.9692660, 0.0556434,
  -1.5371385, 1.8760108,-0.2040259,
  -0.4985314, 0.0415560, 1.0572252
));
// Converts a color from linear RGB to XYZ space
vec3 rgb_to_xyz_2717090884(vec3 rgb) {
  return RGB_2_XYZ_2717090884 * rgb;
}

// Converts a color from XYZ to linear RGB space
vec3 xyz_to_rgb_2717090884(vec3 xyz) {
  return XYZ_2_RGB_2717090884 * xyz;
}

/* EASU stage
*
* This takes a reduced resolution source, and scales it up while preserving detail.
*
* Updates:
*   stretch definition fixed. Thanks nehon for the bug report!
*/

vec3 FsrEasuCF(vec2 p) {
  vec2 uv = (p + .5) / u_viewsize;
  vec4 color = texture2D(u_texture, uv);
    return rgb_to_xyz_2717090884(color.rgb);
}

/**** EASU ****/
void FsrEasuCon(
  out vec4 con0,
  out vec4 con1,
  out vec4 con2,
  out vec4 con3,
  // This the rendered image resolution being upscaled
  vec2 inputViewportInPixels,
  // This is the resolution of the resource containing the input image (useful for dynamic resolution)
  vec2 inputSizeInPixels,
  // This is the display resolution which the input image gets upscaled to
  vec2 outputSizeInPixels
)
{
  // Output integer position to a pixel position in viewport.
  con0 = vec4(
    inputViewportInPixels.x/outputSizeInPixels.x,
    inputViewportInPixels.y/outputSizeInPixels.y,
    .5*inputViewportInPixels.x/outputSizeInPixels.x-.5,
    .5*inputViewportInPixels.y/outputSizeInPixels.y-.5
  );
  // Viewport pixel position to normalized image space.
  // This is used to get upper-left of 'F' tap.
  con1 = vec4(1.,1.,1.,-1.)/inputSizeInPixels.xyxy;
  // Centers of gather4, first offset from upper-left of 'F'.
  //      +---+---+
  //      |   |   |
  //      +--(0)--+
  //      | b | c |
  //  +---F---+---+---+
  //  | e | f | g | h |
  //  +--(1)--+--(2)--+
  //  | i | j | k | l |
  //  +---+---+---+---+
  //      | n | o |
  //      +--(3)--+
  //      |   |   |
  //      +---+---+
  // These are from (0) instead of 'F'.
  con2 = vec4(-1.,2.,1.,2.)/inputSizeInPixels.xyxy;
  con3 = vec4(0.,4.,0.,0.)/inputSizeInPixels.xyxy;
}

// Filtering for a given tap for the scalar.
void FsrEasuTapF(
  inout vec3 aC, // Accumulated color, with negative lobe.
  inout float aW, // Accumulated weight.
  vec2 off_0, // Pixel offset from resolve position to tap.
  vec2 dir_0, // Gradient direction.
  vec2 len_0, // Length.
  float lob_0, // Negative lobe strength.
  float clp_0, // Clipping point.
  vec3 c_0
)
{
  // Tap color.
  // Rotate offset by direction.
  vec2 v = vec2(dot(off_0, dir_0), dot(off_0,vec2(-dir_0.y,dir_0.x)));
  // Anisotropy.
  v *= len_0;
  // Compute distance^2.
  float d2 = min(dot(v,v),clp_0);
  // Limit to the window as at corner, 2 taps can easily be outside.
  // Approximation of lancos2 without sin() or rcp(), or sqrt() to get x.
  //  (25/16 * (2/5 * x^2 - 1)^2 - (25/16 - 1)) * (1/4 * x^2 - 1)^2
  //  |_______________________________________|   |_______________|
  //                   base                             window
  // The general form of the 'base' is,
  //  (a*(b*x^2-1)^2-(a-1))
  // Where 'a=1/(2*b-b^2)' and 'b' moves around the negative lobe.
  float wB = .4 * d2 - 1.;
  float wA = lob_0 * d2 -1.;
  wB *= wB;
  wA *= wA;
  wB = 1.5625*wB-.5625;
  float w=  wB * wA;
  // Do weighted average.
  aC += c_0*w;
  aW += w;
}

//------------------------------------------------------------------------------------------------------------------------------
// Accumulate direction and length.
void FsrEasuSetF(
    inout vec2 dir,
    inout float len,
    float w,
    float lA,float lB,float lC,float lD,float lE
)
{
  // Direction is the '+' diff.
  //    a
  //  b c d
  //    e
  // Then takes magnitude from abs average of both sides of 'c'.
  // Length converts gradient reversal to 0, smoothly to non-reversal at 1, shaped, then adding horz and vert terms.
  float lenX = max(abs(lD - lC), abs(lC - lB));
  float dirX = lD - lB;
  dir.x += dirX * w;
  lenX = clamp(abs(dirX)/lenX,0.,1.);
  lenX *= lenX;
  len += lenX * w;
  // Repeat for the y axis.
  float lenY = max(abs(lE - lC), abs(lC - lA));
  float dirY = lE - lA;
  dir.y += dirY * w;
  lenY = clamp(abs(dirY) / lenY,0.,1.);
  lenY *= lenY;
  len += lenY * w;
}

//------------------------------------------------------------------------------------------------------------------------------
void FsrEasuF(
  out vec3 pix,
  vec2 ip, // Integer pixel position in output.
  // Constants generated by FsrEasuCon().
  vec4 con0, // xy = output to input scale, zw = first pixel offset correction
  vec4 con1_0,
  vec4 con2_0,
  vec4 con3_0
)
{
  //------------------------------------------------------------------------------------------------------------------------------
  // Get position of 'f'.
  vec2 pp = ip * con0.xy + con0.zw; // Corresponding input pixel/subpixel
  vec2 fp = floor(pp);// fp = source nearest pixel
  pp -= fp; // pp = source subpixel

  //------------------------------------------------------------------------------------------------------------------------------
  // 12-tap kernel.
  //    b c
  //  e f g h
  //  i j k l
  //    n o
  // Gather 4 ordering.
  //  a b
  //  r g
  vec2 p0 = fp * con1_0.xy + con1_0.zw;
  
  // These are from p0 to avoid pulling two constants on pre-Navi hardware.
  vec2 p1 = p0 + con2_0.xy;
  vec2 p2 = p0 + con2_0.zw;
  vec2 p3 = p0 + con3_0.xy;

  // TextureGather is not available on WebGL2
  vec4 off = vec4(-.5,.5,-.5,.5)*con1_0.xxyy;
  // textureGather to texture offsets
  // x=west y=east z=north w=south
  vec3 bC = FsrEasuCF(p0 + off.xw); float bL = bC.g + 0.5 *(bC.r + bC.b);
  vec3 cC = FsrEasuCF(p0 + off.yw); float cL = cC.g + 0.5 *(cC.r + cC.b);
  vec3 iC = FsrEasuCF(p1 + off.xw); float iL = iC.g + 0.5 *(iC.r + iC.b);
  vec3 jC = FsrEasuCF(p1 + off.yw); float jL = jC.g + 0.5 *(jC.r + jC.b);
  vec3 fC = FsrEasuCF(p1 + off.yz); float fL = fC.g + 0.5 *(fC.r + fC.b);
  vec3 eC = FsrEasuCF(p1 + off.xz); float eL = eC.g + 0.5 *(eC.r + eC.b);
  vec3 kC = FsrEasuCF(p2 + off.xw); float kL = kC.g + 0.5 *(kC.r + kC.b);
  vec3 lC = FsrEasuCF(p2 + off.yw); float lL = lC.g + 0.5 *(lC.r + lC.b);
  vec3 hC = FsrEasuCF(p2 + off.yz); float hL = hC.g + 0.5 *(hC.r + hC.b);
  vec3 gC = FsrEasuCF(p2 + off.xz); float gL = gC.g + 0.5 *(gC.r + gC.b);
  vec3 oC = FsrEasuCF(p3 + off.yz); float oL = oC.g + 0.5 *(oC.r + oC.b);
  vec3 nC = FsrEasuCF(p3 + off.xz); float nL = nC.g + 0.5 *(nC.r + nC.b);
 
  //------------------------------------------------------------------------------------------------------------------------------
  // Simplest multi-channel approximate luma possible (luma times 2, in 2 FMA/MAD).
  // Accumulate for bilinear interpolation.
  vec2 dir = vec2(0.);
  float len = 0.;

  FsrEasuSetF(dir, len, (1.-pp.x)*(1.-pp.y), bL, eL, fL, gL, jL);
  FsrEasuSetF(dir, len,    pp.x  *(1.-pp.y), cL, fL, gL, hL, kL);
  FsrEasuSetF(dir, len, (1.-pp.x)*  pp.y  , fL, iL, jL, kL, nL);
  FsrEasuSetF(dir, len,    pp.x  *  pp.y  , gL, jL, kL, lL, oL);

  //------------------------------------------------------------------------------------------------------------------------------
  // Normalize with approximation, and cleanup close to zero.
  vec2 dir2 = dir * dir;
  float dirR = dir2.x + dir2.y;
  bool zro = dirR < (1.0/32768.0);
  dirR = inversesqrt(dirR);
#if (PERFORMANCE == 1)
  if (zro) {
    vec4 w = vec4(0.0);
    w.x = (1.0 - pp.x) * (1.0 - pp.y);
    w.y =        pp.x  * (1.0 - pp.y);
    w.z = (1.0 - pp.x) *        pp.y;
    w.w =        pp.x  *        pp.y;
    pix.r = clamp(dot(w, vec4(fL, gL, jL, kL)), 0.0, 1.0);
    return;
  }
#elif (PERFORMANCE == 0)
  dirR = zro ? 1.0 : dirR;
  dir.x = zro ? 1.0 : dir.x;
#endif
  dir *= vec2(dirR);
  // Transform from {0 to 2} to {0 to 1} range, and shape with square.
  len = len * 0.5;
  len *= len;
  // Stretch kernel {1.0 vert|horz, to sqrt(2.0) on diagonal}.
  float stretch = dot(dir,dir) / (max(abs(dir.x), abs(dir.y)));
  // Anisotropic length after rotation,
  //  x := 1.0 lerp to 'stretch' on edges
  //  y := 1.0 lerp to 2x on edges
  vec2 len2 = vec2(1. +(stretch-1.0)*len, 1. -.5 * len);
  // Based on the amount of 'edge',
  // the window shifts from +/-{sqrt(2.0) to slightly beyond 2.0}.
  float lob = .5 - .29 * len;
  // Set distance^2 clipping point to the end of the adjustable window.
  float clp = 1./lob;

  //------------------------------------------------------------------------------------------------------------------------------
  // Accumulation mixed with min/max of 4 nearest.
  //    b c
  //  e f g h
  //  i j k l
  //    n o
  // Accumulation.
  vec3 aC = vec3(0);
  float aW = 0.;
  FsrEasuTapF(aC, aW, vec2( 0.,-1.)-pp, dir, len2, lob, clp, bC);
  FsrEasuTapF(aC, aW, vec2( 1.,-1.)-pp, dir, len2, lob, clp, cC);
  FsrEasuTapF(aC, aW, vec2(-1., 1.)-pp, dir, len2, lob, clp, iC);
  FsrEasuTapF(aC, aW, vec2( 0., 1.)-pp, dir, len2, lob, clp, jC);
  FsrEasuTapF(aC, aW, vec2( 0., 0.)-pp, dir, len2, lob, clp, fC);
  FsrEasuTapF(aC, aW, vec2(-1., 0.)-pp, dir, len2, lob, clp, eC);
  FsrEasuTapF(aC, aW, vec2( 1., 1.)-pp, dir, len2, lob, clp, kC);
  FsrEasuTapF(aC, aW, vec2( 2., 1.)-pp, dir, len2, lob, clp, lC);
  FsrEasuTapF(aC, aW, vec2( 2., 0.)-pp, dir, len2, lob, clp, hC);
  FsrEasuTapF(aC, aW, vec2( 1., 0.)-pp, dir, len2, lob, clp, gC);
  FsrEasuTapF(aC, aW, vec2( 1., 2.)-pp, dir, len2, lob, clp, oC);
  FsrEasuTapF(aC, aW, vec2( 0., 2.)-pp, dir, len2, lob, clp, nC);
  //------------------------------------------------------------------------------------------------------------------------------
  // Normalize and dering.
#if (PERFORMANCE == 1)
pix = aC/aW;
#elif (PERFORMANCE == 0)
  vec3 min4 = min(min(fC,gC),min(jC,kC));
  vec3 max4 = max(max(fC,gC),max(jC,kC));
  pix=min(max4,max(min4,aC/aW));
#endif
}

void EASU( out vec4 fragColor, in vec2 fragCoord )
{
  vec3 c;
  vec4 con0,con1,con2,con3;
  
  // "rendersize" refers to size of source image before upscaling.
  vec2 rendersize = u_viewsize;
  FsrEasuCon(
    con0, con1, con2, con3, rendersize, rendersize, rendersize
  );
  FsrEasuF(c, fragCoord, con0, con1, con2, con3);
  
  fragColor = vec4(xyz_to_rgb_2717090884(c.xyz), 1);
}

vec4 getPixel(vec2 pos) {
  vec2 coord = (pos + .5) / u_viewsize;
  coord.y = 1.0 - coord.y;
  return texture2D(u_texture, coord);
}

vec4 fsr_easu_2717090884(vec2 uv) {
  vec4 e = getPixel(gl_FragCoord.xy);

    
  vec4 e_xyz = vec4(rgb_to_xyz_2717090884(e.rgb), 1);
  EASU(e_xyz, (gl_FragCoord.xy + 0.5) / u_viewsize);  
  
  // fetch a 3x3 neighborhood around the pixel 'e',
  //  a b c
  //  d(e)f
  //  g h i 
  vec3 a = getPixel(gl_FragCoord.xy + vec2(-1.0,-1.0)).rgb;
  vec3 b = getPixel(gl_FragCoord.xy + vec2( 0.0,-1.0)).rgb;
  vec3 c = getPixel(gl_FragCoord.xy + vec2( 1.0,-1.0)).rgb;
  vec3 f = getPixel(gl_FragCoord.xy + vec2( 1.0, 0.0)).rgb;
  vec3 g = getPixel(gl_FragCoord.xy + vec2(-1.0, 1.0)).rgb;
  vec3 h = getPixel(gl_FragCoord.xy + vec2( 0.0, 1.0)).rgb;
  vec3 d = getPixel(gl_FragCoord.xy + vec2(-1.0, 0.0)).rgb;
  vec3 i = getPixel(gl_FragCoord.xy + vec2( 1.0, 1.0)).rgb;;
  // Soft min and max.
  //  a b c     b
  //  d e f * 0.5 + d e f * 0.5
  //  g h i     h
  // These are 2.0x bigger (factored out the extra multiply).

  vec3 mnRGB = min(min(min(d, e.rgb), min(f, b)), h);
  vec3 mnRGB2 = min(mnRGB, min(min(a, c), min(g, i)));
  mnRGB += mnRGB2;

  vec3 mxRGB = max(max(max(d, e.rgb), max(f, b)), h);
  vec3 mxRGB2 = max(mxRGB, max(max(a, c), max(g, i)));
  mxRGB += mxRGB2;

  // Smooth minimum distance to signal limit divided by smooth max.
  vec3 rcpMRGB = 1.0 / mxRGB;
  vec3 ampRGB = clamp(min(mnRGB, 2.0 - mxRGB) * rcpMRGB, 0.0, 1.0);

  // Shaping amount of sharpening.
  ampRGB = inversesqrt(ampRGB);

  float peak = -3.0 * clamp(CONTRAST, 0.0, 1.0) + 8.0;
  vec3 wRGB = -(1.0 / (ampRGB * peak));

  vec3 rcpWeightRGB = 1.0 / (4.0 * wRGB + 1.0);

  //          0 w 0
  //  Filter shape: w 1 w
  //          0 w 0
  vec3 window = (b + d) + (f + h);
  vec3 outColor = clamp((window * wRGB + e.rgb) * rcpWeightRGB, 0.0, 1.0);

  return vec4(mix(e.rgb, outColor, SHARPENING), e.a);
}

// https://github.com/glslify/glslify#exporting-a-glsl-module

#define DIFF 1.0
#define RADIUS 4.0

void bilateral_iter_3977570374(vec2 random_dir, vec2 radius, float diff, vec4 pixel, vec2 uv, inout vec3 result, inout float totalWeight)
{
  vec2 dir = random_dir * radius;
  vec3 randomPixel = texture2D(u_texture, uv + dir).xyz;
  vec3 delta = randomPixel - pixel.rgb;
  float weight = exp(-dot(delta, delta) / diff);
  result += randomPixel * weight;
  totalWeight += weight;
}

vec4 bilateral(vec2 uv)
{
  vec2 radius = (RADIUS / u_viewsize);
  float diff = DIFF / 255.0;
  vec4 pixel = texture2D(u_texture, uv);
  vec3 result = vec3(0.0, 0.0, 0.0);
  float totalWeight = 0.0;

  // uroll loop and substitute precalculated random vectors for GLSL 1.0 ES:

  bilateral_iter_3977570374(vec2(-0.886051297,0.447155535), radius, diff, pixel, uv, result, totalWeight);
  bilateral_iter_3977570374(vec2(0.270759493,0.537728608), radius, diff, pixel, uv, result, totalWeight);
  bilateral_iter_3977570374(vec2(-0.896959424,0.440607518), radius, diff, pixel, uv, result, totalWeight);
  bilateral_iter_3977570374(vec2(-0.804274619,0.125076547), radius, diff, pixel, uv, result, totalWeight);
  bilateral_iter_3977570374(vec2(0.373693645,0.240383312), radius, diff, pixel, uv, result, totalWeight);
  bilateral_iter_3977570374(vec2(-0.850325704,-0.192106694), radius, diff, pixel, uv, result, totalWeight);
  bilateral_iter_3977570374(vec2(-0.453608066,0.889671504), radius, diff, pixel, uv, result, totalWeight);
  bilateral_iter_3977570374(vec2(-0.280496657,0.206442386), radius, diff, pixel, uv, result, totalWeight);
  bilateral_iter_3977570374(vec2(0.840040743,-0.36367026), radius, diff, pixel, uv, result, totalWeight);
  bilateral_iter_3977570374(vec2(-0.151598319,-0.884027064), radius, diff, pixel, uv, result, totalWeight);
  bilateral_iter_3977570374(vec2(-0.221440807,0.593896627), radius, diff, pixel, uv, result, totalWeight);
  bilateral_iter_3977570374(vec2(-0.797481239,-0.243254974), radius, diff, pixel, uv, result, totalWeight);
  bilateral_iter_3977570374(vec2(0.48824361,0.225083455), radius, diff, pixel, uv, result, totalWeight);
  bilateral_iter_3977570374(vec2(-0.0387817062,0.838459492), radius, diff, pixel, uv, result, totalWeight);
  bilateral_iter_3977570374(vec2(0.92897892,-0.133588716), radius, diff, pixel, uv, result, totalWeight);
  bilateral_iter_3977570374(vec2(-0.693672359,-0.706737161), radius, diff, pixel, uv, result, totalWeight);
  
  result = result / totalWeight;    
  return vec4(result, pixel.a);
}

// https://github.com/glslify/glslify#exporting-a-glsl-module

vec3 rgb2hsv(vec3 c)
{
  vec4 K = vec4(0.0, -1.0 / 3.0, 2.0 / 3.0, -1.0);
  vec4 p = mix(vec4(c.bg, K.wz), vec4(c.gb, K.xy), step(c.b, c.g));
  vec4 q = mix(vec4(p.xyw, c.r), vec4(c.r, p.yzx), step(p.x, c.r));
  float d = q.x - min(q.w, q.y);
  float e = 1.0e-10;
  return vec3(abs(q.z + (q.w - q.y) / (6.0 * d + e)), d / (q.x + e), q.x);
}

vec3 hsv2rgb(vec3 c)
{
  vec4 K = vec4(1.0, 2.0 / 3.0, 1.0 / 3.0, 3.0);
  vec3 p = abs(fract(c.xxx + K.xyz) * 6.0 - K.www);
  return c.z * mix(K.xxx, clamp(p - K.xxx, 0.0, 1.0), c.y);
}

vec4 light_correction_1117569599(vec4 c, float s)
{
  vec3 hsv = rgb2hsv(c.rgb);
  hsv.y = pow(hsv.y, pow(s, -0.5));
  hsv.z = pow(hsv.z, s);
  vec3 rgb = hsv2rgb(hsv);
  return vec4(rgb, c.a);
}

// https://github.com/glslify/glslify#exporting-a-glsl-module

void main() {
  vec4 c;

  if (u_filters.x == 1.)
    c = fsr_easu_2717090884(v_tex_uv);
  else if (u_filters.x == 2.)
    c = bilateral(v_tex_uv);
  else
    c = texture2D(u_texture, v_tex_uv);

  if (u_filters.y != 1.)
    c = light_correction_1117569599(c, u_filters.y);

  gl_FragColor = c;
}`, fp = (r, o, n) => {
  const l = r.createProgram();
  return r.attachShader(l, o), r.attachShader(l, n), r.linkProgram(l), r.useProgram(l), l;
}, Ca = (r, o, n) => {
  const l = r.createShader(o);
  return r.shaderSource(l, n), r.compileShader(l), l;
}, cp = (r) => {
  const o = r.createTexture();
  return r.bindTexture(r.TEXTURE_2D, o), r.texImage2D(r.TEXTURE_2D, 0, r.RGB, 1, 1, 0, r.RGB, r.UNSIGNED_BYTE, null), r.texParameteri(r.TEXTURE_2D, r.TEXTURE_WRAP_S, r.CLAMP_TO_EDGE), r.texParameteri(r.TEXTURE_2D, r.TEXTURE_WRAP_T, r.CLAMP_TO_EDGE), r.texParameteri(r.TEXTURE_2D, r.TEXTURE_MIN_FILTER, r.NEAREST), r.texParameteri(r.TEXTURE_2D, r.TEXTURE_MAG_FILTER, r.LINEAR), r.bindTexture(r.TEXTURE_2D, null), o;
}, Fa = (r, o) => {
  let n = 0, l = 1;
  const y = document.createElement("canvas"), v = y.captureStream(30), w = y.getContext("webgl"), _ = Ca(w, w.VERTEX_SHADER, up), D = Ca(w, w.FRAGMENT_SHADER, lp), k = fp(w, _, D), B = cp(w);
  w.bindTexture(w.TEXTURE_2D, B);
  const J = w.getAttribLocation(k, "a_position"), se = w.createBuffer();
  w.bindBuffer(w.ARRAY_BUFFER, se), w.bufferData(
    w.ARRAY_BUFFER,
    // prettier-ignore
    new Float32Array([
      -1,
      -1,
      1,
      -1,
      -1,
      1,
      -1,
      1,
      1,
      -1,
      1,
      1
    ]),
    w.STATIC_DRAW
  ), w.enableVertexAttribArray(J), w.vertexAttribPointer(J, 2, w.FLOAT, !1, 0, 0);
  const X = w.getUniformLocation(k, "u_viewsize"), z = w.getUniformLocation(k, "u_filters");
  w.uniform2fv(z, new Float32Array([n, l])), $n(r).then((_e) => {
    const de = _e.requestVideoFrameCallback?.bind(_e) || fo.requestAnimationFrame;
    (function re() {
      _e.ended || !v.active || (de(re), w.texImage2D(w.TEXTURE_2D, 0, w.RGBA, w.RGBA, w.UNSIGNED_BYTE, _e), (y.width !== _e.videoWidth || y.height !== _e.videoHeight) && (w.viewport(0, 0, y.width = _e.videoWidth, y.height = _e.videoHeight), w.uniform2fv(X, new Float32Array([y.width, y.height]))), w.drawArrays(w.TRIANGLES, 0, 6));
    })();
  }), w.deleteProgram(k), w.deleteShader(D), w.deleteShader(_);
  const pe = {
    /** Enhanced stream */
    stream: v,
    /**
     * @param {number} value - denoise algorithm to use
     *  - Pass 1 to use FSR algorithm
     *  - Pass 2 to use Bilateral algorithm
     *  - Pass any other number to disabled denoising
     */
    denoise(_e) {
      w.uniform2fv(z, new Float32Array([n = _e, l]));
    },
    /**
     * @param {number} value - exposure compensation coefficient in [0, 2] range
     *  - Pass value less than to 1 increase exposure
     *  - Pass value greater than 1 to reduce exposure
     * See the {@link https://fujifilm-dsc.com/en/manual/x-pro2/images/exp_exposure_480.gif | image} for visual example
     * Inspired by MediaTrackConstraints {@link https://developer.mozilla.org/en-US/docs/Web/API/MediaTrackConstraints#exposurecompensation | Exposure compensation} parameter.
     */
    exposureCompensation(_e) {
      w.uniform2fv(z, new Float32Array([n, l = _e]));
    }
  };
  if (o)
    for (const [_e, de] of Object.entries(o))
      pe[_e](de);
  return pe;
}, dp = typeof screen < "u" && screen.height > screen.width, Xi = {
  facingMode: "user",
  width: { min: 640, ideal: 1280, max: 1920 },
  height: { min: 480, ideal: 720, max: 1080 },
  resizeMode: { ideal: "crop-and-scale" }
};
dp && (delete Xi.width, delete Xi.height);
class Bb {
  /**
   * @param videoConstraints - constraints to be merged with {@link defaultVideoConstraints}
   * and to be passed to {@link https://developer.mozilla.org/en-US/docs/Web/API/MediaDevices/getUserMedia | navigator.mediaDevices.getUserMedia()}
   */
  constructor(o) {
    fe(this, "_stream", null);
    fe(this, "_constraints");
    fe(this, "_preferences", {});
    fe(this, "_enhancer", null);
    /** @internal */
    fe(this, "kind", "stream");
    this._constraints = {
      ...Xi,
      ...o
    };
  }
  /**
   * Specifies if the webcam is currently active.
   *
   * The webcam is considered active if it has been started and has not been stopped afterwards
   */
  get active() {
    return !!this._stream;
  }
  /**
   * @param {number} algorithm - denoise algorithm to use
   *  - Pass false or 0 to disabled denoising
   *  - Pass true or 1 to use FSR algorithm
   *  - Pass 2 to use Bilateral algorithm
   * @internal
   */
  denoise(o) {
    this._preferences.denoise = Number(o), this._enhancer?.denoise(this._preferences.denoise);
  }
  /**
   * @param {number} coefficient - exposure compensation coefficient in [0, 2] range
   *  - Pass value less than 1 to increase exposure
   *  - Pass value greater than 1 to reduce exposure
   * See the {@link https://fujifilm-dsc.com/en/manual/x-pro2/images/exp_exposure_480.gif | image} for visual example
   * @internal
   */
  setExposureCompensation(o) {
    this._preferences.exposureCompensation = o, this._enhancer?.exposureCompensation(this._preferences.exposureCompensation);
  }
  /**
   * Manually starts webcam
   *
   * > Ordinary webcam is lazily started during async iteration over it.
   * >
   * > But sometimes you may want to manually pre-start webcam e.g during parallel creation of a {@link Player} instance:
   * > ```ts
   * > const [webcam, player] = await Promise.all([
   * >  new Webcam().start(),
   * >  Player.create({ clientToken: "xxx-xxx-xxx" }),
   * > ])
   * >
   * > player.use(webcam)
   * > ```
   */
  async start() {
    return await (this._stream ?? (this._stream = Ra(this._constraints))), this;
  }
  /**
   * Yields a sequence of {@link Frame | frames}
   * @internal
   */
  async *[Symbol.asyncIterator](o) {
    const n = await (this._stream ?? (this._stream = Ra(this._constraints))), l = this._enhancer = Fi(this._preferences) ? Fa(n, this._preferences) : null;
    let v = new Ci(l ? l.stream : n)[Symbol.asyncIterator]({ horizontalFlip: !0, ...o }), w;
    for (; ; ) {
      if (!this._enhancer && Fi(this._preferences)) {
        const k = this._enhancer = Fa(n, this._preferences);
        v = new Ci(k.stream)[Symbol.asyncIterator]({ horizontalFlip: !0, ...o });
      }
      this._enhancer && !Fi(this._preferences) && (this._enhancer.stream.getTracks().forEach((B) => B.stop()), this._enhancer = null, v = new Ci(n)[Symbol.asyncIterator]({ horizontalFlip: !0, ...o }));
      const { done: _, value: D } = await v.next(w);
      if (_)
        break;
      w = yield D;
    }
    this.stop();
  }
  /** Turns off webcam */
  stop() {
    this._stream && this._stream.then((o) => o.getTracks().forEach((n) => n.stop())), this._enhancer && this._enhancer.stream.getTracks().forEach((o) => o.stop()), this._stream = null, this._enhancer = null;
  }
}
const Ra = async (r) => {
  if (typeof navigator.mediaDevices > "u")
    throw new Error(
      `SecureContext is required to access webcam
It‘s likely you need to set up HTTPS/TLS for your website
See https://developer.mozilla.org/en-US/docs/Web/API/MediaDevices/getUserMedia#Encryption_based_security for details `
    );
  return await navigator.mediaDevices.getUserMedia({ video: r });
}, Fi = (r) => typeof r.exposureCompensation == "number" && r.exposureCompensation !== 1 || r.denoise === 1 || r.denoise === 2, Nb = { createVideoElement: $n };
let hp = "useandom-26T198340PX75pxJACKVERYMINDBUSHWOLF_GQZbfghjklqvwyzrict", Bs = (r = 21) => {
  let o = "", n = r;
  for (; n--; )
    o += hp[Math.random() * 64 | 0];
  return o;
};
const Ns = "KGZ1bmN0aW9uKCl7InVzZSBzdHJpY3QiO3ZhciBzPVVpbnQ4QXJyYXkseD1VaW50MTZBcnJheSxPPVVpbnQzMkFycmF5LEg9bmV3IHMoWzAsMCwwLDAsMCwwLDAsMCwxLDEsMSwxLDIsMiwyLDIsMywzLDMsMyw0LDQsNCw0LDUsNSw1LDUsMCwwLDAsMF0pLEk9bmV3IHMoWzAsMCwwLDAsMSwxLDIsMiwzLDMsNCw0LDUsNSw2LDYsNyw3LDgsOCw5LDksMTAsMTAsMTEsMTEsMTIsMTIsMTMsMTMsMCwwXSksbDE9bmV3IHMoWzE2LDE3LDE4LDAsOCw3LDksNiwxMCw1LDExLDQsMTIsMywxMywyLDE0LDEsMTVdKSxKPWZ1bmN0aW9uKHIsdCl7Zm9yKHZhciBhPW5ldyB4KDMxKSxuPTA7bjwzMTsrK24pYVtuXT10Kz0xPDxyW24tMV07Zm9yKHZhciB2PW5ldyBPKGFbMzBdKSxuPTE7bjwzMDsrK24pZm9yKHZhciBpPWFbbl07aTxhW24rMV07KytpKXZbaV09aS1hW25dPDw1fG47cmV0dXJuW2Esdl19LEs9SihILDIpLFE9S1swXSxjMT1LWzFdO1FbMjhdPTI1OCxjMVsyNThdPTI4O2Zvcih2YXIgczE9SihJLDApLGQxPXMxWzBdLFU9bmV3IHgoMzI3NjgpLHU9MDt1PDMyNzY4OysrdSl7dmFyIEM9KHUmNDM2OTApPj4+MXwodSYyMTg0NSk8PDE7Qz0oQyY1MjQyOCk+Pj4yfChDJjEzMTA3KTw8MixDPShDJjYxNjgwKT4+PjR8KEMmMzg1NSk8PDQsVVt1XT0oKEMmNjUyODApPj4+OHwoQyYyNTUpPDw4KT4+PjF9Zm9yKHZhciB6PWZ1bmN0aW9uKHQsYSxuKXtmb3IodmFyIHY9dC5sZW5ndGgsaT0wLGM9bmV3IHgoYSk7aTx2OysraSl0W2ldJiYrK2NbdFtpXS0xXTt2YXIgZj1uZXcgeChhKTtmb3IoaT0wO2k8YTsrK2kpZltpXT1mW2ktMV0rY1tpLTFdPDwxO3ZhciBvO2lmKG4pe289bmV3IHgoMTw8YSk7dmFyIGU9MTUtYTtmb3IoaT0wO2k8djsrK2kpaWYodFtpXSlmb3IodmFyIGw9aTw8NHx0W2ldLGI9YS10W2ldLGQ9Zlt0W2ldLTFdKys8PGIseT1kfCgxPDxiKS0xO2Q8PXk7KytkKW9bVVtkXT4+PmVdPWx9ZWxzZSBmb3Iobz1uZXcgeCh2KSxpPTA7aTx2OysraSl0W2ldJiYob1tpXT1VW2ZbdFtpXS0xXSsrXT4+PjE1LXRbaV0pO3JldHVybiBvfSxCPW5ldyBzKDI4OCksdT0wO3U8MTQ0OysrdSlCW3VdPTg7Zm9yKHZhciB1PTE0NDt1PDI1NjsrK3UpQlt1XT05O2Zvcih2YXIgdT0yNTY7dTwyODA7Kyt1KUJbdV09Nztmb3IodmFyIHU9MjgwO3U8Mjg4OysrdSlCW3VdPTg7Zm9yKHZhciBWPW5ldyBzKDMyKSx1PTA7dTwzMjsrK3UpVlt1XT01O3ZhciBnMT16KEIsOSwxKSx3MT16KFYsNSwxKSxXPWZ1bmN0aW9uKHIpe2Zvcih2YXIgdD1yWzBdLGE9MTthPHIubGVuZ3RoOysrYSlyW2FdPnQmJih0PXJbYV0pO3JldHVybiB0fSxoPWZ1bmN0aW9uKHIsdCxhKXt2YXIgbj10Lzh8MDtyZXR1cm4ocltuXXxyW24rMV08PDgpPj4odCY3KSZhfSxYPWZ1bmN0aW9uKHIsdCl7dmFyIGE9dC84fDA7cmV0dXJuKHJbYV18clthKzFdPDw4fHJbYSsyXTw8MTYpPj4odCY3KX0saDE9ZnVuY3Rpb24ocil7cmV0dXJuKHIrNykvOHwwfSxqPWZ1bmN0aW9uKHIsdCxhKXsodD09bnVsbHx8dDwwKSYmKHQ9MCksKGE9PW51bGx8fGE+ci5sZW5ndGgpJiYoYT1yLmxlbmd0aCk7dmFyIG49bmV3KHIuQllURVNfUEVSX0VMRU1FTlQ9PTI/eDpyLkJZVEVTX1BFUl9FTEVNRU5UPT00P086cykoYS10KTtyZXR1cm4gbi5zZXQoci5zdWJhcnJheSh0LGEpKSxufSxtMT1bInVuZXhwZWN0ZWQgRU9GIiwiaW52YWxpZCBibG9jayB0eXBlIiwiaW52YWxpZCBsZW5ndGgvbGl0ZXJhbCIsImludmFsaWQgZGlzdGFuY2UiLCJzdHJlYW0gZmluaXNoZWQiLCJubyBzdHJlYW0gaGFuZGxlciIsLCJubyBjYWxsYmFjayIsImludmFsaWQgVVRGLTggZGF0YSIsImV4dHJhIGZpZWxkIHRvbyBsb25nIiwiZGF0ZSBub3QgaW4gcmFuZ2UgMTk4MC0yMDk5IiwiZmlsZW5hbWUgdG9vIGxvbmciLCJzdHJlYW0gZmluaXNoaW5nIiwiaW52YWxpZCB6aXAgZGF0YSJdLGc9ZnVuY3Rpb24ocix0LGEpe3ZhciBuPW5ldyBFcnJvcih0fHxtMVtyXSk7aWYobi5jb2RlPXIsRXJyb3IuY2FwdHVyZVN0YWNrVHJhY2UmJkVycm9yLmNhcHR1cmVTdGFja1RyYWNlKG4sZyksIWEpdGhyb3cgbjtyZXR1cm4gbn0sYjE9ZnVuY3Rpb24ocix0LGEpe3ZhciBuPXIubGVuZ3RoO2lmKCFufHxhJiZhLmYmJiFhLmwpcmV0dXJuIHR8fG5ldyBzKDApO3ZhciB2PSF0fHxhLGk9IWF8fGEuaTthfHwoYT17fSksdHx8KHQ9bmV3IHMobiozKSk7dmFyIGM9ZnVuY3Rpb24odTEpe3ZhciB2MT10Lmxlbmd0aDtpZih1MT52MSl7dmFyIGYxPW5ldyBzKE1hdGgubWF4KHYxKjIsdTEpKTtmMS5zZXQodCksdD1mMX19LGY9YS5mfHwwLG89YS5wfHwwLGU9YS5ifHwwLGw9YS5sLGI9YS5kLGQ9YS5tLHk9YS5uLFI9bio4O2Rve2lmKCFsKXtmPWgocixvLDEpO3ZhciBZPWgocixvKzEsMyk7aWYobys9MyxZKWlmKFk9PTEpbD1nMSxiPXcxLGQ9OSx5PTU7ZWxzZSBpZihZPT0yKXt2YXIgUz1oKHIsbywzMSkrMjU3LHIxPWgocixvKzEwLDE1KSs0LHQxPVMraChyLG8rNSwzMSkrMTtvKz0xNDtmb3IodmFyIEY9bmV3IHModDEpLEc9bmV3IHMoMTkpLHc9MDt3PHIxOysrdylHW2wxW3ddXT1oKHIsbyt3KjMsNyk7bys9cjEqMztmb3IodmFyIGExPVcoRyksQjE9KDE8PGExKS0xLFIxPXooRyxhMSwxKSx3PTA7dzx0MTspe3ZhciBuMT1SMVtoKHIsbyxCMSldO28rPW4xJjE1O3ZhciBwPW4xPj4+NDtpZihwPDE2KUZbdysrXT1wO2Vsc2V7dmFyIFQ9MCxOPTA7Zm9yKHA9PTE2PyhOPTMraChyLG8sMyksbys9MixUPUZbdy0xXSk6cD09MTc/KE49MytoKHIsbyw3KSxvKz0zKTpwPT0xOCYmKE49MTEraChyLG8sMTI3KSxvKz03KTtOLS07KUZbdysrXT1UfX12YXIgaTE9Ri5zdWJhcnJheSgwLFMpLF89Ri5zdWJhcnJheShTKTtkPVcoaTEpLHk9VyhfKSxsPXooaTEsZCwxKSxiPXooXyx5LDEpfWVsc2UgZygxKTtlbHNle3ZhciBwPWgxKG8pKzQsTD1yW3AtNF18cltwLTNdPDw4LFo9cCtMO2lmKFo+bil7aSYmZygwKTticmVha312JiZjKGUrTCksdC5zZXQoci5zdWJhcnJheShwLFopLGUpLGEuYj1lKz1MLGEucD1vPVoqOCxhLmY9Zjtjb250aW51ZX1pZihvPlIpe2kmJmcoMCk7YnJlYWt9fXYmJmMoZSsxMzEwNzIpO2Zvcih2YXIgWTE9KDE8PGQpLTEsRjE9KDE8PHkpLTEsJD1vOzskPW8pe3ZhciBUPWxbWChyLG8pJlkxXSxrPVQ+Pj40O2lmKG8rPVQmMTUsbz5SKXtpJiZnKDApO2JyZWFrfWlmKFR8fGcoMiksazwyNTYpdFtlKytdPWs7ZWxzZSBpZihrPT0yNTYpeyQ9byxsPW51bGw7YnJlYWt9ZWxzZXt2YXIgbzE9ay0yNTQ7aWYoaz4yNjQpe3ZhciB3PWstMjU3LE09SFt3XTtvMT1oKHIsbywoMTw8TSktMSkrUVt3XSxvKz1NfXZhciBQPWJbWChyLG8pJkYxXSxEPVA+Pj40O1B8fGcoMyksbys9UCYxNTt2YXIgXz1kMVtEXTtpZihEPjMpe3ZhciBNPUlbRF07Xys9WChyLG8pJigxPDxNKS0xLG8rPU19aWYobz5SKXtpJiZnKDApO2JyZWFrfXYmJmMoZSsxMzEwNzIpO2Zvcih2YXIgZTE9ZStvMTtlPGUxO2UrPTQpdFtlXT10W2UtX10sdFtlKzFdPXRbZSsxLV9dLHRbZSsyXT10W2UrMi1fXSx0W2UrM109dFtlKzMtX107ZT1lMX19YS5sPWwsYS5wPSQsYS5iPWUsYS5mPWYsbCYmKGY9MSxhLm09ZCxhLmQ9YixhLm49eSl9d2hpbGUoIWYpO3JldHVybiBlPT10Lmxlbmd0aD90OmoodCwwLGUpfSx5MT1uZXcgcygwKSxFPWZ1bmN0aW9uKHIsdCl7cmV0dXJuIHJbdF18clt0KzFdPDw4fSxtPWZ1bmN0aW9uKHIsdCl7cmV0dXJuKHJbdF18clt0KzFdPDw4fHJbdCsyXTw8MTZ8clt0KzNdPDwyNCk+Pj4wfSxxPWZ1bmN0aW9uKHIsdCl7cmV0dXJuIG0ocix0KSttKHIsdCs0KSo0Mjk0OTY3Mjk2fTtmdW5jdGlvbiBFMShyLHQpe3JldHVybiBiMShyLHQpfXZhciBBPXR5cGVvZiBUZXh0RGVjb2RlcjwidSImJm5ldyBUZXh0RGVjb2RlcixwMT0wO3RyeXtBLmRlY29kZSh5MSx7c3RyZWFtOiEwfSkscDE9MX1jYXRjaHt9dmFyIEMxPWZ1bmN0aW9uKHIpe2Zvcih2YXIgdD0iIixhPTA7Oyl7dmFyIG49clthKytdLHY9KG4+MTI3KSsobj4yMjMpKyhuPjIzOSk7aWYoYSt2PnIubGVuZ3RoKXJldHVyblt0LGoocixhLTEpXTt2P3Y9PTM/KG49KChuJjE1KTw8MTh8KHJbYSsrXSY2Myk8PDEyfChyW2ErK10mNjMpPDw2fHJbYSsrXSY2MyktNjU1MzYsdCs9U3RyaW5nLmZyb21DaGFyQ29kZSg1NTI5NnxuPj4xMCw1NjMyMHxuJjEwMjMpKTp2JjE/dCs9U3RyaW5nLmZyb21DaGFyQ29kZSgobiYzMSk8PDZ8clthKytdJjYzKTp0Kz1TdHJpbmcuZnJvbUNoYXJDb2RlKChuJjE1KTw8MTJ8KHJbYSsrXSY2Myk8PDZ8clthKytdJjYzKTp0Kz1TdHJpbmcuZnJvbUNoYXJDb2RlKG4pfX07ZnVuY3Rpb24gUzEocix0KXtpZih0KXtmb3IodmFyIGE9IiIsbj0wO248ci5sZW5ndGg7bis9MTYzODQpYSs9U3RyaW5nLmZyb21DaGFyQ29kZS5hcHBseShudWxsLHIuc3ViYXJyYXkobixuKzE2Mzg0KSk7cmV0dXJuIGF9ZWxzZXtpZihBKXJldHVybiBBLmRlY29kZShyKTt2YXIgdj1DMShyKSxpPXZbMF0sYz12WzFdO3JldHVybiBjLmxlbmd0aCYmZyg4KSxpfX12YXIgXzE9ZnVuY3Rpb24ocix0KXtyZXR1cm4gdCszMCtFKHIsdCsyNikrRShyLHQrMjgpfSx4MT1mdW5jdGlvbihyLHQsYSl7dmFyIG49RShyLHQrMjgpLHY9UzEoci5zdWJhcnJheSh0KzQ2LHQrNDYrbiksIShFKHIsdCs4KSYyMDQ4KSksaT10KzQ2K24sYz1tKHIsdCsyMCksZj1hJiZjPT00Mjk0OTY3Mjk1P1QxKHIsaSk6W2MsbShyLHQrMjQpLG0ocix0KzQyKV0sbz1mWzBdLGU9ZlsxXSxsPWZbMl07cmV0dXJuW0Uocix0KzEwKSxvLGUsdixpK0Uocix0KzMwKStFKHIsdCszMiksbF19LFQxPWZ1bmN0aW9uKHIsdCl7Zm9yKDtFKHIsdCkhPTE7dCs9NCtFKHIsdCsyKSk7cmV0dXJuW3Eocix0KzEyKSxxKHIsdCs0KSxxKHIsdCsyMCldfTtmdW5jdGlvbiBrMShyLHQpe2Zvcih2YXIgYT17fSxuPXIubGVuZ3RoLTIyO20ocixuKSE9MTAxMDEwMjU2Oy0tbikoIW58fHIubGVuZ3RoLW4+NjU1NTgpJiZnKDEzKTt2YXIgdj1FKHIsbis4KTtpZighdilyZXR1cm57fTt2YXIgaT1tKHIsbisxNiksYz1pPT00Mjk0OTY3Mjk1O2MmJihuPW0ocixuLTEyKSxtKHIsbikhPTEwMTA3NTc5MiYmZygxMyksdj1tKHIsbiszMiksaT1tKHIsbis0OCkpO2Zvcih2YXIgZj10JiZ0LmZpbHRlcixvPTA7bzx2Oysrbyl7dmFyIGU9eDEocixpLGMpLGw9ZVswXSxiPWVbMV0sZD1lWzJdLHk9ZVszXSxSPWVbNF0sWT1lWzVdLFM9XzEocixZKTtpPVIsKCFmfHxmKHtuYW1lOnksc2l6ZTpiLG9yaWdpbmFsU2l6ZTpkLGNvbXByZXNzaW9uOmx9KSkmJihsP2w9PTg/YVt5XT1FMShyLnN1YmFycmF5KFMsUytiKSxuZXcgcyhkKSk6ZygxNCwidW5rbm93biBjb21wcmVzc2lvbiB0eXBlICIrbCk6YVt5XT1qKHIsUyxTK2IpKX1yZXR1cm4gYX1jb25zdCB6MT1yPT5rMShyLHtmaWx0ZXI6KHtuYW1lOnR9KT0+ISh0LnN0YXJ0c1dpdGgoIl9fTUFDT1NYLyIpfHx0LmluY2x1ZGVzKCIuRFNfU3RvcmUiKSl9KTthZGRFdmVudExpc3RlbmVyKCJtZXNzYWdlIiwoe2RhdGE6cn0pPT57bGV0IHQ7dHJ5e3Q9e2lkOnIuaWQsZGF0YTp6MShyLmRhdGEpfX1jYXRjaChhKXt0PXtpZDpyLmlkLGVycm9yOmEubWVzc2FnZX19cG9zdE1lc3NhZ2UodCl9KX0pKCk7Cg==", Aa = typeof window < "u" && window.Blob && new Blob([atob(Ns)], { type: "text/javascript;charset=utf-8" });
function pp() {
  let r;
  try {
    if (r = Aa && (window.URL || window.webkitURL).createObjectURL(Aa), !r)
      throw "";
    return new Worker(r);
  } catch {
    return new Worker("data:application/javascript;base64," + Ns);
  } finally {
    r && (window.URL || window.webkitURL).revokeObjectURL(r);
  }
}
let Ur;
const mp = async (r) => new Promise((o, n) => {
  const l = Bs(), y = new Uint8Array(r), v = { id: l, data: y };
  Ur || (Ur = new pp());
  const w = ({ data: _ }) => {
    _.id === v.id && (Ur.removeEventListener("message", w), "error" in _ && n(new Error(_.error)), "data" in _ && o(_.data));
  };
  Ur.addEventListener("message", w), Ur.postMessage(v, [r]);
}), Ri = "/";
class Os {
  constructor(o) {
    fe(this, "_source", null);
    fe(this, "_fs", null);
    fe(this, "_mountpoint", Ri);
    fe(this, "_data", {});
    this._source = o;
  }
  static async preload(o, n) {
    if (Array.isArray(o)) {
      const y = n?.onProgress;
      return await Promise.all(
        o.map((v, w) => {
          const _ = y ? { onProgress: (...D) => y(w, ...D) } : {};
          return this.preload(v, _);
        })
      );
    }
    const l = new this(o);
    return await l.load(n), l;
  }
  /** Template method for data fetching */
  async _fetch(o, n) {
    return await $h(o, {}, n).then((l) => {
      if (l.ok)
        return l.blob();
      throw new Error(
        `Failed to fetch ${o.url} ${l.status} (${l.statusText})`
      );
    }).then((l) => {
      if (l.size > 0)
        return l;
      throw new Error(`The source must not be empty. Received ${l.size} bytes size source.`);
    });
  }
  /** Template method for data decompression */
  async _unzip(o) {
    if (!o.type.includes("zip"))
      throw new TypeError(
        `The source type must be "application/zip"-like. Received: "${o.type}".`
      );
    return await o.arrayBuffer().then(mp).then((n) => Object.entries(n)).then((n) => Object.fromEntries(n));
  }
  /** Loads the resource data */
  async load(o) {
    let n = this._source;
    return typeof n == "string" && (n = new Request(n)), n instanceof Request && (n = await this._fetch(n, o)), n instanceof Blob && (n = await this._unzip(n)), n instanceof Object && n.constructor === Object && await Promise.all(
      Object.entries(n).map(([l, y]) => this.writeFile(l, y))
    ), this._source = null, this._data;
  }
  _fsWriteFile(o, n) {
    this._fs && (o = `${this._mountpoint}${o.startsWith("/") ? o.substring(1) : o}`, this._fs.writeFile(o, n));
  }
  async writeFile(o, n) {
    const l = new Uint8Array(n instanceof Blob ? await n.arrayBuffer() : n);
    this._data[o] = l, this._fsWriteFile(o, this._data[o]);
  }
  /** Mounts the resource to the supplied file system */
  mount(o, n = Ri) {
    this._fs = o, this._mountpoint = n.endsWith("/") ? n : `${n}/`, Object.entries(this._data).forEach(([l, y]) => this._fsWriteFile(l, y));
  }
  /** Unmounts the resource from the previously supplied file system */
  unmount() {
    this._fs = null, this._mountpoint = Ri;
  }
}
var _p = Object.defineProperty, bp = Object.getOwnPropertyDescriptor, yp = (r, o, n, l) => {
  for (var y = l > 1 ? void 0 : l ? bp(o, n) : o, v = r.length - 1, w; v >= 0; v--)
    (w = r[v]) && (y = (l ? w(o, n, y) : w(y)) || y);
  return l && y && _p(o, n, y), y;
};
class gp {
  constructor(o) {
    /** @internal */
    fe(this, "name", `effects/${Bs()}`);
    fe(this, "_player", null);
    fe(this, "_resource");
    this._resource = new wp(o);
  }
  static async preload(o, n) {
    if (Array.isArray(o)) {
      const y = n?.onProgress;
      return await Promise.all(
        o.map((v, w) => {
          const _ = y ? { onProgress: (...D) => y(w, ...D) } : {};
          return this.preload(v, _);
        })
      );
    }
    const l = new this(o);
    return await l._load(n), l;
  }
  /** Loads the effect data */
  async _load(o) {
    await this._resource.load(o);
  }
  /** Loads the effect data, mounts it to the player‘s file system */
  async _bind(o) {
    await this._resource.load(), this._player = o, this._resource.mount(this._player.FS, this.name);
  }
  /** Unmounts the effect data from the previously specified player‘s file system */
  _unbind() {
    this._resource.unmount(), this._player = null;
  }
  async writeFile(o, n) {
    return this._resource.writeFile(o, n);
  }
  callJsMethod(o, n = "") {
    if (!this._player) {
      console.warn("The method won't evaluate: the effect is not applied to a player.");
      return;
    }
    return this._player.callJsMethod(o, n);
  }
  /**
   * Evaluates JavaScript in context of the effect.
   *
   * The script won't evaluate if the effect is not applied to a player
   * @example
   * ```ts
   * const makeup = new Effect("/path/to/Makeup.zip")
   *
   * await player.applyEffect(makeup)
   *
   * // ...
   *
   * const electricBlueColor = "0.09 0.25 0.38"
   *
   * await makeup.evalJs(`Eyes.color("${electricBlueColor}")`)
   * ```
   */
  async evalJs(o) {
    if (!this._player) {
      console.warn("The script won't evaluate: the effect is not applied to a player.");
      return;
    }
    return await this._player.evalJs(o);
  }
}
yp([
  Rs("Please, use Effect.evalJs() instead.")
], gp.prototype, "callJsMethod", 1);
class wp extends Os {
  async _unzip(o) {
    let n = await super._unzip(o);
    const y = Object.keys(n).map((_) => _.split("/").find(Boolean)), v = y[0];
    return y.every((_) => _ === v) && (n = Object.fromEntries(
      Object.entries(n).map(([_, D]) => [
        _.replace(`${v}/`, ""),
        D
      ])
    )), n;
  }
}
let Ob = class {
  constructor(o) {
    fe(this, "_resource");
    this._resource = new Os(o);
  }
  static async preload(o, n) {
    if (Array.isArray(o)) {
      const y = n?.onProgress;
      return await Promise.all(
        o.map((v, w) => {
          const _ = y ? { onProgress: (...D) => y(w, ...D) } : {};
          return this.preload(v, _);
        })
      );
    }
    const l = new this(o);
    return await l._load(n), l;
  }
  /** Loads the module data */
  async _load(o) {
    await this._resource.load(o);
  }
  /** Loads the module data, mounts it to the player's file system */
  async _bind(o) {
    await this._resource.load(), this._resource.mount(o.FS);
  }
};
var vp = (() => {
  var r = typeof document < "u" && document.currentScript ? document.currentScript.src : void 0;
  return function(n) {
    n = n || {};
    var n = typeof n < "u" ? n : {}, l, y;
    n.ready = new Promise(function(e, t) {
      l = e, y = t;
    }), n.expectedDataFileDownloads || (n.expectedDataFileDownloads = 0), n.expectedDataFileDownloads++, function() {
      if (!n.ENVIRONMENT_IS_PTHREAD) {
        var e = function(t) {
          typeof window == "object" ? window.encodeURIComponent(window.location.pathname.toString().substring(0, window.location.pathname.toString().lastIndexOf("/")) + "/") : typeof process > "u" && typeof location < "u" && encodeURIComponent(location.pathname.toString().substring(0, location.pathname.toString().lastIndexOf("/")) + "/");
          var i = "BanubaSDK.data", a = "BanubaSDK.data";
          typeof n.locateFilePackage == "function" && !n.locateFile && (n.locateFile = n.locateFilePackage, pe("warning: you defined Module.locateFilePackage, that has been renamed to Module.locateFile (using your locateFilePackage for now)"));
          var s = n.locateFile ? n.locateFile(a, "") : a, c = t.remote_package_size;
          function h(I, U, j, V) {
            var ee = new XMLHttpRequest();
            ee.open("GET", I, !0), ee.responseType = "arraybuffer", ee.onprogress = function(ce) {
              var he = I, we = U;
              if (ce.total && (we = ce.total), ce.loaded) {
                ee.addedTotal ? n.dataFileDownloads[he].loaded = ce.loaded : (ee.addedTotal = !0, n.dataFileDownloads || (n.dataFileDownloads = {}), n.dataFileDownloads[he] = { loaded: ce.loaded, total: we });
                var G = 0, ie = 0, ve = 0;
                for (var Ee in n.dataFileDownloads) {
                  var Me = n.dataFileDownloads[Ee];
                  G += Me.total, ie += Me.loaded, ve++;
                }
                G = Math.ceil(G * n.expectedDataFileDownloads / ve), n.setStatus && n.setStatus("Downloading data... (" + ie + "/" + G + ")");
              } else
                n.dataFileDownloads || n.setStatus && n.setStatus("Downloading data...");
            }, ee.onerror = function(ce) {
              throw new Error("NetworkError for: " + I);
            }, ee.onload = function(ce) {
              if (ee.status == 200 || ee.status == 304 || ee.status == 206 || ee.status == 0 && ee.response) {
                var he = ee.response;
                j(he);
              } else
                throw new Error(ee.statusText + " : " + ee.responseURL);
            }, ee.send(null);
          }
          var g = null, E = n.getPreloadedPackage ? n.getPreloadedPackage(s, c) : null;
          E || h(s, c, function(I) {
            g ? (g(I), g = null) : E = I;
          });
          function A() {
            function I(ce, he) {
              if (!ce)
                throw he + new Error().stack;
            }
            n.FS_createPath("/", "bnb_js", !0, !0), n.FS_createPath("/", "bnb_prefabs", !0, !0), n.FS_createPath("/bnb_prefabs", "audio", !0, !0), n.FS_createPath("/bnb_prefabs", "base", !0, !0), n.FS_createPath("/bnb_prefabs", "camera", !0, !0), n.FS_createPath("/bnb_prefabs/camera", "images", !0, !0), n.FS_createPath("/bnb_prefabs", "foreground", !0, !0), n.FS_createPath("/bnb_prefabs", "gltf", !0, !0), n.FS_createPath("/bnb_prefabs/gltf", "meshes", !0, !0), n.FS_createPath("/bnb_prefabs/gltf", "shaders", !0, !0), n.FS_createPath("/bnb_prefabs", "hint", !0, !0), n.FS_createPath("/bnb_prefabs/hint", "font", !0, !0), n.FS_createPath("/bnb_prefabs/hint", "meshes", !0, !0), n.FS_createPath("/bnb_prefabs/hint", "scripts", !0, !0), n.FS_createPath("/bnb_prefabs/hint", "shaders", !0, !0), n.FS_createPath("/bnb_prefabs", "lights", !0, !0), n.FS_createPath("/bnb_prefabs", "lut", !0, !0), n.FS_createPath("/bnb_prefabs/lut", "scripts", !0, !0), n.FS_createPath("/bnb_prefabs/lut", "shaders", !0, !0), n.FS_createPath("/bnb_prefabs/lut/shaders", "lut-filter", !0, !0), n.FS_createPath("/bnb_prefabs/lut", "textures", !0, !0), n.FS_createPath("/", "bnb_shaders", !0, !0), n.FS_createPath("/bnb_shaders", "bnb", !0, !0), n.FS_createPath("/bnb_shaders/bnb", "lib", !0, !0), n.FS_createPath("/", "frx", !0, !0);
            function U(ce, he, we) {
              this.start = ce, this.end = he, this.audio = we;
            }
            U.prototype = { requests: {}, open: function(ce, he) {
              this.name = he, this.requests[he] = this, n.addRunDependency("fp " + this.name);
            }, send: function() {
            }, onload: function() {
              var ce = this.byteArray.subarray(this.start, this.end);
              this.finish(ce);
            }, finish: function(ce) {
              var he = this;
              n.FS_createDataFile(this.name, null, ce, !0, !0, !0), n.removeRunDependency("fp " + he.name), this.requests[this.name] = null;
            } };
            for (var j = t.files, V = 0; V < j.length; ++V)
              new U(j[V].start, j[V].end, j[V].audio || 0).open("GET", j[V].filename);
            function ee(ce) {
              I(ce, "Loading data file failed."), I(ce.constructor.name === ArrayBuffer.name, "bad input to processPackageData");
              var he = new Uint8Array(ce);
              U.prototype.byteArray = he;
              for (var we = t.files, G = 0; G < we.length; ++G)
                U.prototype.requests[we[G].filename].onload();
              n.removeRunDependency("datafile_BanubaSDK.data");
            }
            n.addRunDependency("datafile_BanubaSDK.data"), n.preloadResults || (n.preloadResults = {}), n.preloadResults[i] = { fromCache: !1 }, E ? (ee(E), E = null) : g = ee;
          }
          n.calledRun ? A() : (n.preRun || (n.preRun = []), n.preRun.push(A));
        };
        e({ files: [{ filename: "/bnb_js/.empty", start: 0, end: 20 }, { filename: "/bnb_js/background.js", start: 20, end: 3945 }, { filename: "/bnb_js/console.js", start: 3945, end: 4505 }, { filename: "/bnb_js/global.js", start: 4505, end: 4886 }, { filename: "/bnb_js/legacy.js", start: 4886, end: 9163 }, { filename: "/bnb_js/light_streaks.js", start: 9163, end: 18870 }, { filename: "/bnb_js/prefabs.js", start: 18870, end: 21179 }, { filename: "/bnb_js/timers.js", start: 21179, end: 24498 }, { filename: "/bnb_prefabs/audio/config.js", start: 24498, end: 25873 }, { filename: "/bnb_prefabs/audio/config.json", start: 25873, end: 25943 }, { filename: "/bnb_prefabs/audio/schema.json", start: 25943, end: 26761 }, { filename: "/bnb_prefabs/base/config.json", start: 26761, end: 27390 }, { filename: "/bnb_prefabs/camera/config.json", start: 27390, end: 29060 }, { filename: "/bnb_prefabs/camera/images/ibl_diff.ktx", start: 29060, end: 53704 }, { filename: "/bnb_prefabs/camera/images/ibl_spec.ktx", start: 53704, end: 348688 }, { filename: "/bnb_prefabs/camera/schema.json", start: 348688, end: 348768 }, { filename: "/bnb_prefabs/foreground/config.js", start: 348768, end: 350104 }, { filename: "/bnb_prefabs/foreground/config.json", start: 350104, end: 351297 }, { filename: "/bnb_prefabs/foreground/foreground.frag", start: 351297, end: 351485 }, { filename: "/bnb_prefabs/foreground/foreground.vert", start: 351485, end: 351735 }, { filename: "/bnb_prefabs/foreground/null_image.png", start: 351735, end: 351803 }, { filename: "/bnb_prefabs/foreground/schema.json", start: 351803, end: 352495 }, { filename: "/bnb_prefabs/gltf/config.js", start: 352495, end: 356054 }, { filename: "/bnb_prefabs/gltf/config.json", start: 356054, end: 359059 }, { filename: "/bnb_prefabs/gltf/meshes/cut.bsm2", start: 359059, end: 415336 }, { filename: "/bnb_prefabs/gltf/meshes/cut_ears.bsm2", start: 415336, end: 491497 }, { filename: "/bnb_prefabs/gltf/schema.json", start: 491497, end: 495968 }, { filename: "/bnb_prefabs/gltf/shaders/mat_cut.frag", start: 495968, end: 496054 }, { filename: "/bnb_prefabs/gltf/shaders/mat_cut.vert", start: 496054, end: 497762 }, { filename: "/bnb_prefabs/hint/config.json", start: 497762, end: 499446 }, { filename: "/bnb_prefabs/hint/font/NotoSans-Regular.ttf", start: 499446, end: 898414 }, { filename: "/bnb_prefabs/hint/meshes/quad.bsm2", start: 898414, end: 898692 }, { filename: "/bnb_prefabs/hint/schema.json", start: 898692, end: 899678 }, { filename: "/bnb_prefabs/hint/scripts/index.js", start: 899678, end: 902029 }, { filename: "/bnb_prefabs/hint/shaders/text.frag", start: 902029, end: 902259 }, { filename: "/bnb_prefabs/hint/shaders/text.vert", start: 902259, end: 902503 }, { filename: "/bnb_prefabs/lights/config.js", start: 902503, end: 903836 }, { filename: "/bnb_prefabs/lights/config.json", start: 903836, end: 904147 }, { filename: "/bnb_prefabs/lights/schema.json", start: 904147, end: 904953 }, { filename: "/bnb_prefabs/lut/config.json", start: 904953, end: 906436 }, { filename: "/bnb_prefabs/lut/schema.json", start: 906436, end: 906881 }, { filename: "/bnb_prefabs/lut/scripts/index.js", start: 906881, end: 908192 }, { filename: "/bnb_prefabs/lut/shaders/lut-filter/lut_filter.frag", start: 908192, end: 908643 }, { filename: "/bnb_prefabs/lut/shaders/lut-filter/lut_filter.vert", start: 908643, end: 908893 }, { filename: "/bnb_prefabs/lut/textures/_null_lut_.png", start: 908893, end: 913851 }, { filename: "/bnb_shaders/.empty", start: 913851, end: 913870 }, { filename: "/bnb_shaders/bnb/anim_transform.glsl", start: 913870, end: 914033 }, { filename: "/bnb_shaders/bnb/color_spaces.glsl", start: 914033, end: 919880 }, { filename: "/bnb_shaders/bnb/decode_int1010102.glsl", start: 919880, end: 920569 }, { filename: "/bnb_shaders/bnb/get_bone.glsl", start: 920569, end: 920991 }, { filename: "/bnb_shaders/bnb/get_transform.glsl", start: 920991, end: 921630 }, { filename: "/bnb_shaders/bnb/glsl.frag", start: 921630, end: 922192 }, { filename: "/bnb_shaders/bnb/glsl.vert", start: 922192, end: 922973 }, { filename: "/bnb_shaders/bnb/lib/apply_light_streaks.frag", start: 922973, end: 923285 }, { filename: "/bnb_shaders/bnb/lib/apply_light_streaks.vert", start: 923285, end: 923534 }, { filename: "/bnb_shaders/bnb/lib/auto_morph.frag", start: 923534, end: 923647 }, { filename: "/bnb_shaders/bnb/lib/auto_morph.vert", start: 923647, end: 924259 }, { filename: "/bnb_shaders/bnb/lib/auto_morph_fisheye.frag", start: 924259, end: 924372 }, { filename: "/bnb_shaders/bnb/lib/auto_morph_fisheye.vert", start: 924372, end: 924879 }, { filename: "/bnb_shaders/bnb/lib/beauty_morph.frag", start: 924879, end: 924993 }, { filename: "/bnb_shaders/bnb/lib/beauty_morph.vert", start: 924993, end: 926142 }, { filename: "/bnb_shaders/bnb/lib/bg_blur_downscale.frag", start: 926142, end: 927016 }, { filename: "/bnb_shaders/bnb/lib/bg_blur_downscale.vert", start: 927016, end: 927215 }, { filename: "/bnb_shaders/bnb/lib/bg_blur_upscale.frag", start: 927215, end: 928210 }, { filename: "/bnb_shaders/bnb/lib/bg_blur_upscale.vert", start: 928210, end: 928545 }, { filename: "/bnb_shaders/bnb/lib/bg_blur_upscale_apply.frag", start: 928545, end: 929750 }, { filename: "/bnb_shaders/bnb/lib/camera.frag", start: 929750, end: 930331 }, { filename: "/bnb_shaders/bnb/lib/camera.vert", start: 930331, end: 930650 }, { filename: "/bnb_shaders/bnb/lib/camera_bgmask.frag", start: 930650, end: 931409 }, { filename: "/bnb_shaders/bnb/lib/camera_bgmask.vert", start: 931409, end: 931798 }, { filename: "/bnb_shaders/bnb/lib/copy_pixels.frag", start: 931798, end: 931972 }, { filename: "/bnb_shaders/bnb/lib/copy_pixels.vert", start: 931972, end: 932221 }, { filename: "/bnb_shaders/bnb/lib/filter_light_streaks_0.frag", start: 932221, end: 933207 }, { filename: "/bnb_shaders/bnb/lib/filter_light_streaks_0.vert", start: 933207, end: 933792 }, { filename: "/bnb_shaders/bnb/lib/filter_light_streaks_1.frag", start: 933792, end: 934778 }, { filename: "/bnb_shaders/bnb/lib/filter_light_streaks_1.vert", start: 934778, end: 935363 }, { filename: "/bnb_shaders/bnb/lib/filter_light_streaks_2.frag", start: 935363, end: 936349 }, { filename: "/bnb_shaders/bnb/lib/filter_light_streaks_2.vert", start: 936349, end: 936934 }, { filename: "/bnb_shaders/bnb/lib/filter_light_streaks_3.frag", start: 936934, end: 937920 }, { filename: "/bnb_shaders/bnb/lib/filter_light_streaks_3.vert", start: 937920, end: 938505 }, { filename: "/bnb_shaders/bnb/lib/gltf.frag", start: 938505, end: 941238 }, { filename: "/bnb_shaders/bnb/lib/gltf.vert", start: 941238, end: 942952 }, { filename: "/bnb_shaders/bnb/lib/gltf_physics.vert", start: 942952, end: 944554 }, { filename: "/bnb_shaders/bnb/lib/gltf_spec_gloss.frag", start: 944554, end: 946367 }, { filename: "/bnb_shaders/bnb/lib/gltf_spec_gloss.vert", start: 946367, end: 948081 }, { filename: "/bnb_shaders/bnb/lib/gltf_spec_gloss_physics.vert", start: 948081, end: 949683 }, { filename: "/bnb_shaders/bnb/lib/gltf_transmissive.frag", start: 949683, end: 951961 }, { filename: "/bnb_shaders/bnb/lib/gltf_transmissive.vert", start: 951961, end: 953802 }, { filename: "/bnb_shaders/bnb/lib/gltf_transmissive_physics.vert", start: 953802, end: 955531 }, { filename: "/bnb_shaders/bnb/lib/init_light_streaks.frag", start: 955531, end: 955861 }, { filename: "/bnb_shaders/bnb/lib/init_light_streaks.vert", start: 955861, end: 956110 }, { filename: "/bnb_shaders/bnb/lib/mesh_morph.frag", start: 956110, end: 956224 }, { filename: "/bnb_shaders/bnb/lib/mesh_morph.vert", start: 956224, end: 958107 }, { filename: "/bnb_shaders/bnb/lib/morph_apply.frag", start: 958107, end: 958450 }, { filename: "/bnb_shaders/bnb/lib/morph_apply.vert", start: 958450, end: 960632 }, { filename: "/bnb_shaders/bnb/lib/morph_blur.frag", start: 960632, end: 961955 }, { filename: "/bnb_shaders/bnb/lib/morph_blur.vert", start: 961955, end: 962281 }, { filename: "/bnb_shaders/bnb/lib/retouch.frag", start: 962281, end: 965973 }, { filename: "/bnb_shaders/bnb/lib/retouch.vert", start: 965973, end: 966531 }, { filename: "/bnb_shaders/bnb/lib/static_pos.frag", start: 966531, end: 966642 }, { filename: "/bnb_shaders/bnb/lib/static_pos.vert", start: 966642, end: 966908 }, { filename: "/bnb_shaders/bnb/lib/uv_morph.frag", start: 966908, end: 967021 }, { filename: "/bnb_shaders/bnb/lib/uv_morph.vert", start: 967021, end: 967528 }, { filename: "/bnb_shaders/bnb/lib/vbg.frag", start: 967528, end: 968435 }, { filename: "/bnb_shaders/bnb/lib/vbg.vert", start: 968435, end: 969475 }, { filename: "/bnb_shaders/bnb/lut.glsl", start: 969475, end: 974004 }, { filename: "/bnb_shaders/bnb/math.glsl", start: 974004, end: 974004 }, { filename: "/bnb_shaders/bnb/matrix_operations.glsl", start: 974004, end: 974488 }, { filename: "/bnb_shaders/bnb/morph_transform.glsl", start: 974488, end: 975546 }, { filename: "/bnb_shaders/bnb/pbr.glsl", start: 975546, end: 979138 }, { filename: "/bnb_shaders/bnb/quat_rotation.glsl", start: 979138, end: 980532 }, { filename: "/bnb_shaders/bnb/sample_camera.glsl", start: 980532, end: 981469 }, { filename: "/bnb_shaders/bnb/samplers_declaration.glsl", start: 981469, end: 984213 }, { filename: "/bnb_shaders/bnb/texture_bicubic.glsl", start: 984213, end: 985571 }, { filename: "/bnb_shaders/bnb/textures_lookup.glsl", start: 985571, end: 986771 }, { filename: "/bnb_shaders/bnb/transform_uv.glsl", start: 986771, end: 989208 }, { filename: "/bnb_shaders/bnb/version.glsl", start: 989208, end: 989430 }, { filename: "/frx/frx.js", start: 989430, end: 992243 }, { filename: "/modules.json", start: 992243, end: 1006434 }, { filename: "/resources-versions.txt", start: 1006434, end: 1009158 }, { filename: "/watermark.png", start: 1009158, end: 1011644 }, { filename: "/watermark_blurred.png", start: 1011644, end: 1034077 }], remote_package_size: 1034077 });
      }
    }();
    var v = Object.assign({}, n), w = "./this.program", _ = (e, t) => {
      throw t;
    }, D = !0, k = !1, B = "";
    function J(e) {
      return n.locateFile ? n.locateFile(e, B) : B + e;
    }
    var se, X;
    typeof document < "u" && document.currentScript && (B = document.currentScript.src), r && (B = r), B.indexOf("blob:") !== 0 ? B = B.substr(0, B.replace(/[?#].*/, "").lastIndexOf("/") + 1) : B = "", se = (e) => {
      var t = new XMLHttpRequest();
      return t.open("GET", e, !1), t.send(null), t.responseText;
    }, X = (e, t, i) => {
      var a = new XMLHttpRequest();
      a.open("GET", e, !0), a.responseType = "arraybuffer", a.onload = () => {
        if (a.status == 200 || a.status == 0 && a.response) {
          t(a.response);
          return;
        }
        i();
      }, a.onerror = i, a.send(null);
    };
    var z = n.print || console.log.bind(console), pe = n.printErr || console.warn.bind(console);
    Object.assign(n, v), v = null, n.thisProgram && (w = n.thisProgram), n.quit && (_ = n.quit);
    var _e = 4, de;
    n.wasmBinary && (de = n.wasmBinary);
    var re = n.noExitRuntime || !0;
    typeof WebAssembly != "object" && F("no native wasm support detected");
    var Fe, Ne = !1, be;
    function Ue(e, t) {
      e || F(t);
    }
    var We = typeof TextDecoder < "u" ? new TextDecoder("utf8") : void 0;
    function Ve(e, t, i) {
      for (var a = t + i, s = t; e[s] && !(s >= a); )
        ++s;
      if (s - t > 16 && e.buffer && We)
        return We.decode(e.subarray(t, s));
      for (var c = ""; t < s; ) {
        var h = e[t++];
        if (!(h & 128)) {
          c += String.fromCharCode(h);
          continue;
        }
        var g = e[t++] & 63;
        if ((h & 224) == 192) {
          c += String.fromCharCode((h & 31) << 6 | g);
          continue;
        }
        var E = e[t++] & 63;
        if ((h & 240) == 224 ? h = (h & 15) << 12 | g << 6 | E : h = (h & 7) << 18 | g << 12 | E << 6 | e[t++] & 63, h < 65536)
          c += String.fromCharCode(h);
        else {
          var A = h - 65536;
          c += String.fromCharCode(55296 | A >> 10, 56320 | A & 1023);
        }
      }
      return c;
    }
    function Se(e, t) {
      return e ? Ve(ue, e, t) : "";
    }
    function oe(e, t, i, a) {
      if (!(a > 0))
        return 0;
      for (var s = i, c = i + a - 1, h = 0; h < e.length; ++h) {
        var g = e.charCodeAt(h);
        if (g >= 55296 && g <= 57343) {
          var E = e.charCodeAt(++h);
          g = 65536 + ((g & 1023) << 10) | E & 1023;
        }
        if (g <= 127) {
          if (i >= c)
            break;
          t[i++] = g;
        } else if (g <= 2047) {
          if (i + 1 >= c)
            break;
          t[i++] = 192 | g >> 6, t[i++] = 128 | g & 63;
        } else if (g <= 65535) {
          if (i + 2 >= c)
            break;
          t[i++] = 224 | g >> 12, t[i++] = 128 | g >> 6 & 63, t[i++] = 128 | g & 63;
        } else {
          if (i + 3 >= c)
            break;
          t[i++] = 240 | g >> 18, t[i++] = 128 | g >> 12 & 63, t[i++] = 128 | g >> 6 & 63, t[i++] = 128 | g & 63;
        }
      }
      return t[i] = 0, i - s;
    }
    function ye(e, t, i) {
      return oe(e, ue, t, i);
    }
    function $e(e) {
      for (var t = 0, i = 0; i < e.length; ++i) {
        var a = e.charCodeAt(i);
        a <= 127 ? t++ : a <= 2047 ? t += 2 : a >= 55296 && a <= 57343 ? (t += 4, ++i) : t += 3;
      }
      return t;
    }
    var De, me, ue, Pe, Te, N, ne, te, ge;
    function Ae(e) {
      De = e, n.HEAP8 = me = new Int8Array(e), n.HEAP16 = Pe = new Int16Array(e), n.HEAP32 = N = new Int32Array(e), n.HEAPU8 = ue = new Uint8Array(e), n.HEAPU16 = Te = new Uint16Array(e), n.HEAPU32 = ne = new Uint32Array(e), n.HEAPF32 = te = new Float32Array(e), n.HEAPF64 = ge = new Float64Array(e);
    }
    var it, ct = [], ot = [], Et = [];
    function mt() {
      return re;
    }
    function Je() {
      if (n.preRun)
        for (typeof n.preRun == "function" && (n.preRun = [n.preRun]); n.preRun.length; )
          bt(n.preRun.shift());
      ze(ct);
    }
    function at() {
      !n.noFSInit && !p.init.initialized && p.init(), p.ignorePermissions = !1, ze(ot);
    }
    function Ft() {
      if (n.postRun)
        for (typeof n.postRun == "function" && (n.postRun = [n.postRun]); n.postRun.length; )
          L(n.postRun.shift());
      ze(Et);
    }
    function bt(e) {
      ct.unshift(e);
    }
    function ut(e) {
      ot.unshift(e);
    }
    function L(e) {
      Et.unshift(e);
    }
    var O = 0, q = null;
    function x(e) {
      return e;
    }
    function d(e) {
      O++, n.monitorRunDependencies && n.monitorRunDependencies(O);
    }
    function m(e) {
      if (O--, n.monitorRunDependencies && n.monitorRunDependencies(O), O == 0 && q) {
        var t = q;
        q = null, t();
      }
    }
    function F(e) {
      n.onAbort && n.onAbort(e), e = "Aborted(" + e + ")", pe(e), Ne = !0, be = 1, e += ". Build with -sASSERTIONS for more info.";
      var t = new WebAssembly.RuntimeError(e);
      throw y(t), t;
    }
    var M = "data:application/octet-stream;base64,";
    function Z(e) {
      return e.startsWith(M);
    }
    var Y;
    Y = "BanubaSDK.wasm", Z(Y) || (Y = J(Y));
    function xe(e) {
      try {
        if (e == Y && de)
          return new Uint8Array(de);
        throw "both async and sync fetching of the wasm failed";
      } catch (t) {
        F(t);
      }
    }
    function Be() {
      return !de && D && typeof fetch == "function" ? fetch(Y, { credentials: "same-origin" }).then(function(e) {
        if (!e.ok)
          throw "failed to load wasm binary file at '" + Y + "'";
        return e.arrayBuffer();
      }).catch(function() {
        return xe(Y);
      }) : Promise.resolve().then(function() {
        return xe(Y);
      });
    }
    function S() {
      var e = { env: fa, wasi_snapshot_preview1: fa };
      function t(h, g) {
        var E = h.exports;
        n.asm = E, Fe = n.asm.memory, Ae(Fe.buffer), it = n.asm.__indirect_function_table, ut(n.asm.__wasm_call_ctors), m();
      }
      d();
      function i(h) {
        t(h.instance);
      }
      function a(h) {
        return Be().then(function(g) {
          return WebAssembly.instantiate(g, e);
        }).then(function(g) {
          return g;
        }).then(h, function(g) {
          pe("failed to asynchronously prepare wasm: " + g), F(g);
        });
      }
      function s() {
        return !de && typeof WebAssembly.instantiateStreaming == "function" && !Z(Y) && typeof fetch == "function" ? fetch(Y, { credentials: "same-origin" }).then(function(h) {
          var g = WebAssembly.instantiateStreaming(h, e);
          return g.then(i, function(E) {
            return pe("wasm streaming compile failed: " + E), pe("falling back to ArrayBuffer instantiation"), a(i);
          });
        }) : a(i);
      }
      if (n.instantiateWasm)
        try {
          var c = n.instantiateWasm(e, t);
          return c;
        } catch (h) {
          pe("Module.instantiateWasm callback failed with error: " + h), y(h);
        }
      return s().catch(y), {};
    }
    var T, b;
    function u() {
      return /electron/i.test(navigator.userAgent);
    }
    function f() {
      function e() {
        var s = self.top, c = self.parent, h = [];
        do {
          try {
            h.push(c.location.href);
          } catch {
          }
          c && (c = c.parent);
        } while (c && c !== s);
        return h;
      }
      var t = [self.location.href].concat(Array.from("ancestorOrigins" in self.location ? self.location.ancestorOrigins : e())).map(function(s) {
        return new URL(s.replace(/^blob:/, "")).hostname;
      }).find(function(s) {
        return !!s;
      }), i = $e(t) + 1, a = yt(i);
      return ye(t, a, i), a;
    }
    function C(e, t) {
      const i = Se(e), a = p.readFile(i), s = document.createElement("video"), c = URL.createObjectURL(new Blob([a], { type: "video/mp4" })), h = n.proxyVideoRequestsTo;
      s.muted = !0, s.autoplay = !1, s.controls = !1, s.playsInline = !0, s.src = h ? h + encodeURIComponent(c) : c;
      var g = Xe.toValue(t);
      return s.onloadedmetadata = (E) => {
        g(E);
      }, Xe.toHandle(s);
    }
    function P(e) {
      const t = Xe.toValue(e);
      URL.revokeObjectURL(t.src), t.src = "";
    }
    function W(e, t, i, a) {
      const s = it.length, c = new Uint8Array(ue.slice(e + t, e + i));
      try {
        var h = new WebAssembly.Module(c), g = new WebAssembly.Instance(h, { env: { memory: Fe } });
        for (var E in g.exports) {
          var A = g.exports[E];
          addFunction(A);
        }
        return s < it.length ? s : a;
      } catch (I) {
        return console.log(I), a;
      }
    }
    function K() {
      function e(a) {
        return a.toString(16).padStart(2, "0");
      }
      let t = localStorage.getItem("billing_id");
      if (!t) {
        var i = new Uint8Array(8);
        window.crypto.getRandomValues(i), t = Array.from(i, e).join(""), localStorage.setItem("billing_id", t);
      }
      return ua(t);
    }
    function Re() {
      return n.getRandomValue();
    }
    function Ye() {
      if (n.getRandomValue === void 0)
        try {
          var e = typeof window == "object" ? window : self, t = typeof e.crypto < "u" ? e.crypto : e.msCrypto, i = function() {
            var c = new Uint32Array(1);
            return t.getRandomValues(c), c[0] >>> 0;
          };
          i(), n.getRandomValue = i;
        } catch {
          try {
            var a = require("crypto"), s = function() {
              var h = a.randomBytes(4);
              return (h[0] << 24 | h[1] << 16 | h[2] << 8 | h[3]) >>> 0;
            };
            s(), n.getRandomValue = s;
          } catch {
            throw "No secure random number generator found";
          }
        }
    }
    function Ge(e) {
      this.name = "ExitStatus", this.message = "Program terminated with exit(" + e + ")", this.status = e;
    }
    function ze(e) {
      for (; e.length > 0; )
        e.shift()(n);
    }
    function Oe(e) {
      return yt(e + 24) + 24;
    }
    function Ar(e) {
      this.excPtr = e, this.ptr = e - 24, this.set_type = function(t) {
        ne[this.ptr + 4 >> 2] = t;
      }, this.get_type = function() {
        return ne[this.ptr + 4 >> 2];
      }, this.set_destructor = function(t) {
        ne[this.ptr + 8 >> 2] = t;
      }, this.get_destructor = function() {
        return ne[this.ptr + 8 >> 2];
      }, this.set_refcount = function(t) {
        N[this.ptr >> 2] = t;
      }, this.set_caught = function(t) {
        t = t ? 1 : 0, me[this.ptr + 12 >> 0] = t;
      }, this.get_caught = function() {
        return me[this.ptr + 12 >> 0] != 0;
      }, this.set_rethrown = function(t) {
        t = t ? 1 : 0, me[this.ptr + 13 >> 0] = t;
      }, this.get_rethrown = function() {
        return me[this.ptr + 13 >> 0] != 0;
      }, this.init = function(t, i) {
        this.set_adjusted_ptr(0), this.set_type(t), this.set_destructor(i), this.set_refcount(0), this.set_caught(!1), this.set_rethrown(!1);
      }, this.add_ref = function() {
        var t = N[this.ptr >> 2];
        N[this.ptr >> 2] = t + 1;
      }, this.release_ref = function() {
        var t = N[this.ptr >> 2];
        return N[this.ptr >> 2] = t - 1, t === 1;
      }, this.set_adjusted_ptr = function(t) {
        ne[this.ptr + 16 >> 2] = t;
      }, this.get_adjusted_ptr = function() {
        return ne[this.ptr + 16 >> 2];
      }, this.get_exception_ptr = function() {
        var t = ma(this.get_type());
        if (t)
          return ne[this.excPtr >> 2];
        var i = this.get_adjusted_ptr();
        return i !== 0 ? i : this.excPtr;
      };
    }
    function Ir(e, t, i) {
      var a = new Ar(e);
      throw a.init(t, i), e;
    }
    var ke = { isAbs: (e) => e.charAt(0) === "/", splitPath: (e) => {
      var t = /^(\/?|)([\s\S]*?)((?:\.{1,2}|[^\/]+?|)(\.[^.\/]*|))(?:[\/]*)$/;
      return t.exec(e).slice(1);
    }, normalizeArray: (e, t) => {
      for (var i = 0, a = e.length - 1; a >= 0; a--) {
        var s = e[a];
        s === "." ? e.splice(a, 1) : s === ".." ? (e.splice(a, 1), i++) : i && (e.splice(a, 1), i--);
      }
      if (t)
        for (; i; i--)
          e.unshift("..");
      return e;
    }, normalize: (e) => {
      var t = ke.isAbs(e), i = e.substr(-1) === "/";
      return e = ke.normalizeArray(e.split("/").filter((a) => !!a), !t).join("/"), !e && !t && (e = "."), e && i && (e += "/"), (t ? "/" : "") + e;
    }, dirname: (e) => {
      var t = ke.splitPath(e), i = t[0], a = t[1];
      return !i && !a ? "." : (a && (a = a.substr(0, a.length - 1)), i + a);
    }, basename: (e) => {
      if (e === "/")
        return "/";
      e = ke.normalize(e), e = e.replace(/\/$/, "");
      var t = e.lastIndexOf("/");
      return t === -1 ? e : e.substr(t + 1);
    }, join: function() {
      var e = Array.prototype.slice.call(arguments);
      return ke.normalize(e.join("/"));
    }, join2: (e, t) => ke.normalize(e + "/" + t) };
    function Rt() {
      if (typeof crypto == "object" && typeof crypto.getRandomValues == "function") {
        var e = new Uint8Array(1);
        return () => (crypto.getRandomValues(e), e[0]);
      } else
        return () => F("randomDevice");
    }
    var et = { resolve: function() {
      for (var e = "", t = !1, i = arguments.length - 1; i >= -1 && !t; i--) {
        var a = i >= 0 ? arguments[i] : p.cwd();
        if (typeof a != "string")
          throw new TypeError("Arguments to path.resolve must be strings");
        if (!a)
          return "";
        e = a + "/" + e, t = ke.isAbs(a);
      }
      return e = ke.normalizeArray(e.split("/").filter((s) => !!s), !t).join("/"), (t ? "/" : "") + e || ".";
    }, relative: (e, t) => {
      e = et.resolve(e).substr(1), t = et.resolve(t).substr(1);
      function i(A) {
        for (var I = 0; I < A.length && A[I] === ""; I++)
          ;
        for (var U = A.length - 1; U >= 0 && A[U] === ""; U--)
          ;
        return I > U ? [] : A.slice(I, U - I + 1);
      }
      for (var a = i(e.split("/")), s = i(t.split("/")), c = Math.min(a.length, s.length), h = c, g = 0; g < c; g++)
        if (a[g] !== s[g]) {
          h = g;
          break;
        }
      for (var E = [], g = h; g < a.length; g++)
        E.push("..");
      return E = E.concat(s.slice(h)), E.join("/");
    } };
    function en(e, t, i) {
      var a = i > 0 ? i : $e(e) + 1, s = new Array(a), c = oe(e, s, 0, s.length);
      return t && (s.length = c), s;
    }
    var tr = { ttys: [], init: function() {
    }, shutdown: function() {
    }, register: function(e, t) {
      tr.ttys[e] = { input: [], output: [], ops: t }, p.registerDevice(e, tr.stream_ops);
    }, stream_ops: { open: function(e) {
      var t = tr.ttys[e.node.rdev];
      if (!t)
        throw new p.ErrnoError(43);
      e.tty = t, e.seekable = !1;
    }, close: function(e) {
      e.tty.ops.fsync(e.tty);
    }, fsync: function(e) {
      e.tty.ops.fsync(e.tty);
    }, read: function(e, t, i, a, s) {
      if (!e.tty || !e.tty.ops.get_char)
        throw new p.ErrnoError(60);
      for (var c = 0, h = 0; h < a; h++) {
        var g;
        try {
          g = e.tty.ops.get_char(e.tty);
        } catch {
          throw new p.ErrnoError(29);
        }
        if (g === void 0 && c === 0)
          throw new p.ErrnoError(6);
        if (g == null)
          break;
        c++, t[i + h] = g;
      }
      return c && (e.node.timestamp = Date.now()), c;
    }, write: function(e, t, i, a, s) {
      if (!e.tty || !e.tty.ops.put_char)
        throw new p.ErrnoError(60);
      try {
        for (var c = 0; c < a; c++)
          e.tty.ops.put_char(e.tty, t[i + c]);
      } catch {
        throw new p.ErrnoError(29);
      }
      return a && (e.node.timestamp = Date.now()), c;
    } }, default_tty_ops: { get_char: function(e) {
      if (!e.input.length) {
        var t = null;
        if (typeof window < "u" && typeof window.prompt == "function" ? (t = window.prompt("Input: "), t !== null && (t += `
`)) : typeof readline == "function" && (t = readline(), t !== null && (t += `
`)), !t)
          return null;
        e.input = en(t, !0);
      }
      return e.input.shift();
    }, put_char: function(e, t) {
      t === null || t === 10 ? (z(Ve(e.output, 0)), e.output = []) : t != 0 && e.output.push(t);
    }, fsync: function(e) {
      e.output && e.output.length > 0 && (z(Ve(e.output, 0)), e.output = []);
    } }, default_tty1_ops: { put_char: function(e, t) {
      t === null || t === 10 ? (pe(Ve(e.output, 0)), e.output = []) : t != 0 && e.output.push(t);
    }, fsync: function(e) {
      e.output && e.output.length > 0 && (pe(Ve(e.output, 0)), e.output = []);
    } } };
    function ii(e, t) {
      return ue.fill(0, e, e + t), e;
    }
    function Zu(e, t) {
      return Math.ceil(e / t) * t;
    }
    function ko(e) {
      e = Zu(e, 65536);
      var t = ha(65536, e);
      return t ? ii(t, e) : 0;
    }
    var Ie = { ops_table: null, mount: function(e) {
      return Ie.createNode(null, "/", 16895, 0);
    }, createNode: function(e, t, i, a) {
      if (p.isBlkdev(i) || p.isFIFO(i))
        throw new p.ErrnoError(63);
      Ie.ops_table || (Ie.ops_table = { dir: { node: { getattr: Ie.node_ops.getattr, setattr: Ie.node_ops.setattr, lookup: Ie.node_ops.lookup, mknod: Ie.node_ops.mknod, rename: Ie.node_ops.rename, unlink: Ie.node_ops.unlink, rmdir: Ie.node_ops.rmdir, readdir: Ie.node_ops.readdir, symlink: Ie.node_ops.symlink }, stream: { llseek: Ie.stream_ops.llseek } }, file: { node: { getattr: Ie.node_ops.getattr, setattr: Ie.node_ops.setattr }, stream: { llseek: Ie.stream_ops.llseek, read: Ie.stream_ops.read, write: Ie.stream_ops.write, allocate: Ie.stream_ops.allocate, mmap: Ie.stream_ops.mmap, msync: Ie.stream_ops.msync } }, link: { node: { getattr: Ie.node_ops.getattr, setattr: Ie.node_ops.setattr, readlink: Ie.node_ops.readlink }, stream: {} }, chrdev: { node: { getattr: Ie.node_ops.getattr, setattr: Ie.node_ops.setattr }, stream: p.chrdev_stream_ops } });
      var s = p.createNode(e, t, i, a);
      return p.isDir(s.mode) ? (s.node_ops = Ie.ops_table.dir.node, s.stream_ops = Ie.ops_table.dir.stream, s.contents = {}) : p.isFile(s.mode) ? (s.node_ops = Ie.ops_table.file.node, s.stream_ops = Ie.ops_table.file.stream, s.usedBytes = 0, s.contents = null) : p.isLink(s.mode) ? (s.node_ops = Ie.ops_table.link.node, s.stream_ops = Ie.ops_table.link.stream) : p.isChrdev(s.mode) && (s.node_ops = Ie.ops_table.chrdev.node, s.stream_ops = Ie.ops_table.chrdev.stream), s.timestamp = Date.now(), e && (e.contents[t] = s, e.timestamp = s.timestamp), s;
    }, getFileDataAsTypedArray: function(e) {
      return e.contents ? e.contents.subarray ? e.contents.subarray(0, e.usedBytes) : new Uint8Array(e.contents) : new Uint8Array(0);
    }, expandFileStorage: function(e, t) {
      var i = e.contents ? e.contents.length : 0;
      if (!(i >= t)) {
        var a = 1024 * 1024;
        t = Math.max(t, i * (i < a ? 2 : 1.125) >>> 0), i != 0 && (t = Math.max(t, 256));
        var s = e.contents;
        e.contents = new Uint8Array(t), e.usedBytes > 0 && e.contents.set(s.subarray(0, e.usedBytes), 0);
      }
    }, resizeFileStorage: function(e, t) {
      if (e.usedBytes != t)
        if (t == 0)
          e.contents = null, e.usedBytes = 0;
        else {
          var i = e.contents;
          e.contents = new Uint8Array(t), i && e.contents.set(i.subarray(0, Math.min(t, e.usedBytes))), e.usedBytes = t;
        }
    }, node_ops: { getattr: function(e) {
      var t = {};
      return t.dev = p.isChrdev(e.mode) ? e.id : 1, t.ino = e.id, t.mode = e.mode, t.nlink = 1, t.uid = 0, t.gid = 0, t.rdev = e.rdev, p.isDir(e.mode) ? t.size = 4096 : p.isFile(e.mode) ? t.size = e.usedBytes : p.isLink(e.mode) ? t.size = e.link.length : t.size = 0, t.atime = new Date(e.timestamp), t.mtime = new Date(e.timestamp), t.ctime = new Date(e.timestamp), t.blksize = 4096, t.blocks = Math.ceil(t.size / t.blksize), t;
    }, setattr: function(e, t) {
      t.mode !== void 0 && (e.mode = t.mode), t.timestamp !== void 0 && (e.timestamp = t.timestamp), t.size !== void 0 && Ie.resizeFileStorage(e, t.size);
    }, lookup: function(e, t) {
      throw p.genericErrors[44];
    }, mknod: function(e, t, i, a) {
      return Ie.createNode(e, t, i, a);
    }, rename: function(e, t, i) {
      if (p.isDir(e.mode)) {
        var a;
        try {
          a = p.lookupNode(t, i);
        } catch {
        }
        if (a)
          for (var s in a.contents)
            throw new p.ErrnoError(55);
      }
      delete e.parent.contents[e.name], e.parent.timestamp = Date.now(), e.name = i, t.contents[i] = e, t.timestamp = e.parent.timestamp, e.parent = t;
    }, unlink: function(e, t) {
      delete e.contents[t], e.timestamp = Date.now();
    }, rmdir: function(e, t) {
      var i = p.lookupNode(e, t);
      for (var a in i.contents)
        throw new p.ErrnoError(55);
      delete e.contents[t], e.timestamp = Date.now();
    }, readdir: function(e) {
      var t = [".", ".."];
      for (var i in e.contents)
        e.contents.hasOwnProperty(i) && t.push(i);
      return t;
    }, symlink: function(e, t, i) {
      var a = Ie.createNode(e, t, 41471, 0);
      return a.link = i, a;
    }, readlink: function(e) {
      if (!p.isLink(e.mode))
        throw new p.ErrnoError(28);
      return e.link;
    } }, stream_ops: { read: function(e, t, i, a, s) {
      var c = e.node.contents;
      if (s >= e.node.usedBytes)
        return 0;
      var h = Math.min(e.node.usedBytes - s, a);
      if (h > 8 && c.subarray)
        t.set(c.subarray(s, s + h), i);
      else
        for (var g = 0; g < h; g++)
          t[i + g] = c[s + g];
      return h;
    }, write: function(e, t, i, a, s, c) {
      if (t.buffer === me.buffer && (c = !1), !a)
        return 0;
      var h = e.node;
      if (h.timestamp = Date.now(), t.subarray && (!h.contents || h.contents.subarray)) {
        if (c)
          return h.contents = t.subarray(i, i + a), h.usedBytes = a, a;
        if (h.usedBytes === 0 && s === 0)
          return h.contents = t.slice(i, i + a), h.usedBytes = a, a;
        if (s + a <= h.usedBytes)
          return h.contents.set(t.subarray(i, i + a), s), a;
      }
      if (Ie.expandFileStorage(h, s + a), h.contents.subarray && t.subarray)
        h.contents.set(t.subarray(i, i + a), s);
      else
        for (var g = 0; g < a; g++)
          h.contents[s + g] = t[i + g];
      return h.usedBytes = Math.max(h.usedBytes, s + a), a;
    }, llseek: function(e, t, i) {
      var a = t;
      if (i === 1 ? a += e.position : i === 2 && p.isFile(e.node.mode) && (a += e.node.usedBytes), a < 0)
        throw new p.ErrnoError(28);
      return a;
    }, allocate: function(e, t, i) {
      Ie.expandFileStorage(e.node, t + i), e.node.usedBytes = Math.max(e.node.usedBytes, t + i);
    }, mmap: function(e, t, i, a, s) {
      if (!p.isFile(e.node.mode))
        throw new p.ErrnoError(43);
      var c, h, g = e.node.contents;
      if (!(s & 2) && g.buffer === De)
        h = !1, c = g.byteOffset;
      else {
        if ((i > 0 || i + t < g.length) && (g.subarray ? g = g.subarray(i, i + t) : g = Array.prototype.slice.call(g, i, i + t)), h = !0, c = ko(t), !c)
          throw new p.ErrnoError(48);
        me.set(g, c);
      }
      return { ptr: c, allocated: h };
    }, msync: function(e, t, i, a, s) {
      return Ie.stream_ops.write(e, t, 0, a, i, !1), 0;
    } } };
    function qu(e, t, i, a) {
      var s = a ? "" : "al " + e;
      X(e, (c) => {
        Ue(c, 'Loading data file "' + e + '" failed (no arrayBuffer).'), t(new Uint8Array(c)), s && m();
      }, (c) => {
        if (i)
          i();
        else
          throw 'Loading data file "' + e + '" failed.';
      }), s && d();
    }
    var p = { root: null, mounts: [], devices: {}, streams: [], nextInode: 1, nameTable: null, currentPath: "/", initialized: !1, ignorePermissions: !0, ErrnoError: null, genericErrors: {}, filesystems: null, syncFSRequests: 0, lookupPath: (e, t = {}) => {
      if (e = et.resolve(e), !e)
        return { path: "", node: null };
      var i = { follow_mount: !0, recurse_count: 0 };
      if (t = Object.assign(i, t), t.recurse_count > 8)
        throw new p.ErrnoError(32);
      for (var a = e.split("/").filter((U) => !!U), s = p.root, c = "/", h = 0; h < a.length; h++) {
        var g = h === a.length - 1;
        if (g && t.parent)
          break;
        if (s = p.lookupNode(s, a[h]), c = ke.join2(c, a[h]), p.isMountpoint(s) && (!g || g && t.follow_mount) && (s = s.mounted.root), !g || t.follow)
          for (var E = 0; p.isLink(s.mode); ) {
            var A = p.readlink(c);
            c = et.resolve(ke.dirname(c), A);
            var I = p.lookupPath(c, { recurse_count: t.recurse_count + 1 });
            if (s = I.node, E++ > 40)
              throw new p.ErrnoError(32);
          }
      }
      return { path: c, node: s };
    }, getPath: (e) => {
      for (var t; ; ) {
        if (p.isRoot(e)) {
          var i = e.mount.mountpoint;
          return t ? i[i.length - 1] !== "/" ? i + "/" + t : i + t : i;
        }
        t = t ? e.name + "/" + t : e.name, e = e.parent;
      }
    }, hashName: (e, t) => {
      for (var i = 0, a = 0; a < t.length; a++)
        i = (i << 5) - i + t.charCodeAt(a) | 0;
      return (e + i >>> 0) % p.nameTable.length;
    }, hashAddNode: (e) => {
      var t = p.hashName(e.parent.id, e.name);
      e.name_next = p.nameTable[t], p.nameTable[t] = e;
    }, hashRemoveNode: (e) => {
      var t = p.hashName(e.parent.id, e.name);
      if (p.nameTable[t] === e)
        p.nameTable[t] = e.name_next;
      else
        for (var i = p.nameTable[t]; i; ) {
          if (i.name_next === e) {
            i.name_next = e.name_next;
            break;
          }
          i = i.name_next;
        }
    }, lookupNode: (e, t) => {
      var i = p.mayLookup(e);
      if (i)
        throw new p.ErrnoError(i, e);
      for (var a = p.hashName(e.id, t), s = p.nameTable[a]; s; s = s.name_next) {
        var c = s.name;
        if (s.parent.id === e.id && c === t)
          return s;
      }
      return p.lookup(e, t);
    }, createNode: (e, t, i, a) => {
      var s = new p.FSNode(e, t, i, a);
      return p.hashAddNode(s), s;
    }, destroyNode: (e) => {
      p.hashRemoveNode(e);
    }, isRoot: (e) => e === e.parent, isMountpoint: (e) => !!e.mounted, isFile: (e) => (e & 61440) === 32768, isDir: (e) => (e & 61440) === 16384, isLink: (e) => (e & 61440) === 40960, isChrdev: (e) => (e & 61440) === 8192, isBlkdev: (e) => (e & 61440) === 24576, isFIFO: (e) => (e & 61440) === 4096, isSocket: (e) => (e & 49152) === 49152, flagModes: { r: 0, "r+": 2, w: 577, "w+": 578, a: 1089, "a+": 1090 }, modeStringToFlags: (e) => {
      var t = p.flagModes[e];
      if (typeof t > "u")
        throw new Error("Unknown file open mode: " + e);
      return t;
    }, flagsToPermissionString: (e) => {
      var t = ["r", "w", "rw"][e & 3];
      return e & 512 && (t += "w"), t;
    }, nodePermissions: (e, t) => p.ignorePermissions ? 0 : t.includes("r") && !(e.mode & 292) || t.includes("w") && !(e.mode & 146) || t.includes("x") && !(e.mode & 73) ? 2 : 0, mayLookup: (e) => {
      var t = p.nodePermissions(e, "x");
      return t || (e.node_ops.lookup ? 0 : 2);
    }, mayCreate: (e, t) => {
      try {
        return p.lookupNode(e, t), 20;
      } catch {
      }
      return p.nodePermissions(e, "wx");
    }, mayDelete: (e, t, i) => {
      var a;
      try {
        a = p.lookupNode(e, t);
      } catch (c) {
        return c.errno;
      }
      var s = p.nodePermissions(e, "wx");
      if (s)
        return s;
      if (i) {
        if (!p.isDir(a.mode))
          return 54;
        if (p.isRoot(a) || p.getPath(a) === p.cwd())
          return 10;
      } else if (p.isDir(a.mode))
        return 31;
      return 0;
    }, mayOpen: (e, t) => e ? p.isLink(e.mode) ? 32 : p.isDir(e.mode) && (p.flagsToPermissionString(t) !== "r" || t & 512) ? 31 : p.nodePermissions(e, p.flagsToPermissionString(t)) : 44, MAX_OPEN_FDS: 4096, nextfd: (e = 0, t = p.MAX_OPEN_FDS) => {
      for (var i = e; i <= t; i++)
        if (!p.streams[i])
          return i;
      throw new p.ErrnoError(33);
    }, getStream: (e) => p.streams[e], createStream: (e, t, i) => {
      p.FSStream || (p.FSStream = function() {
        this.shared = {};
      }, p.FSStream.prototype = {}, Object.defineProperties(p.FSStream.prototype, { object: { get: function() {
        return this.node;
      }, set: function(s) {
        this.node = s;
      } }, isRead: { get: function() {
        return (this.flags & 2097155) !== 1;
      } }, isWrite: { get: function() {
        return (this.flags & 2097155) !== 0;
      } }, isAppend: { get: function() {
        return this.flags & 1024;
      } }, flags: { get: function() {
        return this.shared.flags;
      }, set: function(s) {
        this.shared.flags = s;
      } }, position: { get: function() {
        return this.shared.position;
      }, set: function(s) {
        this.shared.position = s;
      } } })), e = Object.assign(new p.FSStream(), e);
      var a = p.nextfd(t, i);
      return e.fd = a, p.streams[a] = e, e;
    }, closeStream: (e) => {
      p.streams[e] = null;
    }, chrdev_stream_ops: { open: (e) => {
      var t = p.getDevice(e.node.rdev);
      e.stream_ops = t.stream_ops, e.stream_ops.open && e.stream_ops.open(e);
    }, llseek: () => {
      throw new p.ErrnoError(70);
    } }, major: (e) => e >> 8, minor: (e) => e & 255, makedev: (e, t) => e << 8 | t, registerDevice: (e, t) => {
      p.devices[e] = { stream_ops: t };
    }, getDevice: (e) => p.devices[e], getMounts: (e) => {
      for (var t = [], i = [e]; i.length; ) {
        var a = i.pop();
        t.push(a), i.push.apply(i, a.mounts);
      }
      return t;
    }, syncfs: (e, t) => {
      typeof e == "function" && (t = e, e = !1), p.syncFSRequests++, p.syncFSRequests > 1 && pe("warning: " + p.syncFSRequests + " FS.syncfs operations in flight at once, probably just doing extra work");
      var i = p.getMounts(p.root.mount), a = 0;
      function s(h) {
        return p.syncFSRequests--, t(h);
      }
      function c(h) {
        if (h)
          return c.errored ? void 0 : (c.errored = !0, s(h));
        ++a >= i.length && s(null);
      }
      i.forEach((h) => {
        if (!h.type.syncfs)
          return c(null);
        h.type.syncfs(h, e, c);
      });
    }, mount: (e, t, i) => {
      var a = i === "/", s = !i, c;
      if (a && p.root)
        throw new p.ErrnoError(10);
      if (!a && !s) {
        var h = p.lookupPath(i, { follow_mount: !1 });
        if (i = h.path, c = h.node, p.isMountpoint(c))
          throw new p.ErrnoError(10);
        if (!p.isDir(c.mode))
          throw new p.ErrnoError(54);
      }
      var g = { type: e, opts: t, mountpoint: i, mounts: [] }, E = e.mount(g);
      return E.mount = g, g.root = E, a ? p.root = E : c && (c.mounted = g, c.mount && c.mount.mounts.push(g)), E;
    }, unmount: (e) => {
      var t = p.lookupPath(e, { follow_mount: !1 });
      if (!p.isMountpoint(t.node))
        throw new p.ErrnoError(28);
      var i = t.node, a = i.mounted, s = p.getMounts(a);
      Object.keys(p.nameTable).forEach((h) => {
        for (var g = p.nameTable[h]; g; ) {
          var E = g.name_next;
          s.includes(g.mount) && p.destroyNode(g), g = E;
        }
      }), i.mounted = null;
      var c = i.mount.mounts.indexOf(a);
      i.mount.mounts.splice(c, 1);
    }, lookup: (e, t) => e.node_ops.lookup(e, t), mknod: (e, t, i) => {
      var a = p.lookupPath(e, { parent: !0 }), s = a.node, c = ke.basename(e);
      if (!c || c === "." || c === "..")
        throw new p.ErrnoError(28);
      var h = p.mayCreate(s, c);
      if (h)
        throw new p.ErrnoError(h);
      if (!s.node_ops.mknod)
        throw new p.ErrnoError(63);
      return s.node_ops.mknod(s, c, t, i);
    }, create: (e, t) => (t = t !== void 0 ? t : 438, t &= 4095, t |= 32768, p.mknod(e, t, 0)), mkdir: (e, t) => (t = t !== void 0 ? t : 511, t &= 1023, t |= 16384, p.mknod(e, t, 0)), mkdirTree: (e, t) => {
      for (var i = e.split("/"), a = "", s = 0; s < i.length; ++s)
        if (i[s]) {
          a += "/" + i[s];
          try {
            p.mkdir(a, t);
          } catch (c) {
            if (c.errno != 20)
              throw c;
          }
        }
    }, mkdev: (e, t, i) => (typeof i > "u" && (i = t, t = 438), t |= 8192, p.mknod(e, t, i)), symlink: (e, t) => {
      if (!et.resolve(e))
        throw new p.ErrnoError(44);
      var i = p.lookupPath(t, { parent: !0 }), a = i.node;
      if (!a)
        throw new p.ErrnoError(44);
      var s = ke.basename(t), c = p.mayCreate(a, s);
      if (c)
        throw new p.ErrnoError(c);
      if (!a.node_ops.symlink)
        throw new p.ErrnoError(63);
      return a.node_ops.symlink(a, s, e);
    }, rename: (e, t) => {
      var i = ke.dirname(e), a = ke.dirname(t), s = ke.basename(e), c = ke.basename(t), h, g, E;
      if (h = p.lookupPath(e, { parent: !0 }), g = h.node, h = p.lookupPath(t, { parent: !0 }), E = h.node, !g || !E)
        throw new p.ErrnoError(44);
      if (g.mount !== E.mount)
        throw new p.ErrnoError(75);
      var A = p.lookupNode(g, s), I = et.relative(e, a);
      if (I.charAt(0) !== ".")
        throw new p.ErrnoError(28);
      if (I = et.relative(t, i), I.charAt(0) !== ".")
        throw new p.ErrnoError(55);
      var U;
      try {
        U = p.lookupNode(E, c);
      } catch {
      }
      if (A !== U) {
        var j = p.isDir(A.mode), V = p.mayDelete(g, s, j);
        if (V)
          throw new p.ErrnoError(V);
        if (V = U ? p.mayDelete(E, c, j) : p.mayCreate(E, c), V)
          throw new p.ErrnoError(V);
        if (!g.node_ops.rename)
          throw new p.ErrnoError(63);
        if (p.isMountpoint(A) || U && p.isMountpoint(U))
          throw new p.ErrnoError(10);
        if (E !== g && (V = p.nodePermissions(g, "w"), V))
          throw new p.ErrnoError(V);
        p.hashRemoveNode(A);
        try {
          g.node_ops.rename(A, E, c);
        } catch (ee) {
          throw ee;
        } finally {
          p.hashAddNode(A);
        }
      }
    }, rmdir: (e) => {
      var t = p.lookupPath(e, { parent: !0 }), i = t.node, a = ke.basename(e), s = p.lookupNode(i, a), c = p.mayDelete(i, a, !0);
      if (c)
        throw new p.ErrnoError(c);
      if (!i.node_ops.rmdir)
        throw new p.ErrnoError(63);
      if (p.isMountpoint(s))
        throw new p.ErrnoError(10);
      i.node_ops.rmdir(i, a), p.destroyNode(s);
    }, readdir: (e) => {
      var t = p.lookupPath(e, { follow: !0 }), i = t.node;
      if (!i.node_ops.readdir)
        throw new p.ErrnoError(54);
      return i.node_ops.readdir(i);
    }, unlink: (e) => {
      var t = p.lookupPath(e, { parent: !0 }), i = t.node;
      if (!i)
        throw new p.ErrnoError(44);
      var a = ke.basename(e), s = p.lookupNode(i, a), c = p.mayDelete(i, a, !1);
      if (c)
        throw new p.ErrnoError(c);
      if (!i.node_ops.unlink)
        throw new p.ErrnoError(63);
      if (p.isMountpoint(s))
        throw new p.ErrnoError(10);
      i.node_ops.unlink(i, a), p.destroyNode(s);
    }, readlink: (e) => {
      var t = p.lookupPath(e), i = t.node;
      if (!i)
        throw new p.ErrnoError(44);
      if (!i.node_ops.readlink)
        throw new p.ErrnoError(28);
      return et.resolve(p.getPath(i.parent), i.node_ops.readlink(i));
    }, stat: (e, t) => {
      var i = p.lookupPath(e, { follow: !t }), a = i.node;
      if (!a)
        throw new p.ErrnoError(44);
      if (!a.node_ops.getattr)
        throw new p.ErrnoError(63);
      return a.node_ops.getattr(a);
    }, lstat: (e) => p.stat(e, !0), chmod: (e, t, i) => {
      var a;
      if (typeof e == "string") {
        var s = p.lookupPath(e, { follow: !i });
        a = s.node;
      } else
        a = e;
      if (!a.node_ops.setattr)
        throw new p.ErrnoError(63);
      a.node_ops.setattr(a, { mode: t & 4095 | a.mode & -4096, timestamp: Date.now() });
    }, lchmod: (e, t) => {
      p.chmod(e, t, !0);
    }, fchmod: (e, t) => {
      var i = p.getStream(e);
      if (!i)
        throw new p.ErrnoError(8);
      p.chmod(i.node, t);
    }, chown: (e, t, i, a) => {
      var s;
      if (typeof e == "string") {
        var c = p.lookupPath(e, { follow: !a });
        s = c.node;
      } else
        s = e;
      if (!s.node_ops.setattr)
        throw new p.ErrnoError(63);
      s.node_ops.setattr(s, { timestamp: Date.now() });
    }, lchown: (e, t, i) => {
      p.chown(e, t, i, !0);
    }, fchown: (e, t, i) => {
      var a = p.getStream(e);
      if (!a)
        throw new p.ErrnoError(8);
      p.chown(a.node, t, i);
    }, truncate: (e, t) => {
      if (t < 0)
        throw new p.ErrnoError(28);
      var i;
      if (typeof e == "string") {
        var a = p.lookupPath(e, { follow: !0 });
        i = a.node;
      } else
        i = e;
      if (!i.node_ops.setattr)
        throw new p.ErrnoError(63);
      if (p.isDir(i.mode))
        throw new p.ErrnoError(31);
      if (!p.isFile(i.mode))
        throw new p.ErrnoError(28);
      var s = p.nodePermissions(i, "w");
      if (s)
        throw new p.ErrnoError(s);
      i.node_ops.setattr(i, { size: t, timestamp: Date.now() });
    }, ftruncate: (e, t) => {
      var i = p.getStream(e);
      if (!i)
        throw new p.ErrnoError(8);
      if (!(i.flags & 2097155))
        throw new p.ErrnoError(28);
      p.truncate(i.node, t);
    }, utime: (e, t, i) => {
      var a = p.lookupPath(e, { follow: !0 }), s = a.node;
      s.node_ops.setattr(s, { timestamp: Math.max(t, i) });
    }, open: (e, t, i) => {
      if (e === "")
        throw new p.ErrnoError(44);
      t = typeof t == "string" ? p.modeStringToFlags(t) : t, i = typeof i > "u" ? 438 : i, t & 64 ? i = i & 4095 | 32768 : i = 0;
      var a;
      if (typeof e == "object")
        a = e;
      else {
        e = ke.normalize(e);
        try {
          var s = p.lookupPath(e, { follow: !(t & 131072) });
          a = s.node;
        } catch {
        }
      }
      var c = !1;
      if (t & 64)
        if (a) {
          if (t & 128)
            throw new p.ErrnoError(20);
        } else
          a = p.mknod(e, i, 0), c = !0;
      if (!a)
        throw new p.ErrnoError(44);
      if (p.isChrdev(a.mode) && (t &= -513), t & 65536 && !p.isDir(a.mode))
        throw new p.ErrnoError(54);
      if (!c) {
        var h = p.mayOpen(a, t);
        if (h)
          throw new p.ErrnoError(h);
      }
      t & 512 && !c && p.truncate(a, 0), t &= -131713;
      var g = p.createStream({ node: a, path: p.getPath(a), flags: t, seekable: !0, position: 0, stream_ops: a.stream_ops, ungotten: [], error: !1 });
      return g.stream_ops.open && g.stream_ops.open(g), n.logReadFiles && !(t & 1) && (p.readFiles || (p.readFiles = {}), e in p.readFiles || (p.readFiles[e] = 1)), g;
    }, close: (e) => {
      if (p.isClosed(e))
        throw new p.ErrnoError(8);
      e.getdents && (e.getdents = null);
      try {
        e.stream_ops.close && e.stream_ops.close(e);
      } catch (t) {
        throw t;
      } finally {
        p.closeStream(e.fd);
      }
      e.fd = null;
    }, isClosed: (e) => e.fd === null, llseek: (e, t, i) => {
      if (p.isClosed(e))
        throw new p.ErrnoError(8);
      if (!e.seekable || !e.stream_ops.llseek)
        throw new p.ErrnoError(70);
      if (i != 0 && i != 1 && i != 2)
        throw new p.ErrnoError(28);
      return e.position = e.stream_ops.llseek(e, t, i), e.ungotten = [], e.position;
    }, read: (e, t, i, a, s) => {
      if (a < 0 || s < 0)
        throw new p.ErrnoError(28);
      if (p.isClosed(e))
        throw new p.ErrnoError(8);
      if ((e.flags & 2097155) === 1)
        throw new p.ErrnoError(8);
      if (p.isDir(e.node.mode))
        throw new p.ErrnoError(31);
      if (!e.stream_ops.read)
        throw new p.ErrnoError(28);
      var c = typeof s < "u";
      if (!c)
        s = e.position;
      else if (!e.seekable)
        throw new p.ErrnoError(70);
      var h = e.stream_ops.read(e, t, i, a, s);
      return c || (e.position += h), h;
    }, write: (e, t, i, a, s, c) => {
      if (a < 0 || s < 0)
        throw new p.ErrnoError(28);
      if (p.isClosed(e))
        throw new p.ErrnoError(8);
      if (!(e.flags & 2097155))
        throw new p.ErrnoError(8);
      if (p.isDir(e.node.mode))
        throw new p.ErrnoError(31);
      if (!e.stream_ops.write)
        throw new p.ErrnoError(28);
      e.seekable && e.flags & 1024 && p.llseek(e, 0, 2);
      var h = typeof s < "u";
      if (!h)
        s = e.position;
      else if (!e.seekable)
        throw new p.ErrnoError(70);
      var g = e.stream_ops.write(e, t, i, a, s, c);
      return h || (e.position += g), g;
    }, allocate: (e, t, i) => {
      if (p.isClosed(e))
        throw new p.ErrnoError(8);
      if (t < 0 || i <= 0)
        throw new p.ErrnoError(28);
      if (!(e.flags & 2097155))
        throw new p.ErrnoError(8);
      if (!p.isFile(e.node.mode) && !p.isDir(e.node.mode))
        throw new p.ErrnoError(43);
      if (!e.stream_ops.allocate)
        throw new p.ErrnoError(138);
      e.stream_ops.allocate(e, t, i);
    }, mmap: (e, t, i, a, s) => {
      if (a & 2 && !(s & 2) && (e.flags & 2097155) !== 2)
        throw new p.ErrnoError(2);
      if ((e.flags & 2097155) === 1)
        throw new p.ErrnoError(2);
      if (!e.stream_ops.mmap)
        throw new p.ErrnoError(43);
      return e.stream_ops.mmap(e, t, i, a, s);
    }, msync: (e, t, i, a, s) => e.stream_ops.msync ? e.stream_ops.msync(e, t, i, a, s) : 0, munmap: (e) => 0, ioctl: (e, t, i) => {
      if (!e.stream_ops.ioctl)
        throw new p.ErrnoError(59);
      return e.stream_ops.ioctl(e, t, i);
    }, readFile: (e, t = {}) => {
      if (t.flags = t.flags || 0, t.encoding = t.encoding || "binary", t.encoding !== "utf8" && t.encoding !== "binary")
        throw new Error('Invalid encoding type "' + t.encoding + '"');
      var i, a = p.open(e, t.flags), s = p.stat(e), c = s.size, h = new Uint8Array(c);
      return p.read(a, h, 0, c, 0), t.encoding === "utf8" ? i = Ve(h, 0) : t.encoding === "binary" && (i = h), p.close(a), i;
    }, writeFile: (e, t, i = {}) => {
      i.flags = i.flags || 577;
      var a = p.open(e, i.flags, i.mode);
      if (typeof t == "string") {
        var s = new Uint8Array($e(t) + 1), c = oe(t, s, 0, s.length);
        p.write(a, s, 0, c, void 0, i.canOwn);
      } else if (ArrayBuffer.isView(t))
        p.write(a, t, 0, t.byteLength, void 0, i.canOwn);
      else
        throw new Error("Unsupported data type");
      p.close(a);
    }, cwd: () => p.currentPath, chdir: (e) => {
      var t = p.lookupPath(e, { follow: !0 });
      if (t.node === null)
        throw new p.ErrnoError(44);
      if (!p.isDir(t.node.mode))
        throw new p.ErrnoError(54);
      var i = p.nodePermissions(t.node, "x");
      if (i)
        throw new p.ErrnoError(i);
      p.currentPath = t.path;
    }, createDefaultDirectories: () => {
      p.mkdir("/tmp"), p.mkdir("/home"), p.mkdir("/home/web_user");
    }, createDefaultDevices: () => {
      p.mkdir("/dev"), p.registerDevice(p.makedev(1, 3), { read: () => 0, write: (t, i, a, s, c) => s }), p.mkdev("/dev/null", p.makedev(1, 3)), tr.register(p.makedev(5, 0), tr.default_tty_ops), tr.register(p.makedev(6, 0), tr.default_tty1_ops), p.mkdev("/dev/tty", p.makedev(5, 0)), p.mkdev("/dev/tty1", p.makedev(6, 0));
      var e = Rt();
      p.createDevice("/dev", "random", e), p.createDevice("/dev", "urandom", e), p.mkdir("/dev/shm"), p.mkdir("/dev/shm/tmp");
    }, createSpecialDirectories: () => {
      p.mkdir("/proc");
      var e = p.mkdir("/proc/self");
      p.mkdir("/proc/self/fd"), p.mount({ mount: () => {
        var t = p.createNode(e, "fd", 16895, 73);
        return t.node_ops = { lookup: (i, a) => {
          var s = +a, c = p.getStream(s);
          if (!c)
            throw new p.ErrnoError(8);
          var h = { parent: null, mount: { mountpoint: "fake" }, node_ops: { readlink: () => c.path } };
          return h.parent = h, h;
        } }, t;
      } }, {}, "/proc/self/fd");
    }, createStandardStreams: () => {
      n.stdin ? p.createDevice("/dev", "stdin", n.stdin) : p.symlink("/dev/tty", "/dev/stdin"), n.stdout ? p.createDevice("/dev", "stdout", null, n.stdout) : p.symlink("/dev/tty", "/dev/stdout"), n.stderr ? p.createDevice("/dev", "stderr", null, n.stderr) : p.symlink("/dev/tty1", "/dev/stderr"), p.open("/dev/stdin", 0), p.open("/dev/stdout", 1), p.open("/dev/stderr", 1);
    }, ensureErrnoError: () => {
      p.ErrnoError || (p.ErrnoError = function(t, i) {
        this.node = i, this.setErrno = function(a) {
          this.errno = a;
        }, this.setErrno(t), this.message = "FS error";
      }, p.ErrnoError.prototype = new Error(), p.ErrnoError.prototype.constructor = p.ErrnoError, [44].forEach((e) => {
        p.genericErrors[e] = new p.ErrnoError(e), p.genericErrors[e].stack = "<generic error, no stack>";
      }));
    }, staticInit: () => {
      p.ensureErrnoError(), p.nameTable = new Array(4096), p.mount(Ie, {}, "/"), p.createDefaultDirectories(), p.createDefaultDevices(), p.createSpecialDirectories(), p.filesystems = { MEMFS: Ie };
    }, init: (e, t, i) => {
      p.init.initialized = !0, p.ensureErrnoError(), n.stdin = e || n.stdin, n.stdout = t || n.stdout, n.stderr = i || n.stderr, p.createStandardStreams();
    }, quit: () => {
      p.init.initialized = !1;
      for (var e = 0; e < p.streams.length; e++) {
        var t = p.streams[e];
        t && p.close(t);
      }
    }, getMode: (e, t) => {
      var i = 0;
      return e && (i |= 365), t && (i |= 146), i;
    }, findObject: (e, t) => {
      var i = p.analyzePath(e, t);
      return i.exists ? i.object : null;
    }, analyzePath: (e, t) => {
      try {
        var i = p.lookupPath(e, { follow: !t });
        e = i.path;
      } catch {
      }
      var a = { isRoot: !1, exists: !1, error: 0, name: null, path: null, object: null, parentExists: !1, parentPath: null, parentObject: null };
      try {
        var i = p.lookupPath(e, { parent: !0 });
        a.parentExists = !0, a.parentPath = i.path, a.parentObject = i.node, a.name = ke.basename(e), i = p.lookupPath(e, { follow: !t }), a.exists = !0, a.path = i.path, a.object = i.node, a.name = i.node.name, a.isRoot = i.path === "/";
      } catch (s) {
        a.error = s.errno;
      }
      return a;
    }, createPath: (e, t, i, a) => {
      e = typeof e == "string" ? e : p.getPath(e);
      for (var s = t.split("/").reverse(); s.length; ) {
        var c = s.pop();
        if (c) {
          var h = ke.join2(e, c);
          try {
            p.mkdir(h);
          } catch {
          }
          e = h;
        }
      }
      return h;
    }, createFile: (e, t, i, a, s) => {
      var c = ke.join2(typeof e == "string" ? e : p.getPath(e), t), h = p.getMode(a, s);
      return p.create(c, h);
    }, createDataFile: (e, t, i, a, s, c) => {
      var h = t;
      e && (e = typeof e == "string" ? e : p.getPath(e), h = t ? ke.join2(e, t) : e);
      var g = p.getMode(a, s), E = p.create(h, g);
      if (i) {
        if (typeof i == "string") {
          for (var A = new Array(i.length), I = 0, U = i.length; I < U; ++I)
            A[I] = i.charCodeAt(I);
          i = A;
        }
        p.chmod(E, g | 146);
        var j = p.open(E, 577);
        p.write(j, i, 0, i.length, 0, c), p.close(j), p.chmod(E, g);
      }
      return E;
    }, createDevice: (e, t, i, a) => {
      var s = ke.join2(typeof e == "string" ? e : p.getPath(e), t), c = p.getMode(!!i, !!a);
      p.createDevice.major || (p.createDevice.major = 64);
      var h = p.makedev(p.createDevice.major++, 0);
      return p.registerDevice(h, { open: (g) => {
        g.seekable = !1;
      }, close: (g) => {
        a && a.buffer && a.buffer.length && a(10);
      }, read: (g, E, A, I, U) => {
        for (var j = 0, V = 0; V < I; V++) {
          var ee;
          try {
            ee = i();
          } catch {
            throw new p.ErrnoError(29);
          }
          if (ee === void 0 && j === 0)
            throw new p.ErrnoError(6);
          if (ee == null)
            break;
          j++, E[A + V] = ee;
        }
        return j && (g.node.timestamp = Date.now()), j;
      }, write: (g, E, A, I, U) => {
        for (var j = 0; j < I; j++)
          try {
            a(E[A + j]);
          } catch {
            throw new p.ErrnoError(29);
          }
        return I && (g.node.timestamp = Date.now()), j;
      } }), p.mkdev(s, c, h);
    }, forceLoadFile: (e) => {
      if (e.isDevice || e.isFolder || e.link || e.contents)
        return !0;
      if (typeof XMLHttpRequest < "u")
        throw new Error("Lazy loading should have been performed (contents set) in createLazyFile, but it was not. Lazy loading only works in web workers. Use --embed-file or --preload-file in emcc on the main thread.");
      if (se)
        try {
          e.contents = en(se(e.url), !0), e.usedBytes = e.contents.length;
        } catch {
          throw new p.ErrnoError(29);
        }
      else
        throw new Error("Cannot load without read() or XMLHttpRequest.");
    }, createLazyFile: (e, t, i, a, s) => {
      function c() {
        this.lengthKnown = !1, this.chunks = [];
      }
      if (c.prototype.get = function(V) {
        if (!(V > this.length - 1 || V < 0)) {
          var ee = V % this.chunkSize, ce = V / this.chunkSize | 0;
          return this.getter(ce)[ee];
        }
      }, c.prototype.setDataGetter = function(V) {
        this.getter = V;
      }, c.prototype.cacheLength = function() {
        var V = new XMLHttpRequest();
        if (V.open("HEAD", i, !1), V.send(null), !(V.status >= 200 && V.status < 300 || V.status === 304))
          throw new Error("Couldn't load " + i + ". Status: " + V.status);
        var ee = Number(V.getResponseHeader("Content-length")), ce, he = (ce = V.getResponseHeader("Accept-Ranges")) && ce === "bytes", we = (ce = V.getResponseHeader("Content-Encoding")) && ce === "gzip", G = 1024 * 1024;
        he || (G = ee);
        var ie = (Ee, Me) => {
          if (Ee > Me)
            throw new Error("invalid range (" + Ee + ", " + Me + ") or no bytes requested!");
          if (Me > ee - 1)
            throw new Error("only " + ee + " bytes available! programmer error!");
          var ae = new XMLHttpRequest();
          if (ae.open("GET", i, !1), ee !== G && ae.setRequestHeader("Range", "bytes=" + Ee + "-" + Me), ae.responseType = "arraybuffer", ae.overrideMimeType && ae.overrideMimeType("text/plain; charset=x-user-defined"), ae.send(null), !(ae.status >= 200 && ae.status < 300 || ae.status === 304))
            throw new Error("Couldn't load " + i + ". Status: " + ae.status);
          return ae.response !== void 0 ? new Uint8Array(ae.response || []) : en(ae.responseText || "", !0);
        }, ve = this;
        ve.setDataGetter((Ee) => {
          var Me = Ee * G, ae = (Ee + 1) * G - 1;
          if (ae = Math.min(ae, ee - 1), typeof ve.chunks[Ee] > "u" && (ve.chunks[Ee] = ie(Me, ae)), typeof ve.chunks[Ee] > "u")
            throw new Error("doXHR failed!");
          return ve.chunks[Ee];
        }), (we || !ee) && (G = ee = 1, ee = this.getter(0).length, G = ee, z("LazyFiles on gzip forces download of the whole file when length is accessed")), this._length = ee, this._chunkSize = G, this.lengthKnown = !0;
      }, typeof XMLHttpRequest < "u") {
        throw "Cannot do synchronous binary XHRs outside webworkers in modern browsers. Use --embed-file or --preload-file in emcc";
        var h, g;
      } else
        var g = { isDevice: !1, url: i };
      var E = p.createFile(e, t, g, a, s);
      g.contents ? E.contents = g.contents : g.url && (E.contents = null, E.url = g.url), Object.defineProperties(E, { usedBytes: { get: function() {
        return this.contents.length;
      } } });
      var A = {}, I = Object.keys(E.stream_ops);
      I.forEach((j) => {
        var V = E.stream_ops[j];
        A[j] = function() {
          return p.forceLoadFile(E), V.apply(null, arguments);
        };
      });
      function U(j, V, ee, ce, he) {
        var we = j.node.contents;
        if (he >= we.length)
          return 0;
        var G = Math.min(we.length - he, ce);
        if (we.slice)
          for (var ie = 0; ie < G; ie++)
            V[ee + ie] = we[he + ie];
        else
          for (var ie = 0; ie < G; ie++)
            V[ee + ie] = we.get(he + ie);
        return G;
      }
      return A.read = (j, V, ee, ce, he) => (p.forceLoadFile(E), U(j, V, ee, ce, he)), A.mmap = (j, V, ee, ce, he) => {
        p.forceLoadFile(E);
        var we = ko(V);
        if (!we)
          throw new p.ErrnoError(48);
        return U(j, me, we, V, ee), { ptr: we, allocated: !0 };
      }, E.stream_ops = A, E;
    }, createPreloadedFile: (e, t, i, a, s, c, h, g, E, A) => {
      var I = t ? et.resolve(ke.join2(e, t)) : e;
      function U(j) {
        function V(ee) {
          A && A(), g || p.createDataFile(e, t, ee, a, s, E), c && c(), m();
        }
        $.handledByPreloadPlugin(j, I, V, () => {
          h && h(), m();
        }) || V(j);
      }
      d(), typeof i == "string" ? qu(i, (j) => U(j), h) : U(i);
    }, indexedDB: () => window.indexedDB || window.mozIndexedDB || window.webkitIndexedDB || window.msIndexedDB, DB_NAME: () => "EM_FS_" + window.location.pathname, DB_VERSION: 20, DB_STORE_NAME: "FILE_DATA", saveFilesToDB: (e, t, i) => {
      t = t || (() => {
      }), i = i || (() => {
      });
      var a = p.indexedDB();
      try {
        var s = a.open(p.DB_NAME(), p.DB_VERSION);
      } catch (c) {
        return i(c);
      }
      s.onupgradeneeded = () => {
        z("creating db");
        var c = s.result;
        c.createObjectStore(p.DB_STORE_NAME);
      }, s.onsuccess = () => {
        var c = s.result, h = c.transaction([p.DB_STORE_NAME], "readwrite"), g = h.objectStore(p.DB_STORE_NAME), E = 0, A = 0, I = e.length;
        function U() {
          A == 0 ? t() : i();
        }
        e.forEach((j) => {
          var V = g.put(p.analyzePath(j).object.contents, j);
          V.onsuccess = () => {
            E++, E + A == I && U();
          }, V.onerror = () => {
            A++, E + A == I && U();
          };
        }), h.onerror = i;
      }, s.onerror = i;
    }, loadFilesFromDB: (e, t, i) => {
      t = t || (() => {
      }), i = i || (() => {
      });
      var a = p.indexedDB();
      try {
        var s = a.open(p.DB_NAME(), p.DB_VERSION);
      } catch (c) {
        return i(c);
      }
      s.onupgradeneeded = i, s.onsuccess = () => {
        var c = s.result;
        try {
          var h = c.transaction([p.DB_STORE_NAME], "readonly");
        } catch (j) {
          i(j);
          return;
        }
        var g = h.objectStore(p.DB_STORE_NAME), E = 0, A = 0, I = e.length;
        function U() {
          A == 0 ? t() : i();
        }
        e.forEach((j) => {
          var V = g.get(j);
          V.onsuccess = () => {
            p.analyzePath(j).exists && p.unlink(j), p.createDataFile(ke.dirname(j), ke.basename(j), V.result, !0, !0, !0), E++, E + A == I && U();
          }, V.onerror = () => {
            A++, E + A == I && U();
          };
        }), h.onerror = i;
      }, s.onerror = i;
    } }, Ce = { DEFAULT_POLLMASK: 5, calculateAt: function(e, t, i) {
      if (ke.isAbs(t))
        return t;
      var a;
      if (e === -100)
        a = p.cwd();
      else {
        var s = Ce.getStreamFromFD(e);
        a = s.path;
      }
      if (t.length == 0) {
        if (!i)
          throw new p.ErrnoError(44);
        return a;
      }
      return ke.join2(a, t);
    }, doStat: function(e, t, i) {
      try {
        var a = e(t);
      } catch (s) {
        if (s && s.node && ke.normalize(t) !== ke.normalize(p.getPath(s.node)))
          return -54;
        throw s;
      }
      return N[i >> 2] = a.dev, N[i + 8 >> 2] = a.ino, N[i + 12 >> 2] = a.mode, ne[i + 16 >> 2] = a.nlink, N[i + 20 >> 2] = a.uid, N[i + 24 >> 2] = a.gid, N[i + 28 >> 2] = a.rdev, b = [a.size >>> 0, (T = a.size, +Math.abs(T) >= 1 ? T > 0 ? (Math.min(+Math.floor(T / 4294967296), 4294967295) | 0) >>> 0 : ~~+Math.ceil((T - +(~~T >>> 0)) / 4294967296) >>> 0 : 0)], N[i + 40 >> 2] = b[0], N[i + 44 >> 2] = b[1], N[i + 48 >> 2] = 4096, N[i + 52 >> 2] = a.blocks, b = [Math.floor(a.atime.getTime() / 1e3) >>> 0, (T = Math.floor(a.atime.getTime() / 1e3), +Math.abs(T) >= 1 ? T > 0 ? (Math.min(+Math.floor(T / 4294967296), 4294967295) | 0) >>> 0 : ~~+Math.ceil((T - +(~~T >>> 0)) / 4294967296) >>> 0 : 0)], N[i + 56 >> 2] = b[0], N[i + 60 >> 2] = b[1], ne[i + 64 >> 2] = 0, b = [Math.floor(a.mtime.getTime() / 1e3) >>> 0, (T = Math.floor(a.mtime.getTime() / 1e3), +Math.abs(T) >= 1 ? T > 0 ? (Math.min(+Math.floor(T / 4294967296), 4294967295) | 0) >>> 0 : ~~+Math.ceil((T - +(~~T >>> 0)) / 4294967296) >>> 0 : 0)], N[i + 72 >> 2] = b[0], N[i + 76 >> 2] = b[1], ne[i + 80 >> 2] = 0, b = [Math.floor(a.ctime.getTime() / 1e3) >>> 0, (T = Math.floor(a.ctime.getTime() / 1e3), +Math.abs(T) >= 1 ? T > 0 ? (Math.min(+Math.floor(T / 4294967296), 4294967295) | 0) >>> 0 : ~~+Math.ceil((T - +(~~T >>> 0)) / 4294967296) >>> 0 : 0)], N[i + 88 >> 2] = b[0], N[i + 92 >> 2] = b[1], ne[i + 96 >> 2] = 0, b = [a.ino >>> 0, (T = a.ino, +Math.abs(T) >= 1 ? T > 0 ? (Math.min(+Math.floor(T / 4294967296), 4294967295) | 0) >>> 0 : ~~+Math.ceil((T - +(~~T >>> 0)) / 4294967296) >>> 0 : 0)], N[i + 104 >> 2] = b[0], N[i + 108 >> 2] = b[1], 0;
    }, doMsync: function(e, t, i, a, s) {
      if (!p.isFile(t.node.mode))
        throw new p.ErrnoError(43);
      if (a & 2)
        return 0;
      var c = ue.slice(e, e + i);
      p.msync(t, c, s, i, a);
    }, varargs: void 0, get: function() {
      Ce.varargs += 4;
      var e = N[Ce.varargs - 4 >> 2];
      return e;
    }, getStr: function(e) {
      var t = Se(e);
      return t;
    }, getStreamFromFD: function(e) {
      var t = p.getStream(e);
      if (!t)
        throw new p.ErrnoError(8);
      return t;
    } };
    function Qu(e, t) {
      try {
        return e = Ce.getStr(e), p.chmod(e, t), 0;
      } catch (i) {
        if (typeof p > "u" || !(i instanceof p.ErrnoError))
          throw i;
        return -i.errno;
      }
    }
    function Ju(e, t) {
      try {
        return p.fchmod(e, t), 0;
      } catch (i) {
        if (typeof p > "u" || !(i instanceof p.ErrnoError))
          throw i;
        return -i.errno;
      }
    }
    function el(e) {
      return N[ca() >> 2] = e, e;
    }
    function tl(e, t, i) {
      Ce.varargs = i;
      try {
        var a = Ce.getStreamFromFD(e);
        switch (t) {
          case 0: {
            var s = Ce.get();
            if (s < 0)
              return -28;
            var c;
            return c = p.createStream(a, s), c.fd;
          }
          case 1:
          case 2:
            return 0;
          case 3:
            return a.flags;
          case 4: {
            var s = Ce.get();
            return a.flags |= s, 0;
          }
          case 5: {
            var s = Ce.get(), h = 0;
            return Pe[s + h >> 1] = 2, 0;
          }
          case 6:
          case 7:
            return 0;
          case 16:
          case 8:
            return -28;
          case 9:
            return el(28), -1;
          default:
            return -28;
        }
      } catch (g) {
        if (typeof p > "u" || !(g instanceof p.ErrnoError))
          throw g;
        return -g.errno;
      }
    }
    function rl(e, t) {
      try {
        var i = Ce.getStreamFromFD(e);
        return Ce.doStat(p.stat, i.path, t);
      } catch (a) {
        if (typeof p > "u" || !(a instanceof p.ErrnoError))
          throw a;
        return -a.errno;
      }
    }
    function Lo(e, t) {
      return t + 2097152 >>> 0 < 4194305 - !!e ? (e >>> 0) + t * 4294967296 : NaN;
    }
    function nl(e, t, i) {
      try {
        var a = Lo(t, i);
        return isNaN(a) ? -61 : (p.ftruncate(e, a), 0);
      } catch (s) {
        if (typeof p > "u" || !(s instanceof p.ErrnoError))
          throw s;
        return -s.errno;
      }
    }
    function il(e, t) {
      try {
        if (t === 0)
          return -28;
        var i = p.cwd(), a = $e(i) + 1;
        return t < a ? -68 : (ye(i, e, t), a);
      } catch (s) {
        if (typeof p > "u" || !(s instanceof p.ErrnoError))
          throw s;
        return -s.errno;
      }
    }
    function ol(e, t, i) {
      try {
        var a = Ce.getStreamFromFD(e);
        a.getdents || (a.getdents = p.readdir(a.path));
        for (var s = 280, c = 0, h = p.llseek(a, 0, 1), g = Math.floor(h / s); g < a.getdents.length && c + s <= i; ) {
          var E, A, I = a.getdents[g];
          if (I === ".")
            E = a.node.id, A = 4;
          else if (I === "..") {
            var U = p.lookupPath(a.path, { parent: !0 });
            E = U.node.id, A = 4;
          } else {
            var j = p.lookupNode(a.node, I);
            E = j.id, A = p.isChrdev(j.mode) ? 2 : p.isDir(j.mode) ? 4 : p.isLink(j.mode) ? 10 : 8;
          }
          b = [E >>> 0, (T = E, +Math.abs(T) >= 1 ? T > 0 ? (Math.min(+Math.floor(T / 4294967296), 4294967295) | 0) >>> 0 : ~~+Math.ceil((T - +(~~T >>> 0)) / 4294967296) >>> 0 : 0)], N[t + c >> 2] = b[0], N[t + c + 4 >> 2] = b[1], b = [(g + 1) * s >>> 0, (T = (g + 1) * s, +Math.abs(T) >= 1 ? T > 0 ? (Math.min(+Math.floor(T / 4294967296), 4294967295) | 0) >>> 0 : ~~+Math.ceil((T - +(~~T >>> 0)) / 4294967296) >>> 0 : 0)], N[t + c + 8 >> 2] = b[0], N[t + c + 12 >> 2] = b[1], Pe[t + c + 16 >> 1] = 280, me[t + c + 18 >> 0] = A, ye(I, t + c + 19, 256), c += s, g += 1;
        }
        return p.llseek(a, g * s, 0), c;
      } catch (V) {
        if (typeof p > "u" || !(V instanceof p.ErrnoError))
          throw V;
        return -V.errno;
      }
    }
    function al(e, t, i) {
      Ce.varargs = i;
      try {
        var a = Ce.getStreamFromFD(e);
        switch (t) {
          case 21509:
          case 21505:
            return a.tty ? 0 : -59;
          case 21510:
          case 21511:
          case 21512:
          case 21506:
          case 21507:
          case 21508:
            return a.tty ? 0 : -59;
          case 21519: {
            if (!a.tty)
              return -59;
            var s = Ce.get();
            return N[s >> 2] = 0, 0;
          }
          case 21520:
            return a.tty ? -28 : -59;
          case 21531: {
            var s = Ce.get();
            return p.ioctl(a, t, s);
          }
          case 21523:
            return a.tty ? 0 : -59;
          case 21524:
            return a.tty ? 0 : -59;
          default:
            return -28;
        }
      } catch (c) {
        if (typeof p > "u" || !(c instanceof p.ErrnoError))
          throw c;
        return -c.errno;
      }
    }
    function sl(e, t) {
      try {
        return e = Ce.getStr(e), Ce.doStat(p.lstat, e, t);
      } catch (i) {
        if (typeof p > "u" || !(i instanceof p.ErrnoError))
          throw i;
        return -i.errno;
      }
    }
    function ul(e, t, i) {
      try {
        return t = Ce.getStr(t), t = Ce.calculateAt(e, t), t = ke.normalize(t), t[t.length - 1] === "/" && (t = t.substr(0, t.length - 1)), p.mkdir(t, i, 0), 0;
      } catch (a) {
        if (typeof p > "u" || !(a instanceof p.ErrnoError))
          throw a;
        return -a.errno;
      }
    }
    function ll(e, t, i, a) {
      try {
        t = Ce.getStr(t);
        var s = a & 256, c = a & 4096;
        return a = a & -4353, t = Ce.calculateAt(e, t, c), Ce.doStat(s ? p.lstat : p.stat, t, i);
      } catch (h) {
        if (typeof p > "u" || !(h instanceof p.ErrnoError))
          throw h;
        return -h.errno;
      }
    }
    function fl(e, t, i, a) {
      Ce.varargs = a;
      try {
        t = Ce.getStr(t), t = Ce.calculateAt(e, t);
        var s = a ? Ce.get() : 0;
        return p.open(t, i, s).fd;
      } catch (c) {
        if (typeof p > "u" || !(c instanceof p.ErrnoError))
          throw c;
        return -c.errno;
      }
    }
    function cl(e, t, i, a) {
      try {
        if (t = Ce.getStr(t), t = Ce.calculateAt(e, t), a <= 0)
          return -28;
        var s = p.readlink(t), c = Math.min(a, $e(s)), h = me[i + c];
        return ye(s, i, a + 1), me[i + c] = h, c;
      } catch (g) {
        if (typeof p > "u" || !(g instanceof p.ErrnoError))
          throw g;
        return -g.errno;
      }
    }
    function dl(e, t, i, a) {
      try {
        return t = Ce.getStr(t), a = Ce.getStr(a), t = Ce.calculateAt(e, t), a = Ce.calculateAt(i, a), p.rename(t, a), 0;
      } catch (s) {
        if (typeof p > "u" || !(s instanceof p.ErrnoError))
          throw s;
        return -s.errno;
      }
    }
    function hl(e, t) {
      try {
        return e = Ce.getStr(e), Ce.doStat(p.stat, e, t);
      } catch (i) {
        if (typeof p > "u" || !(i instanceof p.ErrnoError))
          throw i;
        return -i.errno;
      }
    }
    function pl(e, t) {
      try {
        return e = Ce.getStr(e), t = Ce.getStr(t), p.symlink(e, t), 0;
      } catch (i) {
        if (typeof p > "u" || !(i instanceof p.ErrnoError))
          throw i;
        return -i.errno;
      }
    }
    function ml(e, t, i) {
      try {
        return t = Ce.getStr(t), t = Ce.calculateAt(e, t), i === 0 ? p.unlink(t) : i === 512 ? p.rmdir(t) : F("Invalid flags passed to unlinkat"), 0;
      } catch (a) {
        if (typeof p > "u" || !(a instanceof p.ErrnoError))
          throw a;
        return -a.errno;
      }
    }
    function _l(e) {
    }
    var Mo = "To use dlopen, you need enable dynamic linking, see https://github.com/emscripten-core/emscripten/wiki/Linking";
    function bl(e, t) {
      F(Mo);
    }
    function yl(e, t) {
      F(Mo);
    }
    function gl(e, t, i, a, s) {
    }
    function tn(e) {
      switch (e) {
        case 1:
          return 0;
        case 2:
          return 1;
        case 4:
          return 2;
        case 8:
          return 3;
        default:
          throw new TypeError("Unknown type size: " + e);
      }
    }
    function wl() {
      for (var e = new Array(256), t = 0; t < 256; ++t)
        e[t] = String.fromCharCode(t);
      Bo = e;
    }
    var Bo = void 0;
    function tt(e) {
      for (var t = "", i = e; ue[i]; )
        t += Bo[ue[i++]];
      return t;
    }
    var mr = {}, rr = {}, rn = {}, vl = 48, El = 57;
    function nn(e) {
      if (e === void 0)
        return "_unknown";
      e = e.replace(/[^a-zA-Z0-9_]/g, "$");
      var t = e.charCodeAt(0);
      return t >= vl && t <= El ? "_" + e : e;
    }
    function on(e, t) {
      return e = nn(e), new Function("body", "return function " + e + `() {
    "use strict";    return body.apply(this, arguments);
};
`)(t);
    }
    function oi(e, t) {
      var i = on(t, function(a) {
        this.name = t, this.message = a;
        var s = new Error(a).stack;
        s !== void 0 && (this.stack = this.toString() + `
` + s.replace(/^Error(:[^\n]*)?\n/, ""));
      });
      return i.prototype = Object.create(e.prototype), i.prototype.constructor = i, i.prototype.toString = function() {
        return this.message === void 0 ? this.name : this.name + ": " + this.message;
      }, i;
    }
    var _r = void 0;
    function Le(e) {
      throw new _r(e);
    }
    var No = void 0;
    function an(e) {
      throw new No(e);
    }
    function xt(e, t, i) {
      e.forEach(function(g) {
        rn[g] = t;
      });
      function a(g) {
        var E = i(g);
        E.length !== e.length && an("Mismatched type converter count");
        for (var A = 0; A < e.length; ++A)
          At(e[A], E[A]);
      }
      var s = new Array(t.length), c = [], h = 0;
      t.forEach((g, E) => {
        rr.hasOwnProperty(g) ? s[E] = rr[g] : (c.push(g), mr.hasOwnProperty(g) || (mr[g] = []), mr[g].push(() => {
          s[E] = rr[g], ++h, h === c.length && a(s);
        }));
      }), c.length === 0 && a(s);
    }
    function At(e, t, i = {}) {
      if (!("argPackAdvance" in t))
        throw new TypeError("registerType registeredInstance requires argPackAdvance");
      var a = t.name;
      if (e || Le('type "' + a + '" must have a positive integer typeid pointer'), rr.hasOwnProperty(e)) {
        if (i.ignoreDuplicateRegistrations)
          return;
        Le("Cannot register type '" + a + "' twice");
      }
      if (rr[e] = t, delete rn[e], mr.hasOwnProperty(e)) {
        var s = mr[e];
        delete mr[e], s.forEach((c) => c());
      }
    }
    function xl(e, t, i, a, s) {
      var c = tn(i);
      t = tt(t), At(e, { name: t, fromWireType: function(h) {
        return !!h;
      }, toWireType: function(h, g) {
        return g ? a : s;
      }, argPackAdvance: 8, readValueFromPointer: function(h) {
        var g;
        if (i === 1)
          g = me;
        else if (i === 2)
          g = Pe;
        else if (i === 4)
          g = N;
        else
          throw new TypeError("Unknown boolean type size: " + t);
        return this.fromWireType(g[h >> c]);
      }, destructorFunction: null });
    }
    function Sl(e) {
      if (!(this instanceof Ht) || !(e instanceof Ht))
        return !1;
      for (var t = this.$$.ptrType.registeredClass, i = this.$$.ptr, a = e.$$.ptrType.registeredClass, s = e.$$.ptr; t.baseClass; )
        i = t.upcast(i), t = t.baseClass;
      for (; a.baseClass; )
        s = a.upcast(s), a = a.baseClass;
      return t === a && i === s;
    }
    function Tl(e) {
      return { count: e.count, deleteScheduled: e.deleteScheduled, preservePointerOnDelete: e.preservePointerOnDelete, ptr: e.ptr, ptrType: e.ptrType, smartPtr: e.smartPtr, smartPtrType: e.smartPtrType };
    }
    function ai(e) {
      function t(i) {
        return i.$$.ptrType.registeredClass.name;
      }
      Le(t(e) + " instance already deleted");
    }
    var si = !1;
    function Oo(e) {
    }
    function Cl(e) {
      e.smartPtr ? e.smartPtrType.rawDestructor(e.smartPtr) : e.ptrType.registeredClass.rawDestructor(e.ptr);
    }
    function jo(e) {
      e.count.value -= 1;
      var t = e.count.value === 0;
      t && Cl(e);
    }
    function Uo(e, t, i) {
      if (t === i)
        return e;
      if (i.baseClass === void 0)
        return null;
      var a = Uo(e, t, i.baseClass);
      return a === null ? null : i.downcast(a);
    }
    var Wo = {};
    function Fl() {
      return Object.keys(kr).length;
    }
    function Rl() {
      var e = [];
      for (var t in kr)
        kr.hasOwnProperty(t) && e.push(kr[t]);
      return e;
    }
    var Pr = [];
    function ui() {
      for (; Pr.length; ) {
        var e = Pr.pop();
        e.$$.deleteScheduled = !1, e.delete();
      }
    }
    var Dr = void 0;
    function Al(e) {
      Dr = e, Pr.length && Dr && Dr(ui);
    }
    function Il() {
      n.getInheritedInstanceCount = Fl, n.getLiveInheritedInstances = Rl, n.flushPendingDeletes = ui, n.setDelayFunction = Al;
    }
    var kr = {};
    function Pl(e, t) {
      for (t === void 0 && Le("ptr should not be undefined"); e.baseClass; )
        t = e.upcast(t), e = e.baseClass;
      return t;
    }
    function Dl(e, t) {
      return t = Pl(e, t), kr[t];
    }
    function sn(e, t) {
      (!t.ptrType || !t.ptr) && an("makeClassHandle requires ptr and ptrType");
      var i = !!t.smartPtrType, a = !!t.smartPtr;
      return i !== a && an("Both smartPtrType and smartPtr must be specified"), t.count = { value: 1 }, Lr(Object.create(e, { $$: { value: t } }));
    }
    function kl(e) {
      var t = this.getPointee(e);
      if (!t)
        return this.destructor(e), null;
      var i = Dl(this.registeredClass, t);
      if (i !== void 0) {
        if (i.$$.count.value === 0)
          return i.$$.ptr = t, i.$$.smartPtr = e, i.clone();
        var a = i.clone();
        return this.destructor(e), a;
      }
      function s() {
        return this.isSmartPointer ? sn(this.registeredClass.instancePrototype, { ptrType: this.pointeeType, ptr: t, smartPtrType: this, smartPtr: e }) : sn(this.registeredClass.instancePrototype, { ptrType: this, ptr: e });
      }
      var c = this.registeredClass.getActualType(t), h = Wo[c];
      if (!h)
        return s.call(this);
      var g;
      this.isConst ? g = h.constPointerType : g = h.pointerType;
      var E = Uo(t, this.registeredClass, g.registeredClass);
      return E === null ? s.call(this) : this.isSmartPointer ? sn(g.registeredClass.instancePrototype, { ptrType: g, ptr: E, smartPtrType: this, smartPtr: e }) : sn(g.registeredClass.instancePrototype, { ptrType: g, ptr: E });
    }
    function Lr(e) {
      return typeof FinalizationRegistry > "u" ? (Lr = (t) => t, e) : (si = new FinalizationRegistry((t) => {
        jo(t.$$);
      }), Lr = (t) => {
        var i = t.$$, a = !!i.smartPtr;
        if (a) {
          var s = { $$: i };
          si.register(t, s, t);
        }
        return t;
      }, Oo = (t) => si.unregister(t), Lr(e));
    }
    function Ll() {
      if (this.$$.ptr || ai(this), this.$$.preservePointerOnDelete)
        return this.$$.count.value += 1, this;
      var e = Lr(Object.create(Object.getPrototypeOf(this), { $$: { value: Tl(this.$$) } }));
      return e.$$.count.value += 1, e.$$.deleteScheduled = !1, e;
    }
    function Ml() {
      this.$$.ptr || ai(this), this.$$.deleteScheduled && !this.$$.preservePointerOnDelete && Le("Object already scheduled for deletion"), Oo(this), jo(this.$$), this.$$.preservePointerOnDelete || (this.$$.smartPtr = void 0, this.$$.ptr = void 0);
    }
    function Bl() {
      return !this.$$.ptr;
    }
    function Nl() {
      return this.$$.ptr || ai(this), this.$$.deleteScheduled && !this.$$.preservePointerOnDelete && Le("Object already scheduled for deletion"), Pr.push(this), Pr.length === 1 && Dr && Dr(ui), this.$$.deleteScheduled = !0, this;
    }
    function Ol() {
      Ht.prototype.isAliasOf = Sl, Ht.prototype.clone = Ll, Ht.prototype.delete = Ml, Ht.prototype.isDeleted = Bl, Ht.prototype.deleteLater = Nl;
    }
    function Ht() {
    }
    function li(e, t, i) {
      if (e[t].overloadTable === void 0) {
        var a = e[t];
        e[t] = function() {
          return e[t].overloadTable.hasOwnProperty(arguments.length) || Le("Function '" + i + "' called with an invalid number of arguments (" + arguments.length + ") - expects one of (" + e[t].overloadTable + ")!"), e[t].overloadTable[arguments.length].apply(this, arguments);
        }, e[t].overloadTable = [], e[t].overloadTable[a.argCount] = a;
      }
    }
    function fi(e, t, i) {
      n.hasOwnProperty(e) ? ((i === void 0 || n[e].overloadTable !== void 0 && n[e].overloadTable[i] !== void 0) && Le("Cannot register public name '" + e + "' twice"), li(n, e, e), n.hasOwnProperty(i) && Le("Cannot register multiple overloads of a function with the same number of arguments (" + i + ")!"), n[e].overloadTable[i] = t) : (n[e] = t, i !== void 0 && (n[e].numArguments = i));
    }
    function jl(e, t, i, a, s, c, h, g) {
      this.name = e, this.constructor = t, this.instancePrototype = i, this.rawDestructor = a, this.baseClass = s, this.getActualType = c, this.upcast = h, this.downcast = g, this.pureVirtualFunctions = [];
    }
    function un(e, t, i) {
      for (; t !== i; )
        t.upcast || Le("Expected null or instance of " + i.name + ", got an instance of " + t.name), e = t.upcast(e), t = t.baseClass;
      return e;
    }
    function Ul(e, t) {
      if (t === null)
        return this.isReference && Le("null is not a valid " + this.name), 0;
      t.$$ || Le('Cannot pass "' + pi(t) + '" as a ' + this.name), t.$$.ptr || Le("Cannot pass deleted object as a pointer of type " + this.name);
      var i = t.$$.ptrType.registeredClass, a = un(t.$$.ptr, i, this.registeredClass);
      return a;
    }
    function Wl(e, t) {
      var i;
      if (t === null)
        return this.isReference && Le("null is not a valid " + this.name), this.isSmartPointer ? (i = this.rawConstructor(), e !== null && e.push(this.rawDestructor, i), i) : 0;
      t.$$ || Le('Cannot pass "' + pi(t) + '" as a ' + this.name), t.$$.ptr || Le("Cannot pass deleted object as a pointer of type " + this.name), !this.isConst && t.$$.ptrType.isConst && Le("Cannot convert argument of type " + (t.$$.smartPtrType ? t.$$.smartPtrType.name : t.$$.ptrType.name) + " to parameter type " + this.name);
      var a = t.$$.ptrType.registeredClass;
      if (i = un(t.$$.ptr, a, this.registeredClass), this.isSmartPointer)
        switch (t.$$.smartPtr === void 0 && Le("Passing raw pointer to smart pointer is illegal"), this.sharingPolicy) {
          case 0:
            t.$$.smartPtrType === this ? i = t.$$.smartPtr : Le("Cannot convert argument of type " + (t.$$.smartPtrType ? t.$$.smartPtrType.name : t.$$.ptrType.name) + " to parameter type " + this.name);
            break;
          case 1:
            i = t.$$.smartPtr;
            break;
          case 2:
            if (t.$$.smartPtrType === this)
              i = t.$$.smartPtr;
            else {
              var s = t.clone();
              i = this.rawShare(i, Xe.toHandle(function() {
                s.delete();
              })), e !== null && e.push(this.rawDestructor, i);
            }
            break;
          default:
            Le("Unsupporting sharing policy");
        }
      return i;
    }
    function $l(e, t) {
      if (t === null)
        return this.isReference && Le("null is not a valid " + this.name), 0;
      t.$$ || Le('Cannot pass "' + pi(t) + '" as a ' + this.name), t.$$.ptr || Le("Cannot pass deleted object as a pointer of type " + this.name), t.$$.ptrType.isConst && Le("Cannot convert argument of type " + t.$$.ptrType.name + " to parameter type " + this.name);
      var i = t.$$.ptrType.registeredClass, a = un(t.$$.ptr, i, this.registeredClass);
      return a;
    }
    function ln(e) {
      return this.fromWireType(N[e >> 2]);
    }
    function Gl(e) {
      return this.rawGetPointee && (e = this.rawGetPointee(e)), e;
    }
    function Vl(e) {
      this.rawDestructor && this.rawDestructor(e);
    }
    function zl(e) {
      e !== null && e.delete();
    }
    function Hl() {
      It.prototype.getPointee = Gl, It.prototype.destructor = Vl, It.prototype.argPackAdvance = 8, It.prototype.readValueFromPointer = ln, It.prototype.deleteObject = zl, It.prototype.fromWireType = kl;
    }
    function It(e, t, i, a, s, c, h, g, E, A, I) {
      this.name = e, this.registeredClass = t, this.isReference = i, this.isConst = a, this.isSmartPointer = s, this.pointeeType = c, this.sharingPolicy = h, this.rawGetPointee = g, this.rawConstructor = E, this.rawShare = A, this.rawDestructor = I, !s && t.baseClass === void 0 ? a ? (this.toWireType = Ul, this.destructorFunction = null) : (this.toWireType = $l, this.destructorFunction = null) : this.toWireType = Wl;
    }
    function $o(e, t, i) {
      n.hasOwnProperty(e) || an("Replacing nonexistant public symbol"), n[e].overloadTable !== void 0 && i !== void 0 ? n[e].overloadTable[i] = t : (n[e] = t, n[e].argCount = i);
    }
    function Kl(e, t, i) {
      var a = n["dynCall_" + e];
      return i && i.length ? a.apply(null, [t].concat(i)) : a.call(null, t);
    }
    var fn = [];
    function Kt(e) {
      var t = fn[e];
      return t || (e >= fn.length && (fn.length = e + 1), fn[e] = t = it.get(e)), t;
    }
    function Yl(e, t, i) {
      if (e.includes("j"))
        return Kl(e, t, i);
      var a = Kt(t).apply(null, i);
      return a;
    }
    function Xl(e, t) {
      var i = [];
      return function() {
        return i.length = 0, Object.assign(i, arguments), Yl(e, t, i);
      };
    }
    function dt(e, t) {
      e = tt(e);
      function i() {
        return e.includes("j") ? Xl(e, t) : Kt(t);
      }
      var a = i();
      return typeof a != "function" && Le("unknown function pointer with signature " + e + ": " + t), a;
    }
    var Go = void 0;
    function Vo(e) {
      var t = da(e), i = tt(t);
      return Pt(t), i;
    }
    function nr(e, t) {
      var i = [], a = {};
      function s(c) {
        if (!a[c] && !rr[c]) {
          if (rn[c]) {
            rn[c].forEach(s);
            return;
          }
          i.push(c), a[c] = !0;
        }
      }
      throw t.forEach(s), new Go(e + ": " + i.map(Vo).join([", "]));
    }
    function Zl(e, t, i, a, s, c, h, g, E, A, I, U, j) {
      I = tt(I), c = dt(s, c), g && (g = dt(h, g)), A && (A = dt(E, A)), j = dt(U, j);
      var V = nn(I);
      fi(V, function() {
        nr("Cannot construct " + I + " due to unbound types", [a]);
      }), xt([e, t, i], a ? [a] : [], function(ee) {
        ee = ee[0];
        var ce, he;
        a ? (ce = ee.registeredClass, he = ce.instancePrototype) : he = Ht.prototype;
        var we = on(V, function() {
          if (Object.getPrototypeOf(this) !== G)
            throw new _r("Use 'new' to construct " + I);
          if (ie.constructor_body === void 0)
            throw new _r(I + " has no accessible constructor");
          var ae = ie.constructor_body[arguments.length];
          if (ae === void 0)
            throw new _r("Tried to invoke ctor of " + I + " with invalid number of parameters (" + arguments.length + ") - expected (" + Object.keys(ie.constructor_body).toString() + ") parameters instead!");
          return ae.apply(this, arguments);
        }), G = Object.create(he, { constructor: { value: we } });
        we.prototype = G;
        var ie = new jl(I, we, G, j, ce, c, g, A), ve = new It(I, ie, !0, !1, !1), Ee = new It(I + "*", ie, !1, !1, !1), Me = new It(I + " const*", ie, !1, !0, !1);
        return Wo[e] = { pointerType: Ee, constPointerType: Me }, $o(V, we), [ve, Ee, Me];
      });
    }
    function zo(e, t) {
      if (!(e instanceof Function))
        throw new TypeError("new_ called with constructor type " + typeof e + " which is not a function");
      var i = on(e.name || "unknownFunctionName", function() {
      });
      i.prototype = e.prototype;
      var a = new i(), s = e.apply(a, t);
      return s instanceof Object ? s : a;
    }
    function ci(e) {
      for (; e.length; ) {
        var t = e.pop(), i = e.pop();
        i(t);
      }
    }
    function cn(e, t, i, a, s) {
      var c = t.length;
      c < 2 && Le("argTypes array size mismatch! Must at least get return value and 'this' types!");
      for (var h = t[1] !== null && i !== null, g = !1, E = 1; E < t.length; ++E)
        if (t[E] !== null && t[E].destructorFunction === void 0) {
          g = !0;
          break;
        }
      for (var A = t[0].name !== "void", I = "", U = "", E = 0; E < c - 2; ++E)
        I += (E !== 0 ? ", " : "") + "arg" + E, U += (E !== 0 ? ", " : "") + "arg" + E + "Wired";
      var j = "return function " + nn(e) + "(" + I + `) {
if (arguments.length !== ` + (c - 2) + `) {
throwBindingError('function ` + e + " called with ' + arguments.length + ' arguments, expected " + (c - 2) + ` args!');
}
`;
      g && (j += `var destructors = [];
`);
      var V = g ? "destructors" : "null", ee = ["throwBindingError", "invoker", "fn", "runDestructors", "retType", "classParam"], ce = [Le, a, s, ci, t[0], t[1]];
      h && (j += "var thisWired = classParam.toWireType(" + V + `, this);
`);
      for (var E = 0; E < c - 2; ++E)
        j += "var arg" + E + "Wired = argType" + E + ".toWireType(" + V + ", arg" + E + "); // " + t[E + 2].name + `
`, ee.push("argType" + E), ce.push(t[E + 2]);
      if (h && (U = "thisWired" + (U.length > 0 ? ", " : "") + U), j += (A ? "var rv = " : "") + "invoker(fn" + (U.length > 0 ? ", " : "") + U + `);
`, g)
        j += `runDestructors(destructors);
`;
      else
        for (var E = h ? 1 : 2; E < t.length; ++E) {
          var he = E === 1 ? "thisWired" : "arg" + (E - 2) + "Wired";
          t[E].destructorFunction !== null && (j += he + "_dtor(" + he + "); // " + t[E].name + `
`, ee.push(he + "_dtor"), ce.push(t[E].destructorFunction));
        }
      A && (j += `var ret = retType.fromWireType(rv);
return ret;
`), j += `}
`, ee.push(j);
      var we = zo(Function, ee).apply(null, ce);
      return we;
    }
    function dn(e, t) {
      for (var i = [], a = 0; a < e; a++)
        i.push(ne[t + a * 4 >> 2]);
      return i;
    }
    function ql(e, t, i, a, s, c, h) {
      var g = dn(i, a);
      t = tt(t), c = dt(s, c), xt([], [e], function(E) {
        E = E[0];
        var A = E.name + "." + t;
        function I() {
          nr("Cannot call " + A + " due to unbound types", g);
        }
        t.startsWith("@@") && (t = Symbol[t.substring(2)]);
        var U = E.registeredClass.constructor;
        return U[t] === void 0 ? (I.argCount = i - 1, U[t] = I) : (li(U, t, A), U[t].overloadTable[i - 1] = I), xt([], g, function(j) {
          var V = [j[0], null].concat(j.slice(1)), ee = cn(A, V, null, c, h);
          return U[t].overloadTable === void 0 ? (ee.argCount = i - 1, U[t] = ee) : U[t].overloadTable[i - 1] = ee, [];
        }), [];
      });
    }
    function Ql(e, t, i, a, s, c) {
      Ue(t > 0);
      var h = dn(t, i);
      s = dt(a, s), xt([], [e], function(g) {
        g = g[0];
        var E = "constructor " + g.name;
        if (g.registeredClass.constructor_body === void 0 && (g.registeredClass.constructor_body = []), g.registeredClass.constructor_body[t - 1] !== void 0)
          throw new _r("Cannot register multiple constructors with identical number of parameters (" + (t - 1) + ") for class '" + g.name + "'! Overload resolution is currently only performed using the parameter count, not actual type info!");
        return g.registeredClass.constructor_body[t - 1] = () => {
          nr("Cannot construct " + g.name + " due to unbound types", h);
        }, xt([], h, function(A) {
          return A.splice(1, 0, null), g.registeredClass.constructor_body[t - 1] = cn(E, A, null, s, c), [];
        }), [];
      });
    }
    function Jl(e, t, i, a, s, c, h, g) {
      var E = dn(i, a);
      t = tt(t), c = dt(s, c), xt([], [e], function(A) {
        A = A[0];
        var I = A.name + "." + t;
        t.startsWith("@@") && (t = Symbol[t.substring(2)]), g && A.registeredClass.pureVirtualFunctions.push(t);
        function U() {
          nr("Cannot call " + I + " due to unbound types", E);
        }
        var j = A.registeredClass.instancePrototype, V = j[t];
        return V === void 0 || V.overloadTable === void 0 && V.className !== A.name && V.argCount === i - 2 ? (U.argCount = i - 2, U.className = A.name, j[t] = U) : (li(j, t, I), j[t].overloadTable[i - 2] = U), xt([], E, function(ee) {
          var ce = cn(I, ee, A, c, h);
          return j[t].overloadTable === void 0 ? (ce.argCount = i - 2, j[t] = ce) : j[t].overloadTable[i - 2] = ce, [];
        }), [];
      });
    }
    function Ho(e, t, i) {
      return e instanceof Object || Le(i + ' with invalid "this": ' + e), e instanceof t.registeredClass.constructor || Le(i + ' incompatible with "this" of type ' + e.constructor.name), e.$$.ptr || Le("cannot call emscripten binding method " + i + " on deleted object"), un(e.$$.ptr, e.$$.ptrType.registeredClass, t.registeredClass);
    }
    function ef(e, t, i, a, s, c, h, g, E, A) {
      t = tt(t), s = dt(a, s), xt([], [e], function(I) {
        I = I[0];
        var U = I.name + "." + t, j = { get: function() {
          nr("Cannot access " + U + " due to unbound types", [i, h]);
        }, enumerable: !0, configurable: !0 };
        return E ? j.set = () => {
          nr("Cannot access " + U + " due to unbound types", [i, h]);
        } : j.set = (V) => {
          Le(U + " is a read-only property");
        }, Object.defineProperty(I.registeredClass.instancePrototype, t, j), xt([], E ? [i, h] : [i], function(V) {
          var ee = V[0], ce = { get: function() {
            var we = Ho(this, I, U + " getter");
            return ee.fromWireType(s(c, we));
          }, enumerable: !0 };
          if (E) {
            E = dt(g, E);
            var he = V[1];
            ce.set = function(we) {
              var G = Ho(this, I, U + " setter"), ie = [];
              E(A, G, he.toWireType(ie, we)), ci(ie);
            };
          }
          return Object.defineProperty(I.registeredClass.instancePrototype, t, ce), [];
        }), [];
      });
    }
    var di = [], St = [{}, { value: void 0 }, { value: null }, { value: !0 }, { value: !1 }];
    function hi(e) {
      e > 4 && --St[e].refcount === 0 && (St[e] = void 0, di.push(e));
    }
    function tf() {
      for (var e = 0, t = 5; t < St.length; ++t)
        St[t] !== void 0 && ++e;
      return e;
    }
    function rf() {
      for (var e = 5; e < St.length; ++e)
        if (St[e] !== void 0)
          return St[e];
      return null;
    }
    function nf() {
      n.count_emval_handles = tf, n.get_first_emval = rf;
    }
    var Xe = { toValue: (e) => (e || Le("Cannot use deleted val. handle = " + e), St[e].value), toHandle: (e) => {
      switch (e) {
        case void 0:
          return 1;
        case null:
          return 2;
        case !0:
          return 3;
        case !1:
          return 4;
        default: {
          var t = di.length ? di.pop() : St.length;
          return St[t] = { refcount: 1, value: e }, t;
        }
      }
    } };
    function of(e, t) {
      t = tt(t), At(e, { name: t, fromWireType: function(i) {
        var a = Xe.toValue(i);
        return hi(i), a;
      }, toWireType: function(i, a) {
        return Xe.toHandle(a);
      }, argPackAdvance: 8, readValueFromPointer: ln, destructorFunction: null });
    }
    function af(e, t, i) {
      switch (t) {
        case 0:
          return function(a) {
            var s = i ? me : ue;
            return this.fromWireType(s[a]);
          };
        case 1:
          return function(a) {
            var s = i ? Pe : Te;
            return this.fromWireType(s[a >> 1]);
          };
        case 2:
          return function(a) {
            var s = i ? N : ne;
            return this.fromWireType(s[a >> 2]);
          };
        default:
          throw new TypeError("Unknown integer type: " + e);
      }
    }
    function sf(e, t, i, a) {
      var s = tn(i);
      t = tt(t);
      function c() {
      }
      c.values = {}, At(e, { name: t, constructor: c, fromWireType: function(h) {
        return this.constructor.values[h];
      }, toWireType: function(h, g) {
        return g.value;
      }, argPackAdvance: 8, readValueFromPointer: af(t, s, a), destructorFunction: null }), fi(t, c);
    }
    function hn(e, t) {
      var i = rr[e];
      return i === void 0 && Le(t + " has unknown type " + Vo(e)), i;
    }
    function uf(e, t, i) {
      var a = hn(e, "enum");
      t = tt(t);
      var s = a.constructor, c = Object.create(a.constructor.prototype, { value: { value: i }, constructor: { value: on(a.name + "_" + t, function() {
      }) } });
      s.values[i] = c, s[t] = c;
    }
    function pi(e) {
      if (e === null)
        return "null";
      var t = typeof e;
      return t === "object" || t === "array" || t === "function" ? e.toString() : "" + e;
    }
    function lf(e, t) {
      switch (t) {
        case 2:
          return function(i) {
            return this.fromWireType(te[i >> 2]);
          };
        case 3:
          return function(i) {
            return this.fromWireType(ge[i >> 3]);
          };
        default:
          throw new TypeError("Unknown float type: " + e);
      }
    }
    function ff(e, t, i) {
      var a = tn(i);
      t = tt(t), At(e, { name: t, fromWireType: function(s) {
        return s;
      }, toWireType: function(s, c) {
        return c;
      }, argPackAdvance: 8, readValueFromPointer: lf(t, a), destructorFunction: null });
    }
    function cf(e, t, i, a, s, c) {
      var h = dn(t, i);
      e = tt(e), s = dt(a, s), fi(e, function() {
        nr("Cannot call " + e + " due to unbound types", h);
      }, t - 1), xt([], h, function(g) {
        var E = [g[0], null].concat(g.slice(1));
        return $o(e, cn(e, E, null, s, c), t - 1), [];
      });
    }
    function df(e, t, i) {
      switch (t) {
        case 0:
          return i ? function(s) {
            return me[s];
          } : function(s) {
            return ue[s];
          };
        case 1:
          return i ? function(s) {
            return Pe[s >> 1];
          } : function(s) {
            return Te[s >> 1];
          };
        case 2:
          return i ? function(s) {
            return N[s >> 2];
          } : function(s) {
            return ne[s >> 2];
          };
        default:
          throw new TypeError("Unknown integer type: " + e);
      }
    }
    function hf(e, t, i, a, s) {
      t = tt(t);
      var c = tn(i), h = (I) => I;
      if (a === 0) {
        var g = 32 - 8 * i;
        h = (I) => I << g >>> g;
      }
      var E = t.includes("unsigned"), A;
      E ? A = function(I, U) {
        return U >>> 0;
      } : A = function(I, U) {
        return U;
      }, At(e, { name: t, fromWireType: h, toWireType: A, argPackAdvance: 8, readValueFromPointer: df(t, c, a !== 0), destructorFunction: null });
    }
    function pf(e, t, i) {
      var a = [Int8Array, Uint8Array, Int16Array, Uint16Array, Int32Array, Uint32Array, Float32Array, Float64Array], s = a[t];
      function c(h) {
        h = h >> 2;
        var g = ne, E = g[h], A = g[h + 1];
        return new s(De, A, E);
      }
      i = tt(i), At(e, { name: i, fromWireType: c, argPackAdvance: 8, readValueFromPointer: c }, { ignoreDuplicateRegistrations: !0 });
    }
    function mf(e, t, i, a, s, c, h, g, E, A, I, U) {
      i = tt(i), c = dt(s, c), g = dt(h, g), A = dt(E, A), U = dt(I, U), xt([e], [t], function(j) {
        j = j[0];
        var V = new It(i, j.registeredClass, !1, !1, !0, j, a, c, g, A, U);
        return [V];
      });
    }
    function _f(e, t) {
      t = tt(t);
      var i = t === "std::string";
      At(e, { name: t, fromWireType: function(a) {
        var s = ne[a >> 2], c = a + 4, h;
        if (i)
          for (var g = c, E = 0; E <= s; ++E) {
            var A = c + E;
            if (E == s || ue[A] == 0) {
              var I = A - g, U = Se(g, I);
              h === void 0 ? h = U : (h += String.fromCharCode(0), h += U), g = A + 1;
            }
          }
        else {
          for (var j = new Array(s), E = 0; E < s; ++E)
            j[E] = String.fromCharCode(ue[c + E]);
          h = j.join("");
        }
        return Pt(a), h;
      }, toWireType: function(a, s) {
        s instanceof ArrayBuffer && (s = new Uint8Array(s));
        var c, h = typeof s == "string";
        h || s instanceof Uint8Array || s instanceof Uint8ClampedArray || s instanceof Int8Array || Le("Cannot pass non-string to std::string"), i && h ? c = $e(s) : c = s.length;
        var g = yt(4 + c + 1), E = g + 4;
        if (ne[g >> 2] = c, i && h)
          ye(s, E, c + 1);
        else if (h)
          for (var A = 0; A < c; ++A) {
            var I = s.charCodeAt(A);
            I > 255 && (Pt(E), Le("String has UTF-16 code units that do not fit in 8 bits")), ue[E + A] = I;
          }
        else
          for (var A = 0; A < c; ++A)
            ue[E + A] = s[A];
        return a !== null && a.push(Pt, g), g;
      }, argPackAdvance: 8, readValueFromPointer: ln, destructorFunction: function(a) {
        Pt(a);
      } });
    }
    var Ko = typeof TextDecoder < "u" ? new TextDecoder("utf-16le") : void 0;
    function bf(e, t) {
      for (var i = e, a = i >> 1, s = a + t / 2; !(a >= s) && Te[a]; )
        ++a;
      if (i = a << 1, i - e > 32 && Ko)
        return Ko.decode(ue.subarray(e, i));
      for (var c = "", h = 0; !(h >= t / 2); ++h) {
        var g = Pe[e + h * 2 >> 1];
        if (g == 0)
          break;
        c += String.fromCharCode(g);
      }
      return c;
    }
    function yf(e, t, i) {
      if (i === void 0 && (i = 2147483647), i < 2)
        return 0;
      i -= 2;
      for (var a = t, s = i < e.length * 2 ? i / 2 : e.length, c = 0; c < s; ++c) {
        var h = e.charCodeAt(c);
        Pe[t >> 1] = h, t += 2;
      }
      return Pe[t >> 1] = 0, t - a;
    }
    function gf(e) {
      return e.length * 2;
    }
    function wf(e, t) {
      for (var i = 0, a = ""; !(i >= t / 4); ) {
        var s = N[e + i * 4 >> 2];
        if (s == 0)
          break;
        if (++i, s >= 65536) {
          var c = s - 65536;
          a += String.fromCharCode(55296 | c >> 10, 56320 | c & 1023);
        } else
          a += String.fromCharCode(s);
      }
      return a;
    }
    function vf(e, t, i) {
      if (i === void 0 && (i = 2147483647), i < 4)
        return 0;
      for (var a = t, s = a + i - 4, c = 0; c < e.length; ++c) {
        var h = e.charCodeAt(c);
        if (h >= 55296 && h <= 57343) {
          var g = e.charCodeAt(++c);
          h = 65536 + ((h & 1023) << 10) | g & 1023;
        }
        if (N[t >> 2] = h, t += 4, t + 4 > s)
          break;
      }
      return N[t >> 2] = 0, t - a;
    }
    function Ef(e) {
      for (var t = 0, i = 0; i < e.length; ++i) {
        var a = e.charCodeAt(i);
        a >= 55296 && a <= 57343 && ++i, t += 4;
      }
      return t;
    }
    function xf(e, t, i) {
      i = tt(i);
      var a, s, c, h, g;
      t === 2 ? (a = bf, s = yf, h = gf, c = () => Te, g = 1) : t === 4 && (a = wf, s = vf, h = Ef, c = () => ne, g = 2), At(e, { name: i, fromWireType: function(E) {
        for (var A = ne[E >> 2], I = c(), U, j = E + 4, V = 0; V <= A; ++V) {
          var ee = E + 4 + V * t;
          if (V == A || I[ee >> g] == 0) {
            var ce = ee - j, he = a(j, ce);
            U === void 0 ? U = he : (U += String.fromCharCode(0), U += he), j = ee + t;
          }
        }
        return Pt(E), U;
      }, toWireType: function(E, A) {
        typeof A != "string" && Le("Cannot pass non-string to C++ string type " + i);
        var I = h(A), U = yt(4 + I + t);
        return ne[U >> 2] = I >> g, s(A, U + 4, I + t), E !== null && E.push(Pt, U), U;
      }, argPackAdvance: 8, readValueFromPointer: ln, destructorFunction: function(E) {
        Pt(E);
      } });
    }
    function Sf(e, t) {
      t = tt(t), At(e, { isVoid: !0, name: t, argPackAdvance: 0, fromWireType: function() {
      }, toWireType: function(i, a) {
      } });
    }
    function Tf(e) {
      var t = He.xhrs[e];
      t && (delete He.xhrs[e], t.readyState > 0 && t.readyState < 4 && t.abort());
    }
    var Cf = !0;
    function Ff() {
      return Cf;
    }
    function Rf(e, t, i) {
      e = Xe.toValue(e), t = hn(t, "emval::as");
      var a = [], s = Xe.toHandle(a);
      return ne[i >> 2] = s, t.toWireType(a, e);
    }
    function Yo(e, t) {
      for (var i = new Array(e), a = 0; a < e; ++a)
        i[a] = hn(ne[t + a * _e >> 2], "parameter " + a);
      return i;
    }
    function Af(e, t, i, a) {
      e = Xe.toValue(e);
      for (var s = Yo(t, i), c = new Array(t), h = 0; h < t; ++h) {
        var g = s[h];
        c[h] = g.readValueFromPointer(a), a += g.argPackAdvance;
      }
      var E = e.apply(void 0, c);
      return Xe.toHandle(E);
    }
    function If(e) {
      var t = [];
      return ne[e >> 2] = Xe.toHandle(t), t;
    }
    var Pf = {};
    function pn(e) {
      var t = Pf[e];
      return t === void 0 ? tt(e) : t;
    }
    var mn = [];
    function Df(e, t, i, a, s) {
      return e = mn[e], t = Xe.toValue(t), i = pn(i), e(t, i, If(a), s);
    }
    function kf(e, t, i, a) {
      e = mn[e], t = Xe.toValue(t), i = pn(i), e(t, i, null, a);
    }
    function Lf(e) {
      var t = mn.length;
      return mn.push(e), t;
    }
    var Xo = [];
    function Mf(e, t) {
      var i = Yo(e, t), a = i[0], s = a.name + "_$" + i.slice(1).map(function(ee) {
        return ee.name;
      }).join("_") + "$", c = Xo[s];
      if (c !== void 0)
        return c;
      for (var h = ["retType"], g = [a], E = "", A = 0; A < e - 1; ++A)
        E += (A !== 0 ? ", " : "") + "arg" + A, h.push("argType" + A), g.push(i[1 + A]);
      for (var I = nn("methodCaller_" + s), U = "return function " + I + `(handle, name, destructors, args) {
`, j = 0, A = 0; A < e - 1; ++A)
        U += "    var arg" + A + " = argType" + A + ".readValueFromPointer(args" + (j ? "+" + j : "") + `);
`, j += i[A + 1].argPackAdvance;
      U += "    var rv = handle[name](" + E + `);
`;
      for (var A = 0; A < e - 1; ++A)
        i[A + 1].deleteObject && (U += "    argType" + A + ".deleteObject(arg" + A + `);
`);
      a.isVoid || (U += `    return retType.toWireType(destructors, rv);
`), U += `};
`, h.push(U);
      var V = zo(Function, h).apply(null, g);
      return c = Lf(V), Xo[s] = c, c;
    }
    function Bf(e) {
      return e = pn(e), Xe.toHandle(n[e]);
    }
    function Nf(e, t) {
      return e = Xe.toValue(e), t = Xe.toValue(t), Xe.toHandle(e[t]);
    }
    function Of(e) {
      e > 4 && (St[e].refcount += 1);
    }
    function jf(e) {
      return e = Xe.toValue(e), typeof e == "number";
    }
    function Uf(e) {
      return Xe.toHandle(pn(e));
    }
    function Wf(e) {
      var t = Xe.toValue(e);
      ci(t), hi(e);
    }
    function $f(e, t, i) {
      e = Xe.toValue(e), t = Xe.toValue(t), i = Xe.toValue(i), e[t] = i;
    }
    function Gf(e, t) {
      e = hn(e, "_emval_take_value");
      var i = e.readValueFromPointer(t);
      return Xe.toHandle(i);
    }
    function Zo(e) {
      return ne[e >> 2] + N[e + 4 >> 2] * 4294967296;
    }
    function Vf(e, t) {
      var i = new Date(Zo(e) * 1e3);
      N[t >> 2] = i.getUTCSeconds(), N[t + 4 >> 2] = i.getUTCMinutes(), N[t + 8 >> 2] = i.getUTCHours(), N[t + 12 >> 2] = i.getUTCDate(), N[t + 16 >> 2] = i.getUTCMonth(), N[t + 20 >> 2] = i.getUTCFullYear() - 1900, N[t + 24 >> 2] = i.getUTCDay();
      var a = Date.UTC(i.getUTCFullYear(), 0, 1, 0, 0, 0, 0), s = (i.getTime() - a) / (1e3 * 60 * 60 * 24) | 0;
      N[t + 28 >> 2] = s;
    }
    function Mr(e) {
      return e % 4 === 0 && (e % 100 !== 0 || e % 400 === 0);
    }
    var zf = [0, 31, 60, 91, 121, 152, 182, 213, 244, 274, 305, 335], Hf = [0, 31, 59, 90, 120, 151, 181, 212, 243, 273, 304, 334];
    function qo(e) {
      var t = Mr(e.getFullYear()), i = t ? zf : Hf, a = i[e.getMonth()] + e.getDate() - 1;
      return a;
    }
    function Kf(e, t) {
      var i = new Date(Zo(e) * 1e3);
      N[t >> 2] = i.getSeconds(), N[t + 4 >> 2] = i.getMinutes(), N[t + 8 >> 2] = i.getHours(), N[t + 12 >> 2] = i.getDate(), N[t + 16 >> 2] = i.getMonth(), N[t + 20 >> 2] = i.getFullYear() - 1900, N[t + 24 >> 2] = i.getDay();
      var a = qo(i) | 0;
      N[t + 28 >> 2] = a, N[t + 36 >> 2] = -(i.getTimezoneOffset() * 60);
      var s = new Date(i.getFullYear(), 0, 1), c = new Date(i.getFullYear(), 6, 1).getTimezoneOffset(), h = s.getTimezoneOffset(), g = (c != h && i.getTimezoneOffset() == Math.min(h, c)) | 0;
      N[t + 32 >> 2] = g;
    }
    function Yf(e) {
      var t = new Date(N[e + 20 >> 2] + 1900, N[e + 16 >> 2], N[e + 12 >> 2], N[e + 8 >> 2], N[e + 4 >> 2], N[e >> 2], 0), i = N[e + 32 >> 2], a = t.getTimezoneOffset(), s = new Date(t.getFullYear(), 0, 1), c = new Date(t.getFullYear(), 6, 1).getTimezoneOffset(), h = s.getTimezoneOffset(), g = Math.min(h, c);
      if (i < 0)
        N[e + 32 >> 2] = +(c != h && g == a);
      else if (i > 0 != (g == a)) {
        var E = Math.max(h, c), A = i > 0 ? g : E;
        t.setTime(t.getTime() + (A - a) * 6e4);
      }
      N[e + 24 >> 2] = t.getDay();
      var I = qo(t) | 0;
      return N[e + 28 >> 2] = I, N[e >> 2] = t.getSeconds(), N[e + 4 >> 2] = t.getMinutes(), N[e + 8 >> 2] = t.getHours(), N[e + 12 >> 2] = t.getDate(), N[e + 16 >> 2] = t.getMonth(), N[e + 20 >> 2] = t.getYear(), t.getTime() / 1e3 | 0;
    }
    function Xf(e, t, i, a, s, c, h) {
      try {
        var g = Ce.getStreamFromFD(a), E = p.mmap(g, e, s, t, i), A = E.ptr;
        return N[c >> 2] = E.allocated, ne[h >> 2] = A, 0;
      } catch (I) {
        if (typeof p > "u" || !(I instanceof p.ErrnoError))
          throw I;
        return -I.errno;
      }
    }
    function Zf(e, t, i, a, s, c) {
      try {
        var h = Ce.getStreamFromFD(s);
        i & 2 && Ce.doMsync(e, h, t, a, c), p.munmap(h);
      } catch (g) {
        if (typeof p > "u" || !(g instanceof p.ErrnoError))
          throw g;
        return -g.errno;
      }
    }
    function _n(e) {
      var t = $e(e) + 1, i = yt(t);
      return i && oe(e, me, i, t), i;
    }
    function qf(e, t, i) {
      var a = (/* @__PURE__ */ new Date()).getFullYear(), s = new Date(a, 0, 1), c = new Date(a, 6, 1), h = s.getTimezoneOffset(), g = c.getTimezoneOffset(), E = Math.max(h, g);
      ne[e >> 2] = E * 60, N[t >> 2] = +(h != g);
      function A(ee) {
        var ce = ee.toTimeString().match(/\(([A-Za-z ]+)\)$/);
        return ce ? ce[1] : "GMT";
      }
      var I = A(s), U = A(c), j = _n(I), V = _n(U);
      g < h ? (ne[i >> 2] = j, ne[i + 4 >> 2] = V) : (ne[i >> 2] = V, ne[i + 4 >> 2] = j);
    }
    function Qf() {
      F("");
    }
    function mi(e, t) {
      if ($.mainLoop.timingMode = e, $.mainLoop.timingValue = t, !$.mainLoop.func)
        return 1;
      if ($.mainLoop.running || ($.mainLoop.running = !0), e == 0)
        $.mainLoop.scheduler = function() {
          var h = Math.max(0, $.mainLoop.tickStartTime + t - bn()) | 0;
          setTimeout($.mainLoop.runner, h);
        }, $.mainLoop.method = "timeout";
      else if (e == 1)
        $.mainLoop.scheduler = function() {
          $.requestAnimationFrame($.mainLoop.runner);
        }, $.mainLoop.method = "rAF";
      else if (e == 2) {
        if (typeof setImmediate > "u") {
          var i = [], a = "setimmediate", s = (c) => {
            (c.data === a || c.data.target === a) && (c.stopPropagation(), i.shift()());
          };
          addEventListener("message", s, !0), setImmediate = function(h) {
            i.push(h), postMessage(a, "*");
          };
        }
        $.mainLoop.scheduler = function() {
          setImmediate($.mainLoop.runner);
        }, $.mainLoop.method = "immediate";
      }
      return 0;
    }
    var bn;
    bn = () => performance.now();
    function Jf(e) {
      be = e, mt() || (n.onExit && n.onExit(e), Ne = !0), _(e, new Ge(e));
    }
    function ec(e, t) {
      be = e, Jf(e);
    }
    var tc = ec;
    function rc(e) {
      if (e instanceof Ge || e == "unwind")
        return be;
      _(1, e);
    }
    function nc(e, t, i, a, s) {
      Ue(!$.mainLoop.func, "emscripten_set_main_loop: there can only be one main loop function at once: call emscripten_cancel_main_loop to cancel the previous one before setting a new one with different parameters."), $.mainLoop.func = e, $.mainLoop.arg = a;
      var c = $.mainLoop.currentlyRunningMainloop;
      function h() {
        return !(c < $.mainLoop.currentlyRunningMainloop);
      }
      if ($.mainLoop.running = !1, $.mainLoop.runner = function() {
        if (!Ne) {
          if ($.mainLoop.queue.length > 0) {
            var E = Date.now(), A = $.mainLoop.queue.shift();
            if (A.func(A.arg), $.mainLoop.remainingBlockers) {
              var I = $.mainLoop.remainingBlockers, U = I % 1 == 0 ? I - 1 : Math.floor(I);
              A.counted ? $.mainLoop.remainingBlockers = U : (U = U + 0.5, $.mainLoop.remainingBlockers = (8 * I + U) / 9);
            }
            if (z('main loop blocker "' + A.name + '" took ' + (Date.now() - E) + " ms"), $.mainLoop.updateStatus(), !h())
              return;
            setTimeout($.mainLoop.runner, 0);
            return;
          }
          if (h()) {
            if ($.mainLoop.currentFrameNumber = $.mainLoop.currentFrameNumber + 1 | 0, $.mainLoop.timingMode == 1 && $.mainLoop.timingValue > 1 && $.mainLoop.currentFrameNumber % $.mainLoop.timingValue != 0) {
              $.mainLoop.scheduler();
              return;
            } else
              $.mainLoop.timingMode == 0 && ($.mainLoop.tickStartTime = bn());
            $.mainLoop.runIter(e), h() && (typeof SDL == "object" && SDL.audio && SDL.audio.queueNewAudioData && SDL.audio.queueNewAudioData(), $.mainLoop.scheduler());
          }
        }
      }, s || (t && t > 0 ? mi(0, 1e3 / t) : mi(1, 1), $.mainLoop.scheduler()), i)
        throw "unwind";
    }
    function yn(e) {
      if (!Ne)
        try {
          e();
        } catch (t) {
          rc(t);
        }
    }
    function Qo(e, t) {
      return setTimeout(function() {
        yn(e);
      }, t);
    }
    function Br(e) {
      Br.shown || (Br.shown = {}), Br.shown[e] || (Br.shown[e] = 1, pe(e));
    }
    var $ = { mainLoop: { running: !1, scheduler: null, method: "", currentlyRunningMainloop: 0, func: null, arg: 0, timingMode: 0, timingValue: 0, currentFrameNumber: 0, queue: [], pause: function() {
      $.mainLoop.scheduler = null, $.mainLoop.currentlyRunningMainloop++;
    }, resume: function() {
      $.mainLoop.currentlyRunningMainloop++;
      var e = $.mainLoop.timingMode, t = $.mainLoop.timingValue, i = $.mainLoop.func;
      $.mainLoop.func = null, nc(i, 0, !1, $.mainLoop.arg, !0), mi(e, t), $.mainLoop.scheduler();
    }, updateStatus: function() {
      if (n.setStatus) {
        var e = n.statusMessage || "Please wait...", t = $.mainLoop.remainingBlockers, i = $.mainLoop.expectedBlockers;
        t ? t < i ? n.setStatus(e + " (" + (i - t) + "/" + i + ")") : n.setStatus(e) : n.setStatus("");
      }
    }, runIter: function(e) {
      if (!Ne) {
        if (n.preMainLoop) {
          var t = n.preMainLoop();
          if (t === !1)
            return;
        }
        yn(e), n.postMainLoop && n.postMainLoop();
      }
    } }, isFullscreen: !1, pointerLock: !1, moduleContextCreatedCallbacks: [], workers: [], init: function() {
      if (n.preloadPlugins || (n.preloadPlugins = []), $.initted)
        return;
      $.initted = !0;
      try {
        new Blob(), $.hasBlobConstructor = !0;
      } catch {
        $.hasBlobConstructor = !1, pe("warning: no blob constructor, cannot create blobs with mimetypes");
      }
      $.BlobBuilder = typeof MozBlobBuilder < "u" ? MozBlobBuilder : typeof WebKitBlobBuilder < "u" ? WebKitBlobBuilder : $.hasBlobConstructor ? null : pe("warning: no BlobBuilder"), $.URLObject = typeof window < "u" ? window.URL ? window.URL : window.webkitURL : void 0, !n.noImageDecoding && typeof $.URLObject > "u" && (pe("warning: Browser does not support creating object URLs. Built-in browser image decoding will not be available."), n.noImageDecoding = !0);
      var e = {};
      e.canHandle = function(c) {
        return !n.noImageDecoding && /\.(jpg|jpeg|png|bmp)$/i.test(c);
      }, e.handle = function(c, h, g, E) {
        var A = null;
        if ($.hasBlobConstructor)
          try {
            A = new Blob([c], { type: $.getMimetype(h) }), A.size !== c.length && (A = new Blob([new Uint8Array(c).buffer], { type: $.getMimetype(h) }));
          } catch (V) {
            Br("Blob constructor present but fails: " + V + "; falling back to blob builder");
          }
        if (!A) {
          var I = new $.BlobBuilder();
          I.append(new Uint8Array(c).buffer), A = I.getBlob();
        }
        var U = $.URLObject.createObjectURL(A), j = new Image();
        j.onload = () => {
          Ue(j.complete, "Image " + h + " could not be decoded");
          var V = document.createElement("canvas");
          V.width = j.width, V.height = j.height;
          var ee = V.getContext("2d");
          ee.drawImage(j, 0, 0), $.URLObject.revokeObjectURL(U), g && g(c);
        }, j.onerror = (V) => {
          z("Image " + U + " could not be decoded"), E && E();
        }, j.src = U;
      }, n.preloadPlugins.push(e);
      var t = {};
      t.canHandle = function(c) {
        return !n.noAudioDecoding && c.substr(-4) in { ".ogg": 1, ".wav": 1, ".mp3": 1 };
      }, t.handle = function(c, h, g, E) {
        var A = !1;
        function I(ce) {
          A || (A = !0, g && g(c));
        }
        function U() {
          A || (A = !0, new Audio(), E && E());
        }
        if ($.hasBlobConstructor) {
          try {
            var j = new Blob([c], { type: $.getMimetype(h) });
          } catch {
            return U();
          }
          var V = $.URLObject.createObjectURL(j), ee = new Audio();
          ee.addEventListener("canplaythrough", () => I(), !1), ee.onerror = function(he) {
            if (A)
              return;
            pe("warning: browser could not fully decode audio " + h + ", trying slower base64 approach");
            function we(G) {
              for (var ie = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/", ve = "=", Ee = "", Me = 0, ae = 0, st = 0; st < G.length; st++)
                for (Me = Me << 8 | G[st], ae += 8; ae >= 6; ) {
                  var je = Me >> ae - 6 & 63;
                  ae -= 6, Ee += ie[je];
                }
              return ae == 2 ? (Ee += ie[(Me & 3) << 4], Ee += ve + ve) : ae == 4 && (Ee += ie[(Me & 15) << 2], Ee += ve), Ee;
            }
            ee.src = "data:audio/x-" + h.substr(-3) + ";base64," + we(c), I();
          }, ee.src = V, Qo(function() {
            I();
          }, 1e4);
        } else
          return U();
      }, n.preloadPlugins.push(t);
      function i() {
        $.pointerLock = document.pointerLockElement === n.canvas || document.mozPointerLockElement === n.canvas || document.webkitPointerLockElement === n.canvas || document.msPointerLockElement === n.canvas;
      }
      var a = n.canvas;
      a && (a.requestPointerLock = a.requestPointerLock || a.mozRequestPointerLock || a.webkitRequestPointerLock || a.msRequestPointerLock || (() => {
      }), a.exitPointerLock = document.exitPointerLock || document.mozExitPointerLock || document.webkitExitPointerLock || document.msExitPointerLock || (() => {
      }), a.exitPointerLock = a.exitPointerLock.bind(document), document.addEventListener("pointerlockchange", i, !1), document.addEventListener("mozpointerlockchange", i, !1), document.addEventListener("webkitpointerlockchange", i, !1), document.addEventListener("mspointerlockchange", i, !1), n.elementPointerLock && a.addEventListener("click", (s) => {
        !$.pointerLock && n.canvas.requestPointerLock && (n.canvas.requestPointerLock(), s.preventDefault());
      }, !1));
    }, handledByPreloadPlugin: function(e, t, i, a) {
      $.init();
      var s = !1;
      return n.preloadPlugins.forEach(function(c) {
        s || c.canHandle(t) && (c.handle(e, t, i, a), s = !0);
      }), s;
    }, createContext: function(e, t, i, a) {
      if (t && n.ctx && e == n.canvas)
        return n.ctx;
      var s, c;
      if (t) {
        var h = { antialias: !1, alpha: !1, majorVersion: typeof WebGL2RenderingContext < "u" ? 2 : 1 };
        if (a)
          for (var g in a)
            h[g] = a[g];
        typeof Q < "u" && (c = Q.createContext(e, h), c && (s = Q.getContext(c).GLctx));
      } else
        s = e.getContext("2d");
      return s ? (i && (t || Ue(typeof H > "u", "cannot set in module if GLctx is used, but we are a non-GL context that would replace it"), n.ctx = s, t && Q.makeContextCurrent(c), n.useWebGL = t, $.moduleContextCreatedCallbacks.forEach(function(E) {
        E();
      }), $.init()), s) : null;
    }, destroyContext: function(e, t, i) {
    }, fullscreenHandlersInstalled: !1, lockPointer: void 0, resizeCanvas: void 0, requestFullscreen: function(e, t) {
      $.lockPointer = e, $.resizeCanvas = t, typeof $.lockPointer > "u" && ($.lockPointer = !0), typeof $.resizeCanvas > "u" && ($.resizeCanvas = !1);
      var i = n.canvas;
      function a() {
        $.isFullscreen = !1;
        var c = i.parentNode;
        (document.fullscreenElement || document.mozFullScreenElement || document.msFullscreenElement || document.webkitFullscreenElement || document.webkitCurrentFullScreenElement) === c ? (i.exitFullscreen = $.exitFullscreen, $.lockPointer && i.requestPointerLock(), $.isFullscreen = !0, $.resizeCanvas ? $.setFullscreenCanvasSize() : $.updateCanvasDimensions(i)) : (c.parentNode.insertBefore(i, c), c.parentNode.removeChild(c), $.resizeCanvas ? $.setWindowedCanvasSize() : $.updateCanvasDimensions(i)), n.onFullScreen && n.onFullScreen($.isFullscreen), n.onFullscreen && n.onFullscreen($.isFullscreen);
      }
      $.fullscreenHandlersInstalled || ($.fullscreenHandlersInstalled = !0, document.addEventListener("fullscreenchange", a, !1), document.addEventListener("mozfullscreenchange", a, !1), document.addEventListener("webkitfullscreenchange", a, !1), document.addEventListener("MSFullscreenChange", a, !1));
      var s = document.createElement("div");
      i.parentNode.insertBefore(s, i), s.appendChild(i), s.requestFullscreen = s.requestFullscreen || s.mozRequestFullScreen || s.msRequestFullscreen || (s.webkitRequestFullscreen ? () => s.webkitRequestFullscreen(Element.ALLOW_KEYBOARD_INPUT) : null) || (s.webkitRequestFullScreen ? () => s.webkitRequestFullScreen(Element.ALLOW_KEYBOARD_INPUT) : null), s.requestFullscreen();
    }, exitFullscreen: function() {
      if (!$.isFullscreen)
        return !1;
      var e = document.exitFullscreen || document.cancelFullScreen || document.mozCancelFullScreen || document.msExitFullscreen || document.webkitCancelFullScreen || function() {
      };
      return e.apply(document, []), !0;
    }, nextRAF: 0, fakeRequestAnimationFrame: function(e) {
      var t = Date.now();
      if ($.nextRAF === 0)
        $.nextRAF = t + 1e3 / 60;
      else
        for (; t + 2 >= $.nextRAF; )
          $.nextRAF += 1e3 / 60;
      var i = Math.max($.nextRAF - t, 0);
      setTimeout(e, i);
    }, requestAnimationFrame: function(e) {
      if (typeof requestAnimationFrame == "function") {
        requestAnimationFrame(e);
        return;
      }
      var t = $.fakeRequestAnimationFrame;
      t(e);
    }, safeSetTimeout: function(e, t) {
      return Qo(e, t);
    }, safeRequestAnimationFrame: function(e) {
      return $.requestAnimationFrame(function() {
        yn(e);
      });
    }, getMimetype: function(e) {
      return { jpg: "image/jpeg", jpeg: "image/jpeg", png: "image/png", bmp: "image/bmp", ogg: "audio/ogg", wav: "audio/wav", mp3: "audio/mpeg" }[e.substr(e.lastIndexOf(".") + 1)];
    }, getUserMedia: function(e) {
      window.getUserMedia || (window.getUserMedia = navigator.getUserMedia || navigator.mozGetUserMedia), window.getUserMedia(e);
    }, getMovementX: function(e) {
      return e.movementX || e.mozMovementX || e.webkitMovementX || 0;
    }, getMovementY: function(e) {
      return e.movementY || e.mozMovementY || e.webkitMovementY || 0;
    }, getMouseWheelDelta: function(e) {
      var t = 0;
      switch (e.type) {
        case "DOMMouseScroll":
          t = e.detail / 3;
          break;
        case "mousewheel":
          t = e.wheelDelta / 120;
          break;
        case "wheel":
          switch (t = e.deltaY, e.deltaMode) {
            case 0:
              t /= 100;
              break;
            case 1:
              t /= 3;
              break;
            case 2:
              t *= 80;
              break;
            default:
              throw "unrecognized mouse wheel delta mode: " + e.deltaMode;
          }
          break;
        default:
          throw "unrecognized mouse wheel event: " + e.type;
      }
      return t;
    }, mouseX: 0, mouseY: 0, mouseMovementX: 0, mouseMovementY: 0, touches: {}, lastTouches: {}, calculateMouseEvent: function(e) {
      if ($.pointerLock)
        e.type != "mousemove" && "mozMovementX" in e ? $.mouseMovementX = $.mouseMovementY = 0 : ($.mouseMovementX = $.getMovementX(e), $.mouseMovementY = $.getMovementY(e)), typeof SDL < "u" ? ($.mouseX = SDL.mouseX + $.mouseMovementX, $.mouseY = SDL.mouseY + $.mouseMovementY) : ($.mouseX += $.mouseMovementX, $.mouseY += $.mouseMovementY);
      else {
        var t = n.canvas.getBoundingClientRect(), i = n.canvas.width, a = n.canvas.height, s = typeof window.scrollX < "u" ? window.scrollX : window.pageXOffset, c = typeof window.scrollY < "u" ? window.scrollY : window.pageYOffset;
        if (e.type === "touchstart" || e.type === "touchend" || e.type === "touchmove") {
          var h = e.touch;
          if (h === void 0)
            return;
          var g = h.pageX - (s + t.left), E = h.pageY - (c + t.top);
          g = g * (i / t.width), E = E * (a / t.height);
          var A = { x: g, y: E };
          if (e.type === "touchstart")
            $.lastTouches[h.identifier] = A, $.touches[h.identifier] = A;
          else if (e.type === "touchend" || e.type === "touchmove") {
            var I = $.touches[h.identifier];
            I || (I = A), $.lastTouches[h.identifier] = I, $.touches[h.identifier] = A;
          }
          return;
        }
        var U = e.pageX - (s + t.left), j = e.pageY - (c + t.top);
        U = U * (i / t.width), j = j * (a / t.height), $.mouseMovementX = U - $.mouseX, $.mouseMovementY = j - $.mouseY, $.mouseX = U, $.mouseY = j;
      }
    }, resizeListeners: [], updateResizeListeners: function() {
      var e = n.canvas;
      $.resizeListeners.forEach(function(t) {
        t(e.width, e.height);
      });
    }, setCanvasSize: function(e, t, i) {
      var a = n.canvas;
      $.updateCanvasDimensions(a, e, t), i || $.updateResizeListeners();
    }, windowedWidth: 0, windowedHeight: 0, setFullscreenCanvasSize: function() {
      if (typeof SDL < "u") {
        var e = ne[SDL.screen >> 2];
        e = e | 8388608, N[SDL.screen >> 2] = e;
      }
      $.updateCanvasDimensions(n.canvas), $.updateResizeListeners();
    }, setWindowedCanvasSize: function() {
      if (typeof SDL < "u") {
        var e = ne[SDL.screen >> 2];
        e = e & -8388609, N[SDL.screen >> 2] = e;
      }
      $.updateCanvasDimensions(n.canvas), $.updateResizeListeners();
    }, updateCanvasDimensions: function(e, t, i) {
      t && i ? (e.widthNative = t, e.heightNative = i) : (t = e.widthNative, i = e.heightNative);
      var a = t, s = i;
      if (n.forcedAspectRatio && n.forcedAspectRatio > 0 && (a / s < n.forcedAspectRatio ? a = Math.round(s * n.forcedAspectRatio) : s = Math.round(a / n.forcedAspectRatio)), (document.fullscreenElement || document.mozFullScreenElement || document.msFullscreenElement || document.webkitFullscreenElement || document.webkitCurrentFullScreenElement) === e.parentNode && typeof screen < "u") {
        var c = Math.min(screen.width / a, screen.height / s);
        a = Math.round(a * c), s = Math.round(s * c);
      }
      $.resizeCanvas ? (e.width != a && (e.width = a), e.height != s && (e.height = s), typeof e.style < "u" && (e.style.removeProperty("width"), e.style.removeProperty("height"))) : (e.width != t && (e.width = t), e.height != i && (e.height = i), typeof e.style < "u" && (a != t || s != i ? (e.style.setProperty("width", a + "px", "important"), e.style.setProperty("height", s + "px", "important")) : (e.style.removeProperty("width"), e.style.removeProperty("height"))));
    } }, R = { QUEUE_INTERVAL: 25, QUEUE_LOOKAHEAD: 0.1, DEVICE_NAME: "Emscripten OpenAL", CAPTURE_DEVICE_NAME: "Emscripten OpenAL capture", ALC_EXTENSIONS: { ALC_SOFT_pause_device: !0, ALC_SOFT_HRTF: !0 }, AL_EXTENSIONS: { AL_EXT_float32: !0, AL_SOFT_loop_points: !0, AL_SOFT_source_length: !0, AL_EXT_source_distance_model: !0, AL_SOFT_source_spatialize: !0 }, _alcErr: 0, alcErr: 0, deviceRefCounts: {}, alcStringCache: {}, paused: !1, stringCache: {}, contexts: {}, currentCtx: null, buffers: { 0: { id: 0, refCount: 0, audioBuf: null, frequency: 0, bytesPerSample: 2, channels: 1, length: 0 } }, paramArray: [], _nextId: 1, newId: function() {
      return R.freeIds.length > 0 ? R.freeIds.pop() : R._nextId++;
    }, freeIds: [], scheduleContextAudio: function(e) {
      if (!($.mainLoop.timingMode === 1 && document.visibilityState != "visible"))
        for (var t in e.sources)
          R.scheduleSourceAudio(e.sources[t]);
    }, scheduleSourceAudio: function(e, t) {
      if (!($.mainLoop.timingMode === 1 && document.visibilityState != "visible") && e.state === 4114) {
        for (var i = R.updateSourceTime(e), a = e.bufStartTime, s = e.bufOffset, c = e.bufsProcessed, h = 0; h < e.audioQueue.length; h++) {
          var g = e.audioQueue[h];
          a = g._startTime + g._duration, s = 0, c += g._skipCount + 1;
        }
        t || (t = R.QUEUE_LOOKAHEAD);
        for (var E = i + t, A = 0; a < E; ) {
          if (c >= e.bufQueue.length)
            if (e.looping)
              c %= e.bufQueue.length;
            else
              break;
          var I = e.bufQueue[c % e.bufQueue.length];
          if (I.length === 0) {
            if (A++, A === e.bufQueue.length)
              break;
          } else {
            var g = e.context.audioCtx.createBufferSource();
            g.buffer = I.audioBuf, g.playbackRate.value = e.playbackRate, (I.audioBuf._loopStart || I.audioBuf._loopEnd) && (g.loopStart = I.audioBuf._loopStart, g.loopEnd = I.audioBuf._loopEnd);
            var U = 0;
            e.type === 4136 && e.looping ? (U = Number.POSITIVE_INFINITY, g.loop = !0, I.audioBuf._loopStart && (g.loopStart = I.audioBuf._loopStart), I.audioBuf._loopEnd && (g.loopEnd = I.audioBuf._loopEnd)) : U = (I.audioBuf.duration - s) / e.playbackRate, g._startOffset = s, g._duration = U, g._skipCount = A, A = 0, g.connect(e.gain), typeof g.start < "u" ? (a = Math.max(a, e.context.audioCtx.currentTime), g.start(a, s)) : typeof g.noteOn < "u" && (a = Math.max(a, e.context.audioCtx.currentTime), g.noteOn(a)), g._startTime = a, e.audioQueue.push(g), a += U;
          }
          s = 0, c++;
        }
      }
    }, updateSourceTime: function(e) {
      var t = e.context.audioCtx.currentTime;
      if (e.state !== 4114)
        return t;
      isFinite(e.bufStartTime) || (e.bufStartTime = t - e.bufOffset / e.playbackRate, e.bufOffset = 0);
      for (var i = 0; e.audioQueue.length; ) {
        var a = e.audioQueue[0];
        if (e.bufsProcessed += a._skipCount, i = a._startTime + a._duration, t < i)
          break;
        e.audioQueue.shift(), e.bufStartTime = i, e.bufOffset = 0, e.bufsProcessed++;
      }
      if (e.bufsProcessed >= e.bufQueue.length && !e.looping)
        R.setSourceState(e, 4116);
      else if (e.type === 4136 && e.looping) {
        var s = e.bufQueue[0];
        if (s.length === 0)
          e.bufOffset = 0;
        else {
          var c = (t - e.bufStartTime) * e.playbackRate, h = s.audioBuf._loopStart || 0, g = s.audioBuf._loopEnd || s.audioBuf.duration;
          g <= h && (g = s.audioBuf.duration), c < g ? e.bufOffset = c : e.bufOffset = h + (c - h) % (g - h);
        }
      } else if (e.audioQueue[0])
        e.bufOffset = (t - e.audioQueue[0]._startTime) * e.playbackRate;
      else {
        if (e.type !== 4136 && e.looping) {
          var E = R.sourceDuration(e) / e.playbackRate;
          E > 0 && (e.bufStartTime += Math.floor((t - e.bufStartTime) / E) * E);
        }
        for (var A = 0; A < e.bufQueue.length; A++) {
          if (e.bufsProcessed >= e.bufQueue.length)
            if (e.looping)
              e.bufsProcessed %= e.bufQueue.length;
            else {
              R.setSourceState(e, 4116);
              break;
            }
          var s = e.bufQueue[e.bufsProcessed];
          if (s.length > 0) {
            if (i = e.bufStartTime + s.audioBuf.duration / e.playbackRate, t < i) {
              e.bufOffset = (t - e.bufStartTime) * e.playbackRate;
              break;
            }
            e.bufStartTime = i;
          }
          e.bufOffset = 0, e.bufsProcessed++;
        }
      }
      return t;
    }, cancelPendingSourceAudio: function(e) {
      R.updateSourceTime(e);
      for (var t = 1; t < e.audioQueue.length; t++) {
        var i = e.audioQueue[t];
        i.stop();
      }
      e.audioQueue.length > 1 && (e.audioQueue.length = 1);
    }, stopSourceAudio: function(e) {
      for (var t = 0; t < e.audioQueue.length; t++)
        e.audioQueue[t].stop();
      e.audioQueue.length = 0;
    }, setSourceState: function(e, t) {
      t === 4114 ? ((e.state === 4114 || e.state == 4116) && (e.bufsProcessed = 0, e.bufOffset = 0), R.stopSourceAudio(e), e.state = 4114, e.bufStartTime = Number.NEGATIVE_INFINITY, R.scheduleSourceAudio(e)) : t === 4115 ? e.state === 4114 && (R.updateSourceTime(e), R.stopSourceAudio(e), e.state = 4115) : t === 4116 ? e.state !== 4113 && (e.state = 4116, e.bufsProcessed = e.bufQueue.length, e.bufStartTime = Number.NEGATIVE_INFINITY, e.bufOffset = 0, R.stopSourceAudio(e)) : t === 4113 && e.state !== 4113 && (e.state = 4113, e.bufsProcessed = 0, e.bufStartTime = Number.NEGATIVE_INFINITY, e.bufOffset = 0, R.stopSourceAudio(e));
    }, initSourcePanner: function(e) {
      if (e.type !== 4144) {
        for (var t = R.buffers[0], i = 0; i < e.bufQueue.length; i++)
          if (e.bufQueue[i].id !== 0) {
            t = e.bufQueue[i];
            break;
          }
        if (e.spatialize === 1 || e.spatialize === 2 && t.channels === 1) {
          if (e.panner)
            return;
          e.panner = e.context.audioCtx.createPanner(), R.updateSourceGlobal(e), R.updateSourceSpace(e), e.panner.connect(e.context.gain), e.gain.disconnect(), e.gain.connect(e.panner);
        } else {
          if (!e.panner)
            return;
          e.panner.disconnect(), e.gain.disconnect(), e.gain.connect(e.context.gain), e.panner = null;
        }
      }
    }, updateContextGlobal: function(e) {
      for (var t in e.sources)
        R.updateSourceGlobal(e.sources[t]);
    }, updateSourceGlobal: function(e) {
      var t = e.panner;
      if (t) {
        t.refDistance = e.refDistance, t.maxDistance = e.maxDistance, t.rolloffFactor = e.rolloffFactor, t.panningModel = e.context.hrtf ? "HRTF" : "equalpower";
        var i = e.context.sourceDistanceModel ? e.distanceModel : e.context.distanceModel;
        switch (i) {
          case 0:
            t.distanceModel = "inverse", t.refDistance = 340282e33;
            break;
          case 53249:
          case 53250:
            t.distanceModel = "inverse";
            break;
          case 53251:
          case 53252:
            t.distanceModel = "linear";
            break;
          case 53253:
          case 53254:
            t.distanceModel = "exponential";
            break;
        }
      }
    }, updateListenerSpace: function(e) {
      var t = e.audioCtx.listener;
      t.positionX ? (t.positionX.value = e.listener.position[0], t.positionY.value = e.listener.position[1], t.positionZ.value = e.listener.position[2]) : t.setPosition(e.listener.position[0], e.listener.position[1], e.listener.position[2]), t.forwardX ? (t.forwardX.value = e.listener.direction[0], t.forwardY.value = e.listener.direction[1], t.forwardZ.value = e.listener.direction[2], t.upX.value = e.listener.up[0], t.upY.value = e.listener.up[1], t.upZ.value = e.listener.up[2]) : t.setOrientation(e.listener.direction[0], e.listener.direction[1], e.listener.direction[2], e.listener.up[0], e.listener.up[1], e.listener.up[2]);
      for (var i in e.sources)
        R.updateSourceSpace(e.sources[i]);
    }, updateSourceSpace: function(e) {
      if (e.panner) {
        var t = e.panner, i = e.position[0], a = e.position[1], s = e.position[2], c = e.direction[0], h = e.direction[1], g = e.direction[2], E = e.context.listener, A = E.position[0], I = E.position[1], U = E.position[2];
        if (e.relative) {
          var j = -E.direction[0], V = -E.direction[1], ee = -E.direction[2], ce = E.up[0], he = E.up[1], we = E.up[2], G = function(ya, ga, wa) {
            var va = Math.sqrt(ya * ya + ga * ga + wa * wa);
            return va < Number.EPSILON ? 0 : 1 / va;
          }, ie = G(j, V, ee);
          j *= ie, V *= ie, ee *= ie, ie = G(ce, he, we), ce *= ie, he *= ie, we *= ie;
          var ve = he * ee - we * V, Ee = we * j - ce * ee, Me = ce * V - he * j;
          ie = G(ve, Ee, Me), ve *= ie, Ee *= ie, Me *= ie, ce = V * Me - ee * Ee, he = ee * ve - j * Me, we = j * Ee - V * ve;
          var ae = c, st = h, je = g;
          c = ae * ve + st * ce + je * j, h = ae * Ee + st * he + je * V, g = ae * Me + st * we + je * ee, ae = i, st = a, je = s, i = ae * ve + st * ce + je * j, a = ae * Ee + st * he + je * V, s = ae * Me + st * we + je * ee, i += A, a += I, s += U;
        }
        t.positionX ? (i != t.positionX.value && (t.positionX.value = i), a != t.positionY.value && (t.positionY.value = a), s != t.positionZ.value && (t.positionZ.value = s)) : t.setPosition(i, a, s), t.orientationX ? (c != t.orientationX.value && (t.orientationX.value = c), h != t.orientationY.value && (t.orientationY.value = h), g != t.orientationZ.value && (t.orientationZ.value = g)) : t.setOrientation(c, h, g);
        var gt = e.dopplerShift, Tt = e.velocity[0], gr = e.velocity[1], Ct = e.velocity[2], Dt = E.velocity[0], ir = E.velocity[1], Ze = E.velocity[2];
        if (i === A && a === I && s === U || Tt === Dt && gr === ir && Ct === Ze)
          e.dopplerShift = 1;
        else {
          var ht = e.context.speedOfSound, _t = e.context.dopplerFactor, Cn = A - i, Fn = I - a, Rn = U - s, ba = Math.sqrt(Cn * Cn + Fn * Fn + Rn * Rn), Ei = (Cn * Dt + Fn * ir + Rn * Ze) / ba, xi = (Cn * Tt + Fn * gr + Rn * Ct) / ba;
          Ei = Math.min(Ei, ht / _t), xi = Math.min(xi, ht / _t), e.dopplerShift = (ht - _t * Ei) / (ht - _t * xi);
        }
        e.dopplerShift !== gt && R.updateSourceRate(e);
      }
    }, updateSourceRate: function(e) {
      if (e.state === 4114) {
        R.cancelPendingSourceAudio(e);
        var t = e.audioQueue[0];
        if (!t)
          return;
        var i;
        e.type === 4136 && e.looping ? i = Number.POSITIVE_INFINITY : i = (t.buffer.duration - t._startOffset) / e.playbackRate, t._duration = i, t.playbackRate.value = e.playbackRate, R.scheduleSourceAudio(e);
      }
    }, sourceDuration: function(e) {
      for (var t = 0, i = 0; i < e.bufQueue.length; i++) {
        var a = e.bufQueue[i].audioBuf;
        t += a ? a.duration : 0;
      }
      return t;
    }, sourceTell: function(e) {
      R.updateSourceTime(e);
      for (var t = 0, i = 0; i < e.bufsProcessed; i++)
        e.bufQueue[i].audioBuf && (t += e.bufQueue[i].audioBuf.duration);
      return t += e.bufOffset, t;
    }, sourceSeek: function(e, t) {
      var i = e.state == 4114;
      if (i && R.setSourceState(e, 4113), e.bufQueue[e.bufsProcessed].audioBuf !== null) {
        for (e.bufsProcessed = 0; t > e.bufQueue[e.bufsProcessed].audioBuf.duration; )
          t -= e.bufQueue[e.bufsProcessed].audiobuf.duration, e.bufsProcessed++;
        e.bufOffset = t;
      }
      i && R.setSourceState(e, 4114);
    }, getGlobalParam: function(e, t) {
      if (!R.currentCtx)
        return null;
      switch (t) {
        case 49152:
          return R.currentCtx.dopplerFactor;
        case 49155:
          return R.currentCtx.speedOfSound;
        case 53248:
          return R.currentCtx.distanceModel;
        default:
          return R.currentCtx.err = 40962, null;
      }
    }, setGlobalParam: function(e, t, i) {
      if (R.currentCtx)
        switch (t) {
          case 49152:
            if (!Number.isFinite(i) || i < 0) {
              R.currentCtx.err = 40963;
              return;
            }
            R.currentCtx.dopplerFactor = i, R.updateListenerSpace(R.currentCtx);
            break;
          case 49155:
            if (!Number.isFinite(i) || i <= 0) {
              R.currentCtx.err = 40963;
              return;
            }
            R.currentCtx.speedOfSound = i, R.updateListenerSpace(R.currentCtx);
            break;
          case 53248:
            switch (i) {
              case 0:
              case 53249:
              case 53250:
              case 53251:
              case 53252:
              case 53253:
              case 53254:
                R.currentCtx.distanceModel = i, R.updateContextGlobal(R.currentCtx);
                break;
              default:
                R.currentCtx.err = 40963;
                return;
            }
            break;
          default:
            R.currentCtx.err = 40962;
            return;
        }
    }, getListenerParam: function(e, t) {
      if (!R.currentCtx)
        return null;
      switch (t) {
        case 4100:
          return R.currentCtx.listener.position;
        case 4102:
          return R.currentCtx.listener.velocity;
        case 4111:
          return R.currentCtx.listener.direction.concat(R.currentCtx.listener.up);
        case 4106:
          return R.currentCtx.gain.gain.value;
        default:
          return R.currentCtx.err = 40962, null;
      }
    }, setListenerParam: function(e, t, i) {
      if (R.currentCtx) {
        if (i === null) {
          R.currentCtx.err = 40962;
          return;
        }
        var a = R.currentCtx.listener;
        switch (t) {
          case 4100:
            if (!Number.isFinite(i[0]) || !Number.isFinite(i[1]) || !Number.isFinite(i[2])) {
              R.currentCtx.err = 40963;
              return;
            }
            a.position[0] = i[0], a.position[1] = i[1], a.position[2] = i[2], R.updateListenerSpace(R.currentCtx);
            break;
          case 4102:
            if (!Number.isFinite(i[0]) || !Number.isFinite(i[1]) || !Number.isFinite(i[2])) {
              R.currentCtx.err = 40963;
              return;
            }
            a.velocity[0] = i[0], a.velocity[1] = i[1], a.velocity[2] = i[2], R.updateListenerSpace(R.currentCtx);
            break;
          case 4106:
            if (!Number.isFinite(i) || i < 0) {
              R.currentCtx.err = 40963;
              return;
            }
            R.currentCtx.gain.gain.value = i;
            break;
          case 4111:
            if (!Number.isFinite(i[0]) || !Number.isFinite(i[1]) || !Number.isFinite(i[2]) || !Number.isFinite(i[3]) || !Number.isFinite(i[4]) || !Number.isFinite(i[5])) {
              R.currentCtx.err = 40963;
              return;
            }
            a.direction[0] = i[0], a.direction[1] = i[1], a.direction[2] = i[2], a.up[0] = i[3], a.up[1] = i[4], a.up[2] = i[5], R.updateListenerSpace(R.currentCtx);
            break;
          default:
            R.currentCtx.err = 40962;
            return;
        }
      }
    }, getBufferParam: function(e, t, i) {
      if (R.currentCtx) {
        var a = R.buffers[t];
        if (!a || t === 0) {
          R.currentCtx.err = 40961;
          return;
        }
        switch (i) {
          case 8193:
            return a.frequency;
          case 8194:
            return a.bytesPerSample * 8;
          case 8195:
            return a.channels;
          case 8196:
            return a.length * a.bytesPerSample * a.channels;
          case 8213:
            return a.length === 0 ? [0, 0] : [(a.audioBuf._loopStart || 0) * a.frequency, (a.audioBuf._loopEnd || a.length) * a.frequency];
          default:
            return R.currentCtx.err = 40962, null;
        }
      }
    }, setBufferParam: function(e, t, i, a) {
      if (R.currentCtx) {
        var s = R.buffers[t];
        if (!s || t === 0) {
          R.currentCtx.err = 40961;
          return;
        }
        if (a === null) {
          R.currentCtx.err = 40962;
          return;
        }
        switch (i) {
          case 8196:
            if (a !== 0) {
              R.currentCtx.err = 40963;
              return;
            }
            break;
          case 8213:
            if (a[0] < 0 || a[0] > s.length || a[1] < 0 || a[1] > s.Length || a[0] >= a[1]) {
              R.currentCtx.err = 40963;
              return;
            }
            if (s.refCount > 0) {
              R.currentCtx.err = 40964;
              return;
            }
            s.audioBuf && (s.audioBuf._loopStart = a[0] / s.frequency, s.audioBuf._loopEnd = a[1] / s.frequency);
            break;
          default:
            R.currentCtx.err = 40962;
            return;
        }
      }
    }, getSourceParam: function(e, t, i) {
      if (!R.currentCtx)
        return null;
      var a = R.currentCtx.sources[t];
      if (!a)
        return R.currentCtx.err = 40961, null;
      switch (i) {
        case 514:
          return a.relative;
        case 4097:
          return a.coneInnerAngle;
        case 4098:
          return a.coneOuterAngle;
        case 4099:
          return a.pitch;
        case 4100:
          return a.position;
        case 4101:
          return a.direction;
        case 4102:
          return a.velocity;
        case 4103:
          return a.looping;
        case 4105:
          return a.type === 4136 ? a.bufQueue[0].id : 0;
        case 4106:
          return a.gain.gain.value;
        case 4109:
          return a.minGain;
        case 4110:
          return a.maxGain;
        case 4112:
          return a.state;
        case 4117:
          return a.bufQueue.length === 1 && a.bufQueue[0].id === 0 ? 0 : a.bufQueue.length;
        case 4118:
          return a.bufQueue.length === 1 && a.bufQueue[0].id === 0 || a.looping ? 0 : a.bufsProcessed;
        case 4128:
          return a.refDistance;
        case 4129:
          return a.rolloffFactor;
        case 4130:
          return a.coneOuterGain;
        case 4131:
          return a.maxDistance;
        case 4132:
          return R.sourceTell(a);
        case 4133:
          var s = R.sourceTell(a);
          return s > 0 && (s *= a.bufQueue[0].frequency), s;
        case 4134:
          var s = R.sourceTell(a);
          return s > 0 && (s *= a.bufQueue[0].frequency * a.bufQueue[0].bytesPerSample), s;
        case 4135:
          return a.type;
        case 4628:
          return a.spatialize;
        case 8201:
          for (var g = 0, c = 0, h = 0; h < a.bufQueue.length; h++)
            g += a.bufQueue[h].length, a.bufQueue[h].id !== 0 && (c = a.bufQueue[h].bytesPerSample * a.bufQueue[h].channels);
          return g * c;
        case 8202:
          for (var g = 0, h = 0; h < a.bufQueue.length; h++)
            g += a.bufQueue[h].length;
          return g;
        case 8203:
          return R.sourceDuration(a);
        case 53248:
          return a.distanceModel;
        default:
          return R.currentCtx.err = 40962, null;
      }
    }, setSourceParam: function(e, t, i, a) {
      if (R.currentCtx) {
        var s = R.currentCtx.sources[t];
        if (!s) {
          R.currentCtx.err = 40961;
          return;
        }
        if (a === null) {
          R.currentCtx.err = 40962;
          return;
        }
        switch (i) {
          case 514:
            if (a === 1)
              s.relative = !0, R.updateSourceSpace(s);
            else if (a === 0)
              s.relative = !1, R.updateSourceSpace(s);
            else {
              R.currentCtx.err = 40963;
              return;
            }
            break;
          case 4097:
            if (!Number.isFinite(a)) {
              R.currentCtx.err = 40963;
              return;
            }
            s.coneInnerAngle = a, s.panner && (s.panner.coneInnerAngle = a % 360);
            break;
          case 4098:
            if (!Number.isFinite(a)) {
              R.currentCtx.err = 40963;
              return;
            }
            s.coneOuterAngle = a, s.panner && (s.panner.coneOuterAngle = a % 360);
            break;
          case 4099:
            if (!Number.isFinite(a) || a <= 0) {
              R.currentCtx.err = 40963;
              return;
            }
            if (s.pitch === a)
              break;
            s.pitch = a, R.updateSourceRate(s);
            break;
          case 4100:
            if (!Number.isFinite(a[0]) || !Number.isFinite(a[1]) || !Number.isFinite(a[2])) {
              R.currentCtx.err = 40963;
              return;
            }
            s.position[0] = a[0], s.position[1] = a[1], s.position[2] = a[2], R.updateSourceSpace(s);
            break;
          case 4101:
            if (!Number.isFinite(a[0]) || !Number.isFinite(a[1]) || !Number.isFinite(a[2])) {
              R.currentCtx.err = 40963;
              return;
            }
            s.direction[0] = a[0], s.direction[1] = a[1], s.direction[2] = a[2], R.updateSourceSpace(s);
            break;
          case 4102:
            if (!Number.isFinite(a[0]) || !Number.isFinite(a[1]) || !Number.isFinite(a[2])) {
              R.currentCtx.err = 40963;
              return;
            }
            s.velocity[0] = a[0], s.velocity[1] = a[1], s.velocity[2] = a[2], R.updateSourceSpace(s);
            break;
          case 4103:
            if (a === 1) {
              if (s.looping = !0, R.updateSourceTime(s), s.type === 4136 && s.audioQueue.length > 0) {
                var c = s.audioQueue[0];
                c.loop = !0, c._duration = Number.POSITIVE_INFINITY;
              }
            } else if (a === 0) {
              s.looping = !1;
              var h = R.updateSourceTime(s);
              if (s.type === 4136 && s.audioQueue.length > 0) {
                var c = s.audioQueue[0];
                c.loop = !1, c._duration = s.bufQueue[0].audioBuf.duration / s.playbackRate, c._startTime = h - s.bufOffset / s.playbackRate;
              }
            } else {
              R.currentCtx.err = 40963;
              return;
            }
            break;
          case 4105:
            if (s.state === 4114 || s.state === 4115) {
              R.currentCtx.err = 40964;
              return;
            }
            if (a === 0) {
              for (var g in s.bufQueue)
                s.bufQueue[g].refCount--;
              s.bufQueue.length = 1, s.bufQueue[0] = R.buffers[0], s.bufsProcessed = 0, s.type = 4144;
            } else {
              var E = R.buffers[a];
              if (!E) {
                R.currentCtx.err = 40963;
                return;
              }
              for (var g in s.bufQueue)
                s.bufQueue[g].refCount--;
              s.bufQueue.length = 0, E.refCount++, s.bufQueue = [E], s.bufsProcessed = 0, s.type = 4136;
            }
            R.initSourcePanner(s), R.scheduleSourceAudio(s);
            break;
          case 4106:
            if (!Number.isFinite(a) || a < 0) {
              R.currentCtx.err = 40963;
              return;
            }
            s.gain.gain.value = a;
            break;
          case 4109:
            if (!Number.isFinite(a) || a < 0 || a > Math.min(s.maxGain, 1)) {
              R.currentCtx.err = 40963;
              return;
            }
            s.minGain = a;
            break;
          case 4110:
            if (!Number.isFinite(a) || a < Math.max(0, s.minGain) || a > 1) {
              R.currentCtx.err = 40963;
              return;
            }
            s.maxGain = a;
            break;
          case 4128:
            if (!Number.isFinite(a) || a < 0) {
              R.currentCtx.err = 40963;
              return;
            }
            s.refDistance = a, s.panner && (s.panner.refDistance = a);
            break;
          case 4129:
            if (!Number.isFinite(a) || a < 0) {
              R.currentCtx.err = 40963;
              return;
            }
            s.rolloffFactor = a, s.panner && (s.panner.rolloffFactor = a);
            break;
          case 4130:
            if (!Number.isFinite(a) || a < 0 || a > 1) {
              R.currentCtx.err = 40963;
              return;
            }
            s.coneOuterGain = a, s.panner && (s.panner.coneOuterGain = a);
            break;
          case 4131:
            if (!Number.isFinite(a) || a < 0) {
              R.currentCtx.err = 40963;
              return;
            }
            s.maxDistance = a, s.panner && (s.panner.maxDistance = a);
            break;
          case 4132:
            if (a < 0 || a > R.sourceDuration(s)) {
              R.currentCtx.err = 40963;
              return;
            }
            R.sourceSeek(s, a);
            break;
          case 4133:
            var U = R.sourceDuration(s);
            if (U > 0) {
              var A;
              for (var I in s.bufQueue)
                if (I) {
                  A = s.bufQueue[I].frequency;
                  break;
                }
              a /= A;
            }
            if (a < 0 || a > U) {
              R.currentCtx.err = 40963;
              return;
            }
            R.sourceSeek(s, a);
            break;
          case 4134:
            var U = R.sourceDuration(s);
            if (U > 0) {
              var j;
              for (var I in s.bufQueue)
                if (I) {
                  var E = s.bufQueue[I];
                  j = E.frequency * E.bytesPerSample * E.channels;
                  break;
                }
              a /= j;
            }
            if (a < 0 || a > U) {
              R.currentCtx.err = 40963;
              return;
            }
            R.sourceSeek(s, a);
            break;
          case 4628:
            if (a !== 0 && a !== 1 && a !== 2) {
              R.currentCtx.err = 40963;
              return;
            }
            s.spatialize = a, R.initSourcePanner(s);
            break;
          case 8201:
          case 8202:
          case 8203:
            R.currentCtx.err = 40964;
            break;
          case 53248:
            switch (a) {
              case 0:
              case 53249:
              case 53250:
              case 53251:
              case 53252:
              case 53253:
              case 53254:
                s.distanceModel = a, R.currentCtx.sourceDistanceModel && R.updateContextGlobal(R.currentCtx);
                break;
              default:
                R.currentCtx.err = 40963;
                return;
            }
            break;
          default:
            R.currentCtx.err = 40962;
            return;
        }
      }
    }, captures: {}, sharedCaptureAudioCtx: null, requireValidCaptureDevice: function(e, t) {
      if (e === 0)
        return R.alcErr = 40961, null;
      var i = R.captures[e];
      if (!i)
        return R.alcErr = 40961, null;
      var a = i.mediaStreamError;
      return a ? (R.alcErr = 40961, null) : i;
    } };
    function ic(e, t, i, a, s) {
      if (R.currentCtx) {
        var c = R.buffers[e];
        if (!c) {
          R.currentCtx.err = 40963;
          return;
        }
        if (s <= 0) {
          R.currentCtx.err = 40963;
          return;
        }
        var h = null;
        try {
          switch (t) {
            case 4352:
              if (a > 0) {
                h = R.currentCtx.audioCtx.createBuffer(1, a, s);
                for (var g = h.getChannelData(0), E = 0; E < a; ++E)
                  g[E] = ue[i++] * 78125e-7 - 1;
              }
              c.bytesPerSample = 1, c.channels = 1, c.length = a;
              break;
            case 4353:
              if (a > 0) {
                h = R.currentCtx.audioCtx.createBuffer(1, a >> 1, s);
                var g = h.getChannelData(0);
                i >>= 1;
                for (var E = 0; E < a >> 1; ++E)
                  g[E] = Pe[i++] * 30517578125e-15;
              }
              c.bytesPerSample = 2, c.channels = 1, c.length = a >> 1;
              break;
            case 4354:
              if (a > 0) {
                h = R.currentCtx.audioCtx.createBuffer(2, a >> 1, s);
                for (var g = h.getChannelData(0), A = h.getChannelData(1), E = 0; E < a >> 1; ++E)
                  g[E] = ue[i++] * 78125e-7 - 1, A[E] = ue[i++] * 78125e-7 - 1;
              }
              c.bytesPerSample = 1, c.channels = 2, c.length = a >> 1;
              break;
            case 4355:
              if (a > 0) {
                h = R.currentCtx.audioCtx.createBuffer(2, a >> 2, s);
                var g = h.getChannelData(0), A = h.getChannelData(1);
                i >>= 1;
                for (var E = 0; E < a >> 2; ++E)
                  g[E] = Pe[i++] * 30517578125e-15, A[E] = Pe[i++] * 30517578125e-15;
              }
              c.bytesPerSample = 2, c.channels = 2, c.length = a >> 2;
              break;
            case 65552:
              if (a > 0) {
                h = R.currentCtx.audioCtx.createBuffer(1, a >> 2, s);
                var g = h.getChannelData(0);
                i >>= 2;
                for (var E = 0; E < a >> 2; ++E)
                  g[E] = te[i++];
              }
              c.bytesPerSample = 4, c.channels = 1, c.length = a >> 2;
              break;
            case 65553:
              if (a > 0) {
                h = R.currentCtx.audioCtx.createBuffer(2, a >> 3, s);
                var g = h.getChannelData(0), A = h.getChannelData(1);
                i >>= 2;
                for (var E = 0; E < a >> 3; ++E)
                  g[E] = te[i++], A[E] = te[i++];
              }
              c.bytesPerSample = 4, c.channels = 2, c.length = a >> 3;
              break;
            default:
              R.currentCtx.err = 40963;
              return;
          }
          c.frequency = s, c.audioBuf = h;
        } catch {
          R.currentCtx.err = 40963;
          return;
        }
      }
    }
    function oc(e, t) {
      if (R.currentCtx) {
        for (var i = 0; i < e; ++i) {
          var a = N[t + i * 4 >> 2];
          if (a !== 0) {
            if (!R.buffers[a]) {
              R.currentCtx.err = 40961;
              return;
            }
            if (R.buffers[a].refCount) {
              R.currentCtx.err = 40964;
              return;
            }
          }
        }
        for (var i = 0; i < e; ++i) {
          var a = N[t + i * 4 >> 2];
          a !== 0 && (R.deviceRefCounts[R.buffers[a].deviceId]--, delete R.buffers[a], R.freeIds.push(a));
        }
      }
    }
    function Jo(e, t, i) {
      switch (t) {
        case 514:
        case 4097:
        case 4098:
        case 4103:
        case 4105:
        case 4128:
        case 4129:
        case 4131:
        case 4132:
        case 4133:
        case 4134:
        case 4628:
        case 8201:
        case 8202:
        case 53248:
          R.setSourceParam("alSourcei", e, t, i);
          break;
        default:
          R.setSourceParam("alSourcei", e, t, null);
          break;
      }
    }
    function ac(e, t) {
      if (R.currentCtx) {
        for (var i = 0; i < e; ++i) {
          var a = N[t + i * 4 >> 2];
          if (!R.currentCtx.sources[a]) {
            R.currentCtx.err = 40961;
            return;
          }
        }
        for (var i = 0; i < e; ++i) {
          var a = N[t + i * 4 >> 2];
          R.setSourceState(R.currentCtx.sources[a], 4116), Jo(a, 4105, 0), delete R.currentCtx.sources[a], R.freeIds.push(a);
        }
      }
    }
    function sc(e, t) {
      if (R.currentCtx)
        for (var i = 0; i < e; ++i) {
          var a = { deviceId: R.currentCtx.deviceId, id: R.newId(), refCount: 0, audioBuf: null, frequency: 0, bytesPerSample: 2, channels: 1, length: 0 };
          R.deviceRefCounts[a.deviceId]++, R.buffers[a.id] = a, N[t + i * 4 >> 2] = a.id;
        }
    }
    function uc(e, t) {
      if (R.currentCtx)
        for (var i = 0; i < e; ++i) {
          var a = R.currentCtx.audioCtx.createGain();
          a.connect(R.currentCtx.gain);
          var s = { context: R.currentCtx, id: R.newId(), type: 4144, state: 4113, bufQueue: [R.buffers[0]], audioQueue: [], looping: !1, pitch: 1, dopplerShift: 1, gain: a, minGain: 0, maxGain: 1, panner: null, bufsProcessed: 0, bufStartTime: Number.NEGATIVE_INFINITY, bufOffset: 0, relative: !1, refDistance: 1, maxDistance: 340282e33, rolloffFactor: 1, position: [0, 0, 0], velocity: [0, 0, 0], direction: [0, 0, 0], coneOuterGain: 0, coneInnerAngle: 360, coneOuterAngle: 360, distanceModel: 53250, spatialize: 2, get playbackRate() {
            return this.pitch * this.dopplerShift;
          } };
          R.currentCtx.sources[s.id] = s, N[t + i * 4 >> 2] = s.id;
        }
    }
    function lc() {
      if (!R.currentCtx)
        return 40964;
      var e = R.currentCtx.err;
      return R.currentCtx.err = 0, e;
    }
    function fc(e, t, i) {
      var a = R.getSourceParam("alGetSourcei", e, t);
      if (a !== null) {
        if (!i) {
          R.currentCtx.err = 40963;
          return;
        }
        switch (t) {
          case 514:
          case 4097:
          case 4098:
          case 4103:
          case 4105:
          case 4112:
          case 4117:
          case 4118:
          case 4128:
          case 4129:
          case 4131:
          case 4132:
          case 4133:
          case 4134:
          case 4135:
          case 4628:
          case 8201:
          case 8202:
          case 53248:
            N[i >> 2] = a;
            break;
          default:
            R.currentCtx.err = 40962;
            return;
        }
      }
    }
    function cc(e) {
      if (R.stringCache[e])
        return R.stringCache[e];
      var t;
      switch (e) {
        case 0:
          t = "No Error";
          break;
        case 40961:
          t = "Invalid Name";
          break;
        case 40962:
          t = "Invalid Enum";
          break;
        case 40963:
          t = "Invalid Value";
          break;
        case 40964:
          t = "Invalid Operation";
          break;
        case 40965:
          t = "Out of Memory";
          break;
        case 45057:
          t = "Emscripten";
          break;
        case 45058:
          t = "1.1";
          break;
        case 45059:
          t = "WebAudio";
          break;
        case 45060:
          t = "";
          for (var i in R.AL_EXTENSIONS)
            t = t.concat(i), t = t.concat(" ");
          t = t.trim();
          break;
        default:
          return R.currentCtx && (R.currentCtx.err = 40962), 0;
      }
      return t = _n(t), R.stringCache[e] = t, t;
    }
    function dc(e) {
      if (R.currentCtx) {
        var t = R.currentCtx.sources[e];
        if (!t) {
          R.currentCtx.err = 40961;
          return;
        }
        R.setSourceState(t, 4115);
      }
    }
    function hc(e) {
      if (R.currentCtx) {
        var t = R.currentCtx.sources[e];
        if (!t) {
          R.currentCtx.err = 40961;
          return;
        }
        R.setSourceState(t, 4114);
      }
    }
    function pc(e) {
      if (R.currentCtx) {
        var t = R.currentCtx.sources[e];
        if (!t) {
          R.currentCtx.err = 40961;
          return;
        }
        R.setSourceState(t, 4116);
      }
    }
    function mc(e, t, i) {
      switch (t) {
        case 4097:
        case 4098:
        case 4099:
        case 4106:
        case 4109:
        case 4110:
        case 4128:
        case 4129:
        case 4130:
        case 4131:
        case 4132:
        case 4133:
        case 4134:
        case 8203:
          R.setSourceParam("alSourcef", e, t, i);
          break;
        default:
          R.setSourceParam("alSourcef", e, t, null);
          break;
      }
    }
    function _c(e) {
      return !(e in R.deviceRefCounts) || R.deviceRefCounts[e] > 0 ? 0 : (delete R.deviceRefCounts[e], R.freeIds.push(e), 1);
    }
    function bc(e, t, i) {
      e.addEventListener(t, i, { once: !0 });
    }
    function ea(e, t) {
      t || (t = [document, document.getElementById("canvas")]), ["keydown", "mousedown", "touchstart"].forEach(function(i) {
        t.forEach(function(a) {
          a && bc(a, i, () => {
            e.state === "suspended" && e.resume();
          });
        });
      });
    }
    function yc(e, t) {
      if (!(e in R.deviceRefCounts))
        return R.alcErr = 40961, 0;
      var i = null, a = [], s = null;
      if (t >>= 2, t)
        for (var c = 0, h = 0; c = N[t++], a.push(c), c !== 0; )
          switch (h = N[t++], a.push(h), c) {
            case 4103:
              i || (i = {}), i.sampleRate = h;
              break;
            case 4112:
            case 4113:
              break;
            case 6546:
              switch (h) {
                case 0:
                  s = !1;
                  break;
                case 1:
                  s = !0;
                  break;
                case 2:
                  break;
                default:
                  return R.alcErr = 40964, 0;
              }
              break;
            case 6550:
              if (h !== 0)
                return R.alcErr = 40964, 0;
              break;
            default:
              return R.alcErr = 40964, 0;
          }
      var g = window.AudioContext || window.webkitAudioContext, E = null;
      try {
        i ? E = new g(i) : E = new g();
      } catch (V) {
        return V.name === "NotSupportedError" ? R.alcErr = 40964 : R.alcErr = 40961, 0;
      }
      ea(E), typeof E.createGain > "u" && (E.createGain = E.createGainNode);
      var A = E.createGain();
      A.connect(E.destination);
      var I = { deviceId: e, id: R.newId(), attrs: a, audioCtx: E, listener: { position: [0, 0, 0], velocity: [0, 0, 0], direction: [0, 0, 0], up: [0, 0, 0] }, sources: [], interval: setInterval(function() {
        R.scheduleContextAudio(I);
      }, R.QUEUE_INTERVAL), gain: A, distanceModel: 53250, speedOfSound: 343.3, dopplerFactor: 1, sourceDistanceModel: !1, hrtf: s || !1, _err: 0, get err() {
        return this._err;
      }, set err(V) {
        (this._err === 0 || V === 0) && (this._err = V);
      } };
      if (R.deviceRefCounts[e]++, R.contexts[I.id] = I, s !== null)
        for (var U in R.contexts) {
          var j = R.contexts[U];
          j.deviceId === e && (j.hrtf = s, R.updateContextGlobal(j));
        }
      return I.id;
    }
    function gc(e) {
      var t = R.contexts[e];
      if (R.currentCtx === t) {
        R.alcErr = 40962;
        return;
      }
      R.contexts[e].interval && clearInterval(R.contexts[e].interval), R.deviceRefCounts[t.deviceId]--, delete R.contexts[e], R.freeIds.push(e);
    }
    function wc(e) {
      var t = R.alcErr;
      return R.alcErr = 0, t;
    }
    function vc(e, t) {
      if (R.alcStringCache[t])
        return R.alcStringCache[t];
      var i;
      switch (t) {
        case 0:
          i = "No Error";
          break;
        case 40961:
          i = "Invalid Device";
          break;
        case 40962:
          i = "Invalid Context";
          break;
        case 40963:
          i = "Invalid Enum";
          break;
        case 40964:
          i = "Invalid Value";
          break;
        case 40965:
          i = "Out of Memory";
          break;
        case 4100:
          if (typeof AudioContext < "u" || typeof webkitAudioContext < "u")
            i = R.DEVICE_NAME;
          else
            return 0;
          break;
        case 4101:
          typeof AudioContext < "u" || typeof webkitAudioContext < "u" ? i = R.DEVICE_NAME.concat("\0") : i = "\0";
          break;
        case 785:
          i = R.CAPTURE_DEVICE_NAME;
          break;
        case 784:
          if (e === 0)
            i = R.CAPTURE_DEVICE_NAME.concat("\0");
          else {
            var a = R.requireValidCaptureDevice(e, "alcGetString");
            if (!a)
              return 0;
            i = a.deviceName;
          }
          break;
        case 4102:
          if (!e)
            return R.alcErr = 40961, 0;
          i = "";
          for (var s in R.ALC_EXTENSIONS)
            i = i.concat(s), i = i.concat(" ");
          i = i.trim();
          break;
        default:
          return R.alcErr = 40963, 0;
      }
      return i = _n(i), R.alcStringCache[t] = i, i;
    }
    function Ec(e) {
      return e === 0 ? R.currentCtx = null : R.currentCtx = R.contexts[e], 1;
    }
    function xc(e) {
      if (e) {
        var t = Se(e);
        if (t !== R.DEVICE_NAME)
          return 0;
      }
      if (typeof AudioContext < "u" || typeof webkitAudioContext < "u") {
        var i = R.newId();
        return R.deviceRefCounts[i] = 0, i;
      }
      return 0;
    }
    function Sc() {
      return Date.now();
    }
    function ta() {
      return 2147483648;
    }
    function Tc() {
      return ta();
    }
    function Cc() {
      return !k;
    }
    function Fc(e, t, i) {
      ue.copyWithin(e, t, t + i);
    }
    function Rc(e) {
      try {
        return Fe.grow(e - De.byteLength + 65535 >>> 16), Ae(Fe.buffer), 1;
      } catch {
      }
    }
    function Ac(e) {
      var t = ue.length;
      e = e >>> 0;
      var i = ta();
      if (e > i)
        return !1;
      let a = (E, A) => E + (A - E % A) % A;
      for (var s = 1; s <= 4; s *= 2) {
        var c = t * (1 + 0.2 / s);
        c = Math.min(c, e + 100663296);
        var h = Math.min(i, a(Math.max(e, c), 65536)), g = Rc(h);
        if (g)
          return !0;
      }
      return !1;
    }
    var He = { xhrs: {}, setu64: function(e, t) {
      ne[e >> 2] = t, ne[e + 4 >> 2] = t / 4294967296 | 0;
    }, openDatabase: function(e, t, i, a) {
      try {
        var s = indexedDB.open(e, t);
      } catch (c) {
        return a(c);
      }
      s.onupgradeneeded = (c) => {
        var h = c.target.result;
        h.objectStoreNames.contains("FILES") && h.deleteObjectStore("FILES"), h.createObjectStore("FILES");
      }, s.onsuccess = (c) => i(c.target.result), s.onerror = (c) => a(c);
    }, staticInit: function() {
      var e = (i) => {
        He.dbInstance = i, m();
      }, t = () => {
        He.dbInstance = !1, m();
      };
      He.openDatabase("emscripten_filesystem", 1, e, t), (typeof ENVIRONMENT_IS_FETCH_WORKER > "u" || !ENVIRONMENT_IS_FETCH_WORKER) && d();
    } };
    function _i(e, t, i, a, s) {
      var c = ne[e + 8 >> 2];
      if (!c) {
        i(e, 0, "no url specified!");
        return;
      }
      var h = Se(c), g = e + 112, E = Se(g);
      E || (E = "GET");
      var A = ne[g + 52 >> 2], I = ne[g + 56 >> 2], U = !!ne[g + 60 >> 2], j = ne[g + 68 >> 2], V = ne[g + 72 >> 2], ee = ne[g + 76 >> 2], ce = ne[g + 80 >> 2], he = ne[g + 84 >> 2], we = ne[g + 88 >> 2], G = !!(A & 1), ie = !!(A & 2), ve = !!(A & 64), Ee = j ? Se(j) : void 0, Me = V ? Se(V) : void 0, ae = new XMLHttpRequest();
      if (ae.withCredentials = U, ae.open(E, h, !ve, Ee, Me), ve || (ae.timeout = I), ae.url_ = h, ae.responseType = "arraybuffer", ce) {
        var st = Se(ce);
        ae.overrideMimeType(st);
      }
      if (ee)
        for (; ; ) {
          var je = ne[ee >> 2];
          if (!je)
            break;
          var gt = ne[ee + 4 >> 2];
          if (!gt)
            break;
          ee += 8;
          var Tt = Se(je), gr = Se(gt);
          ae.setRequestHeader(Tt, gr);
        }
      var Ct = ne[e + 0 >> 2];
      He.xhrs[Ct] = ae;
      var Dt = he && we ? ue.slice(he, he + we) : null;
      function ir() {
        var Ze = 0, ht = 0;
        ae.response && G && ne[e + 12 >> 2] === 0 && (ht = ae.response.byteLength), ht > 0 && (Ze = yt(ht), ue.set(new Uint8Array(ae.response), Ze)), ne[e + 12 >> 2] = Ze, He.setu64(e + 16, ht), He.setu64(e + 24, 0);
        var _t = ae.response ? ae.response.byteLength : 0;
        _t && He.setu64(e + 32, _t), Te[e + 40 >> 1] = ae.readyState, Te[e + 42 >> 1] = ae.status, ae.statusText && ye(ae.statusText, e + 44, 64);
      }
      ae.onload = (Ze) => {
        Ct in He.xhrs && (ir(), ae.status >= 200 && ae.status < 300 ? t && t(e, ae, Ze) : i && i(e, ae, Ze));
      }, ae.onerror = (Ze) => {
        Ct in He.xhrs && (ir(), i && i(e, ae, Ze));
      }, ae.ontimeout = (Ze) => {
        Ct in He.xhrs && i && i(e, ae, Ze);
      }, ae.onprogress = (Ze) => {
        if (Ct in He.xhrs) {
          var ht = G && ie && ae.response ? ae.response.byteLength : 0, _t = 0;
          ht > 0 && G && ie && (_t = yt(ht), ue.set(new Uint8Array(ae.response), _t)), ne[e + 12 >> 2] = _t, He.setu64(e + 16, ht), He.setu64(e + 24, Ze.loaded - ht), He.setu64(e + 32, Ze.total), Te[e + 40 >> 1] = ae.readyState, ae.readyState >= 3 && ae.status === 0 && Ze.loaded > 0 && (ae.status = 200), Te[e + 42 >> 1] = ae.status, ae.statusText && ye(ae.statusText, e + 44, 64), a && a(e, ae, Ze), _t && Pt(_t);
        }
      }, ae.onreadystatechange = (Ze) => {
        Ct in He.xhrs && (Te[e + 40 >> 1] = ae.readyState, ae.readyState >= 2 && (Te[e + 42 >> 1] = ae.status), s && s(e, ae, Ze));
      };
      try {
        ae.send(Dt);
      } catch (Ze) {
        i && i(e, ae, Ze);
      }
    }
    function ra(e, t, i, a, s) {
      if (!e) {
        s(t, 0, "IndexedDB not available!");
        return;
      }
      var c = t + 112, h = ne[c + 64 >> 2];
      h || (h = ne[t + 8 >> 2]);
      var g = Se(h);
      try {
        var E = e.transaction(["FILES"], "readwrite"), A = E.objectStore("FILES"), I = A.put(i, g);
        I.onsuccess = (U) => {
          Te[t + 40 >> 1] = 4, Te[t + 42 >> 1] = 200, ye("OK", t + 44, 64), a(t, 0, g);
        }, I.onerror = (U) => {
          Te[t + 40 >> 1] = 4, Te[t + 42 >> 1] = 413, ye("Payload Too Large", t + 44, 64), s(t, 0, U);
        };
      } catch (U) {
        s(t, 0, U);
      }
    }
    function Ic(e, t, i, a) {
      if (!e) {
        a(t, 0, "IndexedDB not available!");
        return;
      }
      var s = t + 112, c = ne[s + 64 >> 2];
      c || (c = ne[t + 8 >> 2]);
      var h = Se(c);
      try {
        var g = e.transaction(["FILES"], "readonly"), E = g.objectStore("FILES"), A = E.get(h);
        A.onsuccess = (I) => {
          if (I.target.result) {
            var U = I.target.result, j = U.byteLength || U.length, V = yt(j);
            ue.set(new Uint8Array(U), V), ne[t + 12 >> 2] = V, He.setu64(t + 16, j), He.setu64(t + 24, 0), He.setu64(t + 32, j), Te[t + 40 >> 1] = 4, Te[t + 42 >> 1] = 200, ye("OK", t + 44, 64), i(t, 0, U);
          } else
            Te[t + 40 >> 1] = 4, Te[t + 42 >> 1] = 404, ye("Not Found", t + 44, 64), a(t, 0, "no data");
        }, A.onerror = (I) => {
          Te[t + 40 >> 1] = 4, Te[t + 42 >> 1] = 404, ye("Not Found", t + 44, 64), a(t, 0, I);
        };
      } catch (I) {
        a(t, 0, I);
      }
    }
    function Pc(e, t, i, a) {
      if (!e) {
        a(t, 0, "IndexedDB not available!");
        return;
      }
      var s = t + 112, c = ne[s + 64 >> 2];
      c || (c = ne[t + 8 >> 2]);
      var h = Se(c);
      try {
        var g = e.transaction(["FILES"], "readwrite"), E = g.objectStore("FILES"), A = E.delete(h);
        A.onsuccess = (I) => {
          var U = I.target.result;
          ne[t + 12 >> 2] = 0, He.setu64(t + 16, 0), He.setu64(t + 24, 0), He.setu64(t + 32, 0), Te[t + 40 >> 1] = 4, Te[t + 42 >> 1] = 200, ye("OK", t + 44, 64), i(t, 0, U);
        }, A.onerror = (I) => {
          Te[t + 40 >> 1] = 4, Te[t + 42 >> 1] = 404, ye("Not Found", t + 44, 64), a(t, 0, I);
        };
      } catch (I) {
        a(t, 0, I);
      }
    }
    function Dc(e, t, i, a, s) {
      var c = e + 112, h = Se(c), g = ne[c + 36 >> 2], E = ne[c + 40 >> 2], A = ne[c + 44 >> 2], I = ne[c + 48 >> 2], U = ne[c + 52 >> 2], j = !!(U & 4), V = !!(U & 32), ee = !!(U & 16), ce = !!(U & 64);
      function he(je) {
        ce ? je() : yn(je);
      }
      var we = (je, gt, Tt) => {
        he(() => {
          g ? Kt(g)(je) : t && t(je);
        });
      }, G = (je, gt, Tt) => {
        he(() => {
          A ? Kt(A)(je) : a && a(je);
        });
      }, ie = (je, gt, Tt) => {
        he(() => {
          E ? Kt(E)(je) : i && i(je);
        });
      }, ve = (je, gt, Tt) => {
        he(() => {
          I ? Kt(I)(je) : s && s(je);
        });
      }, Ee = (je, gt, Tt) => {
        _i(je, we, ie, G, ve);
      }, Me = (je, gt, Tt) => {
        var gr = (Dt, ir, Ze) => {
          he(() => {
            g ? Kt(g)(Dt) : t && t(Dt);
          });
        }, Ct = (Dt, ir, Ze) => {
          he(() => {
            g ? Kt(g)(Dt) : t && t(Dt);
          });
        };
        ra(He.dbInstance, je, gt.response, gr, Ct);
      }, ae = (je, gt, Tt) => {
        _i(je, Me, ie, G, ve);
      };
      if (h === "EM_IDB_STORE") {
        var st = ne[c + 84 >> 2];
        ra(He.dbInstance, e, ue.slice(st, st + ne[c + 88 >> 2]), we, ie);
      } else if (h === "EM_IDB_DELETE")
        Pc(He.dbInstance, e, we, ie);
      else if (!ee)
        Ic(He.dbInstance, e, we, V ? ie : j ? ae : Ee);
      else if (!V)
        _i(e, j ? Me : we, ie, G, ve);
      else
        return 0;
      return e;
    }
    var bi = {};
    function kc() {
      return w || "./this.program";
    }
    function Nr() {
      if (!Nr.strings) {
        var e = (typeof navigator == "object" && navigator.languages && navigator.languages[0] || "C").replace("-", "_") + ".UTF-8", t = { USER: "web_user", LOGNAME: "web_user", PATH: "/", PWD: "/", HOME: "/home/web_user", LANG: e, _: kc() };
        for (var i in bi)
          bi[i] === void 0 ? delete t[i] : t[i] = bi[i];
        var a = [];
        for (var i in t)
          a.push(i + "=" + t[i]);
        Nr.strings = a;
      }
      return Nr.strings;
    }
    function Lc(e, t, i) {
      for (var a = 0; a < e.length; ++a)
        me[t++ >> 0] = e.charCodeAt(a);
      i || (me[t >> 0] = 0);
    }
    function Mc(e, t) {
      var i = 0;
      return Nr().forEach(function(a, s) {
        var c = t + i;
        ne[e + s * 4 >> 2] = c, Lc(a, c), i += a.length + 1;
      }), 0;
    }
    function Bc(e, t) {
      var i = Nr();
      ne[e >> 2] = i.length;
      var a = 0;
      return i.forEach(function(s) {
        a += s.length + 1;
      }), ne[t >> 2] = a, 0;
    }
    function Nc(e) {
      try {
        var t = Ce.getStreamFromFD(e);
        return p.close(t), 0;
      } catch (i) {
        if (typeof p > "u" || !(i instanceof p.ErrnoError))
          throw i;
        return i.errno;
      }
    }
    function Oc(e, t) {
      try {
        var i = Ce.getStreamFromFD(e), a = i.tty ? 2 : p.isDir(i.mode) ? 3 : p.isLink(i.mode) ? 7 : 4;
        return me[t >> 0] = a, 0;
      } catch (s) {
        if (typeof p > "u" || !(s instanceof p.ErrnoError))
          throw s;
        return s.errno;
      }
    }
    function jc(e, t, i, a) {
      for (var s = 0, c = 0; c < i; c++) {
        var h = ne[t >> 2], g = ne[t + 4 >> 2];
        t += 8;
        var E = p.read(e, me, h, g, a);
        if (E < 0)
          return -1;
        if (s += E, E < g)
          break;
      }
      return s;
    }
    function Uc(e, t, i, a) {
      try {
        var s = Ce.getStreamFromFD(e), c = jc(s, t, i);
        return ne[a >> 2] = c, 0;
      } catch (h) {
        if (typeof p > "u" || !(h instanceof p.ErrnoError))
          throw h;
        return h.errno;
      }
    }
    function Wc(e, t, i, a, s) {
      try {
        var c = Lo(t, i);
        if (isNaN(c))
          return 61;
        var h = Ce.getStreamFromFD(e);
        return p.llseek(h, c, a), b = [h.position >>> 0, (T = h.position, +Math.abs(T) >= 1 ? T > 0 ? (Math.min(+Math.floor(T / 4294967296), 4294967295) | 0) >>> 0 : ~~+Math.ceil((T - +(~~T >>> 0)) / 4294967296) >>> 0 : 0)], N[s >> 2] = b[0], N[s + 4 >> 2] = b[1], h.getdents && c === 0 && a === 0 && (h.getdents = null), 0;
      } catch (g) {
        if (typeof p > "u" || !(g instanceof p.ErrnoError))
          throw g;
        return g.errno;
      }
    }
    function $c(e) {
      try {
        var t = Ce.getStreamFromFD(e);
        return t.stream_ops && t.stream_ops.fsync ? t.stream_ops.fsync(t) : 0;
      } catch (i) {
        if (typeof p > "u" || !(i instanceof p.ErrnoError))
          throw i;
        return i.errno;
      }
    }
    function Gc(e, t, i, a) {
      for (var s = 0, c = 0; c < i; c++) {
        var h = ne[t >> 2], g = ne[t + 4 >> 2];
        t += 8;
        var E = p.write(e, me, h, g, a);
        if (E < 0)
          return -1;
        s += E;
      }
      return s;
    }
    function Vc(e, t, i, a) {
      try {
        var s = Ce.getStreamFromFD(e), c = Gc(s, t, i);
        return ne[a >> 2] = c, 0;
      } catch (h) {
        if (typeof p > "u" || !(h instanceof p.ErrnoError))
          throw h;
        return h.errno;
      }
    }
    function gn(e) {
      for (var t = e.split("."), i = 0; i < 4; i++) {
        var a = Number(t[i]);
        if (isNaN(a))
          return null;
        t[i] = a;
      }
      return (t[0] | t[1] << 8 | t[2] << 16 | t[3] << 24) >>> 0;
    }
    function Or(e) {
      return parseInt(e);
    }
    function yi(e) {
      var t, i, a, s, c = /^((?=.*::)(?!.*::.+::)(::)?([\dA-F]{1,4}:(:|\b)|){5}|([\dA-F]{1,4}:){6})((([\dA-F]{1,4}((?!\3)::|:\b|$))|(?!\2\3)){2}|(((2[0-4]|1\d|[1-9])?\d|25[0-5])\.?\b){4})$/i, h = [];
      if (!c.test(e))
        return null;
      if (e === "::")
        return [0, 0, 0, 0, 0, 0, 0, 0];
      for (e.startsWith("::") ? e = e.replace("::", "Z:") : e = e.replace("::", ":Z:"), e.indexOf(".") > 0 ? (e = e.replace(new RegExp("[.]", "g"), ":"), t = e.split(":"), t[t.length - 4] = Or(t[t.length - 4]) + Or(t[t.length - 3]) * 256, t[t.length - 3] = Or(t[t.length - 2]) + Or(t[t.length - 1]) * 256, t = t.slice(0, t.length - 2)) : t = e.split(":"), a = 0, s = 0, i = 0; i < t.length; i++)
        if (typeof t[i] == "string")
          if (t[i] === "Z") {
            for (s = 0; s < 8 - t.length + 1; s++)
              h[i + s] = 0;
            a = s - 1;
          } else
            h[i + a] = Sn(parseInt(t[i], 16));
        else
          h[i + a] = t[i];
      return [h[1] << 16 | h[0], h[3] << 16 | h[2], h[5] << 16 | h[4], h[7] << 16 | h[6]];
    }
    var Yt = { address_map: { id: 1, addrs: {}, names: {} }, lookup_name: function(e) {
      var t = gn(e);
      if (t !== null || (t = yi(e), t !== null))
        return e;
      var i;
      if (Yt.address_map.addrs[e])
        i = Yt.address_map.addrs[e];
      else {
        var a = Yt.address_map.id++;
        Ue(a < 65535, "exceeded max address mappings of 65535"), i = "172.29." + (a & 255) + "." + (a & 65280), Yt.address_map.names[i] = e, Yt.address_map.addrs[e] = i;
      }
      return i;
    }, lookup_addr: function(e) {
      return Yt.address_map.names[e] ? Yt.address_map.names[e] : null;
    } };
    function na(e) {
      return (e & 255) + "." + (e >> 8 & 255) + "." + (e >> 16 & 255) + "." + (e >> 24 & 255);
    }
    function zc(e) {
      var t = "", i = 0, a = 0, s = 0, c = 0, h = 0, g = 0, E = [e[0] & 65535, e[0] >> 16, e[1] & 65535, e[1] >> 16, e[2] & 65535, e[2] >> 16, e[3] & 65535, e[3] >> 16], A = !0, I = "";
      for (g = 0; g < 5; g++)
        if (E[g] !== 0) {
          A = !1;
          break;
        }
      if (A) {
        if (I = na(E[6] | E[7] << 16), E[5] === -1)
          return t = "::ffff:", t += I, t;
        if (E[5] === 0)
          return t = "::", I === "0.0.0.0" && (I = ""), I === "0.0.0.1" && (I = "1"), t += I, t;
      }
      for (i = 0; i < 8; i++)
        E[i] === 0 && (i - s > 1 && (h = 0), s = i, h++), h > a && (a = h, c = i - a + 1);
      for (i = 0; i < 8; i++) {
        if (a > 1 && E[i] === 0 && i >= c && i < c + a) {
          i === c && (t += ":", c === 0 && (t += ":"));
          continue;
        }
        t += Number(pa(E[i] & 65535)).toString(16), t += i < 7 ? ":" : "";
      }
      return t;
    }
    function Hc(e, t, i, a, s) {
      switch (t) {
        case 2:
          i = gn(i), ii(e, 16), s && (N[s >> 2] = 16), Pe[e >> 1] = t, N[e + 4 >> 2] = i, Pe[e + 2 >> 1] = Sn(a);
          break;
        case 10:
          i = yi(i), ii(e, 28), s && (N[s >> 2] = 28), N[e >> 2] = t, N[e + 8 >> 2] = i[0], N[e + 12 >> 2] = i[1], N[e + 16 >> 2] = i[2], N[e + 20 >> 2] = i[3], Pe[e + 2 >> 1] = Sn(a);
          break;
        default:
          return 5;
      }
      return 0;
    }
    function Kc(e, t, i, a) {
      var s = 0, c = 0, h = 0, g = 0, E = 0, A = 0, I;
      function U(j, V, ee, ce, he, we) {
        var G, ie, ve, Ee;
        return ie = j === 10 ? 28 : 16, he = j === 10 ? zc(he) : na(he), G = yt(ie), Ee = Hc(G, j, he, we), Ue(!Ee), ve = yt(32), N[ve + 4 >> 2] = j, N[ve + 8 >> 2] = V, N[ve + 12 >> 2] = ee, N[ve + 24 >> 2] = ce, ne[ve + 20 >> 2] = G, j === 10 ? N[ve + 16 >> 2] = 28 : N[ve + 16 >> 2] = 16, N[ve + 28 >> 2] = 0, ve;
      }
      if (i && (h = N[i >> 2], g = N[i + 4 >> 2], E = N[i + 8 >> 2], A = N[i + 12 >> 2]), E && !A && (A = E === 2 ? 17 : 6), !E && A && (E = A === 17 ? 2 : 1), A === 0 && (A = 6), E === 0 && (E = 1), !e && !t)
        return -2;
      if (h & -1088 || i !== 0 && N[i >> 2] & 2 && !e)
        return -1;
      if (h & 32)
        return -2;
      if (E !== 0 && E !== 1 && E !== 2)
        return -7;
      if (g !== 0 && g !== 2 && g !== 10)
        return -6;
      if (t && (t = Se(t), c = parseInt(t, 10), isNaN(c)))
        return h & 1024 ? -2 : -8;
      if (!e)
        return g === 0 && (g = 2), h & 1 || (g === 2 ? s = xn(2130706433) : s = [0, 0, 0, 1]), I = U(g, E, A, null, s, c), ne[a >> 2] = I, 0;
      if (e = Se(e), s = gn(e), s !== null)
        if (g === 0 || g === 2)
          g = 2;
        else if (g === 10 && h & 8)
          s = [0, 0, xn(65535), s], g = 10;
        else
          return -2;
      else if (s = yi(e), s !== null)
        if (g === 0 || g === 10)
          g = 10;
        else
          return -2;
      return s != null ? (I = U(g, E, A, e, s, c), ne[a >> 2] = I, 0) : h & 4 ? -2 : (e = Yt.lookup_name(e), s = gn(e), g === 0 ? g = 2 : g === 10 && (s = [0, 0, xn(65535), s]), I = U(g, E, A, null, s, c), ne[a >> 2] = I, 0);
    }
    function wn(e, t) {
      wn.randomDevice || (wn.randomDevice = Rt());
      for (var i = 0; i < t; i++)
        me[e + i >> 0] = wn.randomDevice();
      return 0;
    }
    var Q = { counter: 1, buffers: [], programs: [], framebuffers: [], renderbuffers: [], textures: [], shaders: [], vaos: [], contexts: [], offscreenCanvases: {}, queries: [], samplers: [], transformFeedbacks: [], syncs: [], stringCache: {}, stringiCache: {}, unpackAlignment: 4, recordError: function(t) {
      Q.lastError || (Q.lastError = t);
    }, getNewId: function(e) {
      for (var t = Q.counter++, i = e.length; i < t; i++)
        e[i] = null;
      return t;
    }, getSource: function(e, t, i, a) {
      for (var s = "", c = 0; c < t; ++c) {
        var h = a ? N[a + c * 4 >> 2] : -1;
        s += Se(N[i + c * 4 >> 2], h < 0 ? void 0 : h);
      }
      return s;
    }, createContext: function(e, t) {
      if (!e.getContextSafariWebGL2Fixed) {
        let s = function(c, h) {
          var g = e.getContextSafariWebGL2Fixed(c, h);
          return c == "webgl" == g instanceof WebGLRenderingContext ? g : null;
        };
        e.getContextSafariWebGL2Fixed = e.getContext, e.getContext = s;
      }
      var i = t.majorVersion > 1 ? e.getContext("webgl2", t) : e.getContext("webgl", t);
      if (!i)
        return 0;
      var a = Q.registerContext(i, t);
      return a;
    }, registerContext: function(e, t) {
      var i = Q.getNewId(Q.contexts), a = { handle: i, attributes: t, version: t.majorVersion, GLctx: e };
      return e.canvas && (e.canvas.GLctxObject = a), Q.contexts[i] = a, i;
    }, makeContextCurrent: function(e) {
      return Q.currentContext = Q.contexts[e], n.ctx = H = Q.currentContext && Q.currentContext.GLctx, !(e && !H);
    }, getContext: function(e) {
      return Q.contexts[e];
    }, deleteContext: function(e) {
      Q.currentContext === Q.contexts[e] && (Q.currentContext = null), typeof JSEvents == "object" && JSEvents.removeAllHandlersOnTarget(Q.contexts[e].GLctx.canvas), Q.contexts[e] && Q.contexts[e].GLctx.canvas && (Q.contexts[e].GLctx.canvas.GLctxObject = void 0), Q.contexts[e] = null;
    } };
    function Yc(e) {
      H.activeTexture(e);
    }
    function Xc(e, t) {
      H.attachShader(Q.programs[e], Q.shaders[t]);
    }
    function Zc(e, t) {
      e == 35051 ? H.currentPixelPackBufferBinding = t : e == 35052 && (H.currentPixelUnpackBufferBinding = t), H.bindBuffer(e, Q.buffers[t]);
    }
    function qc(e, t, i, a, s) {
      H.bindBufferRange(e, t, Q.buffers[i], a, s);
    }
    function Qc(e, t) {
      H.bindFramebuffer(e, Q.framebuffers[t]);
    }
    function Jc(e, t) {
      H.bindRenderbuffer(e, Q.renderbuffers[t]);
    }
    function ed(e, t) {
      H.bindTexture(e, Q.textures[t]);
    }
    function td(e) {
      H.bindVertexArray(Q.vaos[e]);
    }
    function rd(e) {
      H.blendEquation(e);
    }
    function nd(e, t) {
      H.blendFunc(e, t);
    }
    function id(e, t, i, a) {
      H.blendFuncSeparate(e, t, i, a);
    }
    function od(e, t, i, a, s, c, h, g, E, A) {
      H.blitFramebuffer(e, t, i, a, s, c, h, g, E, A);
    }
    function ad(e, t, i, a) {
      Q.currentContext.version >= 2 ? i && t ? H.bufferData(e, ue, a, i, t) : H.bufferData(e, t, a) : H.bufferData(e, i ? ue.subarray(i, i + t) : t, a);
    }
    function sd(e, t, i, a) {
      if (Q.currentContext.version >= 2) {
        i && H.bufferSubData(e, t, ue, a, i);
        return;
      }
      H.bufferSubData(e, t, ue.subarray(a, a + i));
    }
    function ud(e, t, i) {
      H.clearBufferfv(e, t, te, i >> 2);
    }
    function ld(e, t, i, a) {
      H.colorMask(!!e, !!t, !!i, !!a);
    }
    function fd(e) {
      H.compileShader(Q.shaders[e]);
    }
    function cd(e, t, i, a, s, c, h, g) {
      if (Q.currentContext.version >= 2) {
        H.currentPixelUnpackBufferBinding || !h ? H.compressedTexImage2D(e, t, i, a, s, c, h, g) : H.compressedTexImage2D(e, t, i, a, s, c, ue, g, h);
        return;
      }
      H.compressedTexImage2D(e, t, i, a, s, c, g ? ue.subarray(g, g + h) : null);
    }
    function dd(e, t, i, a, s, c, h, g, E) {
      H.currentPixelUnpackBufferBinding ? H.compressedTexImage3D(e, t, i, a, s, c, h, g, E) : H.compressedTexImage3D(e, t, i, a, s, c, h, ue, E, g);
    }
    function hd(e, t, i, a, s, c, h, g) {
      H.copyTexSubImage2D(e, t, i, a, s, c, h, g);
    }
    function pd() {
      var e = Q.getNewId(Q.programs), t = H.createProgram();
      return t.name = e, t.maxUniformLength = t.maxAttributeLength = t.maxUniformBlockNameLength = 0, t.uniformIdCounter = 1, Q.programs[e] = t, e;
    }
    function md(e) {
      var t = Q.getNewId(Q.shaders);
      return Q.shaders[t] = H.createShader(e), t;
    }
    function _d(e, t) {
      for (var i = 0; i < e; i++) {
        var a = N[t + i * 4 >> 2], s = Q.buffers[a];
        s && (H.deleteBuffer(s), s.name = 0, Q.buffers[a] = null, a == H.currentPixelPackBufferBinding && (H.currentPixelPackBufferBinding = 0), a == H.currentPixelUnpackBufferBinding && (H.currentPixelUnpackBufferBinding = 0));
      }
    }
    function bd(e, t) {
      for (var i = 0; i < e; ++i) {
        var a = N[t + i * 4 >> 2], s = Q.framebuffers[a];
        s && (H.deleteFramebuffer(s), s.name = 0, Q.framebuffers[a] = null);
      }
    }
    function yd(e) {
      if (e) {
        var t = Q.programs[e];
        if (!t) {
          Q.recordError(1281);
          return;
        }
        H.deleteProgram(t), t.name = 0, Q.programs[e] = null;
      }
    }
    function gd(e, t) {
      for (var i = 0; i < e; i++) {
        var a = N[t + i * 4 >> 2], s = Q.renderbuffers[a];
        s && (H.deleteRenderbuffer(s), s.name = 0, Q.renderbuffers[a] = null);
      }
    }
    function wd(e) {
      if (e) {
        var t = Q.shaders[e];
        if (!t) {
          Q.recordError(1281);
          return;
        }
        H.deleteShader(t), Q.shaders[e] = null;
      }
    }
    function vd(e, t) {
      for (var i = 0; i < e; i++) {
        var a = N[t + i * 4 >> 2], s = Q.textures[a];
        s && (H.deleteTexture(s), s.name = 0, Q.textures[a] = null);
      }
    }
    function Ed(e, t) {
      for (var i = 0; i < e; i++) {
        var a = N[t + i * 4 >> 2];
        H.deleteVertexArray(Q.vaos[a]), Q.vaos[a] = null;
      }
    }
    function xd(e) {
      H.depthFunc(e);
    }
    function Sd(e) {
      H.depthMask(!!e);
    }
    function Td(e) {
      H.disable(e);
    }
    function Cd(e, t, i) {
      H.drawArrays(e, t, i);
    }
    function Fd(e, t, i, a) {
      H.drawArraysInstanced(e, t, i, a);
    }
    var gi = [];
    function Rd(e, t) {
      for (var i = gi[e], a = 0; a < e; a++)
        i[a] = N[t + a * 4 >> 2];
      H.drawBuffers(i);
    }
    function Ad(e, t, i, a) {
      H.drawElements(e, t, i, a);
    }
    function Id(e, t, i, a, s) {
      H.drawElementsInstanced(e, t, i, a, s);
    }
    function Pd(e) {
      H.enable(e);
    }
    function Dd(e) {
      H.enableVertexAttribArray(e);
    }
    function kd(e, t, i, a) {
      H.framebufferRenderbuffer(e, t, i, Q.renderbuffers[a]);
    }
    function Ld(e, t, i, a, s) {
      H.framebufferTexture2D(e, t, i, Q.textures[a], s);
    }
    function Md(e) {
      H.frontFace(e);
    }
    function jr(e, t, i, a) {
      for (var s = 0; s < e; s++) {
        var c = H[i](), h = c && Q.getNewId(a);
        c ? (c.name = h, a[h] = c) : Q.recordError(1282), N[t + s * 4 >> 2] = h;
      }
    }
    function Bd(e, t) {
      jr(e, t, "createBuffer", Q.buffers);
    }
    function Nd(e, t) {
      jr(e, t, "createFramebuffer", Q.framebuffers);
    }
    function Od(e, t) {
      jr(e, t, "createRenderbuffer", Q.renderbuffers);
    }
    function jd(e, t) {
      jr(e, t, "createTexture", Q.textures);
    }
    function Ud(e, t) {
      jr(e, t, "createVertexArray", Q.vaos);
    }
    function Wd(e) {
      H.generateMipmap(e);
    }
    function $d() {
      var e = H.getError() || Q.lastError;
      return Q.lastError = 0, e;
    }
    function Gd(e, t) {
      ne[e >> 2] = t, ne[e + 4 >> 2] = (t - ne[e >> 2]) / 4294967296;
    }
    function Vd(e, t, i) {
      if (!t) {
        Q.recordError(1281);
        return;
      }
      var a = void 0;
      switch (e) {
        case 36346:
          a = 1;
          break;
        case 36344:
          i != 0 && i != 1 && Q.recordError(1280);
          return;
        case 34814:
        case 36345:
          a = 0;
          break;
        case 34466:
          var s = H.getParameter(34467);
          a = s ? s.length : 0;
          break;
        case 33309:
          if (Q.currentContext.version < 2) {
            Q.recordError(1282);
            return;
          }
          var c = H.getSupportedExtensions() || [];
          a = 2 * c.length;
          break;
        case 33307:
        case 33308:
          if (Q.currentContext.version < 2) {
            Q.recordError(1280);
            return;
          }
          a = e == 33307 ? 3 : 0;
          break;
      }
      if (a === void 0) {
        var h = H.getParameter(e);
        switch (typeof h) {
          case "number":
            a = h;
            break;
          case "boolean":
            a = h ? 1 : 0;
            break;
          case "string":
            Q.recordError(1280);
            return;
          case "object":
            if (h === null)
              switch (e) {
                case 34964:
                case 35725:
                case 34965:
                case 36006:
                case 36007:
                case 32873:
                case 34229:
                case 36662:
                case 36663:
                case 35053:
                case 35055:
                case 36010:
                case 35097:
                case 35869:
                case 32874:
                case 36389:
                case 35983:
                case 35368:
                case 34068: {
                  a = 0;
                  break;
                }
                default: {
                  Q.recordError(1280);
                  return;
                }
              }
            else if (h instanceof Float32Array || h instanceof Uint32Array || h instanceof Int32Array || h instanceof Array) {
              for (var g = 0; g < h.length; ++g)
                switch (i) {
                  case 0:
                    N[t + g * 4 >> 2] = h[g];
                    break;
                  case 2:
                    te[t + g * 4 >> 2] = h[g];
                    break;
                  case 4:
                    me[t + g >> 0] = h[g] ? 1 : 0;
                    break;
                }
              return;
            } else
              try {
                a = h.name | 0;
              } catch (E) {
                Q.recordError(1280), pe("GL_INVALID_ENUM in glGet" + i + "v: Unknown object returned from WebGL getParameter(" + e + ")! (error: " + E + ")");
                return;
              }
            break;
          default:
            Q.recordError(1280), pe("GL_INVALID_ENUM in glGet" + i + "v: Native code calling glGet" + i + "v(" + e + ") and it returns " + h + " of type " + typeof h + "!");
            return;
        }
      }
      switch (i) {
        case 1:
          Gd(t, a);
          break;
        case 0:
          N[t >> 2] = a;
          break;
        case 2:
          te[t >> 2] = a;
          break;
        case 4:
          me[t >> 0] = a ? 1 : 0;
          break;
      }
    }
    function zd(e, t) {
      Vd(e, t, 0);
    }
    function Hd(e, t, i, a) {
      var s = H.getProgramInfoLog(Q.programs[e]);
      s === null && (s = "(unknown error)");
      var c = t > 0 && a ? ye(s, a, t) : 0;
      i && (N[i >> 2] = c);
    }
    function Kd(e, t, i) {
      if (!i) {
        Q.recordError(1281);
        return;
      }
      if (e >= Q.counter) {
        Q.recordError(1281);
        return;
      }
      if (e = Q.programs[e], t == 35716) {
        var a = H.getProgramInfoLog(e);
        a === null && (a = "(unknown error)"), N[i >> 2] = a.length + 1;
      } else if (t == 35719) {
        if (!e.maxUniformLength)
          for (var s = 0; s < H.getProgramParameter(e, 35718); ++s)
            e.maxUniformLength = Math.max(e.maxUniformLength, H.getActiveUniform(e, s).name.length + 1);
        N[i >> 2] = e.maxUniformLength;
      } else if (t == 35722) {
        if (!e.maxAttributeLength)
          for (var s = 0; s < H.getProgramParameter(e, 35721); ++s)
            e.maxAttributeLength = Math.max(e.maxAttributeLength, H.getActiveAttrib(e, s).name.length + 1);
        N[i >> 2] = e.maxAttributeLength;
      } else if (t == 35381) {
        if (!e.maxUniformBlockNameLength)
          for (var s = 0; s < H.getProgramParameter(e, 35382); ++s)
            e.maxUniformBlockNameLength = Math.max(e.maxUniformBlockNameLength, H.getActiveUniformBlockName(e, s).length + 1);
        N[i >> 2] = e.maxUniformBlockNameLength;
      } else
        N[i >> 2] = H.getProgramParameter(e, t);
    }
    function Yd(e, t, i, a) {
      var s = H.getShaderInfoLog(Q.shaders[e]);
      s === null && (s = "(unknown error)");
      var c = t > 0 && a ? ye(s, a, t) : 0;
      i && (N[i >> 2] = c);
    }
    function Xd(e, t, i) {
      if (!i) {
        Q.recordError(1281);
        return;
      }
      if (t == 35716) {
        var a = H.getShaderInfoLog(Q.shaders[e]);
        a === null && (a = "(unknown error)");
        var s = a ? a.length + 1 : 0;
        N[i >> 2] = s;
      } else if (t == 35720) {
        var c = H.getShaderSource(Q.shaders[e]), h = c ? c.length + 1 : 0;
        N[i >> 2] = h;
      } else
        N[i >> 2] = H.getShaderParameter(Q.shaders[e], t);
    }
    function ia(e) {
      return e.slice(-1) == "]" && e.lastIndexOf("[");
    }
    function Zd(e) {
      var t = e.uniformLocsById, i = e.uniformSizeAndIdsByName, a, s;
      if (!t)
        for (e.uniformLocsById = t = {}, e.uniformArrayNamesById = {}, a = 0; a < H.getProgramParameter(e, 35718); ++a) {
          var c = H.getActiveUniform(e, a), h = c.name, g = c.size, E = ia(h), A = E > 0 ? h.slice(0, E) : h, I = e.uniformIdCounter;
          for (e.uniformIdCounter += g, i[A] = [g, I], s = 0; s < g; ++s)
            t[I] = s, e.uniformArrayNamesById[I++] = A;
        }
    }
    function qd(e, t) {
      if (t = Se(t), e = Q.programs[e]) {
        Zd(e);
        var i = e.uniformLocsById, a = 0, s = t, c = ia(t);
        c > 0 && (a = Or(t.slice(c + 1)) >>> 0, s = t.slice(0, c));
        var h = e.uniformSizeAndIdsByName[s];
        if (h && a < h[0] && (a += h[1], i[a] = i[a] || H.getUniformLocation(e, t)))
          return a;
      } else
        Q.recordError(1281);
      return -1;
    }
    function Qd(e, t, i) {
      for (var a = gi[t], s = 0; s < t; s++)
        a[s] = N[i + s * 4 >> 2];
      H.invalidateFramebuffer(e, a);
    }
    function Jd(e) {
      e = Q.programs[e], H.linkProgram(e), e.uniformLocsById = 0, e.uniformSizeAndIdsByName = {};
    }
    function eh(e, t) {
      e == 3317 && (Q.unpackAlignment = t), H.pixelStorei(e, t);
    }
    function th(e, t, i, a) {
      function s(g, E) {
        return g + E - 1 & -E;
      }
      var c = e * i, h = s(c, a);
      return t * h;
    }
    function rh(e) {
      var t = { 5: 3, 6: 4, 8: 2, 29502: 3, 29504: 4, 26917: 2, 26918: 2, 29846: 3, 29847: 4 };
      return t[e - 6402] || 1;
    }
    function br(e) {
      return e -= 5120, e == 0 ? me : e == 1 ? ue : e == 2 ? Pe : e == 4 ? N : e == 6 ? te : e == 5 || e == 28922 || e == 28520 || e == 30779 || e == 30782 ? ne : Te;
    }
    function yr(e) {
      return 31 - Math.clz32(e.BYTES_PER_ELEMENT);
    }
    function wi(e, t, i, a, s, c) {
      var h = br(e), g = yr(h), E = 1 << g, A = rh(t) * E, I = th(i, a, A, Q.unpackAlignment);
      return h.subarray(s >> g, s + I >> g);
    }
    function nh(e, t, i, a, s, c, h) {
      if (Q.currentContext.version >= 2) {
        if (H.currentPixelPackBufferBinding)
          H.readPixels(e, t, i, a, s, c, h);
        else {
          var g = br(c);
          H.readPixels(e, t, i, a, s, c, g, h >> yr(g));
        }
        return;
      }
      var E = wi(c, s, i, a, h);
      if (!E) {
        Q.recordError(1280);
        return;
      }
      H.readPixels(e, t, i, a, s, c, E);
    }
    function ih(e, t, i, a) {
      H.renderbufferStorage(e, t, i, a);
    }
    function oh(e, t, i, a, s) {
      H.renderbufferStorageMultisample(e, t, i, a, s);
    }
    function ah(e, t, i, a) {
      var s = Q.getSource(e, t, i, a);
      H.shaderSource(Q.shaders[e], s);
    }
    function sh(e, t, i, a, s, c, h, g, E) {
      if (Q.currentContext.version >= 2) {
        if (H.currentPixelUnpackBufferBinding)
          H.texImage2D(e, t, i, a, s, c, h, g, E);
        else if (E) {
          var A = br(g);
          H.texImage2D(e, t, i, a, s, c, h, g, A, E >> yr(A));
        } else
          H.texImage2D(e, t, i, a, s, c, h, g, null);
        return;
      }
      H.texImage2D(e, t, i, a, s, c, h, g, E ? wi(g, h, a, s, E) : null);
    }
    function uh(e, t, i, a, s, c, h, g, E, A) {
      if (H.currentPixelUnpackBufferBinding)
        H.texImage3D(e, t, i, a, s, c, h, g, E, A);
      else if (A) {
        var I = br(E);
        H.texImage3D(e, t, i, a, s, c, h, g, E, I, A >> yr(I));
      } else
        H.texImage3D(e, t, i, a, s, c, h, g, E, null);
    }
    function lh(e, t, i) {
      H.texParameteri(e, t, i);
    }
    function fh(e, t, i, a, s) {
      H.texStorage2D(e, t, i, a, s);
    }
    function ch(e, t, i, a, s, c) {
      H.texStorage3D(e, t, i, a, s, c);
    }
    function dh(e, t, i, a, s, c, h, g, E) {
      if (Q.currentContext.version >= 2) {
        if (H.currentPixelUnpackBufferBinding)
          H.texSubImage2D(e, t, i, a, s, c, h, g, E);
        else if (E) {
          var A = br(g);
          H.texSubImage2D(e, t, i, a, s, c, h, g, A, E >> yr(A));
        } else
          H.texSubImage2D(e, t, i, a, s, c, h, g, null);
        return;
      }
      var I = null;
      E && (I = wi(g, h, s, c, E)), H.texSubImage2D(e, t, i, a, s, c, h, g, I);
    }
    function hh(e, t, i, a, s, c, h, g, E, A, I) {
      if (H.currentPixelUnpackBufferBinding)
        H.texSubImage3D(e, t, i, a, s, c, h, g, E, A, I);
      else if (I) {
        var U = br(A);
        H.texSubImage3D(e, t, i, a, s, c, h, g, E, A, U, I >> yr(U));
      } else
        H.texSubImage3D(e, t, i, a, s, c, h, g, E, A, null);
    }
    function Xt(e) {
      var t = H.currentProgram;
      if (t) {
        var i = t.uniformLocsById[e];
        return typeof i == "number" && (t.uniformLocsById[e] = i = H.getUniformLocation(t, t.uniformArrayNamesById[e] + (i > 0 ? "[" + i + "]" : ""))), i;
      } else
        Q.recordError(1282);
    }
    function ph(e, t) {
      H.uniform1f(Xt(e), t);
    }
    function mh(e, t) {
      H.uniform1i(Xt(e), t);
    }
    function _h(e, t) {
      H.uniform1ui(Xt(e), t);
    }
    function bh(e, t, i) {
      H.uniform2f(Xt(e), t, i);
    }
    var vi = [];
    function yh(e, t, i) {
      if (Q.currentContext.version >= 2) {
        t && H.uniform2fv(Xt(e), te, i >> 2, t * 2);
        return;
      }
      if (t <= 144)
        for (var a = vi[2 * t - 1], s = 0; s < 2 * t; s += 2)
          a[s] = te[i + 4 * s >> 2], a[s + 1] = te[i + (4 * s + 4) >> 2];
      else
        var a = te.subarray(i >> 2, i + t * 8 >> 2);
      H.uniform2fv(Xt(e), a);
    }
    function gh(e, t, i) {
      if (Q.currentContext.version >= 2) {
        t && H.uniform4fv(Xt(e), te, i >> 2, t * 4);
        return;
      }
      if (t <= 72) {
        var a = vi[4 * t - 1], s = te;
        i >>= 2;
        for (var c = 0; c < 4 * t; c += 4) {
          var h = i + c;
          a[c] = s[h], a[c + 1] = s[h + 1], a[c + 2] = s[h + 2], a[c + 3] = s[h + 3];
        }
      } else
        var a = te.subarray(i >> 2, i + t * 16 >> 2);
      H.uniform4fv(Xt(e), a);
    }
    function wh(e) {
      e = Q.programs[e], H.useProgram(e), H.currentProgram = e;
    }
    function vh(e, t, i, a, s) {
      H.vertexAttribIPointer(e, t, i, a, s);
    }
    function Eh(e, t, i, a, s, c) {
      H.vertexAttribPointer(e, t, i, !!a, s, c);
    }
    function xh(e, t, i, a) {
      H.viewport(e, t, i, a);
    }
    function Sh(e, t) {
      for (var i = 0, a = 0; a <= t; i += e[a++])
        ;
      return i;
    }
    var oa = [31, 29, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31], aa = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];
    function Th(e, t) {
      for (var i = new Date(e.getTime()); t > 0; ) {
        var a = Mr(i.getFullYear()), s = i.getMonth(), c = (a ? oa : aa)[s];
        if (t > c - i.getDate())
          t -= c - i.getDate() + 1, i.setDate(1), s < 11 ? i.setMonth(s + 1) : (i.setMonth(0), i.setFullYear(i.getFullYear() + 1));
        else
          return i.setDate(i.getDate() + t), i;
      }
      return i;
    }
    function Ch(e, t) {
      me.set(e, t);
    }
    function sa(e, t, i, a) {
      var s = N[a + 40 >> 2], c = { tm_sec: N[a >> 2], tm_min: N[a + 4 >> 2], tm_hour: N[a + 8 >> 2], tm_mday: N[a + 12 >> 2], tm_mon: N[a + 16 >> 2], tm_year: N[a + 20 >> 2], tm_wday: N[a + 24 >> 2], tm_yday: N[a + 28 >> 2], tm_isdst: N[a + 32 >> 2], tm_gmtoff: N[a + 36 >> 2], tm_zone: s ? Se(s) : "" }, h = Se(i), g = { "%c": "%a %b %d %H:%M:%S %Y", "%D": "%m/%d/%y", "%F": "%Y-%m-%d", "%h": "%b", "%r": "%I:%M:%S %p", "%R": "%H:%M", "%T": "%H:%M:%S", "%x": "%m/%d/%y", "%X": "%H:%M:%S", "%Ec": "%c", "%EC": "%C", "%Ex": "%m/%d/%y", "%EX": "%H:%M:%S", "%Ey": "%y", "%EY": "%Y", "%Od": "%d", "%Oe": "%e", "%OH": "%H", "%OI": "%I", "%Om": "%m", "%OM": "%M", "%OS": "%S", "%Ou": "%u", "%OU": "%U", "%OV": "%V", "%Ow": "%w", "%OW": "%W", "%Oy": "%y" };
      for (var E in g)
        h = h.replace(new RegExp(E, "g"), g[E]);
      var A = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"], I = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
      function U(G, ie, ve) {
        for (var Ee = typeof G == "number" ? G.toString() : G || ""; Ee.length < ie; )
          Ee = ve[0] + Ee;
        return Ee;
      }
      function j(G, ie) {
        return U(G, ie, "0");
      }
      function V(G, ie) {
        function ve(Me) {
          return Me < 0 ? -1 : Me > 0 ? 1 : 0;
        }
        var Ee;
        return (Ee = ve(G.getFullYear() - ie.getFullYear())) === 0 && (Ee = ve(G.getMonth() - ie.getMonth())) === 0 && (Ee = ve(G.getDate() - ie.getDate())), Ee;
      }
      function ee(G) {
        switch (G.getDay()) {
          case 0:
            return new Date(G.getFullYear() - 1, 11, 29);
          case 1:
            return G;
          case 2:
            return new Date(G.getFullYear(), 0, 3);
          case 3:
            return new Date(G.getFullYear(), 0, 2);
          case 4:
            return new Date(G.getFullYear(), 0, 1);
          case 5:
            return new Date(G.getFullYear() - 1, 11, 31);
          case 6:
            return new Date(G.getFullYear() - 1, 11, 30);
        }
      }
      function ce(G) {
        var ie = Th(new Date(G.tm_year + 1900, 0, 1), G.tm_yday), ve = new Date(ie.getFullYear(), 0, 4), Ee = new Date(ie.getFullYear() + 1, 0, 4), Me = ee(ve), ae = ee(Ee);
        return V(Me, ie) <= 0 ? V(ae, ie) <= 0 ? ie.getFullYear() + 1 : ie.getFullYear() : ie.getFullYear() - 1;
      }
      var he = { "%a": function(G) {
        return A[G.tm_wday].substring(0, 3);
      }, "%A": function(G) {
        return A[G.tm_wday];
      }, "%b": function(G) {
        return I[G.tm_mon].substring(0, 3);
      }, "%B": function(G) {
        return I[G.tm_mon];
      }, "%C": function(G) {
        var ie = G.tm_year + 1900;
        return j(ie / 100 | 0, 2);
      }, "%d": function(G) {
        return j(G.tm_mday, 2);
      }, "%e": function(G) {
        return U(G.tm_mday, 2, " ");
      }, "%g": function(G) {
        return ce(G).toString().substring(2);
      }, "%G": function(G) {
        return ce(G);
      }, "%H": function(G) {
        return j(G.tm_hour, 2);
      }, "%I": function(G) {
        var ie = G.tm_hour;
        return ie == 0 ? ie = 12 : ie > 12 && (ie -= 12), j(ie, 2);
      }, "%j": function(G) {
        return j(G.tm_mday + Sh(Mr(G.tm_year + 1900) ? oa : aa, G.tm_mon - 1), 3);
      }, "%m": function(G) {
        return j(G.tm_mon + 1, 2);
      }, "%M": function(G) {
        return j(G.tm_min, 2);
      }, "%n": function() {
        return `
`;
      }, "%p": function(G) {
        return G.tm_hour >= 0 && G.tm_hour < 12 ? "AM" : "PM";
      }, "%S": function(G) {
        return j(G.tm_sec, 2);
      }, "%t": function() {
        return "	";
      }, "%u": function(G) {
        return G.tm_wday || 7;
      }, "%U": function(G) {
        var ie = G.tm_yday + 7 - G.tm_wday;
        return j(Math.floor(ie / 7), 2);
      }, "%V": function(G) {
        var ie = Math.floor((G.tm_yday + 7 - (G.tm_wday + 6) % 7) / 7);
        if ((G.tm_wday + 371 - G.tm_yday - 2) % 7 <= 2 && ie++, ie) {
          if (ie == 53) {
            var Ee = (G.tm_wday + 371 - G.tm_yday) % 7;
            Ee != 4 && (Ee != 3 || !Mr(G.tm_year)) && (ie = 1);
          }
        } else {
          ie = 52;
          var ve = (G.tm_wday + 7 - G.tm_yday - 1) % 7;
          (ve == 4 || ve == 5 && Mr(G.tm_year % 400 - 1)) && ie++;
        }
        return j(ie, 2);
      }, "%w": function(G) {
        return G.tm_wday;
      }, "%W": function(G) {
        var ie = G.tm_yday + 7 - (G.tm_wday + 6) % 7;
        return j(Math.floor(ie / 7), 2);
      }, "%y": function(G) {
        return (G.tm_year + 1900).toString().substring(2);
      }, "%Y": function(G) {
        return G.tm_year + 1900;
      }, "%z": function(G) {
        var ie = G.tm_gmtoff, ve = ie >= 0;
        return ie = Math.abs(ie) / 60, ie = ie / 60 * 100 + ie % 60, (ve ? "+" : "-") + ("0000" + ie).slice(-4);
      }, "%Z": function(G) {
        return G.tm_zone;
      }, "%%": function() {
        return "%";
      } };
      h = h.replace(/%%/g, "\0\0");
      for (var E in he)
        h.includes(E) && (h = h.replace(new RegExp(E, "g"), he[E](c)));
      h = h.replace(/\0\0/g, "%");
      var we = en(h, !1);
      return we.length > t ? 0 : (Ch(we, e), we.length - 1);
    }
    function Fh(e, t, i, a, s) {
      return sa(e, t, i, a);
    }
    function ua(e) {
      var t = $e(e) + 1, i = yt(t);
      return ye(e, i, t), i;
    }
    var la = function(e, t, i, a) {
      e || (e = this), this.parent = e, this.mount = e.mount, this.mounted = null, this.id = p.nextInode++, this.name = t, this.mode = i, this.node_ops = {}, this.stream_ops = {}, this.rdev = a;
    }, vn = 365, En = 146;
    Object.defineProperties(la.prototype, { read: { get: function() {
      return (this.mode & vn) === vn;
    }, set: function(e) {
      e ? this.mode |= vn : this.mode &= ~vn;
    } }, write: { get: function() {
      return (this.mode & En) === En;
    }, set: function(e) {
      e ? this.mode |= En : this.mode &= ~En;
    } }, isFolder: { get: function() {
      return p.isDir(this.mode);
    } }, isDevice: { get: function() {
      return p.isChrdev(this.mode);
    } } }), p.FSNode = la, p.staticInit(), n.FS_createPath = p.createPath, n.FS_createDataFile = p.createDataFile, n.FS_createPreloadedFile = p.createPreloadedFile, n.FS_unlink = p.unlink, n.FS_createLazyFile = p.createLazyFile, n.FS_createDevice = p.createDevice, wl(), _r = n.BindingError = oi(Error, "BindingError"), No = n.InternalError = oi(Error, "InternalError"), Ol(), Il(), Hl(), Go = n.UnboundTypeError = oi(Error, "UnboundTypeError"), nf(), n.requestFullscreen = function(t, i) {
      $.requestFullscreen(t, i);
    }, n.requestAnimationFrame = function(t) {
      $.requestAnimationFrame(t);
    }, n.setCanvasSize = function(t, i, a) {
      $.setCanvasSize(t, i, a);
    }, n.pauseMainLoop = function() {
      $.mainLoop.pause();
    }, n.resumeMainLoop = function() {
      $.mainLoop.resume();
    }, n.getUserMedia = function() {
      $.getUserMedia();
    }, n.createContext = function(t, i, a, s) {
      return $.createContext(t, i, a, s);
    }, He.staticInit();
    for (var H, Zt = 0; Zt < 32; ++Zt)
      gi.push(new Array(Zt));
    for (var Rh = new Float32Array(288), Zt = 0; Zt < 288; ++Zt)
      vi[Zt] = Rh.subarray(0, Zt + 1);
    var fa = { __cxa_allocate_exception: Oe, __cxa_throw: Ir, __syscall_chmod: Qu, __syscall_fchmod: Ju, __syscall_fcntl64: tl, __syscall_fstat64: rl, __syscall_ftruncate64: nl, __syscall_getcwd: il, __syscall_getdents64: ol, __syscall_ioctl: al, __syscall_lstat64: sl, __syscall_mkdirat: ul, __syscall_newfstatat: ll, __syscall_openat: fl, __syscall_readlinkat: cl, __syscall_renameat: dl, __syscall_stat64: hl, __syscall_symlink: pl, __syscall_unlinkat: ml, _dlinit: _l, _dlopen_js: bl, _dlsym_js: yl, _embind_register_bigint: gl, _embind_register_bool: xl, _embind_register_class: Zl, _embind_register_class_class_function: ql, _embind_register_class_constructor: Ql, _embind_register_class_function: Jl, _embind_register_class_property: ef, _embind_register_emval: of, _embind_register_enum: sf, _embind_register_enum_value: uf, _embind_register_float: ff, _embind_register_function: cf, _embind_register_integer: hf, _embind_register_memory_view: pf, _embind_register_smart_ptr: mf, _embind_register_std_string: _f, _embind_register_std_wstring: xf, _embind_register_void: Sf, _emscripten_fetch_free: Tf, _emscripten_get_now_is_monotonic: Ff, _emval_as: Rf, _emval_call: Af, _emval_call_method: Df, _emval_call_void_method: kf, _emval_decref: hi, _emval_get_method_caller: Mf, _emval_get_module_property: Bf, _emval_get_property: Nf, _emval_incref: Of, _emval_is_number: jf, _emval_new_cstring: Uf, _emval_run_destructors: Wf, _emval_set_property: $f, _emval_take_value: Gf, _gmtime_js: Vf, _localtime_js: Kf, _mktime_js: Yf, _mmap_js: Xf, _munmap_js: Zf, _tzset_js: qf, abort: Qf, alBufferData: ic, alDeleteBuffers: oc, alDeleteSources: ac, alGenBuffers: sc, alGenSources: uc, alGetError: lc, alGetSourcei: fc, alGetString: cc, alSourcePause: dc, alSourcePlay: hc, alSourceStop: pc, alSourcef: mc, alSourcei: Jo, alcCloseDevice: _c, alcCreateContext: yc, alcDestroyContext: gc, alcGetError: wc, alcGetString: vc, alcMakeContextCurrent: Ec, alcOpenDevice: xc, bnb_get_random_value: Re, bnb_randombytes_init_if_needed: Ye, create_video: C, delete_video: P, emscripten_date_now: Sc, emscripten_get_heap_max: Tc, emscripten_get_now: bn, emscripten_is_main_browser_thread: Cc, emscripten_memcpy_big: Fc, emscripten_resize_heap: Ac, emscripten_start_fetch: Dc, environ_get: Mc, environ_sizes_get: Bc, exit: tc, fd_close: Nc, fd_fdstat_get: Oc, fd_read: Uc, fd_seek: Wc, fd_sync: $c, fd_write: Vc, get_current_hostname: f, get_user_id_web: K, getaddrinfo: Kc, getentropy: wn, glActiveTexture: Yc, glAttachShader: Xc, glBindBuffer: Zc, glBindBufferRange: qc, glBindFramebuffer: Qc, glBindRenderbuffer: Jc, glBindTexture: ed, glBindVertexArray: td, glBlendEquation: rd, glBlendFunc: nd, glBlendFuncSeparate: id, glBlitFramebuffer: od, glBufferData: ad, glBufferSubData: sd, glClearBufferfv: ud, glColorMask: ld, glCompileShader: fd, glCompressedTexImage2D: cd, glCompressedTexImage3D: dd, glCopyTexSubImage2D: hd, glCreateProgram: pd, glCreateShader: md, glDeleteBuffers: _d, glDeleteFramebuffers: bd, glDeleteProgram: yd, glDeleteRenderbuffers: gd, glDeleteShader: wd, glDeleteTextures: vd, glDeleteVertexArrays: Ed, glDepthFunc: xd, glDepthMask: Sd, glDisable: Td, glDrawArrays: Cd, glDrawArraysInstanced: Fd, glDrawBuffers: Rd, glDrawElements: Ad, glDrawElementsInstanced: Id, glEnable: Pd, glEnableVertexAttribArray: Dd, glFramebufferRenderbuffer: kd, glFramebufferTexture2D: Ld, glFrontFace: Md, glGenBuffers: Bd, glGenFramebuffers: Nd, glGenRenderbuffers: Od, glGenTextures: jd, glGenVertexArrays: Ud, glGenerateMipmap: Wd, glGetError: $d, glGetIntegerv: zd, glGetProgramInfoLog: Hd, glGetProgramiv: Kd, glGetShaderInfoLog: Yd, glGetShaderiv: Xd, glGetUniformLocation: qd, glInvalidateFramebuffer: Qd, glLinkProgram: Jd, glPixelStorei: eh, glReadPixels: nh, glRenderbufferStorage: ih, glRenderbufferStorageMultisample: oh, glShaderSource: ah, glTexImage2D: sh, glTexImage3D: uh, glTexParameteri: lh, glTexStorage2D: fh, glTexStorage3D: ch, glTexSubImage2D: dh, glTexSubImage3D: hh, glUniform1f: ph, glUniform1i: mh, glUniform1ui: _h, glUniform2f: bh, glUniform2fv: yh, glUniform4fv: gh, glUseProgram: wh, glVertexAttribIPointer: vh, glVertexAttribPointer: Eh, glViewport: xh, is_electron: u, strftime: sa, strftime_l: Fh, xnnLoadWasmModuleJS: W };
    S(), n.___wasm_call_ctors = function() {
      return (n.___wasm_call_ctors = n.asm.__wasm_call_ctors).apply(null, arguments);
    };
    var yt = n._malloc = function() {
      return (yt = n._malloc = n.asm.malloc).apply(null, arguments);
    }, ca = n.___errno_location = function() {
      return (ca = n.___errno_location = n.asm.__errno_location).apply(null, arguments);
    }, Pt = n._free = function() {
      return (Pt = n._free = n.asm.free).apply(null, arguments);
    }, da = n.___getTypeName = function() {
      return (da = n.___getTypeName = n.asm.__getTypeName).apply(null, arguments);
    };
    n.__embind_initialize_bindings = function() {
      return (n.__embind_initialize_bindings = n.asm._embind_initialize_bindings).apply(null, arguments);
    };
    var xn = n._htonl = function() {
      return (xn = n._htonl = n.asm.htonl).apply(null, arguments);
    }, Sn = n._htons = function() {
      return (Sn = n._htons = n.asm.htons).apply(null, arguments);
    }, ha = n._emscripten_builtin_memalign = function() {
      return (ha = n._emscripten_builtin_memalign = n.asm.emscripten_builtin_memalign).apply(null, arguments);
    }, pa = n._ntohs = function() {
      return (pa = n._ntohs = n.asm.ntohs).apply(null, arguments);
    }, ma = n.___cxa_is_pointer_type = function() {
      return (ma = n.___cxa_is_pointer_type = n.asm.__cxa_is_pointer_type).apply(null, arguments);
    };
    n.dynCall_jii = function() {
      return (n.dynCall_jii = n.asm.dynCall_jii).apply(null, arguments);
    }, n.dynCall_jiii = function() {
      return (n.dynCall_jiii = n.asm.dynCall_jiii).apply(null, arguments);
    }, n.dynCall_viiij = function() {
      return (n.dynCall_viiij = n.asm.dynCall_viiij).apply(null, arguments);
    }, n.dynCall_viijjiii = function() {
      return (n.dynCall_viijjiii = n.asm.dynCall_viijjiii).apply(null, arguments);
    }, n.dynCall_iiiiji = function() {
      return (n.dynCall_iiiiji = n.asm.dynCall_iiiiji).apply(null, arguments);
    }, n.dynCall_iiiijii = function() {
      return (n.dynCall_iiiijii = n.asm.dynCall_iiiijii).apply(null, arguments);
    }, n.dynCall_iijjj = function() {
      return (n.dynCall_iijjj = n.asm.dynCall_iijjj).apply(null, arguments);
    }, n.dynCall_viij = function() {
      return (n.dynCall_viij = n.asm.dynCall_viij).apply(null, arguments);
    }, n.dynCall_ji = function() {
      return (n.dynCall_ji = n.asm.dynCall_ji).apply(null, arguments);
    }, n.dynCall_iiffj = function() {
      return (n.dynCall_iiffj = n.asm.dynCall_iiffj).apply(null, arguments);
    }, n.dynCall_vijjiii = function() {
      return (n.dynCall_vijjiii = n.asm.dynCall_vijjiii).apply(null, arguments);
    }, n.dynCall_viiiji = function() {
      return (n.dynCall_viiiji = n.asm.dynCall_viiiji).apply(null, arguments);
    }, n.dynCall_viiijii = function() {
      return (n.dynCall_viiijii = n.asm.dynCall_viiijii).apply(null, arguments);
    }, n.dynCall_vij = function() {
      return (n.dynCall_vij = n.asm.dynCall_vij).apply(null, arguments);
    }, n.dynCall_iiiiiij = function() {
      return (n.dynCall_iiiiiij = n.asm.dynCall_iiiiiij).apply(null, arguments);
    }, n.dynCall_viijji = function() {
      return (n.dynCall_viijji = n.asm.dynCall_viijji).apply(null, arguments);
    }, n.dynCall_viiiij = function() {
      return (n.dynCall_viiiij = n.asm.dynCall_viiiij).apply(null, arguments);
    }, n.dynCall_viiiiji = function() {
      return (n.dynCall_viiiiji = n.asm.dynCall_viiiiji).apply(null, arguments);
    }, n.dynCall_iiiji = function() {
      return (n.dynCall_iiiji = n.asm.dynCall_iiiji).apply(null, arguments);
    }, n.dynCall_jijjiii = function() {
      return (n.dynCall_jijjiii = n.asm.dynCall_jijjiii).apply(null, arguments);
    }, n.dynCall_jijiii = function() {
      return (n.dynCall_jijiii = n.asm.dynCall_jijiii).apply(null, arguments);
    }, n.dynCall_jijiiii = function() {
      return (n.dynCall_jijiiii = n.asm.dynCall_jijiiii).apply(null, arguments);
    }, n.dynCall_jijii = function() {
      return (n.dynCall_jijii = n.asm.dynCall_jijii).apply(null, arguments);
    }, n.dynCall_jijiiiiii = function() {
      return (n.dynCall_jijiiiiii = n.asm.dynCall_jijiiiiii).apply(null, arguments);
    }, n.dynCall_jijj = function() {
      return (n.dynCall_jijj = n.asm.dynCall_jijj).apply(null, arguments);
    }, n.dynCall_viji = function() {
      return (n.dynCall_viji = n.asm.dynCall_viji).apply(null, arguments);
    }, n.dynCall_iijijjji = function() {
      return (n.dynCall_iijijjji = n.asm.dynCall_iijijjji).apply(null, arguments);
    }, n.dynCall_iiji = function() {
      return (n.dynCall_iiji = n.asm.dynCall_iiji).apply(null, arguments);
    }, n.dynCall_iiiij = function() {
      return (n.dynCall_iiiij = n.asm.dynCall_iiiij).apply(null, arguments);
    }, n.dynCall_jijij = function() {
      return (n.dynCall_jijij = n.asm.dynCall_jijij).apply(null, arguments);
    }, n.dynCall_iijijji = function() {
      return (n.dynCall_iijijji = n.asm.dynCall_iijijji).apply(null, arguments);
    }, n.dynCall_jiiii = function() {
      return (n.dynCall_jiiii = n.asm.dynCall_jiiii).apply(null, arguments);
    }, n.dynCall_jij = function() {
      return (n.dynCall_jij = n.asm.dynCall_jij).apply(null, arguments);
    }, n.dynCall_jiji = function() {
      return (n.dynCall_jiji = n.asm.dynCall_jiji).apply(null, arguments);
    }, n.dynCall_viiijj = function() {
      return (n.dynCall_viiijj = n.asm.dynCall_viiijj).apply(null, arguments);
    }, n.dynCall_iiij = function() {
      return (n.dynCall_iiij = n.asm.dynCall_iiij).apply(null, arguments);
    }, n.dynCall_iijii = function() {
      return (n.dynCall_iijii = n.asm.dynCall_iijii).apply(null, arguments);
    }, n.dynCall_iiijiji = function() {
      return (n.dynCall_iiijiji = n.asm.dynCall_iiijiji).apply(null, arguments);
    }, n.dynCall_iiijiii = function() {
      return (n.dynCall_iiijiii = n.asm.dynCall_iiijiii).apply(null, arguments);
    }, n.dynCall_viijii = function() {
      return (n.dynCall_viijii = n.asm.dynCall_viijii).apply(null, arguments);
    }, n.dynCall_iiiiij = function() {
      return (n.dynCall_iiiiij = n.asm.dynCall_iiiiij).apply(null, arguments);
    }, n.dynCall_iiiiijj = function() {
      return (n.dynCall_iiiiijj = n.asm.dynCall_iiiiijj).apply(null, arguments);
    }, n.dynCall_iiiiiijj = function() {
      return (n.dynCall_iiiiiijj = n.asm.dynCall_iiiiiijj).apply(null, arguments);
    }, n.dynCall_jjj = function() {
      return (n.dynCall_jjj = n.asm.dynCall_jjj).apply(null, arguments);
    }, n.dynCall_iiiijj = function() {
      return (n.dynCall_iiiijj = n.asm.dynCall_iiiijj).apply(null, arguments);
    }, n.dynCall_viijj = function() {
      return (n.dynCall_viijj = n.asm.dynCall_viijj).apply(null, arguments);
    }, n.dynCall_viiijjj = function() {
      return (n.dynCall_viiijjj = n.asm.dynCall_viiijjj).apply(null, arguments);
    }, n.dynCall_iiijj = function() {
      return (n.dynCall_iiijj = n.asm.dynCall_iiijj).apply(null, arguments);
    }, n.dynCall_viijjj = function() {
      return (n.dynCall_viijjj = n.asm.dynCall_viijjj).apply(null, arguments);
    }, n.___start_em_js = 1345796, n.___stop_em_js = 1348948, n.addRunDependency = d, n.removeRunDependency = m, n.FS_createPath = p.createPath, n.FS_createDataFile = p.createDataFile, n.FS_createPreloadedFile = p.createPreloadedFile, n.FS_createLazyFile = p.createLazyFile, n.FS_createDevice = p.createDevice, n.FS_unlink = p.unlink, n.stringToNewUTF8 = ua, n.FS = p, n.GL = Q;
    var Tn;
    q = function e() {
      Tn || _a(), Tn || (q = e);
    };
    function _a(e) {
      if (O > 0 || (Je(), O > 0))
        return;
      function t() {
        Tn || (Tn = !0, n.calledRun = !0, !Ne && (at(), l(n), n.onRuntimeInitialized && n.onRuntimeInitialized(), Ft()));
      }
      n.setStatus ? (n.setStatus("Running..."), setTimeout(function() {
        setTimeout(function() {
          n.setStatus("");
        }, 1), t();
      }, 1)) : t();
    }
    if (n.preInit)
      for (typeof n.preInit == "function" && (n.preInit = [n.preInit]); n.preInit.length > 0; )
        n.preInit.pop()();
    return _a(), ea = function() {
    }, n.ready;
  };
})();
const Ep = vp, xp = () => {
  const r = document.createElement("canvas");
  return r.style.maxWidth = "100%", r.style.objectFit = "cover", r;
}, Sp = async () => WebAssembly.validate(new Uint8Array([0, 97, 115, 109, 1, 0, 0, 0, 1, 5, 1, 96, 0, 1, 123, 3, 2, 1, 0, 10, 10, 1, 8, 0, 65, 0, 253, 15, 253, 98, 11])), Tp = Sp, Cp = (r) => (r !== "" && !r.endsWith("/") && (r += "/"), (o) => r + o), Fp = (r) => (o) => r[o], Rp = async (r, o = {}) => {
  if (await Tp())
    o.info?.('The platform supports SIMD. Going to use "BanubaSDK.simd.wasm"');
  else
    return o.info?.('The platform does not support SIMD. Using "BanubaSDK.wasm"'), r;
  const l = r("BanubaSDK.simd.wasm");
  return l ? await fetch(l, { method: "HEAD" }).then((v) => v.ok) ? (v) => {
    const [w, _] = v.split(".");
    if (_ !== "wasm")
      return r(v);
    const D = [w, "simd", _].join(".");
    return r(D);
  } : (o.warn?.(
    `Unable to fetch "BanubaSDK.simd.wasm" from the "${l}". Using "BanubaSDK.wasm" as a fallback`
  ), r) : (o.warn?.(
    '"BanubaSDK.simd.wasm" is missing in the "locateFile" option. Using "BanubaSDK.wasm" as a fallback'
  ), r);
}, Ap = (() => {
  try {
    return new URL(".", self.location).toString();
  } catch {
    return "";
  }
})(), Ip = async (r, o) => (typeof r > "u" && (r = Ap), typeof r == "string" && (r = Cp(r)), typeof r == "object" && (r = Fp(r)), r = await Rp(r, o), r);
var $r = /* @__PURE__ */ ((r) => (r.ERROR = "error", r.WARNING = "warn", r.INFO = "info", r.DEBUG = "debug", r))($r || {});
function Pp(r) {
  const o = Object.keys($r).reverse().find((l) => typeof r[$r[l]] == "function") ?? "ERROR", n = (l) => {
    for (const v in $r)
      if (l.includes(v)) {
        const w = r[$r[v]];
        if (typeof w == "function") {
          w.call(r, l);
          return;
        }
      }
    const y = r.debug;
    typeof y == "function" && y.call(r, l);
  };
  return {
    logLevel: o,
    print: n,
    printErr: n
  };
}
const Dp = ["isAliasOf", "clone", "delete", "isDeleted", "deleteLater"], kp = ["size", "get", "set", "push_back"], js = (r) => {
  if (r == null || typeof r != "function")
    return !1;
  const { prototype: o } = r;
  return o ? Dp.every((n) => n in o) : !1;
}, Us = (r) => r == null || typeof r != "object" ? !1 : js(r.constructor), Ia = (r) => Us(r) && kp.every((o) => o in r), Lp = (r, o) => new Proxy(r, {
  // instance methods
  get(l, y) {
    const v = l[y];
    return typeof v == "function" ? Ws(v, o) : v;
  }
}), Ws = (r, o) => new Proxy(r, {
  apply(l, y, v) {
    try {
      const w = l.apply(y, v);
      return Us(w) ? Lp(w, o) : w;
    } catch (w) {
      throw typeof w == "number" && (w = new Error(o(w))), w;
    }
  }
}), Mp = (r, o) => new Proxy(r, {
  construct(l, y) {
    try {
      return new l(...y);
    } catch (v) {
      throw typeof v == "number" && (v = new Error(o(v))), v;
    }
  },
  // static methods
  get(l, y) {
    const v = l[y];
    return typeof v == "function" ? Ws(v, o) : v;
  }
}), Bp = (r, o) => {
  for (const [n, l] of Object.entries(r))
    js(l) && Object.defineProperty(r, n, { value: Mp(l, o) });
}, Np = "recognizer_features_update";
async function Op({
  clientToken: r,
  locateFile: o,
  canvas: n = xp(),
  logger: l = { warn: console.warn, error: console.error },
  ...y
}) {
  const v = await Ip(o, l), { logLevel: w, print: _, printErr: D } = Pp(l), k = await new Promise(
    (B, J) => Ep({
      locateFile: v,
      /**
       * Do *not* pass `canvas` here, it *must* be set later to workaround Emscripten memory leaks
       */
      // canvas,
      print: _,
      printErr: D,
      onAbort: (se) => {
        se instanceof WebAssembly.CompileError && J(
          new Error(
            `Failed to compile "BanubaSDK.wasm": the file "${v(
              "BanubaSDK.wasm"
            )}" is invalid. This error is usually caused by misconfigured "locateFile" option, see https://docs.banuba.com/face-ar-sdk-v1/generated/typedoc/modules.html#SDKOptions. Original Error: ` + se
          )
        );
      },
      ...y
    }).then(B, J)
  );
  return Bp(k, (B) => k.getExceptionMessage(B)), k.UtilityManager.initialize(new k.VectorString(), r), k.UtilityManager.setLogLevel(k.SeverityLevel[w]), k.setCanvasSize = (B, J) => {
    Object.assign(n, { width: B, height: J });
  }, k.createContext(n, !0, !0, {
    alpha: !0,
    antialias: !1,
    depth: !1,
    // desynchronized: true,
    // powerPreference: "high-performance",
    premultipliedAlpha: !1,
    preserveDrawingBuffer: !0,
    stencil: !1
  }), k.canvas = n, $s(k.ctx), k;
}
function $s(r) {
  const o = ["EXT_color_buffer_half_float", "EXT_color_buffer_float"];
  for (const n of o)
    r.getExtension(n);
}
var lt = /* @__PURE__ */ ((r) => (r[r.Running = 0] = "Running", r[r.Idle = 1] = "Idle", r[r.Paused = 2] = "Paused", r))(lt || {}), Gs = { exports: {} }, Ai = { exports: {} }, Jt = {}, qr = {};
qr.byteLength = Wp;
qr.toByteArray = Gp;
qr.fromByteArray = Hp;
var Mt = [], wt = [], jp = typeof Uint8Array < "u" ? Uint8Array : Array, Ii = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/";
for (var wr = 0, Up = Ii.length; wr < Up; ++wr)
  Mt[wr] = Ii[wr], wt[Ii.charCodeAt(wr)] = wr;
wt["-".charCodeAt(0)] = 62;
wt["_".charCodeAt(0)] = 63;
function Vs(r) {
  var o = r.length;
  if (o % 4 > 0)
    throw new Error("Invalid string. Length must be a multiple of 4");
  var n = r.indexOf("=");
  n === -1 && (n = o);
  var l = n === o ? 0 : 4 - n % 4;
  return [n, l];
}
function Wp(r) {
  var o = Vs(r), n = o[0], l = o[1];
  return (n + l) * 3 / 4 - l;
}
function $p(r, o, n) {
  return (o + n) * 3 / 4 - n;
}
function Gp(r) {
  var o, n = Vs(r), l = n[0], y = n[1], v = new jp($p(r, l, y)), w = 0, _ = y > 0 ? l - 4 : l, D;
  for (D = 0; D < _; D += 4)
    o = wt[r.charCodeAt(D)] << 18 | wt[r.charCodeAt(D + 1)] << 12 | wt[r.charCodeAt(D + 2)] << 6 | wt[r.charCodeAt(D + 3)], v[w++] = o >> 16 & 255, v[w++] = o >> 8 & 255, v[w++] = o & 255;
  return y === 2 && (o = wt[r.charCodeAt(D)] << 2 | wt[r.charCodeAt(D + 1)] >> 4, v[w++] = o & 255), y === 1 && (o = wt[r.charCodeAt(D)] << 10 | wt[r.charCodeAt(D + 1)] << 4 | wt[r.charCodeAt(D + 2)] >> 2, v[w++] = o >> 8 & 255, v[w++] = o & 255), v;
}
function Vp(r) {
  return Mt[r >> 18 & 63] + Mt[r >> 12 & 63] + Mt[r >> 6 & 63] + Mt[r & 63];
}
function zp(r, o, n) {
  for (var l, y = [], v = o; v < n; v += 3)
    l = (r[v] << 16 & 16711680) + (r[v + 1] << 8 & 65280) + (r[v + 2] & 255), y.push(Vp(l));
  return y.join("");
}
function Hp(r) {
  for (var o, n = r.length, l = n % 3, y = [], v = 16383, w = 0, _ = n - l; w < _; w += v)
    y.push(zp(r, w, w + v > _ ? _ : w + v));
  return l === 1 ? (o = r[n - 1], y.push(
    Mt[o >> 2] + Mt[o << 4 & 63] + "=="
  )) : l === 2 && (o = (r[n - 2] << 8) + r[n - 1], y.push(
    Mt[o >> 10] + Mt[o >> 4 & 63] + Mt[o << 2 & 63] + "="
  )), y.join("");
}
var Vn = {};
/*! ieee754. BSD-3-Clause License. Feross Aboukhadijeh <https://feross.org/opensource> */
Vn.read = function(r, o, n, l, y) {
  var v, w, _ = y * 8 - l - 1, D = (1 << _) - 1, k = D >> 1, B = -7, J = n ? y - 1 : 0, se = n ? -1 : 1, X = r[o + J];
  for (J += se, v = X & (1 << -B) - 1, X >>= -B, B += _; B > 0; v = v * 256 + r[o + J], J += se, B -= 8)
    ;
  for (w = v & (1 << -B) - 1, v >>= -B, B += l; B > 0; w = w * 256 + r[o + J], J += se, B -= 8)
    ;
  if (v === 0)
    v = 1 - k;
  else {
    if (v === D)
      return w ? NaN : (X ? -1 : 1) * (1 / 0);
    w = w + Math.pow(2, l), v = v - k;
  }
  return (X ? -1 : 1) * w * Math.pow(2, v - l);
};
Vn.write = function(r, o, n, l, y, v) {
  var w, _, D, k = v * 8 - y - 1, B = (1 << k) - 1, J = B >> 1, se = y === 23 ? Math.pow(2, -24) - Math.pow(2, -77) : 0, X = l ? 0 : v - 1, z = l ? 1 : -1, pe = o < 0 || o === 0 && 1 / o < 0 ? 1 : 0;
  for (o = Math.abs(o), isNaN(o) || o === 1 / 0 ? (_ = isNaN(o) ? 1 : 0, w = B) : (w = Math.floor(Math.log(o) / Math.LN2), o * (D = Math.pow(2, -w)) < 1 && (w--, D *= 2), w + J >= 1 ? o += se / D : o += se * Math.pow(2, 1 - J), o * D >= 2 && (w++, D /= 2), w + J >= B ? (_ = 0, w = B) : w + J >= 1 ? (_ = (o * D - 1) * Math.pow(2, y), w = w + J) : (_ = o * Math.pow(2, J - 1) * Math.pow(2, y), w = 0)); y >= 8; r[n + X] = _ & 255, X += z, _ /= 256, y -= 8)
    ;
  for (w = w << y | _, k += y; k > 0; r[n + X] = w & 255, X += z, w /= 256, k -= 8)
    ;
  r[n + X - z] |= pe * 128;
};
/*!
 * The buffer module from node.js, for the browser.
 *
 * @author   Feross Aboukhadijeh <https://feross.org>
 * @license  MIT
 */
(function(r) {
  const o = qr, n = Vn, l = typeof Symbol == "function" && typeof Symbol.for == "function" ? Symbol.for("nodejs.util.inspect.custom") : null;
  r.Buffer = _, r.SlowBuffer = re, r.INSPECT_MAX_BYTES = 50;
  const y = 2147483647;
  r.kMaxLength = y, _.TYPED_ARRAY_SUPPORT = v(), !_.TYPED_ARRAY_SUPPORT && typeof console < "u" && typeof console.error == "function" && console.error(
    "This browser lacks typed array (Uint8Array) support which is required by `buffer` v5.x. Use `buffer` v4.x if you require old browser support."
  );
  function v() {
    try {
      const b = new Uint8Array(1), u = { foo: function() {
        return 42;
      } };
      return Object.setPrototypeOf(u, Uint8Array.prototype), Object.setPrototypeOf(b, u), b.foo() === 42;
    } catch {
      return !1;
    }
  }
  Object.defineProperty(_.prototype, "parent", {
    enumerable: !0,
    get: function() {
      if (_.isBuffer(this))
        return this.buffer;
    }
  }), Object.defineProperty(_.prototype, "offset", {
    enumerable: !0,
    get: function() {
      if (_.isBuffer(this))
        return this.byteOffset;
    }
  });
  function w(b) {
    if (b > y)
      throw new RangeError('The value "' + b + '" is invalid for option "size"');
    const u = new Uint8Array(b);
    return Object.setPrototypeOf(u, _.prototype), u;
  }
  function _(b, u, f) {
    if (typeof b == "number") {
      if (typeof u == "string")
        throw new TypeError(
          'The "string" argument must be of type string. Received type number'
        );
      return J(b);
    }
    return D(b, u, f);
  }
  _.poolSize = 8192;
  function D(b, u, f) {
    if (typeof b == "string")
      return se(b, u);
    if (ArrayBuffer.isView(b))
      return z(b);
    if (b == null)
      throw new TypeError(
        "The first argument must be one of type string, Buffer, ArrayBuffer, Array, or Array-like Object. Received type " + typeof b
      );
    if (Y(b, ArrayBuffer) || b && Y(b.buffer, ArrayBuffer) || typeof SharedArrayBuffer < "u" && (Y(b, SharedArrayBuffer) || b && Y(b.buffer, SharedArrayBuffer)))
      return pe(b, u, f);
    if (typeof b == "number")
      throw new TypeError(
        'The "value" argument must not be of type number. Received type number'
      );
    const C = b.valueOf && b.valueOf();
    if (C != null && C !== b)
      return _.from(C, u, f);
    const P = _e(b);
    if (P)
      return P;
    if (typeof Symbol < "u" && Symbol.toPrimitive != null && typeof b[Symbol.toPrimitive] == "function")
      return _.from(b[Symbol.toPrimitive]("string"), u, f);
    throw new TypeError(
      "The first argument must be one of type string, Buffer, ArrayBuffer, Array, or Array-like Object. Received type " + typeof b
    );
  }
  _.from = function(b, u, f) {
    return D(b, u, f);
  }, Object.setPrototypeOf(_.prototype, Uint8Array.prototype), Object.setPrototypeOf(_, Uint8Array);
  function k(b) {
    if (typeof b != "number")
      throw new TypeError('"size" argument must be of type number');
    if (b < 0)
      throw new RangeError('The value "' + b + '" is invalid for option "size"');
  }
  function B(b, u, f) {
    return k(b), b <= 0 ? w(b) : u !== void 0 ? typeof f == "string" ? w(b).fill(u, f) : w(b).fill(u) : w(b);
  }
  _.alloc = function(b, u, f) {
    return B(b, u, f);
  };
  function J(b) {
    return k(b), w(b < 0 ? 0 : de(b) | 0);
  }
  _.allocUnsafe = function(b) {
    return J(b);
  }, _.allocUnsafeSlow = function(b) {
    return J(b);
  };
  function se(b, u) {
    if ((typeof u != "string" || u === "") && (u = "utf8"), !_.isEncoding(u))
      throw new TypeError("Unknown encoding: " + u);
    const f = Fe(b, u) | 0;
    let C = w(f);
    const P = C.write(b, u);
    return P !== f && (C = C.slice(0, P)), C;
  }
  function X(b) {
    const u = b.length < 0 ? 0 : de(b.length) | 0, f = w(u);
    for (let C = 0; C < u; C += 1)
      f[C] = b[C] & 255;
    return f;
  }
  function z(b) {
    if (Y(b, Uint8Array)) {
      const u = new Uint8Array(b);
      return pe(u.buffer, u.byteOffset, u.byteLength);
    }
    return X(b);
  }
  function pe(b, u, f) {
    if (u < 0 || b.byteLength < u)
      throw new RangeError('"offset" is outside of buffer bounds');
    if (b.byteLength < u + (f || 0))
      throw new RangeError('"length" is outside of buffer bounds');
    let C;
    return u === void 0 && f === void 0 ? C = new Uint8Array(b) : f === void 0 ? C = new Uint8Array(b, u) : C = new Uint8Array(b, u, f), Object.setPrototypeOf(C, _.prototype), C;
  }
  function _e(b) {
    if (_.isBuffer(b)) {
      const u = de(b.length) | 0, f = w(u);
      return f.length === 0 || b.copy(f, 0, 0, u), f;
    }
    if (b.length !== void 0)
      return typeof b.length != "number" || xe(b.length) ? w(0) : X(b);
    if (b.type === "Buffer" && Array.isArray(b.data))
      return X(b.data);
  }
  function de(b) {
    if (b >= y)
      throw new RangeError("Attempt to allocate Buffer larger than maximum size: 0x" + y.toString(16) + " bytes");
    return b | 0;
  }
  function re(b) {
    return +b != b && (b = 0), _.alloc(+b);
  }
  _.isBuffer = function(u) {
    return u != null && u._isBuffer === !0 && u !== _.prototype;
  }, _.compare = function(u, f) {
    if (Y(u, Uint8Array) && (u = _.from(u, u.offset, u.byteLength)), Y(f, Uint8Array) && (f = _.from(f, f.offset, f.byteLength)), !_.isBuffer(u) || !_.isBuffer(f))
      throw new TypeError(
        'The "buf1", "buf2" arguments must be one of type Buffer or Uint8Array'
      );
    if (u === f)
      return 0;
    let C = u.length, P = f.length;
    for (let W = 0, K = Math.min(C, P); W < K; ++W)
      if (u[W] !== f[W]) {
        C = u[W], P = f[W];
        break;
      }
    return C < P ? -1 : P < C ? 1 : 0;
  }, _.isEncoding = function(u) {
    switch (String(u).toLowerCase()) {
      case "hex":
      case "utf8":
      case "utf-8":
      case "ascii":
      case "latin1":
      case "binary":
      case "base64":
      case "ucs2":
      case "ucs-2":
      case "utf16le":
      case "utf-16le":
        return !0;
      default:
        return !1;
    }
  }, _.concat = function(u, f) {
    if (!Array.isArray(u))
      throw new TypeError('"list" argument must be an Array of Buffers');
    if (u.length === 0)
      return _.alloc(0);
    let C;
    if (f === void 0)
      for (f = 0, C = 0; C < u.length; ++C)
        f += u[C].length;
    const P = _.allocUnsafe(f);
    let W = 0;
    for (C = 0; C < u.length; ++C) {
      let K = u[C];
      if (Y(K, Uint8Array))
        W + K.length > P.length ? (_.isBuffer(K) || (K = _.from(K)), K.copy(P, W)) : Uint8Array.prototype.set.call(
          P,
          K,
          W
        );
      else if (_.isBuffer(K))
        K.copy(P, W);
      else
        throw new TypeError('"list" argument must be an Array of Buffers');
      W += K.length;
    }
    return P;
  };
  function Fe(b, u) {
    if (_.isBuffer(b))
      return b.length;
    if (ArrayBuffer.isView(b) || Y(b, ArrayBuffer))
      return b.byteLength;
    if (typeof b != "string")
      throw new TypeError(
        'The "string" argument must be one of type string, Buffer, or ArrayBuffer. Received type ' + typeof b
      );
    const f = b.length, C = arguments.length > 2 && arguments[2] === !0;
    if (!C && f === 0)
      return 0;
    let P = !1;
    for (; ; )
      switch (u) {
        case "ascii":
        case "latin1":
        case "binary":
          return f;
        case "utf8":
        case "utf-8":
          return d(b).length;
        case "ucs2":
        case "ucs-2":
        case "utf16le":
        case "utf-16le":
          return f * 2;
        case "hex":
          return f >>> 1;
        case "base64":
          return M(b).length;
        default:
          if (P)
            return C ? -1 : d(b).length;
          u = ("" + u).toLowerCase(), P = !0;
      }
  }
  _.byteLength = Fe;
  function Ne(b, u, f) {
    let C = !1;
    if ((u === void 0 || u < 0) && (u = 0), u > this.length || ((f === void 0 || f > this.length) && (f = this.length), f <= 0) || (f >>>= 0, u >>>= 0, f <= u))
      return "";
    for (b || (b = "utf8"); ; )
      switch (b) {
        case "hex":
          return ne(this, u, f);
        case "utf8":
        case "utf-8":
          return me(this, u, f);
        case "ascii":
          return Te(this, u, f);
        case "latin1":
        case "binary":
          return N(this, u, f);
        case "base64":
          return De(this, u, f);
        case "ucs2":
        case "ucs-2":
        case "utf16le":
        case "utf-16le":
          return te(this, u, f);
        default:
          if (C)
            throw new TypeError("Unknown encoding: " + b);
          b = (b + "").toLowerCase(), C = !0;
      }
  }
  _.prototype._isBuffer = !0;
  function be(b, u, f) {
    const C = b[u];
    b[u] = b[f], b[f] = C;
  }
  _.prototype.swap16 = function() {
    const u = this.length;
    if (u % 2 !== 0)
      throw new RangeError("Buffer size must be a multiple of 16-bits");
    for (let f = 0; f < u; f += 2)
      be(this, f, f + 1);
    return this;
  }, _.prototype.swap32 = function() {
    const u = this.length;
    if (u % 4 !== 0)
      throw new RangeError("Buffer size must be a multiple of 32-bits");
    for (let f = 0; f < u; f += 4)
      be(this, f, f + 3), be(this, f + 1, f + 2);
    return this;
  }, _.prototype.swap64 = function() {
    const u = this.length;
    if (u % 8 !== 0)
      throw new RangeError("Buffer size must be a multiple of 64-bits");
    for (let f = 0; f < u; f += 8)
      be(this, f, f + 7), be(this, f + 1, f + 6), be(this, f + 2, f + 5), be(this, f + 3, f + 4);
    return this;
  }, _.prototype.toString = function() {
    const u = this.length;
    return u === 0 ? "" : arguments.length === 0 ? me(this, 0, u) : Ne.apply(this, arguments);
  }, _.prototype.toLocaleString = _.prototype.toString, _.prototype.equals = function(u) {
    if (!_.isBuffer(u))
      throw new TypeError("Argument must be a Buffer");
    return this === u ? !0 : _.compare(this, u) === 0;
  }, _.prototype.inspect = function() {
    let u = "";
    const f = r.INSPECT_MAX_BYTES;
    return u = this.toString("hex", 0, f).replace(/(.{2})/g, "$1 ").trim(), this.length > f && (u += " ... "), "<Buffer " + u + ">";
  }, l && (_.prototype[l] = _.prototype.inspect), _.prototype.compare = function(u, f, C, P, W) {
    if (Y(u, Uint8Array) && (u = _.from(u, u.offset, u.byteLength)), !_.isBuffer(u))
      throw new TypeError(
        'The "target" argument must be one of type Buffer or Uint8Array. Received type ' + typeof u
      );
    if (f === void 0 && (f = 0), C === void 0 && (C = u ? u.length : 0), P === void 0 && (P = 0), W === void 0 && (W = this.length), f < 0 || C > u.length || P < 0 || W > this.length)
      throw new RangeError("out of range index");
    if (P >= W && f >= C)
      return 0;
    if (P >= W)
      return -1;
    if (f >= C)
      return 1;
    if (f >>>= 0, C >>>= 0, P >>>= 0, W >>>= 0, this === u)
      return 0;
    let K = W - P, Re = C - f;
    const Ye = Math.min(K, Re), Ge = this.slice(P, W), ze = u.slice(f, C);
    for (let Oe = 0; Oe < Ye; ++Oe)
      if (Ge[Oe] !== ze[Oe]) {
        K = Ge[Oe], Re = ze[Oe];
        break;
      }
    return K < Re ? -1 : Re < K ? 1 : 0;
  };
  function Ue(b, u, f, C, P) {
    if (b.length === 0)
      return -1;
    if (typeof f == "string" ? (C = f, f = 0) : f > 2147483647 ? f = 2147483647 : f < -2147483648 && (f = -2147483648), f = +f, xe(f) && (f = P ? 0 : b.length - 1), f < 0 && (f = b.length + f), f >= b.length) {
      if (P)
        return -1;
      f = b.length - 1;
    } else if (f < 0)
      if (P)
        f = 0;
      else
        return -1;
    if (typeof u == "string" && (u = _.from(u, C)), _.isBuffer(u))
      return u.length === 0 ? -1 : We(b, u, f, C, P);
    if (typeof u == "number")
      return u = u & 255, typeof Uint8Array.prototype.indexOf == "function" ? P ? Uint8Array.prototype.indexOf.call(b, u, f) : Uint8Array.prototype.lastIndexOf.call(b, u, f) : We(b, [u], f, C, P);
    throw new TypeError("val must be string, number or Buffer");
  }
  function We(b, u, f, C, P) {
    let W = 1, K = b.length, Re = u.length;
    if (C !== void 0 && (C = String(C).toLowerCase(), C === "ucs2" || C === "ucs-2" || C === "utf16le" || C === "utf-16le")) {
      if (b.length < 2 || u.length < 2)
        return -1;
      W = 2, K /= 2, Re /= 2, f /= 2;
    }
    function Ye(ze, Oe) {
      return W === 1 ? ze[Oe] : ze.readUInt16BE(Oe * W);
    }
    let Ge;
    if (P) {
      let ze = -1;
      for (Ge = f; Ge < K; Ge++)
        if (Ye(b, Ge) === Ye(u, ze === -1 ? 0 : Ge - ze)) {
          if (ze === -1 && (ze = Ge), Ge - ze + 1 === Re)
            return ze * W;
        } else
          ze !== -1 && (Ge -= Ge - ze), ze = -1;
    } else
      for (f + Re > K && (f = K - Re), Ge = f; Ge >= 0; Ge--) {
        let ze = !0;
        for (let Oe = 0; Oe < Re; Oe++)
          if (Ye(b, Ge + Oe) !== Ye(u, Oe)) {
            ze = !1;
            break;
          }
        if (ze)
          return Ge;
      }
    return -1;
  }
  _.prototype.includes = function(u, f, C) {
    return this.indexOf(u, f, C) !== -1;
  }, _.prototype.indexOf = function(u, f, C) {
    return Ue(this, u, f, C, !0);
  }, _.prototype.lastIndexOf = function(u, f, C) {
    return Ue(this, u, f, C, !1);
  };
  function Ve(b, u, f, C) {
    f = Number(f) || 0;
    const P = b.length - f;
    C ? (C = Number(C), C > P && (C = P)) : C = P;
    const W = u.length;
    C > W / 2 && (C = W / 2);
    let K;
    for (K = 0; K < C; ++K) {
      const Re = parseInt(u.substr(K * 2, 2), 16);
      if (xe(Re))
        return K;
      b[f + K] = Re;
    }
    return K;
  }
  function Se(b, u, f, C) {
    return Z(d(u, b.length - f), b, f, C);
  }
  function oe(b, u, f, C) {
    return Z(m(u), b, f, C);
  }
  function ye(b, u, f, C) {
    return Z(M(u), b, f, C);
  }
  function $e(b, u, f, C) {
    return Z(F(u, b.length - f), b, f, C);
  }
  _.prototype.write = function(u, f, C, P) {
    if (f === void 0)
      P = "utf8", C = this.length, f = 0;
    else if (C === void 0 && typeof f == "string")
      P = f, C = this.length, f = 0;
    else if (isFinite(f))
      f = f >>> 0, isFinite(C) ? (C = C >>> 0, P === void 0 && (P = "utf8")) : (P = C, C = void 0);
    else
      throw new Error(
        "Buffer.write(string, encoding, offset[, length]) is no longer supported"
      );
    const W = this.length - f;
    if ((C === void 0 || C > W) && (C = W), u.length > 0 && (C < 0 || f < 0) || f > this.length)
      throw new RangeError("Attempt to write outside buffer bounds");
    P || (P = "utf8");
    let K = !1;
    for (; ; )
      switch (P) {
        case "hex":
          return Ve(this, u, f, C);
        case "utf8":
        case "utf-8":
          return Se(this, u, f, C);
        case "ascii":
        case "latin1":
        case "binary":
          return oe(this, u, f, C);
        case "base64":
          return ye(this, u, f, C);
        case "ucs2":
        case "ucs-2":
        case "utf16le":
        case "utf-16le":
          return $e(this, u, f, C);
        default:
          if (K)
            throw new TypeError("Unknown encoding: " + P);
          P = ("" + P).toLowerCase(), K = !0;
      }
  }, _.prototype.toJSON = function() {
    return {
      type: "Buffer",
      data: Array.prototype.slice.call(this._arr || this, 0)
    };
  };
  function De(b, u, f) {
    return u === 0 && f === b.length ? o.fromByteArray(b) : o.fromByteArray(b.slice(u, f));
  }
  function me(b, u, f) {
    f = Math.min(b.length, f);
    const C = [];
    let P = u;
    for (; P < f; ) {
      const W = b[P];
      let K = null, Re = W > 239 ? 4 : W > 223 ? 3 : W > 191 ? 2 : 1;
      if (P + Re <= f) {
        let Ye, Ge, ze, Oe;
        switch (Re) {
          case 1:
            W < 128 && (K = W);
            break;
          case 2:
            Ye = b[P + 1], (Ye & 192) === 128 && (Oe = (W & 31) << 6 | Ye & 63, Oe > 127 && (K = Oe));
            break;
          case 3:
            Ye = b[P + 1], Ge = b[P + 2], (Ye & 192) === 128 && (Ge & 192) === 128 && (Oe = (W & 15) << 12 | (Ye & 63) << 6 | Ge & 63, Oe > 2047 && (Oe < 55296 || Oe > 57343) && (K = Oe));
            break;
          case 4:
            Ye = b[P + 1], Ge = b[P + 2], ze = b[P + 3], (Ye & 192) === 128 && (Ge & 192) === 128 && (ze & 192) === 128 && (Oe = (W & 15) << 18 | (Ye & 63) << 12 | (Ge & 63) << 6 | ze & 63, Oe > 65535 && Oe < 1114112 && (K = Oe));
        }
      }
      K === null ? (K = 65533, Re = 1) : K > 65535 && (K -= 65536, C.push(K >>> 10 & 1023 | 55296), K = 56320 | K & 1023), C.push(K), P += Re;
    }
    return Pe(C);
  }
  const ue = 4096;
  function Pe(b) {
    const u = b.length;
    if (u <= ue)
      return String.fromCharCode.apply(String, b);
    let f = "", C = 0;
    for (; C < u; )
      f += String.fromCharCode.apply(
        String,
        b.slice(C, C += ue)
      );
    return f;
  }
  function Te(b, u, f) {
    let C = "";
    f = Math.min(b.length, f);
    for (let P = u; P < f; ++P)
      C += String.fromCharCode(b[P] & 127);
    return C;
  }
  function N(b, u, f) {
    let C = "";
    f = Math.min(b.length, f);
    for (let P = u; P < f; ++P)
      C += String.fromCharCode(b[P]);
    return C;
  }
  function ne(b, u, f) {
    const C = b.length;
    (!u || u < 0) && (u = 0), (!f || f < 0 || f > C) && (f = C);
    let P = "";
    for (let W = u; W < f; ++W)
      P += Be[b[W]];
    return P;
  }
  function te(b, u, f) {
    const C = b.slice(u, f);
    let P = "";
    for (let W = 0; W < C.length - 1; W += 2)
      P += String.fromCharCode(C[W] + C[W + 1] * 256);
    return P;
  }
  _.prototype.slice = function(u, f) {
    const C = this.length;
    u = ~~u, f = f === void 0 ? C : ~~f, u < 0 ? (u += C, u < 0 && (u = 0)) : u > C && (u = C), f < 0 ? (f += C, f < 0 && (f = 0)) : f > C && (f = C), f < u && (f = u);
    const P = this.subarray(u, f);
    return Object.setPrototypeOf(P, _.prototype), P;
  };
  function ge(b, u, f) {
    if (b % 1 !== 0 || b < 0)
      throw new RangeError("offset is not uint");
    if (b + u > f)
      throw new RangeError("Trying to access beyond buffer length");
  }
  _.prototype.readUintLE = _.prototype.readUIntLE = function(u, f, C) {
    u = u >>> 0, f = f >>> 0, C || ge(u, f, this.length);
    let P = this[u], W = 1, K = 0;
    for (; ++K < f && (W *= 256); )
      P += this[u + K] * W;
    return P;
  }, _.prototype.readUintBE = _.prototype.readUIntBE = function(u, f, C) {
    u = u >>> 0, f = f >>> 0, C || ge(u, f, this.length);
    let P = this[u + --f], W = 1;
    for (; f > 0 && (W *= 256); )
      P += this[u + --f] * W;
    return P;
  }, _.prototype.readUint8 = _.prototype.readUInt8 = function(u, f) {
    return u = u >>> 0, f || ge(u, 1, this.length), this[u];
  }, _.prototype.readUint16LE = _.prototype.readUInt16LE = function(u, f) {
    return u = u >>> 0, f || ge(u, 2, this.length), this[u] | this[u + 1] << 8;
  }, _.prototype.readUint16BE = _.prototype.readUInt16BE = function(u, f) {
    return u = u >>> 0, f || ge(u, 2, this.length), this[u] << 8 | this[u + 1];
  }, _.prototype.readUint32LE = _.prototype.readUInt32LE = function(u, f) {
    return u = u >>> 0, f || ge(u, 4, this.length), (this[u] | this[u + 1] << 8 | this[u + 2] << 16) + this[u + 3] * 16777216;
  }, _.prototype.readUint32BE = _.prototype.readUInt32BE = function(u, f) {
    return u = u >>> 0, f || ge(u, 4, this.length), this[u] * 16777216 + (this[u + 1] << 16 | this[u + 2] << 8 | this[u + 3]);
  }, _.prototype.readBigUInt64LE = S(function(u) {
    u = u >>> 0, L(u, "offset");
    const f = this[u], C = this[u + 7];
    (f === void 0 || C === void 0) && O(u, this.length - 8);
    const P = f + this[++u] * 2 ** 8 + this[++u] * 2 ** 16 + this[++u] * 2 ** 24, W = this[++u] + this[++u] * 2 ** 8 + this[++u] * 2 ** 16 + C * 2 ** 24;
    return BigInt(P) + (BigInt(W) << BigInt(32));
  }), _.prototype.readBigUInt64BE = S(function(u) {
    u = u >>> 0, L(u, "offset");
    const f = this[u], C = this[u + 7];
    (f === void 0 || C === void 0) && O(u, this.length - 8);
    const P = f * 2 ** 24 + this[++u] * 2 ** 16 + this[++u] * 2 ** 8 + this[++u], W = this[++u] * 2 ** 24 + this[++u] * 2 ** 16 + this[++u] * 2 ** 8 + C;
    return (BigInt(P) << BigInt(32)) + BigInt(W);
  }), _.prototype.readIntLE = function(u, f, C) {
    u = u >>> 0, f = f >>> 0, C || ge(u, f, this.length);
    let P = this[u], W = 1, K = 0;
    for (; ++K < f && (W *= 256); )
      P += this[u + K] * W;
    return W *= 128, P >= W && (P -= Math.pow(2, 8 * f)), P;
  }, _.prototype.readIntBE = function(u, f, C) {
    u = u >>> 0, f = f >>> 0, C || ge(u, f, this.length);
    let P = f, W = 1, K = this[u + --P];
    for (; P > 0 && (W *= 256); )
      K += this[u + --P] * W;
    return W *= 128, K >= W && (K -= Math.pow(2, 8 * f)), K;
  }, _.prototype.readInt8 = function(u, f) {
    return u = u >>> 0, f || ge(u, 1, this.length), this[u] & 128 ? (255 - this[u] + 1) * -1 : this[u];
  }, _.prototype.readInt16LE = function(u, f) {
    u = u >>> 0, f || ge(u, 2, this.length);
    const C = this[u] | this[u + 1] << 8;
    return C & 32768 ? C | 4294901760 : C;
  }, _.prototype.readInt16BE = function(u, f) {
    u = u >>> 0, f || ge(u, 2, this.length);
    const C = this[u + 1] | this[u] << 8;
    return C & 32768 ? C | 4294901760 : C;
  }, _.prototype.readInt32LE = function(u, f) {
    return u = u >>> 0, f || ge(u, 4, this.length), this[u] | this[u + 1] << 8 | this[u + 2] << 16 | this[u + 3] << 24;
  }, _.prototype.readInt32BE = function(u, f) {
    return u = u >>> 0, f || ge(u, 4, this.length), this[u] << 24 | this[u + 1] << 16 | this[u + 2] << 8 | this[u + 3];
  }, _.prototype.readBigInt64LE = S(function(u) {
    u = u >>> 0, L(u, "offset");
    const f = this[u], C = this[u + 7];
    (f === void 0 || C === void 0) && O(u, this.length - 8);
    const P = this[u + 4] + this[u + 5] * 2 ** 8 + this[u + 6] * 2 ** 16 + (C << 24);
    return (BigInt(P) << BigInt(32)) + BigInt(f + this[++u] * 2 ** 8 + this[++u] * 2 ** 16 + this[++u] * 2 ** 24);
  }), _.prototype.readBigInt64BE = S(function(u) {
    u = u >>> 0, L(u, "offset");
    const f = this[u], C = this[u + 7];
    (f === void 0 || C === void 0) && O(u, this.length - 8);
    const P = (f << 24) + // Overflow
    this[++u] * 2 ** 16 + this[++u] * 2 ** 8 + this[++u];
    return (BigInt(P) << BigInt(32)) + BigInt(this[++u] * 2 ** 24 + this[++u] * 2 ** 16 + this[++u] * 2 ** 8 + C);
  }), _.prototype.readFloatLE = function(u, f) {
    return u = u >>> 0, f || ge(u, 4, this.length), n.read(this, u, !0, 23, 4);
  }, _.prototype.readFloatBE = function(u, f) {
    return u = u >>> 0, f || ge(u, 4, this.length), n.read(this, u, !1, 23, 4);
  }, _.prototype.readDoubleLE = function(u, f) {
    return u = u >>> 0, f || ge(u, 8, this.length), n.read(this, u, !0, 52, 8);
  }, _.prototype.readDoubleBE = function(u, f) {
    return u = u >>> 0, f || ge(u, 8, this.length), n.read(this, u, !1, 52, 8);
  };
  function Ae(b, u, f, C, P, W) {
    if (!_.isBuffer(b))
      throw new TypeError('"buffer" argument must be a Buffer instance');
    if (u > P || u < W)
      throw new RangeError('"value" argument is out of bounds');
    if (f + C > b.length)
      throw new RangeError("Index out of range");
  }
  _.prototype.writeUintLE = _.prototype.writeUIntLE = function(u, f, C, P) {
    if (u = +u, f = f >>> 0, C = C >>> 0, !P) {
      const Re = Math.pow(2, 8 * C) - 1;
      Ae(this, u, f, C, Re, 0);
    }
    let W = 1, K = 0;
    for (this[f] = u & 255; ++K < C && (W *= 256); )
      this[f + K] = u / W & 255;
    return f + C;
  }, _.prototype.writeUintBE = _.prototype.writeUIntBE = function(u, f, C, P) {
    if (u = +u, f = f >>> 0, C = C >>> 0, !P) {
      const Re = Math.pow(2, 8 * C) - 1;
      Ae(this, u, f, C, Re, 0);
    }
    let W = C - 1, K = 1;
    for (this[f + W] = u & 255; --W >= 0 && (K *= 256); )
      this[f + W] = u / K & 255;
    return f + C;
  }, _.prototype.writeUint8 = _.prototype.writeUInt8 = function(u, f, C) {
    return u = +u, f = f >>> 0, C || Ae(this, u, f, 1, 255, 0), this[f] = u & 255, f + 1;
  }, _.prototype.writeUint16LE = _.prototype.writeUInt16LE = function(u, f, C) {
    return u = +u, f = f >>> 0, C || Ae(this, u, f, 2, 65535, 0), this[f] = u & 255, this[f + 1] = u >>> 8, f + 2;
  }, _.prototype.writeUint16BE = _.prototype.writeUInt16BE = function(u, f, C) {
    return u = +u, f = f >>> 0, C || Ae(this, u, f, 2, 65535, 0), this[f] = u >>> 8, this[f + 1] = u & 255, f + 2;
  }, _.prototype.writeUint32LE = _.prototype.writeUInt32LE = function(u, f, C) {
    return u = +u, f = f >>> 0, C || Ae(this, u, f, 4, 4294967295, 0), this[f + 3] = u >>> 24, this[f + 2] = u >>> 16, this[f + 1] = u >>> 8, this[f] = u & 255, f + 4;
  }, _.prototype.writeUint32BE = _.prototype.writeUInt32BE = function(u, f, C) {
    return u = +u, f = f >>> 0, C || Ae(this, u, f, 4, 4294967295, 0), this[f] = u >>> 24, this[f + 1] = u >>> 16, this[f + 2] = u >>> 8, this[f + 3] = u & 255, f + 4;
  };
  function it(b, u, f, C, P) {
    ut(u, C, P, b, f, 7);
    let W = Number(u & BigInt(4294967295));
    b[f++] = W, W = W >> 8, b[f++] = W, W = W >> 8, b[f++] = W, W = W >> 8, b[f++] = W;
    let K = Number(u >> BigInt(32) & BigInt(4294967295));
    return b[f++] = K, K = K >> 8, b[f++] = K, K = K >> 8, b[f++] = K, K = K >> 8, b[f++] = K, f;
  }
  function ct(b, u, f, C, P) {
    ut(u, C, P, b, f, 7);
    let W = Number(u & BigInt(4294967295));
    b[f + 7] = W, W = W >> 8, b[f + 6] = W, W = W >> 8, b[f + 5] = W, W = W >> 8, b[f + 4] = W;
    let K = Number(u >> BigInt(32) & BigInt(4294967295));
    return b[f + 3] = K, K = K >> 8, b[f + 2] = K, K = K >> 8, b[f + 1] = K, K = K >> 8, b[f] = K, f + 8;
  }
  _.prototype.writeBigUInt64LE = S(function(u, f = 0) {
    return it(this, u, f, BigInt(0), BigInt("0xffffffffffffffff"));
  }), _.prototype.writeBigUInt64BE = S(function(u, f = 0) {
    return ct(this, u, f, BigInt(0), BigInt("0xffffffffffffffff"));
  }), _.prototype.writeIntLE = function(u, f, C, P) {
    if (u = +u, f = f >>> 0, !P) {
      const Ye = Math.pow(2, 8 * C - 1);
      Ae(this, u, f, C, Ye - 1, -Ye);
    }
    let W = 0, K = 1, Re = 0;
    for (this[f] = u & 255; ++W < C && (K *= 256); )
      u < 0 && Re === 0 && this[f + W - 1] !== 0 && (Re = 1), this[f + W] = (u / K >> 0) - Re & 255;
    return f + C;
  }, _.prototype.writeIntBE = function(u, f, C, P) {
    if (u = +u, f = f >>> 0, !P) {
      const Ye = Math.pow(2, 8 * C - 1);
      Ae(this, u, f, C, Ye - 1, -Ye);
    }
    let W = C - 1, K = 1, Re = 0;
    for (this[f + W] = u & 255; --W >= 0 && (K *= 256); )
      u < 0 && Re === 0 && this[f + W + 1] !== 0 && (Re = 1), this[f + W] = (u / K >> 0) - Re & 255;
    return f + C;
  }, _.prototype.writeInt8 = function(u, f, C) {
    return u = +u, f = f >>> 0, C || Ae(this, u, f, 1, 127, -128), u < 0 && (u = 255 + u + 1), this[f] = u & 255, f + 1;
  }, _.prototype.writeInt16LE = function(u, f, C) {
    return u = +u, f = f >>> 0, C || Ae(this, u, f, 2, 32767, -32768), this[f] = u & 255, this[f + 1] = u >>> 8, f + 2;
  }, _.prototype.writeInt16BE = function(u, f, C) {
    return u = +u, f = f >>> 0, C || Ae(this, u, f, 2, 32767, -32768), this[f] = u >>> 8, this[f + 1] = u & 255, f + 2;
  }, _.prototype.writeInt32LE = function(u, f, C) {
    return u = +u, f = f >>> 0, C || Ae(this, u, f, 4, 2147483647, -2147483648), this[f] = u & 255, this[f + 1] = u >>> 8, this[f + 2] = u >>> 16, this[f + 3] = u >>> 24, f + 4;
  }, _.prototype.writeInt32BE = function(u, f, C) {
    return u = +u, f = f >>> 0, C || Ae(this, u, f, 4, 2147483647, -2147483648), u < 0 && (u = 4294967295 + u + 1), this[f] = u >>> 24, this[f + 1] = u >>> 16, this[f + 2] = u >>> 8, this[f + 3] = u & 255, f + 4;
  }, _.prototype.writeBigInt64LE = S(function(u, f = 0) {
    return it(this, u, f, -BigInt("0x8000000000000000"), BigInt("0x7fffffffffffffff"));
  }), _.prototype.writeBigInt64BE = S(function(u, f = 0) {
    return ct(this, u, f, -BigInt("0x8000000000000000"), BigInt("0x7fffffffffffffff"));
  });
  function ot(b, u, f, C, P, W) {
    if (f + C > b.length)
      throw new RangeError("Index out of range");
    if (f < 0)
      throw new RangeError("Index out of range");
  }
  function Et(b, u, f, C, P) {
    return u = +u, f = f >>> 0, P || ot(b, u, f, 4), n.write(b, u, f, C, 23, 4), f + 4;
  }
  _.prototype.writeFloatLE = function(u, f, C) {
    return Et(this, u, f, !0, C);
  }, _.prototype.writeFloatBE = function(u, f, C) {
    return Et(this, u, f, !1, C);
  };
  function mt(b, u, f, C, P) {
    return u = +u, f = f >>> 0, P || ot(b, u, f, 8), n.write(b, u, f, C, 52, 8), f + 8;
  }
  _.prototype.writeDoubleLE = function(u, f, C) {
    return mt(this, u, f, !0, C);
  }, _.prototype.writeDoubleBE = function(u, f, C) {
    return mt(this, u, f, !1, C);
  }, _.prototype.copy = function(u, f, C, P) {
    if (!_.isBuffer(u))
      throw new TypeError("argument should be a Buffer");
    if (C || (C = 0), !P && P !== 0 && (P = this.length), f >= u.length && (f = u.length), f || (f = 0), P > 0 && P < C && (P = C), P === C || u.length === 0 || this.length === 0)
      return 0;
    if (f < 0)
      throw new RangeError("targetStart out of bounds");
    if (C < 0 || C >= this.length)
      throw new RangeError("Index out of range");
    if (P < 0)
      throw new RangeError("sourceEnd out of bounds");
    P > this.length && (P = this.length), u.length - f < P - C && (P = u.length - f + C);
    const W = P - C;
    return this === u && typeof Uint8Array.prototype.copyWithin == "function" ? this.copyWithin(f, C, P) : Uint8Array.prototype.set.call(
      u,
      this.subarray(C, P),
      f
    ), W;
  }, _.prototype.fill = function(u, f, C, P) {
    if (typeof u == "string") {
      if (typeof f == "string" ? (P = f, f = 0, C = this.length) : typeof C == "string" && (P = C, C = this.length), P !== void 0 && typeof P != "string")
        throw new TypeError("encoding must be a string");
      if (typeof P == "string" && !_.isEncoding(P))
        throw new TypeError("Unknown encoding: " + P);
      if (u.length === 1) {
        const K = u.charCodeAt(0);
        (P === "utf8" && K < 128 || P === "latin1") && (u = K);
      }
    } else
      typeof u == "number" ? u = u & 255 : typeof u == "boolean" && (u = Number(u));
    if (f < 0 || this.length < f || this.length < C)
      throw new RangeError("Out of range index");
    if (C <= f)
      return this;
    f = f >>> 0, C = C === void 0 ? this.length : C >>> 0, u || (u = 0);
    let W;
    if (typeof u == "number")
      for (W = f; W < C; ++W)
        this[W] = u;
    else {
      const K = _.isBuffer(u) ? u : _.from(u, P), Re = K.length;
      if (Re === 0)
        throw new TypeError('The value "' + u + '" is invalid for argument "value"');
      for (W = 0; W < C - f; ++W)
        this[W + f] = K[W % Re];
    }
    return this;
  };
  const Je = {};
  function at(b, u, f) {
    Je[b] = class extends f {
      constructor() {
        super(), Object.defineProperty(this, "message", {
          value: u.apply(this, arguments),
          writable: !0,
          configurable: !0
        }), this.name = `${this.name} [${b}]`, delete this.name;
      }
      get code() {
        return b;
      }
      set code(P) {
        Object.defineProperty(this, "code", {
          configurable: !0,
          enumerable: !0,
          value: P,
          writable: !0
        });
      }
      toString() {
        return `${this.name} [${b}]: ${this.message}`;
      }
    };
  }
  at(
    "ERR_BUFFER_OUT_OF_BOUNDS",
    function(b) {
      return b ? `${b} is outside of buffer bounds` : "Attempt to access memory outside buffer bounds";
    },
    RangeError
  ), at(
    "ERR_INVALID_ARG_TYPE",
    function(b, u) {
      return `The "${b}" argument must be of type number. Received type ${typeof u}`;
    },
    TypeError
  ), at(
    "ERR_OUT_OF_RANGE",
    function(b, u, f) {
      let C = `The value of "${b}" is out of range.`, P = f;
      return Number.isInteger(f) && Math.abs(f) > 2 ** 32 ? P = Ft(String(f)) : typeof f == "bigint" && (P = String(f), (f > BigInt(2) ** BigInt(32) || f < -(BigInt(2) ** BigInt(32))) && (P = Ft(P)), P += "n"), C += ` It must be ${u}. Received ${P}`, C;
    },
    RangeError
  );
  function Ft(b) {
    let u = "", f = b.length;
    const C = b[0] === "-" ? 1 : 0;
    for (; f >= C + 4; f -= 3)
      u = `_${b.slice(f - 3, f)}${u}`;
    return `${b.slice(0, f)}${u}`;
  }
  function bt(b, u, f) {
    L(u, "offset"), (b[u] === void 0 || b[u + f] === void 0) && O(u, b.length - (f + 1));
  }
  function ut(b, u, f, C, P, W) {
    if (b > f || b < u) {
      const K = typeof u == "bigint" ? "n" : "";
      let Re;
      throw W > 3 ? u === 0 || u === BigInt(0) ? Re = `>= 0${K} and < 2${K} ** ${(W + 1) * 8}${K}` : Re = `>= -(2${K} ** ${(W + 1) * 8 - 1}${K}) and < 2 ** ${(W + 1) * 8 - 1}${K}` : Re = `>= ${u}${K} and <= ${f}${K}`, new Je.ERR_OUT_OF_RANGE("value", Re, b);
    }
    bt(C, P, W);
  }
  function L(b, u) {
    if (typeof b != "number")
      throw new Je.ERR_INVALID_ARG_TYPE(u, "number", b);
  }
  function O(b, u, f) {
    throw Math.floor(b) !== b ? (L(b, f), new Je.ERR_OUT_OF_RANGE(f || "offset", "an integer", b)) : u < 0 ? new Je.ERR_BUFFER_OUT_OF_BOUNDS() : new Je.ERR_OUT_OF_RANGE(
      f || "offset",
      `>= ${f ? 1 : 0} and <= ${u}`,
      b
    );
  }
  const q = /[^+/0-9A-Za-z-_]/g;
  function x(b) {
    if (b = b.split("=")[0], b = b.trim().replace(q, ""), b.length < 2)
      return "";
    for (; b.length % 4 !== 0; )
      b = b + "=";
    return b;
  }
  function d(b, u) {
    u = u || 1 / 0;
    let f;
    const C = b.length;
    let P = null;
    const W = [];
    for (let K = 0; K < C; ++K) {
      if (f = b.charCodeAt(K), f > 55295 && f < 57344) {
        if (!P) {
          if (f > 56319) {
            (u -= 3) > -1 && W.push(239, 191, 189);
            continue;
          } else if (K + 1 === C) {
            (u -= 3) > -1 && W.push(239, 191, 189);
            continue;
          }
          P = f;
          continue;
        }
        if (f < 56320) {
          (u -= 3) > -1 && W.push(239, 191, 189), P = f;
          continue;
        }
        f = (P - 55296 << 10 | f - 56320) + 65536;
      } else
        P && (u -= 3) > -1 && W.push(239, 191, 189);
      if (P = null, f < 128) {
        if ((u -= 1) < 0)
          break;
        W.push(f);
      } else if (f < 2048) {
        if ((u -= 2) < 0)
          break;
        W.push(
          f >> 6 | 192,
          f & 63 | 128
        );
      } else if (f < 65536) {
        if ((u -= 3) < 0)
          break;
        W.push(
          f >> 12 | 224,
          f >> 6 & 63 | 128,
          f & 63 | 128
        );
      } else if (f < 1114112) {
        if ((u -= 4) < 0)
          break;
        W.push(
          f >> 18 | 240,
          f >> 12 & 63 | 128,
          f >> 6 & 63 | 128,
          f & 63 | 128
        );
      } else
        throw new Error("Invalid code point");
    }
    return W;
  }
  function m(b) {
    const u = [];
    for (let f = 0; f < b.length; ++f)
      u.push(b.charCodeAt(f) & 255);
    return u;
  }
  function F(b, u) {
    let f, C, P;
    const W = [];
    for (let K = 0; K < b.length && !((u -= 2) < 0); ++K)
      f = b.charCodeAt(K), C = f >> 8, P = f % 256, W.push(P), W.push(C);
    return W;
  }
  function M(b) {
    return o.toByteArray(x(b));
  }
  function Z(b, u, f, C) {
    let P;
    for (P = 0; P < C && !(P + f >= u.length || P >= b.length); ++P)
      u[P + f] = b[P];
    return P;
  }
  function Y(b, u) {
    return b instanceof u || b != null && b.constructor != null && b.constructor.name != null && b.constructor.name === u.name;
  }
  function xe(b) {
    return b !== b;
  }
  const Be = function() {
    const b = "0123456789abcdef", u = new Array(256);
    for (let f = 0; f < 16; ++f) {
      const C = f * 16;
      for (let P = 0; P < 16; ++P)
        u[C + P] = b[f] + b[P];
    }
    return u;
  }();
  function S(b) {
    return typeof BigInt > "u" ? T : b;
  }
  function T() {
    throw new Error("BigInt not supported");
  }
})(Jt);
var rt = {
  ArrayIsArray(r) {
    return Array.isArray(r);
  },
  ArrayPrototypeIncludes(r, o) {
    return r.includes(o);
  },
  ArrayPrototypeIndexOf(r, o) {
    return r.indexOf(o);
  },
  ArrayPrototypeJoin(r, o) {
    return r.join(o);
  },
  ArrayPrototypeMap(r, o) {
    return r.map(o);
  },
  ArrayPrototypePop(r, o) {
    return r.pop(o);
  },
  ArrayPrototypePush(r, o) {
    return r.push(o);
  },
  ArrayPrototypeSlice(r, o, n) {
    return r.slice(o, n);
  },
  Error,
  FunctionPrototypeCall(r, o, ...n) {
    return r.call(o, ...n);
  },
  FunctionPrototypeSymbolHasInstance(r, o) {
    return Function.prototype[Symbol.hasInstance].call(r, o);
  },
  MathFloor: Math.floor,
  Number,
  NumberIsInteger: Number.isInteger,
  NumberIsNaN: Number.isNaN,
  NumberMAX_SAFE_INTEGER: Number.MAX_SAFE_INTEGER,
  NumberMIN_SAFE_INTEGER: Number.MIN_SAFE_INTEGER,
  NumberParseInt: Number.parseInt,
  ObjectDefineProperties(r, o) {
    return Object.defineProperties(r, o);
  },
  ObjectDefineProperty(r, o, n) {
    return Object.defineProperty(r, o, n);
  },
  ObjectGetOwnPropertyDescriptor(r, o) {
    return Object.getOwnPropertyDescriptor(r, o);
  },
  ObjectKeys(r) {
    return Object.keys(r);
  },
  ObjectSetPrototypeOf(r, o) {
    return Object.setPrototypeOf(r, o);
  },
  Promise,
  PromisePrototypeCatch(r, o) {
    return r.catch(o);
  },
  PromisePrototypeThen(r, o, n) {
    return r.then(o, n);
  },
  PromiseReject(r) {
    return Promise.reject(r);
  },
  ReflectApply: Reflect.apply,
  RegExpPrototypeTest(r, o) {
    return r.test(o);
  },
  SafeSet: Set,
  String,
  StringPrototypeSlice(r, o, n) {
    return r.slice(o, n);
  },
  StringPrototypeToLowerCase(r) {
    return r.toLowerCase();
  },
  StringPrototypeToUpperCase(r) {
    return r.toUpperCase();
  },
  StringPrototypeTrim(r) {
    return r.trim();
  },
  Symbol,
  SymbolFor: Symbol.for,
  SymbolAsyncIterator: Symbol.asyncIterator,
  SymbolHasInstance: Symbol.hasInstance,
  SymbolIterator: Symbol.iterator,
  TypedArrayPrototypeSet(r, o, n) {
    return r.set(o, n);
  },
  Uint8Array
}, zs = { exports: {} };
(function(r) {
  const o = Jt, n = Object.getPrototypeOf(async function() {
  }).constructor, l = globalThis.Blob || o.Blob, y = typeof l < "u" ? function(_) {
    return _ instanceof l;
  } : function(_) {
    return !1;
  };
  class v extends Error {
    constructor(_) {
      if (!Array.isArray(_))
        throw new TypeError(`Expected input to be an Array, got ${typeof _}`);
      let D = "";
      for (let k = 0; k < _.length; k++)
        D += `    ${_[k].stack}
`;
      super(D), this.name = "AggregateError", this.errors = _;
    }
  }
  r.exports = {
    AggregateError: v,
    kEmptyObject: Object.freeze({}),
    once(w) {
      let _ = !1;
      return function(...D) {
        _ || (_ = !0, w.apply(this, D));
      };
    },
    createDeferredPromise: function() {
      let w, _;
      return {
        promise: new Promise((k, B) => {
          w = k, _ = B;
        }),
        resolve: w,
        reject: _
      };
    },
    promisify(w) {
      return new Promise((_, D) => {
        w((k, ...B) => k ? D(k) : _(...B));
      });
    },
    debuglog() {
      return function() {
      };
    },
    format(w, ..._) {
      return w.replace(/%([sdifj])/g, function(...[D, k]) {
        const B = _.shift();
        return k === "f" ? B.toFixed(6) : k === "j" ? JSON.stringify(B) : k === "s" && typeof B == "object" ? `${B.constructor !== Object ? B.constructor.name : ""} {}`.trim() : B.toString();
      });
    },
    inspect(w) {
      switch (typeof w) {
        case "string":
          if (w.includes("'"))
            if (w.includes('"')) {
              if (!w.includes("`") && !w.includes("${"))
                return `\`${w}\``;
            } else
              return `"${w}"`;
          return `'${w}'`;
        case "number":
          return isNaN(w) ? "NaN" : Object.is(w, -0) ? String(w) : w;
        case "bigint":
          return `${String(w)}n`;
        case "boolean":
        case "undefined":
          return String(w);
        case "object":
          return "{}";
      }
    },
    types: {
      isAsyncFunction(w) {
        return w instanceof n;
      },
      isArrayBufferView(w) {
        return ArrayBuffer.isView(w);
      }
    },
    isBlob: y
  }, r.exports.promisify.custom = Symbol.for("nodejs.util.promisify.custom");
})(zs);
var Gt = zs.exports, _o = {}, Wr = { exports: {} }, Pa;
function bo() {
  if (Pa)
    return Wr.exports;
  Pa = 1;
  const { AbortController: r, AbortSignal: o } = typeof self < "u" ? self : typeof window < "u" ? window : (
    /* otherwise */
    void 0
  );
  return Wr.exports = r, Wr.exports.AbortSignal = o, Wr.exports.default = r, Wr.exports;
}
const { format: Kp, inspect: jn, AggregateError: Yp } = Gt, Xp = globalThis.AggregateError || Yp, Zp = Symbol("kIsNodeError"), qp = [
  "string",
  "function",
  "number",
  "object",
  // Accept 'Function' and 'Object' as alternative to the lower cased version.
  "Function",
  "Object",
  "boolean",
  "bigint",
  "symbol"
], Qp = /^([A-Z][a-z0-9]*)+$/, Jp = "__node_internal_", zn = {};
function fr(r, o) {
  if (!r)
    throw new zn.ERR_INTERNAL_ASSERTION(o);
}
function Da(r) {
  let o = "", n = r.length;
  const l = r[0] === "-" ? 1 : 0;
  for (; n >= l + 4; n -= 3)
    o = `_${r.slice(n - 3, n)}${o}`;
  return `${r.slice(0, n)}${o}`;
}
function e0(r, o, n) {
  if (typeof o == "function")
    return fr(
      o.length <= n.length,
      // Default options do not count.
      `Code: ${r}; The provided arguments length (${n.length}) does not match the required ones (${o.length}).`
    ), o(...n);
  const l = (o.match(/%[dfijoOs]/g) || []).length;
  return fr(
    l === n.length,
    `Code: ${r}; The provided arguments length (${n.length}) does not match the required ones (${l}).`
  ), n.length === 0 ? o : Kp(o, ...n);
}
function nt(r, o, n) {
  n || (n = Error);
  class l extends n {
    constructor(...v) {
      super(e0(r, o, v));
    }
    toString() {
      return `${this.name} [${r}]: ${this.message}`;
    }
  }
  Object.defineProperties(l.prototype, {
    name: {
      value: n.name,
      writable: !0,
      enumerable: !1,
      configurable: !0
    },
    toString: {
      value() {
        return `${this.name} [${r}]: ${this.message}`;
      },
      writable: !0,
      enumerable: !1,
      configurable: !0
    }
  }), l.prototype.code = r, l.prototype[Zp] = !0, zn[r] = l;
}
function ka(r) {
  const o = Jp + r.name;
  return Object.defineProperty(r, "name", {
    value: o
  }), r;
}
function t0(r, o) {
  if (r && o && r !== o) {
    if (Array.isArray(o.errors))
      return o.errors.push(r), o;
    const n = new Xp([o, r], o.message);
    return n.code = o.code, n;
  }
  return r || o;
}
let r0 = class extends Error {
  constructor(o = "The operation was aborted", n = void 0) {
    if (n !== void 0 && typeof n != "object")
      throw new zn.ERR_INVALID_ARG_TYPE("options", "Object", n);
    super(o, n), this.code = "ABORT_ERR", this.name = "AbortError";
  }
};
nt("ERR_ASSERTION", "%s", Error);
nt(
  "ERR_INVALID_ARG_TYPE",
  (r, o, n) => {
    fr(typeof r == "string", "'name' must be a string"), Array.isArray(o) || (o = [o]);
    let l = "The ";
    r.endsWith(" argument") ? l += `${r} ` : l += `"${r}" ${r.includes(".") ? "property" : "argument"} `, l += "must be ";
    const y = [], v = [], w = [];
    for (const D of o)
      fr(typeof D == "string", "All expected entries have to be of type string"), qp.includes(D) ? y.push(D.toLowerCase()) : Qp.test(D) ? v.push(D) : (fr(D !== "object", 'The value "object" should be written as "Object"'), w.push(D));
    if (v.length > 0) {
      const D = y.indexOf("object");
      D !== -1 && (y.splice(y, D, 1), v.push("Object"));
    }
    if (y.length > 0) {
      switch (y.length) {
        case 1:
          l += `of type ${y[0]}`;
          break;
        case 2:
          l += `one of type ${y[0]} or ${y[1]}`;
          break;
        default: {
          const D = y.pop();
          l += `one of type ${y.join(", ")}, or ${D}`;
        }
      }
      (v.length > 0 || w.length > 0) && (l += " or ");
    }
    if (v.length > 0) {
      switch (v.length) {
        case 1:
          l += `an instance of ${v[0]}`;
          break;
        case 2:
          l += `an instance of ${v[0]} or ${v[1]}`;
          break;
        default: {
          const D = v.pop();
          l += `an instance of ${v.join(", ")}, or ${D}`;
        }
      }
      w.length > 0 && (l += " or ");
    }
    switch (w.length) {
      case 0:
        break;
      case 1:
        w[0].toLowerCase() !== w[0] && (l += "an "), l += `${w[0]}`;
        break;
      case 2:
        l += `one of ${w[0]} or ${w[1]}`;
        break;
      default: {
        const D = w.pop();
        l += `one of ${w.join(", ")}, or ${D}`;
      }
    }
    if (n == null)
      l += `. Received ${n}`;
    else if (typeof n == "function" && n.name)
      l += `. Received function ${n.name}`;
    else if (typeof n == "object") {
      var _;
      if ((_ = n.constructor) !== null && _ !== void 0 && _.name)
        l += `. Received an instance of ${n.constructor.name}`;
      else {
        const D = jn(n, {
          depth: -1
        });
        l += `. Received ${D}`;
      }
    } else {
      let D = jn(n, {
        colors: !1
      });
      D.length > 25 && (D = `${D.slice(0, 25)}...`), l += `. Received type ${typeof n} (${D})`;
    }
    return l;
  },
  TypeError
);
nt(
  "ERR_INVALID_ARG_VALUE",
  (r, o, n = "is invalid") => {
    let l = jn(o);
    return l.length > 128 && (l = l.slice(0, 128) + "..."), `The ${r.includes(".") ? "property" : "argument"} '${r}' ${n}. Received ${l}`;
  },
  TypeError
);
nt(
  "ERR_INVALID_RETURN_VALUE",
  (r, o, n) => {
    var l;
    const y = n != null && (l = n.constructor) !== null && l !== void 0 && l.name ? `instance of ${n.constructor.name}` : `type ${typeof n}`;
    return `Expected ${r} to be returned from the "${o}" function but got ${y}.`;
  },
  TypeError
);
nt(
  "ERR_MISSING_ARGS",
  (...r) => {
    fr(r.length > 0, "At least one arg needs to be specified");
    let o;
    const n = r.length;
    switch (r = (Array.isArray(r) ? r : [r]).map((l) => `"${l}"`).join(" or "), n) {
      case 1:
        o += `The ${r[0]} argument`;
        break;
      case 2:
        o += `The ${r[0]} and ${r[1]} arguments`;
        break;
      default:
        {
          const l = r.pop();
          o += `The ${r.join(", ")}, and ${l} arguments`;
        }
        break;
    }
    return `${o} must be specified`;
  },
  TypeError
);
nt(
  "ERR_OUT_OF_RANGE",
  (r, o, n) => {
    fr(o, 'Missing "range" argument');
    let l;
    return Number.isInteger(n) && Math.abs(n) > 2 ** 32 ? l = Da(String(n)) : typeof n == "bigint" ? (l = String(n), (n > 2n ** 32n || n < -(2n ** 32n)) && (l = Da(l)), l += "n") : l = jn(n), `The value of "${r}" is out of range. It must be ${o}. Received ${l}`;
  },
  RangeError
);
nt("ERR_MULTIPLE_CALLBACK", "Callback called multiple times", Error);
nt("ERR_METHOD_NOT_IMPLEMENTED", "The %s method is not implemented", Error);
nt("ERR_STREAM_ALREADY_FINISHED", "Cannot call %s after a stream was finished", Error);
nt("ERR_STREAM_CANNOT_PIPE", "Cannot pipe, not readable", Error);
nt("ERR_STREAM_DESTROYED", "Cannot call %s after a stream was destroyed", Error);
nt("ERR_STREAM_NULL_VALUES", "May not write null values to stream", TypeError);
nt("ERR_STREAM_PREMATURE_CLOSE", "Premature close", Error);
nt("ERR_STREAM_PUSH_AFTER_EOF", "stream.push() after EOF", Error);
nt("ERR_STREAM_UNSHIFT_AFTER_END_EVENT", "stream.unshift() after end event", Error);
nt("ERR_STREAM_WRITE_AFTER_END", "write after end", Error);
nt("ERR_UNKNOWN_ENCODING", "Unknown encoding: %s", TypeError);
var pt = {
  AbortError: r0,
  aggregateTwoErrors: ka(t0),
  hideStackFrames: ka,
  codes: zn
};
const {
  ArrayIsArray: yo,
  ArrayPrototypeIncludes: Hs,
  ArrayPrototypeJoin: Ks,
  ArrayPrototypeMap: n0,
  NumberIsInteger: go,
  NumberIsNaN: i0,
  NumberMAX_SAFE_INTEGER: o0,
  NumberMIN_SAFE_INTEGER: a0,
  NumberParseInt: s0,
  ObjectPrototypeHasOwnProperty: u0,
  RegExpPrototypeExec: Ys,
  String: l0,
  StringPrototypeToUpperCase: f0,
  StringPrototypeTrim: c0
} = rt, {
  hideStackFrames: vt,
  codes: { ERR_SOCKET_BAD_PORT: d0, ERR_INVALID_ARG_TYPE: ft, ERR_INVALID_ARG_VALUE: Fr, ERR_OUT_OF_RANGE: cr, ERR_UNKNOWN_SIGNAL: La }
} = pt, { normalizeEncoding: h0 } = Gt, { isAsyncFunction: p0, isArrayBufferView: m0 } = Gt.types, Ma = {};
function _0(r) {
  return r === (r | 0);
}
function b0(r) {
  return r === r >>> 0;
}
const y0 = /^[0-7]+$/, g0 = "must be a 32-bit unsigned integer or an octal string";
function w0(r, o, n) {
  if (typeof r > "u" && (r = n), typeof r == "string") {
    if (Ys(y0, r) === null)
      throw new Fr(o, r, g0);
    r = s0(r, 8);
  }
  return Xs(r, o), r;
}
const v0 = vt((r, o, n = a0, l = o0) => {
  if (typeof r != "number")
    throw new ft(o, "number", r);
  if (!go(r))
    throw new cr(o, "an integer", r);
  if (r < n || r > l)
    throw new cr(o, `>= ${n} && <= ${l}`, r);
}), E0 = vt((r, o, n = -2147483648, l = 2147483647) => {
  if (typeof r != "number")
    throw new ft(o, "number", r);
  if (!go(r))
    throw new cr(o, "an integer", r);
  if (r < n || r > l)
    throw new cr(o, `>= ${n} && <= ${l}`, r);
}), Xs = vt((r, o, n = !1) => {
  if (typeof r != "number")
    throw new ft(o, "number", r);
  if (!go(r))
    throw new cr(o, "an integer", r);
  const l = n ? 1 : 0, y = 4294967295;
  if (r < l || r > y)
    throw new cr(o, `>= ${l} && <= ${y}`, r);
});
function wo(r, o) {
  if (typeof r != "string")
    throw new ft(o, "string", r);
}
function x0(r, o, n = void 0, l) {
  if (typeof r != "number")
    throw new ft(o, "number", r);
  if (n != null && r < n || l != null && r > l || (n != null || l != null) && i0(r))
    throw new cr(
      o,
      `${n != null ? `>= ${n}` : ""}${n != null && l != null ? " && " : ""}${l != null ? `<= ${l}` : ""}`,
      r
    );
}
const S0 = vt((r, o, n) => {
  if (!Hs(n, r)) {
    const y = "must be one of: " + Ks(
      n0(n, (v) => typeof v == "string" ? `'${v}'` : l0(v)),
      ", "
    );
    throw new Fr(o, r, y);
  }
});
function Zs(r, o) {
  if (typeof r != "boolean")
    throw new ft(o, "boolean", r);
}
function Pi(r, o, n) {
  return r == null || !u0(r, o) ? n : r[o];
}
const T0 = vt((r, o, n = null) => {
  const l = Pi(n, "allowArray", !1), y = Pi(n, "allowFunction", !1);
  if (!Pi(n, "nullable", !1) && r === null || !l && yo(r) || typeof r != "object" && (!y || typeof r != "function"))
    throw new ft(o, "Object", r);
}), C0 = vt((r, o) => {
  if (r != null && typeof r != "object" && typeof r != "function")
    throw new ft(o, "a dictionary", r);
}), vo = vt((r, o, n = 0) => {
  if (!yo(r))
    throw new ft(o, "Array", r);
  if (r.length < n) {
    const l = `must be longer than ${n}`;
    throw new Fr(o, r, l);
  }
});
function F0(r, o) {
  vo(r, o);
  for (let n = 0; n < r.length; n++)
    wo(r[n], `${o}[${n}]`);
}
function R0(r, o) {
  vo(r, o);
  for (let n = 0; n < r.length; n++)
    Zs(r[n], `${o}[${n}]`);
}
function A0(r, o = "signal") {
  if (wo(r, o), Ma[r] === void 0)
    throw Ma[f0(r)] !== void 0 ? new La(r + " (signals must use all capital letters)") : new La(r);
}
const I0 = vt((r, o = "buffer") => {
  if (!m0(r))
    throw new ft(o, ["Buffer", "TypedArray", "DataView"], r);
});
function P0(r, o) {
  const n = h0(o), l = r.length;
  if (n === "hex" && l % 2 !== 0)
    throw new Fr("encoding", o, `is invalid for data of length ${l}`);
}
function D0(r, o = "Port", n = !0) {
  if (typeof r != "number" && typeof r != "string" || typeof r == "string" && c0(r).length === 0 || +r !== +r >>> 0 || r > 65535 || r === 0 && !n)
    throw new d0(o, r, n);
  return r | 0;
}
const k0 = vt((r, o) => {
  if (r !== void 0 && (r === null || typeof r != "object" || !("aborted" in r)))
    throw new ft(o, "AbortSignal", r);
}), L0 = vt((r, o) => {
  if (typeof r != "function")
    throw new ft(o, "Function", r);
}), M0 = vt((r, o) => {
  if (typeof r != "function" || p0(r))
    throw new ft(o, "Function", r);
}), B0 = vt((r, o) => {
  if (r !== void 0)
    throw new ft(o, "undefined", r);
});
function N0(r, o, n) {
  if (!Hs(n, r))
    throw new ft(o, `('${Ks(n, "|")}')`, r);
}
const O0 = /^(?:<[^>]*>)(?:\s*;\s*[^;"\s]+(?:=(")?[^;"\s]*\1)?)*$/;
function Ba(r, o) {
  if (typeof r > "u" || !Ys(O0, r))
    throw new Fr(
      o,
      r,
      'must be an array or string of format "</styles.css>; rel=preload; as=style"'
    );
}
function j0(r) {
  if (typeof r == "string")
    return Ba(r, "hints"), r;
  if (yo(r)) {
    const o = r.length;
    let n = "";
    if (o === 0)
      return n;
    for (let l = 0; l < o; l++) {
      const y = r[l];
      Ba(y, "hints"), n += y, l !== o - 1 && (n += ", ");
    }
    return n;
  }
  throw new Fr(
    "hints",
    r,
    'must be an array or string of format "</styles.css>; rel=preload; as=style"'
  );
}
var Hn = {
  isInt32: _0,
  isUint32: b0,
  parseFileMode: w0,
  validateArray: vo,
  validateStringArray: F0,
  validateBooleanArray: R0,
  validateBoolean: Zs,
  validateBuffer: I0,
  validateDictionary: C0,
  validateEncoding: P0,
  validateFunction: L0,
  validateInt32: E0,
  validateInteger: v0,
  validateNumber: x0,
  validateObject: T0,
  validateOneOf: S0,
  validatePlainFunction: M0,
  validatePort: D0,
  validateSignalName: A0,
  validateString: wo,
  validateUint32: Xs,
  validateUndefined: B0,
  validateUnion: N0,
  validateAbortSignal: k0,
  validateLinkHeaderValue: j0
}, Eo = { exports: {} }, qs = { exports: {} }, qe = qs.exports = {}, kt, Lt;
function Zi() {
  throw new Error("setTimeout has not been defined");
}
function qi() {
  throw new Error("clearTimeout has not been defined");
}
(function() {
  try {
    typeof setTimeout == "function" ? kt = setTimeout : kt = Zi;
  } catch {
    kt = Zi;
  }
  try {
    typeof clearTimeout == "function" ? Lt = clearTimeout : Lt = qi;
  } catch {
    Lt = qi;
  }
})();
function Qs(r) {
  if (kt === setTimeout)
    return setTimeout(r, 0);
  if ((kt === Zi || !kt) && setTimeout)
    return kt = setTimeout, setTimeout(r, 0);
  try {
    return kt(r, 0);
  } catch {
    try {
      return kt.call(null, r, 0);
    } catch {
      return kt.call(this, r, 0);
    }
  }
}
function U0(r) {
  if (Lt === clearTimeout)
    return clearTimeout(r);
  if ((Lt === qi || !Lt) && clearTimeout)
    return Lt = clearTimeout, clearTimeout(r);
  try {
    return Lt(r);
  } catch {
    try {
      return Lt.call(null, r);
    } catch {
      return Lt.call(this, r);
    }
  }
}
var jt = [], Sr = !1, lr, Mn = -1;
function W0() {
  !Sr || !lr || (Sr = !1, lr.length ? jt = lr.concat(jt) : Mn = -1, jt.length && Js());
}
function Js() {
  if (!Sr) {
    var r = Qs(W0);
    Sr = !0;
    for (var o = jt.length; o; ) {
      for (lr = jt, jt = []; ++Mn < o; )
        lr && lr[Mn].run();
      Mn = -1, o = jt.length;
    }
    lr = null, Sr = !1, U0(r);
  }
}
qe.nextTick = function(r) {
  var o = new Array(arguments.length - 1);
  if (arguments.length > 1)
    for (var n = 1; n < arguments.length; n++)
      o[n - 1] = arguments[n];
  jt.push(new eu(r, o)), jt.length === 1 && !Sr && Qs(Js);
};
function eu(r, o) {
  this.fun = r, this.array = o;
}
eu.prototype.run = function() {
  this.fun.apply(null, this.array);
};
qe.title = "browser";
qe.browser = !0;
qe.env = {};
qe.argv = [];
qe.version = "";
qe.versions = {};
function Vt() {
}
qe.on = Vt;
qe.addListener = Vt;
qe.once = Vt;
qe.off = Vt;
qe.removeListener = Vt;
qe.removeAllListeners = Vt;
qe.emit = Vt;
qe.prependListener = Vt;
qe.prependOnceListener = Vt;
qe.listeners = function(r) {
  return [];
};
qe.binding = function(r) {
  throw new Error("process.binding is not supported");
};
qe.cwd = function() {
  return "/";
};
qe.chdir = function(r) {
  throw new Error("process.chdir is not supported");
};
qe.umask = function() {
  return 0;
};
var dr = qs.exports;
const { Symbol: Kn, SymbolAsyncIterator: Na, SymbolIterator: Oa, SymbolFor: tu } = rt, ru = Kn("kDestroyed"), nu = Kn("kIsErrored"), Qi = Kn("kIsReadable"), iu = Kn("kIsDisturbed"), $0 = tu("nodejs.webstream.isClosedPromise"), G0 = tu("nodejs.webstream.controllerErrorFunction");
function Yn(r, o = !1) {
  var n;
  return !!(r && typeof r.pipe == "function" && typeof r.on == "function" && (!o || typeof r.pause == "function" && typeof r.resume == "function") && (!r._writableState || ((n = r._readableState) === null || n === void 0 ? void 0 : n.readable) !== !1) && // Duplex
  (!r._writableState || r._readableState));
}
function Xn(r) {
  var o;
  return !!(r && typeof r.write == "function" && typeof r.on == "function" && (!r._readableState || ((o = r._writableState) === null || o === void 0 ? void 0 : o.writable) !== !1));
}
function V0(r) {
  return !!(r && typeof r.pipe == "function" && r._readableState && typeof r.on == "function" && typeof r.write == "function");
}
function Ot(r) {
  return r && (r._readableState || r._writableState || typeof r.write == "function" && typeof r.on == "function" || typeof r.pipe == "function" && typeof r.on == "function");
}
function ou(r) {
  return !!(r && !Ot(r) && typeof r.pipeThrough == "function" && typeof r.getReader == "function" && typeof r.cancel == "function");
}
function au(r) {
  return !!(r && !Ot(r) && typeof r.getWriter == "function" && typeof r.abort == "function");
}
function su(r) {
  return !!(r && !Ot(r) && typeof r.readable == "object" && typeof r.writable == "object");
}
function z0(r) {
  return ou(r) || au(r) || su(r);
}
function H0(r, o) {
  return r == null ? !1 : o === !0 ? typeof r[Na] == "function" : o === !1 ? typeof r[Oa] == "function" : typeof r[Na] == "function" || typeof r[Oa] == "function";
}
function Zn(r) {
  if (!Ot(r))
    return null;
  const o = r._writableState, n = r._readableState, l = o || n;
  return !!(r.destroyed || r[ru] || l != null && l.destroyed);
}
function uu(r) {
  if (!Xn(r))
    return null;
  if (r.writableEnded === !0)
    return !0;
  const o = r._writableState;
  return o != null && o.errored ? !1 : typeof o?.ended != "boolean" ? null : o.ended;
}
function K0(r, o) {
  if (!Xn(r))
    return null;
  if (r.writableFinished === !0)
    return !0;
  const n = r._writableState;
  return n != null && n.errored ? !1 : typeof n?.finished != "boolean" ? null : !!(n.finished || o === !1 && n.ended === !0 && n.length === 0);
}
function Y0(r) {
  if (!Yn(r))
    return null;
  if (r.readableEnded === !0)
    return !0;
  const o = r._readableState;
  return !o || o.errored ? !1 : typeof o?.ended != "boolean" ? null : o.ended;
}
function lu(r, o) {
  if (!Yn(r))
    return null;
  const n = r._readableState;
  return n != null && n.errored ? !1 : typeof n?.endEmitted != "boolean" ? null : !!(n.endEmitted || o === !1 && n.ended === !0 && n.length === 0);
}
function fu(r) {
  return r && r[Qi] != null ? r[Qi] : typeof r?.readable != "boolean" ? null : Zn(r) ? !1 : Yn(r) && r.readable && !lu(r);
}
function cu(r) {
  return typeof r?.writable != "boolean" ? null : Zn(r) ? !1 : Xn(r) && r.writable && !uu(r);
}
function X0(r, o) {
  return Ot(r) ? Zn(r) ? !0 : !(o?.readable !== !1 && fu(r) || o?.writable !== !1 && cu(r)) : null;
}
function Z0(r) {
  var o, n;
  return Ot(r) ? r.writableErrored ? r.writableErrored : (o = (n = r._writableState) === null || n === void 0 ? void 0 : n.errored) !== null && o !== void 0 ? o : null : null;
}
function q0(r) {
  var o, n;
  return Ot(r) ? r.readableErrored ? r.readableErrored : (o = (n = r._readableState) === null || n === void 0 ? void 0 : n.errored) !== null && o !== void 0 ? o : null : null;
}
function Q0(r) {
  if (!Ot(r))
    return null;
  if (typeof r.closed == "boolean")
    return r.closed;
  const o = r._writableState, n = r._readableState;
  return typeof o?.closed == "boolean" || typeof n?.closed == "boolean" ? o?.closed || n?.closed : typeof r._closed == "boolean" && du(r) ? r._closed : null;
}
function du(r) {
  return typeof r._closed == "boolean" && typeof r._defaultKeepAlive == "boolean" && typeof r._removedConnection == "boolean" && typeof r._removedContLen == "boolean";
}
function hu(r) {
  return typeof r._sent100 == "boolean" && du(r);
}
function J0(r) {
  var o;
  return typeof r._consuming == "boolean" && typeof r._dumped == "boolean" && ((o = r.req) === null || o === void 0 ? void 0 : o.upgradeOrConnect) === void 0;
}
function em(r) {
  if (!Ot(r))
    return null;
  const o = r._writableState, n = r._readableState, l = o || n;
  return !l && hu(r) || !!(l && l.autoDestroy && l.emitClose && l.closed === !1);
}
function tm(r) {
  var o;
  return !!(r && ((o = r[iu]) !== null && o !== void 0 ? o : r.readableDidRead || r.readableAborted));
}
function rm(r) {
  var o, n, l, y, v, w, _, D, k, B;
  return !!(r && ((o = (n = (l = (y = (v = (w = r[nu]) !== null && w !== void 0 ? w : r.readableErrored) !== null && v !== void 0 ? v : r.writableErrored) !== null && y !== void 0 ? y : (_ = r._readableState) === null || _ === void 0 ? void 0 : _.errorEmitted) !== null && l !== void 0 ? l : (D = r._writableState) === null || D === void 0 ? void 0 : D.errorEmitted) !== null && n !== void 0 ? n : (k = r._readableState) === null || k === void 0 ? void 0 : k.errored) !== null && o !== void 0 ? o : !((B = r._writableState) === null || B === void 0) && B.errored));
}
var zt = {
  kDestroyed: ru,
  isDisturbed: tm,
  kIsDisturbed: iu,
  isErrored: rm,
  kIsErrored: nu,
  isReadable: fu,
  kIsReadable: Qi,
  kIsClosedPromise: $0,
  kControllerErrorFunction: G0,
  isClosed: Q0,
  isDestroyed: Zn,
  isDuplexNodeStream: V0,
  isFinished: X0,
  isIterable: H0,
  isReadableNodeStream: Yn,
  isReadableStream: ou,
  isReadableEnded: Y0,
  isReadableFinished: lu,
  isReadableErrored: q0,
  isNodeStream: Ot,
  isWebStream: z0,
  isWritable: cu,
  isWritableNodeStream: Xn,
  isWritableStream: au,
  isWritableEnded: uu,
  isWritableFinished: K0,
  isWritableErrored: Z0,
  isServerRequest: J0,
  isServerResponse: hu,
  willEmitClose: em,
  isTransformStream: su
};
const qt = dr, { AbortError: pu, codes: nm } = pt, { ERR_INVALID_ARG_TYPE: im, ERR_STREAM_PREMATURE_CLOSE: ja } = nm, { kEmptyObject: Ji, once: eo } = Gt, { validateAbortSignal: om, validateFunction: am, validateObject: sm, validateBoolean: um } = Hn, { Promise: lm, PromisePrototypeThen: fm } = rt, {
  isClosed: cm,
  isReadable: Ua,
  isReadableNodeStream: Di,
  isReadableStream: dm,
  isReadableFinished: Wa,
  isReadableErrored: $a,
  isWritable: Ga,
  isWritableNodeStream: Va,
  isWritableStream: hm,
  isWritableFinished: za,
  isWritableErrored: Ha,
  isNodeStream: pm,
  willEmitClose: mm,
  kIsClosedPromise: _m
} = zt;
function bm(r) {
  return r.setHeader && typeof r.abort == "function";
}
const to = () => {
};
function mu(r, o, n) {
  var l, y;
  if (arguments.length === 2 ? (n = o, o = Ji) : o == null ? o = Ji : sm(o, "options"), am(n, "callback"), om(o.signal, "options.signal"), n = eo(n), dm(r) || hm(r))
    return ym(r, o, n);
  if (!pm(r))
    throw new im("stream", ["ReadableStream", "WritableStream", "Stream"], r);
  const v = (l = o.readable) !== null && l !== void 0 ? l : Di(r), w = (y = o.writable) !== null && y !== void 0 ? y : Va(r), _ = r._writableState, D = r._readableState, k = () => {
    r.writable || se();
  };
  let B = mm(r) && Di(r) === v && Va(r) === w, J = za(r, !1);
  const se = () => {
    J = !0, r.destroyed && (B = !1), !(B && (!r.readable || v)) && (!v || X) && n.call(r);
  };
  let X = Wa(r, !1);
  const z = () => {
    X = !0, r.destroyed && (B = !1), !(B && (!r.writable || w)) && (!w || J) && n.call(r);
  }, pe = (be) => {
    n.call(r, be);
  };
  let _e = cm(r);
  const de = () => {
    _e = !0;
    const be = Ha(r) || $a(r);
    if (be && typeof be != "boolean")
      return n.call(r, be);
    if (v && !X && Di(r, !0) && !Wa(r, !1))
      return n.call(r, new ja());
    if (w && !J && !za(r, !1))
      return n.call(r, new ja());
    n.call(r);
  }, re = () => {
    _e = !0;
    const be = Ha(r) || $a(r);
    if (be && typeof be != "boolean")
      return n.call(r, be);
    n.call(r);
  }, Fe = () => {
    r.req.on("finish", se);
  };
  bm(r) ? (r.on("complete", se), B || r.on("abort", de), r.req ? Fe() : r.on("request", Fe)) : w && !_ && (r.on("end", k), r.on("close", k)), !B && typeof r.aborted == "boolean" && r.on("aborted", de), r.on("end", z), r.on("finish", se), o.error !== !1 && r.on("error", pe), r.on("close", de), _e ? qt.nextTick(de) : _ != null && _.errorEmitted || D != null && D.errorEmitted ? B || qt.nextTick(re) : (!v && (!B || Ua(r)) && (J || Ga(r) === !1) || !w && (!B || Ga(r)) && (X || Ua(r) === !1) || D && r.req && r.aborted) && qt.nextTick(re);
  const Ne = () => {
    n = to, r.removeListener("aborted", de), r.removeListener("complete", se), r.removeListener("abort", de), r.removeListener("request", Fe), r.req && r.req.removeListener("finish", se), r.removeListener("end", k), r.removeListener("close", k), r.removeListener("finish", se), r.removeListener("end", z), r.removeListener("error", pe), r.removeListener("close", de);
  };
  if (o.signal && !_e) {
    const be = () => {
      const Ue = n;
      Ne(), Ue.call(
        r,
        new pu(void 0, {
          cause: o.signal.reason
        })
      );
    };
    if (o.signal.aborted)
      qt.nextTick(be);
    else {
      const Ue = n;
      n = eo((...We) => {
        o.signal.removeEventListener("abort", be), Ue.apply(r, We);
      }), o.signal.addEventListener("abort", be);
    }
  }
  return Ne;
}
function ym(r, o, n) {
  let l = !1, y = to;
  if (o.signal)
    if (y = () => {
      l = !0, n.call(
        r,
        new pu(void 0, {
          cause: o.signal.reason
        })
      );
    }, o.signal.aborted)
      qt.nextTick(y);
    else {
      const w = n;
      n = eo((..._) => {
        o.signal.removeEventListener("abort", y), w.apply(r, _);
      }), o.signal.addEventListener("abort", y);
    }
  const v = (...w) => {
    l || qt.nextTick(() => n.apply(r, w));
  };
  return fm(r[_m].promise, v, v), to;
}
function gm(r, o) {
  var n;
  let l = !1;
  return o === null && (o = Ji), (n = o) !== null && n !== void 0 && n.cleanup && (um(o.cleanup, "cleanup"), l = o.cleanup), new lm((y, v) => {
    const w = mu(r, o, (_) => {
      l && w(), _ ? v(_) : y();
    });
  });
}
Eo.exports = mu;
Eo.exports.finished = gm;
var er = Eo.exports;
const Bt = dr, {
  aggregateTwoErrors: wm,
  codes: { ERR_MULTIPLE_CALLBACK: vm },
  AbortError: Em
} = pt, { Symbol: _u } = rt, { kDestroyed: xm, isDestroyed: Sm, isFinished: Tm, isServerRequest: Cm } = zt, bu = _u("kDestroy"), ro = _u("kConstruct");
function yu(r, o, n) {
  r && (o && !o.errored && (o.errored = r), n && !n.errored && (n.errored = r));
}
function Fm(r, o) {
  const n = this._readableState, l = this._writableState, y = l || n;
  return l != null && l.destroyed || n != null && n.destroyed ? (typeof o == "function" && o(), this) : (yu(r, l, n), l && (l.destroyed = !0), n && (n.destroyed = !0), y.constructed ? Ka(this, r, o) : this.once(bu, function(v) {
    Ka(this, wm(v, r), o);
  }), this);
}
function Ka(r, o, n) {
  let l = !1;
  function y(v) {
    if (l)
      return;
    l = !0;
    const w = r._readableState, _ = r._writableState;
    yu(v, _, w), _ && (_.closed = !0), w && (w.closed = !0), typeof n == "function" && n(v), v ? Bt.nextTick(Rm, r, v) : Bt.nextTick(gu, r);
  }
  try {
    r._destroy(o || null, y);
  } catch (v) {
    y(v);
  }
}
function Rm(r, o) {
  no(r, o), gu(r);
}
function gu(r) {
  const o = r._readableState, n = r._writableState;
  n && (n.closeEmitted = !0), o && (o.closeEmitted = !0), (n != null && n.emitClose || o != null && o.emitClose) && r.emit("close");
}
function no(r, o) {
  const n = r._readableState, l = r._writableState;
  l != null && l.errorEmitted || n != null && n.errorEmitted || (l && (l.errorEmitted = !0), n && (n.errorEmitted = !0), r.emit("error", o));
}
function Am() {
  const r = this._readableState, o = this._writableState;
  r && (r.constructed = !0, r.closed = !1, r.closeEmitted = !1, r.destroyed = !1, r.errored = null, r.errorEmitted = !1, r.reading = !1, r.ended = r.readable === !1, r.endEmitted = r.readable === !1), o && (o.constructed = !0, o.destroyed = !1, o.closed = !1, o.closeEmitted = !1, o.errored = null, o.errorEmitted = !1, o.finalCalled = !1, o.prefinished = !1, o.ended = o.writable === !1, o.ending = o.writable === !1, o.finished = o.writable === !1);
}
function io(r, o, n) {
  const l = r._readableState, y = r._writableState;
  if (y != null && y.destroyed || l != null && l.destroyed)
    return this;
  l != null && l.autoDestroy || y != null && y.autoDestroy ? r.destroy(o) : o && (y && !y.errored && (y.errored = o), l && !l.errored && (l.errored = o), n ? Bt.nextTick(no, r, o) : no(r, o));
}
function Im(r, o) {
  if (typeof r._construct != "function")
    return;
  const n = r._readableState, l = r._writableState;
  n && (n.constructed = !1), l && (l.constructed = !1), r.once(ro, o), !(r.listenerCount(ro) > 1) && Bt.nextTick(Pm, r);
}
function Pm(r) {
  let o = !1;
  function n(l) {
    if (o) {
      io(r, l ?? new vm());
      return;
    }
    o = !0;
    const y = r._readableState, v = r._writableState, w = v || y;
    y && (y.constructed = !0), v && (v.constructed = !0), w.destroyed ? r.emit(bu, l) : l ? io(r, l, !0) : Bt.nextTick(Dm, r);
  }
  try {
    r._construct((l) => {
      Bt.nextTick(n, l);
    });
  } catch (l) {
    Bt.nextTick(n, l);
  }
}
function Dm(r) {
  r.emit(ro);
}
function Ya(r) {
  return r?.setHeader && typeof r.abort == "function";
}
function wu(r) {
  r.emit("close");
}
function km(r, o) {
  r.emit("error", o), Bt.nextTick(wu, r);
}
function Lm(r, o) {
  !r || Sm(r) || (!o && !Tm(r) && (o = new Em()), Cm(r) ? (r.socket = null, r.destroy(o)) : Ya(r) ? r.abort() : Ya(r.req) ? r.req.abort() : typeof r.destroy == "function" ? r.destroy(o) : typeof r.close == "function" ? r.close() : o ? Bt.nextTick(km, r, o) : Bt.nextTick(wu, r), r.destroyed || (r[xm] = !0));
}
var Rr = {
  construct: Im,
  destroyer: Lm,
  destroy: Fm,
  undestroy: Am,
  errorOrDestroy: io
}, xo = { exports: {} }, Tr = typeof Reflect == "object" ? Reflect : null, Xa = Tr && typeof Tr.apply == "function" ? Tr.apply : function(o, n, l) {
  return Function.prototype.apply.call(o, n, l);
}, Bn;
Tr && typeof Tr.ownKeys == "function" ? Bn = Tr.ownKeys : Object.getOwnPropertySymbols ? Bn = function(o) {
  return Object.getOwnPropertyNames(o).concat(Object.getOwnPropertySymbols(o));
} : Bn = function(o) {
  return Object.getOwnPropertyNames(o);
};
function Mm(r) {
  console && console.warn && console.warn(r);
}
var vu = Number.isNaN || function(o) {
  return o !== o;
};
function Ke() {
  Ke.init.call(this);
}
xo.exports = Ke;
xo.exports.once = jm;
Ke.EventEmitter = Ke;
Ke.prototype._events = void 0;
Ke.prototype._eventsCount = 0;
Ke.prototype._maxListeners = void 0;
var Za = 10;
function qn(r) {
  if (typeof r != "function")
    throw new TypeError('The "listener" argument must be of type Function. Received type ' + typeof r);
}
Object.defineProperty(Ke, "defaultMaxListeners", {
  enumerable: !0,
  get: function() {
    return Za;
  },
  set: function(r) {
    if (typeof r != "number" || r < 0 || vu(r))
      throw new RangeError('The value of "defaultMaxListeners" is out of range. It must be a non-negative number. Received ' + r + ".");
    Za = r;
  }
});
Ke.init = function() {
  (this._events === void 0 || this._events === Object.getPrototypeOf(this)._events) && (this._events = /* @__PURE__ */ Object.create(null), this._eventsCount = 0), this._maxListeners = this._maxListeners || void 0;
};
Ke.prototype.setMaxListeners = function(o) {
  if (typeof o != "number" || o < 0 || vu(o))
    throw new RangeError('The value of "n" is out of range. It must be a non-negative number. Received ' + o + ".");
  return this._maxListeners = o, this;
};
function Eu(r) {
  return r._maxListeners === void 0 ? Ke.defaultMaxListeners : r._maxListeners;
}
Ke.prototype.getMaxListeners = function() {
  return Eu(this);
};
Ke.prototype.emit = function(o) {
  for (var n = [], l = 1; l < arguments.length; l++)
    n.push(arguments[l]);
  var y = o === "error", v = this._events;
  if (v !== void 0)
    y = y && v.error === void 0;
  else if (!y)
    return !1;
  if (y) {
    var w;
    if (n.length > 0 && (w = n[0]), w instanceof Error)
      throw w;
    var _ = new Error("Unhandled error." + (w ? " (" + w.message + ")" : ""));
    throw _.context = w, _;
  }
  var D = v[o];
  if (D === void 0)
    return !1;
  if (typeof D == "function")
    Xa(D, this, n);
  else
    for (var k = D.length, B = Fu(D, k), l = 0; l < k; ++l)
      Xa(B[l], this, n);
  return !0;
};
function xu(r, o, n, l) {
  var y, v, w;
  if (qn(n), v = r._events, v === void 0 ? (v = r._events = /* @__PURE__ */ Object.create(null), r._eventsCount = 0) : (v.newListener !== void 0 && (r.emit(
    "newListener",
    o,
    n.listener ? n.listener : n
  ), v = r._events), w = v[o]), w === void 0)
    w = v[o] = n, ++r._eventsCount;
  else if (typeof w == "function" ? w = v[o] = l ? [n, w] : [w, n] : l ? w.unshift(n) : w.push(n), y = Eu(r), y > 0 && w.length > y && !w.warned) {
    w.warned = !0;
    var _ = new Error("Possible EventEmitter memory leak detected. " + w.length + " " + String(o) + " listeners added. Use emitter.setMaxListeners() to increase limit");
    _.name = "MaxListenersExceededWarning", _.emitter = r, _.type = o, _.count = w.length, Mm(_);
  }
  return r;
}
Ke.prototype.addListener = function(o, n) {
  return xu(this, o, n, !1);
};
Ke.prototype.on = Ke.prototype.addListener;
Ke.prototype.prependListener = function(o, n) {
  return xu(this, o, n, !0);
};
function Bm() {
  if (!this.fired)
    return this.target.removeListener(this.type, this.wrapFn), this.fired = !0, arguments.length === 0 ? this.listener.call(this.target) : this.listener.apply(this.target, arguments);
}
function Su(r, o, n) {
  var l = { fired: !1, wrapFn: void 0, target: r, type: o, listener: n }, y = Bm.bind(l);
  return y.listener = n, l.wrapFn = y, y;
}
Ke.prototype.once = function(o, n) {
  return qn(n), this.on(o, Su(this, o, n)), this;
};
Ke.prototype.prependOnceListener = function(o, n) {
  return qn(n), this.prependListener(o, Su(this, o, n)), this;
};
Ke.prototype.removeListener = function(o, n) {
  var l, y, v, w, _;
  if (qn(n), y = this._events, y === void 0)
    return this;
  if (l = y[o], l === void 0)
    return this;
  if (l === n || l.listener === n)
    --this._eventsCount === 0 ? this._events = /* @__PURE__ */ Object.create(null) : (delete y[o], y.removeListener && this.emit("removeListener", o, l.listener || n));
  else if (typeof l != "function") {
    for (v = -1, w = l.length - 1; w >= 0; w--)
      if (l[w] === n || l[w].listener === n) {
        _ = l[w].listener, v = w;
        break;
      }
    if (v < 0)
      return this;
    v === 0 ? l.shift() : Nm(l, v), l.length === 1 && (y[o] = l[0]), y.removeListener !== void 0 && this.emit("removeListener", o, _ || n);
  }
  return this;
};
Ke.prototype.off = Ke.prototype.removeListener;
Ke.prototype.removeAllListeners = function(o) {
  var n, l, y;
  if (l = this._events, l === void 0)
    return this;
  if (l.removeListener === void 0)
    return arguments.length === 0 ? (this._events = /* @__PURE__ */ Object.create(null), this._eventsCount = 0) : l[o] !== void 0 && (--this._eventsCount === 0 ? this._events = /* @__PURE__ */ Object.create(null) : delete l[o]), this;
  if (arguments.length === 0) {
    var v = Object.keys(l), w;
    for (y = 0; y < v.length; ++y)
      w = v[y], w !== "removeListener" && this.removeAllListeners(w);
    return this.removeAllListeners("removeListener"), this._events = /* @__PURE__ */ Object.create(null), this._eventsCount = 0, this;
  }
  if (n = l[o], typeof n == "function")
    this.removeListener(o, n);
  else if (n !== void 0)
    for (y = n.length - 1; y >= 0; y--)
      this.removeListener(o, n[y]);
  return this;
};
function Tu(r, o, n) {
  var l = r._events;
  if (l === void 0)
    return [];
  var y = l[o];
  return y === void 0 ? [] : typeof y == "function" ? n ? [y.listener || y] : [y] : n ? Om(y) : Fu(y, y.length);
}
Ke.prototype.listeners = function(o) {
  return Tu(this, o, !0);
};
Ke.prototype.rawListeners = function(o) {
  return Tu(this, o, !1);
};
Ke.listenerCount = function(r, o) {
  return typeof r.listenerCount == "function" ? r.listenerCount(o) : Cu.call(r, o);
};
Ke.prototype.listenerCount = Cu;
function Cu(r) {
  var o = this._events;
  if (o !== void 0) {
    var n = o[r];
    if (typeof n == "function")
      return 1;
    if (n !== void 0)
      return n.length;
  }
  return 0;
}
Ke.prototype.eventNames = function() {
  return this._eventsCount > 0 ? Bn(this._events) : [];
};
function Fu(r, o) {
  for (var n = new Array(o), l = 0; l < o; ++l)
    n[l] = r[l];
  return n;
}
function Nm(r, o) {
  for (; o + 1 < r.length; o++)
    r[o] = r[o + 1];
  r.pop();
}
function Om(r) {
  for (var o = new Array(r.length), n = 0; n < o.length; ++n)
    o[n] = r[n].listener || r[n];
  return o;
}
function jm(r, o) {
  return new Promise(function(n, l) {
    function y(w) {
      r.removeListener(o, v), l(w);
    }
    function v() {
      typeof r.removeListener == "function" && r.removeListener("error", y), n([].slice.call(arguments));
    }
    Ru(r, o, v, { once: !0 }), o !== "error" && Um(r, y, { once: !0 });
  });
}
function Um(r, o, n) {
  typeof r.on == "function" && Ru(r, "error", o, n);
}
function Ru(r, o, n, l) {
  if (typeof r.on == "function")
    l.once ? r.once(o, n) : r.on(o, n);
  else if (typeof r.addEventListener == "function")
    r.addEventListener(o, function y(v) {
      l.once && r.removeEventListener(o, y), n(v);
    });
  else
    throw new TypeError('The "emitter" argument must be of type EventEmitter. Received type ' + typeof r);
}
var So = xo.exports;
const { ArrayIsArray: Wm, ObjectSetPrototypeOf: Au } = rt, { EventEmitter: Qn } = So;
function Jn(r) {
  Qn.call(this, r);
}
Au(Jn.prototype, Qn.prototype);
Au(Jn, Qn);
Jn.prototype.pipe = function(r, o) {
  const n = this;
  function l(B) {
    r.writable && r.write(B) === !1 && n.pause && n.pause();
  }
  n.on("data", l);
  function y() {
    n.readable && n.resume && n.resume();
  }
  r.on("drain", y), !r._isStdio && (!o || o.end !== !1) && (n.on("end", w), n.on("close", _));
  let v = !1;
  function w() {
    v || (v = !0, r.end());
  }
  function _() {
    v || (v = !0, typeof r.destroy == "function" && r.destroy());
  }
  function D(B) {
    k(), Qn.listenerCount(this, "error") === 0 && this.emit("error", B);
  }
  oo(n, "error", D), oo(r, "error", D);
  function k() {
    n.removeListener("data", l), r.removeListener("drain", y), n.removeListener("end", w), n.removeListener("close", _), n.removeListener("error", D), r.removeListener("error", D), n.removeListener("end", k), n.removeListener("close", k), r.removeListener("close", k);
  }
  return n.on("end", k), n.on("close", k), r.on("close", k), r.emit("pipe", n), r;
};
function oo(r, o, n) {
  if (typeof r.prependListener == "function")
    return r.prependListener(o, n);
  !r._events || !r._events[o] ? r.on(o, n) : Wm(r._events[o]) ? r._events[o].unshift(n) : r._events[o] = [n, r._events[o]];
}
var To = {
  Stream: Jn,
  prependListener: oo
}, Iu = { exports: {} };
(function(r) {
  const { AbortError: o, codes: n } = pt, { isNodeStream: l, isWebStream: y, kControllerErrorFunction: v } = zt, w = er, { ERR_INVALID_ARG_TYPE: _ } = n, D = (k, B) => {
    if (typeof k != "object" || !("aborted" in k))
      throw new _(B, "AbortSignal", k);
  };
  r.exports.addAbortSignal = function(B, J) {
    if (D(B, "signal"), !l(J) && !y(J))
      throw new _("stream", ["ReadableStream", "WritableStream", "Stream"], J);
    return r.exports.addAbortSignalNoValidate(B, J);
  }, r.exports.addAbortSignalNoValidate = function(k, B) {
    if (typeof k != "object" || !("aborted" in k))
      return B;
    const J = l(B) ? () => {
      B.destroy(
        new o(void 0, {
          cause: k.reason
        })
      );
    } : () => {
      B[v](
        new o(void 0, {
          cause: k.reason
        })
      );
    };
    return k.aborted ? J() : (k.addEventListener("abort", J), w(B, () => k.removeEventListener("abort", J))), B;
  };
})(Iu);
var ei = Iu.exports;
const { StringPrototypeSlice: qa, SymbolIterator: $m, TypedArrayPrototypeSet: Pn, Uint8Array: Gm } = rt, { Buffer: ki } = Jt, { inspect: Vm } = Gt;
var zm = class {
  constructor() {
    this.head = null, this.tail = null, this.length = 0;
  }
  push(o) {
    const n = {
      data: o,
      next: null
    };
    this.length > 0 ? this.tail.next = n : this.head = n, this.tail = n, ++this.length;
  }
  unshift(o) {
    const n = {
      data: o,
      next: this.head
    };
    this.length === 0 && (this.tail = n), this.head = n, ++this.length;
  }
  shift() {
    if (this.length === 0)
      return;
    const o = this.head.data;
    return this.length === 1 ? this.head = this.tail = null : this.head = this.head.next, --this.length, o;
  }
  clear() {
    this.head = this.tail = null, this.length = 0;
  }
  join(o) {
    if (this.length === 0)
      return "";
    let n = this.head, l = "" + n.data;
    for (; (n = n.next) !== null; )
      l += o + n.data;
    return l;
  }
  concat(o) {
    if (this.length === 0)
      return ki.alloc(0);
    const n = ki.allocUnsafe(o >>> 0);
    let l = this.head, y = 0;
    for (; l; )
      Pn(n, l.data, y), y += l.data.length, l = l.next;
    return n;
  }
  // Consumes a specified amount of bytes or characters from the buffered data.
  consume(o, n) {
    const l = this.head.data;
    if (o < l.length) {
      const y = l.slice(0, o);
      return this.head.data = l.slice(o), y;
    }
    return o === l.length ? this.shift() : n ? this._getString(o) : this._getBuffer(o);
  }
  first() {
    return this.head.data;
  }
  *[$m]() {
    for (let o = this.head; o; o = o.next)
      yield o.data;
  }
  // Consumes a specified amount of characters from the buffered data.
  _getString(o) {
    let n = "", l = this.head, y = 0;
    do {
      const v = l.data;
      if (o > v.length)
        n += v, o -= v.length;
      else {
        o === v.length ? (n += v, ++y, l.next ? this.head = l.next : this.head = this.tail = null) : (n += qa(v, 0, o), this.head = l, l.data = qa(v, o));
        break;
      }
      ++y;
    } while ((l = l.next) !== null);
    return this.length -= y, n;
  }
  // Consumes a specified amount of bytes from the buffered data.
  _getBuffer(o) {
    const n = ki.allocUnsafe(o), l = o;
    let y = this.head, v = 0;
    do {
      const w = y.data;
      if (o > w.length)
        Pn(n, w, l - o), o -= w.length;
      else {
        o === w.length ? (Pn(n, w, l - o), ++v, y.next ? this.head = y.next : this.head = this.tail = null) : (Pn(n, new Gm(w.buffer, w.byteOffset, o), l - o), this.head = y, y.data = w.slice(o));
        break;
      }
      ++v;
    } while ((y = y.next) !== null);
    return this.length -= v, n;
  }
  // Make sure the linked list only shows the minimal necessary information.
  [Symbol.for("nodejs.util.inspect.custom")](o, n) {
    return Vm(this, {
      ...n,
      // Only inspect one level.
      depth: 0,
      // It should not recurse.
      customInspect: !1
    });
  }
};
const { MathFloor: Hm, NumberIsInteger: Km } = rt, { ERR_INVALID_ARG_VALUE: Ym } = pt.codes;
function Xm(r, o, n) {
  return r.highWaterMark != null ? r.highWaterMark : o ? r[n] : null;
}
function Pu(r) {
  return r ? 16 : 16 * 1024;
}
function Zm(r, o, n, l) {
  const y = Xm(o, l, n);
  if (y != null) {
    if (!Km(y) || y < 0) {
      const v = l ? `options.${n}` : "options.highWaterMark";
      throw new Ym(v, y);
    }
    return Hm(y);
  }
  return Pu(r.objectMode);
}
var Co = {
  getHighWaterMark: Zm,
  getDefaultHighWaterMark: Pu
}, Du = {}, ao = { exports: {} }, ku = {};
/*!
 * The buffer module from node.js, for the browser.
 *
 * @author   Feross Aboukhadijeh <https://feross.org>
 * @license  MIT
 */
(function(r) {
  var o = qr, n = Vn, l = typeof Symbol == "function" && typeof Symbol.for == "function" ? Symbol.for("nodejs.util.inspect.custom") : null;
  r.Buffer = _, r.SlowBuffer = re, r.INSPECT_MAX_BYTES = 50;
  var y = 2147483647;
  r.kMaxLength = y, _.TYPED_ARRAY_SUPPORT = v(), !_.TYPED_ARRAY_SUPPORT && typeof console < "u" && typeof console.error == "function" && console.error(
    "This browser lacks typed array (Uint8Array) support which is required by `buffer` v5.x. Use `buffer` v4.x if you require old browser support."
  );
  function v() {
    try {
      var x = new Uint8Array(1), d = { foo: function() {
        return 42;
      } };
      return Object.setPrototypeOf(d, Uint8Array.prototype), Object.setPrototypeOf(x, d), x.foo() === 42;
    } catch {
      return !1;
    }
  }
  Object.defineProperty(_.prototype, "parent", {
    enumerable: !0,
    get: function() {
      if (_.isBuffer(this))
        return this.buffer;
    }
  }), Object.defineProperty(_.prototype, "offset", {
    enumerable: !0,
    get: function() {
      if (_.isBuffer(this))
        return this.byteOffset;
    }
  });
  function w(x) {
    if (x > y)
      throw new RangeError('The value "' + x + '" is invalid for option "size"');
    var d = new Uint8Array(x);
    return Object.setPrototypeOf(d, _.prototype), d;
  }
  function _(x, d, m) {
    if (typeof x == "number") {
      if (typeof d == "string")
        throw new TypeError(
          'The "string" argument must be of type string. Received type number'
        );
      return J(x);
    }
    return D(x, d, m);
  }
  _.poolSize = 8192;
  function D(x, d, m) {
    if (typeof x == "string")
      return se(x, d);
    if (ArrayBuffer.isView(x))
      return z(x);
    if (x == null)
      throw new TypeError(
        "The first argument must be one of type string, Buffer, ArrayBuffer, Array, or Array-like Object. Received type " + typeof x
      );
    if (L(x, ArrayBuffer) || x && L(x.buffer, ArrayBuffer) || typeof SharedArrayBuffer < "u" && (L(x, SharedArrayBuffer) || x && L(x.buffer, SharedArrayBuffer)))
      return pe(x, d, m);
    if (typeof x == "number")
      throw new TypeError(
        'The "value" argument must not be of type number. Received type number'
      );
    var F = x.valueOf && x.valueOf();
    if (F != null && F !== x)
      return _.from(F, d, m);
    var M = _e(x);
    if (M)
      return M;
    if (typeof Symbol < "u" && Symbol.toPrimitive != null && typeof x[Symbol.toPrimitive] == "function")
      return _.from(
        x[Symbol.toPrimitive]("string"),
        d,
        m
      );
    throw new TypeError(
      "The first argument must be one of type string, Buffer, ArrayBuffer, Array, or Array-like Object. Received type " + typeof x
    );
  }
  _.from = function(x, d, m) {
    return D(x, d, m);
  }, Object.setPrototypeOf(_.prototype, Uint8Array.prototype), Object.setPrototypeOf(_, Uint8Array);
  function k(x) {
    if (typeof x != "number")
      throw new TypeError('"size" argument must be of type number');
    if (x < 0)
      throw new RangeError('The value "' + x + '" is invalid for option "size"');
  }
  function B(x, d, m) {
    return k(x), x <= 0 ? w(x) : d !== void 0 ? typeof m == "string" ? w(x).fill(d, m) : w(x).fill(d) : w(x);
  }
  _.alloc = function(x, d, m) {
    return B(x, d, m);
  };
  function J(x) {
    return k(x), w(x < 0 ? 0 : de(x) | 0);
  }
  _.allocUnsafe = function(x) {
    return J(x);
  }, _.allocUnsafeSlow = function(x) {
    return J(x);
  };
  function se(x, d) {
    if ((typeof d != "string" || d === "") && (d = "utf8"), !_.isEncoding(d))
      throw new TypeError("Unknown encoding: " + d);
    var m = Fe(x, d) | 0, F = w(m), M = F.write(x, d);
    return M !== m && (F = F.slice(0, M)), F;
  }
  function X(x) {
    for (var d = x.length < 0 ? 0 : de(x.length) | 0, m = w(d), F = 0; F < d; F += 1)
      m[F] = x[F] & 255;
    return m;
  }
  function z(x) {
    if (L(x, Uint8Array)) {
      var d = new Uint8Array(x);
      return pe(d.buffer, d.byteOffset, d.byteLength);
    }
    return X(x);
  }
  function pe(x, d, m) {
    if (d < 0 || x.byteLength < d)
      throw new RangeError('"offset" is outside of buffer bounds');
    if (x.byteLength < d + (m || 0))
      throw new RangeError('"length" is outside of buffer bounds');
    var F;
    return d === void 0 && m === void 0 ? F = new Uint8Array(x) : m === void 0 ? F = new Uint8Array(x, d) : F = new Uint8Array(x, d, m), Object.setPrototypeOf(F, _.prototype), F;
  }
  function _e(x) {
    if (_.isBuffer(x)) {
      var d = de(x.length) | 0, m = w(d);
      return m.length === 0 || x.copy(m, 0, 0, d), m;
    }
    if (x.length !== void 0)
      return typeof x.length != "number" || O(x.length) ? w(0) : X(x);
    if (x.type === "Buffer" && Array.isArray(x.data))
      return X(x.data);
  }
  function de(x) {
    if (x >= y)
      throw new RangeError("Attempt to allocate Buffer larger than maximum size: 0x" + y.toString(16) + " bytes");
    return x | 0;
  }
  function re(x) {
    return +x != x && (x = 0), _.alloc(+x);
  }
  _.isBuffer = function(d) {
    return d != null && d._isBuffer === !0 && d !== _.prototype;
  }, _.compare = function(d, m) {
    if (L(d, Uint8Array) && (d = _.from(d, d.offset, d.byteLength)), L(m, Uint8Array) && (m = _.from(m, m.offset, m.byteLength)), !_.isBuffer(d) || !_.isBuffer(m))
      throw new TypeError(
        'The "buf1", "buf2" arguments must be one of type Buffer or Uint8Array'
      );
    if (d === m)
      return 0;
    for (var F = d.length, M = m.length, Z = 0, Y = Math.min(F, M); Z < Y; ++Z)
      if (d[Z] !== m[Z]) {
        F = d[Z], M = m[Z];
        break;
      }
    return F < M ? -1 : M < F ? 1 : 0;
  }, _.isEncoding = function(d) {
    switch (String(d).toLowerCase()) {
      case "hex":
      case "utf8":
      case "utf-8":
      case "ascii":
      case "latin1":
      case "binary":
      case "base64":
      case "ucs2":
      case "ucs-2":
      case "utf16le":
      case "utf-16le":
        return !0;
      default:
        return !1;
    }
  }, _.concat = function(d, m) {
    if (!Array.isArray(d))
      throw new TypeError('"list" argument must be an Array of Buffers');
    if (d.length === 0)
      return _.alloc(0);
    var F;
    if (m === void 0)
      for (m = 0, F = 0; F < d.length; ++F)
        m += d[F].length;
    var M = _.allocUnsafe(m), Z = 0;
    for (F = 0; F < d.length; ++F) {
      var Y = d[F];
      if (L(Y, Uint8Array))
        Z + Y.length > M.length ? _.from(Y).copy(M, Z) : Uint8Array.prototype.set.call(
          M,
          Y,
          Z
        );
      else if (_.isBuffer(Y))
        Y.copy(M, Z);
      else
        throw new TypeError('"list" argument must be an Array of Buffers');
      Z += Y.length;
    }
    return M;
  };
  function Fe(x, d) {
    if (_.isBuffer(x))
      return x.length;
    if (ArrayBuffer.isView(x) || L(x, ArrayBuffer))
      return x.byteLength;
    if (typeof x != "string")
      throw new TypeError(
        'The "string" argument must be one of type string, Buffer, or ArrayBuffer. Received type ' + typeof x
      );
    var m = x.length, F = arguments.length > 2 && arguments[2] === !0;
    if (!F && m === 0)
      return 0;
    for (var M = !1; ; )
      switch (d) {
        case "ascii":
        case "latin1":
        case "binary":
          return m;
        case "utf8":
        case "utf-8":
          return Je(x).length;
        case "ucs2":
        case "ucs-2":
        case "utf16le":
        case "utf-16le":
          return m * 2;
        case "hex":
          return m >>> 1;
        case "base64":
          return bt(x).length;
        default:
          if (M)
            return F ? -1 : Je(x).length;
          d = ("" + d).toLowerCase(), M = !0;
      }
  }
  _.byteLength = Fe;
  function Ne(x, d, m) {
    var F = !1;
    if ((d === void 0 || d < 0) && (d = 0), d > this.length || ((m === void 0 || m > this.length) && (m = this.length), m <= 0) || (m >>>= 0, d >>>= 0, m <= d))
      return "";
    for (x || (x = "utf8"); ; )
      switch (x) {
        case "hex":
          return ne(this, d, m);
        case "utf8":
        case "utf-8":
          return me(this, d, m);
        case "ascii":
          return Te(this, d, m);
        case "latin1":
        case "binary":
          return N(this, d, m);
        case "base64":
          return De(this, d, m);
        case "ucs2":
        case "ucs-2":
        case "utf16le":
        case "utf-16le":
          return te(this, d, m);
        default:
          if (F)
            throw new TypeError("Unknown encoding: " + x);
          x = (x + "").toLowerCase(), F = !0;
      }
  }
  _.prototype._isBuffer = !0;
  function be(x, d, m) {
    var F = x[d];
    x[d] = x[m], x[m] = F;
  }
  _.prototype.swap16 = function() {
    var d = this.length;
    if (d % 2 !== 0)
      throw new RangeError("Buffer size must be a multiple of 16-bits");
    for (var m = 0; m < d; m += 2)
      be(this, m, m + 1);
    return this;
  }, _.prototype.swap32 = function() {
    var d = this.length;
    if (d % 4 !== 0)
      throw new RangeError("Buffer size must be a multiple of 32-bits");
    for (var m = 0; m < d; m += 4)
      be(this, m, m + 3), be(this, m + 1, m + 2);
    return this;
  }, _.prototype.swap64 = function() {
    var d = this.length;
    if (d % 8 !== 0)
      throw new RangeError("Buffer size must be a multiple of 64-bits");
    for (var m = 0; m < d; m += 8)
      be(this, m, m + 7), be(this, m + 1, m + 6), be(this, m + 2, m + 5), be(this, m + 3, m + 4);
    return this;
  }, _.prototype.toString = function() {
    var d = this.length;
    return d === 0 ? "" : arguments.length === 0 ? me(this, 0, d) : Ne.apply(this, arguments);
  }, _.prototype.toLocaleString = _.prototype.toString, _.prototype.equals = function(d) {
    if (!_.isBuffer(d))
      throw new TypeError("Argument must be a Buffer");
    return this === d ? !0 : _.compare(this, d) === 0;
  }, _.prototype.inspect = function() {
    var d = "", m = r.INSPECT_MAX_BYTES;
    return d = this.toString("hex", 0, m).replace(/(.{2})/g, "$1 ").trim(), this.length > m && (d += " ... "), "<Buffer " + d + ">";
  }, l && (_.prototype[l] = _.prototype.inspect), _.prototype.compare = function(d, m, F, M, Z) {
    if (L(d, Uint8Array) && (d = _.from(d, d.offset, d.byteLength)), !_.isBuffer(d))
      throw new TypeError(
        'The "target" argument must be one of type Buffer or Uint8Array. Received type ' + typeof d
      );
    if (m === void 0 && (m = 0), F === void 0 && (F = d ? d.length : 0), M === void 0 && (M = 0), Z === void 0 && (Z = this.length), m < 0 || F > d.length || M < 0 || Z > this.length)
      throw new RangeError("out of range index");
    if (M >= Z && m >= F)
      return 0;
    if (M >= Z)
      return -1;
    if (m >= F)
      return 1;
    if (m >>>= 0, F >>>= 0, M >>>= 0, Z >>>= 0, this === d)
      return 0;
    for (var Y = Z - M, xe = F - m, Be = Math.min(Y, xe), S = this.slice(M, Z), T = d.slice(m, F), b = 0; b < Be; ++b)
      if (S[b] !== T[b]) {
        Y = S[b], xe = T[b];
        break;
      }
    return Y < xe ? -1 : xe < Y ? 1 : 0;
  };
  function Ue(x, d, m, F, M) {
    if (x.length === 0)
      return -1;
    if (typeof m == "string" ? (F = m, m = 0) : m > 2147483647 ? m = 2147483647 : m < -2147483648 && (m = -2147483648), m = +m, O(m) && (m = M ? 0 : x.length - 1), m < 0 && (m = x.length + m), m >= x.length) {
      if (M)
        return -1;
      m = x.length - 1;
    } else if (m < 0)
      if (M)
        m = 0;
      else
        return -1;
    if (typeof d == "string" && (d = _.from(d, F)), _.isBuffer(d))
      return d.length === 0 ? -1 : We(x, d, m, F, M);
    if (typeof d == "number")
      return d = d & 255, typeof Uint8Array.prototype.indexOf == "function" ? M ? Uint8Array.prototype.indexOf.call(x, d, m) : Uint8Array.prototype.lastIndexOf.call(x, d, m) : We(x, [d], m, F, M);
    throw new TypeError("val must be string, number or Buffer");
  }
  function We(x, d, m, F, M) {
    var Z = 1, Y = x.length, xe = d.length;
    if (F !== void 0 && (F = String(F).toLowerCase(), F === "ucs2" || F === "ucs-2" || F === "utf16le" || F === "utf-16le")) {
      if (x.length < 2 || d.length < 2)
        return -1;
      Z = 2, Y /= 2, xe /= 2, m /= 2;
    }
    function Be(f, C) {
      return Z === 1 ? f[C] : f.readUInt16BE(C * Z);
    }
    var S;
    if (M) {
      var T = -1;
      for (S = m; S < Y; S++)
        if (Be(x, S) === Be(d, T === -1 ? 0 : S - T)) {
          if (T === -1 && (T = S), S - T + 1 === xe)
            return T * Z;
        } else
          T !== -1 && (S -= S - T), T = -1;
    } else
      for (m + xe > Y && (m = Y - xe), S = m; S >= 0; S--) {
        for (var b = !0, u = 0; u < xe; u++)
          if (Be(x, S + u) !== Be(d, u)) {
            b = !1;
            break;
          }
        if (b)
          return S;
      }
    return -1;
  }
  _.prototype.includes = function(d, m, F) {
    return this.indexOf(d, m, F) !== -1;
  }, _.prototype.indexOf = function(d, m, F) {
    return Ue(this, d, m, F, !0);
  }, _.prototype.lastIndexOf = function(d, m, F) {
    return Ue(this, d, m, F, !1);
  };
  function Ve(x, d, m, F) {
    m = Number(m) || 0;
    var M = x.length - m;
    F ? (F = Number(F), F > M && (F = M)) : F = M;
    var Z = d.length;
    F > Z / 2 && (F = Z / 2);
    for (var Y = 0; Y < F; ++Y) {
      var xe = parseInt(d.substr(Y * 2, 2), 16);
      if (O(xe))
        return Y;
      x[m + Y] = xe;
    }
    return Y;
  }
  function Se(x, d, m, F) {
    return ut(Je(d, x.length - m), x, m, F);
  }
  function oe(x, d, m, F) {
    return ut(at(d), x, m, F);
  }
  function ye(x, d, m, F) {
    return ut(bt(d), x, m, F);
  }
  function $e(x, d, m, F) {
    return ut(Ft(d, x.length - m), x, m, F);
  }
  _.prototype.write = function(d, m, F, M) {
    if (m === void 0)
      M = "utf8", F = this.length, m = 0;
    else if (F === void 0 && typeof m == "string")
      M = m, F = this.length, m = 0;
    else if (isFinite(m))
      m = m >>> 0, isFinite(F) ? (F = F >>> 0, M === void 0 && (M = "utf8")) : (M = F, F = void 0);
    else
      throw new Error(
        "Buffer.write(string, encoding, offset[, length]) is no longer supported"
      );
    var Z = this.length - m;
    if ((F === void 0 || F > Z) && (F = Z), d.length > 0 && (F < 0 || m < 0) || m > this.length)
      throw new RangeError("Attempt to write outside buffer bounds");
    M || (M = "utf8");
    for (var Y = !1; ; )
      switch (M) {
        case "hex":
          return Ve(this, d, m, F);
        case "utf8":
        case "utf-8":
          return Se(this, d, m, F);
        case "ascii":
        case "latin1":
        case "binary":
          return oe(this, d, m, F);
        case "base64":
          return ye(this, d, m, F);
        case "ucs2":
        case "ucs-2":
        case "utf16le":
        case "utf-16le":
          return $e(this, d, m, F);
        default:
          if (Y)
            throw new TypeError("Unknown encoding: " + M);
          M = ("" + M).toLowerCase(), Y = !0;
      }
  }, _.prototype.toJSON = function() {
    return {
      type: "Buffer",
      data: Array.prototype.slice.call(this._arr || this, 0)
    };
  };
  function De(x, d, m) {
    return d === 0 && m === x.length ? o.fromByteArray(x) : o.fromByteArray(x.slice(d, m));
  }
  function me(x, d, m) {
    m = Math.min(x.length, m);
    for (var F = [], M = d; M < m; ) {
      var Z = x[M], Y = null, xe = Z > 239 ? 4 : Z > 223 ? 3 : Z > 191 ? 2 : 1;
      if (M + xe <= m) {
        var Be, S, T, b;
        switch (xe) {
          case 1:
            Z < 128 && (Y = Z);
            break;
          case 2:
            Be = x[M + 1], (Be & 192) === 128 && (b = (Z & 31) << 6 | Be & 63, b > 127 && (Y = b));
            break;
          case 3:
            Be = x[M + 1], S = x[M + 2], (Be & 192) === 128 && (S & 192) === 128 && (b = (Z & 15) << 12 | (Be & 63) << 6 | S & 63, b > 2047 && (b < 55296 || b > 57343) && (Y = b));
            break;
          case 4:
            Be = x[M + 1], S = x[M + 2], T = x[M + 3], (Be & 192) === 128 && (S & 192) === 128 && (T & 192) === 128 && (b = (Z & 15) << 18 | (Be & 63) << 12 | (S & 63) << 6 | T & 63, b > 65535 && b < 1114112 && (Y = b));
        }
      }
      Y === null ? (Y = 65533, xe = 1) : Y > 65535 && (Y -= 65536, F.push(Y >>> 10 & 1023 | 55296), Y = 56320 | Y & 1023), F.push(Y), M += xe;
    }
    return Pe(F);
  }
  var ue = 4096;
  function Pe(x) {
    var d = x.length;
    if (d <= ue)
      return String.fromCharCode.apply(String, x);
    for (var m = "", F = 0; F < d; )
      m += String.fromCharCode.apply(
        String,
        x.slice(F, F += ue)
      );
    return m;
  }
  function Te(x, d, m) {
    var F = "";
    m = Math.min(x.length, m);
    for (var M = d; M < m; ++M)
      F += String.fromCharCode(x[M] & 127);
    return F;
  }
  function N(x, d, m) {
    var F = "";
    m = Math.min(x.length, m);
    for (var M = d; M < m; ++M)
      F += String.fromCharCode(x[M]);
    return F;
  }
  function ne(x, d, m) {
    var F = x.length;
    (!d || d < 0) && (d = 0), (!m || m < 0 || m > F) && (m = F);
    for (var M = "", Z = d; Z < m; ++Z)
      M += q[x[Z]];
    return M;
  }
  function te(x, d, m) {
    for (var F = x.slice(d, m), M = "", Z = 0; Z < F.length - 1; Z += 2)
      M += String.fromCharCode(F[Z] + F[Z + 1] * 256);
    return M;
  }
  _.prototype.slice = function(d, m) {
    var F = this.length;
    d = ~~d, m = m === void 0 ? F : ~~m, d < 0 ? (d += F, d < 0 && (d = 0)) : d > F && (d = F), m < 0 ? (m += F, m < 0 && (m = 0)) : m > F && (m = F), m < d && (m = d);
    var M = this.subarray(d, m);
    return Object.setPrototypeOf(M, _.prototype), M;
  };
  function ge(x, d, m) {
    if (x % 1 !== 0 || x < 0)
      throw new RangeError("offset is not uint");
    if (x + d > m)
      throw new RangeError("Trying to access beyond buffer length");
  }
  _.prototype.readUintLE = _.prototype.readUIntLE = function(d, m, F) {
    d = d >>> 0, m = m >>> 0, F || ge(d, m, this.length);
    for (var M = this[d], Z = 1, Y = 0; ++Y < m && (Z *= 256); )
      M += this[d + Y] * Z;
    return M;
  }, _.prototype.readUintBE = _.prototype.readUIntBE = function(d, m, F) {
    d = d >>> 0, m = m >>> 0, F || ge(d, m, this.length);
    for (var M = this[d + --m], Z = 1; m > 0 && (Z *= 256); )
      M += this[d + --m] * Z;
    return M;
  }, _.prototype.readUint8 = _.prototype.readUInt8 = function(d, m) {
    return d = d >>> 0, m || ge(d, 1, this.length), this[d];
  }, _.prototype.readUint16LE = _.prototype.readUInt16LE = function(d, m) {
    return d = d >>> 0, m || ge(d, 2, this.length), this[d] | this[d + 1] << 8;
  }, _.prototype.readUint16BE = _.prototype.readUInt16BE = function(d, m) {
    return d = d >>> 0, m || ge(d, 2, this.length), this[d] << 8 | this[d + 1];
  }, _.prototype.readUint32LE = _.prototype.readUInt32LE = function(d, m) {
    return d = d >>> 0, m || ge(d, 4, this.length), (this[d] | this[d + 1] << 8 | this[d + 2] << 16) + this[d + 3] * 16777216;
  }, _.prototype.readUint32BE = _.prototype.readUInt32BE = function(d, m) {
    return d = d >>> 0, m || ge(d, 4, this.length), this[d] * 16777216 + (this[d + 1] << 16 | this[d + 2] << 8 | this[d + 3]);
  }, _.prototype.readIntLE = function(d, m, F) {
    d = d >>> 0, m = m >>> 0, F || ge(d, m, this.length);
    for (var M = this[d], Z = 1, Y = 0; ++Y < m && (Z *= 256); )
      M += this[d + Y] * Z;
    return Z *= 128, M >= Z && (M -= Math.pow(2, 8 * m)), M;
  }, _.prototype.readIntBE = function(d, m, F) {
    d = d >>> 0, m = m >>> 0, F || ge(d, m, this.length);
    for (var M = m, Z = 1, Y = this[d + --M]; M > 0 && (Z *= 256); )
      Y += this[d + --M] * Z;
    return Z *= 128, Y >= Z && (Y -= Math.pow(2, 8 * m)), Y;
  }, _.prototype.readInt8 = function(d, m) {
    return d = d >>> 0, m || ge(d, 1, this.length), this[d] & 128 ? (255 - this[d] + 1) * -1 : this[d];
  }, _.prototype.readInt16LE = function(d, m) {
    d = d >>> 0, m || ge(d, 2, this.length);
    var F = this[d] | this[d + 1] << 8;
    return F & 32768 ? F | 4294901760 : F;
  }, _.prototype.readInt16BE = function(d, m) {
    d = d >>> 0, m || ge(d, 2, this.length);
    var F = this[d + 1] | this[d] << 8;
    return F & 32768 ? F | 4294901760 : F;
  }, _.prototype.readInt32LE = function(d, m) {
    return d = d >>> 0, m || ge(d, 4, this.length), this[d] | this[d + 1] << 8 | this[d + 2] << 16 | this[d + 3] << 24;
  }, _.prototype.readInt32BE = function(d, m) {
    return d = d >>> 0, m || ge(d, 4, this.length), this[d] << 24 | this[d + 1] << 16 | this[d + 2] << 8 | this[d + 3];
  }, _.prototype.readFloatLE = function(d, m) {
    return d = d >>> 0, m || ge(d, 4, this.length), n.read(this, d, !0, 23, 4);
  }, _.prototype.readFloatBE = function(d, m) {
    return d = d >>> 0, m || ge(d, 4, this.length), n.read(this, d, !1, 23, 4);
  }, _.prototype.readDoubleLE = function(d, m) {
    return d = d >>> 0, m || ge(d, 8, this.length), n.read(this, d, !0, 52, 8);
  }, _.prototype.readDoubleBE = function(d, m) {
    return d = d >>> 0, m || ge(d, 8, this.length), n.read(this, d, !1, 52, 8);
  };
  function Ae(x, d, m, F, M, Z) {
    if (!_.isBuffer(x))
      throw new TypeError('"buffer" argument must be a Buffer instance');
    if (d > M || d < Z)
      throw new RangeError('"value" argument is out of bounds');
    if (m + F > x.length)
      throw new RangeError("Index out of range");
  }
  _.prototype.writeUintLE = _.prototype.writeUIntLE = function(d, m, F, M) {
    if (d = +d, m = m >>> 0, F = F >>> 0, !M) {
      var Z = Math.pow(2, 8 * F) - 1;
      Ae(this, d, m, F, Z, 0);
    }
    var Y = 1, xe = 0;
    for (this[m] = d & 255; ++xe < F && (Y *= 256); )
      this[m + xe] = d / Y & 255;
    return m + F;
  }, _.prototype.writeUintBE = _.prototype.writeUIntBE = function(d, m, F, M) {
    if (d = +d, m = m >>> 0, F = F >>> 0, !M) {
      var Z = Math.pow(2, 8 * F) - 1;
      Ae(this, d, m, F, Z, 0);
    }
    var Y = F - 1, xe = 1;
    for (this[m + Y] = d & 255; --Y >= 0 && (xe *= 256); )
      this[m + Y] = d / xe & 255;
    return m + F;
  }, _.prototype.writeUint8 = _.prototype.writeUInt8 = function(d, m, F) {
    return d = +d, m = m >>> 0, F || Ae(this, d, m, 1, 255, 0), this[m] = d & 255, m + 1;
  }, _.prototype.writeUint16LE = _.prototype.writeUInt16LE = function(d, m, F) {
    return d = +d, m = m >>> 0, F || Ae(this, d, m, 2, 65535, 0), this[m] = d & 255, this[m + 1] = d >>> 8, m + 2;
  }, _.prototype.writeUint16BE = _.prototype.writeUInt16BE = function(d, m, F) {
    return d = +d, m = m >>> 0, F || Ae(this, d, m, 2, 65535, 0), this[m] = d >>> 8, this[m + 1] = d & 255, m + 2;
  }, _.prototype.writeUint32LE = _.prototype.writeUInt32LE = function(d, m, F) {
    return d = +d, m = m >>> 0, F || Ae(this, d, m, 4, 4294967295, 0), this[m + 3] = d >>> 24, this[m + 2] = d >>> 16, this[m + 1] = d >>> 8, this[m] = d & 255, m + 4;
  }, _.prototype.writeUint32BE = _.prototype.writeUInt32BE = function(d, m, F) {
    return d = +d, m = m >>> 0, F || Ae(this, d, m, 4, 4294967295, 0), this[m] = d >>> 24, this[m + 1] = d >>> 16, this[m + 2] = d >>> 8, this[m + 3] = d & 255, m + 4;
  }, _.prototype.writeIntLE = function(d, m, F, M) {
    if (d = +d, m = m >>> 0, !M) {
      var Z = Math.pow(2, 8 * F - 1);
      Ae(this, d, m, F, Z - 1, -Z);
    }
    var Y = 0, xe = 1, Be = 0;
    for (this[m] = d & 255; ++Y < F && (xe *= 256); )
      d < 0 && Be === 0 && this[m + Y - 1] !== 0 && (Be = 1), this[m + Y] = (d / xe >> 0) - Be & 255;
    return m + F;
  }, _.prototype.writeIntBE = function(d, m, F, M) {
    if (d = +d, m = m >>> 0, !M) {
      var Z = Math.pow(2, 8 * F - 1);
      Ae(this, d, m, F, Z - 1, -Z);
    }
    var Y = F - 1, xe = 1, Be = 0;
    for (this[m + Y] = d & 255; --Y >= 0 && (xe *= 256); )
      d < 0 && Be === 0 && this[m + Y + 1] !== 0 && (Be = 1), this[m + Y] = (d / xe >> 0) - Be & 255;
    return m + F;
  }, _.prototype.writeInt8 = function(d, m, F) {
    return d = +d, m = m >>> 0, F || Ae(this, d, m, 1, 127, -128), d < 0 && (d = 255 + d + 1), this[m] = d & 255, m + 1;
  }, _.prototype.writeInt16LE = function(d, m, F) {
    return d = +d, m = m >>> 0, F || Ae(this, d, m, 2, 32767, -32768), this[m] = d & 255, this[m + 1] = d >>> 8, m + 2;
  }, _.prototype.writeInt16BE = function(d, m, F) {
    return d = +d, m = m >>> 0, F || Ae(this, d, m, 2, 32767, -32768), this[m] = d >>> 8, this[m + 1] = d & 255, m + 2;
  }, _.prototype.writeInt32LE = function(d, m, F) {
    return d = +d, m = m >>> 0, F || Ae(this, d, m, 4, 2147483647, -2147483648), this[m] = d & 255, this[m + 1] = d >>> 8, this[m + 2] = d >>> 16, this[m + 3] = d >>> 24, m + 4;
  }, _.prototype.writeInt32BE = function(d, m, F) {
    return d = +d, m = m >>> 0, F || Ae(this, d, m, 4, 2147483647, -2147483648), d < 0 && (d = 4294967295 + d + 1), this[m] = d >>> 24, this[m + 1] = d >>> 16, this[m + 2] = d >>> 8, this[m + 3] = d & 255, m + 4;
  };
  function it(x, d, m, F, M, Z) {
    if (m + F > x.length)
      throw new RangeError("Index out of range");
    if (m < 0)
      throw new RangeError("Index out of range");
  }
  function ct(x, d, m, F, M) {
    return d = +d, m = m >>> 0, M || it(x, d, m, 4), n.write(x, d, m, F, 23, 4), m + 4;
  }
  _.prototype.writeFloatLE = function(d, m, F) {
    return ct(this, d, m, !0, F);
  }, _.prototype.writeFloatBE = function(d, m, F) {
    return ct(this, d, m, !1, F);
  };
  function ot(x, d, m, F, M) {
    return d = +d, m = m >>> 0, M || it(x, d, m, 8), n.write(x, d, m, F, 52, 8), m + 8;
  }
  _.prototype.writeDoubleLE = function(d, m, F) {
    return ot(this, d, m, !0, F);
  }, _.prototype.writeDoubleBE = function(d, m, F) {
    return ot(this, d, m, !1, F);
  }, _.prototype.copy = function(d, m, F, M) {
    if (!_.isBuffer(d))
      throw new TypeError("argument should be a Buffer");
    if (F || (F = 0), !M && M !== 0 && (M = this.length), m >= d.length && (m = d.length), m || (m = 0), M > 0 && M < F && (M = F), M === F || d.length === 0 || this.length === 0)
      return 0;
    if (m < 0)
      throw new RangeError("targetStart out of bounds");
    if (F < 0 || F >= this.length)
      throw new RangeError("Index out of range");
    if (M < 0)
      throw new RangeError("sourceEnd out of bounds");
    M > this.length && (M = this.length), d.length - m < M - F && (M = d.length - m + F);
    var Z = M - F;
    return this === d && typeof Uint8Array.prototype.copyWithin == "function" ? this.copyWithin(m, F, M) : Uint8Array.prototype.set.call(
      d,
      this.subarray(F, M),
      m
    ), Z;
  }, _.prototype.fill = function(d, m, F, M) {
    if (typeof d == "string") {
      if (typeof m == "string" ? (M = m, m = 0, F = this.length) : typeof F == "string" && (M = F, F = this.length), M !== void 0 && typeof M != "string")
        throw new TypeError("encoding must be a string");
      if (typeof M == "string" && !_.isEncoding(M))
        throw new TypeError("Unknown encoding: " + M);
      if (d.length === 1) {
        var Z = d.charCodeAt(0);
        (M === "utf8" && Z < 128 || M === "latin1") && (d = Z);
      }
    } else
      typeof d == "number" ? d = d & 255 : typeof d == "boolean" && (d = Number(d));
    if (m < 0 || this.length < m || this.length < F)
      throw new RangeError("Out of range index");
    if (F <= m)
      return this;
    m = m >>> 0, F = F === void 0 ? this.length : F >>> 0, d || (d = 0);
    var Y;
    if (typeof d == "number")
      for (Y = m; Y < F; ++Y)
        this[Y] = d;
    else {
      var xe = _.isBuffer(d) ? d : _.from(d, M), Be = xe.length;
      if (Be === 0)
        throw new TypeError('The value "' + d + '" is invalid for argument "value"');
      for (Y = 0; Y < F - m; ++Y)
        this[Y + m] = xe[Y % Be];
    }
    return this;
  };
  var Et = /[^+/0-9A-Za-z-_]/g;
  function mt(x) {
    if (x = x.split("=")[0], x = x.trim().replace(Et, ""), x.length < 2)
      return "";
    for (; x.length % 4 !== 0; )
      x = x + "=";
    return x;
  }
  function Je(x, d) {
    d = d || 1 / 0;
    for (var m, F = x.length, M = null, Z = [], Y = 0; Y < F; ++Y) {
      if (m = x.charCodeAt(Y), m > 55295 && m < 57344) {
        if (!M) {
          if (m > 56319) {
            (d -= 3) > -1 && Z.push(239, 191, 189);
            continue;
          } else if (Y + 1 === F) {
            (d -= 3) > -1 && Z.push(239, 191, 189);
            continue;
          }
          M = m;
          continue;
        }
        if (m < 56320) {
          (d -= 3) > -1 && Z.push(239, 191, 189), M = m;
          continue;
        }
        m = (M - 55296 << 10 | m - 56320) + 65536;
      } else
        M && (d -= 3) > -1 && Z.push(239, 191, 189);
      if (M = null, m < 128) {
        if ((d -= 1) < 0)
          break;
        Z.push(m);
      } else if (m < 2048) {
        if ((d -= 2) < 0)
          break;
        Z.push(
          m >> 6 | 192,
          m & 63 | 128
        );
      } else if (m < 65536) {
        if ((d -= 3) < 0)
          break;
        Z.push(
          m >> 12 | 224,
          m >> 6 & 63 | 128,
          m & 63 | 128
        );
      } else if (m < 1114112) {
        if ((d -= 4) < 0)
          break;
        Z.push(
          m >> 18 | 240,
          m >> 12 & 63 | 128,
          m >> 6 & 63 | 128,
          m & 63 | 128
        );
      } else
        throw new Error("Invalid code point");
    }
    return Z;
  }
  function at(x) {
    for (var d = [], m = 0; m < x.length; ++m)
      d.push(x.charCodeAt(m) & 255);
    return d;
  }
  function Ft(x, d) {
    for (var m, F, M, Z = [], Y = 0; Y < x.length && !((d -= 2) < 0); ++Y)
      m = x.charCodeAt(Y), F = m >> 8, M = m % 256, Z.push(M), Z.push(F);
    return Z;
  }
  function bt(x) {
    return o.toByteArray(mt(x));
  }
  function ut(x, d, m, F) {
    for (var M = 0; M < F && !(M + m >= d.length || M >= x.length); ++M)
      d[M + m] = x[M];
    return M;
  }
  function L(x, d) {
    return x instanceof d || x != null && x.constructor != null && x.constructor.name != null && x.constructor.name === d.name;
  }
  function O(x) {
    return x !== x;
  }
  var q = function() {
    for (var x = "0123456789abcdef", d = new Array(256), m = 0; m < 16; ++m)
      for (var F = m * 16, M = 0; M < 16; ++M)
        d[F + M] = x[m] + x[M];
    return d;
  }();
})(ku);
/*! safe-buffer. MIT License. Feross Aboukhadijeh <https://feross.org/opensource> */
(function(r, o) {
  var n = ku, l = n.Buffer;
  function y(w, _) {
    for (var D in w)
      _[D] = w[D];
  }
  l.from && l.alloc && l.allocUnsafe && l.allocUnsafeSlow ? r.exports = n : (y(n, o), o.Buffer = v);
  function v(w, _, D) {
    return l(w, _, D);
  }
  v.prototype = Object.create(l.prototype), y(l, v), v.from = function(w, _, D) {
    if (typeof w == "number")
      throw new TypeError("Argument must not be a number");
    return l(w, _, D);
  }, v.alloc = function(w, _, D) {
    if (typeof w != "number")
      throw new TypeError("Argument must be a number");
    var k = l(w);
    return _ !== void 0 ? typeof D == "string" ? k.fill(_, D) : k.fill(_) : k.fill(0), k;
  }, v.allocUnsafe = function(w) {
    if (typeof w != "number")
      throw new TypeError("Argument must be a number");
    return l(w);
  }, v.allocUnsafeSlow = function(w) {
    if (typeof w != "number")
      throw new TypeError("Argument must be a number");
    return n.SlowBuffer(w);
  };
})(ao, ao.exports);
var qm = ao.exports, Fo = qm.Buffer, Qa = Fo.isEncoding || function(r) {
  switch (r = "" + r, r && r.toLowerCase()) {
    case "hex":
    case "utf8":
    case "utf-8":
    case "ascii":
    case "binary":
    case "base64":
    case "ucs2":
    case "ucs-2":
    case "utf16le":
    case "utf-16le":
    case "raw":
      return !0;
    default:
      return !1;
  }
};
function Qm(r) {
  if (!r)
    return "utf8";
  for (var o; ; )
    switch (r) {
      case "utf8":
      case "utf-8":
        return "utf8";
      case "ucs2":
      case "ucs-2":
      case "utf16le":
      case "utf-16le":
        return "utf16le";
      case "latin1":
      case "binary":
        return "latin1";
      case "base64":
      case "ascii":
      case "hex":
        return r;
      default:
        if (o)
          return;
        r = ("" + r).toLowerCase(), o = !0;
    }
}
function Jm(r) {
  var o = Qm(r);
  if (typeof o != "string" && (Fo.isEncoding === Qa || !Qa(r)))
    throw new Error("Unknown encoding: " + r);
  return o || r;
}
Du.StringDecoder = Qr;
function Qr(r) {
  this.encoding = Jm(r);
  var o;
  switch (this.encoding) {
    case "utf16le":
      this.text = o_, this.end = a_, o = 4;
      break;
    case "utf8":
      this.fillLast = r_, o = 4;
      break;
    case "base64":
      this.text = s_, this.end = u_, o = 3;
      break;
    default:
      this.write = l_, this.end = f_;
      return;
  }
  this.lastNeed = 0, this.lastTotal = 0, this.lastChar = Fo.allocUnsafe(o);
}
Qr.prototype.write = function(r) {
  if (r.length === 0)
    return "";
  var o, n;
  if (this.lastNeed) {
    if (o = this.fillLast(r), o === void 0)
      return "";
    n = this.lastNeed, this.lastNeed = 0;
  } else
    n = 0;
  return n < r.length ? o ? o + this.text(r, n) : this.text(r, n) : o || "";
};
Qr.prototype.end = i_;
Qr.prototype.text = n_;
Qr.prototype.fillLast = function(r) {
  if (this.lastNeed <= r.length)
    return r.copy(this.lastChar, this.lastTotal - this.lastNeed, 0, this.lastNeed), this.lastChar.toString(this.encoding, 0, this.lastTotal);
  r.copy(this.lastChar, this.lastTotal - this.lastNeed, 0, r.length), this.lastNeed -= r.length;
};
function Li(r) {
  return r <= 127 ? 0 : r >> 5 === 6 ? 2 : r >> 4 === 14 ? 3 : r >> 3 === 30 ? 4 : r >> 6 === 2 ? -1 : -2;
}
function e_(r, o, n) {
  var l = o.length - 1;
  if (l < n)
    return 0;
  var y = Li(o[l]);
  return y >= 0 ? (y > 0 && (r.lastNeed = y - 1), y) : --l < n || y === -2 ? 0 : (y = Li(o[l]), y >= 0 ? (y > 0 && (r.lastNeed = y - 2), y) : --l < n || y === -2 ? 0 : (y = Li(o[l]), y >= 0 ? (y > 0 && (y === 2 ? y = 0 : r.lastNeed = y - 3), y) : 0));
}
function t_(r, o, n) {
  if ((o[0] & 192) !== 128)
    return r.lastNeed = 0, "�";
  if (r.lastNeed > 1 && o.length > 1) {
    if ((o[1] & 192) !== 128)
      return r.lastNeed = 1, "�";
    if (r.lastNeed > 2 && o.length > 2 && (o[2] & 192) !== 128)
      return r.lastNeed = 2, "�";
  }
}
function r_(r) {
  var o = this.lastTotal - this.lastNeed, n = t_(this, r);
  if (n !== void 0)
    return n;
  if (this.lastNeed <= r.length)
    return r.copy(this.lastChar, o, 0, this.lastNeed), this.lastChar.toString(this.encoding, 0, this.lastTotal);
  r.copy(this.lastChar, o, 0, r.length), this.lastNeed -= r.length;
}
function n_(r, o) {
  var n = e_(this, r, o);
  if (!this.lastNeed)
    return r.toString("utf8", o);
  this.lastTotal = n;
  var l = r.length - (n - this.lastNeed);
  return r.copy(this.lastChar, 0, l), r.toString("utf8", o, l);
}
function i_(r) {
  var o = r && r.length ? this.write(r) : "";
  return this.lastNeed ? o + "�" : o;
}
function o_(r, o) {
  if ((r.length - o) % 2 === 0) {
    var n = r.toString("utf16le", o);
    if (n) {
      var l = n.charCodeAt(n.length - 1);
      if (l >= 55296 && l <= 56319)
        return this.lastNeed = 2, this.lastTotal = 4, this.lastChar[0] = r[r.length - 2], this.lastChar[1] = r[r.length - 1], n.slice(0, -1);
    }
    return n;
  }
  return this.lastNeed = 1, this.lastTotal = 2, this.lastChar[0] = r[r.length - 1], r.toString("utf16le", o, r.length - 1);
}
function a_(r) {
  var o = r && r.length ? this.write(r) : "";
  if (this.lastNeed) {
    var n = this.lastTotal - this.lastNeed;
    return o + this.lastChar.toString("utf16le", 0, n);
  }
  return o;
}
function s_(r, o) {
  var n = (r.length - o) % 3;
  return n === 0 ? r.toString("base64", o) : (this.lastNeed = 3 - n, this.lastTotal = 3, n === 1 ? this.lastChar[0] = r[r.length - 1] : (this.lastChar[0] = r[r.length - 2], this.lastChar[1] = r[r.length - 1]), r.toString("base64", o, r.length - n));
}
function u_(r) {
  var o = r && r.length ? this.write(r) : "";
  return this.lastNeed ? o + this.lastChar.toString("base64", 0, 3 - this.lastNeed) : o;
}
function l_(r) {
  return r.toString(this.encoding);
}
function f_(r) {
  return r && r.length ? this.write(r) : "";
}
const Ja = dr, { PromisePrototypeThen: c_, SymbolAsyncIterator: es, SymbolIterator: ts } = rt, { Buffer: d_ } = Jt, { ERR_INVALID_ARG_TYPE: h_, ERR_STREAM_NULL_VALUES: p_ } = pt.codes;
function m_(r, o, n) {
  let l;
  if (typeof o == "string" || o instanceof d_)
    return new r({
      objectMode: !0,
      ...n,
      read() {
        this.push(o), this.push(null);
      }
    });
  let y;
  if (o && o[es])
    y = !0, l = o[es]();
  else if (o && o[ts])
    y = !1, l = o[ts]();
  else
    throw new h_("iterable", ["Iterable"], o);
  const v = new r({
    objectMode: !0,
    highWaterMark: 1,
    // TODO(ronag): What options should be allowed?
    ...n
  });
  let w = !1;
  v._read = function() {
    w || (w = !0, D());
  }, v._destroy = function(k, B) {
    c_(
      _(k),
      () => Ja.nextTick(B, k),
      // nextTick is here in case cb throws
      (J) => Ja.nextTick(B, J || k)
    );
  };
  async function _(k) {
    const B = k != null, J = typeof l.throw == "function";
    if (B && J) {
      const { value: se, done: X } = await l.throw(k);
      if (await se, X)
        return;
    }
    if (typeof l.return == "function") {
      const { value: se } = await l.return();
      await se;
    }
  }
  async function D() {
    for (; ; ) {
      try {
        const { value: k, done: B } = y ? await l.next() : l.next();
        if (B)
          v.push(null);
        else {
          const J = k && typeof k.then == "function" ? await k : k;
          if (J === null)
            throw w = !1, new p_();
          if (v.push(J))
            continue;
          w = !1;
        }
      } catch (k) {
        v.destroy(k);
      }
      break;
    }
  }
  return v;
}
var Lu = m_, Mi, rs;
function ti() {
  if (rs)
    return Mi;
  rs = 1;
  const r = dr, {
    ArrayPrototypeIndexOf: o,
    NumberIsInteger: n,
    NumberIsNaN: l,
    NumberParseInt: y,
    ObjectDefineProperties: v,
    ObjectKeys: w,
    ObjectSetPrototypeOf: _,
    Promise: D,
    SafeSet: k,
    SymbolAsyncIterator: B,
    Symbol: J
  } = rt;
  Mi = te, te.ReadableState = ne;
  const { EventEmitter: se } = So, { Stream: X, prependListener: z } = To, { Buffer: pe } = Jt, { addAbortSignal: _e } = ei, de = er;
  let re = Gt.debuglog("stream", (S) => {
    re = S;
  });
  const Fe = zm, Ne = Rr, { getHighWaterMark: be, getDefaultHighWaterMark: Ue } = Co, {
    aggregateTwoErrors: We,
    codes: {
      ERR_INVALID_ARG_TYPE: Ve,
      ERR_METHOD_NOT_IMPLEMENTED: Se,
      ERR_OUT_OF_RANGE: oe,
      ERR_STREAM_PUSH_AFTER_EOF: ye,
      ERR_STREAM_UNSHIFT_AFTER_END_EVENT: $e
    }
  } = pt, { validateObject: De } = Hn, me = J("kPaused"), { StringDecoder: ue } = Du, Pe = Lu;
  _(te.prototype, X.prototype), _(te, X);
  const Te = () => {
  }, { errorOrDestroy: N } = Ne;
  function ne(S, T, b) {
    typeof b != "boolean" && (b = T instanceof Wt()), this.objectMode = !!(S && S.objectMode), b && (this.objectMode = this.objectMode || !!(S && S.readableObjectMode)), this.highWaterMark = S ? be(this, S, "readableHighWaterMark", b) : Ue(!1), this.buffer = new Fe(), this.length = 0, this.pipes = [], this.flowing = null, this.ended = !1, this.endEmitted = !1, this.reading = !1, this.constructed = !0, this.sync = !0, this.needReadable = !1, this.emittedReadable = !1, this.readableListening = !1, this.resumeScheduled = !1, this[me] = null, this.errorEmitted = !1, this.emitClose = !S || S.emitClose !== !1, this.autoDestroy = !S || S.autoDestroy !== !1, this.destroyed = !1, this.errored = null, this.closed = !1, this.closeEmitted = !1, this.defaultEncoding = S && S.defaultEncoding || "utf8", this.awaitDrainWriters = null, this.multiAwaitDrain = !1, this.readingMore = !1, this.dataEmitted = !1, this.decoder = null, this.encoding = null, S && S.encoding && (this.decoder = new ue(S.encoding), this.encoding = S.encoding);
  }
  function te(S) {
    if (!(this instanceof te))
      return new te(S);
    const T = this instanceof Wt();
    this._readableState = new ne(S, this, T), S && (typeof S.read == "function" && (this._read = S.read), typeof S.destroy == "function" && (this._destroy = S.destroy), typeof S.construct == "function" && (this._construct = S.construct), S.signal && !T && _e(S.signal, this)), X.call(this, S), Ne.construct(this, () => {
      this._readableState.needReadable && at(this, this._readableState);
    });
  }
  te.prototype.destroy = Ne.destroy, te.prototype._undestroy = Ne.undestroy, te.prototype._destroy = function(S, T) {
    T(S);
  }, te.prototype[se.captureRejectionSymbol] = function(S) {
    this.destroy(S);
  }, te.prototype.push = function(S, T) {
    return ge(this, S, T, !1);
  }, te.prototype.unshift = function(S, T) {
    return ge(this, S, T, !0);
  };
  function ge(S, T, b, u) {
    re("readableAddChunk", T);
    const f = S._readableState;
    let C;
    if (f.objectMode || (typeof T == "string" ? (b = b || f.defaultEncoding, f.encoding !== b && (u && f.encoding ? T = pe.from(T, b).toString(f.encoding) : (T = pe.from(T, b), b = ""))) : T instanceof pe ? b = "" : X._isUint8Array(T) ? (T = X._uint8ArrayToBuffer(T), b = "") : T != null && (C = new Ve("chunk", ["string", "Buffer", "Uint8Array"], T))), C)
      N(S, C);
    else if (T === null)
      f.reading = !1, Et(S, f);
    else if (f.objectMode || T && T.length > 0)
      if (u)
        if (f.endEmitted)
          N(S, new $e());
        else {
          if (f.destroyed || f.errored)
            return !1;
          Ae(S, f, T, !0);
        }
      else if (f.ended)
        N(S, new ye());
      else {
        if (f.destroyed || f.errored)
          return !1;
        f.reading = !1, f.decoder && !b ? (T = f.decoder.write(T), f.objectMode || T.length !== 0 ? Ae(S, f, T, !1) : at(S, f)) : Ae(S, f, T, !1);
      }
    else
      u || (f.reading = !1, at(S, f));
    return !f.ended && (f.length < f.highWaterMark || f.length === 0);
  }
  function Ae(S, T, b, u) {
    T.flowing && T.length === 0 && !T.sync && S.listenerCount("data") > 0 ? (T.multiAwaitDrain ? T.awaitDrainWriters.clear() : T.awaitDrainWriters = null, T.dataEmitted = !0, S.emit("data", b)) : (T.length += T.objectMode ? 1 : b.length, u ? T.buffer.unshift(b) : T.buffer.push(b), T.needReadable && mt(S)), at(S, T);
  }
  te.prototype.isPaused = function() {
    const S = this._readableState;
    return S[me] === !0 || S.flowing === !1;
  }, te.prototype.setEncoding = function(S) {
    const T = new ue(S);
    this._readableState.decoder = T, this._readableState.encoding = this._readableState.decoder.encoding;
    const b = this._readableState.buffer;
    let u = "";
    for (const f of b)
      u += T.write(f);
    return b.clear(), u !== "" && b.push(u), this._readableState.length = u.length, this;
  };
  const it = 1073741824;
  function ct(S) {
    if (S > it)
      throw new oe("size", "<= 1GiB", S);
    return S--, S |= S >>> 1, S |= S >>> 2, S |= S >>> 4, S |= S >>> 8, S |= S >>> 16, S++, S;
  }
  function ot(S, T) {
    return S <= 0 || T.length === 0 && T.ended ? 0 : T.objectMode ? 1 : l(S) ? T.flowing && T.length ? T.buffer.first().length : T.length : S <= T.length ? S : T.ended ? T.length : 0;
  }
  te.prototype.read = function(S) {
    re("read", S), S === void 0 ? S = NaN : n(S) || (S = y(S, 10));
    const T = this._readableState, b = S;
    if (S > T.highWaterMark && (T.highWaterMark = ct(S)), S !== 0 && (T.emittedReadable = !1), S === 0 && T.needReadable && ((T.highWaterMark !== 0 ? T.length >= T.highWaterMark : T.length > 0) || T.ended))
      return re("read: emitReadable", T.length, T.ended), T.length === 0 && T.ended ? M(this) : mt(this), null;
    if (S = ot(S, T), S === 0 && T.ended)
      return T.length === 0 && M(this), null;
    let u = T.needReadable;
    if (re("need readable", u), (T.length === 0 || T.length - S < T.highWaterMark) && (u = !0, re("length less than watermark", u)), T.ended || T.reading || T.destroyed || T.errored || !T.constructed)
      u = !1, re("reading, ended or constructing", u);
    else if (u) {
      re("do read"), T.reading = !0, T.sync = !0, T.length === 0 && (T.needReadable = !0);
      try {
        this._read(T.highWaterMark);
      } catch (C) {
        N(this, C);
      }
      T.sync = !1, T.reading || (S = ot(b, T));
    }
    let f;
    return S > 0 ? f = F(S, T) : f = null, f === null ? (T.needReadable = T.length <= T.highWaterMark, S = 0) : (T.length -= S, T.multiAwaitDrain ? T.awaitDrainWriters.clear() : T.awaitDrainWriters = null), T.length === 0 && (T.ended || (T.needReadable = !0), b !== S && T.ended && M(this)), f !== null && !T.errorEmitted && !T.closeEmitted && (T.dataEmitted = !0, this.emit("data", f)), f;
  };
  function Et(S, T) {
    if (re("onEofChunk"), !T.ended) {
      if (T.decoder) {
        const b = T.decoder.end();
        b && b.length && (T.buffer.push(b), T.length += T.objectMode ? 1 : b.length);
      }
      T.ended = !0, T.sync ? mt(S) : (T.needReadable = !1, T.emittedReadable = !0, Je(S));
    }
  }
  function mt(S) {
    const T = S._readableState;
    re("emitReadable", T.needReadable, T.emittedReadable), T.needReadable = !1, T.emittedReadable || (re("emitReadable", T.flowing), T.emittedReadable = !0, r.nextTick(Je, S));
  }
  function Je(S) {
    const T = S._readableState;
    re("emitReadable_", T.destroyed, T.length, T.ended), !T.destroyed && !T.errored && (T.length || T.ended) && (S.emit("readable"), T.emittedReadable = !1), T.needReadable = !T.flowing && !T.ended && T.length <= T.highWaterMark, x(S);
  }
  function at(S, T) {
    !T.readingMore && T.constructed && (T.readingMore = !0, r.nextTick(Ft, S, T));
  }
  function Ft(S, T) {
    for (; !T.reading && !T.ended && (T.length < T.highWaterMark || T.flowing && T.length === 0); ) {
      const b = T.length;
      if (re("maybeReadMore read 0"), S.read(0), b === T.length)
        break;
    }
    T.readingMore = !1;
  }
  te.prototype._read = function(S) {
    throw new Se("_read()");
  }, te.prototype.pipe = function(S, T) {
    const b = this, u = this._readableState;
    u.pipes.length === 1 && (u.multiAwaitDrain || (u.multiAwaitDrain = !0, u.awaitDrainWriters = new k(u.awaitDrainWriters ? [u.awaitDrainWriters] : []))), u.pipes.push(S), re("pipe count=%d opts=%j", u.pipes.length, T);
    const C = (!T || T.end !== !1) && S !== r.stdout && S !== r.stderr ? W : ke;
    u.endEmitted ? r.nextTick(C) : b.once("end", C), S.on("unpipe", P);
    function P(Rt, et) {
      re("onunpipe"), Rt === b && et && et.hasUnpiped === !1 && (et.hasUnpiped = !0, Ye());
    }
    function W() {
      re("onend"), S.end();
    }
    let K, Re = !1;
    function Ye() {
      re("cleanup"), S.removeListener("close", Ar), S.removeListener("finish", Ir), K && S.removeListener("drain", K), S.removeListener("error", Oe), S.removeListener("unpipe", P), b.removeListener("end", W), b.removeListener("end", ke), b.removeListener("data", ze), Re = !0, K && u.awaitDrainWriters && (!S._writableState || S._writableState.needDrain) && K();
    }
    function Ge() {
      Re || (u.pipes.length === 1 && u.pipes[0] === S ? (re("false write response, pause", 0), u.awaitDrainWriters = S, u.multiAwaitDrain = !1) : u.pipes.length > 1 && u.pipes.includes(S) && (re("false write response, pause", u.awaitDrainWriters.size), u.awaitDrainWriters.add(S)), b.pause()), K || (K = bt(b, S), S.on("drain", K));
    }
    b.on("data", ze);
    function ze(Rt) {
      re("ondata");
      const et = S.write(Rt);
      re("dest.write", et), et === !1 && Ge();
    }
    function Oe(Rt) {
      if (re("onerror", Rt), ke(), S.removeListener("error", Oe), S.listenerCount("error") === 0) {
        const et = S._writableState || S._readableState;
        et && !et.errorEmitted ? N(S, Rt) : S.emit("error", Rt);
      }
    }
    z(S, "error", Oe);
    function Ar() {
      S.removeListener("finish", Ir), ke();
    }
    S.once("close", Ar);
    function Ir() {
      re("onfinish"), S.removeListener("close", Ar), ke();
    }
    S.once("finish", Ir);
    function ke() {
      re("unpipe"), b.unpipe(S);
    }
    return S.emit("pipe", b), S.writableNeedDrain === !0 ? u.flowing && Ge() : u.flowing || (re("pipe resume"), b.resume()), S;
  };
  function bt(S, T) {
    return function() {
      const u = S._readableState;
      u.awaitDrainWriters === T ? (re("pipeOnDrain", 1), u.awaitDrainWriters = null) : u.multiAwaitDrain && (re("pipeOnDrain", u.awaitDrainWriters.size), u.awaitDrainWriters.delete(T)), (!u.awaitDrainWriters || u.awaitDrainWriters.size === 0) && S.listenerCount("data") && S.resume();
    };
  }
  te.prototype.unpipe = function(S) {
    const T = this._readableState, b = {
      hasUnpiped: !1
    };
    if (T.pipes.length === 0)
      return this;
    if (!S) {
      const f = T.pipes;
      T.pipes = [], this.pause();
      for (let C = 0; C < f.length; C++)
        f[C].emit("unpipe", this, {
          hasUnpiped: !1
        });
      return this;
    }
    const u = o(T.pipes, S);
    return u === -1 ? this : (T.pipes.splice(u, 1), T.pipes.length === 0 && this.pause(), S.emit("unpipe", this, b), this);
  }, te.prototype.on = function(S, T) {
    const b = X.prototype.on.call(this, S, T), u = this._readableState;
    return S === "data" ? (u.readableListening = this.listenerCount("readable") > 0, u.flowing !== !1 && this.resume()) : S === "readable" && !u.endEmitted && !u.readableListening && (u.readableListening = u.needReadable = !0, u.flowing = !1, u.emittedReadable = !1, re("on readable", u.length, u.reading), u.length ? mt(this) : u.reading || r.nextTick(L, this)), b;
  }, te.prototype.addListener = te.prototype.on, te.prototype.removeListener = function(S, T) {
    const b = X.prototype.removeListener.call(this, S, T);
    return S === "readable" && r.nextTick(ut, this), b;
  }, te.prototype.off = te.prototype.removeListener, te.prototype.removeAllListeners = function(S) {
    const T = X.prototype.removeAllListeners.apply(this, arguments);
    return (S === "readable" || S === void 0) && r.nextTick(ut, this), T;
  };
  function ut(S) {
    const T = S._readableState;
    T.readableListening = S.listenerCount("readable") > 0, T.resumeScheduled && T[me] === !1 ? T.flowing = !0 : S.listenerCount("data") > 0 ? S.resume() : T.readableListening || (T.flowing = null);
  }
  function L(S) {
    re("readable nexttick read 0"), S.read(0);
  }
  te.prototype.resume = function() {
    const S = this._readableState;
    return S.flowing || (re("resume"), S.flowing = !S.readableListening, O(this, S)), S[me] = !1, this;
  };
  function O(S, T) {
    T.resumeScheduled || (T.resumeScheduled = !0, r.nextTick(q, S, T));
  }
  function q(S, T) {
    re("resume", T.reading), T.reading || S.read(0), T.resumeScheduled = !1, S.emit("resume"), x(S), T.flowing && !T.reading && S.read(0);
  }
  te.prototype.pause = function() {
    return re("call pause flowing=%j", this._readableState.flowing), this._readableState.flowing !== !1 && (re("pause"), this._readableState.flowing = !1, this.emit("pause")), this._readableState[me] = !0, this;
  };
  function x(S) {
    const T = S._readableState;
    for (re("flow", T.flowing); T.flowing && S.read() !== null; )
      ;
  }
  te.prototype.wrap = function(S) {
    let T = !1;
    S.on("data", (u) => {
      !this.push(u) && S.pause && (T = !0, S.pause());
    }), S.on("end", () => {
      this.push(null);
    }), S.on("error", (u) => {
      N(this, u);
    }), S.on("close", () => {
      this.destroy();
    }), S.on("destroy", () => {
      this.destroy();
    }), this._read = () => {
      T && S.resume && (T = !1, S.resume());
    };
    const b = w(S);
    for (let u = 1; u < b.length; u++) {
      const f = b[u];
      this[f] === void 0 && typeof S[f] == "function" && (this[f] = S[f].bind(S));
    }
    return this;
  }, te.prototype[B] = function() {
    return d(this);
  }, te.prototype.iterator = function(S) {
    return S !== void 0 && De(S, "options"), d(this, S);
  };
  function d(S, T) {
    typeof S.read != "function" && (S = te.wrap(S, {
      objectMode: !0
    }));
    const b = m(S, T);
    return b.stream = S, b;
  }
  async function* m(S, T) {
    let b = Te;
    function u(P) {
      this === S ? (b(), b = Te) : b = P;
    }
    S.on("readable", u);
    let f;
    const C = de(
      S,
      {
        writable: !1
      },
      (P) => {
        f = P ? We(f, P) : null, b(), b = Te;
      }
    );
    try {
      for (; ; ) {
        const P = S.destroyed ? null : S.read();
        if (P !== null)
          yield P;
        else {
          if (f)
            throw f;
          if (f === null)
            return;
          await new D(u);
        }
      }
    } catch (P) {
      throw f = We(f, P), f;
    } finally {
      (f || T?.destroyOnReturn !== !1) && (f === void 0 || S._readableState.autoDestroy) ? Ne.destroyer(S, null) : (S.off("readable", u), C());
    }
  }
  v(te.prototype, {
    readable: {
      __proto__: null,
      get() {
        const S = this._readableState;
        return !!S && S.readable !== !1 && !S.destroyed && !S.errorEmitted && !S.endEmitted;
      },
      set(S) {
        this._readableState && (this._readableState.readable = !!S);
      }
    },
    readableDidRead: {
      __proto__: null,
      enumerable: !1,
      get: function() {
        return this._readableState.dataEmitted;
      }
    },
    readableAborted: {
      __proto__: null,
      enumerable: !1,
      get: function() {
        return !!(this._readableState.readable !== !1 && (this._readableState.destroyed || this._readableState.errored) && !this._readableState.endEmitted);
      }
    },
    readableHighWaterMark: {
      __proto__: null,
      enumerable: !1,
      get: function() {
        return this._readableState.highWaterMark;
      }
    },
    readableBuffer: {
      __proto__: null,
      enumerable: !1,
      get: function() {
        return this._readableState && this._readableState.buffer;
      }
    },
    readableFlowing: {
      __proto__: null,
      enumerable: !1,
      get: function() {
        return this._readableState.flowing;
      },
      set: function(S) {
        this._readableState && (this._readableState.flowing = S);
      }
    },
    readableLength: {
      __proto__: null,
      enumerable: !1,
      get() {
        return this._readableState.length;
      }
    },
    readableObjectMode: {
      __proto__: null,
      enumerable: !1,
      get() {
        return this._readableState ? this._readableState.objectMode : !1;
      }
    },
    readableEncoding: {
      __proto__: null,
      enumerable: !1,
      get() {
        return this._readableState ? this._readableState.encoding : null;
      }
    },
    errored: {
      __proto__: null,
      enumerable: !1,
      get() {
        return this._readableState ? this._readableState.errored : null;
      }
    },
    closed: {
      __proto__: null,
      get() {
        return this._readableState ? this._readableState.closed : !1;
      }
    },
    destroyed: {
      __proto__: null,
      enumerable: !1,
      get() {
        return this._readableState ? this._readableState.destroyed : !1;
      },
      set(S) {
        this._readableState && (this._readableState.destroyed = S);
      }
    },
    readableEnded: {
      __proto__: null,
      enumerable: !1,
      get() {
        return this._readableState ? this._readableState.endEmitted : !1;
      }
    }
  }), v(ne.prototype, {
    // Legacy getter for `pipesCount`.
    pipesCount: {
      __proto__: null,
      get() {
        return this.pipes.length;
      }
    },
    // Legacy property for `paused`.
    paused: {
      __proto__: null,
      get() {
        return this[me] !== !1;
      },
      set(S) {
        this[me] = !!S;
      }
    }
  }), te._fromList = F;
  function F(S, T) {
    if (T.length === 0)
      return null;
    let b;
    return T.objectMode ? b = T.buffer.shift() : !S || S >= T.length ? (T.decoder ? b = T.buffer.join("") : T.buffer.length === 1 ? b = T.buffer.first() : b = T.buffer.concat(T.length), T.buffer.clear()) : b = T.buffer.consume(S, T.decoder), b;
  }
  function M(S) {
    const T = S._readableState;
    re("endReadable", T.endEmitted), T.endEmitted || (T.ended = !0, r.nextTick(Z, T, S));
  }
  function Z(S, T) {
    if (re("endReadableNT", S.endEmitted, S.length), !S.errored && !S.closeEmitted && !S.endEmitted && S.length === 0) {
      if (S.endEmitted = !0, T.emit("end"), T.writable && T.allowHalfOpen === !1)
        r.nextTick(Y, T);
      else if (S.autoDestroy) {
        const b = T._writableState;
        (!b || b.autoDestroy && // We don't expect the writable to ever 'finish'
        // if writable is explicitly set to false.
        (b.finished || b.writable === !1)) && T.destroy();
      }
    }
  }
  function Y(S) {
    S.writable && !S.writableEnded && !S.destroyed && S.end();
  }
  te.from = function(S, T) {
    return Pe(te, S, T);
  };
  let xe;
  function Be() {
    return xe === void 0 && (xe = {}), xe;
  }
  return te.fromWeb = function(S, T) {
    return Be().newStreamReadableFromReadableStream(S, T);
  }, te.toWeb = function(S, T) {
    return Be().newReadableStreamFromStreamReadable(S, T);
  }, te.wrap = function(S, T) {
    var b, u;
    return new te({
      objectMode: (b = (u = S.readableObjectMode) !== null && u !== void 0 ? u : S.objectMode) !== null && b !== void 0 ? b : !0,
      ...T,
      destroy(f, C) {
        Ne.destroyer(S, f), C(f);
      }
    }).wrap(S);
  }, Mi;
}
var Bi, ns;
function Mu() {
  if (ns)
    return Bi;
  ns = 1;
  const r = dr, {
    ArrayPrototypeSlice: o,
    Error: n,
    FunctionPrototypeSymbolHasInstance: l,
    ObjectDefineProperty: y,
    ObjectDefineProperties: v,
    ObjectSetPrototypeOf: w,
    StringPrototypeToLowerCase: _,
    Symbol: D,
    SymbolHasInstance: k
  } = rt;
  Bi = ue, ue.WritableState = De;
  const { EventEmitter: B } = So, J = To.Stream, { Buffer: se } = Jt, X = Rr, { addAbortSignal: z } = ei, { getHighWaterMark: pe, getDefaultHighWaterMark: _e } = Co, {
    ERR_INVALID_ARG_TYPE: de,
    ERR_METHOD_NOT_IMPLEMENTED: re,
    ERR_MULTIPLE_CALLBACK: Fe,
    ERR_STREAM_CANNOT_PIPE: Ne,
    ERR_STREAM_DESTROYED: be,
    ERR_STREAM_ALREADY_FINISHED: Ue,
    ERR_STREAM_NULL_VALUES: We,
    ERR_STREAM_WRITE_AFTER_END: Ve,
    ERR_UNKNOWN_ENCODING: Se
  } = pt.codes, { errorOrDestroy: oe } = X;
  w(ue.prototype, J.prototype), w(ue, J);
  function ye() {
  }
  const $e = D("kOnFinished");
  function De(L, O, q) {
    typeof q != "boolean" && (q = O instanceof Wt()), this.objectMode = !!(L && L.objectMode), q && (this.objectMode = this.objectMode || !!(L && L.writableObjectMode)), this.highWaterMark = L ? pe(this, L, "writableHighWaterMark", q) : _e(!1), this.finalCalled = !1, this.needDrain = !1, this.ending = !1, this.ended = !1, this.finished = !1, this.destroyed = !1;
    const x = !!(L && L.decodeStrings === !1);
    this.decodeStrings = !x, this.defaultEncoding = L && L.defaultEncoding || "utf8", this.length = 0, this.writing = !1, this.corked = 0, this.sync = !0, this.bufferProcessing = !1, this.onwrite = te.bind(void 0, O), this.writecb = null, this.writelen = 0, this.afterWriteTickInfo = null, me(this), this.pendingcb = 0, this.constructed = !0, this.prefinished = !1, this.errorEmitted = !1, this.emitClose = !L || L.emitClose !== !1, this.autoDestroy = !L || L.autoDestroy !== !1, this.errored = null, this.closed = !1, this.closeEmitted = !1, this[$e] = [];
  }
  function me(L) {
    L.buffered = [], L.bufferedIndex = 0, L.allBuffers = !0, L.allNoop = !0;
  }
  De.prototype.getBuffer = function() {
    return o(this.buffered, this.bufferedIndex);
  }, y(De.prototype, "bufferedRequestCount", {
    __proto__: null,
    get() {
      return this.buffered.length - this.bufferedIndex;
    }
  });
  function ue(L) {
    const O = this instanceof Wt();
    if (!O && !l(ue, this))
      return new ue(L);
    this._writableState = new De(L, this, O), L && (typeof L.write == "function" && (this._write = L.write), typeof L.writev == "function" && (this._writev = L.writev), typeof L.destroy == "function" && (this._destroy = L.destroy), typeof L.final == "function" && (this._final = L.final), typeof L.construct == "function" && (this._construct = L.construct), L.signal && z(L.signal, this)), J.call(this, L), X.construct(this, () => {
      const q = this._writableState;
      q.writing || ct(this, q), Je(this, q);
    });
  }
  y(ue, k, {
    __proto__: null,
    value: function(L) {
      return l(this, L) ? !0 : this !== ue ? !1 : L && L._writableState instanceof De;
    }
  }), ue.prototype.pipe = function() {
    oe(this, new Ne());
  };
  function Pe(L, O, q, x) {
    const d = L._writableState;
    if (typeof q == "function")
      x = q, q = d.defaultEncoding;
    else {
      if (!q)
        q = d.defaultEncoding;
      else if (q !== "buffer" && !se.isEncoding(q))
        throw new Se(q);
      typeof x != "function" && (x = ye);
    }
    if (O === null)
      throw new We();
    if (!d.objectMode)
      if (typeof O == "string")
        d.decodeStrings !== !1 && (O = se.from(O, q), q = "buffer");
      else if (O instanceof se)
        q = "buffer";
      else if (J._isUint8Array(O))
        O = J._uint8ArrayToBuffer(O), q = "buffer";
      else
        throw new de("chunk", ["string", "Buffer", "Uint8Array"], O);
    let m;
    return d.ending ? m = new Ve() : d.destroyed && (m = new be("write")), m ? (r.nextTick(x, m), oe(L, m, !0), m) : (d.pendingcb++, Te(L, d, O, q, x));
  }
  ue.prototype.write = function(L, O, q) {
    return Pe(this, L, O, q) === !0;
  }, ue.prototype.cork = function() {
    this._writableState.corked++;
  }, ue.prototype.uncork = function() {
    const L = this._writableState;
    L.corked && (L.corked--, L.writing || ct(this, L));
  }, ue.prototype.setDefaultEncoding = function(O) {
    if (typeof O == "string" && (O = _(O)), !se.isEncoding(O))
      throw new Se(O);
    return this._writableState.defaultEncoding = O, this;
  };
  function Te(L, O, q, x, d) {
    const m = O.objectMode ? 1 : q.length;
    O.length += m;
    const F = O.length < O.highWaterMark;
    return F || (O.needDrain = !0), O.writing || O.corked || O.errored || !O.constructed ? (O.buffered.push({
      chunk: q,
      encoding: x,
      callback: d
    }), O.allBuffers && x !== "buffer" && (O.allBuffers = !1), O.allNoop && d !== ye && (O.allNoop = !1)) : (O.writelen = m, O.writecb = d, O.writing = !0, O.sync = !0, L._write(q, x, O.onwrite), O.sync = !1), F && !O.errored && !O.destroyed;
  }
  function N(L, O, q, x, d, m, F) {
    O.writelen = x, O.writecb = F, O.writing = !0, O.sync = !0, O.destroyed ? O.onwrite(new be("write")) : q ? L._writev(d, O.onwrite) : L._write(d, m, O.onwrite), O.sync = !1;
  }
  function ne(L, O, q, x) {
    --O.pendingcb, x(q), it(O), oe(L, q);
  }
  function te(L, O) {
    const q = L._writableState, x = q.sync, d = q.writecb;
    if (typeof d != "function") {
      oe(L, new Fe());
      return;
    }
    q.writing = !1, q.writecb = null, q.length -= q.writelen, q.writelen = 0, O ? (q.errored || (q.errored = O), L._readableState && !L._readableState.errored && (L._readableState.errored = O), x ? r.nextTick(ne, L, q, O, d) : ne(L, q, O, d)) : (q.buffered.length > q.bufferedIndex && ct(L, q), x ? q.afterWriteTickInfo !== null && q.afterWriteTickInfo.cb === d ? q.afterWriteTickInfo.count++ : (q.afterWriteTickInfo = {
      count: 1,
      cb: d,
      stream: L,
      state: q
    }, r.nextTick(ge, q.afterWriteTickInfo)) : Ae(L, q, 1, d));
  }
  function ge({ stream: L, state: O, count: q, cb: x }) {
    return O.afterWriteTickInfo = null, Ae(L, O, q, x);
  }
  function Ae(L, O, q, x) {
    for (!O.ending && !L.destroyed && O.length === 0 && O.needDrain && (O.needDrain = !1, L.emit("drain")); q-- > 0; )
      O.pendingcb--, x();
    O.destroyed && it(O), Je(L, O);
  }
  function it(L) {
    if (L.writing)
      return;
    for (let d = L.bufferedIndex; d < L.buffered.length; ++d) {
      var O;
      const { chunk: m, callback: F } = L.buffered[d], M = L.objectMode ? 1 : m.length;
      L.length -= M, F(
        (O = L.errored) !== null && O !== void 0 ? O : new be("write")
      );
    }
    const q = L[$e].splice(0);
    for (let d = 0; d < q.length; d++) {
      var x;
      q[d](
        (x = L.errored) !== null && x !== void 0 ? x : new be("end")
      );
    }
    me(L);
  }
  function ct(L, O) {
    if (O.corked || O.bufferProcessing || O.destroyed || !O.constructed)
      return;
    const { buffered: q, bufferedIndex: x, objectMode: d } = O, m = q.length - x;
    if (!m)
      return;
    let F = x;
    if (O.bufferProcessing = !0, m > 1 && L._writev) {
      O.pendingcb -= m - 1;
      const M = O.allNoop ? ye : (Y) => {
        for (let xe = F; xe < q.length; ++xe)
          q[xe].callback(Y);
      }, Z = O.allNoop && F === 0 ? q : o(q, F);
      Z.allBuffers = O.allBuffers, N(L, O, !0, O.length, Z, "", M), me(O);
    } else {
      do {
        const { chunk: M, encoding: Z, callback: Y } = q[F];
        q[F++] = null;
        const xe = d ? 1 : M.length;
        N(L, O, !1, xe, M, Z, Y);
      } while (F < q.length && !O.writing);
      F === q.length ? me(O) : F > 256 ? (q.splice(0, F), O.bufferedIndex = 0) : O.bufferedIndex = F;
    }
    O.bufferProcessing = !1;
  }
  ue.prototype._write = function(L, O, q) {
    if (this._writev)
      this._writev(
        [
          {
            chunk: L,
            encoding: O
          }
        ],
        q
      );
    else
      throw new re("_write()");
  }, ue.prototype._writev = null, ue.prototype.end = function(L, O, q) {
    const x = this._writableState;
    typeof L == "function" ? (q = L, L = null, O = null) : typeof O == "function" && (q = O, O = null);
    let d;
    if (L != null) {
      const m = Pe(this, L, O);
      m instanceof n && (d = m);
    }
    return x.corked && (x.corked = 1, this.uncork()), d || (!x.errored && !x.ending ? (x.ending = !0, Je(this, x, !0), x.ended = !0) : x.finished ? d = new Ue("end") : x.destroyed && (d = new be("end"))), typeof q == "function" && (d || x.finished ? r.nextTick(q, d) : x[$e].push(q)), this;
  };
  function ot(L) {
    return L.ending && !L.destroyed && L.constructed && L.length === 0 && !L.errored && L.buffered.length === 0 && !L.finished && !L.writing && !L.errorEmitted && !L.closeEmitted;
  }
  function Et(L, O) {
    let q = !1;
    function x(d) {
      if (q) {
        oe(L, d ?? Fe());
        return;
      }
      if (q = !0, O.pendingcb--, d) {
        const m = O[$e].splice(0);
        for (let F = 0; F < m.length; F++)
          m[F](d);
        oe(L, d, O.sync);
      } else
        ot(O) && (O.prefinished = !0, L.emit("prefinish"), O.pendingcb++, r.nextTick(at, L, O));
    }
    O.sync = !0, O.pendingcb++;
    try {
      L._final(x);
    } catch (d) {
      x(d);
    }
    O.sync = !1;
  }
  function mt(L, O) {
    !O.prefinished && !O.finalCalled && (typeof L._final == "function" && !O.destroyed ? (O.finalCalled = !0, Et(L, O)) : (O.prefinished = !0, L.emit("prefinish")));
  }
  function Je(L, O, q) {
    ot(O) && (mt(L, O), O.pendingcb === 0 && (q ? (O.pendingcb++, r.nextTick(
      (x, d) => {
        ot(d) ? at(x, d) : d.pendingcb--;
      },
      L,
      O
    )) : ot(O) && (O.pendingcb++, at(L, O))));
  }
  function at(L, O) {
    O.pendingcb--, O.finished = !0;
    const q = O[$e].splice(0);
    for (let x = 0; x < q.length; x++)
      q[x]();
    if (L.emit("finish"), O.autoDestroy) {
      const x = L._readableState;
      (!x || x.autoDestroy && // We don't expect the readable to ever 'end'
      // if readable is explicitly set to false.
      (x.endEmitted || x.readable === !1)) && L.destroy();
    }
  }
  v(ue.prototype, {
    closed: {
      __proto__: null,
      get() {
        return this._writableState ? this._writableState.closed : !1;
      }
    },
    destroyed: {
      __proto__: null,
      get() {
        return this._writableState ? this._writableState.destroyed : !1;
      },
      set(L) {
        this._writableState && (this._writableState.destroyed = L);
      }
    },
    writable: {
      __proto__: null,
      get() {
        const L = this._writableState;
        return !!L && L.writable !== !1 && !L.destroyed && !L.errored && !L.ending && !L.ended;
      },
      set(L) {
        this._writableState && (this._writableState.writable = !!L);
      }
    },
    writableFinished: {
      __proto__: null,
      get() {
        return this._writableState ? this._writableState.finished : !1;
      }
    },
    writableObjectMode: {
      __proto__: null,
      get() {
        return this._writableState ? this._writableState.objectMode : !1;
      }
    },
    writableBuffer: {
      __proto__: null,
      get() {
        return this._writableState && this._writableState.getBuffer();
      }
    },
    writableEnded: {
      __proto__: null,
      get() {
        return this._writableState ? this._writableState.ending : !1;
      }
    },
    writableNeedDrain: {
      __proto__: null,
      get() {
        const L = this._writableState;
        return L ? !L.destroyed && !L.ending && L.needDrain : !1;
      }
    },
    writableHighWaterMark: {
      __proto__: null,
      get() {
        return this._writableState && this._writableState.highWaterMark;
      }
    },
    writableCorked: {
      __proto__: null,
      get() {
        return this._writableState ? this._writableState.corked : 0;
      }
    },
    writableLength: {
      __proto__: null,
      get() {
        return this._writableState && this._writableState.length;
      }
    },
    errored: {
      __proto__: null,
      enumerable: !1,
      get() {
        return this._writableState ? this._writableState.errored : null;
      }
    },
    writableAborted: {
      __proto__: null,
      enumerable: !1,
      get: function() {
        return !!(this._writableState.writable !== !1 && (this._writableState.destroyed || this._writableState.errored) && !this._writableState.finished);
      }
    }
  });
  const Ft = X.destroy;
  ue.prototype.destroy = function(L, O) {
    const q = this._writableState;
    return !q.destroyed && (q.bufferedIndex < q.buffered.length || q[$e].length) && r.nextTick(it, q), Ft.call(this, L, O), this;
  }, ue.prototype._undestroy = X.undestroy, ue.prototype._destroy = function(L, O) {
    O(L);
  }, ue.prototype[B.captureRejectionSymbol] = function(L) {
    this.destroy(L);
  };
  let bt;
  function ut() {
    return bt === void 0 && (bt = {}), bt;
  }
  return ue.fromWeb = function(L, O) {
    return ut().newStreamWritableFromWritableStream(L, O);
  }, ue.toWeb = function(L) {
    return ut().newWritableStreamFromStreamWritable(L);
  }, Bi;
}
var Ni, is;
function __() {
  if (is)
    return Ni;
  is = 1;
  const r = dr, o = Jt, {
    isReadable: n,
    isWritable: l,
    isIterable: y,
    isNodeStream: v,
    isReadableNodeStream: w,
    isWritableNodeStream: _,
    isDuplexNodeStream: D
  } = zt, k = er, {
    AbortError: B,
    codes: { ERR_INVALID_ARG_TYPE: J, ERR_INVALID_RETURN_VALUE: se }
  } = pt, { destroyer: X } = Rr, z = Wt(), pe = ti(), { createDeferredPromise: _e } = Gt, de = Lu, re = globalThis.Blob || o.Blob, Fe = typeof re < "u" ? function(oe) {
    return oe instanceof re;
  } : function(oe) {
    return !1;
  }, Ne = globalThis.AbortController || bo().AbortController, { FunctionPrototypeCall: be } = rt;
  class Ue extends z {
    constructor(oe) {
      super(oe), oe?.readable === !1 && (this._readableState.readable = !1, this._readableState.ended = !0, this._readableState.endEmitted = !0), oe?.writable === !1 && (this._writableState.writable = !1, this._writableState.ending = !0, this._writableState.ended = !0, this._writableState.finished = !0);
    }
  }
  Ni = function Se(oe, ye) {
    if (D(oe))
      return oe;
    if (w(oe))
      return Ve({
        readable: oe
      });
    if (_(oe))
      return Ve({
        writable: oe
      });
    if (v(oe))
      return Ve({
        writable: !1,
        readable: !1
      });
    if (typeof oe == "function") {
      const { value: De, write: me, final: ue, destroy: Pe } = We(oe);
      if (y(De))
        return de(Ue, De, {
          // TODO (ronag): highWaterMark?
          objectMode: !0,
          write: me,
          final: ue,
          destroy: Pe
        });
      const Te = De?.then;
      if (typeof Te == "function") {
        let N;
        const ne = be(
          Te,
          De,
          (te) => {
            if (te != null)
              throw new se("nully", "body", te);
          },
          (te) => {
            X(N, te);
          }
        );
        return N = new Ue({
          // TODO (ronag): highWaterMark?
          objectMode: !0,
          readable: !1,
          write: me,
          final(te) {
            ue(async () => {
              try {
                await ne, r.nextTick(te, null);
              } catch (ge) {
                r.nextTick(te, ge);
              }
            });
          },
          destroy: Pe
        });
      }
      throw new se("Iterable, AsyncIterable or AsyncFunction", ye, De);
    }
    if (Fe(oe))
      return Se(oe.arrayBuffer());
    if (y(oe))
      return de(Ue, oe, {
        // TODO (ronag): highWaterMark?
        objectMode: !0,
        writable: !1
      });
    if (typeof oe?.writable == "object" || typeof oe?.readable == "object") {
      const De = oe != null && oe.readable ? w(oe?.readable) ? oe?.readable : Se(oe.readable) : void 0, me = oe != null && oe.writable ? _(oe?.writable) ? oe?.writable : Se(oe.writable) : void 0;
      return Ve({
        readable: De,
        writable: me
      });
    }
    const $e = oe?.then;
    if (typeof $e == "function") {
      let De;
      return be(
        $e,
        oe,
        (me) => {
          me != null && De.push(me), De.push(null);
        },
        (me) => {
          X(De, me);
        }
      ), De = new Ue({
        objectMode: !0,
        writable: !1,
        read() {
        }
      });
    }
    throw new J(
      ye,
      [
        "Blob",
        "ReadableStream",
        "WritableStream",
        "Stream",
        "Iterable",
        "AsyncIterable",
        "Function",
        "{ readable, writable } pair",
        "Promise"
      ],
      oe
    );
  };
  function We(Se) {
    let { promise: oe, resolve: ye } = _e();
    const $e = new Ne(), De = $e.signal;
    return {
      value: Se(
        async function* () {
          for (; ; ) {
            const ue = oe;
            oe = null;
            const { chunk: Pe, done: Te, cb: N } = await ue;
            if (r.nextTick(N), Te)
              return;
            if (De.aborted)
              throw new B(void 0, {
                cause: De.reason
              });
            ({ promise: oe, resolve: ye } = _e()), yield Pe;
          }
        }(),
        {
          signal: De
        }
      ),
      write(ue, Pe, Te) {
        const N = ye;
        ye = null, N({
          chunk: ue,
          done: !1,
          cb: Te
        });
      },
      final(ue) {
        const Pe = ye;
        ye = null, Pe({
          done: !0,
          cb: ue
        });
      },
      destroy(ue, Pe) {
        $e.abort(), Pe(ue);
      }
    };
  }
  function Ve(Se) {
    const oe = Se.readable && typeof Se.readable.read != "function" ? pe.wrap(Se.readable) : Se.readable, ye = Se.writable;
    let $e = !!n(oe), De = !!l(ye), me, ue, Pe, Te, N;
    function ne(te) {
      const ge = Te;
      Te = null, ge ? ge(te) : te && N.destroy(te);
    }
    return N = new Ue({
      // TODO (ronag): highWaterMark?
      readableObjectMode: !!(oe != null && oe.readableObjectMode),
      writableObjectMode: !!(ye != null && ye.writableObjectMode),
      readable: $e,
      writable: De
    }), De && (k(ye, (te) => {
      De = !1, te && X(oe, te), ne(te);
    }), N._write = function(te, ge, Ae) {
      ye.write(te, ge) ? Ae() : me = Ae;
    }, N._final = function(te) {
      ye.end(), ue = te;
    }, ye.on("drain", function() {
      if (me) {
        const te = me;
        me = null, te();
      }
    }), ye.on("finish", function() {
      if (ue) {
        const te = ue;
        ue = null, te();
      }
    })), $e && (k(oe, (te) => {
      $e = !1, te && X(oe, te), ne(te);
    }), oe.on("readable", function() {
      if (Pe) {
        const te = Pe;
        Pe = null, te();
      }
    }), oe.on("end", function() {
      N.push(null);
    }), N._read = function() {
      for (; ; ) {
        const te = oe.read();
        if (te === null) {
          Pe = N._read;
          return;
        }
        if (!N.push(te))
          return;
      }
    }), N._destroy = function(te, ge) {
      !te && Te !== null && (te = new B()), Pe = null, me = null, ue = null, Te === null ? ge(te) : (Te = ge, X(ye, te), X(oe, te));
    }, N;
  }
  return Ni;
}
var Oi, os;
function Wt() {
  if (os)
    return Oi;
  os = 1;
  const {
    ObjectDefineProperties: r,
    ObjectGetOwnPropertyDescriptor: o,
    ObjectKeys: n,
    ObjectSetPrototypeOf: l
  } = rt;
  Oi = w;
  const y = ti(), v = Mu();
  l(w.prototype, y.prototype), l(w, y);
  {
    const B = n(v.prototype);
    for (let J = 0; J < B.length; J++) {
      const se = B[J];
      w.prototype[se] || (w.prototype[se] = v.prototype[se]);
    }
  }
  function w(B) {
    if (!(this instanceof w))
      return new w(B);
    y.call(this, B), v.call(this, B), B ? (this.allowHalfOpen = B.allowHalfOpen !== !1, B.readable === !1 && (this._readableState.readable = !1, this._readableState.ended = !0, this._readableState.endEmitted = !0), B.writable === !1 && (this._writableState.writable = !1, this._writableState.ending = !0, this._writableState.ended = !0, this._writableState.finished = !0)) : this.allowHalfOpen = !0;
  }
  r(w.prototype, {
    writable: {
      __proto__: null,
      ...o(v.prototype, "writable")
    },
    writableHighWaterMark: {
      __proto__: null,
      ...o(v.prototype, "writableHighWaterMark")
    },
    writableObjectMode: {
      __proto__: null,
      ...o(v.prototype, "writableObjectMode")
    },
    writableBuffer: {
      __proto__: null,
      ...o(v.prototype, "writableBuffer")
    },
    writableLength: {
      __proto__: null,
      ...o(v.prototype, "writableLength")
    },
    writableFinished: {
      __proto__: null,
      ...o(v.prototype, "writableFinished")
    },
    writableCorked: {
      __proto__: null,
      ...o(v.prototype, "writableCorked")
    },
    writableEnded: {
      __proto__: null,
      ...o(v.prototype, "writableEnded")
    },
    writableNeedDrain: {
      __proto__: null,
      ...o(v.prototype, "writableNeedDrain")
    },
    destroyed: {
      __proto__: null,
      get() {
        return this._readableState === void 0 || this._writableState === void 0 ? !1 : this._readableState.destroyed && this._writableState.destroyed;
      },
      set(B) {
        this._readableState && this._writableState && (this._readableState.destroyed = B, this._writableState.destroyed = B);
      }
    }
  });
  let _;
  function D() {
    return _ === void 0 && (_ = {}), _;
  }
  w.fromWeb = function(B, J) {
    return D().newStreamDuplexFromReadableWritablePair(B, J);
  }, w.toWeb = function(B) {
    return D().newReadableWritablePairFromDuplex(B);
  };
  let k;
  return w.from = function(B) {
    return k || (k = __()), k(B, "body");
  }, Oi;
}
const { ObjectSetPrototypeOf: Bu, Symbol: b_ } = rt;
var Nu = $t;
const { ERR_METHOD_NOT_IMPLEMENTED: y_ } = pt.codes, Ro = Wt(), { getHighWaterMark: g_ } = Co;
Bu($t.prototype, Ro.prototype);
Bu($t, Ro);
const Vr = b_("kCallback");
function $t(r) {
  if (!(this instanceof $t))
    return new $t(r);
  const o = r ? g_(this, r, "readableHighWaterMark", !0) : null;
  o === 0 && (r = {
    ...r,
    highWaterMark: null,
    readableHighWaterMark: o,
    // TODO (ronag): 0 is not optimal since we have
    // a "bug" where we check needDrain before calling _write and not after.
    // Refs: https://github.com/nodejs/node/pull/32887
    // Refs: https://github.com/nodejs/node/pull/35941
    writableHighWaterMark: r.writableHighWaterMark || 0
  }), Ro.call(this, r), this._readableState.sync = !1, this[Vr] = null, r && (typeof r.transform == "function" && (this._transform = r.transform), typeof r.flush == "function" && (this._flush = r.flush)), this.on("prefinish", w_);
}
function so(r) {
  typeof this._flush == "function" && !this.destroyed ? this._flush((o, n) => {
    if (o) {
      r ? r(o) : this.destroy(o);
      return;
    }
    n != null && this.push(n), this.push(null), r && r();
  }) : (this.push(null), r && r());
}
function w_() {
  this._final !== so && so.call(this);
}
$t.prototype._final = so;
$t.prototype._transform = function(r, o, n) {
  throw new y_("_transform()");
};
$t.prototype._write = function(r, o, n) {
  const l = this._readableState, y = this._writableState, v = l.length;
  this._transform(r, o, (w, _) => {
    if (w) {
      n(w);
      return;
    }
    _ != null && this.push(_), y.ended || // Backwards compat.
    v === l.length || // Backwards compat.
    l.length < l.highWaterMark ? n() : this[Vr] = n;
  });
};
$t.prototype._read = function() {
  if (this[Vr]) {
    const r = this[Vr];
    this[Vr] = null, r();
  }
};
const { ObjectSetPrototypeOf: Ou } = rt;
var ju = Cr;
const Ao = Nu;
Ou(Cr.prototype, Ao.prototype);
Ou(Cr, Ao);
function Cr(r) {
  if (!(this instanceof Cr))
    return new Cr(r);
  Ao.call(this, r);
}
Cr.prototype._transform = function(r, o, n) {
  n(null, r);
};
const Gr = dr, { ArrayIsArray: v_, Promise: E_, SymbolAsyncIterator: x_ } = rt, Un = er, { once: S_ } = Gt, T_ = Rr, as = Wt(), {
  aggregateTwoErrors: C_,
  codes: {
    ERR_INVALID_ARG_TYPE: uo,
    ERR_INVALID_RETURN_VALUE: ji,
    ERR_MISSING_ARGS: F_,
    ERR_STREAM_DESTROYED: R_,
    ERR_STREAM_PREMATURE_CLOSE: A_
  },
  AbortError: I_
} = pt, { validateFunction: P_, validateAbortSignal: D_ } = Hn, {
  isIterable: ar,
  isReadable: Ui,
  isReadableNodeStream: Nn,
  isNodeStream: ss,
  isTransformStream: vr,
  isWebStream: k_,
  isReadableStream: Wi,
  isReadableEnded: L_
} = zt, M_ = globalThis.AbortController || bo().AbortController;
let $i, Gi;
function us(r, o, n) {
  let l = !1;
  r.on("close", () => {
    l = !0;
  });
  const y = Un(
    r,
    {
      readable: o,
      writable: n
    },
    (v) => {
      l = !v;
    }
  );
  return {
    destroy: (v) => {
      l || (l = !0, T_.destroyer(r, v || new R_("pipe")));
    },
    cleanup: y
  };
}
function B_(r) {
  return P_(r[r.length - 1], "streams[stream.length - 1]"), r.pop();
}
function Vi(r) {
  if (ar(r))
    return r;
  if (Nn(r))
    return N_(r);
  throw new uo("val", ["Readable", "Iterable", "AsyncIterable"], r);
}
async function* N_(r) {
  Gi || (Gi = ti()), yield* Gi.prototype[x_].call(r);
}
async function Dn(r, o, n, { end: l }) {
  let y, v = null;
  const w = (k) => {
    if (k && (y = k), v) {
      const B = v;
      v = null, B();
    }
  }, _ = () => new E_((k, B) => {
    y ? B(y) : v = () => {
      y ? B(y) : k();
    };
  });
  o.on("drain", w);
  const D = Un(
    o,
    {
      readable: !1
    },
    w
  );
  try {
    o.writableNeedDrain && await _();
    for await (const k of r)
      o.write(k) || await _();
    l && o.end(), await _(), n();
  } catch (k) {
    n(y !== k ? C_(y, k) : k);
  } finally {
    D(), o.off("drain", w);
  }
}
async function zi(r, o, n, { end: l }) {
  vr(o) && (o = o.writable);
  const y = o.getWriter();
  try {
    for await (const v of r)
      await y.ready, y.write(v).catch(() => {
      });
    await y.ready, l && await y.close(), n();
  } catch (v) {
    try {
      await y.abort(v), n(v);
    } catch (w) {
      n(w);
    }
  }
}
function O_(...r) {
  return Uu(r, S_(B_(r)));
}
function Uu(r, o, n) {
  if (r.length === 1 && v_(r[0]) && (r = r[0]), r.length < 2)
    throw new F_("streams");
  const l = new M_(), y = l.signal, v = n?.signal, w = [];
  D_(v, "options.signal");
  function _() {
    X(new I_());
  }
  v?.addEventListener("abort", _);
  let D, k;
  const B = [];
  let J = 0;
  function se(de) {
    X(de, --J === 0);
  }
  function X(de, re) {
    if (de && (!D || D.code === "ERR_STREAM_PREMATURE_CLOSE") && (D = de), !(!D && !re)) {
      for (; B.length; )
        B.shift()(D);
      v?.removeEventListener("abort", _), l.abort(), re && (D || w.forEach((Fe) => Fe()), Gr.nextTick(o, D, k));
    }
  }
  let z;
  for (let de = 0; de < r.length; de++) {
    const re = r[de], Fe = de < r.length - 1, Ne = de > 0, be = Fe || n?.end !== !1, Ue = de === r.length - 1;
    if (ss(re)) {
      let We = function(Ve) {
        Ve && Ve.name !== "AbortError" && Ve.code !== "ERR_STREAM_PREMATURE_CLOSE" && se(Ve);
      };
      if (be) {
        const { destroy: Ve, cleanup: Se } = us(re, Fe, Ne);
        B.push(Ve), Ui(re) && Ue && w.push(Se);
      }
      re.on("error", We), Ui(re) && Ue && w.push(() => {
        re.removeListener("error", We);
      });
    }
    if (de === 0)
      if (typeof re == "function") {
        if (z = re({
          signal: y
        }), !ar(z))
          throw new ji("Iterable, AsyncIterable or Stream", "source", z);
      } else
        ar(re) || Nn(re) || vr(re) ? z = re : z = as.from(re);
    else if (typeof re == "function") {
      if (vr(z)) {
        var pe;
        z = Vi((pe = z) === null || pe === void 0 ? void 0 : pe.readable);
      } else
        z = Vi(z);
      if (z = re(z, {
        signal: y
      }), Fe) {
        if (!ar(z, !0))
          throw new ji("AsyncIterable", `transform[${de - 1}]`, z);
      } else {
        var _e;
        $i || ($i = ju);
        const We = new $i({
          objectMode: !0
        }), Ve = (_e = z) === null || _e === void 0 ? void 0 : _e.then;
        if (typeof Ve == "function")
          J++, Ve.call(
            z,
            (ye) => {
              k = ye, ye != null && We.write(ye), be && We.end(), Gr.nextTick(se);
            },
            (ye) => {
              We.destroy(ye), Gr.nextTick(se, ye);
            }
          );
        else if (ar(z, !0))
          J++, Dn(z, We, se, {
            end: be
          });
        else if (Wi(z) || vr(z)) {
          const ye = z.readable || z;
          J++, Dn(ye, We, se, {
            end: be
          });
        } else
          throw new ji("AsyncIterable or Promise", "destination", z);
        z = We;
        const { destroy: Se, cleanup: oe } = us(z, !1, !0);
        B.push(Se), Ue && w.push(oe);
      }
    } else if (ss(re)) {
      if (Nn(z)) {
        J += 2;
        const We = j_(z, re, se, {
          end: be
        });
        Ui(re) && Ue && w.push(We);
      } else if (vr(z) || Wi(z)) {
        const We = z.readable || z;
        J++, Dn(We, re, se, {
          end: be
        });
      } else if (ar(z))
        J++, Dn(z, re, se, {
          end: be
        });
      else
        throw new uo(
          "val",
          ["Readable", "Iterable", "AsyncIterable", "ReadableStream", "TransformStream"],
          z
        );
      z = re;
    } else if (k_(re)) {
      if (Nn(z))
        J++, zi(Vi(z), re, se, {
          end: be
        });
      else if (Wi(z) || ar(z))
        J++, zi(z, re, se, {
          end: be
        });
      else if (vr(z))
        J++, zi(z.readable, re, se, {
          end: be
        });
      else
        throw new uo(
          "val",
          ["Readable", "Iterable", "AsyncIterable", "ReadableStream", "TransformStream"],
          z
        );
      z = re;
    } else
      z = as.from(re);
  }
  return (y != null && y.aborted || v != null && v.aborted) && Gr.nextTick(_), z;
}
function j_(r, o, n, { end: l }) {
  let y = !1;
  if (o.on("close", () => {
    y || n(new A_());
  }), r.pipe(o, {
    end: !1
  }), l) {
    let v = function() {
      y = !0, o.end();
    };
    L_(r) ? Gr.nextTick(v) : r.once("end", v);
  } else
    n();
  return Un(
    r,
    {
      readable: !0,
      writable: !1
    },
    (v) => {
      const w = r._readableState;
      v && v.code === "ERR_STREAM_PREMATURE_CLOSE" && w && w.ended && !w.errored && !w.errorEmitted ? r.once("end", n).once("error", n) : n(v);
    }
  ), Un(
    o,
    {
      readable: !1,
      writable: !0
    },
    n
  );
}
var Io = {
  pipelineImpl: Uu,
  pipeline: O_
};
const { pipeline: U_ } = Io, kn = Wt(), { destroyer: W_ } = Rr, {
  isNodeStream: Ln,
  isReadable: ls,
  isWritable: fs,
  isWebStream: Hi,
  isTransformStream: or,
  isWritableStream: cs,
  isReadableStream: ds
} = zt, {
  AbortError: $_,
  codes: { ERR_INVALID_ARG_VALUE: hs, ERR_MISSING_ARGS: G_ }
} = pt, V_ = er;
var Wu = function(...o) {
  if (o.length === 0)
    throw new G_("streams");
  if (o.length === 1)
    return kn.from(o[0]);
  const n = [...o];
  if (typeof o[0] == "function" && (o[0] = kn.from(o[0])), typeof o[o.length - 1] == "function") {
    const X = o.length - 1;
    o[X] = kn.from(o[X]);
  }
  for (let X = 0; X < o.length; ++X)
    if (!(!Ln(o[X]) && !Hi(o[X]))) {
      if (X < o.length - 1 && !(ls(o[X]) || ds(o[X]) || or(o[X])))
        throw new hs(`streams[${X}]`, n[X], "must be readable");
      if (X > 0 && !(fs(o[X]) || cs(o[X]) || or(o[X])))
        throw new hs(`streams[${X}]`, n[X], "must be writable");
    }
  let l, y, v, w, _;
  function D(X) {
    const z = w;
    w = null, z ? z(X) : X ? _.destroy(X) : !se && !J && _.destroy();
  }
  const k = o[0], B = U_(o, D), J = !!(fs(k) || cs(k) || or(k)), se = !!(ls(B) || ds(B) || or(B));
  if (_ = new kn({
    // TODO (ronag): highWaterMark?
    writableObjectMode: !!(k != null && k.writableObjectMode),
    readableObjectMode: !!(B != null && B.writableObjectMode),
    writable: J,
    readable: se
  }), J) {
    if (Ln(k))
      _._write = function(z, pe, _e) {
        k.write(z, pe) ? _e() : l = _e;
      }, _._final = function(z) {
        k.end(), y = z;
      }, k.on("drain", function() {
        if (l) {
          const z = l;
          l = null, z();
        }
      });
    else if (Hi(k)) {
      const pe = (or(k) ? k.writable : k).getWriter();
      _._write = async function(_e, de, re) {
        try {
          await pe.ready, pe.write(_e).catch(() => {
          }), re();
        } catch (Fe) {
          re(Fe);
        }
      }, _._final = async function(_e) {
        try {
          await pe.ready, pe.close().catch(() => {
          }), y = _e;
        } catch (de) {
          _e(de);
        }
      };
    }
    const X = or(B) ? B.readable : B;
    V_(X, () => {
      if (y) {
        const z = y;
        y = null, z();
      }
    });
  }
  if (se) {
    if (Ln(B))
      B.on("readable", function() {
        if (v) {
          const X = v;
          v = null, X();
        }
      }), B.on("end", function() {
        _.push(null);
      }), _._read = function() {
        for (; ; ) {
          const X = B.read();
          if (X === null) {
            v = _._read;
            return;
          }
          if (!_.push(X))
            return;
        }
      };
    else if (Hi(B)) {
      const z = (or(B) ? B.readable : B).getReader();
      _._read = async function() {
        for (; ; )
          try {
            const { value: pe, done: _e } = await z.read();
            if (!_.push(pe))
              return;
            if (_e) {
              _.push(null);
              return;
            }
          } catch {
            return;
          }
      };
    }
  }
  return _._destroy = function(X, z) {
    !X && w !== null && (X = new $_()), v = null, l = null, y = null, w === null ? z(X) : (w = z, Ln(B) && W_(B, X));
  }, _;
};
const $u = globalThis.AbortController || bo().AbortController, {
  codes: { ERR_INVALID_ARG_VALUE: z_, ERR_INVALID_ARG_TYPE: Jr, ERR_MISSING_ARGS: H_, ERR_OUT_OF_RANGE: K_ },
  AbortError: Nt
} = pt, { validateAbortSignal: hr, validateInteger: Y_, validateObject: pr } = Hn, X_ = rt.Symbol("kWeak"), { finished: Z_ } = er, q_ = Wu, { addAbortSignalNoValidate: Q_ } = ei, { isWritable: J_, isNodeStream: eb } = zt, {
  ArrayPrototypePush: tb,
  MathFloor: rb,
  Number: nb,
  NumberIsNaN: ib,
  Promise: ps,
  PromiseReject: ms,
  PromisePrototypeThen: ob,
  Symbol: Gu
} = rt, Wn = Gu("kEmpty"), _s = Gu("kEof");
function ab(r, o) {
  if (o != null && pr(o, "options"), o?.signal != null && hr(o.signal, "options.signal"), eb(r) && !J_(r))
    throw new z_("stream", r, "must be writable");
  const n = q_(this, r);
  return o != null && o.signal && Q_(o.signal, n), n;
}
function ri(r, o) {
  if (typeof r != "function")
    throw new Jr("fn", ["Function", "AsyncFunction"], r);
  o != null && pr(o, "options"), o?.signal != null && hr(o.signal, "options.signal");
  let n = 1;
  return o?.concurrency != null && (n = rb(o.concurrency)), Y_(n, "concurrency", 1), async function* () {
    var y, v;
    const w = new $u(), _ = this, D = [], k = w.signal, B = {
      signal: k
    }, J = () => w.abort();
    o != null && (y = o.signal) !== null && y !== void 0 && y.aborted && J(), o == null || (v = o.signal) === null || v === void 0 || v.addEventListener("abort", J);
    let se, X, z = !1;
    function pe() {
      z = !0;
    }
    async function _e() {
      try {
        for await (let Fe of _) {
          var de;
          if (z)
            return;
          if (k.aborted)
            throw new Nt();
          try {
            Fe = r(Fe, B);
          } catch (Ne) {
            Fe = ms(Ne);
          }
          Fe !== Wn && (typeof ((de = Fe) === null || de === void 0 ? void 0 : de.catch) == "function" && Fe.catch(pe), D.push(Fe), se && (se(), se = null), !z && D.length && D.length >= n && await new ps((Ne) => {
            X = Ne;
          }));
        }
        D.push(_s);
      } catch (Fe) {
        const Ne = ms(Fe);
        ob(Ne, void 0, pe), D.push(Ne);
      } finally {
        var re;
        z = !0, se && (se(), se = null), o == null || (re = o.signal) === null || re === void 0 || re.removeEventListener("abort", J);
      }
    }
    _e();
    try {
      for (; ; ) {
        for (; D.length > 0; ) {
          const de = await D[0];
          if (de === _s)
            return;
          if (k.aborted)
            throw new Nt();
          de !== Wn && (yield de), D.shift(), X && (X(), X = null);
        }
        await new ps((de) => {
          se = de;
        });
      }
    } finally {
      w.abort(), z = !0, X && (X(), X = null);
    }
  }.call(this);
}
function sb(r = void 0) {
  return r != null && pr(r, "options"), r?.signal != null && hr(r.signal, "options.signal"), async function* () {
    let n = 0;
    for await (const y of this) {
      var l;
      if (r != null && (l = r.signal) !== null && l !== void 0 && l.aborted)
        throw new Nt({
          cause: r.signal.reason
        });
      yield [n++, y];
    }
  }.call(this);
}
async function Vu(r, o = void 0) {
  for await (const n of Po.call(this, r, o))
    return !0;
  return !1;
}
async function ub(r, o = void 0) {
  if (typeof r != "function")
    throw new Jr("fn", ["Function", "AsyncFunction"], r);
  return !await Vu.call(
    this,
    async (...n) => !await r(...n),
    o
  );
}
async function lb(r, o) {
  for await (const n of Po.call(this, r, o))
    return n;
}
async function fb(r, o) {
  if (typeof r != "function")
    throw new Jr("fn", ["Function", "AsyncFunction"], r);
  async function n(l, y) {
    return await r(l, y), Wn;
  }
  for await (const l of ri.call(this, n, o))
    ;
}
function Po(r, o) {
  if (typeof r != "function")
    throw new Jr("fn", ["Function", "AsyncFunction"], r);
  async function n(l, y) {
    return await r(l, y) ? l : Wn;
  }
  return ri.call(this, n, o);
}
class cb extends H_ {
  constructor() {
    super("reduce"), this.message = "Reduce of an empty stream requires an initial value";
  }
}
async function db(r, o, n) {
  var l;
  if (typeof r != "function")
    throw new Jr("reducer", ["Function", "AsyncFunction"], r);
  n != null && pr(n, "options"), n?.signal != null && hr(n.signal, "options.signal");
  let y = arguments.length > 1;
  if (n != null && (l = n.signal) !== null && l !== void 0 && l.aborted) {
    const k = new Nt(void 0, {
      cause: n.signal.reason
    });
    throw this.once("error", () => {
    }), await Z_(this.destroy(k)), k;
  }
  const v = new $u(), w = v.signal;
  if (n != null && n.signal) {
    const k = {
      once: !0,
      [X_]: this
    };
    n.signal.addEventListener("abort", () => v.abort(), k);
  }
  let _ = !1;
  try {
    for await (const k of this) {
      var D;
      if (_ = !0, n != null && (D = n.signal) !== null && D !== void 0 && D.aborted)
        throw new Nt();
      y ? o = await r(o, k, {
        signal: w
      }) : (o = k, y = !0);
    }
    if (!_ && !y)
      throw new cb();
  } finally {
    v.abort();
  }
  return o;
}
async function hb(r) {
  r != null && pr(r, "options"), r?.signal != null && hr(r.signal, "options.signal");
  const o = [];
  for await (const l of this) {
    var n;
    if (r != null && (n = r.signal) !== null && n !== void 0 && n.aborted)
      throw new Nt(void 0, {
        cause: r.signal.reason
      });
    tb(o, l);
  }
  return o;
}
function pb(r, o) {
  const n = ri.call(this, r, o);
  return async function* () {
    for await (const y of n)
      yield* y;
  }.call(this);
}
function zu(r) {
  if (r = nb(r), ib(r))
    return 0;
  if (r < 0)
    throw new K_("number", ">= 0", r);
  return r;
}
function mb(r, o = void 0) {
  return o != null && pr(o, "options"), o?.signal != null && hr(o.signal, "options.signal"), r = zu(r), async function* () {
    var l;
    if (o != null && (l = o.signal) !== null && l !== void 0 && l.aborted)
      throw new Nt();
    for await (const v of this) {
      var y;
      if (o != null && (y = o.signal) !== null && y !== void 0 && y.aborted)
        throw new Nt();
      r-- <= 0 && (yield v);
    }
  }.call(this);
}
function _b(r, o = void 0) {
  return o != null && pr(o, "options"), o?.signal != null && hr(o.signal, "options.signal"), r = zu(r), async function* () {
    var l;
    if (o != null && (l = o.signal) !== null && l !== void 0 && l.aborted)
      throw new Nt();
    for await (const v of this) {
      var y;
      if (o != null && (y = o.signal) !== null && y !== void 0 && y.aborted)
        throw new Nt();
      if (r-- > 0)
        yield v;
      else
        return;
    }
  }.call(this);
}
_o.streamReturningOperators = {
  asIndexedPairs: sb,
  drop: mb,
  filter: Po,
  flatMap: pb,
  map: ri,
  take: _b,
  compose: ab
};
_o.promiseReturningOperators = {
  every: ub,
  forEach: fb,
  reduce: db,
  toArray: hb,
  some: Vu,
  find: lb
};
var Ki, bs;
function Hu() {
  if (bs)
    return Ki;
  bs = 1;
  const { ArrayPrototypePop: r, Promise: o } = rt, { isIterable: n, isNodeStream: l, isWebStream: y } = zt, { pipelineImpl: v } = Io, { finished: w } = er;
  Ku();
  function _(...D) {
    return new o((k, B) => {
      let J, se;
      const X = D[D.length - 1];
      if (X && typeof X == "object" && !l(X) && !n(X) && !y(X)) {
        const z = r(D);
        J = z.signal, se = z.end;
      }
      v(
        D,
        (z, pe) => {
          z ? B(z) : k(pe);
        },
        {
          signal: J,
          end: se
        }
      );
    });
  }
  return Ki = {
    finished: w,
    pipeline: _
  }, Ki;
}
var ys;
function Ku() {
  if (ys)
    return Ai.exports;
  ys = 1;
  const { Buffer: r } = Jt, { ObjectDefineProperty: o, ObjectKeys: n, ReflectApply: l } = rt, {
    promisify: { custom: y }
  } = Gt, { streamReturningOperators: v, promiseReturningOperators: w } = _o, {
    codes: { ERR_ILLEGAL_CONSTRUCTOR: _ }
  } = pt, D = Wu, { pipeline: k } = Io, { destroyer: B } = Rr, J = er, se = Hu(), X = zt, z = Ai.exports = To.Stream;
  z.isDisturbed = X.isDisturbed, z.isErrored = X.isErrored, z.isReadable = X.isReadable, z.Readable = ti();
  for (const _e of n(v)) {
    let re = function(...Fe) {
      if (new.target)
        throw _();
      return z.Readable.from(l(de, this, Fe));
    };
    const de = v[_e];
    o(re, "name", {
      __proto__: null,
      value: de.name
    }), o(re, "length", {
      __proto__: null,
      value: de.length
    }), o(z.Readable.prototype, _e, {
      __proto__: null,
      value: re,
      enumerable: !1,
      configurable: !0,
      writable: !0
    });
  }
  for (const _e of n(w)) {
    let re = function(...Fe) {
      if (new.target)
        throw _();
      return l(de, this, Fe);
    };
    const de = w[_e];
    o(re, "name", {
      __proto__: null,
      value: de.name
    }), o(re, "length", {
      __proto__: null,
      value: de.length
    }), o(z.Readable.prototype, _e, {
      __proto__: null,
      value: re,
      enumerable: !1,
      configurable: !0,
      writable: !0
    });
  }
  z.Writable = Mu(), z.Duplex = Wt(), z.Transform = Nu, z.PassThrough = ju, z.pipeline = k;
  const { addAbortSignal: pe } = ei;
  return z.addAbortSignal = pe, z.finished = J, z.destroy = B, z.compose = D, o(z, "promises", {
    __proto__: null,
    configurable: !0,
    enumerable: !0,
    get() {
      return se;
    }
  }), o(k, y, {
    __proto__: null,
    enumerable: !0,
    get() {
      return se.pipeline;
    }
  }), o(J, y, {
    __proto__: null,
    enumerable: !0,
    get() {
      return se.finished;
    }
  }), z.Stream = z, z._isUint8Array = function(de) {
    return de instanceof Uint8Array;
  }, z._uint8ArrayToBuffer = function(de) {
    return r.from(de.buffer, de.byteOffset, de.byteLength);
  }, Ai.exports;
}
(function(r) {
  const o = Ku(), n = Hu(), l = o.Readable.destroy;
  r.exports = o.Readable, r.exports._uint8ArrayToBuffer = o._uint8ArrayToBuffer, r.exports._isUint8Array = o._isUint8Array, r.exports.isDisturbed = o.isDisturbed, r.exports.isErrored = o.isErrored, r.exports.isReadable = o.isReadable, r.exports.Readable = o.Readable, r.exports.Writable = o.Writable, r.exports.Duplex = o.Duplex, r.exports.Transform = o.Transform, r.exports.PassThrough = o.PassThrough, r.exports.addAbortSignal = o.addAbortSignal, r.exports.finished = o.finished, r.exports.destroy = o.destroy, r.exports.destroy = l, r.exports.pipeline = o.pipeline, r.exports.compose = o.compose, Object.defineProperty(o, "promises", {
    configurable: !0,
    enumerable: !0,
    get() {
      return n;
    }
  }), r.exports.Stream = o.Stream, r.exports.default = r.exports;
})(Gs);
var Do = Gs.exports;
class bb {
  constructor(o) {
    fe(this, "_module");
    this._module = o;
  }
  allocate(o) {
    const n = this._module.canvas.getContext("webgl2"), l = n.createTexture();
    n.bindTexture(n.TEXTURE_2D, l), n.texParameteri(n.TEXTURE_2D, n.TEXTURE_MIN_FILTER, n.NEAREST), n.texParameteri(n.TEXTURE_2D, n.TEXTURE_MAG_FILTER, n.LINEAR), o && n.texImage2D(n.TEXTURE_2D, 0, n.RGBA, n.RGBA, n.UNSIGNED_BYTE, o), n.bindTexture(n.TEXTURE_2D, null);
    const y = this._module.GL.getNewId(this._module.GL.textures);
    return this._module.GL.textures[y] = l, { id: y };
  }
  release(o) {
    const n = typeof o == "number" ? o : o.id;
    this._module.canvas.getContext("webgl2").deleteTexture(this._module.GL.textures[n]), this._module.GL.textures[n] = null;
  }
}
class yb {
  constructor(o) {
    fe(this, "_module");
    this._module = o;
  }
  allocate(o) {
    const n = this._module._malloc(o);
    return {
      buffer: () => this._module.HEAPU8.buffer,
      byteOffset: n,
      byteLength: o
    };
  }
  release(o) {
    const n = typeof o == "number" ? o : o.byteOffset;
    this._module._free(n);
  }
}
async function Yu(r, o) {
  let n = new yb(r), l = new bb(r);
  const y = { width: o.displayWidth, height: o.displayHeight }, v = n.allocate(o.allocationSize({ rect: y })), w = o instanceof Gn ? v : new DataView(v.buffer(), v.byteOffset, v.byteLength), _ = o.texture ? l.allocate(o.texture).id : 0, D = o.horizontalFlip;
  switch (o.format) {
    case "RGB":
    case "RGBA":
    case "BGR":
    case "BGRA":
      const k = o.format;
      return o.copyTo(w).then(
        () => r.FrameData.makeFromBpc8WithTexID(
          _,
          v.byteOffset,
          () => {
            n.release(v), l.release(_);
          },
          y.width,
          y.height,
          r.CameraOrientation.DEG_0,
          r.PixelFormat[k],
          D,
          0
        )
      );
    case "NV12":
      return o.copyTo(w).then(
        (B) => r.FrameData.makeFromYuvNV12(
          v.byteOffset + B[0].offset,
          v.byteOffset + B[1].offset,
          () => {
            n.release(v);
          },
          y.width,
          y.height,
          r.CameraOrientation.DEG_0,
          D,
          0
        )
      );
    case "I420":
      return o.copyTo(w).then(
        (B) => r.FrameData.makeFromYuvI420(
          v.byteOffset + B[0].offset,
          v.byteOffset + B[1].offset,
          v.byteOffset + B[2].offset,
          () => {
            n.release(v);
          },
          y.width,
          y.height,
          r.CameraOrientation.DEG_0,
          D,
          0
        )
      );
    default:
      throw new Error("Unknown video frame format");
  }
}
const ur = class ur extends Zr {
  constructor(n, l) {
    super();
    fe(this, "readable");
    fe(this, "_sdk");
    fe(this, "fps", 30);
    this._sdk = n, this.readable = new Do.Readable({
      read: async () => {
        const y = ho(ur.PRODUCED_EVENT), { done: v, value: w } = await l.next(this.fps), _ = po(y);
        if (v) {
          this.readable.push(null), this.dispatchEvent(new CustomEvent(ur.EMPTIED_EVENT));
          return;
        }
        if (this.readable.destroyed) {
          w.close();
          return;
        }
        const D = w, k = Yu(this._sdk, D);
        this.readable.push({ frame: D, frameDataPromise: k }), this.dispatchEvent(new CustomEvent(ur.PRODUCED_EVENT, { detail: _ }));
      },
      objectMode: !0,
      highWaterMark: 1
    });
  }
  pipe(n) {
    return this.readable.pipe(n);
  }
  unpipe() {
    return this.readable.unpipe();
  }
  destroy() {
    this.removeAllEventListeners(), this.readable.unpipe(), this.readable.destroy();
  }
};
fe(ur, "EMPTIED_EVENT", "emptied"), fe(ur, "PRODUCED_EVENT", "produced");
let sr = ur;
const Kr = class Kr extends Zr {
  constructor(n, l, y, v) {
    super();
    fe(this, "_sdk");
    fe(this, "_effectPlayer");
    fe(this, "_processor");
    fe(this, "_lastFrame", null);
    fe(this, "transform");
    this._sdk = n, this._effectPlayer = l;
    const w = this._sdk.ProcessorConfiguration.create();
    switch (y) {
      case "image":
        w.setUseOfflineMode(!0), w.setUseFutureFilter(!1), w.setUseFutureInterpolate(!1);
        break;
      case "video":
        w.setUseOfflineMode(!1), w.setUseFutureFilter(!1), w.setUseFutureInterpolate(!1);
        break;
      case "stream":
      default:
        w.setUseOfflineMode(!1), w.setUseFutureFilter(v.useFutureFilter), w.setUseFutureInterpolate(v.useFutureInterpolate);
        break;
    }
    this._processor = y === "image" ? this._sdk.FrameProcessor.createPhotoProcessor(w) : this._sdk.FrameProcessor.createRealtimeProcessor(
      this._sdk.RealtimeProcessorMode.SYNC,
      w
    ), w.delete(), this._effectPlayer.setFrameProcessor(this._processor), this.transform = new Do.Transform({
      transform: async ({ frame: _, frameDataPromise: D }, k, B) => {
        this._lastFrame?.close(), this._lastFrame = _;
        const J = await D;
        if (this.transform.destroyed) {
          J.delete();
          return;
        }
        const se = this._process(J);
        this.transform.push({
          frame: {
            width: _.displayWidth,
            height: _.displayHeight
          },
          result: se
        }), B();
      },
      flush: (_) => {
      },
      objectMode: !0,
      highWaterMark: 1
    });
  }
  _process(n) {
    const l = ho(Kr.PROCESSED_EVENT), y = (this._processor.push(n), this._processor.pop()), v = po(l);
    return n.delete(), this.dispatchEvent(new CustomEvent(Kr.PROCESSED_EVENT, { detail: v })), y;
  }
  async rerun() {
    if (!this._lastFrame || this.transform.destroyed)
      return !1;
    const n = { width: this._lastFrame.displayWidth, height: this._lastFrame.displayHeight }, l = await Yu(this._sdk, this._lastFrame);
    if (this.transform.destroyed)
      return l.delete(), !1;
    const y = this._process(l);
    return this.transform.push({
      frame: n,
      result: y
    }), !0;
  }
  pipe(n) {
    return this.transform.pipe(n);
  }
  unpipe() {
    return this.transform.unpipe();
  }
  destroy() {
    this.removeAllEventListeners(), this._processor.delete(), this._lastFrame && (this._lastFrame.close(), this._lastFrame = null), this.transform.unpipe(), this.transform.destroy();
  }
};
fe(Kr, "PROCESSED_EVENT", "processed");
let zr = Kr;
const gb = typeof devicePixelRatio < "u" ? devicePixelRatio : 1, Yr = class Yr extends Zr {
  constructor(n, l, y = gb) {
    super();
    fe(this, "writable");
    fe(this, "fps", 30);
    fe(this, "_sdk");
    fe(this, "_effectPlayer");
    fe(this, "_effectManager");
    fe(this, "_lastResult", null);
    fe(this, "_preferences");
    fe(this, "_width", 0);
    fe(this, "_height", 0);
    fe(this, "_then", 0);
    this._sdk = n, this._effectPlayer = l, this._effectManager = l.effectManager(), this._preferences = { devicePixelRatio: y }, this.writable = new Do.Writable({
      write: async (v, w, _) => {
        this._lastResult?.result.delete(), this._lastResult = v, await new Promise(Xr), this._render(v), _();
      },
      objectMode: !0
    });
  }
  get frameSize() {
    return {
      width: this._width,
      height: this._height
    };
  }
  get renderSize() {
    return {
      width: this._sdk.canvas.width,
      height: this._sdk.canvas.height
    };
  }
  updateSurfaceSize() {
    this._width = this._height = 0;
  }
  _render({ frame: n, result: l }) {
    if (l.isDeleted())
      return;
    const y = l.frameData;
    if (this._width !== n.width || this._height !== n.height) {
      this._width = n.width, this._height = n.height;
      const { width: _, height: D } = wb(
        n.width,
        n.height,
        this._preferences.devicePixelRatio
      );
      this._sdk.setCanvasSize(_, D), this._effectManager.setEffectSize(_, D), this._effectPlayer.surfaceChanged(_, D);
    }
    const v = ho(Yr.RENDERED_EVENT);
    this._effectPlayer.drawWithExternalFrameData(y), y.delete();
    const w = po(v);
    this._sdk.ctx.bindFramebuffer(this._sdk.ctx.READ_FRAMEBUFFER, null), this.dispatchEvent(new CustomEvent(Yr.RENDERED_EVENT, { detail: w }));
  }
  async rerun() {
    if (!this._lastResult)
      return !1;
    let n = 0;
    const l = this._then, y = 1e3 / this.fps, v = 0.1 * y;
    for (; (n = await new Promise(Xr)) - l < y - v; )
      ;
    return this._then = n, this._render(this._lastResult), !0;
  }
  destroy() {
    this.removeAllEventListeners(), this._effectManager.delete(), this._lastResult && (this._lastResult.result.delete(), this._lastResult = null), this.writable.end(), this.writable.destroy();
  }
};
fe(Yr, "RENDERED_EVENT", "rendered");
let Hr = Yr;
function wb(r, o, n) {
  const l = Math.round(self.devicePixelRatio), [y, v] = [screen.width * l, screen.height * l], w = Math.max(1, y / r), _ = Math.max(1, v / o), D = Math.max(w, _);
  n = Math.min(n, D);
  const k = r * n, B = o * n;
  return { width: k, height: B };
}
const Qt = class Qt extends Zr {
  constructor(n, l, y) {
    super();
    fe(this, "_sdk");
    fe(this, "_effectPlayer");
    fe(this, "_state", lt.Paused);
    fe(this, "_producer");
    fe(this, "_processor");
    fe(this, "_renderer");
    fe(this, "_preferences", {
      fps: 30,
      idleOnEmpty: !0,
      useFutureFilter: !0,
      useFutureInterpolate: !1
    });
    this._sdk = n, this._effectPlayer = l, this._preferences.useFutureFilter = y.useFutureFilter, this._preferences.useFutureInterpolate = y.useFutureInterpolate, this._producer = new sr(n, /* @__PURE__ */ async function* () {
    }()), this._processor = new zr(
      n,
      l,
      "stream",
      this._preferences
    ), this._renderer = new Hr(n, l, y.devicePixelRatio), this._renderer.addEventListener(
      Hr.RENDERED_EVENT,
      ({ detail: v }) => this.dispatchEvent(new CustomEvent(Qt.FRAME_RENDERED_EVENT, { detail: v }))
    );
  }
  get state() {
    return this._state;
  }
  get frameSize() {
    return this._renderer.frameSize;
  }
  get preferences() {
    return this._preferences;
  }
  /** Changes the pipeline frames generator */
  use(n, l) {
    const y = this._sdk, v = this._effectPlayer;
    this._producer.destroy(), this._processor.destroy(), this._producer = new sr(y, n[Symbol.asyncIterator](l)), this._producer.addEventListener(
      sr.PRODUCED_EVENT,
      ({ detail: w }) => this.dispatchEvent(new CustomEvent(Qt.FRAME_RECEIVED_EVENT, { detail: w }))
    ), this._processor = new zr(
      y,
      v,
      n.kind,
      this._preferences
    ), this._processor.addEventListener(
      zr.PROCESSED_EVENT,
      ({ detail: w }) => this.dispatchEvent(new CustomEvent(Qt.FRAME_PROCESSED_EVENT, { detail: w }))
    ), this._producer.addEventListener(sr.EMPTIED_EVENT, () => this._state = lt.Idle, {
      once: !0
    }), this._producer.addEventListener(
      sr.EMPTIED_EVENT,
      () => {
        this._renderer.addEventListener(
          Hr.RENDERED_EVENT,
          async () => {
            for (; this._state === lt.Idle && !this._preferences.idleOnEmpty; )
              if (!await this._renderer.rerun())
                return;
          },
          { once: !0 }
        );
      },
      { once: !0 }
    ), this._state === lt.Idle && (this._state = lt.Running), this._state === lt.Running && this._producer.pipe(this._processor.transform).pipe(this._renderer.writable);
  }
  /** Runs loop of processing of input frames as well as rendering */
  run({ fps: n = this._preferences.fps, idleOnEmpty: l = !0 }) {
    Object.assign(this._preferences, { fps: n, idleOnEmpty: l }), this._producer.fps = n, this._renderer.fps = n, !(this._state === lt.Running || this._state === lt.Idle) && (this._producer.pipe(this._processor.transform).pipe(this._renderer.writable), this._state = lt.Running);
  }
  /** Runs on-off re-run of the last processing and rendering */
  pause() {
    this._state !== lt.Paused && (this._producer.unpipe(), this._processor.unpipe(), this._state = lt.Paused);
  }
  /** Runs on-off re-run of the last rendering */
  async rerun() {
    this._state === lt.Idle && await this._processor.rerun();
  }
  /** Pauses input‘s frames retrieval, processing and rendering */
  async rerender() {
    this._state === lt.Idle && await this._renderer.rerun();
  }
  /** Cleans up the pipeline resources like received frames, allocated memory and gl resources */
  destroy() {
    this.pause(), this._producer.destroy(), this._processor.destroy(), this._renderer.destroy();
  }
  updateSurfaceSize() {
    this._renderer.updateSurfaceSize();
  }
};
fe(Qt, "FRAME_RECEIVED_EVENT", "framereceived"), fe(Qt, "FRAME_PROCESSED_EVENT", "frameprocessed"), fe(Qt, "FRAME_RENDERED_EVENT", "framerendered");
let Er = Qt;
class vb {
  /** @internal */
  constructor(o) {
    fe(this, "_fd");
    fe(this, "_cache", /* @__PURE__ */ new Map());
    this._fd = o;
  }
  get(o) {
    if (Array.isArray(o))
      return o.map((w) => this.get(w));
    const n = o.split("."), l = n.length;
    let y = l, v = this._fd;
    for (let w = !1; !w && y > 0; --y) {
      const _ = n.slice(0, y).join(".");
      this._cache.has(_) && (w = !0, v = this._cache.get(_), ++y);
    }
    for (; v != null && y < l; ++y) {
      const w = n[y];
      let _ = v[w];
      if (typeof _ > "u") {
        const k = "get" + w[0].toUpperCase() + w.slice(1);
        _ = v[k];
      }
      if (typeof _ > "u" && Ia(v)) {
        const k = parseInt(w);
        isNaN(k) || (_ = v.get(k));
      }
      if (typeof _ == "function")
        try {
          _ = _.apply(v);
        } catch {
          _ = void 0;
        }
      const D = n.slice(0, y + 1).join(".");
      if (o === D && Ia(_)) {
        const k = _;
        _ = new Array(k.size());
        for (let B = 0, J = k.size(); B < J; ++B)
          _[B] = k.get(B);
      }
      this._cache.set(D, v = _);
    }
    return y === l ? v : void 0;
  }
  /** @hidden */
  addTimestampUs(o) {
    this._fd.addTimestampUs(o);
  }
}
class gs {
  constructor(o) {
    fe(this, "_module");
    this._module = o;
  }
  exists(o) {
    try {
      return this._module.FS.lstat(o), !0;
    } catch (n) {
      if (n.errno === 44 || n.code === "ENOENT")
        return !1;
      throw n;
    }
  }
  writeFile(o, n) {
    const l = o.split("/");
    l[0] === "" && l.shift(), l.length > 1 && l.reduce((y, v) => (this.exists(y) || this._module.FS.mkdir(y), `${y}/${v}`)), !(o.endsWith("/") && n.length === 0) && this._module.FS.writeFile(o, n);
  }
}
var Eb = Object.defineProperty, xb = Object.getOwnPropertyDescriptor, Sb = (r, o, n, l) => {
  for (var y = l > 1 ? void 0 : l ? xb(o, n) : o, v = r.length - 1, w; v >= 0; v--)
    (w = r[v]) && (y = (l ? w(o, n, y) : w(y)) || y);
  return l && y && Eb(o, n, y), y;
};
const Tb = {
  useFutureFilter: !0,
  useFutureInterpolate: !1,
  logger: console
};
var Qe;
const Xu = (Qe = class extends Zr {
  constructor(n, l = {}) {
    super();
    fe(this, "_sdk");
    fe(this, "_effectPlayer");
    fe(this, "_effectManager");
    fe(this, "_pipeline");
    fe(this, "_preferences");
    this._sdk = n, this._preferences = {
      ...Tb,
      ...l
    };
    const y = this._sdk.EffectPlayerConfiguration.create(
      this._sdk.canvas.width,
      this._sdk.canvas.height
    );
    this._effectPlayer = this._sdk.EffectPlayer.create(y), y.delete(), this._effectManager = this._effectPlayer.effectManager(), this._effectPlayer.surfaceCreated(this._sdk.canvas.width, this._sdk.canvas.height), this._effectPlayer.addFrameDataListener((v) => {
      this.dispatchEvent(
        new CustomEvent(Qe.FRAME_DATA_EVENT, { detail: new vb(v) })
      );
    }), this._effectManager.addEffectActivatedListener(() => {
      const v = this._effectManager.current();
      this.dispatchEvent(new CustomEvent(Qe.EFFECT_ACTIVATED_EVENT, { detail: v }));
    }), this._effectManager.addEffectEventListener(async (v) => {
      v === Np && (await new Promise((w) => Fs(w)), this._pipeline.rerun());
    }), this._pipeline = new Er(
      this._sdk,
      this._effectPlayer,
      this._preferences
    ), this._pipeline.addEventListener(
      Er.FRAME_RECEIVED_EVENT,
      ({ detail: v }) => this.dispatchEvent(new CustomEvent(Qe.FRAME_RECEIVED_EVENT, { detail: v }))
    ), this._pipeline.addEventListener(
      Er.FRAME_PROCESSED_EVENT,
      ({ detail: v }) => this.dispatchEvent(new CustomEvent(Qe.FRAME_PROCESSED_EVENT, { detail: v }))
    ), this._pipeline.addEventListener(
      Er.FRAME_RENDERED_EVENT,
      ({ detail: v }) => this.dispatchEvent(new CustomEvent(Qe.FRAME_RENDERED_EVENT, { detail: v }))
    ), this.canvas.addEventListener("webglcontextlost", async (v) => {
      v.preventDefault(), this._effectPlayer.playbackStop(), this.pause(), this._effectPlayer.surfaceDestroyed();
    }), this.canvas.addEventListener("webglcontextrestored", () => {
      $s(this._sdk.ctx), this._effectPlayer.surfaceCreated(this._sdk.canvas.width, this._sdk.canvas.height), this._pipeline.updateSurfaceSize(), this.play(), this._effectPlayer.playbackPlay();
    }), this.setVolume(0);
  }
  /**
   * Creates {@link Player} instance.
   *
   * See {@link SDKOptions} and {@link PlayerOptions} for all the possible parameters.
   *
   * @example
   * ```ts
   * const player = await Player.create({ clientToken: "xxx-xxx-xxx", devicePixelRatio: 1 })
   * ```
   */
  static async create(n) {
    const l = await Op(n);
    return new this(l, n);
  }
  /**
   * Underlying HTMLCanvasElement
   * @internal
   */
  get canvas() {
    return this._sdk.canvas;
  }
  /**
   * The size of the last rendered frame.
   *
   * May be bigger then {@link Player.canvas} size. See {@link calculateSurfaceSize}
   * @internal
   */
  get frameSize() {
    return this._pipeline.frameSize;
  }
  /** @internal */
  get preferences() {
    return {
      ...this._preferences,
      pauseOnEmpty: this._pipeline.preferences.idleOnEmpty
    };
  }
  get isPlaying() {
    return this._pipeline.state === lt.Running;
  }
  /**
   * Uses the input as frames source
   * @example
   * ```ts
   * player.use(new Webcam())
   * ```
   */
  use(n, l) {
    this._pipeline.use(n, l);
  }
  /**
   * Adds additional modules like `face_tracker`, `background` and {@link Module | many others} to the Player and makes them available for effects
   * @example
   * ```ts
   * const frx = new Module("/path/to/face_tracker.zip")
   *
   * await player.addModule(frx)
   * ```
   */
  async addModule(...n) {
    await Promise.all(n.map((l) => l._bind({ FS: new gs(this._sdk) })));
  }
  /**
   * Applies an effect to input
   * @example
   * ```ts
   * const octopus = new Effect("/path/to/Octopus.zip")
   *
   * await player.applyEffect(octopus)
   * ```
   */
  async applyEffect(n) {
    const l = this, y = n.name;
    return await n._bind({
      FS: new gs(this._sdk),
      evalJs: this._evalJs.bind(this),
      callJsMethod: this._callJsMethod.bind(this)
    }), new Promise((v) => {
      this.addEventListener(Qe.EFFECT_ACTIVATED_EVENT, w, { once: !0 }), this.addEventListener(Qe.EFFECT_ACTIVATED_EVENT, _);
      try {
        this._effectManager.load(y);
      } catch (D) {
        this.removeEventListener(Qe.EFFECT_ACTIVATED_EVENT, w), this.removeEventListener(Qe.EFFECT_ACTIVATED_EVENT, _), n._unbind(), this.clearEffect(), this._preferences.logger.warn?.("The effect was force cleared due to the exception:"), this._preferences.logger.error?.(D);
      }
      function w({ detail: D }) {
        v(D);
      }
      function _({ detail: D }) {
        D.url() !== `/${y}/` && (l.removeEventListener(Qe.EFFECT_ACTIVATED_EVENT, _), n._unbind());
      }
    });
  }
  /** Clears effect applied to input */
  async clearEffect() {
    return new Promise((n) => {
      this.addEventListener(Qe.EFFECT_ACTIVATED_EVENT, () => n(), { once: !0 }), this._effectManager.load("");
    });
  }
  callJsMethod(n, l = "") {
    return this._callJsMethod(n, l);
  }
  /** Sets effect volume from 0 to 1 */
  setVolume(n) {
    this._effectManager.setEffectVolume(n), this.dispatchEvent(new CustomEvent("volumechange", { detail: n }));
  }
  /**
   * Starts input processing.
   *
   * Accepts playback options object with optional `fps` and `pauseOnEmpty` keys.
   *
   * @example
   * ```ts
   * /// The `fps` playback option persists between invocations:
   *
   * const desiredFps = 25
   *
   * player.play({ fps: desiredFps })
   * player.play() // same as passing `{ fps: desiredFps }`
   * ```
   * @example
   * ```ts
   * /// The `pauseOnEmpty` playback option resets to `true` between invocations:
   *
   * await player.use(new Image(file))
   * player.applyEffect(new Effect("path/to/Spider.zip")) // an effect with animations
   *
   * player.play({ pauseOnEmpty: false })
   * player.play() // same as passing `{ pauseOnEmpty: true }`
   * ```
   */
  play(n = {}) {
    this._pipeline.run({
      fps: n.fps,
      idleOnEmpty: n.pauseOnEmpty
    });
  }
  /** Stops input processing */
  pause() {
    this._pipeline.pause();
  }
  /** Destroys the {@link Player} instance, clears all the resources used */
  async destroy() {
    this.pause(), this.removeAllEventListeners(), await this.clearEffect(), this._pipeline.destroy(), this._effectPlayer.surfaceDestroyed(), this._effectManager.delete(), this._effectPlayer.delete();
    for (const n in this)
      n.startsWith("_") && Object.defineProperty(this, n, {
        get() {
          throw new Error("The player is destroyed.");
        },
        set() {
          throw new Error("The player is destroyed.");
        }
      });
  }
  async _evalJs(n) {
    return new Promise(async (l) => {
      const y = this._effectManager.current().evalJsSync(n);
      await this._pipeline.rerender(), l(y);
    });
  }
  /** @deprecated */
  async _callJsMethod(n, l = "") {
    this._effectManager.current().callJsMethod(n, l), await this._pipeline.rerender();
  }
}, /**
 * Triggered when a frame is received from the specified {@link Input}
 * @event
 */
fe(Qe, "FRAME_RECEIVED_EVENT", "framereceived"), /**
 * Triggered when a frame is processed by underlying neural networks
 * @event
 */
fe(Qe, "FRAME_PROCESSED_EVENT", "frameprocessed"), /**
 * Triggered when a frame is rendered
 * @event */
fe(Qe, "FRAME_RENDERED_EVENT", "framerendered"), /**
 * Triggered when a new {@link FrameData} is ready
 * @example
 * ```ts
 * player.addEventListener("framedata", ({ detail: frameData }) => {
 *   const hasFace = frameData.get("frxRecognitionResult.faces.0.hasFace")
 *   if (!hasFace) return
 *
 *   const landmarks = frameData.get("frxRecognitionResult.faces.0.landmarks")
 *   console.log(landmarks)
 * })
 * ```
 * @event
 */
fe(Qe, "FRAME_DATA_EVENT", "framedata"), /**
 * Triggered when an {@link Effect} is activated
 *
 * Note: By default the {@link Player} starts with an "empty" {@link Effect} applied
 * which does nothing but rendering
 *
 * @event
 */
fe(Qe, "EFFECT_ACTIVATED_EVENT", "effectactivated"), Qe);
Sb([
  Rs("Please, use Effect.evalJs() instead.")
], Xu.prototype, "callJsMethod", 1);
let Gb = Xu;
const ni = (r) => {
  if (!(r && "canvas" in r))
    throw new Error(
      `The "player" must be a Player instance, but "${r}" is received. Make sure you haven't forgot to place "await" before Player.create() call.`
    );
}, lo = /* @__PURE__ */ new WeakMap(), Cb = (r, o) => {
  ni(r);
  const n = typeof o == "string" ? document.querySelector(o) : o;
  if (!(n instanceof HTMLElement))
    throw new Error("Target container is not a DOM element");
  if (n instanceof HTMLMediaElement || n instanceof HTMLCanvasElement)
    throw new Error("Target container must be a plain html element like `div`");
  lo.set(n, r), n.appendChild(r.canvas);
  const { pauseOnEmpty: l } = r.preferences;
  r.play({ pauseOnEmpty: l });
}, Fb = (r) => {
  const o = typeof r == "string" ? document.querySelector(r) : r;
  if (!(o instanceof HTMLElement))
    throw new Error("Target container is not a DOM element");
  const n = lo.get(o);
  n && o.removeChild(n.canvas), lo.delete(o);
}, Vb = { render: Cb, unmount: Fb };
class zb {
  constructor(o) {
    fe(this, "_player");
    ni(o), this._player = o;
  }
  /**
   * @param settings - Output photo settings
   * @returns Snapshot of the current {@link Player} state
   */
  async takePhoto(o) {
    const n = this._player.canvas, { width: l, height: y } = this._player.frameSize, v = Rb(n, o?.width ?? l, o?.height ?? y);
    return await new Promise(
      (w, _) => v.toBlob(
        (D) => D ? w(D) : _(new Error("Unexpected error: Unable to create Blob")),
        o?.type ?? "image/jpeg",
        o?.quality
      )
    );
  }
}
const Rb = (r, o = r.width, n = r.height) => {
  if (o !== r.width || n !== r.height) {
    const y = Ab(o, n);
    return y.getContext("2d").drawImage(r, 0, 0, y.width, y.height), y;
  }
  return r;
}, Ab = (r, o) => {
  let n;
  return As ? (n = new OffscreenCanvas(r, o), n.toBlob = function(l, y, v) {
    this.convertToBlob({ type: y, quality: v }).then(l).catch((w) => l(null));
  }) : (n = document.createElement("canvas"), n.width = r, n.height = o), n;
}, Ib = typeof MediaStream < "u" ? MediaStream : class {
  constructor() {
    throw new Error("The environment does not support MediaStream API");
  }
}, xr = class xr extends Ib {
  constructor(o) {
    ni(o), super();
    const n = xr.cache.get(o);
    if (!n || !n.active) {
      let l = o.canvas;
      if (((l.getContext("webgl2") || l.getContext("webgl")).getContextAttributes() || {}).alpha) {
        const w = l, _ = (l = document.createElement("canvas")).getContext("2d", {
          alpha: !1
        });
        o.addEventListener("framerendered", () => {
          _.canvas.width = w.width, _.canvas.height = w.height, _.drawImage(w, 0, 0, w.width, w.height);
        });
      }
      l.captureStream().getTracks().forEach((w) => this.addTrack(w)), xr.cache.set(o, this);
    }
    return xr.cache.get(o);
  }
  /**
   * @returns
   * Video {@link https://developer.mozilla.org/en-US/docs/Web/API/MediaStreamTrack | MediaStreamTrack}
   * of given index from {@link https://developer.mozilla.org/en-US/docs/Web/API/MediaStream/getVideoTracks | MediaStream.getVideoTracks()} list
   */
  getVideoTrack(o = 0) {
    return this.getVideoTracks()[o];
  }
  /**
   * @returns
   * Audio {@link https://developer.mozilla.org/en-US/docs/Web/API/MediaStreamTrack | MediaStreamTrack}
   * of given index from {@link https://developer.mozilla.org/en-US/docs/Web/API/MediaStream/getAudioTracks | MediaStream.getAudioTracks()} list
   */
  getAudioTrack(o = 0) {
    return this.getAudioTracks()[o];
  }
  /** Stops the capture */
  stop() {
    this.getTracks().forEach((o) => o.stop());
  }
};
fe(xr, "cache", /* @__PURE__ */ new WeakMap());
let ws = xr;
const Pb = typeof MediaRecorder < "u" ? MediaRecorder : class {
  constructor() {
    throw new Error("The environment does not support MediaRecorder API");
  }
};
class Hb extends Pb {
  constructor(o, n) {
    ni(o);
    const l = o.canvas.captureStream();
    super(l, n);
  }
  /**
   * Stops video recording
   * @returns The recorder video
   */
  async stop() {
    return new Promise((o, n) => {
      const l = (v) => {
        super.removeEventListener("dataavailable", l), super.removeEventListener("error", y), o(v.data);
      }, y = (v) => {
        super.removeEventListener("dataavailable", l), super.removeEventListener("error", y), n(v);
      };
      super.addEventListener("dataavailable", l), super.addEventListener("error", y), super.stop();
    });
  }
}
const Kb = "1.14.2-2-g141ef90bf0";
export {
  Vb as Dom,
  gp as Effect,
  vb as FrameData,
  Jh as Image,
  zb as ImageCapture,
  Ci as MediaStream,
  ws as MediaStreamCapture,
  Ob as Module,
  Gb as Player,
  Kb as VERSION,
  sp as Video,
  Hb as VideoRecorder,
  Bb as Webcam,
  Op as createSDK,
  Tb as defaultPlayerOptions,
  Xi as defaultVideoConstraints,
  ap as defaultVideoOptions,
  Gh as isBrowserSupported,
  Tp as isSimdSupported,
  kb as timers,
  Nb as utils
};
