import { useForm } from "react-hook-form";

const App = () => {
  const {register, handleSubmit, formState: {errors}, reset} = useForm();
  const onSubmit = data => {
    console.log(data)
    reset();
  };
  return (
    <div className="h-screen w-full flex ">
      <div className="border border-stone-400 rounded p-4 m-auto w-96">
        <h1 className="text-3xl font-bold mb-4">Registration Form</h1>
        <form action="" onSubmit={handleSubmit(onSubmit)}>
          <input type="text" placeholder="Your Name" {...register("name", {
            required: {
              value: true,
              message: "Please enter your name"
            },
            minLength: {
              value: 3,
              message: "Name must be at least 3 characters"
            }
          })} className="block border border-stone-400 w-full rounded py-1 px-2 focus:shadow-lg focus:shadow-stone-500 focus:outline-0 mb-2" />
          <p className="text-red-500 text-sm mb-3">{errors.name && errors.name.message}</p>
          <button type="submit" className="px-4 py-2 rounded bg-blue-600 text-white cursor-pointer hover:shadow-lg hover:shadow-stone-500">Submit</button>
        </form>
      </div>
    </div>
  );
};

export default App;