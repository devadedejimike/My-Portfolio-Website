import PP from '../images/myImg.jpg';

const About = () => {
    const skills = [
        { name: "React", icon: "react", color: "61DAFB" },
        { name: "TypeScript", icon: "typescript", color: "3178C6" },
        { name: "ExpressJS", icon: "express", color: "000000" },
        { name: "MongoDB", icon: "mongodb", color: "47A248" },
        { name: "NodeJS", icon: "nodedotjs", color: "339933" },
        { name: "Git", icon: "git", color: "F05032" }
    ];

    return (
        <section id='about' className='py-20 px-6 bg-gradient-to-b from-white to-blue-50'>
            <div className='max-w-4xl mx-auto mb-16 overflow-hidden bg-white rounded-2xl shadow-xl md:flex'>
                {/* Image Container */}
                <div className='md:w-1/3 h-64 md:h-auto bg-blue-100'>
                    <img
                        className='h-full w-full object-cover shadow-xl' 
                        src={PP}
                        alt="Adeyemi Adedeji Michael"
                        fetchPriority="high"
                    />
                </div>

                {/* Text Container */}
                <div className='p-8 md:p-12 md:w-2/3 flex flex-col justify-center'>
                    <div className='text-3xl font-bold text-blue-600 mb-4'>About Me</div>
                    <p className='text-gray-700 leading-relaxed mb-4'>
                        I&apos;m a passionate <span className='font-semibold text-gray-900'>Fullstack Javascript Developer</span> dedicated to building
                        modern, scalable, and efficient web applications. I specialize in 
                        <span className='font-semibold text-blue-600'> React, TypeScript, Node.js, Express.js, and MongoDB</span>.
                    </p>
                    <p className='text-gray-700 leading-relaxed'>
                        My approach combines technical precision with design intuition, ensuring every project is both functional and visually appealing.
                    </p>
                </div>
            </div>

            {/* Skills with Icons */}
            <div className='text-center max-w-5xl mx-auto'>
                <h3 className='text-2xl font-bold text-gray-800 mb-8'>Skills & Technologies</h3>
                <div className='grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 gap-6'>
                    {skills.map(skill => (
                        <div key={skill.name} className='rounded-xl p-6 bg-white shadow-sm hover:shadow-md transition-all transform hover:-translate-y-1 flex flex-col items-center gap-3 border border-gray-50'>
                            <img 
                                src={`https://cdn.simpleicons.org/${skill.icon}/${skill.color}`} 
                                alt={skill.name}
                                className="w-10 h-10 object-contain"
                            />
                            <p className='font-bold text-sm text-gray-700'>{skill.name}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default About;