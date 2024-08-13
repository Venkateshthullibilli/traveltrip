import React, {useState} from 'react'
import './index.css'
import Header from '../Header'
import Sidebar from '../Sidebar'
import Footer from '../Footer'

const YourDetails = () => {
  const [formData, setFormData] = useState({
    name: '',
    startLocation: '',
    endLocation: '',
  })
  return (
    <>
      <Header />
      <section className="your-details-section">
        <Sidebar />
        <div className="your-details">
          <div className="text-container">
            <h2 className="your-details-text">Your Details</h2>
            <p className="enter-name">Enter your name and location details</p>
          </div>
          <div className="cards">
            <div>
              <label htmlFor="name" className="label">
                Name
              </label>
              <br />
              <input className="input-field" placeholder="Enter name" />
            </div>
            <div>
              <label htmlFor="startLocation" className="label">
                Start Location
              </label>
              <br />
              <input
                className="input-field"
                placeholder="Enter start location"
              />
            </div>
            <div>
              <label htmlFor="endLocation" className="label">
                End Location
              </label>
              <br />
              <input className="input-field" placeholder="Enter end location" />
            </div>
            <button type="button" className="next">
              Next
            </button>
          </div>
        </div>
      </section>
      <section className="your-details-section-small">
        <div>
          <div className="btns-container">
            <button type="button" className="drag">
              <img
                src="https://res.cloudinary.com/dfxytykhs/image/upload/v1723558192/Drag_handle_1_ffdtix.png"
                alt="drag"
              />
            </button>
            <button type="button" className="drag">
              <img
                src="https://res.cloudinary.com/dfxytykhs/image/upload/v1723558192/Drag_handle_1_ffdtix.png"
                alt="drag"
              />
            </button>
            <button type="button" className="drag">
              <img
                src="https://res.cloudinary.com/dfxytykhs/image/upload/v1723558192/Drag_handle_1_ffdtix.png"
                alt="drag"
              />
            </button>
            <button type="button" className="drag">
              <img
                src="https://res.cloudinary.com/dfxytykhs/image/upload/v1723558192/Drag_handle_1_ffdtix.png"
                alt="drag"
              />
            </button>
            <button type="button" className="drag">
              <img
                src="https://res.cloudinary.com/dfxytykhs/image/upload/v1723558192/Drag_handle_1_ffdtix.png"
                alt="drag"
              />
            </button>
          </div>
          <div className="text-container-small">
            <h2 className="small-details">Your Details</h2>
            <p className="small-des">Enter your name and location details</p>
          </div>
          <>
            <div>
              <label htmlFor="name" className="label">
                Name
              </label>
              <br />
              <input className="input-field" placeholder="Enter name" />
            </div>
            <div>
              <label htmlFor="startLocation" className="label">
                Start Location
              </label>
              <br />
              <input
                className="input-field"
                placeholder="Enter start location"
              />
            </div>
            <div>
              <label htmlFor="endLocation" className="label">
                End Location
              </label>
              <br />
              <input className="input-field" placeholder="Enter end location" />
            </div>
          </>
        </div>
        <Footer />
      </section>
    </>
  )
}

export default YourDetails
