

import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import { useState } from "react";
import { Link } from "react-router";

const AllProducts = () => {
    const [products, setProducts] = useState([]);
    const getProductAPI = import.meta.env.VITE_API_ALL_PRODUCTS;


    const {data, error, isLoading, isFetched} = useQuery({
        queryKey: ["products"],
        queryFn: () => axios.get(getProductAPI),
        onSuccess: (data) => {
            setProducts(data.data);
        },
        onError: (error) => {
            console.log("An error occurred while fetching products", error);
        }
    })

    if (isLoading) return <div>Loading...</div>
    if (error) return <div>An error occurred while fetching products</div>
    return (
        <div className="container mx-auto my-10">
            <div className="grid grid-cols-3 gap-4">
                {isFetched && data.data.products.map((product) => (
                    <div key={product.id} className="bg-white shadow-md p-4">
                        <img src={product.thumbnail} alt={product.title} className="w-full h-96 object-cover" />

                        <div className="text-lg font-semibold"><Link to={`../single-product/${product.id}`} >{product.title}</Link></div>
                        <div className="text-sm text-gray-500">{product.description}</div>
                        <div className="text-lg font-semibold text-sky-500">${product.price}</div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default AllProducts;