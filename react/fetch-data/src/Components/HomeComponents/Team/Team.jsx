
const Team = () => {
    return (
        <div className="font-sans mb-10">
            <div className="max-w-5xl mx-auto">
                <div className="text-center">
                    <h2 className="text-gray-800 text-4xl font-extrabold">Meet our team</h2>
                </div>

                <div className="grid sm:grid-cols-3 gap-8 max-sm:justify-center mt-12 max-sm:max-w-xs mx-auto">
                    <div className="bg-gray-800 p-4 border rounded-lg">
                        <img src="https://readymadeui.com/team-1.webp" className="w-full object-contain object-top rounded-lg" />

                        <div className="text-center mt-4">
                            <h4 className="text-base font-semibold text-white">Software Engineer</h4>
                            <p className="text-xs mt-2 text-white">John Doe</p>
                        </div>
                    </div>

                    <div className="bg-gray-800 p-4 border rounded-lg">
                        <img src="https://readymadeui.com/team-2.webp" className="w-full object-contain object-top rounded-lg" />

                        <div className="text-center mt-4">
                            <h4 className="text-base font-semibold text-white">Web Developer</h4>
                            <p className="text-xs mt-2 text-white">Mark Adair</p>
                        </div>
                    </div>

                    <div className="bg-gray-800 p-4 border rounded-lg">
                        <img src="https://readymadeui.com/team-3.webp" className="w-full object-contain object-top rounded-lg" />

                        <div className="text-center mt-4">
                            <h4 className="text-base font-semibold text-white">Web Designer</h4>
                            <p className="text-xs mt-2 text-white">Simon Konecki</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Team;