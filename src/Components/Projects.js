const images = [
  "url(./images/front-page-project-4.jpg)",
  "url(./images/front-page-project-3.jpg)",
  "url(./images/front-page-project-2.jpg)",
  "url(./images/front-page-project-1.jpg)",
];
const Projects = () => {
  return (
    <div>
      <section className="mt-24">
        <div
          className="h-48 flex justify-center items-center"
          style={{ backgroundImage: "url(./images/3433814.jpg)" }}
        >
          <div className="text-center">
            <h2 className="text-5xl font-bold text-gray-600 pb-3">Projects</h2>
            <p className="block text-gray-500">
              You'll love our work. Check it out!
            </p>
          </div>
        </div>

        <div className="images flex">
          {images.map((image) => (
            <div
              className="images-project h-96 w-1/4 bg-no-repeat bg-cover"
              style={{ backgroundImage: `${image}` }}
            ></div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default Projects;
