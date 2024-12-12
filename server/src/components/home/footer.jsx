import React from "react";
import { Link } from "react-router-dom";
import {
  MDBFooter,
  MDBContainer,
  MDBRow,
  MDBCol,
  MDBIcon,
} from "mdb-react-ui-kit";

const Footer = () => {
  return (
    <MDBFooter bgColor="light" className="text-center text-lg-start text-muted">
      <section className="flex flex-col md:flex-row justify-between items-center p-4 border-b">
        <div className="text-left md:ml-10 mb-4 md:mb-0">
          <span>Get connected with us on social networks:</span>
        </div>

        <div className="flex justify-end md:justify-end">
          <a
            href="https://www.facebook.com"
            className="ml-4 md:ml-4 text-reset"
          >
            <MDBIcon fab icon="facebook-f" />
          </a>
          <a href="https://www.x.com" className="ml-4 md:ml-4 text-reset">
            <MDBIcon fab icon="x" />
          </a>
          <a href="https://www.google.com" className="ml-4 md:ml-4 text-reset">
            <MDBIcon fab icon="google" />
          </a>
          <a
            href="https://www.instagram.com"
            className="ml-4 md:ml-4 text-reset"
          >
            <MDBIcon fab icon="instagram" />
          </a>
          <a
            href="https://www.linkedin.com"
            className="ml-4 md:ml-4 text-reset"
          >
            <MDBIcon fab icon="linkedin" />
          </a>
          <a href="https://www.github.com" className="ml-4 md:ml-4 text-reset">
            <MDBIcon fab icon="github" />
          </a>
          <a href="https://www.discord.com" className="ml-4 md:ml-4 text-reset">
            <MDBIcon fab icon="discord" />
          </a>
        </div>
      </section>

      {/* Footer Links Section */}
      <section className="p-4 border-b">
        <MDBContainer className="text-center md:text-left mt-5">
          <MDBRow className="flex flex-col md:flex-row justify-between space-y-4 md:space-y-0 md:space-x-6">
            {/* Company Info Section */}
            <MDBCol className="mb-4 md:mb-0 text-left">
              <h6 className="uppercase font-bold mb-4 text-blue-900 dark:text-blue-300 flex items-center">
                <MDBIcon
                  icon="gem"
                  className="mr-2 text-blue-900 dark:text-blue-300"
                />
                Travel Lit Lounge
              </h6>
              <p>
                Your one-stop shop to be able to share your recent locations and
                find exciting destinations for future travels. We are committed
                to providing great peace and tranquility while visiting our site
                of user-generated locations.
              </p>
            </MDBCol>

            {/* Products Section */}
            <MDBCol className="mb-4 md:mb-0 text-left">
              <h6 className="uppercase font-bold mb-4 text-blue-900 dark:text-blue-300">
                Products
              </h6>
              <p className="mb-1">
                <Link
                  to="/travel/vacation-packages"
                  className="text-gray-900 hover:underline dark:text-gray-100"
                >
                  Vacation Packages
                </Link>
              </p>
              <p className="mb-1">
                <Link
                  to="/travel/location-attractions"
                  className="text-gray-900 hover:underline dark:text-gray-100"
                >
                  Location Attractions
                </Link>
              </p>
              <p className="mb-1">
                <Link
                  to="/travel/clothing"
                  className="text-gray-900 hover:underline dark:text-gray-100"
                >
                  Clothing
                </Link>
              </p>
              <p className="mb-1">
                <Link
                  to="/travel/books"
                  className="text-gray-900 hover:underline dark:text-gray-100"
                >
                  Books
                </Link>
              </p>

              {/* Link to "/travel/books" className="text-gray-900 hover:underline dark:text-gray-100">
               */}
            </MDBCol>


            {/* Useful Links Section */}
            <MDBCol className="mb-4 md:mb-0 text-left">
            <h6 className="uppercase font-bold mb-4 text-blue-900 dark:text-blue-300">
                Useful links
              </h6>
              <p className="mb-1">
                <Link
                  to="/travel/pricing"
                  className="text-gray-900 hover:underline dark:text-gray-100"
                >
                  Pricing
                </Link>
              </p>
              <p className="mb-1">
                <a
                  href="/travel/mobile"
                  className="text-gray-900 hover:underline dark:text-gray-100"
                >
                  Mobile
                </a>
              </p>
              <p className="mb-1">
                <a
                  href="#!"
                  className="text-gray-900 hover:underline dark:text-gray-100"
                >
                  Orders
                </a>
              </p>
              <p className="mb-1">
                <a
                  href="#!"
                  className="text-gray-900 hover:underline dark:text-gray-100"
                >
                  Help
                </a>
              </p>
            </MDBCol>

            {/* Contact Section */}
            <MDBCol className="mb-4 text-left">
              <h6 className="uppercase font-bold mb-4 text-blue-900 dark:text-blue-300">
                Contact
              </h6>
              <p>
                <MDBIcon icon="home" className="mr-2" />
                New York, NY 10012, US
              </p>
              <p>
                <MDBIcon icon="envelope" className="mr-3" />
                info@example.com
              </p>
              <p>
                <MDBIcon icon="phone" className="mr-3" /> + 01 234 567 88
              </p>
              <p>
                <MDBIcon icon="print" className="mr-3" /> + 01 234 567 89
              </p>
            </MDBCol>
          </MDBRow>
        </MDBContainer>
      </section>

      <div
        className="text-center p-4"
        style={{ backgroundColor: "rgba(0, 0, 0, 0.05)" }}
      >
        © 2024 Copyright
        <a className="text-reset fw-bold" href="https://mdbootstrap.com/">
          Travel Lit Lounge LLC
        </a>
      </div>
    </MDBFooter>
  );
};

export default Footer;
