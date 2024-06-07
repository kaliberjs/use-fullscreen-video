export const eventListenerAttributeId = 'data-fullscreen-id'

export function useEventListener({ id, name, element = undefined, callback }) {
  React.useEffect(
    () => {
      if (name && callback) {
        (element ?? document).addEventListener(name, catchCallback, false)
      }

      return () => {
        (element ?? document).removeEventListener(name, catchCallback, false)
      }
    },
    [name, callback]
  )

  function catchCallback(x) {
    const targetId = x.target?.getAttribute(eventListenerAttributeId)
    if (targetId === id) callback(x)
  }
}
