
const SearchForm = ({ handleSubmit, onSubmit, register, errors }) => {
    return (
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
    );
};

export default SearchForm;