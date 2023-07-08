/**
 * 平面のmeshコンポーネント定義
 * ※本来は要らないのだが、チュートリアル的に、
 * 影の表現を見せたりとかで、実装してある。
 * @TODO: スポットライトの位置調整時に、可視化するのに使う
 *
 * @returns JSX.Element
 */
const TjsGround = () => {
  return (
    <mesh
      receiveShadow
      rotation-x={-Math.PI * 0.5}
      position={[0.0, -1.0, 0.0]}
      scale={5}
    >
      <planeGeometry />
      <meshStandardMaterial color={0x20B2AA} />
    </mesh>
  );
};

export default TjsGround;
