import React from "react";
import Image from "next/image";
import Link from "next/link";

const Blog = () => {
  return (
    <>
      <section id="blog" className="blog-section">
        <div className="container">
          <div
            className="section-title"
            data-aos="fade-in"
            data-aos-duration="800"
            data-aos-delay="100"
          >
            <h2>Latest Blog Post</h2>
            <p>
              Lorem ipsum madolor sit amet, consectetur adipisicing elit, sed do
              eiusmod tempor coli incididunt ut labore Lorem ipsum madolor sit
              amet, consectetur adipisicing incididunt.
            </p>
          </div>

          <div className="horizontal-post single-blog-post">
            <div className="row align-items-center">
              <div className="col-lg-5">
                <div className="blog-img">
                  <Link href="/blog/details">
                    <Image
                      src="/images/blog/post1.jpg"
                      alt="Blog Post Image"
                      width={100}
                      height={800}
                    />
                  </Link>
                </div>
              </div>

              <div className="col-lg-7">
                <div className="blog-info">
                  <h6 className="blog-title">
                    <Link href="/blog/details">
                      Branding involves developing strategy to create a point of
                      differentiation
                    </Link>
                  </h6>

                  <ul className="post-admin">
                    <li>
                      By <Link href="#">Admin</Link>
                    </li>
                    <li>3 Comments</li>
                    <li>10 Feb, 2024</li>
                  </ul>

                  <p>
                    Aliquet id lacinia ultricies odio, neque ipsum facilisis
                    parturient. Erat tristique nonummy etiam, fusce est
                    porttitor...
                  </p>

                  <Link href="/blog/details" className="default-button">
                    Read More
                    <i className="icofont-swoosh-right"></i>
                  </Link>
                </div>
              </div>
            </div>
          </div>

          <div className="horizontal-post single-blog-post">
            <div className="row align-items-center">
              <div className="col-lg-5">
                <div className="blog-img">
                  <Link href="/blog/details">
                    <Image
                      src="/images/blog/post2.jpg"
                      alt="Blog Post Image"
                      width={100}
                      height={800}
                    />
                  </Link>
                </div>
              </div>

              <div className="col-lg-7">
                <div className="blog-info">
                  <h6 className="blog-title">
                    <Link href="/blog/details">
                      Design is a plan or specification for the construction of
                      an object
                    </Link>
                  </h6>

                  <ul className="post-admin">
                    <li>
                      By <Link href="#">Admin</Link>
                    </li>
                    <li>3 Comments</li>
                    <li>10 Feb, 2024</li>
                  </ul>

                  <p>
                    Aliquet id lacinia ultricies odio, neque ipsum facilisis
                    parturient. Erat tristique nonummy etiam, fusce est
                    porttitor...
                  </p>

                  <Link href="/blog/details" className="default-button">
                    Read More
                    <i className="icofont-swoosh-right"></i>
                  </Link>
                </div>
              </div>
            </div>
          </div>

          <div className="horizontal-post single-blog-post">
            <div className="row align-items-center">
              <div className="col-lg-5">
                <div className="blog-img">
                  <Link href="/blog/details">
                    <Image
                      src="/images/blog/post3.jpg"
                      alt="Blog Post Image"
                      width={100}
                      height={800}
                    />
                  </Link>
                </div>
              </div>

              <div className="col-lg-7">
                <div className="blog-info">
                  <h6 className="blog-title">
                    <Link href="/blog/details">
                      The new minimum is a digital magazine with a header
                      featuring a thin
                    </Link>
                  </h6>

                  <ul className="post-admin">
                    <li>
                      By <Link href="#">Admin</Link>
                    </li>
                    <li>3 Comments</li>
                    <li>10 Feb, 2024</li>
                  </ul>

                  <p>
                    Aliquet id lacinia ultricies odio, neque ipsum facilisis
                    parturient. Erat tristique nonummy etiam, fusce est
                    porttitor...
                  </p>

                  <Link href="/blog/details" className="default-button">
                    Read More
                    <i className="icofont-swoosh-right"></i>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Blog;
