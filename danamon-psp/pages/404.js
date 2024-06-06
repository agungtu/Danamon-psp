import React from "react";
import Link from "next/link";
import Image from "next/image";

const ErrorPage = () => {
  return (
    <>
      <div className="error-area ptb-100 text-center">
        <div className="container">
          <Image src="/images/error.png" alt="image" width={500} height={198} />

          <h3 className="mt-4">Error 404 : page not found</h3>

          <p>
            The page you are looking for might have been removed had its name
            changed or is temporarily unavailable.
          </p>

          <Link href="/" className="default-button">
            Back to Homepage
          </Link>
        </div>
      </div>
    </>
  );
};

export default ErrorPage;
