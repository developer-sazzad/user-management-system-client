import { RiUserFill } from "react-icons/ri";
import { Link, useLoaderData } from "react-router-dom";

const AllUsersList = () => {
    const users = useLoaderData(null);

    return (
        <div className="w-[80%] mx-auto space-y-5 py-20">
            <Link to='new-user'>
                <button className="btn bg-white text-[#5306E0] shadow-2xl mb-10">
                    New User
                    <RiUserFill />
                </button>
            </Link>
            <table className="table">
                {/* head */}
                <thead>
                    <tr className="bg-neutral text-white">
                        <th>Serial</th>
                        <th>Name</th>
                        <th>Email</th>
                        <th>Gender</th>
                        <th>Status</th>
                        <th>Actions</th>
                    </tr>
                </thead>
                <tbody>
                    {/* row 1 */}
                    {
                        users.map((user, index) => <tr>
                            <th>{index + 1}</th>
                            <td>{user.name}</td>
                            <td>{user.email}</td>
                            <td>{user.gender}</td>
                            <td>{user.status}</td>
                            <td className="flex justify-center gap-3">
                                <button className="btn btn-success">X</button>
                                <button className="btn btn-success">X</button>
                            </td>
                        </tr>)
                    }

                </tbody>
            </table>
        </div>
    );
};

export default AllUsersList;