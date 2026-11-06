import { useEffect, EffectCallback, DependencyList } from 'react'
export default function usePromiseEffect(
  effect: (() => Promise<void | (() => void | undefined)>) | EffectCallback,
  deps?: DependencyList
) {
  return useEffect(() => {
    const valueOrPromise = effect()
    return () => {
      Promise.resolve(valueOrPromise).then(cleanup => typeof cleanup === 'function' && cleanup())
    }
  }, deps)
}
