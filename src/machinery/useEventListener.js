export function useEventListener(name, callback) {
  React.useEffect(
    () => {
        if (name && callback) {
          document.addEventListener(name, callback, false)
        }

        return () => {
          document.removeEventListener(name, callback, false)
        }
    }, 
    [name, callback]
  )
}
