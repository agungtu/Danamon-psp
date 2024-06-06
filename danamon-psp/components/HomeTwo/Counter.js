import React from "react";

const funFactsData = [
  {
    icon: "icofont-users",
    title: "Users",
    number: "2900",
    duration: "800",
    delay: "100",
  },
  {
    icon: "icofont-simple-smile",
    title: "Happy Clients",
    number: "2099",
    duration: "800",
    delay: "200",
  },
  {
    icon: "icofont-ui-rating",
    title: "Reviews",
    number: "1999",
    duration: "800",
    delay: "300",
  },
  {
    icon: "icofont-cloud-download",
    title: "App Downloads",
    number: "7899",
    duration: "800",
    delay: "400",
  },
];

const Counter = () => {
  return (
    <>
      <div id="counter" className="counter-stats angle-counter-stats">
        <div className="container">
          <div className="row justify-content-center">
            {funFactsData &&
              funFactsData.map((value, i) => (
                <div className="col-sm-6 col-lg-3" key={i}>
                  <div
                    className="counter-box"
                    data-aos="fade-in"
                    data-aos-duration={value.duration}
                    data-aos-delay={value.delay}
                  >
                    <i className={value.icon}></i>
                    <p>{value.title}</p>
                    <h3 className="counter-number">{value.number}</h3>
                  </div>
                </div>
              ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default Counter;
