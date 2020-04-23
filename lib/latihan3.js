var scene = new THREE.Scene();
var cam = new THREE.PerspectiveCamera(45, window.innerWidth / window.innerHeight, 1, 100);
var renderer = new THREE.WebGLRenderer({antialias:true});

renderer.setSize(window.innerWidth, window.innerHeight);
cam.position.z += 5;
document.body.appendChild(renderer.domElement);

var box = new THREE.BoxGeometry(1, 1, 1);
var textureBata = new THREE.TextureLoader().load('textures/keramik1.jpg');
var bumpTexture = new THREE.TextureLoader().load('textures/bata2.jpg');
var boxMat = new THREE.MeshPhongMaterial({
    map: textureBata,
    shineness: 100,
});

var cubeFaceMaterial = [
    new THREE.MeshBasicMaterial({
        color: 0xff00ff
    }),
    new THREE.MeshBasicMaterial({
        color: 0x00ff00
    }),
    new THREE.MeshBasicMaterial({
        color: 0x0000ff
    }),
    new THREE.MeshBasicMaterial({
        color: 0xffaaaa
    }),
    new THREE.MeshBasicMaterial({
        color: 0x00ff00
    }),
    new THREE.MeshBasicMaterial({
        color: 0xaaaaff
    })
];

var pLight = new THREE.PointLight(0xffffff, 1);
pLight.position.set(4, 2, 2);
scene.add(pLight);

var pLight2 = new THREE.PointLight(0xffffff, 1);
pLight2.position.set(-4, 4, 2);
scene.add(pLight2);

var pLight3 = new THREE.PointLight(0xffffff, 1);
pLight3.position.set(0, 4, 2);
scene.add(pLight3);


var cube = new THREE.Mesh(box, cubeFaceMaterial);
scene.add(cube);


function draw() {
    cube.rotation.x += 0.01;
    cube.rotation.z += 0.01;
    renderer.render(scene, cam);
    requestAnimationFrame(draw);
}

draw();