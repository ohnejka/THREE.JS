let scene = new THREE.Scene();
let camera = new THREE.PerspectiveCamera( 75, window.innerWidth/window.innerHeight, 0.1, 1000);
let renderer = new THREE.WebGLRenderer();
renderer.setSize(window.innerWidth, window.innerHeight);

document.body.appendChild(renderer.domElement);

let axesHelper = new THREE.AxesHelper( 5 );
scene.add( axesHelper );

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

let pointLight = new THREE.PointLight( 0xff0000, 4, 0, 2);




let plHelper = new THREE.PointLightHelper (pointLight, 0.5);

scene.add(pointLight);
scene.add(plHelper);



//game logic
let update = function() {

    let time = Date.now() * 0.0005;

    pointLight.position.x = Math.sin(time * 0.7) * 5;
    pointLight.position.y = Math.cos (time * 0.4) * 7;
    pointLight.position.z = Math.sin(time * 0.5) * 4;

    //cube.rotation.x += 0.005;
    //cube.rotation.y += 0.005;
};

//draw image
let render = function() {
    controls.update();
    renderer.render(scene, camera);
}

let gameLoop = function () {
    requestAnimationFrame(gameLoop);
    update();
    render();
}

gameLoop();