const About = () => {
    return (
        <section className="h-96 mx-auto" style={{ width: "80%" }}>
            <div className="flex justify-between items-center">
                <div className="text-center my-20">
                    <h2 className="text-5xl font-bold text-gray-600">About</h2>
                    <p className="pt-16 px-36 block text-gray-500">
                        It is an amazing one-page theme with great features that offers an
                        incredible experience. It is easy to install, make changes, adapt
                        for your business. A modern design with clean lines and styling for
                        a wide variety of content, exactly how a business design shoud be.
                        You can add as many images as you wantsto the main header area and
                        turn them into slider.
                    </p>
                </div>
            </div>
            <div className="flex justify-around text-xl">
                <div className="flex items-center">
                    <div>
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="h-6 w-6 text-red-400 mr-2"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                        >
                            <path
                                stroke-linecap="round"
                                stroke-linejoin="round"
                                stroke-width="2"
                                d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
                            />
                        </svg>
                    </div>
                    <div>
                        <span className="text-red-400">Typography</span>
                    </div>
                </div>
                <div className="flex items-center">
                    <div>
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="h-5 w-5 mr-2 text-yellow-400"
                            viewBox="0 0 20 20"
                            fill="currentColor"
                        >
                            <path
                                d="M13.586 3.586a2 2 0 112.828 2.828l-.793.793-2.828-2.828.793-.793zM11.379 5.793L3 14.172V17h2.828l8.38-8.379-2.83-2.828z"
                            />
                        </svg>
                    </div>
                    <div>
                        <span className="text-yellow-400">Design</span>
                    </div>
                </div>
                <div className="flex items-center">
                    <div>
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="h-6 w-6 mr-2 text-purple-800"
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
                    <span className="text-purple-800">Development</span>
                    <div></div>
                </div>
            </div>
        </section>
    )
}
export default About;