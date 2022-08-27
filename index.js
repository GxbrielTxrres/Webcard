import "./style.css";
import * as THREE from "three";
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader.js";
import { FontLoader } from "three/examples/jsm/loaders/FontLoader";
import { TextGeometry } from "three/examples/jsm/geometries/TextGeometry";
import * as TWEEN from "@tweenjs/tween.js";

const btn = document.querySelector(".btn");
const btn2 = document.getElementById("btn2");
const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera(
  75,
  window.innerWidth / window.innerHeight,
  0.1,
  1000
);
const renderer = new THREE.WebGLRenderer();
renderer.setSize(window.innerWidth, window.innerHeight);
document.body.appendChild(renderer.domElement);

window.addEventListener(
  "resize",
  () => {
    camera.aspect = window.innerWidth / window.innerHeight;
    camera.updateProjectionMatrix();
    renderer.setSize(window.innerWidth, window.innerHeight);
    render();
  },
  false
);

const pointLight = new THREE.PointLight(0xffffff, 2, 100);
pointLight.position.set(5, 5, 5);
scene.add(pointLight);

const geometry = new THREE.BoxGeometry(1, 0.05, 1);
const material = new THREE.MeshBasicMaterial({ color: 0x00ff00 });
const cube = new THREE.Mesh(geometry, material);

//shrink text
btn.addEventListener("click", function () {
  //shrink animation
  const shrink = new TWEEN.Tween(cube.scale)
    .to({ x: 0, y: 0, z: 0 }, 200)
    .start();

  btn2.style.opacity -= 0.1;
  //button animation
  setTimeout(function () {
    window.location.href = "test.html";
  }, 1000);
});

animate();
console.log(btn);
cube.position.y = -0.5;
scene.add(cube);
function animate() {
  TWEEN.update();
  requestAnimationFrame(animate);
  camera.lookAt(0, 0, 0);
  renderer.render(scene, camera);
}

const loader = new GLTFLoader();
let shrek;

loader.load("scene.gltf", function (gltf) {
  scene.add(gltf.scene);
  const shrek = gltf.scene;
  shrek.position.set(0, -0.4, 0);
  shrek.add(pointLight);
  shrek.rotation.y += Math.PI / 1;

  btn.addEventListener("click", function enterWebsite() {
    const shrink = new TWEEN.Tween(shrek.scale)
      .to({ x: 0, y: 0, z: 0 }, 200)
      .start();
    requestAnimationFrame(enterWebsite);
  });

  function rotateShrek() {
    shrek.rotation.y += 0.0025;
    requestAnimationFrame(rotateShrek);
  }
  rotateShrek();
});

const fontLoader = new FontLoader();
fontLoader.load(
  "node_modules/three/examples/fonts/droid/droid_serif_regular.typeface.json",
  (droidFont) => {
    const textGeometry = new TextGeometry("Aziel's First Birthday", {
      height: 0.1,
      size: 0.1,
      font: droidFont,
      bevelEnabled: true,
      bevelSize: 0.0001,
      bevelThickness: 0.001,
      bevelOffset: 0.005,
      bevelSegments: 2,
    });

    const textMaterial = new THREE.MeshNormalMaterial();
    const textMesh = new THREE.Mesh(textGeometry, textMaterial);
    scene.add(textMesh);
    textMesh.position.set(-0.7, 0.8, 0);
    textMesh.scale.set(1, 1, 1);
    console.log(textMesh.rotation);

    //shrink text
    btn.addEventListener("click", function enterWebsite() {
      const shrink = new TWEEN.Tween(textMesh.scale)
        .to({ x: 0, y: 0, z: 0 }, 200)
        .start();
      requestAnimationFrame(enterWebsite);
    });

    //back and forth animation
    const back = new TWEEN.Tween(textMesh.rotation)
      .to({ x: -0.25, y: 0.5, z: 0.4 }, 3000)
      .repeat(1)
      .yoyo(true)
      .delay(0.1)
      .start();

    const forth = new TWEEN.Tween(textMesh.rotation)
      .to({ x: 0.25, y: -0.5, z: 0.4 }, 3000)
      .repeat(1)
      .yoyo(true)
      .delay(0.1)
      .start();

    back.chain(forth);
    forth.chain(back);

    animate();

    function animate() {
      requestAnimationFrame(animate);
      TWEEN.update();
    }
  }
);

camera.position.set(0, 1, 2);
