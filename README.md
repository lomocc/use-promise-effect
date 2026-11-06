# use-promise-effect

支持同步或异步方法的 `useEffect`（`useEffect` with Asyn & Sync）

## Install

`npm install use-promise-effect` or `yarn add use-promise-effect`

## Example:

### Default

```js
import usePromiseEffect from 'use-promise-effect';

usePromiseEffect(async () => {
    await fetch('...');
    ...
    return ()=>{
        // do cancel
    };
});
```
