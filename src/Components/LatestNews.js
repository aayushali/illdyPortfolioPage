import { useState, useEffect } from "react";
import { BrowserRouter as Router, Link, Route } from "react-router-dom";
import Blog from "./Blog";
const LatestNews = () => {
  let url = "#";
  const [posts, setPosts] = useState([]);
  const [title, setTitle] = useState("Afghanistan");
  const [titleFromButtonClick, setTitleFromButtonClick] =
    useState("Afghanistan");
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    fetch(
      `https://api.newscatcherapi.com/v2/search?q=${titleFromButtonClick}&page_size=12`,
      {
        method: "GET",
        headers: {
          "x-api-key": "4dUHqwxzYPbKbUZS2tIjOT9V5aPQwBSQ_zOZCjvZm58",
        },
      }
    )
      .then((res) => {
        return res.json();
      })
      .then((data) => {
        setPosts(data.articles);
        setLoading(false);
      })
      .catch((err) => {
        setLoading(false);
        console.log(err);
      });
  }, [titleFromButtonClick]);

  const handleClick = () => {
    setTitleFromButtonClick(title);
  };

  let content = <div></div>;
  if (loading) {
    content = (
      <div className="text-yellow-400 text-2xl mx-auto text-center w-full">
        "Loading.."
      </div>
    );
  } else if (posts.length === 0) {
    content = (
      <div className="text-yellow-400 text-2xl">"No results to Display"</div>
    );
  } else {
    content = posts.map((post) => (
      <div className="bg-white">
        <div
          className="image h-56 w-full bg-no-repeat bg-cover"
          style={{ backgroundImage: `url(${post.media})` }}
        ></div>
        <div className="my-8 mx-8">
          <a href={url}>
            <h3 className="text-3xl font-bold text-gray-500 pb-10 pt-5">
              {post.title}
            </h3>
          </a>
          <p className="block text-gray-500 pb-14">{post.excerpt}</p>
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
                  <Link to={`/blog/${post.rank}/${post.title}`}>
                    <span>Read More</span>
                  </Link>
                </div>
              </div>
            </a>
          </div>
        </div>
      </div>
    ));
  }

  return (
    <div>
      <Router>
        <section className="pb-24 mt-28" style={{ backgroundColor: "#262a3b" }}>
          <div style={{ width: "80%" }} className="flex mx-auto">
            <div>
              <div className="text-center">
                <h2 className="text-5xl font-bold pb-3 text-white pt-20">
                  Latest News
                </h2>
                <p className="block text-white opacity-70">
                  If you are interested in the latest articles in the industry,
                  take a sneak peek at our blog. You have nothing to loose!
                </p>
                <a href={url}>
                  <div
                    className=" flex  justify-center items-center my-16 mx-auto  text-white font-bold hover:bg-purple-800 rounded transition duration-300 flex-row-reverse"
                    style={{ width: "20%" }}
                  >
                    <div className="text-center">
                      <input
                        type="text"
                        className="w-96 h-16 rounded-lg bg-gray-100 text-2xl text-center text-black"
                        placeholder="Search Blogs"
                        value={title}
                        onChange={(e) => setTitle(e.target.value)}
                      />
                    </div>
                  </div>
                  <div>
                    <button
                      className="rounded-lg bg-yellow-200 hover:bg-yellow-400 py-3 px-5 mb-10"
                      onClick={handleClick}
                    >
                      Search
                    </button>
                  </div>
                </a>
              </div>
              <div></div>

              <div className="blogs grid grid-cols-3 gap-x-16 gap-y-16">
                {content}
              </div>
            </div>
          </div>
          <Route path="/blog/:rank/:title">
            <Blog />
          </Route>
        </section>
      </Router>
    </div>
  );
};

export default LatestNews;
