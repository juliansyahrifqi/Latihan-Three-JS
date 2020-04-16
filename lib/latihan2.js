var scene = new THREE.Scene();
var cam = new THREE.PerspectiveCamera(45, innerWidth/innerHeight, 1, 100);
var renderer = new THREE.WebGLRenderer({antialias: true});

renderer.setSize(innerWidth, innerHeight);

cam.position.z += 6;

document.body.appendChild(renderer.domElement);

//kubus



// geometry

var geo = new THREE.Geometry();
geo.vertices.push(
    new THREE.Vector3(-1, 1, 1),
    new THREE.Vector3(1, 1, 1),
    new THREE.Vector3(-1, -1, 1),
    new THREE.Vector3(1, -1, 1),

    new THREE.Vector3(-1, 1, -1),
    new THREE.Vector3(1, 1, -1),
    new THREE.Vector3(-1, -1, -1),
    new THREE.Vector3(1, -1, -1)
);

geo.faces.push(

    // Front
    new THREE.Face3(2, 1, 0),
    new THREE.Face3(3, 1, 2),

    // Back
    new THREE.Face3(6, 4, 5),
    new THREE.Face3(7, 6, 5),

    // sisi a
    new THREE.Face3(3, 5, 1),
    new THREE.Face3(7, 5, 3),

    // Sisi b
    new THREE.Face3(4, 2, 0),
    new THREE.Face3(4, 6, 2),

    // Bawah
    new THREE.Face3(6, 7, 2),
    new THREE.Face3(2, 7, 3),

    // Atas
    new THREE.Face3(0, 5, 4),
    new THREE.Face3(5, 0, 1)
);

geo.faces[0].color = new THREE.Color("red");
geo.faces[1].color = new THREE.Color("red");
geo.faces[2].color = new THREE.Color("orange");
geo.faces[3].color = new THREE.Color("orange");
geo.faces[4].color = new THREE.Color("blue");
geo.faces[5].color = new THREE.Color("blue");
geo.faces[6].color = new THREE.Color("green");
geo.faces[7].color = new THREE.Color("green");
geo.faces[8].color = new THREE.Color("yellow");
geo.faces[9].color = new THREE.Color("yellow");
geo.faces[10].color = new THREE.Color("grey");
geo.faces[11].color = new THREE.Color("grey");

var mat = new THREE.MeshBasicMaterial({vertexColors: true});
var mesh = new THREE.Mesh(geo, mat);

scene.add(mesh);

function draw() {
    mesh.rotation.x += 0.01; // Memutar ke arah x objek 0.01 setiap frame update;  
    mesh.rotation.y += 0.01;
    mesh.rotation.z += 0.01;
    renderer.render(scene, cam);
    requestAnimationFrame(draw);
}

draw();