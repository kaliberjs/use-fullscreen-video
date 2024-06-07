export default {
  chromium: {
    request: "requestFullscreen",
    exit: "exitFullscreen",
    element: "fullscreenElement",
    enabled: "fullscreenEnabled",
    onChangeEvent: "fullscreenchange",
    onErrorEvent: "fullscreenerror",
  },
  webkitMobile: {
    /** @see https://developer.apple.com/documentation/webkitjs/htmlvideoelement/1633500-webkitenterfullscreen */
    request: "webkitEnterFullscreen",
    exit: "webkitExitFullscreen",
    element: "webkitFullscreenElement",
    enabled: "webkitFullscreenEnabled",
    onChangeEvent: "webkitfullscreenchange",
    onErrorEvent: "webkitfullscreenerror",

    /**
     * Fullscreen end has a different events on iOS.
     * @see https://stackoverflow.com/questions/32228024/how-to-detect-ios-leaving-fullscreen-video
     */
    onEndEvent: "webkitendfullscreen",
    onStartEvent: "webkitbeginfullscreen",
  },
  webkitDesktop: {
    request: "webkitRequestFullscreen",
    exit: "webkitExitFullscreen",
    element: "webkitFullscreenElement",
    enabled: "webkitFullscreenEnabled",
    onChangeEvent: "webkitfullscreenchange",
    onErrorEvent: "webkitfullscreenerror",

    /**
     * Fullscreen end has a different events on macOS.
     * @see https://stackoverflow.com/questions/32228024/how-to-detect-ios-leaving-fullscreen-video
     */
    onEndEvent: "webkitendfullscreen",
    onStartEvent: "webkitbeginfullscreen",
  },
  mozilla: {
    request: "mozRequestFullscreen",
    exit: "mozExitFullscreen",
    element: "mozFullscreenElement",
    enabled: "mozFullscreenEnabled",
    onChangeEvent: "mozfullscreenchange",
    onErrorEvent: "mozfullscreenerror",
  },
  microsoft: {
    request: "msRequestFullscreen",
    exit: "msExitFullscreen",
    element: "msFullscreenElement",
    enabled: "msFullscreenEnabled",
    onChangeEvent: "msfullscreenChange",
    onErrorEvent: "msfullscreenError",
  },
}
