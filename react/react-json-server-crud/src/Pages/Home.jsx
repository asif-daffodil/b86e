import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import { Link } from "react-router";

const Home = () => {
    const {data, loading, isFetched} = useQuery({
        queryKey: ["home"],
        queryFn: async () => {
            const response = await axios.get("http://localhost:3000/posts");
            return response.data;
        }
    });

    if (loading) {
        return <div>Loading...</div>;
    }

    return (
        <div className="container mx-auto p-4">
            {isFetched && data.map((post) => (
                <div key={post.id} className="bg-white shadow-md rounded-lg p-6 mb-4">
                    <Link to={"/"+post.id} className="text-2xl font-bold mb-2">{post.title}</Link>
                    <p className="text-gray-700">{post.views} views</p>
                </div>
            ))}
        </div>
    );
};

export default Home;