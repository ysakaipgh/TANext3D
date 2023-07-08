import { useState } from "react";
import * as THREE from "three";

/**
 * 地球のmeshコンポーネント定義
 *
 * @returns JSX.Element
 */
const TjsEarth = () => {
  // 地球のテクスチャーを設定
  const loader = new THREE.TextureLoader();
  const texture = loader.load("assets/earthmap1k.jpg");
  // マテリアルにテクスチャーを設定
  const materialEarth = new THREE.MeshStandardMaterial({
    color: 0xFFFFFF,
    map: texture,
  });
  const [materialEarthState] = useState(materialEarth);

  // 一旦スケールも動かせるのは判ったので、固定化
  // const scale = (isPlaying ? racioBeatMin : 3) / 5;
  const scale = 0.6;
  return (
    <mesh
      castShadow
      position={[0, 0, 0]}
      scale={scale}
      // 初期表示で日本が目の前に来る様に、回転させて調整
      rotation={[0.6, 2.3, 0.1]}
      // <meshStandardMaterial map={} /> だと、画像読み込み速度の関係で
      // 初期表示に間に合わない ＆ 読み込み後に再描画されない為、
      // props の material で設定する。
      material={materialEarthState}
    >
      <sphereGeometry />
    </mesh>
  );
};

export default TjsEarth;
