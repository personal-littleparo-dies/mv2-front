// import * as React from "react";
// import * as THREE from "three";
// import { PerspectiveCamera, Scene, WebGLRenderer } from "three";

// export default class BarMusicVisualization extends React.Component<{}, {}> {
//   private scene: THREE.Scene = new Scene();
//   private camera: THREE.PerspectiveCamera = new PerspectiveCamera();
//   private renderer: THREE.WebGLRenderer = new WebGLRenderer();
//   private bars: THREE.Mesh[] = [];

//   componentDidMount() {
//     // create a scene
//     this.scene = new THREE.Scene();

//     // create a camera
//     this.camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
//     this.camera.position.z = 5;

//     // create a renderer
//     this.renderer = new THREE.WebGLRenderer();
//     this.renderer.setSize(window.innerWidth, window.innerHeight);
//     document.body.appendChild(this.renderer.domElement);

//     // create the bars
//     const barGeometry = new THREE.BoxGeometry(1, 1, 1);
//     const barMaterial = new THREE.MeshBasicMaterial({ color: 0xffffff });
//     this.bars = [];
//     for (let i = 0; i < 10; i++) {
//       const bar = new THREE.Mesh(barGeometry, barMaterial);
//       bar.position.x = i - 5;
//       this.bars.push(bar);
//       this.scene.add(bar);
//     }

//     // create an audio context
//     const audioContext = new AudioContext();

//     // create an analyser node
//     const analyser = audioContext.createAnalyser();
//     analyser.fftSize = 256;

//     // create an audio element and connect it to the analyser node
//     const audioElement = new Audio("music.mp3");
//     const audioSource = audioContext.createMediaElementSource(audioElement);
//     audioSource.connect(analyser);
//     analyser.connect(audioContext.destination);

//     // update the bars based on the frequency data
//     const frequencyData = new Uint8Array(analyser.frequencyBinCount);
//     const updateBars = () => {
//       requestAnimationFrame(updateBars);
//       analyser.getByteFrequencyData(frequencyData);
//       for (let i = 0; i < this.bars.length; i++) {
//         this.bars[i].scale.y = frequencyData[i] / 100;
//       }
//       this.renderer.render(this.scene, this.camera);
//     };
//     audioElement.play();
//     updateBars();
//   }

//   render() {
//     return null;
//   }
// }
