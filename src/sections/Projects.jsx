import {myProjects} from "../constants/index.js";
import {Suspense, useState} from "react";
import {Canvas} from "@react-three/fiber";
import {Center, OrbitControls} from "@react-three/drei";
import CanvasLoader from "../components/CanvasLoader.jsx";
import DemoComputer from "../components/DemoComputer.jsx";

const Projects = () => {
    const [selectedProjectIndex, setSelectedProjectIndex] = useState(0);
    const currentProject = myProjects[selectedProjectIndex];

    const handleNavigation = (direction) => {
        setSelectedProjectIndex((prevIndex) => {
            if (direction === "previous") {
                return prevIndex === 0 ? myProjects.length - 1 : prevIndex - 1;
            } else {
                return prevIndex === myProjects.length - 1 ? 0 : prevIndex + 1;
            }
        })
    }
    return (
        <section className="c-space my-20" id="projects">
            <p className="head-text"> My Work</p>
            <div className="grid grid-cols-1 lg:grid-cols-2 mt-12 w-full gap-5">
                <div className="flex flex-col gap-5 relative m:p-10 py-10 px-5 shadow-2xl shadow-black-200">
                    <div className="top-0 right-0 absolute">
                        <img className="w-full h-96 rounded-xl object-cover" src={currentProject.spotlight}
                             alt="spotlight"/>
                    </div>
                    <div className="p-3 backdrop-filter backdrop-blur-3xl w-fit rounded-lg"
                         style={currentProject.logoStyle}>
                        <img className="w-10 h-10 shadow-sm" src={currentProject.logo} alt={currentProject.title}/>
                    </div>
                    <div className="flex flex-col gap-5 my-5 text-white-600 ">
                        <p className="text-2xl font-semibold animatedText">{currentProject.title}</p>
                        <p className="animatedText">{currentProject.desc}</p>
                        <p className="animatedText">{currentProject.subdesc}</p>
                    </div>

                    <div className="flex items-center justify-between flex-wrap gap-5">
                        <div className="flex items-center gap-3">
                            {
                                currentProject.tags.map((tag, index) => (
                                    <div key={index} className="tech-logo">
                                        <img src={tag.path} alt={tag.name}/>
                                    </div>
                                ))
                            }
                        </div>
                    </div>
                    <div className="flex justify-between items-center mt-7">
                        <button className="left-arrow-btn" onClick={() => handleNavigation('previous')}>
                            <img src="/assets/left-arrow.png" alt="left arrow" className="w-4 h-4"/>
                        </button>
                        <button className="right-arrow-btn" onClick={() => handleNavigation('next')}>
                            <img src="/assets/right-arrow.png" alt="right arrow" className="w-4 h-4"/>
                        </button>
                    </div>
                </div>
                <div className="border border-black-300 bg-black-200 rounded-lg h-96 md:h-full">
                    <Canvas>
                        <ambientLight intensity={Math.PI}/>
                        <directionalLight position={[10, 10, 5]}/>
                        <Center>
                            <Suspense fallback={<CanvasLoader/>}>
                                <group scale={1.5} position={[0, -2, 0]} rotation={[0, -0.1, 0]}>
                                    <DemoComputer texture={currentProject.texture}/>
                                </group>
                            </Suspense>
                        </Center>
                        <OrbitControls maxPolarAngle={Math.PI / 2} enableZoom={false}/>
                    </Canvas>
                </div>
            </div>
        </section>
    )
}
export default Projects
