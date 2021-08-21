const services = [
  {
    name: "Typography",
    logo_class: "fas fa-font text-red-400 mr-2",
    color: "text-red-400",
  },
  {
    name: "Design",
    logo_class: "fas fa-pencil-alt text-yellow-400 mr-2",
    color: "text-yellow-400",
  },
  {
    name: "Development",
    logo_class: "fas fa-code text-purple-800 mr-2",
    color: "text-purple-800",
  },
];
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
        {services.map((list) => (
          <div className="flex items-center">
            <div>
              <i className={list.logo_class}></i>
            </div>
            <div>
              <span className={list.color}>{list.name}</span>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};
export default About;
