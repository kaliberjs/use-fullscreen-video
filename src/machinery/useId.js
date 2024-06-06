export function useId() {
  return React.useRef(generateId())?.current
}

function generateId() {
  return crypto.randomUUID()
}
