import { useState } from "react";
import { Helmet } from "react-helmet-async";
import { TiArrowBackOutline } from "react-icons/ti";
import { Link } from "react-router-dom";
import Swal from "sweetalert2";

const NewUser = () => {
    const [gender, setGender] = useState("");
    const [status, setStatus] = useState("");



    const handleNewUser = (event) => {
        event.preventDefault();
        const form = event.target;
        const name = form.name.value;
        const email = form.email.value;
        const newUser = { name, email, gender, status }

        fetch('http://localhost:5000/all-users', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(newUser)
        })
            .then(res => res.json)
            .then(data => {
                console.log(data)
                if (data) {
                    Swal.fire({
                        position: "center",
                        icon: "success",
                        title: "Your work has been saved",
                        showConfirmButton: false,
                        timer: 3000
                    });
                }
                form.reset();
            })
    };

    return (
        <div className="container mx-auto py-10">
            <Helmet>
                <title>USER | Add New User</title>
            </Helmet>
            <Link to='/'>
                <button className="btn text-[#5306E0]">
                    <TiArrowBackOutline />
                    All Users
                </button>
            </Link>
            <div className="flex flex-col items-center">
                <h3 className="text-3xl font-medium">New User</h3>
                <p className="text-lg pb-5">
                    Use the below form to create a new account
                </p>
                <form onSubmit={handleNewUser} className="space-y-5 w-[80%]">
                    <label className="floating-label">
                        <span>Your Name</span>
                        <input
                            type="text"
                            name="name"
                            placeholder="Your Name"
                            className="input input-success input-lg focus:outline-none w-full"
                            required
                        />
                    </label>
                    <label className="floating-label">
                        <span className="">Your Email</span>
                        <input
                            type="email"
                            name="email"
                            placeholder="Your Email"
                            className="input  input-success input-lg focus:outline-none w-full"
                            required
                        />
                    </label>

                    {/* Gender Section */}
                    <div className="flex text-lg items-center space-x-6">
                        <span className="w-20">Gender</span>
                        <label className="label cursor-pointer flex items-center space-x-2">
                            <input
                                type="radio"
                                name="gender"
                                value="Male"
                                checked={gender === "Male"}
                                onChange={(e) => setGender(e.target.value)}
                                className="radio radio-sm radio-success"
                                required
                            />
                            <span className="text-gray-900">Male</span>
                        </label>
                        <label className="label cursor-pointer flex items-center space-x-2">
                            <input
                                type="radio"
                                name="gender"
                                value="Female"
                                checked={gender === "Female"}
                                onChange={(e) => setGender(e.target.value)}
                                className="radio radio-sm radio-success"
                                required
                            />
                            <span className="text-gray-900">Female</span>
                        </label>
                    </div>

                    {/* Status Section */}
                    <div className="flex items-center text-lg space-x-6">
                        <span className="w-20">Status</span>
                        <label className="label cursor-pointer flex items-center space-x-2">
                            <input
                                type="radio"
                                name="status"
                                value="Active"
                                checked={status === "Active"}
                                onChange={(e) => setStatus(e.target.value)}
                                className="radio radio-md radio-success"
                            />
                            <span className="text-gray-900">Active</span>
                        </label>
                        <label className="label cursor-pointer flex items-center space-x-2">
                            <input
                                type="radio"
                                name="status"
                                value="Inactive"
                                checked={status === "Inactive"}
                                onChange={(e) => setStatus(e.target.value)}
                                className="radio radio-sm radio-success"
                            />
                            <span className="text-gray-900">Inactive</span>
                        </label>
                    </div>

                    <input
                        type="submit"
                        className="btn w-full btn-success btn-xs sm:btn-sm md:btn-md lg:btn-lg xl:btn-xl"
                        value="Save"
                    />
                </form>
                <h3 className="pt-5">Already have an a Account? Please
                    <Link to='/login' className="font-bold text-[#5306E0] hover:underline px-2">Login </Link>
                </h3>
            </div>
        </div>
    );
};

export default NewUser;
