const Services = () => {
    return (
        <section section
            className="flex justify-center items-center mx-auto pb-40"
            style={{ width: "80%" }}
        >
            <div className="h-96 mx-auto text-center">
                <div className="pt-20 pb-20">
                    <h2 className="text-5xl font-bold text-gray-600 pb-3">Services</h2>
                    <p className="block text-gray-500">
                        In order to help you grow your business, our carefully selected
                        experts can advice you in the following areas:
                    </p>
                </div>
                <div className="flex justify-evenly space-x-16">
                    <div>
                        <div className="icon flex justify-center items-center pb-3">
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                className="h-10 w-10 text-red-300"
                                viewBox="0 0 20 20"
                                fill="currentColor"
                            >
                                <path
                                    d="M13.586 3.586a2 2 0 112.828 2.828l-.793.793-2.828-2.828.793-.793zM11.379 5.793L3 14.172V17h2.828l8.38-8.379-2.83-2.828z"
                                />
                            </svg>
                        </div>
                        <h3 className="text-3xl font-bold text-red-300">Web Design</h3>
                        <p className="pt-8 block text-gray-500 text-justify">
                            Consectetur adipiscing elit. Praesent molestie urna hendrerit erat
                            tincidunt tempus. Aliquam a leo risus. Fusce a metus non augue
                            dapibus porttitor at in mauris. Pellentesque commodo...
                        </p>
                    </div>
                    <div>
                        <div className="icon flex justify-around items-center pb-3">
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                className="h-10 w-10 text-yellow-400"
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke="currentColor"
                            >
                                <path
                                    stroke-linecap="round"
                                    stroke-linejoin="round"
                                    stroke-width="2"
                                    d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4"
                                />
                            </svg>
                        </div>
                        <h3 className="text-3xl font-bold text-yellow-400">WEB Development</h3>
                        <p className="pt-8 block text-gray-500 text-justify">
                            Consectetur adipiscing elit. Praesent molestie urna hendrerit erat
                            tincidunt tempus. Aliquam a leo risus. Fusce a metus non augue
                            dapibus porttitor at in mauris. Pellentesque commodo...
                        </p>
                    </div>
                    <div>
                        <div className="icon flex justify-center items-center pb-3">
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                className="h-10 w-10 text-purple-800"
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke="currentColor"
                            >
                                <path
                                    stroke-linecap="round"
                                    stroke-linejoin="round"
                                    stroke-width="2"
                                    d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                                />
                            </svg>
                        </div>
                        <h3 className="text-3xl font-bold text-purple-800">SEO Analysis</h3>
                        <p className="pt-8 block text-gray-500 text-justify">
                            Consectetur adipiscing elit. Praesent molestie urna hendrerit erat
                            tincidunt tempus. Aliquam a leo risus. Fusce a metus non augue
                            dapibus porttitor at in mauris. Pellentesque commodo...
                        </p>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Services;