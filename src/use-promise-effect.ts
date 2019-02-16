import { useEffect } from 'react'

export default function usePromiseEffect(
  effect: () => Promise<void | (() => void)> | (() => () => void | void),
  deps?: ReadonlyArray<any> | undefined
) {
  return useEffect(() => {
    const valueOrPromise = effect()
    return () => {
      Promise.resolve(valueOrPromise).then(cleanup => cleanup && cleanup())
    }
  }, deps)
}
