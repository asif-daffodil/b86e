import { useMutation } from "@tanstack/react-query";
import axios from "axios";
import { useForm } from "react-hook-form";
import { useState } from "react";

const AddPost = () => {
    const { register, handleSubmit, formState: { errors }, reset } = useForm();
    const [successMessage, setSuccessMessage] = useState(null);
    
    const mutation = useMutation({
        mutationFn: async (newPost) => {
            const response = await axios.post("http://localhost:3000/posts", newPost);
            return response.data;
        },
        onSuccess: () => {
            setSuccessMessage("Post added successfully!");
            reset();
        },
        onError: (error) => {
            setSuccessMessage(`Error: ${error.message}`);
        }
    });

    const onSubmit = async (data) => {
        setSuccessMessage(null);  // Clear previous success message
        mutation.mutate(data);
    };

    return (
        <div className="flex justify-center items-center min-h-[80vh] bg-gray-100">
            <form className="bg-white p-6 rounded shadow-md w-full max-w-sm" onSubmit={handleSubmit(onSubmit)}>
                <h2 className="text-2xl font-bold mb-4 text-center">Add Post</h2>
                <div className="mb-4">
                    <input 
                        type="text" 
                        placeholder="Title" 
                        className="w-full px-3 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
                        {...register("title", { required: true })}
                    />
                    {errors.title && <p className="text-red-500 text-xs mt-1">Title is required</p>}
                </div>
                <div className="mb-4">
                    <input 
                        type="number" 
                        placeholder="Views" 
                        className="w-full px-3 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
                        {...register("views", { required: true, valueAsNumber: true })}
                    />
                    {errors.views && <p className="text-red-500 text-xs mt-1">Views is required</p>}
                </div>

                <button 
                    type="submit" 
                    className="w-full bg-blue-500 text-white py-2 rounded hover:bg-blue-600 transition duration-200"
                    disabled={mutation.isLoading}
                >
                    {mutation.isLoading ? "Submitting..." : "Submit"}
                </button>

                {mutation.isError && <p className="text-red-500 text-xs mt-2">{mutation.error.message}</p>}
                {successMessage && <p className="text-green-500 text-xs mt-2">{successMessage}</p>}
            </form>
        </div>
    );
};

export default AddPost;
