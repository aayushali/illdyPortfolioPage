import Nav from "./Nav";
const FrontPage = () => {
  return (
    <div>
      <header
        style={{ backgroundImage: `url(./images/front-page-header.jpg)` }}
        className="bg-fixed bg-no-repeat bg-cover h-screen"
      >
        <Nav />

        <div className="flex h-screen justify-center items-center">
          <div
            className="  max-w-9xl  m-auto  font-sans  antialiased text-white  tracking-wide
          "
          >
            <div className="text-center font-bold">
              <h1 className="text-7xl">
                Clean<span className="text-yellow-400">.</span>Slick
                <span className="text-yellow-400">.</span>Pixel Perfect
              </h1>
              <p className="text-lg font-normal px-96 pt-8 pb-16">
                LLdy is a greate one-page theme, Perfect for developers and
                designers but also for someone who just wants a new website for
                his business. Try it out!
              </p>
            </div>
            <div className="flex justify-center">
              <div>
                <button className=" mx-5 border py-4  px-20 text-lg  bg-black rounded  hover:bg-gray-500 hover:bg-opacity-20 transition duration-300 bg-opacity-20 ">
                  <span> Learn More</span>
                </button>
              </div>
              <div>
                <button className="  mx-5  py-4 px-20 text-lg bg-yellow-300 hover:bg-purple-800 rounded transition duration-300 ">
                  <span>Download</span>
                </button>
              </div>
            </div>
          </div>
        </div>
      </header>
    </div>
  );
};

export default FrontPage;
