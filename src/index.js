import { eventListenerAttributeId, useEventListener } from "./machinery/useEventListener"
import { useEvent } from "./machinery/useEvent"
import { useId } from "./machinery/useId"

import engines from "./engines"

export function useFullscreenVideo({ onChange, onError, options = undefined }) {
  const [keys, setKeys] = React.useState(engines.chromium)
  const id = useId()

  const videoRef = React.useRef(/** @type {HTMLElement|null} */ (null))
  const containerRef = React.useRef(/** @type {HTMLVideoElement|null} */ (null))

  const { useVideoElement } = options ?? {}

  useEventListener(id, keys.onChangeEvent, onChange)
  useEventListener(id, keys.onErrorEvent, onError)

  const onRequestEvent = useEvent(handleRequest)
  const onExitEvent = useEvent(handleExit)

  const setRef = React.useCallback(ref => {
    return element => {
      if (!element) return

      const data = getMethodsForElement(element)
      if (data) setKeys(data)

      if (ref.current === null) {
        element?.setAttribute(eventListenerAttributeId, id)
        ref.current = element
      }
    };
  }, [])

  return {
    refs: {
      setContainer: /** @type {(x: HTMLElement) => void} */ (setRef(containerRef)),
      setVideo: /** @type {(x: HTMLVideoElement) => void} */ (setRef(videoRef)),
    },
    isFullscreen,
    getElement,
    isEnabled,
    request: onRequestEvent,
    exit: onExitEvent,
    toggle
  }

  function toggle() {
    return isFullscreen() ? onExitEvent() : onRequestEvent()
  }

  function isFullscreen() {
    return Boolean(document[keys.element])
  }

  function getElement() {
    return document[keys.element]
  }

  function isEnabled() {
    return Boolean(document[keys.enabled])
  }

  function handleRequest(options) {
    const isTargetSupported = typeof containerRef.current?.[keys.request] === "function"

    if (containerRef.current === null) return
    if (videoRef.current === null) return

    return isTargetSupported && !useVideoElement
      ? containerRef.current[keys.request](options)?.catch(onError)
      : videoRef.current[keys.request](options)?.catch(onError)
  }

  function handleExit() {
    if (!document[keys.element]) return
    return document[keys.exit]()?.catch(onError)
  }
} 

function getMethodsForElement(x) {
  return Object.values(engines).find((methods) => (
    x && methods?.request in x
  ))
}
