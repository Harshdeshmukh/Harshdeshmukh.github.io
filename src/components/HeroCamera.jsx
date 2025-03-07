import { useRef } from "react";
import { useFrame } from "@react-three/fiber";
import { easing } from "maath";

const HeroCamera = ({ children, isMobile }) => {
    const groupRef = useRef();
    const timeRef = useRef(0);

    useFrame((state, delta) => {
        easing.damp3(state.camera.position, [0, 0, 20], 0.25, delta);

        timeRef.current += delta;

        if (isMobile) {
            // Add a subtle floating effect in mobile view
            const floatY = Math.sin(timeRef.current) * 0.1;
            const floatX = Math.cos(timeRef.current * 0.5) * 0.05;
            const rotateY = Math.sin(timeRef.current * 0.5) * 0.5; // Half-circle rotation effect
            
            easing.damp3(groupRef.current.position, [floatX, floatY, 0], 0.1, delta);
            groupRef.current.rotation.y = rotateY; // Restrict rotation to half-circle
        } else {
            easing.damp3(
                groupRef.current.rotation,
                [-state.pointer.y / 3, state.pointer.x / 5, 0],
                0.25,
                delta
            );
        }
    });

    return <group ref={groupRef} scale={isMobile ? 1 : 1.3}>{children}</group>;
};

export default HeroCamera;
