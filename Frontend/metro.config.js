const { getDefaultConfig } = require("expo/metro-config");
const { withNativeWind } = require("nativewind/metro");

const config = getDefaultConfig(__dirname);

// Gói cấu hình mặc định vào trong bộ xử lý của NativeWind
module.exports = withNativeWind(config, { input: "./global.css" });