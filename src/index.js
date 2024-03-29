import { useEventListener } from "./machinery/useEventListener"
import { useEvent } from "./machinery/useEvent"
import engines from "./engines"

export function useFullscreenVideo({ onChange, onError }) {
  const keysRef = React.useRef(engines.chromium)
  const keys = keysRef.current

  const videoRef = React.useRef(/** @type {HTMLElement|null} */ (null))
  const containerRef = React.useRef(/** @type {HTMLVideoElement|null} */ (null))

  useEventListener(keys.onChangeEvent, onChange)
  useEventListener(keys.onErrorEvent, onError)

  const onRequestEvent = useEvent(handleRequest)
  const onExitEvent = useEvent(handleExit)

  const setRef = React.useCallback((refElement) => {
    return (element) => {
      const data = Object.values(engines).find((methods) => {
        return element && methods?.request in element
      })

      if (data) keysRef.current = data 

      refElement.current = element
    };
  }, [])

  return {
    refs: {
      setContainer: /** @type {(x: HTMLElement) => void} */ (setRef(containerRef)),
      setVideo: /** @type {(x: HTMLVideoElement) => void} */ (setRef(videoRef)),
    },
    element: document[keys.element],
    isFullscreen: Boolean(document[keys.element]),
    isEnabled: Boolean(document[keys.enabled]),
    request: onRequestEvent,
    exit: onExitEvent,
  }

  function handleRequest(options) {
    const isTargetSupported = typeof containerRef.current?.[keys.request] === "function"

    if (containerRef.current === null) return
    if (videoRef.current === null) return

    return isTargetSupported
      ? containerRef.current[keys.request](options)
      : videoRef.current[keys.request](options)
  }

  function handleExit() {
    if (!document[keys.element]) return
    return document[keys.exit]()
  }
} 
