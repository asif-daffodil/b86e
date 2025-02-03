import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import { useNavigate, useParams } from "react-router";

const SinglePost = () => {
    // get the post id from the URL
    const { id } = useParams();
    const navigate = useNavigate();

    const { data, loading, isFetched } = useQuery({
        queryKey: ["post", id],
        queryFn: async () => {
            const response = await axios.get(`http://localhost:3000/posts/${id}`);
            return response.data;
        }
    });

    if (loading) {
        return <div>Loading...</div>;
    }

    return (
        <div>
            {isFetched && (
                <div className="container mx-auto p-4">
                    <div className="bg-white shadow-md rounded-lg p-6 mb-4">
                        <h2 className="text-2xl font-bold mb-2">{data.title}</h2>
                        <p className="text-gray-700">{data.views} views</p>
                        <p className="text-gray-700">{data.body}</p>
                        <button
                            className="px-4 py-2 text-sm rounded-full font-bold text-white border-2 border-[#007bff] bg-[#007bff] transition-all ease-in-out duration-300 hover:bg-transparent hover:text-[#007bff]"
                            onClick={() => navigate("/")}>
                            Go back
                        </button>
                    </div>
                </div>
            )}
        </div>
    );
};

export default SinglePost;