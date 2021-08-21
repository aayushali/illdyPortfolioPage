const Testimonials = () => {
  return (
    <section
      style={{
        backgroundImage:
          "url(./images/pexels-eberhard-grossgasteiger-1367192.jpg)",
        height: "650px",
      }}
      className="bg-no-repeat bg-cover bg-fixed h-screen"
    >
      <div
        className=" h-full  w-full bg-purple-900 bg-opacity-40 flex justify-center items-center text-white
        "
      >
        <div className="text-center">
          <div className="pt-20">
            <h2 className="text-5xl font-bold block pb-16">Testimonials</h2>
          </div>
          <div
            className=" profile-picture h-32 w-32 bg-no-repeat bg-cover rounded-full mx-auto mb-12
            "
            style={{ background: "url(./images/mike-muller-127x127.jpg)" }}
          ></div>
          <div className="review max-w-4xl rounded-sm p-12 bg-purple-500 bg-opacity-50">
            <blockquote>
              <q>
                Awesome theme with great design and awesome support. If you
                don’t know how to code your own WordPress theme, but you still
                want a good-looking website for your business, Illdy might be
                exactly what you need. It is a slick theme with a lot of of
                features to choose from.
              </q>
            </blockquote>
          </div>
          <div className="name text-2xl font-bold pt-10">Mike Muller</div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
