import { useMutation } from "@tanstack/react-query";
import axios from "axios";
import { useState } from "react";
import { useForm } from "react-hook-form";

const Home = () => {
    const [products, setProducts] = useState([]);
    const { register, handleSubmit, reset, formState: { errors } } = useForm();
    const mutation = useMutation({
        mutationFn: (data) => axios.get(`https://dummyjson.com/products/search?q=${data.name}`),
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
                <form className="flex relative w-max shadow-md mx-auto shadow-sky-500" onSubmit={handleSubmit(onSubmit)}>
                    <input type="text" className="w-96 px-3 py-2 border rounded rounded-r-none border-sky-900" placeholder="Search product..." {...register("name", {
                        required: "Product name is required",
                        minLength: { value: 3, message: "Product name must be at least 3 characters" },
                    })} />
                    {errors.name && <div className="text-red-600 absolute top-full left-0 w-full">{errors.name.message}</div>}
                    <button className="border rounded rounded-l-none border-l-0 px-3 py-2 bg-sky-500 text-white border-sky-900 cursor-pointer hover:bg-sky-900">
                        Search
                    </button>
                </form>
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