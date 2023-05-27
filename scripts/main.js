import * as THREE from 'three';

const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);

const renderer = new THREE.WebGLRenderer();

const geometry = new THREE.BoxGeometry(1, 1, 1);
const material = new THREE.MeshBasicMaterial({ color: 0xf0f0f0 });
const cube = new THREE.Mesh(geometry, material);

const setup = () => {
    renderer.setSize(window.innerWidth, window.innerHeight);
    document.body.appendChild(renderer.domElement);
    scene.add(cube);
    camera.position.z = 5;
}

const animate = () => {
    requestAnimationFrame(animate);

    cube.rotation.x += THREE.MathUtils.randFloat(0.01, 0.05);
    cube.rotation.y += THREE.MathUtils.randFloat(0.01, 0.05);
    cube.rotation.z += THREE.MathUtils.randFloat(0.01, 0.05);

    renderer.render(scene, camera);
}

setup();
animate();