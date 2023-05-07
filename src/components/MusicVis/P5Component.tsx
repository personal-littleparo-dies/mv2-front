// import Sketch from "react-p5";
// import p5Types from "p5";
// import p5 from "p5/lib/p5.min";
// import "p5/lib/addons/p5.sound";

// import { useState, useEffect } from "react";
// import { getDataHSBColor, getNewSoundDataValue } from "../utils/MyFunctions";

// interface ComponentProps {
//   // Your component props
//   width: number;
//   height: number;
// }

// // const fft = new p5.FFT(); // help!!!
// const spectrum: number[] = fft.analyze(256);

// // const padding: number = 5;
// const size = 100; // 타입 안적은 이유 알제?
// let song: p5Types.SoundFile;

// const P5Component: React.FC<ComponentProps> = (props: ComponentProps) => {
//   const [audioSrc, setAudioSrc] = useState<string | null>(null);
//   const [isPlaying, setIsPlaying] = useState<boolean>(false);
  
//   const handleFileSelect = (event: React.ChangeEvent<HTMLInputElement>) => {
//     const file = event.target.files && event.target.files?.[0];
//     if (file) {
//       // setSelectedFile(file);
//       setAudioSrc(URL.createObjectURL(file));
//     }
//   };

//   const handlePlayClick = () => {
//     setIsPlaying(true);
//   };

//   const handlePauseClick = () => {
//     setIsPlaying(false);
//   };

//   // See annotations in JS for more information
//   const setup = (p5: p5Types, canvasParentRef: Element) => {
//     p5.createCanvas(500, 500).parent(canvasParentRef);
//     p5.colorMode(p5.HSB, 360, 100, 100);
//     p5.angleMode(p5.DEGREES);
//   };

//   const draw = (p5: p5Types) => {
//     // p5.clear();
//     if (song && song.isLoaded() && !song.isPlaying()) {
//       fft.setInput(song);
//     }
//     if (fft) {
//       p5.noStroke();
//       const dataVal = getNewSoundDataValue("bass");
//       const dataColor = getDataHSBColor(dataVal);
//       p5.fill(dataColor);

//       const myEllipseSize = 180 * dataVal;
//       p5.ellipse(200, 200, myEllipseSize, myEllipseSize);

//       // const maxData = p5.max(spectrum);
//       const angleSeparation = 360 / spectrum.length;

//       for (let i = 0; i < spectrum.length; i++) {
//         p5.push();
//         const maxValue = p5.constrain(spectrum[i], 0, 255);
//         const animatedHeight = p5.map(
//           maxValue,
//           p5.min(spectrum),
//           800,
//           1,
//           spectrum[i]
//         );
//         p5.translate(200, 200);
//         p5.rotate(angleSeparation * i);
//         p5.rect(0, size, angleSeparation * 1.25, animatedHeight);
//         p5.pop();
//       }
//     }
//   };

//   return (
//     <>
//       <input type="file" accept="audio/*" onChange={handleFileSelect} />
//       {audioSrc && (
//         <div>
//           <audio src={audioSrc} autoPlay={isPlaying} />
//           {isPlaying ? (
//             <button onClick={handlePauseClick}>Pause</button>
//           ) : (
//             <button onClick={handlePlayClick}>Play</button>
//           )}
//         </div>
//       )}
//       <Sketch setup={setup} draw={draw} />
//     </>
//   );
// };

// export default P5Component;
