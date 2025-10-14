import PP from '../images/myImg.jpg'

const About = () => {
    const skills = ["React", "TypeScript", "ExpressJS", "MongoDB", "NodeJS", "Git"]
    return (
        <div id='about' className='py-16 px-6 flex flex-col items-center bg-gradient-to-b from-white to-blue-50'>
            <div className='mx-auto mb-12 max-w-3xl overflow-hidden bg-white rounded-2xl shadow-xl md:flex'>
                <div className='md:w-1/3 flex justify-center items-center bg-blue-100'>
                    <img
                        className='h-56 w-56 md:h-64 md:w-64 object-cover rounded-full md:rounded-none md:rounded-1-2xl shadow-xl' 
                        src={PP}
                        alt="Adeyemi Adedeji Michael"
                    />
                </div>
                <div className='p-8 md:w-2/3'>
                    <div className='text-3xl font-bold text-blue-600 mb-4'>About Me</div>
                    <p className='text-gray-700 leading-relaxed mb-4'>I&apos;m a passionate <span className='font-semibold'>Fullstack Javascript Developer</span> dedicated to building
                    modern, scalable, and efficient web applications. I specialize in <span className='font-semibold text-blue-600'>React, TypeScript, Node.js, Express.js, and MongoDB</span>, staying up-to-date with the latest tools and best practices.</p>
                    <p className='text-gray-700 leading-relaxed'> My approach combines technical precision with design intuition, ensuring every project is both functional and visually appealing. When I&apos;m not coding, I enjoy exploring new technologies, contributing to and sharing knowledge with the developers community.
                    </p>
                </div>
            </div>
            <div className='text-center'>
                <h3 className='text-2xl font-semibold text-gray-800 mb-6'>Skills &amp; Technologies</h3>
                <div className='grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 gap-4'>
                    {skills.map(skill => 
                        (<div key={skill} className='rounded-xl p-4 bg-white shadow-sm hover:shadow-lg transition-transform transform hover:-translate-y-1'>
                            <p className='font-medium text-gray-700'>{skill}</p>
                        </div>)
                    )}
                </div>
            </div>
        </div>
        
    );
};

export default About;
