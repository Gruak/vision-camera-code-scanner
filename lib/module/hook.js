import { useFrameProcessor } from 'react-native-vision-camera';
import { Worklets } from 'react-native-worklets-core';
import { useState } from 'react';
import { scanBarcodes } from './index';
export function useScanBarcodes(types, options) {
  const [barcodes, setBarcodes] = useState([]);
  const setBarcodesJS = Worklets.createRunInJsFn(setBarcodes);
  const frameProcessor = useFrameProcessor(frame => {
    'worklet';

    const detectedBarcodes = scanBarcodes(frame, types, options);
    setBarcodesJS(detectedBarcodes);
  }, []);
  return [frameProcessor, barcodes];
}
//# sourceMappingURL=hook.js.map