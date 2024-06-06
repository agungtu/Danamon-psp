import React, { useState } from "react";
import Image from "next/image";

const SidebarDemosModal = () => {
  const [isActive, setActive] = useState("false");

  const handleToggle = () => {
    setActive(!isActive);
  };

  return (
    <>
      <div className="demo-side-icon">
        <button type="button" className="modal-btn" onClick={handleToggle}>
          {/* <span>Demos</span> */}
        </button>
      </div>

      <div className={`demos-side-content ${isActive ? "" : "show"}`}>
        <div className="modal-header">
          <h2>View All Demos</h2>
          <button type="button" className="close" onClick={handleToggle}>
            <span aria-hidden="true">&times;</span>
          </button>
        </div>

        <div className="modal-body">
          <div className="container-fluid">
            <div className="row justify-content-center">
              <div className="col-xl-3 col-lg-4 col-sm-6">
                <div className="demo-item">
                  <a href="/">
                    <span>App Landing Style - 1</span>
                    <Image
                      src="/images/demos/home-one.jpg"
                      alt="Demos"
                      width={600}
                      height={700}
                    />
                  </a>
                </div>
              </div>

              <div className="col-xl-3 col-lg-4 col-sm-6">
                <div className="demo-item">
                  <a href="/home-two/">
                    <span>App Landing Style - 2</span>
                    <Image
                      src="/images/demos/home-two.jpg"
                      alt="Demos"
                      width={600}
                      height={700}
                    />
                  </a>
                </div>
              </div>

              <div className="col-xl-3 col-lg-4 col-sm-6">
                <div className="demo-item">
                  <a href="/home-three/">
                    <span>App Landing Style - 3</span>
                    <Image
                      src="/images/demos/home-three.jpg"
                      alt="Demos"
                      width={600}
                      height={700}
                    />
                  </a>
                </div>
              </div>

              <div className="col-xl-3 col-lg-4 col-sm-6">
                <div className="demo-item">
                  <a href="/home-four/">
                    <span>App Landing Style - 4</span>
                    <Image
                      src="/images/demos/home-four.jpg"
                      alt="Demos"
                      width={600}
                      height={700}
                    />
                  </a>
                </div>
              </div>

              <div className="col-xl-3 col-lg-4 col-sm-6">
                <div className="demo-item">
                  <a href="/home-five/">
                    <span>App Landing Style - 5</span>
                    <Image
                      src="/images/demos/home-five.jpg"
                      alt="Demos"
                      width={600}
                      height={700}
                    />
                  </a>
                </div>
              </div>

              <div className="col-xl-3 col-lg-4 col-sm-6">
                <div className="demo-item">
                  <a href="/home-six/">
                    <span>App Landing Style - 6</span>
                    <Image
                      src="/images/demos/home-six.jpg"
                      alt="Demos"
                      width={600}
                      height={700}
                    />
                  </a>
                </div>
              </div>

              <div className="col-xl-3 col-lg-4 col-sm-6">
                <div className="demo-item">
                  <a href="/home-seven/">
                    <span>App Landing Style - 7</span>
                    <Image
                      src="/images/demos/home-seven.jpg"
                      alt="Demos"
                      width={600}
                      height={700}
                    />
                  </a>
                </div>
              </div>

              <div className="col-xl-3 col-lg-4 col-sm-6">
                <div className="demo-item">
                  <a href="/home-eight/">
                    <span>App Landing Style - 8</span>
                    <Image
                      src="/images/demos/home-eight.jpg"
                      alt="Demos"
                      width={600}
                      height={700}
                    />
                  </a>
                </div>
              </div>

              <div className="col-xl-3 col-lg-4 col-sm-6">
                <div className="demo-item">
                  <a href="/home-nine/">
                    <span>App Landing Style - 9</span>
                    <Image
                      src="/images/demos/home-nine.jpg"
                      alt="Demos"
                      width={600}
                      height={700}
                    />
                  </a>
                </div>
              </div>

              <div className="col-xl-3 col-lg-4 col-sm-6">
                <div className="demo-item">
                  <a href="/home-ten/">
                    <span>App Landing Style - 10</span>
                    <Image
                      src="/images/demos/home-ten.jpg"
                      alt="Demos"
                      width={600}
                      height={700}
                    />
                  </a>
                </div>
              </div>

              <div className="col-xl-3 col-lg-4 col-sm-6">
                <div className="demo-item">
                  <a href="/home-eleven/">
                    <span>App Landing Style - 11</span>
                    <Image
                      src="/images/demos/home-eleven.jpg"
                      alt="Demos"
                      width={600}
                      height={700}
                    />
                  </a>
                </div>
              </div>

              <div className="col-xl-3 col-lg-4 col-sm-6">
                <div className="demo-item">
                  <a href="/home-twelve/">
                    <span>App Landing Style - 12</span>
                    <Image
                      src="/images/demos/home-twelve.jpg"
                      alt="Demos"
                      width={600}
                      height={700}
                    />
                  </a>
                </div>
              </div>

              <div className="col-xl-3 col-lg-4 col-sm-6">
                <div className="demo-item">
                  <a href="/home-thirteen/">
                    <span>App Landing Style - 13</span>
                    <Image
                      src="/images/demos/home-thirteen.jpg"
                      alt="Demos"
                      width={600}
                      height={700}
                    />
                  </a>
                </div>
              </div>

              <div className="col-xl-3 col-lg-4 col-sm-6">
                <div className="demo-item">
                  <a href="/home-fourteen/">
                    <span>App Landing Style - 14</span>
                    <Image
                      src="/images/demos/home-fourteen.jpg"
                      alt="Demos"
                      width={600}
                      height={700}
                    />
                  </a>
                </div>
              </div>

              <div className="col-xl-3 col-lg-4 col-sm-6">
                <div className="demo-item">
                  <a href="/home-sixteen/">
                    <span>App Landing Style - 15</span>
                    <Image
                      src="/images/demos/home-fifteen.jpg"
                      alt="Demos"
                      width={600}
                      height={700}
                    />
                  </a>
                </div>
              </div>

              <div className="col-xl-3 col-lg-4 col-sm-6">
                <div className="demo-item">
                  <a href="/home-sixteen/">
                    <span>App Landing Style - 16</span>
                    <Image
                      src="/images/demos/home-sixteen.jpg"
                      alt="Demos"
                      width={600}
                      height={700}
                    />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <style jsx>{`
        .demo-side-icon {
          position: fixed;
          right: -1px;
          top: 30%;
          z-index: 9999;
        }

        .demo-side-icon .modal-btn {
          border: none;
          padding: 0;
          border-radius: 5px 0 0 5px;
        }

        .demo-side-icon .modal-btn span {
          display: block;
          -webkit-writing-mode: vertical-rl;
          -ms-writing-mode: tb-rl;
          writing-mode: vertical-rl;
          text-orientation: upright;
          padding-left: 5px;
          padding-right: 5px;
          text-transform: uppercase;
          color: #ffffff;
          background-color: #df113e;
          padding: 10px 7px;
          border-radius: 5px 0 0 5px;
          -webkit-transition: all 0.5s;
          transition: all 0.5s;
        }

        .demo-side-icon .modal-btn span:hover {
          background-color: #0a060e;
        }

        .demos-side-content {
          position: fixed;
          bottom: -100%;
          left: 0;
          z-index: 99999;
          width: 100%;
          height: 100%;
          background-color: #ffffff;
          -webkit-box-shadow: 0 0 20px #ddd;
          box-shadow: 0 0 20px #ddd;
          -webkit-transition: all 0.5s;
          transition: all 0.5s;
          -webkit-transform: scale(0);
          transform: scale(0);
          overflow-y: auto;
        }

        .demos-side-content.show {
          bottom: 0;
          -webkit-transform: scale(1);
          transform: scale(1);
        }

        .demos-side-content .modal-header {
          padding: 15px 20px;
          border-bottom: 1px solid #eee;
          justify-content: space-between;
        }

        .demos-side-content .modal-header h2 {
          font-size: 18px;
          color: #242424;
          font-weight: 700;
          margin-bottom: 0;
        }

        .demos-side-content .modal-header .close {
          background-color: red;
          border: none;
          font-size: 32px;
          color: #fff;
          border-radius: 100%;
          width: 35px;
          height: 35px;
          line-height: 31px;
        }

        .demos-side-content .modal-body {
          padding: 30px 30px 25px;
        }

        .demos-side-content .modal-body .demo-item {
          margin-bottom: 30px;
          text-align: center;
        }

        .demos-side-content .modal-body .demo-item a {
          display: block;
          padding: 5px;
          border-radius: 10px;
          -webkit-box-shadow: 0 0 20px 3px rgba(0, 0, 0, 0.05);
          box-shadow: 0 0 20px 3px rgba(0, 0, 0, 0.05);
          z-index: 1;
          position: relative;
        }

        .demos-side-content .modal-body .demo-item a span {
          font-weight: 600;
          font-size: 18px;
          color: #ffffff;
          position: absolute;
          left: 0;
          top: 0;
          right: 0;
          width: 100%;
          height: 100%;
          -webkit-box-pack: center;
          -ms-flex-pack: center;
          justify-content: center;
          -webkit-box-align: center;
          -ms-flex-align: center;
          align-items: center;
          display: -webkit-box;
          display: -ms-flexbox;
          display: flex;
          -webkit-transition: all 0.5s;
          transition: all 0.5s;
          opacity: 0;
        }

        .demos-side-content .modal-body .demo-item a:before {
          position: absolute;
          content: "";
          width: 100%;
          height: 100%;
          top: 0;
          left: 0;
          background-color: #567df4;
          opacity: 0;
          border-radius: 4px;
          -webkit-transition: all 0.5s;
          transition: all 0.5s;
        }

        .demos-side-content .modal-body .demo-item:hover a {
          -webkit-box-shadow: none;
          box-shadow: none;
        }

        .demos-side-content .modal-body .demo-item:hover a span {
          opacity: 1;
        }

        .demos-side-content .modal-body .demo-item:hover a:before {
          opacity: 0.9;
        }

        @media (max-width: 600px) {
        }
      `}</style>
    </>
  );
};

export default SidebarDemosModal;
