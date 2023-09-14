"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
var _exportNames = {
  BarcodeFormat: true,
  BarcodeValueType: true,
  AddressType: true,
  EmailType: true,
  PhoneType: true,
  EncryptionType: true,
  defaultCodeScannerOptions: true,
  scanBarcodes: true
};
exports.defaultCodeScannerOptions = exports.PhoneType = exports.EncryptionType = exports.EmailType = exports.BarcodeValueType = exports.BarcodeFormat = exports.AddressType = void 0;
exports.scanBarcodes = scanBarcodes;
var _reactNativeVisionCamera = require("react-native-vision-camera");
var _hook = require("./hook");
Object.keys(_hook).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  if (Object.prototype.hasOwnProperty.call(_exportNames, key)) return;
  if (key in exports && exports[key] === _hook[key]) return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function () {
      return _hook[key];
    }
  });
});
/**
 * @see https://developers.google.com/android/reference/com/google/mlkit/vision/barcode/Barcode.BarcodeFormat
 */
let BarcodeFormat = /*#__PURE__*/function (BarcodeFormat) {
  BarcodeFormat[BarcodeFormat["UNKNOWN"] = -1] = "UNKNOWN";
  BarcodeFormat[BarcodeFormat["ALL_FORMATS"] = 0] = "ALL_FORMATS";
  BarcodeFormat[BarcodeFormat["CODE_128"] = 1] = "CODE_128";
  BarcodeFormat[BarcodeFormat["CODE_39"] = 2] = "CODE_39";
  BarcodeFormat[BarcodeFormat["CODE_93"] = 4] = "CODE_93";
  BarcodeFormat[BarcodeFormat["CODABAR"] = 8] = "CODABAR";
  BarcodeFormat[BarcodeFormat["DATA_MATRIX"] = 16] = "DATA_MATRIX";
  BarcodeFormat[BarcodeFormat["EAN_13"] = 32] = "EAN_13";
  BarcodeFormat[BarcodeFormat["EAN_8"] = 64] = "EAN_8";
  BarcodeFormat[BarcodeFormat["ITF"] = 128] = "ITF";
  BarcodeFormat[BarcodeFormat["QR_CODE"] = 256] = "QR_CODE";
  BarcodeFormat[BarcodeFormat["UPC_A"] = 512] = "UPC_A";
  BarcodeFormat[BarcodeFormat["UPC_E"] = 1024] = "UPC_E";
  BarcodeFormat[BarcodeFormat["PDF417"] = 2048] = "PDF417";
  BarcodeFormat[BarcodeFormat["AZTEC"] = 4096] = "AZTEC";
  return BarcodeFormat;
}({});
/**
 * @see https://developers.google.com/android/reference/com/google/mlkit/vision/barcode/Barcode.BarcodeValueType
 */
exports.BarcodeFormat = BarcodeFormat;
let BarcodeValueType = /*#__PURE__*/function (BarcodeValueType) {
  BarcodeValueType[BarcodeValueType["UNKNOWN"] = 0] = "UNKNOWN";
  BarcodeValueType[BarcodeValueType["CONTACT_INFO"] = 1] = "CONTACT_INFO";
  BarcodeValueType[BarcodeValueType["EMAIL"] = 2] = "EMAIL";
  BarcodeValueType[BarcodeValueType["ISBN"] = 3] = "ISBN";
  BarcodeValueType[BarcodeValueType["PHONE"] = 4] = "PHONE";
  BarcodeValueType[BarcodeValueType["PRODUCT"] = 5] = "PRODUCT";
  BarcodeValueType[BarcodeValueType["SMS"] = 6] = "SMS";
  BarcodeValueType[BarcodeValueType["TEXT"] = 7] = "TEXT";
  BarcodeValueType[BarcodeValueType["URL"] = 8] = "URL";
  BarcodeValueType[BarcodeValueType["WIFI"] = 9] = "WIFI";
  BarcodeValueType[BarcodeValueType["GEO"] = 10] = "GEO";
  BarcodeValueType[BarcodeValueType["CALENDAR_EVENT"] = 11] = "CALENDAR_EVENT";
  BarcodeValueType[BarcodeValueType["DRIVER_LICENSE"] = 12] = "DRIVER_LICENSE";
  return BarcodeValueType;
}({});
/**
 * @see https://developers.google.com/android/reference/com/google/mlkit/vision/barcode/Barcode.Address.AddressType
 */
