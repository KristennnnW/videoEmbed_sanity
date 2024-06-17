/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(self["webpackChunk_N_E"] = self["webpackChunk_N_E"] || []).push([["reactPlayerMux"],{

/***/ "./node_modules/react-player/lib/players/Mux.js":
/*!******************************************************!*\
  !*** ./node_modules/react-player/lib/players/Mux.js ***!
  \******************************************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

eval(__webpack_require__.ts("var __create = Object.create;\nvar __defProp = Object.defineProperty;\nvar __getOwnPropDesc = Object.getOwnPropertyDescriptor;\nvar __getOwnPropNames = Object.getOwnPropertyNames;\nvar __getProtoOf = Object.getPrototypeOf;\nvar __hasOwnProp = Object.prototype.hasOwnProperty;\nvar __defNormalProp = (obj, key, value) => key in obj ? __defProp(obj, key, { enumerable: true, configurable: true, writable: true, value }) : obj[key] = value;\nvar __export = (target, all) => {\n  for (var name in all)\n    __defProp(target, name, { get: all[name], enumerable: true });\n};\nvar __copyProps = (to, from, except, desc) => {\n  if (from && typeof from === \"object\" || typeof from === \"function\") {\n    for (let key of __getOwnPropNames(from))\n      if (!__hasOwnProp.call(to, key) && key !== except)\n        __defProp(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc(from, key)) || desc.enumerable });\n  }\n  return to;\n};\nvar __toESM = (mod, isNodeMode, target) => (target = mod != null ? __create(__getProtoOf(mod)) : {}, __copyProps(\n  // If the importer is in node compatibility mode or this is not an ESM\n  // file that has been converted to a CommonJS file using a Babel-\n  // compatible transform (i.e. \"__esModule\" has not been set), then set\n  // \"default\" to the CommonJS \"module.exports\" for node compatibility.\n  isNodeMode || !mod || !mod.__esModule ? __defProp(target, \"default\", { value: mod, enumerable: true }) : target,\n  mod\n));\nvar __toCommonJS = (mod) => __copyProps(__defProp({}, \"__esModule\", { value: true }), mod);\nvar __publicField = (obj, key, value) => {\n  __defNormalProp(obj, typeof key !== \"symbol\" ? key + \"\" : key, value);\n  return value;\n};\nvar Mux_exports = {};\n__export(Mux_exports, {\n  default: () => Mux\n});\nmodule.exports = __toCommonJS(Mux_exports);\nvar import_react = __toESM(__webpack_require__(/*! react */ \"./node_modules/react/index.js\"));\nvar import_patterns = __webpack_require__(/*! ../patterns */ \"./node_modules/react-player/lib/patterns.js\");\nconst SDK_URL = \"https://cdn.jsdelivr.net/npm/@mux/mux-player@VERSION/dist/mux-player.mjs\";\nclass Mux extends import_react.Component {\n  constructor() {\n    super(...arguments);\n    // Proxy methods to prevent listener leaks\n    __publicField(this, \"onReady\", (...args) => this.props.onReady(...args));\n    __publicField(this, \"onPlay\", (...args) => this.props.onPlay(...args));\n    __publicField(this, \"onBuffer\", (...args) => this.props.onBuffer(...args));\n    __publicField(this, \"onBufferEnd\", (...args) => this.props.onBufferEnd(...args));\n    __publicField(this, \"onPause\", (...args) => this.props.onPause(...args));\n    __publicField(this, \"onEnded\", (...args) => this.props.onEnded(...args));\n    __publicField(this, \"onError\", (...args) => this.props.onError(...args));\n    __publicField(this, \"onPlayBackRateChange\", (event) => this.props.onPlaybackRateChange(event.target.playbackRate));\n    __publicField(this, \"onEnablePIP\", (...args) => this.props.onEnablePIP(...args));\n    __publicField(this, \"onSeek\", (e) => {\n      this.props.onSeek(e.target.currentTime);\n    });\n    __publicField(this, \"onDurationChange\", () => {\n      const duration = this.getDuration();\n      this.props.onDuration(duration);\n    });\n    __publicField(this, \"mute\", () => {\n      this.player.muted = true;\n    });\n    __publicField(this, \"unmute\", () => {\n      this.player.muted = false;\n    });\n    __publicField(this, \"ref\", (player) => {\n      this.player = player;\n    });\n  }\n  componentDidMount() {\n    this.props.onMount && this.props.onMount(this);\n    this.addListeners(this.player);\n    const playbackId = this.getPlaybackId(this.props.url);\n    if (playbackId) {\n      this.player.playbackId = playbackId;\n    }\n  }\n  componentWillUnmount() {\n    this.player.playbackId = null;\n    this.removeListeners(this.player);\n  }\n  addListeners(player) {\n    const { playsinline } = this.props;\n    player.addEventListener(\"play\", this.onPlay);\n    player.addEventListener(\"waiting\", this.onBuffer);\n    player.addEventListener(\"playing\", this.onBufferEnd);\n    player.addEventListener(\"pause\", this.onPause);\n    player.addEventListener(\"seeked\", this.onSeek);\n    player.addEventListener(\"ended\", this.onEnded);\n    player.addEventListener(\"error\", this.onError);\n    player.addEventListener(\"ratechange\", this.onPlayBackRateChange);\n    player.addEventListener(\"enterpictureinpicture\", this.onEnablePIP);\n    player.addEventListener(\"leavepictureinpicture\", this.onDisablePIP);\n    player.addEventListener(\"webkitpresentationmodechanged\", this.onPresentationModeChange);\n    player.addEventListener(\"canplay\", this.onReady);\n    if (playsinline) {\n      player.setAttribute(\"playsinline\", \"\");\n    }\n  }\n  removeListeners(player) {\n    player.removeEventListener(\"canplay\", this.onReady);\n    player.removeEventListener(\"play\", this.onPlay);\n    player.removeEventListener(\"waiting\", this.onBuffer);\n    player.removeEventListener(\"playing\", this.onBufferEnd);\n    player.removeEventListener(\"pause\", this.onPause);\n    player.removeEventListener(\"seeked\", this.onSeek);\n    player.removeEventListener(\"ended\", this.onEnded);\n    player.removeEventListener(\"error\", this.onError);\n    player.removeEventListener(\"ratechange\", this.onPlayBackRateChange);\n    player.removeEventListener(\"enterpictureinpicture\", this.onEnablePIP);\n    player.removeEventListener(\"leavepictureinpicture\", this.onDisablePIP);\n    player.removeEventListener(\"canplay\", this.onReady);\n  }\n  async load(url) {\n    var _a;\n    const { onError, config } = this.props;\n    if (!((_a = globalThis.customElements) == null ? void 0 : _a.get(\"mux-player\"))) {\n      try {\n        const sdkUrl = SDK_URL.replace(\"VERSION\", config.version);\n        await import(\n          /* webpackIgnore: true */\n          `${sdkUrl}`\n        );\n        this.props.onLoaded();\n      } catch (error) {\n        onError(error);\n      }\n    }\n    const [, id] = url.match(import_patterns.MATCH_URL_MUX);\n    this.player.playbackId = id;\n  }\n  play() {\n    const promise = this.player.play();\n    if (promise) {\n      promise.catch(this.props.onError);\n    }\n  }\n  pause() {\n    this.player.pause();\n  }\n  stop() {\n    this.player.playbackId = null;\n  }\n  seekTo(seconds, keepPlaying = true) {\n    this.player.currentTime = seconds;\n    if (!keepPlaying) {\n      this.pause();\n    }\n  }\n  setVolume(fraction) {\n    this.player.volume = fraction;\n  }\n  enablePIP() {\n    if (this.player.requestPictureInPicture && document.pictureInPictureElement !== this.player) {\n      this.player.requestPictureInPicture();\n    }\n  }\n  disablePIP() {\n    if (document.exitPictureInPicture && document.pictureInPictureElement === this.player) {\n      document.exitPictureInPicture();\n    }\n  }\n  setPlaybackRate(rate) {\n    try {\n      this.player.playbackRate = rate;\n    } catch (error) {\n      this.props.onError(error);\n    }\n  }\n  getDuration() {\n    if (!this.player)\n      return null;\n    const { duration, seekable } = this.player;\n    if (duration === Infinity && seekable.length > 0) {\n      return seekable.end(seekable.length - 1);\n    }\n    return duration;\n  }\n  getCurrentTime() {\n    if (!this.player)\n      return null;\n    return this.player.currentTime;\n  }\n  getSecondsLoaded() {\n    if (!this.player)\n      return null;\n    const { buffered } = this.player;\n    if (buffered.length === 0) {\n      return 0;\n    }\n    const end = buffered.end(buffered.length - 1);\n    const duration = this.getDuration();\n    if (end > duration) {\n      return duration;\n    }\n    return end;\n  }\n  getPlaybackId(url) {\n    const [, id] = url.match(import_patterns.MATCH_URL_MUX);\n    return id;\n  }\n  render() {\n    const { url, playing, loop, controls, muted, config, width, height } = this.props;\n    const style = {\n      width: width === \"auto\" ? width : \"100%\",\n      height: height === \"auto\" ? height : \"100%\"\n    };\n    if (controls === false) {\n      style[\"--controls\"] = \"none\";\n    }\n    return /* @__PURE__ */ import_react.default.createElement(\n      \"mux-player\",\n      {\n        ref: this.ref,\n        \"playback-id\": this.getPlaybackId(url),\n        style,\n        preload: \"auto\",\n        autoPlay: playing || void 0,\n        muted: muted ? \"\" : void 0,\n        loop: loop ? \"\" : void 0,\n        ...config.attributes\n      }\n    );\n  }\n}\n__publicField(Mux, \"displayName\", \"Mux\");\n__publicField(Mux, \"canPlay\", import_patterns.canPlay.mux);\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9ub2RlX21vZHVsZXMvcmVhY3QtcGxheWVyL2xpYi9wbGF5ZXJzL011eC5qcyIsIm1hcHBpbmdzIjoiQUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSw4RUFBOEUsNkRBQTZEO0FBQzNJO0FBQ0E7QUFDQSw4QkFBOEIsa0NBQWtDO0FBQ2hFO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSw2QkFBNkIsNEZBQTRGO0FBQ3pIO0FBQ0E7QUFDQTtBQUNBLG1HQUFtRztBQUNuRztBQUNBO0FBQ0E7QUFDQTtBQUNBLHlFQUF5RSw4QkFBOEI7QUFDdkc7QUFDQTtBQUNBLG9EQUFvRCxrQkFBa0IsYUFBYTtBQUNuRjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLENBQUM7QUFDRDtBQUNBLDJCQUEyQixtQkFBTyxDQUFDLDRDQUFPO0FBQzFDLHNCQUFzQixtQkFBTyxDQUFDLGdFQUFhO0FBQzNDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsWUFBWSxjQUFjO0FBQzFCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxZQUFZLGtCQUFrQjtBQUM5QjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsYUFBYSxPQUFPO0FBQ3BCO0FBQ0E7QUFDQSxRQUFRO0FBQ1I7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxNQUFNO0FBQ047QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsWUFBWSxxQkFBcUI7QUFDakM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxZQUFZLFdBQVc7QUFDdkI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsWUFBWSw2REFBNkQ7QUFDekU7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL25vZGVfbW9kdWxlcy9yZWFjdC1wbGF5ZXIvbGliL3BsYXllcnMvTXV4LmpzP2MzMjEiXSwic291cmNlc0NvbnRlbnQiOlsidmFyIF9fY3JlYXRlID0gT2JqZWN0LmNyZWF0ZTtcbnZhciBfX2RlZlByb3AgPSBPYmplY3QuZGVmaW5lUHJvcGVydHk7XG52YXIgX19nZXRPd25Qcm9wRGVzYyA9IE9iamVjdC5nZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3I7XG52YXIgX19nZXRPd25Qcm9wTmFtZXMgPSBPYmplY3QuZ2V0T3duUHJvcGVydHlOYW1lcztcbnZhciBfX2dldFByb3RvT2YgPSBPYmplY3QuZ2V0UHJvdG90eXBlT2Y7XG52YXIgX19oYXNPd25Qcm9wID0gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eTtcbnZhciBfX2RlZk5vcm1hbFByb3AgPSAob2JqLCBrZXksIHZhbHVlKSA9PiBrZXkgaW4gb2JqID8gX19kZWZQcm9wKG9iaiwga2V5LCB7IGVudW1lcmFibGU6IHRydWUsIGNvbmZpZ3VyYWJsZTogdHJ1ZSwgd3JpdGFibGU6IHRydWUsIHZhbHVlIH0pIDogb2JqW2tleV0gPSB2YWx1ZTtcbnZhciBfX2V4cG9ydCA9ICh0YXJnZXQsIGFsbCkgPT4ge1xuICBmb3IgKHZhciBuYW1lIGluIGFsbClcbiAgICBfX2RlZlByb3AodGFyZ2V0LCBuYW1lLCB7IGdldDogYWxsW25hbWVdLCBlbnVtZXJhYmxlOiB0cnVlIH0pO1xufTtcbnZhciBfX2NvcHlQcm9wcyA9ICh0bywgZnJvbSwgZXhjZXB0LCBkZXNjKSA9PiB7XG4gIGlmIChmcm9tICYmIHR5cGVvZiBmcm9tID09PSBcIm9iamVjdFwiIHx8IHR5cGVvZiBmcm9tID09PSBcImZ1bmN0aW9uXCIpIHtcbiAgICBmb3IgKGxldCBrZXkgb2YgX19nZXRPd25Qcm9wTmFtZXMoZnJvbSkpXG4gICAgICBpZiAoIV9faGFzT3duUHJvcC5jYWxsKHRvLCBrZXkpICYmIGtleSAhPT0gZXhjZXB0KVxuICAgICAgICBfX2RlZlByb3AodG8sIGtleSwgeyBnZXQ6ICgpID0+IGZyb21ba2V5XSwgZW51bWVyYWJsZTogIShkZXNjID0gX19nZXRPd25Qcm9wRGVzYyhmcm9tLCBrZXkpKSB8fCBkZXNjLmVudW1lcmFibGUgfSk7XG4gIH1cbiAgcmV0dXJuIHRvO1xufTtcbnZhciBfX3RvRVNNID0gKG1vZCwgaXNOb2RlTW9kZSwgdGFyZ2V0KSA9PiAodGFyZ2V0ID0gbW9kICE9IG51bGwgPyBfX2NyZWF0ZShfX2dldFByb3RvT2YobW9kKSkgOiB7fSwgX19jb3B5UHJvcHMoXG4gIC8vIElmIHRoZSBpbXBvcnRlciBpcyBpbiBub2RlIGNvbXBhdGliaWxpdHkgbW9kZSBvciB0aGlzIGlzIG5vdCBhbiBFU01cbiAgLy8gZmlsZSB0aGF0IGhhcyBiZWVuIGNvbnZlcnRlZCB0byBhIENvbW1vbkpTIGZpbGUgdXNpbmcgYSBCYWJlbC1cbiAgLy8gY29tcGF0aWJsZSB0cmFuc2Zvcm0gKGkuZS4gXCJfX2VzTW9kdWxlXCIgaGFzIG5vdCBiZWVuIHNldCksIHRoZW4gc2V0XG4gIC8vIFwiZGVmYXVsdFwiIHRvIHRoZSBDb21tb25KUyBcIm1vZHVsZS5leHBvcnRzXCIgZm9yIG5vZGUgY29tcGF0aWJpbGl0eS5cbiAgaXNOb2RlTW9kZSB8fCAhbW9kIHx8ICFtb2QuX19lc01vZHVsZSA/IF9fZGVmUHJvcCh0YXJnZXQsIFwiZGVmYXVsdFwiLCB7IHZhbHVlOiBtb2QsIGVudW1lcmFibGU6IHRydWUgfSkgOiB0YXJnZXQsXG4gIG1vZFxuKSk7XG52YXIgX190b0NvbW1vbkpTID0gKG1vZCkgPT4gX19jb3B5UHJvcHMoX19kZWZQcm9wKHt9LCBcIl9fZXNNb2R1bGVcIiwgeyB2YWx1ZTogdHJ1ZSB9KSwgbW9kKTtcbnZhciBfX3B1YmxpY0ZpZWxkID0gKG9iaiwga2V5LCB2YWx1ZSkgPT4ge1xuICBfX2RlZk5vcm1hbFByb3Aob2JqLCB0eXBlb2Yga2V5ICE9PSBcInN5bWJvbFwiID8ga2V5ICsgXCJcIiA6IGtleSwgdmFsdWUpO1xuICByZXR1cm4gdmFsdWU7XG59O1xudmFyIE11eF9leHBvcnRzID0ge307XG5fX2V4cG9ydChNdXhfZXhwb3J0cywge1xuICBkZWZhdWx0OiAoKSA9PiBNdXhcbn0pO1xubW9kdWxlLmV4cG9ydHMgPSBfX3RvQ29tbW9uSlMoTXV4X2V4cG9ydHMpO1xudmFyIGltcG9ydF9yZWFjdCA9IF9fdG9FU00ocmVxdWlyZShcInJlYWN0XCIpKTtcbnZhciBpbXBvcnRfcGF0dGVybnMgPSByZXF1aXJlKFwiLi4vcGF0dGVybnNcIik7XG5jb25zdCBTREtfVVJMID0gXCJodHRwczovL2Nkbi5qc2RlbGl2ci5uZXQvbnBtL0BtdXgvbXV4LXBsYXllckBWRVJTSU9OL2Rpc3QvbXV4LXBsYXllci5tanNcIjtcbmNsYXNzIE11eCBleHRlbmRzIGltcG9ydF9yZWFjdC5Db21wb25lbnQge1xuICBjb25zdHJ1Y3RvcigpIHtcbiAgICBzdXBlciguLi5hcmd1bWVudHMpO1xuICAgIC8vIFByb3h5IG1ldGhvZHMgdG8gcHJldmVudCBsaXN0ZW5lciBsZWFrc1xuICAgIF9fcHVibGljRmllbGQodGhpcywgXCJvblJlYWR5XCIsICguLi5hcmdzKSA9PiB0aGlzLnByb3BzLm9uUmVhZHkoLi4uYXJncykpO1xuICAgIF9fcHVibGljRmllbGQodGhpcywgXCJvblBsYXlcIiwgKC4uLmFyZ3MpID0+IHRoaXMucHJvcHMub25QbGF5KC4uLmFyZ3MpKTtcbiAgICBfX3B1YmxpY0ZpZWxkKHRoaXMsIFwib25CdWZmZXJcIiwgKC4uLmFyZ3MpID0+IHRoaXMucHJvcHMub25CdWZmZXIoLi4uYXJncykpO1xuICAgIF9fcHVibGljRmllbGQodGhpcywgXCJvbkJ1ZmZlckVuZFwiLCAoLi4uYXJncykgPT4gdGhpcy5wcm9wcy5vbkJ1ZmZlckVuZCguLi5hcmdzKSk7XG4gICAgX19wdWJsaWNGaWVsZCh0aGlzLCBcIm9uUGF1c2VcIiwgKC4uLmFyZ3MpID0+IHRoaXMucHJvcHMub25QYXVzZSguLi5hcmdzKSk7XG4gICAgX19wdWJsaWNGaWVsZCh0aGlzLCBcIm9uRW5kZWRcIiwgKC4uLmFyZ3MpID0+IHRoaXMucHJvcHMub25FbmRlZCguLi5hcmdzKSk7XG4gICAgX19wdWJsaWNGaWVsZCh0aGlzLCBcIm9uRXJyb3JcIiwgKC4uLmFyZ3MpID0+IHRoaXMucHJvcHMub25FcnJvciguLi5hcmdzKSk7XG4gICAgX19wdWJsaWNGaWVsZCh0aGlzLCBcIm9uUGxheUJhY2tSYXRlQ2hhbmdlXCIsIChldmVudCkgPT4gdGhpcy5wcm9wcy5vblBsYXliYWNrUmF0ZUNoYW5nZShldmVudC50YXJnZXQucGxheWJhY2tSYXRlKSk7XG4gICAgX19wdWJsaWNGaWVsZCh0aGlzLCBcIm9uRW5hYmxlUElQXCIsICguLi5hcmdzKSA9PiB0aGlzLnByb3BzLm9uRW5hYmxlUElQKC4uLmFyZ3MpKTtcbiAgICBfX3B1YmxpY0ZpZWxkKHRoaXMsIFwib25TZWVrXCIsIChlKSA9PiB7XG4gICAgICB0aGlzLnByb3BzLm9uU2VlayhlLnRhcmdldC5jdXJyZW50VGltZSk7XG4gICAgfSk7XG4gICAgX19wdWJsaWNGaWVsZCh0aGlzLCBcIm9uRHVyYXRpb25DaGFuZ2VcIiwgKCkgPT4ge1xuICAgICAgY29uc3QgZHVyYXRpb24gPSB0aGlzLmdldER1cmF0aW9uKCk7XG4gICAgICB0aGlzLnByb3BzLm9uRHVyYXRpb24oZHVyYXRpb24pO1xuICAgIH0pO1xuICAgIF9fcHVibGljRmllbGQodGhpcywgXCJtdXRlXCIsICgpID0+IHtcbiAgICAgIHRoaXMucGxheWVyLm11dGVkID0gdHJ1ZTtcbiAgICB9KTtcbiAgICBfX3B1YmxpY0ZpZWxkKHRoaXMsIFwidW5tdXRlXCIsICgpID0+IHtcbiAgICAgIHRoaXMucGxheWVyLm11dGVkID0gZmFsc2U7XG4gICAgfSk7XG4gICAgX19wdWJsaWNGaWVsZCh0aGlzLCBcInJlZlwiLCAocGxheWVyKSA9PiB7XG4gICAgICB0aGlzLnBsYXllciA9IHBsYXllcjtcbiAgICB9KTtcbiAgfVxuICBjb21wb25lbnREaWRNb3VudCgpIHtcbiAgICB0aGlzLnByb3BzLm9uTW91bnQgJiYgdGhpcy5wcm9wcy5vbk1vdW50KHRoaXMpO1xuICAgIHRoaXMuYWRkTGlzdGVuZXJzKHRoaXMucGxheWVyKTtcbiAgICBjb25zdCBwbGF5YmFja0lkID0gdGhpcy5nZXRQbGF5YmFja0lkKHRoaXMucHJvcHMudXJsKTtcbiAgICBpZiAocGxheWJhY2tJZCkge1xuICAgICAgdGhpcy5wbGF5ZXIucGxheWJhY2tJZCA9IHBsYXliYWNrSWQ7XG4gICAgfVxuICB9XG4gIGNvbXBvbmVudFdpbGxVbm1vdW50KCkge1xuICAgIHRoaXMucGxheWVyLnBsYXliYWNrSWQgPSBudWxsO1xuICAgIHRoaXMucmVtb3ZlTGlzdGVuZXJzKHRoaXMucGxheWVyKTtcbiAgfVxuICBhZGRMaXN0ZW5lcnMocGxheWVyKSB7XG4gICAgY29uc3QgeyBwbGF5c2lubGluZSB9ID0gdGhpcy5wcm9wcztcbiAgICBwbGF5ZXIuYWRkRXZlbnRMaXN0ZW5lcihcInBsYXlcIiwgdGhpcy5vblBsYXkpO1xuICAgIHBsYXllci5hZGRFdmVudExpc3RlbmVyKFwid2FpdGluZ1wiLCB0aGlzLm9uQnVmZmVyKTtcbiAgICBwbGF5ZXIuYWRkRXZlbnRMaXN0ZW5lcihcInBsYXlpbmdcIiwgdGhpcy5vbkJ1ZmZlckVuZCk7XG4gICAgcGxheWVyLmFkZEV2ZW50TGlzdGVuZXIoXCJwYXVzZVwiLCB0aGlzLm9uUGF1c2UpO1xuICAgIHBsYXllci5hZGRFdmVudExpc3RlbmVyKFwic2Vla2VkXCIsIHRoaXMub25TZWVrKTtcbiAgICBwbGF5ZXIuYWRkRXZlbnRMaXN0ZW5lcihcImVuZGVkXCIsIHRoaXMub25FbmRlZCk7XG4gICAgcGxheWVyLmFkZEV2ZW50TGlzdGVuZXIoXCJlcnJvclwiLCB0aGlzLm9uRXJyb3IpO1xuICAgIHBsYXllci5hZGRFdmVudExpc3RlbmVyKFwicmF0ZWNoYW5nZVwiLCB0aGlzLm9uUGxheUJhY2tSYXRlQ2hhbmdlKTtcbiAgICBwbGF5ZXIuYWRkRXZlbnRMaXN0ZW5lcihcImVudGVycGljdHVyZWlucGljdHVyZVwiLCB0aGlzLm9uRW5hYmxlUElQKTtcbiAgICBwbGF5ZXIuYWRkRXZlbnRMaXN0ZW5lcihcImxlYXZlcGljdHVyZWlucGljdHVyZVwiLCB0aGlzLm9uRGlzYWJsZVBJUCk7XG4gICAgcGxheWVyLmFkZEV2ZW50TGlzdGVuZXIoXCJ3ZWJraXRwcmVzZW50YXRpb25tb2RlY2hhbmdlZFwiLCB0aGlzLm9uUHJlc2VudGF0aW9uTW9kZUNoYW5nZSk7XG4gICAgcGxheWVyLmFkZEV2ZW50TGlzdGVuZXIoXCJjYW5wbGF5XCIsIHRoaXMub25SZWFkeSk7XG4gICAgaWYgKHBsYXlzaW5saW5lKSB7XG4gICAgICBwbGF5ZXIuc2V0QXR0cmlidXRlKFwicGxheXNpbmxpbmVcIiwgXCJcIik7XG4gICAgfVxuICB9XG4gIHJlbW92ZUxpc3RlbmVycyhwbGF5ZXIpIHtcbiAgICBwbGF5ZXIucmVtb3ZlRXZlbnRMaXN0ZW5lcihcImNhbnBsYXlcIiwgdGhpcy5vblJlYWR5KTtcbiAgICBwbGF5ZXIucmVtb3ZlRXZlbnRMaXN0ZW5lcihcInBsYXlcIiwgdGhpcy5vblBsYXkpO1xuICAgIHBsYXllci5yZW1vdmVFdmVudExpc3RlbmVyKFwid2FpdGluZ1wiLCB0aGlzLm9uQnVmZmVyKTtcbiAgICBwbGF5ZXIucmVtb3ZlRXZlbnRMaXN0ZW5lcihcInBsYXlpbmdcIiwgdGhpcy5vbkJ1ZmZlckVuZCk7XG4gICAgcGxheWVyLnJlbW92ZUV2ZW50TGlzdGVuZXIoXCJwYXVzZVwiLCB0aGlzLm9uUGF1c2UpO1xuICAgIHBsYXllci5yZW1vdmVFdmVudExpc3RlbmVyKFwic2Vla2VkXCIsIHRoaXMub25TZWVrKTtcbiAgICBwbGF5ZXIucmVtb3ZlRXZlbnRMaXN0ZW5lcihcImVuZGVkXCIsIHRoaXMub25FbmRlZCk7XG4gICAgcGxheWVyLnJlbW92ZUV2ZW50TGlzdGVuZXIoXCJlcnJvclwiLCB0aGlzLm9uRXJyb3IpO1xuICAgIHBsYXllci5yZW1vdmVFdmVudExpc3RlbmVyKFwicmF0ZWNoYW5nZVwiLCB0aGlzLm9uUGxheUJhY2tSYXRlQ2hhbmdlKTtcbiAgICBwbGF5ZXIucmVtb3ZlRXZlbnRMaXN0ZW5lcihcImVudGVycGljdHVyZWlucGljdHVyZVwiLCB0aGlzLm9uRW5hYmxlUElQKTtcbiAgICBwbGF5ZXIucmVtb3ZlRXZlbnRMaXN0ZW5lcihcImxlYXZlcGljdHVyZWlucGljdHVyZVwiLCB0aGlzLm9uRGlzYWJsZVBJUCk7XG4gICAgcGxheWVyLnJlbW92ZUV2ZW50TGlzdGVuZXIoXCJjYW5wbGF5XCIsIHRoaXMub25SZWFkeSk7XG4gIH1cbiAgYXN5bmMgbG9hZCh1cmwpIHtcbiAgICB2YXIgX2E7XG4gICAgY29uc3QgeyBvbkVycm9yLCBjb25maWcgfSA9IHRoaXMucHJvcHM7XG4gICAgaWYgKCEoKF9hID0gZ2xvYmFsVGhpcy5jdXN0b21FbGVtZW50cykgPT0gbnVsbCA/IHZvaWQgMCA6IF9hLmdldChcIm11eC1wbGF5ZXJcIikpKSB7XG4gICAgICB0cnkge1xuICAgICAgICBjb25zdCBzZGtVcmwgPSBTREtfVVJMLnJlcGxhY2UoXCJWRVJTSU9OXCIsIGNvbmZpZy52ZXJzaW9uKTtcbiAgICAgICAgYXdhaXQgaW1wb3J0KFxuICAgICAgICAgIC8qIHdlYnBhY2tJZ25vcmU6IHRydWUgKi9cbiAgICAgICAgICBgJHtzZGtVcmx9YFxuICAgICAgICApO1xuICAgICAgICB0aGlzLnByb3BzLm9uTG9hZGVkKCk7XG4gICAgICB9IGNhdGNoIChlcnJvcikge1xuICAgICAgICBvbkVycm9yKGVycm9yKTtcbiAgICAgIH1cbiAgICB9XG4gICAgY29uc3QgWywgaWRdID0gdXJsLm1hdGNoKGltcG9ydF9wYXR0ZXJucy5NQVRDSF9VUkxfTVVYKTtcbiAgICB0aGlzLnBsYXllci5wbGF5YmFja0lkID0gaWQ7XG4gIH1cbiAgcGxheSgpIHtcbiAgICBjb25zdCBwcm9taXNlID0gdGhpcy5wbGF5ZXIucGxheSgpO1xuICAgIGlmIChwcm9taXNlKSB7XG4gICAgICBwcm9taXNlLmNhdGNoKHRoaXMucHJvcHMub25FcnJvcik7XG4gICAgfVxuICB9XG4gIHBhdXNlKCkge1xuICAgIHRoaXMucGxheWVyLnBhdXNlKCk7XG4gIH1cbiAgc3RvcCgpIHtcbiAgICB0aGlzLnBsYXllci5wbGF5YmFja0lkID0gbnVsbDtcbiAgfVxuICBzZWVrVG8oc2Vjb25kcywga2VlcFBsYXlpbmcgPSB0cnVlKSB7XG4gICAgdGhpcy5wbGF5ZXIuY3VycmVudFRpbWUgPSBzZWNvbmRzO1xuICAgIGlmICgha2VlcFBsYXlpbmcpIHtcbiAgICAgIHRoaXMucGF1c2UoKTtcbiAgICB9XG4gIH1cbiAgc2V0Vm9sdW1lKGZyYWN0aW9uKSB7XG4gICAgdGhpcy5wbGF5ZXIudm9sdW1lID0gZnJhY3Rpb247XG4gIH1cbiAgZW5hYmxlUElQKCkge1xuICAgIGlmICh0aGlzLnBsYXllci5yZXF1ZXN0UGljdHVyZUluUGljdHVyZSAmJiBkb2N1bWVudC5waWN0dXJlSW5QaWN0dXJlRWxlbWVudCAhPT0gdGhpcy5wbGF5ZXIpIHtcbiAgICAgIHRoaXMucGxheWVyLnJlcXVlc3RQaWN0dXJlSW5QaWN0dXJlKCk7XG4gICAgfVxuICB9XG4gIGRpc2FibGVQSVAoKSB7XG4gICAgaWYgKGRvY3VtZW50LmV4aXRQaWN0dXJlSW5QaWN0dXJlICYmIGRvY3VtZW50LnBpY3R1cmVJblBpY3R1cmVFbGVtZW50ID09PSB0aGlzLnBsYXllcikge1xuICAgICAgZG9jdW1lbnQuZXhpdFBpY3R1cmVJblBpY3R1cmUoKTtcbiAgICB9XG4gIH1cbiAgc2V0UGxheWJhY2tSYXRlKHJhdGUpIHtcbiAgICB0cnkge1xuICAgICAgdGhpcy5wbGF5ZXIucGxheWJhY2tSYXRlID0gcmF0ZTtcbiAgICB9IGNhdGNoIChlcnJvcikge1xuICAgICAgdGhpcy5wcm9wcy5vbkVycm9yKGVycm9yKTtcbiAgICB9XG4gIH1cbiAgZ2V0RHVyYXRpb24oKSB7XG4gICAgaWYgKCF0aGlzLnBsYXllcilcbiAgICAgIHJldHVybiBudWxsO1xuICAgIGNvbnN0IHsgZHVyYXRpb24sIHNlZWthYmxlIH0gPSB0aGlzLnBsYXllcjtcbiAgICBpZiAoZHVyYXRpb24gPT09IEluZmluaXR5ICYmIHNlZWthYmxlLmxlbmd0aCA+IDApIHtcbiAgICAgIHJldHVybiBzZWVrYWJsZS5lbmQoc2Vla2FibGUubGVuZ3RoIC0gMSk7XG4gICAgfVxuICAgIHJldHVybiBkdXJhdGlvbjtcbiAgfVxuICBnZXRDdXJyZW50VGltZSgpIHtcbiAgICBpZiAoIXRoaXMucGxheWVyKVxuICAgICAgcmV0dXJuIG51bGw7XG4gICAgcmV0dXJuIHRoaXMucGxheWVyLmN1cnJlbnRUaW1lO1xuICB9XG4gIGdldFNlY29uZHNMb2FkZWQoKSB7XG4gICAgaWYgKCF0aGlzLnBsYXllcilcbiAgICAgIHJldHVybiBudWxsO1xuICAgIGNvbnN0IHsgYnVmZmVyZWQgfSA9IHRoaXMucGxheWVyO1xuICAgIGlmIChidWZmZXJlZC5sZW5ndGggPT09IDApIHtcbiAgICAgIHJldHVybiAwO1xuICAgIH1cbiAgICBjb25zdCBlbmQgPSBidWZmZXJlZC5lbmQoYnVmZmVyZWQubGVuZ3RoIC0gMSk7XG4gICAgY29uc3QgZHVyYXRpb24gPSB0aGlzLmdldER1cmF0aW9uKCk7XG4gICAgaWYgKGVuZCA+IGR1cmF0aW9uKSB7XG4gICAgICByZXR1cm4gZHVyYXRpb247XG4gICAgfVxuICAgIHJldHVybiBlbmQ7XG4gIH1cbiAgZ2V0UGxheWJhY2tJZCh1cmwpIHtcbiAgICBjb25zdCBbLCBpZF0gPSB1cmwubWF0Y2goaW1wb3J0X3BhdHRlcm5zLk1BVENIX1VSTF9NVVgpO1xuICAgIHJldHVybiBpZDtcbiAgfVxuICByZW5kZXIoKSB7XG4gICAgY29uc3QgeyB1cmwsIHBsYXlpbmcsIGxvb3AsIGNvbnRyb2xzLCBtdXRlZCwgY29uZmlnLCB3aWR0aCwgaGVpZ2h0IH0gPSB0aGlzLnByb3BzO1xuICAgIGNvbnN0IHN0eWxlID0ge1xuICAgICAgd2lkdGg6IHdpZHRoID09PSBcImF1dG9cIiA/IHdpZHRoIDogXCIxMDAlXCIsXG4gICAgICBoZWlnaHQ6IGhlaWdodCA9PT0gXCJhdXRvXCIgPyBoZWlnaHQgOiBcIjEwMCVcIlxuICAgIH07XG4gICAgaWYgKGNvbnRyb2xzID09PSBmYWxzZSkge1xuICAgICAgc3R5bGVbXCItLWNvbnRyb2xzXCJdID0gXCJub25lXCI7XG4gICAgfVxuICAgIHJldHVybiAvKiBAX19QVVJFX18gKi8gaW1wb3J0X3JlYWN0LmRlZmF1bHQuY3JlYXRlRWxlbWVudChcbiAgICAgIFwibXV4LXBsYXllclwiLFxuICAgICAge1xuICAgICAgICByZWY6IHRoaXMucmVmLFxuICAgICAgICBcInBsYXliYWNrLWlkXCI6IHRoaXMuZ2V0UGxheWJhY2tJZCh1cmwpLFxuICAgICAgICBzdHlsZSxcbiAgICAgICAgcHJlbG9hZDogXCJhdXRvXCIsXG4gICAgICAgIGF1dG9QbGF5OiBwbGF5aW5nIHx8IHZvaWQgMCxcbiAgICAgICAgbXV0ZWQ6IG11dGVkID8gXCJcIiA6IHZvaWQgMCxcbiAgICAgICAgbG9vcDogbG9vcCA/IFwiXCIgOiB2b2lkIDAsXG4gICAgICAgIC4uLmNvbmZpZy5hdHRyaWJ1dGVzXG4gICAgICB9XG4gICAgKTtcbiAgfVxufVxuX19wdWJsaWNGaWVsZChNdXgsIFwiZGlzcGxheU5hbWVcIiwgXCJNdXhcIik7XG5fX3B1YmxpY0ZpZWxkKE11eCwgXCJjYW5QbGF5XCIsIGltcG9ydF9wYXR0ZXJucy5jYW5QbGF5Lm11eCk7XG4iXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./node_modules/react-player/lib/players/Mux.js\n"));

/***/ })

}]);