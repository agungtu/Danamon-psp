import React from "react";
import Link from "next/link";
import Image from "next/image";

const Sidebar = () => {
  return (
    <>
      <div className="blog-sidebar">
        <form className="search-box">
          <input
            type="text"
            className="form-control"
            id="search"
            name="search"
            placeholder="Search Post Here..."
          />
          <button type="submit" className="btn search-btn">
            <i className="icofont-search"></i>
          </button>
        </form>

        <div className="recent-post">
          <h4 className="blog-sidebar-title">Recent post</h4>

          <div className="single-recent-post">
            <Link href="/blog/details">
              <Image
                src="/images/blog/recent-post-1.jpg"
                alt="blog"
                width={70}
                height={70}
              />
            </Link>
            <h5>
              <Link href="/blog/details">How to customize HeroApp</Link>
            </h5>
            <p>Feb 10, 2024</p>
          </div>

          <div className="single-recent-post">
            <Link href="/blog/details">
              <Image
                src="/images/blog/recent-post-2.jpg"
                alt="blog"
                width={70}
                height={70}
              />
            </Link>
            <h5>
              <Link href="/blog/details">Awesome app landing page</Link>
            </h5>
            <p>Feb 11, 2024</p>
          </div>

          <div className="single-recent-post">
            <Link href="/blog/details">
              <Image
                src="/images/blog/recent-post-3.jpg"
                alt="blog"
                width={70}
                height={70}
              />
            </Link>
            <h5>
              <Link href="/blog/details">
                Eu bibendum dictum ipsum vivamus nostra lectus
              </Link>
            </h5>
            <p>Feb 12, 2024</p>
          </div>
        </div>

        <div className="post-category">
          <h4 className="blog-sidebar-title">Category</h4>

          <Link href="#" className="single-category">
            Android <span>(05)</span>
          </Link>

          <Link href="#" className="single-category">
            Mobile App <span>(05)</span>
          </Link>

          <Link href="#" className="single-category">
            Photography <span>(01)</span>
          </Link>

          <Link href="#" className="single-category">
            IOS <span>(08)</span>
          </Link>

          <Link href="#" className="single-category">
            Latest App <span>(08)</span>
          </Link>

          <Link href="#" className="single-category">
            Technology <span>(02)</span>
          </Link>

          <Link href="#" className="single-category">
            Lifestyle <span>(04)</span>
          </Link>

          <Link href="#" className="single-category">
            Trending Post <span>(07)</span>
          </Link>

          <Link href="#" className="single-category">
            Videos <span>(03)</span>
          </Link>
        </div>

        <div className="popular-tags">
          <h4 className="blog-sidebar-title">Popular Tags</h4>

          <Link href="#">Android</Link>

          <Link href="#">Mobile App</Link>

          <Link href="#">Photography</Link>

          <Link href="#">IOS</Link>

          <Link href="#">Latest App</Link>

          <Link href="#">Technology</Link>

          <Link href="#">Lifestyle</Link>

          <Link href="#">Trending Post</Link>

          <Link href="#">Videos</Link>
        </div>
      </div>
    </>
  );
};

export default Sidebar;
