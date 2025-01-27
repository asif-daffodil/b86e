import Hero from "../../Components/HomeComponents/Hero/Hero";
import Team from "../../Components/HomeComponents/Team/Team";
import useTitle from "../../Hooks/useTitle";

const Home = () => {
    return (
        <>
            {useTitle("Home")}
            <Hero />
            <Team />
        </>
    );
};

export default Home;