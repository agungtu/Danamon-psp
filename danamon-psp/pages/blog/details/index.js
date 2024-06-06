import React from "react";
import Link from "next/link";
import Footer from "../../../components/Common/Footer";
import BlogDetailsContent from "../../../components/Blog/BlogDetailsContent";

const DetailsOne = () => {
  return (
    <>
      <section
        className="top-banner-area"
        style={{ backgroundImage: `url("/images/top-banner-area-bg.jpg")` }}
      >
        <div className="container">
          <div className="header">
            <div className="row align-items-center">
              <div className="col-6">
                <Link href="/" className="logo">
                  Jibo
                </Link>
              </div>

              <div className="col-6 text-end">
                <Link href="/blog/details/" className="nav-text">
                  Blog
                </Link>
              </div>
            </div>
          </div>

          <div className="row">
            <div className="col-lg-6">
              <h2 className="banner-title">Blog Details With Left Sidebar</h2>
            </div>
            <div className="col-lg-6">
              <ol className="breadcrumb">
                <li>
                  <Link href="/">Home</Link>
                </li>
                <li className="active">Blog Details Left Sidebar</li>
              </ol>
            </div>
          </div>
        </div>
      </section>

      <BlogDetailsContent />

      <Footer />
    </>
  );
};

export default DetailsOne;
