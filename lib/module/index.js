import { VisionCameraProxy } from 'react-native-vision-camera';
/**
 * @see https://developers.google.com/android/reference/com/google/mlkit/vision/barcode/Barcode.BarcodeFormat
 */
export let BarcodeFormat = /*#__PURE__*/function (BarcodeFormat) {
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
export let BarcodeValueType = /*#__PURE__*/function (BarcodeValueType) {
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
export let AddressType = /*#__PURE__*/function (AddressType) {
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

/**
 * @see https://developers.google.com/android/reference/com/google/mlkit/vision/barcode/Barcode.Email.FormatType
 */
export let EmailType = /*#__PURE__*/function (EmailType) {
  EmailType[EmailType["UNKNOWN"] = 0] = "UNKNOWN";
  EmailType[EmailType["WORK"] = 1] = "WORK";
  EmailType[EmailType["HOME"] = 2] = "HOME";
  return EmailType;
}({});

/**
 * @see https://developers.google.com/android/reference/com/google/mlkit/vision/barcode/Barcode.Email
 */

/**
 * @see https://developers.google.com/android/reference/com/google/mlkit/vision/barcode/Barcode.Phone.FormatType
 */
export let PhoneType = /*#__PURE__*/function (PhoneType) {
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

/**
 * @see https://developers.google.com/android/reference/com/google/mlkit/vision/barcode/Barcode.WiFi.EncryptionType
 */
export let EncryptionType = /*#__PURE__*/function (EncryptionType) {
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

export const DefaultCodeScannerOptions = {
  checkInverted: false
};
const plugin = VisionCameraProxy.getFrameProcessorPlugin('scanCodes');

/**
 * Scans barcodes in the passed frame with MLKit
 *
 * @param frame Camera frame
 * @param types Array of barcode types to detect (for optimal performance, use less types)
 * @returns Detected barcodes from MLKit
 */
export function scanBarcodes(frame, types) {
  'worklet';

  let options = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : DefaultCodeScannerOptions;
  if (plugin == null) throw new Error('Failed to load Frame Processor Plugin "scanCodes"!');
  return plugin.call(frame, {
    ...options,
    types
  });
}
export * from './hook';
//# sourceMappingURL=index.js.map