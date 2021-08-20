const Contact = () => {
    let url = "#";
    return (
        < div >
            <section section id="contact">
                <div className="flex justify-center items-center pt-16">
                    <h2 className="text-5xl font-bold text-gray-600 pb-3">Contact Us</h2>
                </div>
                <div
                    style={{ width: "80%" }}
                    className="mx-auto grid grid-cols-3 gap-x-10 my-20 gap-y-8 text-gray-500"
                >
                    <div className="grid grid-cols-2">
                        <div className="text-yellow-400">Address:</div>
                        <div>Street 221B Baker Street, London, UK</div>
                    </div>
                    <div className="grid grid-cols-2">
                        <div className="text-yellow-400">Customer Support:</div>
                        <div>E-mail: contact@site.com Phone:(555)5555-5555</div>
                    </div>
                    <div>T F IN</div>
                    <div>
                        <h3>Your Name(required)</h3>
                        <input
                            type="text"
                            name="name"
                            className="w-full h-12 border bg-gray-50"
                        />
                    </div>
                    <div>
                        <h3>Your Email(required)</h3>
                        <input
                            type="text"
                            name="email"
                            className="w-full h-12 border bg-gray-50"
                        />
                    </div>
                    <div>
                        <h3>Subject</h3>
                        <input
                            type="text"
                            name="subject"
                            className="w-full h-12 border bg-gray-50"
                        />
                    </div>
                    <div className="col-span-3">
                        <h3>Your Message</h3>
                        <input
                            type="text"
                            name="message"
                            className="w-full h-56 border bg-gray-50"
                        />
                    </div>
                    <div className="button col-start-3 flex justify-end items-center">
                        <a href={url}
                        ><span
                            className="
                  bg-yellow-400
                  py-2
                  px-16
                  text-white text-2xl
                  hover:bg-purple-800
                  rounded
                  transition
                  duration-300
                "
                        >Send</span
                            ></a>
                    </div>
                </div>
            </section>
        </div>

    )
}

export default Contact;