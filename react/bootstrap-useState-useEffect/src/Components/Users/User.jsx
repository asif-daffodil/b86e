
const User = ({user}) => {
    return (
        <div className="col-md-4">
            <div className="card mb-4 shadow-sm">
                <div className="card-body">
                    <h5>{user.name}</h5>
                    <p>{user.email}</p>
                    <p>{user.phone}</p>
                    <p>{user.website}</p>
                </div>
            </div>
        </div>
    );
};

export default User;