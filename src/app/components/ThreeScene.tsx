import React, { useRef, useEffect } from "react";
import * as THREE from "three";
import { OrbitControls } from "three/addons/controls/OrbitControls.js";

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

      //   const renderer = new THREE.WebGLRenderer({
      //     canvas: document.querySelector("#bg"),
      //   });
      renderer.setPixelRatio(window.devicePixelRatio);
      renderer.setSize(window.innerWidth, window.innerHeight);
      containerRef.current?.appendChild(renderer.domElement);
      camera.position.setZ(50);
      camera.position.setX(50);

      const geometry = new THREE.TorusGeometry(10, 3, 16, 100);
      const material = new THREE.MeshStandardMaterial({
        color: 0xff6347,
      });
      const torus = new THREE.Mesh(geometry, material);
      //   scene.add(torus);

      const pointLight = new THREE.PointLight(0xffff00, 15, 0, 0);
      pointLight.position.set(15, 15, 5);

      const ambientLight = new THREE.AmbientLight(0xffffff);
      scene.add(pointLight);

      const lightHelper = new THREE.PointLightHelper(pointLight);
      const gridHelper = new THREE.GridHelper(200, 50);
      //   scene.add(lightHelper, gridHelper);

      const controls = new OrbitControls(camera, renderer.domElement);

      const addStar = () => {
        const geometry = new THREE.SphereGeometry(0.25, 24, 24);
        const material = new THREE.MeshStandardMaterial({ color: 0xffffff });
        const star = new THREE.Mesh(geometry, material);

        const [x, y, z] = Array(3)
          .fill()
          .map(() => THREE.MathUtils.randFloatSpread(100));

        star.position.set(x, y, z);
        scene.add(star);
      };

      Array(200).fill().forEach(addStar);

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
        // torus.rotation.x += 0.01;
        // torus.rotation.y += 0.01;
        renderer.render(scene, camera);
        controls.update();
        requestAnimationFrame(renderScene);
      };
      renderScene();
    }
  }, []);
  return <div ref={containerRef} />;
};
export default ThreeScene;
