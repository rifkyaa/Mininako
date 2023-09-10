import React, { useState, useEffect } from 'react';
import "./Testimoni.css"
import lottie from 'lottie-web';
import { defineElement } from 'lord-icon-element';
import { AiOutlineSend } from "react-icons/ai"
import AOS, { init } from "aos";
import 'aos/dist/aos.css';


defineElement(lottie.loadAnimation);

const Testimoni = () => {
    const [name, setName] = useState('');
    const [testimonialText, setTestimonialText] = useState('');
    const [testimonials, setTestimonials] = useState([]);
    const [testiNumber, setTestiNumber] = useState(3);
  
    const submitTestimonial = () => {
      if (name.trim() !== '' && testimonialText.trim() !== '') {
        const newTestimonial = {
          number: testiNumber,
          name: name,
          text: testimonialText,
        };
        setTestimonials([...testimonials, newTestimonial]);
        setTestiNumber(testiNumber + 1);
        setName('');
        setTestimonialText('');
      }
    };

    useEffect(() => {
      AOS.init();
      const storedTestimonials = localStorage.getItem('testimonials');
      if (storedTestimonials) {
        setTestimonials(JSON.parse(storedTestimonials));
      }
    }, []);
  
    useEffect(() => {
      localStorage.setItem('testimonials', JSON.stringify(testimonials));
    }, [testimonials]);
  
    return (
      <section className='section__testimoni' id='testimoni'>
        <div className="wrapper__result" data-aos="fade-right">
          <h1 className="title__result">Testimonials</h1>
          <div className="wrapper__testi">
            <span className='no__testi'>1</span>
            <h3 className="name__testi">Ilham</h3>
            <p className="text__testi">Keren euy</p>
          </div>
          <div className="wrapper__testi">
            <span className='no__testi'>2</span>
            <h3 className="name__testi">Sutanto</h3>
            <p className="text__testi">Gacor Kang</p>
          </div>
          {testimonials.map((testimonial) => (
            <div key={testimonial.number} className='wrapper__testi'>
              <span className='no__testi'>{testimonial.number}</span>
              <h3 className='name__testi'>{testimonial.name}</h3>
              <p className='text__testi'>{testimonial.text}</p>
            </div>
          ))}
        </div>
        <div className="wrapper__form" data-aos="fade-left">
          <h1 className="title__form">Input Your Message</h1>
          <div
              className="contact__form">
              <div className="contact__form-div">
                  <label className="contact__form-tag">Name</label>
                  <input value={name} type="text" name='name' className='contact__form-input' placeholder='Insert Your Name' onChange={(e) => setName(e.target.value)}/>
                  
              </div>
              <div className="contact__form-div contact__form-area">
                  <label className="contact__form-tag">Message</label>
                  <textarea
                      name="message"
                      value={testimonialText}
                      cols="30"
                      rows="10" className='contact__form-input'
                      placeholder='Write your Message'
                      onChange={(e) => setTestimonialText(e.target.value)}>
                  </textarea>
              </div>
                  
              <button className="button-form" onClick={submitTestimonial}>
                  <AiOutlineSend className='icon-btn'/>
              </button>
          </div>
        </div>
      </section>
    );
}

export default Testimoni