
const HeroSection = () => {
    return (
        <div className="font-[sans-serif] bg-gray-50 px-4 py-12">
            <div className="text-center max-w-2xl max-md:max-w-md mx-auto">
                <div>
                    <p className="text-sm font-bold text-blue-600 mb-4"><span className="rotate-90 inline-block mr-2">|</span> ALL IN ONE MEETING SCHEDULER</p>
                    <h2 className="text-gray-800 md:text-5xl text-3xl font-extrabold mb-4 md:!leading-[55px]">Schedule meetings effortlessly</h2>
                    <p className="mt-6 text-base text-gray-500 leading-relaxed">Embark on a gastronomic journey with our curated dishes, delivered promptly to your doorstep. Elevate your dining experience today.</p>

                    <div className="bg-white mt-12 flex px-1 py-1.5 rounded-full shadow-md border overflow-hidden">
                        <input type='email' placeholder='Search Something...' className="w-full text-gray-800 outline-none pl-4 text-sm" />
                        <button type='button'
                            className="bg-blue-600 hover:bg-blue-700 px-5 py-2.5 transition-all text-white tracking-wide text-sm rounded-full">Search</button>
                    </div>
                </div>

                <div className="grid grid-cols-2 md:grid-cols-4 gap-4 items-center mt-6">
                    <img src="https://readymadeui.com/google-logo.svg" className="w-28 mx-auto" alt="google-logo" />
                    <img src="https://readymadeui.com/facebook-logo.svg" className="w-28 mx-auto" alt="facebook-logo" />
                    <img src="https://readymadeui.com/linkedin-logo.svg" className="w-28 mx-auto" alt="linkedin-logo" />
                    <img src="https://readymadeui.com/pinterest-logo.svg" className="w-28 mx-auto" alt="pinterest-logo" />
                </div>
            </div>
        </div>
    );
};

export default HeroSection;