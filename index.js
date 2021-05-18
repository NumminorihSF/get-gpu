

/**
 * Gets the current GPU's info and returns it if can.
 * @returns {{renderer: string | undefined, vendor: string | undefined, debugInfo: WebGLDebugRendererInfo | undefined}}
 */
function getGpu() {
    var canvas = document.createElement('canvas')
    var gl;
    var debugInfo;
    var vendor;
    var renderer;

    try {
        gl = canvas.getContext('webgl') || canvas.getContext('experimental-webgl');
    } catch (e) {
    }

    if (gl) {
        debugInfo = gl.getExtension('WEBGL_debug_renderer_info');
        vendor = gl.getParameter(debugInfo.UNMASKED_VENDOR_WEBGL);
        renderer = gl.getParameter(debugInfo.UNMASKED_RENDERER_WEBGL);
    }

    return {
        debugInfo: debugInfo,
        vendor: vendor,
        renderer: renderer
    }
}

module.exports = getGpu;

module.exports.getGpu = getGpu;