exports.BarcodeValueType = BarcodeValueType;
let AddressType = /*#__PURE__*/function (AddressType) {
  AddressType[AddressType["UNKNOWN"] = 0] = "UNKNOWN";
  AddressType[AddressType["WORK"] = 1] = "WORK";
  AddressType[AddressType["HOME"] = 2] = "HOME";
  return AddressType;
}({});
/**
 * @see https://developers.google.com/android/reference/com/google/mlkit/vision/barcode/Barcode.Address
 */
/**
 * @see https://developers.google.com/android/reference/com/google/mlkit/vision/barcode/Barcode.PersonName
 */
/**
 * @see https://developers.google.com/android/reference/com/google/mlkit/vision/barcode/Barcode.ContactInfo
 */
exports.AddressType = AddressType;
/**
 * @see https://developers.google.com/android/reference/com/google/mlkit/vision/barcode/Barcode.Email.FormatType
 */
let EmailType = /*#__PURE__*/function (EmailType) {
  EmailType[EmailType["UNKNOWN"] = 0] = "UNKNOWN";
  EmailType[EmailType["WORK"] = 1] = "WORK";
  EmailType[EmailType["HOME"] = 2] = "HOME";
  return EmailType;
}({});
/**
 * @see https://developers.google.com/android/reference/com/google/mlkit/vision/barcode/Barcode.Email
 */
exports.EmailType = EmailType;
/**
 * @see https://developers.google.com/android/reference/com/google/mlkit/vision/barcode/Barcode.Phone.FormatType
 */
let PhoneType = /*#__PURE__*/function (PhoneType) {
  PhoneType[PhoneType["UNKNOWN"] = 0] = "UNKNOWN";
  PhoneType[PhoneType["WORK"] = 1] = "WORK";
  PhoneType[PhoneType["HOME"] = 2] = "HOME";
  PhoneType[PhoneType["FAX"] = 3] = "FAX";
  PhoneType[PhoneType["MOBILE"] = 4] = "MOBILE";
  return PhoneType;
}({});
/**
 * @see https://developers.google.com/android/reference/com/google/mlkit/vision/barcode/Barcode.Phone
 */
/**
 * @see https://developers.google.com/android/reference/com/google/mlkit/vision/barcode/Barcode.Sms
 */
/**
 * @see https://developers.google.com/android/reference/com/google/mlkit/vision/barcode/Barcode.UrlBookmark
 */
exports.PhoneType = PhoneType;
/**
 * @see https://developers.google.com/android/reference/com/google/mlkit/vision/barcode/Barcode.WiFi.EncryptionType
 */
let EncryptionType = /*#__PURE__*/function (EncryptionType) {
  EncryptionType[EncryptionType["OPEN"] = 1] = "OPEN";
  EncryptionType[EncryptionType["WPA"] = 2] = "WPA";
  EncryptionType[EncryptionType["WEP"] = 3] = "WEP";
  return EncryptionType;
}({});
/**
 * @see https://developers.google.com/android/reference/com/google/mlkit/vision/barcode/Barcode.WiFi
 */
/**
 * @see https://developers.google.com/android/reference/com/google/mlkit/vision/barcode/Barcode.GeoPoint
 */
/**
 * @see https://developers.google.com/android/reference/com/google/mlkit/vision/barcode/Barcode.CalendarDateTime
 */
/**
 * @see https://developers.google.com/android/reference/com/google/mlkit/vision/barcode/Barcode.CalendarEvent
 */
/**
 * @see https://developers.google.com/android/reference/com/google/mlkit/vision/barcode/Barcode.DriverLicense
 */
/**
 * @see https://developer.android.com/reference/android/graphics/Rect.html
 */
/**
 * @see https://developer.android.com/reference/android/graphics/Point.html
 */
/**
 * @see https://developers.google.com/android/reference/com/google/mlkit/vision/barcode/Barcode
 */
exports.EncryptionType = EncryptionType;
const defaultCodeScannerOptions = {
  checkInverted: false
};
exports.defaultCodeScannerOptions = defaultCodeScannerOptions;
const plugin = _reactNativeVisionCamera.VisionCameraProxy.getFrameProcessorPlugin('scanCodes');

/**
 * Scans barcodes in the passed frame with MLKit
 *
 * @param frame Camera frame
 * @param types Array of barcode types to detect (for optimal performance, use less types)
 * @returns Detected barcodes from MLKit
 */
function scanBarcodes(frame, types, options) {
  'worklet';

  if (plugin == null) throw new Error('Failed to load Frame Processor Plugin "scanCodes"!');
  return plugin.call(frame, {
    ...defaultCodeScannerOptions,
    ...(options || {}),
    types
  });
}
//# sourceMappingURL=index.js.map