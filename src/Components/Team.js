const Team = () => {

    return (
        <div>
            <div
                className="bg-no-repeat h-36 bg-cover bg-center relative"
                style={{ backgroundImage: "url(./images/front-page-counter.jpg)" }}
            >
                <div
                    className="
          flex
          justify-evenly
          max-w-2xl
          items-center
          mx-auto
          divide-white
          text-2xl
          font-bold
          h-full
          text-white
        "
                >
                    <div className="border-r-2 pr-20">
                        <h3>PROJECTS</h3>
                    </div>
                    <div className="border-r-2 pr-20">CLIENTS</div>
                    <div>COFFES</div>
                </div>
            </div>

            <section
                className="flex justify-center items-center mx-auto py-32"
                style={{
                    backgroundImage: "url(https://demo.colorlib.com/illdy/wp-content/themes/illdy/layout/images/front-page/pattern.png)",
                    height: "600px"
                }}

            >
                <div className="mx-auto">
                    <div className="pt-20 pb-20 text-center">
                        <h2 className="text-5xl font-bold text-gray-600 pb-3">Team</h2>
                        <p className="block text-gray-500">
                            Meet the people that are going to take you business to the next
                            level.
                        </p>
                    </div>
                    <div className="grid grid-cols-3">
                        <div className="team flex p-10 space-x-8">
                            <div
                                className="profile-pic h-32 w-32 rounded-full bg-cover bg-no-repeat"
                                style={{ backgroundImage: "url(./images/profile-pic-1.jpeg)" }}
                            ></div>
                            <div className="description">
                                <h3 className="text-2xl font-bold text-gray-600 pt-3 pb-2">
                                    Mark Lawrance
                                </h3>
                                <h4 className="text-red-400 pb-4">Web Designer</h4>
                                <p className="block text-gray-500">
                                    Creative, detail-oriented always focused.
                                </p>
                                <div className="icons flex space-x-3 mt-5 items-center">
                                    <div className="facebook-icon">
                                        <object
                                            data="./images/icons/fb.svg"
                                            width="30"
                                            height="30"
                                            aria-labelledby="fb"

                                        ></object>
                                    </div>
                                    <div className="insta-icon">
                                        <object
                                            data="./images/icons/insta.svg"
                                            width="30"
                                            height="30"
                                            className="text-red-400"
                                            aria-labelledby="fb"

                                        ></object>
                                    </div>
                                    <div className="linkedin-icon">
                                        <object
                                            data="./images/icons/linkedin.svg"
                                            width="30"
                                            height="30"
                                            aria-labelledby="fb"

                                        ></object>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="team flex p-10 space-x-8">
                            <div
                                className="profile-pic h-32 w-32 rounded-full bg-cover bg-no-repeat"
                                style={{ backgroundImage: "url(./images/profile-pic-2.jpg)" }}
                            ></div>
                            <div className="description">
                                <h3 className="text-2xl font-bold text-gray-600 pt-3 pb-2">
                                    Jane Stenton
                                </h3>
                                <h4 className="text-yellow-400 pb-4">SEO Specialist</h4>
                                <p className="block text-gray-500">
                                    Curious, tech-geeck and gets serious when it <br />comes to
                                    work.
                                </p>
                                <div className="icons flex space-x-3 mt-5 items-center">
                                    <div className="facebook-icon">
                                        <object
                                            data="./images/icons/fb.svg"
                                            width="30"
                                            height="30"
                                            aria-labelledby="fb"

                                        ></object>
                                    </div>
                                    <div className="insta-icon">
                                        <object
                                            data="./images/icons/insta.svg"
                                            width="30"
                                            height="30"
                                            className="text-red-400"
                                            aria-labelledby="fb"

                                        ></object>
                                    </div>
                                    <div className="linkedin-icon">
                                        <object
                                            data="./images/icons/linkedin.svg"
                                            width="30"
                                            height="30"
                                            aria-labelledby="fb"

                                        ></object>
                                    </div>
                                </div>
                            </div>
                        </div>


                        <div className="team flex p-10 space-x-8">
                            <div
                                className="profile-pic h-32 w-32 rounded-full bg-cover bg-no-repeat"
                                style={{ backgroundImage: "url(./images/profile-pic-3.jpg)" }}
                            ></div>
                            <div className="description">
                                <h3 className="text-2xl font-bold text-gray-600 pt-3 pb-2">
                                    John Smith
                                </h3>
                                <h4 className="text-red-400 pb-4">Developer</h4>
                                <p className="block text-gray-500">
                                    Enthusiastic, passionate with great sense of humor.
                                </p>
                                <div className="icons flex space-x-3 mt-5 items-center">
                                    <div className="facebook-icon">
                                        <object
                                            data="./images/icons/fb.svg"
                                            width="30"
                                            height="30"
                                            aria-labelledby="fb"
                                        ></object>
                                    </div>
                                    <div className="insta-icon">
                                        <object
                                            data="./images/icons/insta.svg"
                                            width="30"
                                            height="30"
                                            className="text-red-400"
                                            aria-labelledby="ins"
                                        ></object>
                                    </div>
                                    <div className="linkedin-icon">
                                        <object
                                            data="./images/icons/linkedin.svg"
                                            width="30"
                                            height="30"
                                            aria-labelledby="linkedIn"
                                        ></object>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    )


}

export default Team;