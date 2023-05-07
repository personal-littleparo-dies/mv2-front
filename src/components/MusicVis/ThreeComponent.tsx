// import React, { useRef, useEffect } from 'react';
// import * as THREE from 'three';



// const BarVisualization = () => {
//   const fileInputRef = useRef<HTMLInputElement | null>(null);
//   const containerRef = useRef<HTMLDivElement | null>(null);
//   const rendererRef = useRef<THREE.WebGLRenderer | null>(null);
//   const cameraRef = useRef<THREE.OrthographicCamera | null>(null);
//   const sceneRef = useRef<THREE.Scene | null>(null);
//   const barsRef = useRef<THREE.Mesh[]>([]);

//   useEffect(() => {
//     const container = containerRef.current!;
//     const renderer = new THREE.WebGLRenderer({ antialias: true });
//     renderer.setSize(950, 960);
//     renderer.setPixelRatio(window.devicePixelRatio);
//     rendererRef.current = renderer;

//     const camera = new THREE.OrthographicCamera(-550, -250, 1200, -200, 200, 5000)
//     camera.position.set(400,1000,300);
//     cameraRef.current = camera;

//     const scene = new THREE.Scene();
//     sceneRef.current = scene;

//     container.appendChild(renderer.domElement);

//     const animate = () => {
//       requestAnimationFrame(animate);
//       renderer.render(scene, camera);
//     };

//     animate();

//     return () => {
//       container.removeChild(renderer.domElement);
//     };
//   }, []);

//   const handleFileChange = () => {
//     const file = fileInputRef.current?.files?.[0];
//     if (file) {
//       const audio = new Audio(URL.createObjectURL(file));
//       audio.crossOrigin = 'anonymous';
//       audio.play();

//       const context = new AudioContext();
//       const source = context.createMediaElementSource(audio);
//       source.connect(context.destination);

//       const analyser = context.createAnalyser();
//       source.connect(analyser);
//       analyser.connect(context.destination);

//       const dataArray = new Uint8Array(analyser.frequencyBinCount);

//       const bars = [];
//       const material = new THREE.MeshPhongMaterial({ color: 0xffffff, side: THREE.DoubleSide });
//       for (let i = 0; i < 128; i++) {
//         const geometry = new THREE.BoxGeometry(1, 1, 1);
//         const bar = new THREE.Mesh(geometry, material);
//         bar.position.set(i - 64, 0, 0);
//         sceneRef.current?.add(bar);
//         bars.push(bar);
//       }
//       barsRef.current = bars;

//       const updateBars = () => {
//         requestAnimationFrame(updateBars);

//         analyser.getByteFrequencyData(dataArray);
//         for (let i = 0; i < 128; i++) {
//           const bar = barsRef.current[i];
//           if (bar) {
//             const y = dataArray[i] / 100;
//             bar.scale.setY(y < 0.1 ? 0.1 : y);
//           }
//         }
//       };

//       updateBars();
//     }
//   };

//   return (
//     <div>
//       <input type="file" ref={fileInputRef} onChange={handleFileChange} />
//       {/* <audio src="" controls></audio> */}
//       <div ref={containerRef}></div>
//     </div>
//   );
// };

// export default BarVisualization;
