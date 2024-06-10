import React from 'react';
import { MDBContainer, MDBFooter, MDBIcon, MDBRow, MDBCol } from 'mdb-react-ui-kit';

const Footer = () => {
  return (
    <MDBFooter bgColor='light' className='text-center text-lg-start text-muted'>
      {/* Social Media Section */}
      <section className='d-flex justify-content-center justify-content-lg-between p-4 border-bottom'>
        <div className='me-5 d-none d-lg-block'>
          <span>Get connected with us on social media!</span>
        </div>

        <div>
          <a href="https://www.facebook.com" className='me-3 text-reset'>
            <MDBIcon fab icon='facebook-f' />
          </a>
          <a href="https://www.twitter.com" className='me-4 text-reset'>
            <MDBIcon fab icon='twitter' />
          </a>
          {/* Add more social icons here if needed */}
        </div>
      </section>

      {/* Footer Links Section */}
      <section className=''>
        <MDBContainer className='text-center text-md-start mt-5'>
          <MDBRow className='mt-3'>
            {/* Products Links */}
            <MDBCol md='4' lg='2' xl='2' className='mb-4'>
              <h6 className='text-uppercase fw-bold mb-4'>Products</h6>
              <p>
                <a href="#!" className='text-reset'>
                  Angular
                </a>
              </p>
              <p>
                <a href="#!" className='text-reset'>
                  React
                </a>
              </p>
              <p>
                <a href="#!" className='text-reset'>
                  Vue
                </a>
              </p>
              <p>
                <a href="#!" className='text-reset'>
                  Laravel
                </a>
              </p>
            </MDBCol>

            {/* Useful Links */}
            <MDBCol md='4' lg='2' xl='2' className='mb-4'>
              <h6 className='text-uppercase fw-bold mb-4'>Useful links</h6>
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

            {/* Contact Information */}
            <MDBCol md='4' lg='3' xl='3' className='mb-md-0 mb-4'>
              <h6 className='text-uppercase fw-bold mb-4'>Contact</h6>
              <p>
                <MDBIcon color='secondary' icon='home' className='me-2' />
                New York, NY 10012, US
              </p>
              <p>
                <MDBIcon color='secondary' icon='envelope' className='me-3' />
                info@example.com
              </p>
              <p>
                <MDBIcon color='secondary' icon='phone' className='me-3' /> + 01 234 567 88
              </p>
              <p>
                <MDBIcon color='secondary' icon='print' className='me-3' /> + 01 234 567 89
              </p>
            </MDBCol>
          </MDBRow>
        </MDBContainer>
      </section>
      <div className='text-center p-4' style={{ background: 'rgba(0,0,0,0.05'}}>
      © 2021 Copyright:
    <a className=' text-reset fw-bold' href='https://mdbootstrap.com/'>
        MDBootstrap.com
    </a>
      </div>
    </MDBFooter>
  );
};

export default Footer;