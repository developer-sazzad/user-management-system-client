import { Helmet } from "react-helmet-async";
import { TiArrowBackOutline } from "react-icons/ti";
import { Link } from "react-router-dom";

const Register = () => {
    return (
        <div className="container mx-auto py-10">
            <Helmet>
                <title>USER | Register account</title>
            </Helmet>
            <Link to='/'>
                <button className="btn text-[#5306E0]">
                    <TiArrowBackOutline />
                    Back to Home
                </button>
            </Link>

            <div className="flex flex-col items-center">
                <h3 className="text-3xl font-medium">Register your account</h3>
                <p className="text-lg pb-5">
                    Use the below form to create a new account
                </p>
                <form className="space-y-5 w-[80%]">
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
                    {/* <div className="flex text-lg items-center space-x-6">
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
                    </div> */}


                    {/* <div className="flex items-center text-lg space-x-6">
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
                    </div> */}

                    <input
                        type="submit"
                        className="btn w-full btn-success btn-xs sm:btn-sm md:btn-md lg:btn-lg xl:btn-xl"
                        value="Save"
                    />
                </form>
                {/* <h3 className="pt-5">New this website? Please
                    <Link to='/register' className="font-bold text-[#5306E0] hover:underline px-2">Register </Link>
                </h3> */}
            </div>
        </div>
    );
};

export default Register;