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

let geometry = new THREE.BoxGeometry(3, 3, 3);

let cubeMaterials = [
    new THREE.MeshLambertMaterial( {map: new THREE.TextureLoader().load('./img/textures/skycube/1.jpg'), side: THREE.DoubleSide} ),
    new THREE.MeshPhongMaterial( {map: new THREE.TextureLoader().load('./img/textures/skycube/2.jpg'), side: THREE.DoubleSide} ),
    new THREE.MeshLambertMaterial( {map: new THREE.TextureLoader().load('./img/textures/skycube/3.jpg'), side: THREE.DoubleSide} ),
    new THREE.MeshPhongMaterial( {map: new THREE.TextureLoader().load('./img/textures/skycube/4.jpg'), side: THREE.DoubleSide} ),
    new THREE.MeshLambertMaterial( {map: new THREE.TextureLoader().load('./img/textures/skycube/5.jpg'), side: THREE.DoubleSide} ),
    new THREE.MeshLambertMaterial( {map: new THREE.TextureLoader().load('./img/textures/skycube/6.jpg'), side: THREE.DoubleSide} ),
]

let material = new THREE.MeshFaceMaterial( cubeMaterials );
let cube = new THREE.Mesh(geometry, material);
scene.add(cube);
camera.position.z = 5;

let ambientLight = new THREE.AmbientLight( 0xffffff, 1.2);
scene.add(ambientLight);

let spotLight = new THREE.SpotLight( 0x00ff00, 0.8);
spotLight.position.set( 9, 7, 0);


let slgeometry = new THREE.SphereGeometry(0.5, 20, 20);
let slmaterial = new THREE.MeshPhongMaterial( {color: 0x00ff00,})
let spotLightMark = new THREE.Mesh( slgeometry, slmaterial);
spotLightMark.position.set( 2, 9, 0);

scene.add(spotLight);
scene.add(spotLightMark);



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