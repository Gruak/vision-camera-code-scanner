import { useFrameProcessor } from 'react-native-vision-camera';
import { Worklets } from 'react-native-worklets-core';
import { useState } from 'react';
import { DefaultCodeScannerOptions, scanBarcodes } from './index';
export function useScanBarcodes(types) {
  let options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : DefaultCodeScannerOptions;
  const [barcodes, setBarcodes] = useState([]);
  const setBarcodesJS = Worklets.createRunInJsFn(setBarcodes);
  const frameProcessor = useFrameProcessor(frame => {
    'worklet';

    // For some reason, arguments to hooks accessed from worklets don't have the same runtime type they
    // are declared as. This leads to tricky errors, hence the Array.from and reduce on the options' keys.
    //
    // Example error:
    // Frame Processor threw an error: Exception in HostFunction: Received an unknown HostObject! Cannot convert to a JNI value.
    const opts = Object.keys(options || {}).reduce((acc, key) => {
      acc[key] = (options || {})[key];
      return acc;
    }, {});
    const detectedBarcodes = scanBarcodes(frame, Array.from(types), opts);
    setBarcodesJS(detectedBarcodes);
  }, []);
  return [frameProcessor, barcodes];
}
//# sourceMappingURL=hook.js.map