import React from 'react';
import { MDBFooter, MDBContainer, MDBRow, MDBCol, MDBIcon } from 'mdb-react-ui-kit';

const Footer = () => {
  return (
    <MDBFooter bgColor='light' className='text-center text-lg-start text-muted'>
      <section className='flex flex-col md:flex-row justify-between items-center p-4 border-b'>
      <div className='text-left md:ml-10 mb-4 md:mb-0'>
          <span>
            Get connected with us on social networks:
          </span>
        </div>


        <div className='flex justify-end md:justify-end'>
          <a href='https://www.facebook.com' className='ml-4 md:ml-4 text-reset'>
            <MDBIcon fab icon="facebook-f" />
          </a>
          <a href='https://www.twitter.com' className='ml-4 md:ml-4 text-reset'>
            <MDBIcon fab icon="twitter" />
          </a>
          <a href='https://www.google.com' className='ml-4 md:ml-4 text-reset'>
            <MDBIcon fab icon="google" />
          </a>
          <a href='https://www.instagram.com' className='ml-4 md:ml-4 text-reset'>
            <MDBIcon fab icon="instagram" />
          </a>
          <a href='https://www.linkedin.com' className='ml-4 md:ml-4 text-reset'>
            <MDBIcon fab icon="linkedin" />
          </a>
          <a href='https://www.github.com' className='ml-4 md:ml-4 text-reset'>
            <MDBIcon fab icon="github" />
          </a>
        </div>
      </section>


      {/* Footer Links Section */}
      <section className='p-4 border-b'>
        <MDBContainer className='text-center md:text-left mt-5'>
          <MDBRow className='flex flex-col md:flex-row justify-between space-y-4 md:space-y-0 md:space-x-6'>
            {/* Company Info Section */}
            <MDBCol className='mb-4 md:mb-0 text-left'>
              <h6 className='uppercase font-bold mb-4'>
                <MDBIcon icon="gem" className="mr-2" />
                Company name
              </h6>
              <p>
                Here you can use rows and columns to organize your footer content. Lorem ipsum dolor sit amet,
                consectetur adipisicing elit.
              </p>
            </MDBCol>


            <MDBCol className='mb-4 md:mb-0 text-left'>
              <h6 className='uppercase font-bold mb-4'>Products</h6>

              <p>
                <a href='#!' className='text-reset'>
                  Angular
                </a>
              </p>
              <p>
                <a href='#!' className='text-reset'>
                  React
                </a>
              </p>
              <p>
                <a href='#!' className='text-reset'>
                  Vue
                </a>
              </p>
              <p>
                <a href='#!' className='text-reset'>
                  Laravel
                </a>
              </p>
            </MDBCol>

            {/*Useful links Section  */}
            <MDBCol className='mb-4 md:mb-0 text-left'>
              <h6 className='uppercase font-bold mb-4'>Useful links</h6>
              <p>
                <a href='#!' className='text-reset'>
                  Pricing
                </a>
              </p>
              <p>
                <a href='#!' className='text-reset'>
                  Settings
                </a>
              </p>
              <p>
                <a href='#!' className='text-reset'>
                  Orders
                </a>
              </p>
              <p>
                <a href='#!' className='text-reset'>
                  Help
                </a>
              </p>
            </MDBCol>


            {/* Contact section will go here! */}
            <MDBCol className='mb-4 text-left'>
              <h6 className='uppercase font-bold mb-4'>Contact</h6>
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

      <div className='text-center p-4' style={{ backgroundColor: 'rgba(0, 0, 0, 0.05)' }}>
        © 2021 Copyright:
        <a className='text-reset fw-bold' href='https://mdbootstrap.com/'>
          MDBootstrap.com
        </a>
      </div>
    </MDBFooter>
  );
}

export default Footer;