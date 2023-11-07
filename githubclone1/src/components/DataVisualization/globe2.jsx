import React from "react";

const Globe2 = () => {
    var THREE = require("three");

    //SETUP RENDERER
    const renderer = new THREE.WebGLRenderer({ alpha: true });
    renderer.setClearColor(0x000000, 0);
    renderer.setSize(container.offsetHeight, container.offsetHeight);
    scene.background = null;
    document.body.appendChild(renderer.domElement);

    //SETUP lights
    // Define multiple point lights and their positions.
    var light1 = new THREE.PointLight(0x5a54ff, 0.75);
    light1.position.set(-150, 150, -50);

    var light2 = new THREE.PointLight(0x4158f6, 0.75);
    light2.position.set(-400, 200, 150);

    var light3 = new THREE.PointLight(0x803bff, 0.7);
    light3.position.set(100, 250, -100);

    // Add lights to the scene.
    scene.add(light1, light2, light3);

    //SETUP SCENE
    const scene = new THREE.Scene();

    // ... (Other code for setting up the globe, map overlay, bezier curves, and spires)

    // Detect click-drag rotation
    var isDragging = false;
    var previousMousePosition = {
        x: 0,
        y: 0,
    };

    // Set up mouse event handlers for rotating the globe.
    // ...

    // SETUP camera
    const camera = new THREE.PerspectiveCamera(75, 900 / 900, 0.1, 1000);
    camera.position.z = 6;

    // Initialize variables for animation.
    var renderCount = 0;
    var currentGrowing = 0;
    var tubes = [tube1, tube2, tube3, tube4, tube5, tube6, tube7, tube8];

    // Function for growing the tube animation.
    function GrowTube(index, renderCount) {
        renderCount = Math.ceil(renderCount / 3) * 3;
        tubes[index].setDrawRange(0, renderCount);
        if (index > 2) {
            tubes[index - 3].setDrawRange(renderCount, 10000);
        } else {
            tubes[tubes.length - 3 + index].setDrawRange(renderCount, 10000);
        }
    }

    // ANIMATION LOOP
    const animate = function () {
        if (renderCount < 10000) {
            renderCount += 80;
            GrowTube(currentGrowing, renderCount);
        } else {
            renderCount = 0;
            if (currentGrowing >= tubes.length - 1) {
                currentGrowing = 0;
            } else {
                currentGrowing++;
            }
        }

        requestAnimationFrame(animate);

        if (!isDragging) {
            sphere.rotation.y += 0.0005;
        }

        renderer.render(scene, camera);
        container.appendChild(renderer.domElement);
    };

    animate();

    // Function for handling window resize.
    function onWindowResize() {
        renderer.setSize(container.offsetHeight, container.offsetHeight);
    }

    return (
        <>
            <div className="container">
                <img
                    src="https://github.githubassets.com/images/modules/site/home/hero-glow.svg"
                    alt="Glowing universe"
                    className="background-lights"
                />
                <div id="globeCanvas"></div>
            </div>
        </>
    );
};

export default Globe2;
