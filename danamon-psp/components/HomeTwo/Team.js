import React from "react";
import Image from "next/image";

const teamMemberData = [
  {
    image: "/images/team/1.jpg",
    name: "Steve Roberts",
    designation: "CEO & Fouder",
    shortText:
      "Lorem ipsum madolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor.",
    socialLinks: [
      {
        icon: "icofont-facebook",
        link: "https://www.facebook.com/",
      },
      {
        icon: "icofont-twitter",
        link: "https://www.twitter.com/",
      },
      {
        icon: "icofont-linkedin",
        link: "https://www.linkedin.com/",
      },
    ],
    duration: "800",
    delay: "100",
  },
  {
    image: "/images/team/2.jpg",
    name: "John Marshall",
    designation: "React Developer",
    shortText:
      "Lorem ipsum madolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor.",
    socialLinks: [
      {
        icon: "icofont-facebook",
        link: "https://www.facebook.com/",
      },
      {
        icon: "icofont-twitter",
        link: "https://www.twitter.com/",
      },
      {
        icon: "icofont-linkedin",
        link: "https://www.linkedin.com/",
      },
    ],
    duration: "800",
    delay: "200",
  },
  {
    image: "/images/team/3.jpg",
    name: "Michael Cartney",
    designation: "QA Engineer",
    shortText:
      "Lorem ipsum madolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor.",
    socialLinks: [
      {
        icon: "icofont-facebook",
        link: "https://www.facebook.com/",
      },
      {
        icon: "icofont-twitter",
        link: "https://www.twitter.com/",
      },
      {
        icon: "icofont-linkedin",
        link: "https://www.linkedin.com/",
      },
    ],
    duration: "800",
    delay: "300",
  },
  {
    image: "/images/team/4.jpg",
    name: "Nathaniel",
    designation: "UI/UX Designer",
    shortText:
      "Lorem ipsum madolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor.",
    socialLinks: [
      {
        icon: "icofont-facebook",
        link: "https://www.facebook.com/",
      },
      {
        icon: "icofont-twitter",
        link: "https://www.twitter.com/",
      },
      {
        icon: "icofont-linkedin",
        link: "https://www.linkedin.com/",
      },
    ],
    duration: "800",
    delay: "300",
  },
];

const Team = () => {
  return (
    <>
      <section id="team" className="team-section angle-sp">
        <div className="container">
          <div
            className="section-title"
            data-aos="fade-in"
            data-aos-duration="800"
            data-aos-delay="100"
          >
            <h2>Our Awesome Team</h2>
            <p>
              Lorem ipsum madolor sit amet, consectetur adipisicing elit, sed do
              eiusmod tempor coli incididunt ut labore Lorem ipsum madolor sit
              amet, consectetur adipisicing incididunt.
            </p>
          </div>

          <div className="row justify-content-center">
            {teamMemberData &&
              teamMemberData.map((value, i) => (
                <div className="col-md-6 col-lg-3" key={i}>
                  <div
                    className="single-member"
                    data-aos="fade-in"
                    data-aos-duration={value.duration}
                    data-aos-delay={value.delay}
                  >
                    <div className="member-img">
                      <Image
                        src={value.image}
                        alt="Team Member Image"
                        className="rounded-4"
                        width={370}
                        height={450}
                      />

                      <div className="overlay rounded-4">
                        <div className="member-info">
                          <p>{value.shortText}</p>

                          <div className="social-links">
                            {value.socialLinks.map((value, i) => (
                              <a href={value.link} target="_blank" key={i}>
                                <i className={value.icon}></i>
                              </a>
                            ))}
                          </div>
                        </div>
                      </div>
                    </div>

                    <h4 className="member-name">{value.name}</h4>
                    <p className="designation">{value.designation}</p>
                  </div>
                </div>
              ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default Team;
