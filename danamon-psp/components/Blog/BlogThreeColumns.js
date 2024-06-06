import React from "react";
import Image from "next/image";
import Link from 'next/link';

const BlogThreeColumns = () => {
  return (
    <>
      <section id="blog" className="blog-post-section">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-md-6 col-lg-6 col-xl-4">
              <div className="single-blog-post">
                <div className="blog-img">
                  <Link href="/blog/details">
                    <Image
                      src="/images/blog/post1.jpg" 
                      alt="Blog Post Image"
                      width={100}
                      height={800}
                    />
                  </Link>
                  <div className="blog-date">10 Feb, 2024</div>
                </div>

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
                  </ul>
                  <p>
                    Aliquet id lacinia ultricies odio, neque ipsum facilisis
                    parturient. Erat tristique nonummy etiam, fusce est
                    porttitor.
                  </p>

                  <Link href="/blog/details" className="read-more-btn">
                    Read More
                  </Link>
                </div>
              </div>
            </div>

            <div className="col-md-6 col-lg-6 col-xl-4">
              <div className="single-blog-post">
                <div className="blog-img">
                  <Link href="/blog/details">
                    <Image
                      src="/images/blog/post2.jpg"
                      alt="Blog Post Image"
                      width={100}
                      height={800}
                    />
                  </Link>

                  <div className="blog-date">11 Feb, 2024</div>
                </div>

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
                  </ul>
                  <p>
                    Aliquet id lacinia ultricies odio, neque ipsum facilisis
                    parturient. Erat tristique nonummy etiam, fusce est
                    porttitor.
                  </p>

                  <Link href="/blog/details" className="read-more-btn">
                    Read More
                  </Link>
                </div>
              </div>
            </div>

            <div className="col-md-6 col-lg-6 col-xl-4">
              <div className="single-blog-post">
                <div className="blog-img">
                  <Link href="/blog/details">
                    <Image
                      src="/images/blog/post3.jpg"
                      alt="Blog Post Image"
                      width={100}
                      height={800}
                    />
                  </Link>

                  <div className="blog-date">13 Feb, 2024</div>
                </div>

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
                  </ul>
                  <p>
                    Aliquet id lacinia ultricies odio, neque ipsum facilisis
                    parturient. Erat tristique nonummy etiam, fusce est
                    porttitor.
                  </p>

                  <Link href="/blog/details" className="read-more-btn">
                    Read More
                  </Link>
                </div>
              </div>
            </div>

            <div className="col-md-6 col-lg-6 col-xl-4">
              <div className="single-blog-post">
                <div className="blog-img">
                  <Link href="/blog/details">
                    <Image
                      src="/images/blog/post4.jpg"
                      alt="Blog Post Image"
                      width={100}
                      height={800}
                    />
                  </Link>

                  <div className="blog-date">14 Feb, 2024</div>
                </div>

                <div className="blog-info">
                  <h6 className="blog-title">
                    <Link href="/blog/details">
                      WordPress is open source software you can use to create a
                      beautiful
                    </Link>
                  </h6>
                  <ul className="post-admin">
                    <li>
                      By <Link href="#">Admin</Link>
                    </li>
                    <li>3 Comments</li>
                  </ul>
                  <p>
                    Aliquet id lacinia ultricies odio, neque ipsum facilisis
                    parturient. Erat tristique nonummy etiam, fusce est
                    porttitor.
                  </p>

                  <Link href="/blog/details" className="read-more-btn">
                    Read More
                  </Link>
                </div>
              </div>
            </div>

            <div className="col-md-6 col-lg-6 col-xl-4">
              <div className="single-blog-post">
                <div className="blog-img">
                  <Link href="/blog/details">
                    <Image
                      src="/images/blog/post5.jpg"
                      alt="Blog Post Image"
                      width={100}
                      height={800}
                    />
                  </Link>

                  <div className="blog-date">15 Feb, 2024</div>
                </div>

                <div className="blog-info">
                  <h6 className="blog-title">
                    <Link href="/blog/details">
                      Bootstrap 5 is open source software you can use to create
                      a beautiful
                    </Link>
                  </h6>
                  <ul className="post-admin">
                    <li>
                      By <Link href="#">Admin</Link>
                    </li>
                    <li>3 Comments</li>
                  </ul>
                  <p>
                    Aliquet id lacinia ultricies odio, neque ipsum facilisis
                    parturient. Erat tristique nonummy etiam, fusce est
                    porttitor.
                  </p>

                  <Link href="/blog/details" className="read-more-btn">
                    Read More
                  </Link>
                </div>
              </div>
            </div>

            <div className="col-md-6 col-lg-6 col-xl-4">
              <div className="single-blog-post">
                <div className="blog-img">
                  <Link href="/blog/details">
                    <Image
                      src="/images/blog/post6.jpg"
                      alt="Blog Post Image"
                      width={100}
                      height={800}
                    />
                  </Link>

                  <div className="blog-date">16 Feb, 2024</div>
                </div>

                <div className="blog-info">
                  <h6 className="blog-title">
                    <Link href="/blog/details">
                      Beautiful designs, powerful features, and the freedom to
                      build anything you
                    </Link>
                  </h6>
                  <ul className="post-admin">
                    <li>
                      By <Link href="#">Admin</Link>
                    </li>
                    <li>3 Comments</li>
                  </ul>
                  <p>
                    Aliquet id lacinia ultricies odio, neque ipsum facilisis
                    parturient. Erat tristique nonummy etiam, fusce est
                    porttitor.
                  </p>
                  a
                  <Link href="/blog/details" className="read-more-btn">
                    Read More
                  </Link>
                </div>
              </div>
            </div>
          </div>

          <div className="row">
            <div className="col-lg-12">
              <ul className="pagination-nav">
                <li>
                  <a href="#">
                    <i className="icofont-long-arrow-left"></i>
                  </a>
                </li>
                <li className="active">
                  <a href="#">1</a>
                </li>
                <li>
                  <a href="#">2</a>
                </li>
                <li>
                  <a href="#">3</a>
                </li>
                <li>
                  <a href="#">4</a>
                </li>
                <li>
                  <a href="#">
                    <i className="icofont-long-arrow-right"></i>
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default BlogThreeColumns;
