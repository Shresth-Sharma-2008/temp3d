//Import the THREE.js library
import * as THREE from "https://cdn.skypack.dev/three@0.129.0/build/three.module.js";
// To allow for the camera to move around the scene
import { OrbitControls } from "https://cdn.skypack.dev/three@0.129.0/examples/jsm/controls/OrbitControls.js";
// To allow for importing the .gltf file
import { GLTFLoader } from "https://cdn.skypack.dev/three@0.129.0/examples/jsm/loaders/GLTFLoader.js";

//Create a Three.JS Scene
const scene = new THREE.Scene();
//create a new camera with positions and angles
const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);

//Keep track of the mouse position, so we can make the eye move
let mouseX = window.innerWidth / 2;
let mouseY = window.innerHeight / 2;

//Keep the 3D object on a global variable so we can access it later
let object;

//OrbitControls allow the camera to move around the scene
let controls;

//Set which object to render
let objToRender = 'eye';

//Instantiate a loader for the .gltf file
const loader = new GLTFLoader();

//Load the file
loader.load(
  `models/${objToRender}/scene.gltf`,
  function (gltf) {
    //If the file is loaded, add it to the scene
    object = gltf.scene;
    scene.add(object);
  },
  function (xhr) {
    //While it is loading, log the progress
    console.log((xhr.loaded / xhr.total * 100) + '% loaded');
  },
  function (error) {
    //If there is an error, log it
    console.error(error);
  }
);

//Instantiate a new renderer and set its size
const renderer = new THREE.WebGLRenderer({ alpha: true },{ antialias: false }); //Alpha: true allows for the transparent background
renderer.setSize(window.innerWidth, window.innerHeight);

//Add the renderer to the DOM
document.getElementById("container3D").appendChild(renderer.domElement);
renderer.setClearColor(0x000000, 0);
//Set how far the camera will be from the 3D model
// camera.position.z = objToRender === "dino" ? 25 : 500;
camera.position.z = 150;
camera.position.y = 0;
camera.position.x = 0;
var ambientLight = scene.children.find(child => child instanceof THREE.AmbientLight);

// Set the intensity of the ambient light to zero
if (ambientLight) {
    ambientLight.intensity = 0;
}
var geometry = new THREE.BoxGeometry(2, 2, 2); // Width, Height, Depth
var material = new THREE.MeshBasicMaterial({ color: 0x00ff00 });
const cube = new THREE.DirectionalLight(0xFF0000, 0); // (color, intensity)
const cube1 = new THREE.DirectionalLight(0xFD6E00, 0); // (color, intensity)

// var cube1 = new THREE.Mesh(geometry, material);
scene.add(cube)
scene.add(cube1)

//Add lights to the scene, so we can actually see the 3D model
const topLight = new THREE.DirectionalLight(0x0026E6, 0.2); // (color, intensity)
topLight.position.set(5,0,160) //top-left-ish
topLight.castShadow = true;
// scene.add(topLight);

const ambientLight1 = new THREE.AmbientLight(0x333333, objToRender === "dino" ? 5 : 1);
// scene.add(ambientLight);

//This adds controls to the camera, so we can rotate / zoom it with the mouse
if (objToRender === "dino") {
  controls = new OrbitControls(camera, renderer.domElement);
}
// alert(object.parameters)
//Render the scene
// alert(Math.PI/2)
var a = 230
var b = 2
var c = 1
var d = 0
var e = 0
var f = 50;
var g = 0;
var mouseXp = 0;
var mouseYp = 0;
var h = 1;
var namex = 0;
var namey = 0;
function animate() {
  requestAnimationFrame(animate);
  cube.position.z = 120;
  cube.position.y = 0;
  cube.position.x = -40;
  cube1.position.z = 20;
  cube1.position.x = 120;
  cube1.position.y = 50;
  object.position.z = f;
  object.position.y = -27;
  object.rotation.y = d;
  object.rotation.x = g;
  if(a > 0 && h == 1){
    object.position.x = a;
    cube.intensity += b/100
    a -= b
    b -= 0.0085
    if(c==1 && a <= 130){
      c = 0
      document.getElementById('vid').style.display = 'block';
      document.getElementById('name').style.display = 'block';
      // document.getElementById('vid2').style.display = 'block';
      
      document.getElementById('vid').playbackRate = 1.3;
    }
  }
  else if(d < Math.PI/2 && h == 1){
    object.position.x = a;
    cube1.intensity += e/100
    e += 0.75;
    f -= 1.5625;
    a -= 2.5;
    d += 0.05;
  }else if(g < 0.02 && h == 1){
    g += 0.0005;
  }
  else{
    h=0
    d += (mouseX - mouseXp)/20000;
    g += (mouseY - mouseYp)/10000;
    // document.getElementById('name').style.transform = 'rotateY('+mouseX/100+'deg);';
  }
  mouseXp = mouseX;
  mouseYp = mouseY;
  renderer.render(scene, camera);
}

document.onmousemove = (e) => {
  mouseX = e.clientX;
  mouseY = e.clientY;
}
//Add a listener to the window, so we can resize the window and the camera
window.addEventListener("resize", function () {
  camera.aspect = window.innerWidth / window.innerHeight;
  camera.updateProjectionMatrix();
  renderer.setSize(window.innerWidth, window.innerHeight);
});
animate();