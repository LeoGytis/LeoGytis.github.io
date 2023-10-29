import React, { useRef, useEffect } from "react";
import * as THREE from "three";

const ThreeScene: React.FC = () => {
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
      camera.position.setZ(30);
      camera.position.setX(-3);

      const geometry = new THREE.TorusGeometry(10, 3, 16, 100);

      const material = new THREE.MeshBasicMaterial({ color: 0x00ff00 });
      const torus = new THREE.Mesh(geometry, material);
      scene.add(torus);

      // Render the scene and camera
      const renderScene = () => {
        torus.rotation.x += 0.01;
        torus.rotation.y += 0.01;
        torus.rotation.y += 0.01;
        renderer.render(scene, camera);
        requestAnimationFrame(renderScene);
      };
      renderScene();
    }
  }, []);
  return <div ref={containerRef} />;
};
export default ThreeScene;
