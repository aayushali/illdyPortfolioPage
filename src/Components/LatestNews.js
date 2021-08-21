const blogs = [
  {
    title: "We have Made Illdy Theme SEO Friendly",
    description:
      "Illdy One Page WordPress theme is fully SEO friendly and is ready to help you to achieve the highest rankings...",
    background: "url(./images/blog1.jpg)",
  },
  {
    title: "Stunning One Page WordPress Theme For Masses",
    description:
      " This theme is not just free, it is free for private and commercial use since it is licensed under GPL…",
    background: "url(./images/blog2.jpg)",
  },
  {
    title: "Hello World",
    description:
      " Welcome to colorlib.com. This is our first post around Illdy WordPress theme. Now show that you can make out of it.…",
    background: "url(./images/blog3.jpg)",
  },
];
const LatestNews = () => {
  let url = "#";

  return (
    <section className="pb-24" style={{ backgroundColor: "#262a3b" }}>
      <div style={{ width: "80%" }} className="flex mx-auto">
        <div>
          <div className="text-center">
            <h2 className="text-5xl font-bold pb-3 text-white pt-20">
              Latest News
            </h2>
            <p className="block text-white opacity-70">
              If you are interested in the latest articles in the industry, take
              a sneak peek at our blog. You have nothing to loose!
            </p>
            <a href={url}>
              <div
                className=" flex justify-center items-center space-x-2 my-16 mx-auto  bg-yellow-400 text-white font-bold hover:bg-purple-800 rounded transition duration-300"
                style={{ width: "12%" }}
              >
                <div className="logo py-4">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-6 w-6"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      d="M13 9l3 3m0 0l-3 3m3-3H8m13 0a9 9 0 11-18 0 9 9 0 0118 0z"
                    />
                  </svg>
                </div>
                <div>
                  <span>See blog</span>
                </div>
              </div>
            </a>
          </div>

          <div className="blogs grid grid-cols-3 gap-x-16">
            {blogs.map((blog) => (
              <div className="bg-white">
                <div
                  className="image h-56 w-full bg-no-repeat bg-cover"
                  style={{ backgroundImage: `${blog.background}` }}
                ></div>
                <div className="my-8 mx-8">
                  <a href={url}>
                    <h3 className="text-3xl font-bold text-gray-500 pb-10 pt-5">
                      {blog.title}
                    </h3>
                  </a>
                  <p className="block text-gray-500 pb-14">
                    {blog.description}
                  </p>
                  <div className="button pl-4">
                    <a href={url}>
                      <div className=" flex justify-start items-center space-x-2 text-yellow-400 rounded">
                        <div className="logo">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="h-6 w-6 text-yellow-400"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                          >
                            <path
                              stroke-linecap="round"
                              stroke-linejoin="round"
                              stroke-width="2"
                              d="M13 9l3 3m0 0l-3 3m3-3H8m13 0a9 9 0 11-18 0 9 9 0 0118 0z"
                            />
                          </svg>
                        </div>
                        <div>
                          <span>Read More</span>
                        </div>
                      </div>
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default LatestNews;
