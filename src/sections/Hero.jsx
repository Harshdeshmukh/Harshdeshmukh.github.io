import {Canvas} from "@react-three/fiber";
import {PerspectiveCamera} from "@react-three/drei";
import HackerRoom from "../components/HackerRoom.jsx";
import {Suspense} from "react";
import {useMediaQuery} from "react-responsive";
import {calculateSizes} from "../constants/index.js";
import Target from "../components/Target.jsx";
import ReactLogo from "../components/ReactLogo.jsx";
import Cube from "../components/Cube.jsx";
import Rings from "../components/Rings.jsx";
import HeroCamera from "../components/HeroCamera.jsx";
import Button from "./Button.jsx";

const Hero = () => {
    const isSmall = useMediaQuery({maxWidth: 440});
    const isMobile = useMediaQuery({maxWidth: 768});
    const isTablet = useMediaQuery({minWidth: 768, maxWidth: 1024});

    const sizes = calculateSizes(isSmall, isMobile, isTablet);
    return (
        <section className={`min-h-screen w-full flex flex-col relative`} id="home">
            <div className={`w-full mx-auto flex flex-col sm:mt-36 mt-20 c-space gap-3`}>
                <p className={`sm:text-3xl text-2xl font-generalsans font-medium text-white text-center`}>
                    Hi, I am Harshvardhan <span className={`waving-hand`}>👋</span>
                </p>
                <p className={`hero_tag text-gray_gradient `}>
                    Software Engineer
                </p>
                <div className={`w-full h-full inset-0 absolute`}>
                    <Canvas className={`h-full w-full`}>
                        <Suspense fallback={null}>
                            <PerspectiveCamera makeDefault position={[0, 0, 20]}/>
                            <HeroCamera isMobile={isMobile}>
                                <HackerRoom
                                    scale={sizes.deskScale}
                                    position={sizes.deskPosition}
                                    rotation={[0, -Math.PI, 0]}
                                />
                            </HeroCamera>
                            <group>
                                <Target position={sizes.targetPosition}/>
                                <ReactLogo position={sizes.reactLogoPosition}/>
                                <Cube position={sizes.cubePosition}/>
                                <Rings position={sizes.ringPosition}/>
                            </group>
                            <ambientLight intensity={1}/>
                            <directionalLight position={[10, 10, 10]} intensity={0.5}/>
                        </Suspense>
                    </Canvas>
                </div>
                <div className={`absolute bottom-7 left-0 right-0 w-full z-10 c-space`}>
                    <a href="#about" className={`w-fit`}>
                        <Button name={"Let's Work Together"} isBeam
                                containerClass="w-full sm:w-fit "/>
                    </a>
                </div>
            </div>
        </section>
    )
}
export default Hero
