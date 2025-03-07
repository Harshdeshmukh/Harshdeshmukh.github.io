import Globe from "react-globe.gl";
import Button from "./Button.jsx";
import {useEffect, useRef, useState} from "react";

const About = () => {
    const [hasCopied, setHasCopied] = useState(false);
    const globeRef = useRef(null);

    useEffect(() => {
        if (globeRef.current) {
            globeRef.current.pointOfView({lat: 20.5937, lng: 78.9629, altitude: 1.5}, 1000);
        }
    }, []);

    const handleCopy = () => {
        const email = "harshdeshmukh.dev@gmail.com";
        if (navigator.clipboard && window.isSecureContext) {
            // Preferred method
            navigator.clipboard.writeText(email).then(() => {
                setHasCopied(true);
                setTimeout(() => setHasCopied(false), 2000);
            }).catch(() => fallbackCopy(email));
        } else {
            // Fallback for mobile devices
            fallbackCopy(email);
        }
    };

    const fallbackCopy = (text) => {
        const textArea = document.createElement("textarea");
        textArea.value = text;
        document.body.appendChild(textArea);
        textArea.select();
        try {
            document.execCommand("copy");
            setHasCopied(true);
            setTimeout(() => setHasCopied(false), 2000);
        } catch (err) {
            console.error("Copy failed", err);
        }
        document.body.removeChild(textArea);
    };


    return (
        <section className="c-space my-20" id="about">
            <div className="grid xl:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-4 md:gap-8 h-full">

                {/* 🚀 Personal Introduction */}
                <div className="col-span-1">
                    <div className="grid-container h-full">
                        <img src="/assets/grid1.png" alt="Profile"
                             className="w-full h-auto max-h-[275px] mx-auto object-contain"/>
                        <div>
                            <p className="grid-headtext">🚀 Hi, I&apos;m Harshvardhan</p>
                            <p className="grid-subtext">
                                A <strong>Full-Stack Developer</strong> with expertise in React.js, Django, Ruby on
                                Rails, and Express.js.
                                I specialize in building high-performance, scalable web applications that deliver
                                real impact.
                            </p>
                        </div>
                    </div>
                </div>

                {/* ⚡ Tech Stack */}
                <div className="col-span-1">
                    <div className="grid-container h-full">
                        <img src="/assets/tech-stack-grid.png" alt="Tech Stack"
                             className="w-full h-auto max-h-[275px] mx-auto object-contain"/>
                        <div>
                            <p className="grid-headtext">⚡ Tech Stack</p>
                            <p className="grid-subtext">
                                <strong>Frontend:</strong> React.js, Next.js, Redux, TypeScript, TailwindCSS <br/>
                                <strong>Backend:</strong> Django, Ruby on Rails, Express.js, Node.js <br/>
                                <strong>Databases:</strong> PostgreSQL, MongoDB, MySQL <br/>
                                <strong>Other:</strong> REST APIs, GraphQL, Twilio, Google Cloud, CI/CD, Agile
                            </p>
                        </div>
                    </div>
                </div>

                {/* 🌍 Interactive Globe - Location */}
                <div className="col-span-1">
                    <div className="grid-container h-full">
                        <div className="rounded-3xl w-full flex justify-center items-center p-3">
                            <Globe
                                ref={globeRef}
                                height={window.innerWidth < 768 ? 250 : 300}
                                width={window.innerWidth < 768 ? 250 : 300}
                                backgroundColor="rgba(0, 0, 0, 0)"
                                globeImageUrl="/assets/earth-night.jpg"
                                bumpImageUrl="/assets/earth-topology.png"
                                showAtmosphere
                                showGraticules
                                htmlElementsData={[{lat: 18.516726, lng: 73.856255, name: "I'm Here"}]}
                                htmlElement={(d) => {
                                    const container = document.createElement('div');
                                    container.style.display = 'flex';
                                    container.style.flexDirection = 'column';
                                    container.style.alignItems = 'center';

                                    const img = document.createElement('img');
                                    img.src = '/assets/location-pin.svg';
                                    img.style.width = '30px';

                                    const label = document.createElement('div');
                                    label.innerText = d.name;
                                    label.style.color = 'white';
                                    label.style.fontSize = '12px';
                                    label.style.fontWeight = 'bold';
                                    label.style.marginTop = '5px';

                                    container.appendChild(img);
                                    container.appendChild(label);
                                    return container;
                                }}
                            />
                        </div>
                        <div>
                            <p className="grid-headtext">🌍 Pune, India 🇮🇳</p>
                            <p className="grid-subtext">Available for global & remote opportunities.</p>
                            <div className="flex justify-center md:justify-start mt-4">
                                <a href="#contact">
                                    <Button name="Let's Connect" isBeam containerClass="w-full"/>
                                </a>
                            </div>
                        </div>
                    </div>
                </div>

                {/* ❤️ Passion for Innovation */}
                <div className="md:col-span-2 col-span-1">
                    <div className="grid-container h-full">
                        <img src="/assets/grid3.png" alt="Innovation"
                             className="w-full h-auto max-h-[266px] mx-auto object-contain"/>
                        <div>
                            <p className="grid-headtext">❤️ Passion for Innovation</p>
                            <p className="grid-subtext">
                                I thrive at the intersection of technology and impact.
                                From architecting AI-powered solutions to designing real-time collaborative
                                tools,
                                I build products that scale, perform, and enhance user experiences.
                            </p>
                        </div>
                    </div>
                </div>

                {/* 📬 Contact - Quick & Easy */}
                <div className="col-span-1">
                    <div className="grid-container h-full">
                        <img src="/assets/grid4.png" alt="Contact"
                             className="w-full h-auto max-h-[276px] mx-auto object-contain"/>
                        <div className="space-y-2">
                            <p className="grid-headtext text-center">📬 Let&apos;s Talk</p>
                            <div
                                className="copy-container flex items-center justify-between gap-3 p-2 bg-gray-800 rounded-lg cursor-pointer w-full max-w-[300px] mx-auto overflow-hidden"
                                onClick={handleCopy}
                            >
                                <p className="text-lg font-medium text-white truncate">
                                    harshdeshmukh.dev@gmail.com
                                </p>
                                <img src={hasCopied ? '/assets/tick.svg' : '/assets/copy.svg'} alt="Copy"
                                     className="flex-shrink-0"/>
                            </div>
                        </div>
                    </div>
                </div>

            </div>
        </section>
    );
};

export default About;
