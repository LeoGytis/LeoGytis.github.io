import React, { useRef, useEffect } from "react";
import * as THREE from "three";
import { OrbitControls } from "three/addons/controls/OrbitControls.js";

interface StarsSceneProps {
  bgColor?: string;
  starColor?: string;
}

const StarsScene = ({ bgColor }: StarsSceneProps) => {
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

      const ambientLight = new THREE.AmbientLight(0xffffff);
      scene.add(ambientLight);

      // const gridHelper = new THREE.GridHelper(220, 250);
      // scene.add(gridHelper);

      // const controls = new OrbitControls(camera, renderer.domElement);

      const starFigure = () => {
        const geometry = new THREE.BoxGeometry(0.01, 0.01, 5);
        const material = new THREE.MeshBasicMaterial({
          transparent: true,
          opacity: 0.8,
          color: 0x5eead4,
        });
        const star = new THREE.Mesh(geometry, material);

        const x = THREE.MathUtils.randFloat(-50, 50);
        const y = THREE.MathUtils.randFloat(-50, 50);
        const z = THREE.MathUtils.randFloat(-150, 50);

        star.position.set(x, y, z);
        scene.add(star);
      };

      // Call starFigure to add many falling stars
      Array(1500).fill(null).forEach(starFigure);

      // --- Scroll Animation ---

      const moveCamera = () => {
        const t = document.body.getBoundingClientRect().top;

        camera.position.z = t * 0.02;

        // Update background color based on camera position
        const backgroundIntensity = Math.abs(camera.position.z / 100);
        const updatedColor = new THREE.Color(bgColor).lerp(
          new THREE.Color("#043c64"), // Desired end color
          backgroundIntensity
        );

        scene.background = updatedColor;
      };

      document.body.onscroll = moveCamera;
      moveCamera();

      // --- Render the scene and camera ---
      const renderScene = () => {
        renderer.render(scene, camera);
        // controls.update();
        requestAnimationFrame(renderScene);
      };
      renderScene();
    }
  }, [bgColor]);

  return <div ref={containerRef} />;
};

export default StarsScene;
