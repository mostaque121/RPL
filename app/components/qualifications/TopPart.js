export default function CoursePage() {
    return (
        <div className="flex flex-col lg:flex-row lg:space-x-8 p-6 lg:p-12 min-h-screen bg-indigo-100 ">
            {/* Left Section - Course Info */}
            <div className="lg:w-1/2 mb-8 lg:mb-0 bg-white shadow-xl rounded-lg p-8 lg:p-12 flex flex-col justify-between">
                <div>
                    <h1 className="text-4xl font-bold text-indigo-700 mb-4">
                        Learn Full-Stack Web Development
                    </h1>
                    <p className="text-gray-600 text-lg mb-6">
                        Master web technologies like HTML, CSS, JavaScript, React, Node.js,
                        and more to build real-world applications. This course is designed
                        for all levels.
                    </p>
                </div>
                <div className="w-full rounded-lg overflow-hidden">
                    <img
                        src="/1_D7G69I9L9xka4AgnW1nn6w.jpg"
                        alt="Course Cover"
                        className="w-full h-auto object-cover"
                    />
                </div>
            </div>

            {/* Right Section - User Response Form */}
            <div className="lg:w-2/5 bg-white shadow-xl rounded-lg p-8 lg:p-10">
                <h2 className="text-3xl font-semibold text-gray-800 mb-4">
                    Join the Course!
                </h2>
                <form className="space-y-4">
                    <div>
                        <label className="block text-lg font-medium text-gray-700">
                            Full Name
                        </label>
                        <input
                            type="text"
                            className="mt-1 p-3 block w-full border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500"
                            placeholder="Enter your full name"
                        />
                    </div>

                    <div>
                        <label className="block text-lg font-medium text-gray-700">
                            Email Address
                        </label>
                        <input
                            type="email"
                            className="mt-1 p-3 block w-full border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500"
                            placeholder="Enter your email"
                        />
                    </div>

                    {/* New Phone Number Input */}
                    <div>
                        <label className="block text-lg font-medium text-gray-700">
                            Phone Number
                        </label>
                        <input
                            type="tel"
                            className="mt-1 p-3 block w-full border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500"
                            placeholder="Enter your phone number"
                        />
                    </div>

                    <div>
                        <label className="block text-lg font-medium text-gray-700">
                            Why are you interested in this course?
                        </label>
                        <textarea
                            className="mt-1 p-3 block w-full border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500"
                            placeholder="Tell us why you're interested"
                            rows="4"
                        ></textarea>
                    </div>

                    <button
                        type="submit"
                        className="w-full bg-indigo-600 hover:bg-indigo-700 text-white font-bold py-3 px-6 rounded-md transition duration-200"
                    >
                        Submit
                    </button>
                </form>
            </div>
        </div>
    );
};
