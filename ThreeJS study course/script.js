let scene = new THREE.Scene();
let camera = new THREE.PerspectiveCamera( 75, window.innerWidth/window.innerHeight, 0.1, 1000);
let renderer = new THREE.WebGLRenderer();
renderer.setSize(window.innerWidth, window.innerHeight);

document.body.appendChild(renderer.domElement);

window.addEventListener('resize', () => {
    let width = window.innerWidth;
    let height = window.innerHeight;
    renderer.setSize( width, height);
    camera.aspect = width / height;
    camera.updateProjectionMatrix();
})
controls = new THREE.OrbitControls( camera, renderer.domElement);

let geometry = new THREE.BoxGeometry(1, 1, 1);
let material = new THREE.MeshBasicMaterial({ color: 0xffffff, wireframe: true});
let cube = new THREE.Mesh(geometry, material);
scene.add(cube);
camera.position.z = 5;

//game logic
let update = function() {
    //cube.rotation.x += 0.005;
    //cube.rotation.y += 0.005;
};

//draw image
let render = function() {
    renderer.render(scene, camera);
}

let gameLoop = function () {
    requestAnimationFrame(gameLoop);
    update();
    render();
}

gameLoop();