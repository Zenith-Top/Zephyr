import React from 'react'
import './Zephyr.css'
import { HashLink as Link } from 'react-router-hash-link'


const Contact = () => {
  return (
    <div>
        <section id="contact">
            <div className="info">
                <h2>
                    Reach out to us
                </h2>
                <p>Zephyr Inc.</p>
                <p>zephyrinchq@gamil.com</p>
                <p>09160914736</p>
                <p>Black Gate Junction, <br />
                   Area L, Worldbank, Owerri, <br />
                   Imo State, Nigeria
                </p>
            </div>

            <div className="form">
                <label htmlFor="Name">Name</label> <br />
                <input type="text" /> <br />
                <label htmlFor="Phone">Phone Number</label> <br />
                <input type="num" /> <br />
                <label htmlFor="Email">Email Address</label> <br />
                <input type="text" /> <br />
                <label htmlFor="Message">Message</label> <br />
                <textarea name="" id=""></textarea> <br />

                <button><Link>Submit</Link></button>
            </div>
        </section>
    </div>
  )
}

export default Contact