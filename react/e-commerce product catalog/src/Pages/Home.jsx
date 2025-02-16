import { useMutation } from "@tanstack/react-query";
import axios from "axios";
import { useState } from "react";
import { useForm } from "react-hook-form";
import SearchForm from "../Components/SearchForm";

const Home = () => {
    const [products, setProducts] = useState([]);
    const { register, handleSubmit, reset, formState: { errors } } = useForm();
    const getProductAPI = import.meta.env.VITE_API_SEARCH_PRODUCTS;
    const mutation = useMutation({
        mutationFn: (data) => axios.get(`${getProductAPI}/search?q=${data.name}`),
        onSuccess: (data) => {
            setProducts(data.data);
        },
        onError: (error) => {
            console.log("An error occurred while adding product", error);
        }
    });

    const onSubmit = (data) => {
        mutation.mutate(data);
        reset();
    }
    return (
        <div className="container mx-auto my-10">
            <div className="w-96 my-5 mx-auto">
                <SearchForm handleSubmit={handleSubmit} onSubmit={onSubmit} register={register} errors={errors} />
            </div>
            <div className="grid grid-cols-3 gap-4">
                {products?.products?.map((product) => (
                    <div key={product.id} className="bg-white shadow-md p-4">
                        <img src={product.thumbnail} alt={product.name} className="w-full h-96 object-cover" />
                        <div className="text-lg font-semibold">{product.name}</div>
                        <div className="text-sm text-gray-500">{product.description}</div>
                        <div className="text-lg font-semibold text-sky-500">${product.price}</div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Home;