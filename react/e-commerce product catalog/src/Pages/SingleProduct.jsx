import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import { useNavigate, useParams } from "react-router";

const SingleProduct = () => {
    const { id } = useParams()
    const navigate = useNavigate()
    const {data, error, isLoading, isFetched} = useQuery({
        queryKey: ["single-product", id],
        queryFn: () => axios.get(import.meta.env.VITE_API_SINGLE_PRODUCT + "/"+ id)
    })

    if (isLoading) return <div>Loading...</div>
    if (error) return <div>An error occurred while fetching product</div>
    return (
        <div>
            {isFetched && (
                <div className="container mx-auto my-10">
                    <div className="flex justify-center">
                        <div className="bg-white shadow-md p-4 w-96">
                            <img src={data.data.thumbnail} alt={data.data.name} className="w-full h-96 object-cover" />
                            <div className="text-lg font-semibold">{data.data.name}</div>
                            <div className="text-sm text-gray-500">{data.data.description}</div>
                            <div className="text-lg font-semibold text-sky-500">${data.data.price}</div>
                            <button onClick={() => navigate(-1)} className="bg-sky-500 text-white px-3 py-2 rounded mt-2">Back</button>
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
};

export default SingleProduct;