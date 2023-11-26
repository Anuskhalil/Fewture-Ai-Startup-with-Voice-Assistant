import React from 'react'
// import aiImg from '../images/cimg1.png'
import '../App.css'
import NoteModal from '../Components/NoteMadal'

function AppPrice() {
  return (
    <div id='priceSection' style={{ backgroundColor: '#0F294E' }}>
      <div className="container">
        <NoteModal />
        <div className="row py-5 d-flex gap-3">
          <h5 className='d-flex justify-content-center fs-3 fw-bolder text-warning' style={{ fontFamily: 'cursive' }}>Pricing</h5>
          <h1 className='text-center text-light' style={{ fontSize: '45px', fontWeight: '700', fontFamily: 'cursive' }}>Choose the right and <span className='best text-warning'>Best option</span></h1>
          <div className="col-sm-12 col-md-12 col-lg-4 text-white mt-5" id='to'>
            <h2 className='mt-4 m-2 py-3'>Basic Plan <br /> <span className='fs-2 fw-bolder'>Price: $30 per month</span></h2>
            <h6 className='m-2'>$20 per month if paid annually</h6>
            <ul className='fs-5 fw-medium mt-5'>
              <h3>Features:</h3>
              <li>Unlimited conversations</li>
              <li>Basic language understanding</li>
              <li>Pre-built templates</li>
              <li>Email support</li>
              <li>24/7 Available to help</li>
            </ul>
            {/* <div className="image">
              <img src={aiImg} width={'40%'} alt="" />
            </div> */}
          </div>
          <div className="col-sm-12 col-md-12 col-lg-4 text-white mt-5" id='too'>
            <h2 className='mt-4 m-2 py-3'>Standard Plan <br /> <span className='fs-2 fw-bolder'>Price: $60 per month</span></h2>
            <h6 className='m-2'>$50 per month if paid annually</h6>
            <ul className='fs-5 mt-5 fw-medium'>
              <h3>Features:</h3>
              <li>Unlimited conversations</li>
              <li>Advanced language understanding</li>
              <li>Pre-built templates</li>
              <li>Integration with up to 2 third-party apps</li>
              <li>Priority email support</li>
              <li>24/7 Chatbot availability</li>
            </ul>
            {/* <div className="image">
              <img src={aiImg} width={'40%'} alt="" />
            </div> */}
          </div>
          <div className="col-sm-12 col-md-12 col-lg-4 text-white mt-5" id='tooo'>
            <h2 className='mt-4 m-2 py-3'>Pro Plan <br /> <span className='fs-2 fw-bolder'>Price: $90 per month</span></h2>
            <h6 className='m-2'>$80 per month if paid annually</h6>
            <ul className='fs-5 mt-5 fw-medium'>
              <h3>Features:</h3>
              <li>Unlimited conversations</li>
              <li>Natural language processing</li>
              <li>Multi-language support</li>
              <li>Integration with up to 5 third-party apps</li>
              <li>Phone and email support</li>
              <li>24/7 Chatbot availability</li>
              <li>Analytics and reporting</li>
            </ul>
            {/* <div className="image">
              <img src={aiImg} width={'40%'} alt="" />
            </div> */}
          </div>
        </div>
      </div>

    </div>
  )
}

export default AppPrice
