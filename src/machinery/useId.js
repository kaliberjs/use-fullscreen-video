import { v4 as uuid } from 'uuid'

export function useId() {
  return React.useRef(generateId())?.current
}

function generateId() {
  return uuid()
}
