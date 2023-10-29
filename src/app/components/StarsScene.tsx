import React, { useRef, useEffect } from "react";
import * as THREE from "three";
import { OrbitControls } from "three/addons/controls/OrbitControls.js";

const StarsScene = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  useEffect(() => {
    if (typeof window !== "undefined") {
      const scene = new THREE.Scene();
      const camera = new THREE.PerspectiveCamera(
        75,
        window.innerWidth / window.innerHeight,
        0.1,
        1000
      );
      const renderer = new THREE.WebGLRenderer();

      renderer.setPixelRatio(window.devicePixelRatio);
      renderer.setSize(window.innerWidth, window.innerHeight);
      containerRef.current?.appendChild(renderer.domElement);
      camera.position.setZ(50);
      camera.position.setX(50);

      const ambientLight = new THREE.AmbientLight(0xffffff);
      scene.add(ambientLight);

      const gridHelper = new THREE.GridHelper(200, 50);
      scene.add(gridHelper);

      const controls = new OrbitControls(camera, renderer.domElement);

      const fallingStar = () => {
        const geometry = new THREE.BoxGeometry(0.01, 5, 0.01);
        const material = new THREE.MeshBasicMaterial({
          transparent: true,
          opacity: 0.8,
          color: 0x5eead4,
        });
        const star = new THREE.Mesh(geometry, material);

        const x = THREE.MathUtils.randFloatSpread(100);
        const y = THREE.MathUtils.randFloat(50, 50); // Random Y-coordinate within a range
        const z = THREE.MathUtils.randFloatSpread(100);

        star.position.set(x, y, z);
        scene.add(star);

        // Function to update the star's position in the animation loop
        const updateStarPosition = () => {
          star.position.y -= 0.2; // Adjust the falling speed
          if (star.position.y < -10) {
            // If the star falls below a certain Y-coordinate, remove it
            scene.remove(star);
          }
        };

        // Add the update function to the animation loop
        const animate = () => {
          updateStarPosition();
          renderer.render(scene, camera);
          requestAnimationFrame(animate);
        };

        animate(); // Start the animation loop
      };

      // Call fallingStar to add many falling stars
      Array(200).fill(null).forEach(fallingStar);

      // Scroll Animation

      const moveCamera = () => {
        const t = document.body.getBoundingClientRect().top;

        camera.position.z = t * -0.01;
        camera.position.x = t * -0.0002;
        camera.rotation.y = t * -0.0002;
      };

      document.body.onscroll = moveCamera;
      moveCamera();

      // Render the scene and camera
      const renderScene = () => {
        renderer.render(scene, camera);
        controls.update();
        requestAnimationFrame(renderScene);
      };
      renderScene();
    }
  }, []);
  return <div ref={containerRef} />;
};
export default StarsScene;
