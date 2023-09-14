"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.useScanBarcodes = useScanBarcodes;
var _reactNativeVisionCamera = require("react-native-vision-camera");
var _reactNativeWorkletsCore = require("react-native-worklets-core");
var _react = require("react");
var _index = require("./index");
function useScanBarcodes(types) {
  let {
    fps = 1,
    ...options
  } = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
  const [barcodes, setBarcodes] = (0, _react.useState)([]);
  const setBarcodesJS = _reactNativeWorkletsCore.Worklets.createRunInJsFn(setBarcodes);
  const frameProcessor = (0, _reactNativeVisionCamera.useFrameProcessor)(frame => {
    'worklet';

    (0, _reactNativeVisionCamera.runAtTargetFps)(fps, () => {
      'worklet';

      const detectedBarcodes = (0, _index.scanBarcodes)(frame, types, options);
      setBarcodesJS(detectedBarcodes);
    });
  }, []);
  return [frameProcessor, barcodes];
}
//# sourceMappingURL=hook.js.map