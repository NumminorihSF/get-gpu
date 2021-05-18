const {getGpu} = require('./index');

let originalCreateElement = document.createElement;
describe('get-gpu', () => {
    afterEach(() => {
        document.createElement = originalCreateElement;
    });

    it('returns object with undefined as fields\' values if canvas is unsupported', () => {
        document.createElement = () => originalCreateElement.call(document, 'div');
        expect(getGpu()).toEqual({
            debugInfo: undefined,
            vendor: undefined,
            renderer: undefined,
        });
    });

    it('returns object with correct fields if canvas is supported', () => {
        const extension = {
                UNMASKED_VENDOR_WEBGL: 'UNMASKED_VENDOR_WEBGL_VALUE',
                UNMASKED_RENDERER_WEBGL: 'UNMASKED_RENDERER_WEBGL_VALUE',
        };

        const context = {
            getParameter: name => `${name}.parameter-value`,
            getExtension: () => extension,
        };


        document.createElement = () => ({
            getContext: () => context
        });

        expect(getGpu()).toEqual({
            debugInfo: extension,
            vendor: 'UNMASKED_VENDOR_WEBGL_VALUE.parameter-value',
            renderer: 'UNMASKED_RENDERER_WEBGL_VALUE.parameter-value',
        });
    });
})
