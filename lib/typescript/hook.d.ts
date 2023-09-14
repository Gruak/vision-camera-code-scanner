import type { FrameProcessor } from 'react-native-vision-camera';
import { BarcodeFormat } from './index';
import type { Barcode, CodeScannerOptions } from './index';
interface CodeScannerHookOptions extends CodeScannerOptions {
    fps?: number;
}
export declare function useScanBarcodes(types: BarcodeFormat[], { fps, ...options }?: CodeScannerHookOptions): [FrameProcessor, Barcode[]];
export {};
//# sourceMappingURL=hook.d.ts.map