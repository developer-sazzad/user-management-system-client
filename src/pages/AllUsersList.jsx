import { useState } from "react";
import { Helmet } from "react-helmet-async";
import { CiEdit } from "react-icons/ci";
import { MdDelete } from "react-icons/md";
import { RiUserFill } from "react-icons/ri";
import { Link, useLoaderData } from "react-router-dom";
import Swal from "sweetalert2";

const AllUsersList = () => {
    const loadedUsers = useLoaderData();
    const [users, setUsers] = useState(loadedUsers)

    const handleDelete = _id => {
        Swal.fire({
            title: "Are you sure?",
            text: "You won't be able to revert this!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, delete it!"
        }).then((result) => {
            if (result.isConfirmed) {
                fetch(`http://localhost:5000/all-users/${_id}`, {
                    method: 'DELETE'
                })
                    .then(res => res.json())
                    .then(data => {
                        if (data.deletedCount > 0) {
                            Swal.fire({
                                title: "Deleted!",
                                text: "User has been DELETED successfull.",
                                icon: "success"
                            });
                            const remaining = users.filter(us => us._id !== _id);
                            setUsers(remaining);
                        }
                    })
            }
        });
    }

    return (
        <div className="w-[80%] mx-auto space-y-5 py-20">
            <Helmet>
                <title>USER | All User Page</title>
            </Helmet>
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
                        users.map((user, index) => <tr key={user._id}>
                            <th>{index + 1}</th>
                            <td className="text-lg">{user.name}</td>
                            <td className="text-lg">{user.email}</td>
                            <td className="text-lg">{user.gender}</td>
                            <td className="text-lg">{user.status}</td>
                            <td className="flex justify-center gap-3">
                                <button className="btn bg-white text-[#5306E0] shadow-xl text-2xl">
                                    <CiEdit />
                                </button>
                                <button onClick={() => handleDelete(user._id)} className="btn bg-white text-[#5306E0] shadow-lg text-xl">
                                    <MdDelete />
                                </button>
                            </td>
                        </tr>)
                    }

                </tbody>
            </table>
        </div>
    );
};

export default AllUsersList;