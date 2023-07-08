"use client";

import { OrbitControls } from "@react-three/drei";
import { Perf } from "r3f-perf";
import { useRef } from "react";
import * as THREE from "three";
import TjsEarth from "~/compornents/molecules/TjsEarth";
import TjsGround from "~/compornents/molecules/TjsGround";
import TjsParticle from "~/compornents/molecules/TjsParticle";
import TjsSpotLight from "~/compornents/molecules/TjsSpotLight";
import type ThreeJsAreaProps from "~/compornents/templates/ThreeJsArea/props";
import { usePositionState } from "~/stores/position/state";

/**
 * 3Dオブジェクトのエリア
 *
 * @param param0 楽曲生成に必要な情報
 * @returns JSX.Element
 */
const Basic = ({ textAlive }: ThreeJsAreaProps) => {
  const position = usePositionState().position.position;
  const player = textAlive?.getPlayer();
  const calcValue = textAlive?.getCaCtrl().getCalculationPerformanceValue(
    player,
    position
  );

  // 球体を音楽に合わせて動かしてみる。
  const boxRef = useRef<THREE.Mesh>(null);
  if (boxRef.current) {
    // X移動
    boxRef.current.position.x = Math.sin(calcValue?.time ?? 0) + 1.5;
    // Y回転
    boxRef.current.rotation.y += calcValue?.speedY ?? 0;
  }

  return (
    <>
      {/* コントロール */}
      <OrbitControls
        makeDefault
        position={3}
        autoRotate={true}
        autoRotateSpeed={calcValue?.speed}
      />

      {/* モニター */}
      <Perf position="top-left" className={"monitorBasic"}  />

      {/* 環境光 */}
      <ambientLight intensity={0.2} />

      {/* スポットライト */}
      <TjsSpotLight lightPower={calcValue?.lightPower ?? 12.5} />
      
      <group position={[0, 0, 0]}>
        {/* パーティクル */}
        <TjsParticle />

        {/* 地球 */}
        <TjsEarth />

        {/* 球体 */}
        <mesh
          castShadow
          position={[2.5, 0.5, -1.3]}
          scale={0.2}
          ref={boxRef}
        >
          <sphereGeometry />
          <meshStandardMaterial
            color={0xFFA500}
            transparent={true}
            blending={THREE.AdditiveBlending}
            side={THREE.DoubleSide}
          />
        </mesh>

        {/* 地面 */}
        <TjsGround />
      </group>
    </>
  );
};

export default Basic;
