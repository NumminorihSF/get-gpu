/**
 * Gets the current GPU's info and returns it if can.
 */
declare function getGpu(): {
    debugInfo: { [key: string]: unknown } | undefined;
    vendor: string | undefined;
    renderer: string | undefined;
}

export default getGpu;
export { getGpu };
