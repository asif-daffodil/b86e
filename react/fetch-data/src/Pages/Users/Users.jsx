import { useQuery } from "@tanstack/react-query";
import useTitle from "../../Hooks/useTitle";
import axios from "axios";
import Loading from "../../Components/Loading";
import User from "../../Components/User/User";

const Users = () => {
    const { data, isFetching } = useQuery({
        queryKey: "users",
        queryFn: async () => {
            const { data } = await axios.get("https://jsonplaceholder.typicode.com/users");
            return data;
        },
    })

    return (
        <>
            {useTitle("Users")}
            {isFetching ? (
                <Loading />
            ) : (
                <div className="container mx-auto p-4">
                    <h1 className="text-3xl font-bold mb-4">Users</h1>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                        {data.map((user) => (
                            <User key={user.id} {...user} />
                        ))}
                    </div>
                </div>
            )}
        </>
    );
};

export default Users;