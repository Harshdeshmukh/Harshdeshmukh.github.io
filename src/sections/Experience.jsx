import { Suspense, useState } from 'react';
import { Canvas } from '@react-three/fiber';
import { OrbitControls } from '@react-three/drei';

import Developer from '../components/Developer.jsx';
import CanvasLoader from '../components/Loading.jsx';
import { workExperiences } from '../constants/index.js';

const WorkExperience = () => {
    const [animationName, setAnimationName] = useState('idle');

    return (
        <section className="c-space my-20" id="work">
            <div className="w-full text-white-600">
                <p className="head-text">My Work Experience</p>

                <div className="work-container">
                    <div className="work-canvas">
                        <Canvas>
                            <ambientLight intensity={7} />
                            <spotLight position={[10, 10, 10]} angle={0.15} penumbra={1} />
                            <directionalLight position={[10, 10, 10]} intensity={1} />
                            <OrbitControls enableZoom={false} maxPolarAngle={Math.PI / 2} />

                            <Suspense fallback={<CanvasLoader />}>
                                <Developer position-y={-3} scale={3} animationName={animationName} />
                            </Suspense>
                        </Canvas>
                    </div>

                    <div className="work-content">
                        <div className="sm:py-10 py-5 sm:px-5 px-2.5">
                            {workExperiences.map((item, index) => (
                                <div
                                    key={index}
                                    onClick={() => setAnimationName(item.animation.toLowerCase())}
                                    onPointerOver={() => setAnimationName(item.animation.toLowerCase())}
                                    onPointerOut={() => setAnimationName('idle')}
                                    className="work-content_container group"
                                >
                                    {/* Logo & Pointer Bar (Alignment Fixed) */}
                                    <div className="flex flex-col h-full justify-start items-center py-2">
                                        <div className="work-content_logo">
                                            <img className="w-full h-full" src={item.icon} alt="" />
                                        </div>
                                        <div className="work-content_bar" />
                                    </div>

                                    {/* Work Details */}
                                    <div className="sm:p-5 px-2.5 py-5">
                                        <p className="font-bold text-lg text-white-800">{item.name}</p>
                                        <p className="text-sm mb-2">
                                            {item.pos} — <span>{item.duration}</span>
                                        </p>

                                        <ul className="list-disc list-inside text-sm space-y-1 group-hover:text-white transition-all ease-in-out duration-500">
                                            {item.title.map((point, i) => (
                                                <li key={i} className="flex items-start max-w-full whitespace-normal break-words">
                                                    <span className="mr-2">•</span>
                                                    {point}
                                                </li>
                                            ))}
                                        </ul>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default WorkExperience;