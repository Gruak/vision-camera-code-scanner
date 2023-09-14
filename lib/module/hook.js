import { useFrameProcessor, runAtTargetFps } from 'react-native-vision-camera';
import { Worklets } from 'react-native-worklets-core';
import { useState } from 'react';
import { scanBarcodes } from './index';
export function useScanBarcodes(types) {
  let {
    fps = 1,
    ...options
  } = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
  const [barcodes, setBarcodes] = useState([]);
  const setBarcodesJS = Worklets.createRunInJsFn(setBarcodes);
  const frameProcessor = useFrameProcessor(frame => {
    'worklet';

    runAtTargetFps(fps, () => {
      'worklet';

      const detectedBarcodes = scanBarcodes(frame, types, options);
      setBarcodesJS(detectedBarcodes);
    });
  }, []);
  return [frameProcessor, barcodes];
}
//# sourceMappingURL=hook.js.map