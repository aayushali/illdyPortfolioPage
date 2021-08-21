const services = [
  {
    name: "Web Design",
    description:
      "Consectetur adipiscing elit. Praesent molestie urna hendrerit erat tincidunt tempus. Aliquam a leo risus. Fusce a metus non augue dapibus porttitor at in mauris. Pellentesque commodo...",
    color: "text-red-300",
    logo_class: "fas fa-pencil-alt",
  },
  {
    name: "Web Development",
    description:
      "Consectetur adipiscing elit. Praesent molestie urna hendrerit erat tincidunt tempus. Aliquam a leo risus. Fusce a metus non augue dapibus porttitor at in mauris. Pellentesque commodo...",
    color: "text-yellow-400",
    logo_class: "fas fa-code",
  },
  {
    name: "SEO Analysis",
    description:
      "Consectetur adipiscing elit. Praesent molestie urna hendrerit erat tincidunt tempus. Aliquam a leo risus. Fusce a metus non augue dapibus porttitor at in mauris. Pellentesque commodo...",
    color: "text-purple-800",
    logo_class: "fas fa-search",
  },
];

const Services = () => {
  return (
    <section
      section
      className="flex justify-center items-center mx-auto pb-40"
      style={{ width: "80%" }}
    >
      <div className="h-96 mx-auto text-center">
        <div className="pt-20 pb-20">
          <h2 className="text-5xl font-bold text-gray-600 pb-3">Services</h2>
          <p className="block text-gray-500">
            In order to help you grow your business, our carefully selected
            experts can advice you in the following areas:
          </p>
        </div>
        <div className="flex justify-evenly space-x-16">
          {services.map((value) => (
            <div>
              <div className="icon flex justify-center items-center pb-3">
                <i className={`${value.color} ${value.logo_class} mr-2`}></i>
              </div>
              <h3 className={`text-3xl font-bold ${value.color}`}>
                {value.name}
              </h3>
              <p className="pt-8 block text-gray-500 text-justify">
                {value.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
