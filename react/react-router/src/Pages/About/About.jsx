import OurTeam from "../../assets/Components/AboutComponents/OurTeam/OurTeam";
import Testimonials from "../../assets/Components/AboutComponents/Testimonials/Testimonials";

const About = () => {
    return (
        <div>
            <OurTeam />
            <h1 className="text-3xl text-center font-bold text-gray-800 mt-20">Testimonials</h1>
            <Testimonials />
        </div>
    );
};

export default About;