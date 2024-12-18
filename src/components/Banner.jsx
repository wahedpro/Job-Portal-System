import { CiLocationOn } from "react-icons/ci";
import { CgMenuGridO } from "react-icons/cg";
import { BiCategory } from "react-icons/bi";
import { IoSearchSharp } from "react-icons/io5";


const Banner = () => {
    return (
        <div className="bg-[url('src/assets/banner.png')] bg-cover">
            <div className="bg-black bg-opacity-60">
                <div className="w-[50%] mx-auto h-[450px] text-white flex flex-col gap-5 justify-center">

                    <div className="flex flex-col text-center gap-3">
                        <h1 className="text-4xl font-bold">The #1 <span className="text-[#85FF83]">Job Board for</span> Hiring or Find your next job</h1>
                        <p >Each month, more than 3 million job seekers turn to website in their search for work, making over 140,000 applications every single day</p>
                    </div>

                    <div className="bg-white py-3">
                        <form className="flex justify-between">
                            {/* Industry Dropdown */}
                            <div className="flex items-center px-4  border-r">
                                <label htmlFor="industry-select" className="sr-only">Select Industry</label>
                                <i className="text-gray-700"><BiCategory/></i>
                                <select id="industry-select" name="industry" className="appearance-none ml-2 p-2 bg-transparent focus:outline-none text-gray-700">
                                    <option>Industry</option>
                                    <option>IT</option>
                                    <option>Healthcare</option>
                                    <option>Finance</option>
                                </select>
                            </div>

                            {/* Location Dropdown */}
                            <div className="flex items-center px-4 border-r">
                                <label htmlFor="location-select" className="sr-only">Select Location</label>
                                <i className="text-gray-700"><CiLocationOn /></i>
                                <select id="location-select" name="location" className="appearance-none ml-2 p-2 bg-transparent focus:outline-none text-gray-700">
                                    <option>Location</option>
                                    <option>Dhaka</option>
                                    <option>Chattogram</option>
                                    <option>Khulna</option>
                                    <option>Rajshahi </option>
                                    <option>Sylhet </option>
                                    <option>Barishal </option>
                                    <option>Rangpur </option>
                                </select>
                            </div>

                            {/* Input Field */}
                            <div className="flex items-center flex-grow px-4 py-2">
                                <label htmlFor="search-input" className="sr-only">Search Industry</label>
                                <i className="text-gray-700"><CgMenuGridO /></i>
                                <input id="search-input" type="text" name="query" placeholder="Enter industry name" className="ml-2 w-full focus:outline-none text-gray-700" />
                            </div>

                            {/* Search Button */}
                            <button type="submit" className="bg-blue-500 text-white px-6 py-2 flex items-center mr-3">
                                <i><IoSearchSharp /></i>
                                Search
                            </button>
                        </form>
                    </div>

                    <div className="flex gap-5 justify-center">
                        <p className="font-semibold">Popular Searches:</p>
                        <div className="flex gap-2">
                            <a href="">Design,</a>
                            <a href="">Development,</a>
                            <a href="">Manager,</a>
                            <a href="">Senior</a>
                        </div>
                    </div>

                    <div className="flex justify-between">
                        <div>
                            <h3 className="text-3xl font-bold">265</h3>
                            <p>Daily Jobs Posted</p>
                        </div>
                        <div>
                            <h3 className="text-3xl font-bold">27</h3>
                            <p>Recruiters</p>
                        </div>
                        <div>
                            <h3 className="text-3xl font-bold">15</h3>
                            <p>Freelancers</p>
                        </div>
                        <div>
                            <h3 className="text-3xl font-bold">28</h3>
                            <p>Blog Tips</p>
                        </div>
                    </div>

                </div>
            </div>
        </div>
    );
};

export default Banner;