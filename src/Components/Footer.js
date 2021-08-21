const Footer = () => {
  let url = "#";
  return (
    <div>
      <section className="h-96" style={{ backgroundColor: "#292626" }}>
        <div className="flex justify-around max-w-5xl py-16 text-gray-400 pl-48">
          <div>
            <h3 className="text-white font-bold text-2xl pb-6">PRODUCTS</h3>
            <div className="pb-2 hover:text-link">
              <a href={url}>&#187;&nbsp;&nbsp;Our work</a>
            </div>
            <div className="pb-2 hover:text-purple-800">
              <a href={url}>&#187;&nbsp;&nbsp;Club</a>
            </div>
            <div className="pb-2 hover:text-purple-800">
              <a href={url}>&#187;&nbsp;&nbsp;News</a>
            </div>
            <div className="pb-2 hover:text-purple-800">
              <a href={url}>&#187;&nbsp;&nbsp;Announcement</a>
            </div>
          </div>
          <div>
            <h3 className="text-white font-bold text-2xl pb-6">INFORMATION</h3>
            <div className="pb-2 hover:text-purple-800">
              <a href={url}>&#187;&nbsp;&nbsp;Pricing</a>
            </div>
            <div className="pb-2 hover:text-purple-800">
              <a href={url}>&#187;&nbsp;&nbsp;Terms</a>
            </div>
            <div className="pb-2 hover:text-purple-800">
              <a href={url}>&#187;&nbsp;&nbsp;Affiliates</a>
            </div>
            <div className="pb-2 hover:text-purple-800">
              <a href={url}>&#187;&nbsp;&nbsp;Blog</a>
            </div>
          </div>
          <div>
            <h3 className="text-white font-bold text-2xl pb-6">SUPPORT</h3>
            <div className="pb-2 hover:text-purple-800">
              <a href={url}>&#187;&nbsp;&nbsp;Documentation</a>
            </div>
            <div className="pb-2 hover:text-purple-800">
              <a href={url}>&#187;&nbsp;&nbsp;FAQs</a>
            </div>
            <div className="pb-2 hover:text-purple-800">
              <a href={url}>&#187;&nbsp;&nbsp;Forums</a>
            </div>
            <div className="pb-2 hover:text-purple-800">
              <a href={url}>&#187;&nbsp;&nbsp;Contact</a>
            </div>
          </div>
        </div>
        <div
          className="copyright text-gray-400 flex justify-center items-center h-24"
          style={{ backgroundColor: "#242121" }}
        >
          <div>
            Theme by Aayush Ali.
            <span className="text-white font-bold">
              &copy;Copyright 2021. All Rights Reserved.
            </span>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Footer;
