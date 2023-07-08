import * as THREE from "three";

/**
 * パーティクルのpointsコンポーネント定義
 *
 * @returns JSX.Element
 */
const TjsParticle = () => {
  // 形状データを作成
  const SIZE = 10;
  // 配置する個数
  // const LENGTH = 500;
  // ↑ 調整用に使っていただけで、 ↓ 位が妥当そう
  const LENGTH = 150;
  // 頂点情報を格納する配列
  const vertices = [];
  for (let i = 0; i < LENGTH; i++) {
    const x = SIZE * (Math.random() - 0.5);
    const y = SIZE * (Math.random() - 0.5);
    const z = SIZE * (Math.random() - 0.5);
    vertices.push(x, y, z);
  }
  // 形状データを作成
  const geometryParticle = new THREE.BufferGeometry();
  geometryParticle.setAttribute("position", new THREE.Float32BufferAttribute(vertices, 3));

  // マテリアルを作成
  const materialParticle = new THREE.PointsMaterial({
    // 一つ一つのサイズ
    size: 0.05,
    // 色
    color: 0xFFFFFF,
  });

  return (
    <points
      name="particle"
      geometry={geometryParticle}
      // <pointsMaterial size={0.05} color={0xFFFFFF} />
      // ↑コンポーネントで置いても、サイズが適用されないので、propsで適用
      material={materialParticle}
    />
  );
};

export default TjsParticle;
