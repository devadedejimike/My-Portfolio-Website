

const Home = () => {
    return (
        <div>
            <section id="home" className="min-h-screen flex flex-col items-center justify-center text-center px-6 bg-gradient-to-b from-blue-100 to-green-100">
                <h2 className="text-4xl md:text-5xl font-bold text-gray-900 leading-tight mb-4">Hey👋, I&apos;m <span className="text-blue-600">Adeyemi Adedeji Michael</span>.
                </h2>

                <p className="text-2xl md:text-3xl text-gray-700 font-semibold mb-6">
                    Fullstack JavaScript Developer
                </p>

                <p className="max-w-2xl text-gray-600 text-lg leading-relaxed">I craft beautiful, responsive web applications using modern technologies.<br />
                Passionate about creating exceptional user experiences and writing clean, scalable code.</p>

                <div className="space-x-6 p-3 font-medium">
                    <button className="px-6 py-3 bg-white rounded-full hover:bg-blue-300 hover:text-white">Hire Me</button>
                    <button className="px-6 py-3 bg-blue-100 rounded-full hover:bg-blue-300 hover:text-white">Download CV</button>
                </div>
            </section> 
        </div>
    );
};

export default Home;