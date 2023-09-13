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
  let options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : _index.DefaultCodeScannerOptions;
  const [barcodes, setBarcodes] = (0, _react.useState)([]);
  const setBarcodesJS = _reactNativeWorkletsCore.Worklets.createRunInJsFn(setBarcodes);
  const frameProcessor = (0, _reactNativeVisionCamera.useFrameProcessor)(frame => {
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
    const detectedBarcodes = (0, _index.scanBarcodes)(frame, Array.from(types), opts);
    setBarcodesJS(detectedBarcodes);
  }, []);
  return [frameProcessor, barcodes];
}
//# sourceMappingURL=hook.js.map