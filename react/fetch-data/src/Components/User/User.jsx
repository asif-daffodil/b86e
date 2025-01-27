

const User = ({name, email}) => {
    return (
        <div className="bg-white shadow-md rounded-lg p-4">
            <h2 className="text-xl font-semibold">{name}</h2>
            <p className="text-gray-600">{email}</p>
        </div>
    );
};

export default User;