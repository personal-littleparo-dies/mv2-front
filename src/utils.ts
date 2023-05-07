// import p5Types from "p5";
// import p5 from "p5/lib/p5.min";
// import "p5/lib/addons/p5.sound";

// let fft: p5.FFT;
// const map: p5.map = p5.map;

// type FrequencyType = "bass" | "lowMid" | "mid" | "highMid" | "treble";
// // type HSBColor = { hue: number; saturation: number; brightness: number };

// function getNewSoundDataValue(freqType: FrequencyType): number {
//   return map(fft.getEnergy(freqType), 0, 255, 0, 1); // get energy from frequency, scaled from 0 to 1
// }

// function getDataHSBColor(d: number): p5Types.Color {
//   const dataHue: number = p5.map(d, 0, 1, 0, 360); // value moves across full 360 degrees of hue range
//   const dataSaturation: number = dataBrightness = map(d, 0, 1, 0, 100); // higher data value = brighter, saturated color
//   return { hue: dataHue, saturation: dataSaturation, brightness: dataBrightness };
// }

// export { getNewSoundDataValue, getDataHSBColor };