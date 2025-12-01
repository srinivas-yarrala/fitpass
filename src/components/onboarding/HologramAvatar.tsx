import { Suspense, useEffect, useMemo, useRef } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import type * as THREE from "three";
import { Color, MathUtils } from "three";
import { Environment, ContactShadows, useGLTF } from "@react-three/drei";
import { SkeletonUtils } from "three-stdlib";
import type { GenderOption } from "@/pages/Onboarding";

type HologramAvatarProps = {
  selected: GenderOption;
  onSelect: (value: GenderOption) => void;
  onContinue: () => void;
};

const modelConfig: Record<
  GenderOption,
  {
    url: string;
    accent: string;
    scale: number;
  }
> = {
  female: {
    url: "/models/female-athlete.glb",
    accent: "#ff9eed",
    scale: 1.35,
  },
  male: {
    url: "/models/male-athlete.glb",
    accent: "#5ffbf1",
    scale: 1.15,
  },
};

const HologramAvatar = ({ selected, onSelect, onContinue }: HologramAvatarProps) => {
  const handleRotate = () => {
    onSelect(selected === "female" ? "male" : "female");
  };

  return (
    <div className="relative h-[28rem] w-full overflow-visible pb-12">
      <Canvas dpr={[1, 1.5]} camera={{ position: [0, 1.6, 3.3], fov: 45 }}>
        <Suspense fallback={null}>
          <Scene selected={selected} />
        </Suspense>
      </Canvas>

      <button
        type="button"
        aria-label="Rotate hologram"
        onClick={handleRotate}
        className="absolute inset-0 z-10 cursor-pointer bg-transparent"
      />

      <div className="pointer-events-none absolute inset-x-0 bottom-20 z-30 flex justify-center gap-3 text-[11px] uppercase tracking-[0.35em]">
        {(["female", "male"] as GenderOption[]).map((option) => (
          <button
            key={option}
            type="button"
            onClick={() => onSelect(option)}
            className={`pointer-events-auto rounded-full border px-4 py-1 transition ${
              selected === option ? "border-white text-white" : "border-white/40 text-white/60"
            }`}
          >
            {option === "female" ? "Female" : "Male"}
          </button>
        ))}
      </div>

      <div className="pointer-events-none absolute inset-x-0 bottom-6 z-30 flex justify-center">
        <button
          type="button"
          onClick={onContinue}
          className="pointer-events-auto inline-flex w-full max-w-[12rem] justify-center rounded-full border border-white/30 px-6 py-2 text-sm font-semibold uppercase tracking-[0.2em] text-white transition hover:bg-white/10"
        >
          Continue
        </button>
      </div>
    </div>
  );
};

const Scene = ({ selected }: { selected: GenderOption }) => {
  const rampRef = useRef<THREE.Group>(null);
  const rotationRef = useRef(0);

  useFrame((_, delta) => {
    const target = selected === "male" ? Math.PI : 0;
    rotationRef.current = MathUtils.damp(rotationRef.current, target, 4, delta);
    if (rampRef.current) {
      rampRef.current.rotation.y = rotationRef.current;
    }
  });

  return (
    <>
      <color attach="background" args={["#020202"]} />
      <ambientLight intensity={0.25} />
      <spotLight position={[0, 7, 2]} angle={0.5} penumbra={0.5} intensity={2} color="#f8f5ff" />
      <pointLight position={[4, 3, 2]} intensity={1.5} color="#ccff00" />
      <pointLight position={[-4, 2, -2]} intensity={1} color="#6dc8ff" />
      <Environment preset="night" />

      <group ref={rampRef} position={[0, -1.4, 0]}>
        <Platform />
        <group position={[0, 0.3, 1.2]}>
          <Athlete variant="female" isActive={selected === "female"} />
        </group>
        <group position={[0, 0.3, -1.2]} rotation={[0, Math.PI, 0]}>
          <Athlete variant="male" isActive={selected === "male"} />
        </group>
      </group>
      <ContactShadows position={[0, -1.6, 0]} opacity={0.5} scale={8} blur={2.5} far={3} color="#050505" />
    </>
  );
};

const Platform = () => (
  <group>
    <mesh rotation={[-Math.PI / 2, 0, 0]}>
      <circleGeometry args={[1.8, 96]} />
      <meshStandardMaterial color="#050505" />
    </mesh>
    <mesh rotation={[-Math.PI / 2, 0, 0]} position={[0, 0.01, 0]}>
      <ringGeometry args={[1.4, 1.65, 96]} />
      <meshStandardMaterial color="#ccff00" transparent opacity={0.28} emissive="#ccff00" emissiveIntensity={0.5} />
    </mesh>
    <mesh rotation={[-Math.PI / 2.1, 0, 0]} position={[0, 0.02, 0]}>
      <ringGeometry args={[0.6, 1.35, 96]} />
      <meshStandardMaterial color="#0f172a" transparent opacity={0.85} />
    </mesh>
  </group>
);

const Athlete = ({ variant, isActive }: { variant: GenderOption; isActive: boolean }) => {
  const { url, accent, scale } = modelConfig[variant];
  const { scene } = useGLTF(url);

  const meshesRef = useRef<THREE.Mesh[]>([]);

  const clonedScene = useMemo(() => {
    const clone = SkeletonUtils.clone(scene);
    meshesRef.current = [];
    clone.traverse((child) => {
      if ((child as THREE.Mesh).isMesh) {
        const mesh = child as THREE.Mesh;
        mesh.castShadow = true;
        mesh.receiveShadow = true;
        const material = (mesh.material as THREE.MeshStandardMaterial).clone();
        material.color = new Color("#f4f4f6");
        material.roughness = 0.35;
        material.metalness = 0.15;
        material.emissive = new Color(accent);
        material.emissiveIntensity = 0.25;
        material.opacity = 0.95;
        material.transparent = true;
        mesh.material = material;
        meshesRef.current.push(mesh);
      }
    });
    return clone;
  }, [scene, accent]);

  useEffect(() => {
    meshesRef.current.forEach((mesh) => {
      const material = mesh.material as THREE.MeshStandardMaterial;
      material.emissiveIntensity = isActive ? 0.7 : 0.25;
      material.opacity = isActive ? 1 : 0.85;
      material.color = new Color(isActive ? "#ffffff" : "#d7d8dd");
    });
  }, [isActive]);

  return (
    <group scale={scale} position={[0, -0.2, 0]}>
      <primitive object={clonedScene} dispose={null} />
      <mesh position={[0, -1.35, 0]}>
        <torusGeometry args={[0.5, 0.01, 16, 120]} />
        <meshStandardMaterial color={accent} transparent opacity={0.8} />
      </mesh>
    </group>
  );
};

useGLTF.preload(modelConfig.male.url);
useGLTF.preload(modelConfig.female.url);

export default HologramAvatar;

