import { useFrameProcessor, runAtTargetFps } from 'react-native-vision-camera';
import type { FrameProcessor } from 'react-native-vision-camera';
import { Worklets } from 'react-native-worklets-core';
import { useState } from 'react';

import { BarcodeFormat, scanBarcodes } from './index';
import type { Barcode, CodeScannerOptions } from './index';

interface CodeScannerHookOptions extends CodeScannerOptions {
  fps?: number;
}

export function useScanBarcodes(
  types: BarcodeFormat[],
  { fps = 1, ...options }: CodeScannerHookOptions = {}
): [FrameProcessor, Barcode[]] {
  const [barcodes, setBarcodes] = useState<Barcode[]>([]);
  const setBarcodesJS = Worklets.createRunInJsFn(setBarcodes);

  const frameProcessor = useFrameProcessor((frame) => {
    'worklet';

    runAtTargetFps(fps, () => {
      'worklet';

      const detectedBarcodes = scanBarcodes(frame, types, options);
      setBarcodesJS(detectedBarcodes);
    });
  }, []);

  return [frameProcessor, barcodes];
}
