/* 
    Scene
    - Lingkungan 3D yang menjadi aplikasi kita
    - #D world

    Camera
    - Camera yang kita gunakan untuk masuk ke dalam 3D world

    Renderer
    - Yang menampilkan hasil dari camera
*/

var scene = new THREE.Scene();
var cam = new THREE.PerspectiveCamera(45, innerWidth/innerHeight, 1, 100);

/* 
    Parameter Camera
    1. FOV = berapa lebar dari kamera
    2. Aspectratio = ratio dari layar yang bisa ditampilkan
    3. Near clip = berapa dekat kamera bisa melihat
    4. Far Clip = berapa jauh kamera bisa melihat
*/

var renderer = new THREE.WebGLRenderer({antialias: true});

renderer.setSize(innerWidth, innerHeight);

cam.position.z += 4;

document.body.appendChild(renderer.domElement);
var box = new THREE.BoxGeometry(1, 1, 1);
var boxMat = new THREE.MeshBasicMaterial({color: 0xff0000});
var cube = new THREE.Mesh(box, boxMat);
//scene.add(cube);

function draw() {
    renderer.render(scene, cam);
    requestAnimationFrame(draw);
}

draw();
