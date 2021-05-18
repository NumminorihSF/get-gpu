get-gpu
-------

This lib allows to get the GPU info.

## Example
```
const { getGpu } = require('get-gpu');
// or
// const getGpu = require('get-gpu');

const {
    debugInfo, // WebGLDebugRendererInfo (see https://developer.mozilla.org/en-US/docs/Web/API/WEBGL_debug_renderer_info) | undefined
    renderer, // "AMD Radeon Pro 555 OpenGL Engine"
    vendor, // "ATI Technologies Inc."
} = getGpu();
```
