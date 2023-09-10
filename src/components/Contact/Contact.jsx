import React, {useEffect} from 'react';
import "./Contact.css"
import { AiOutlineArrowRight, AiOutlineMail } from "react-icons/ai"
import { BsWhatsapp } from "react-icons/bs"
import AOS from "aos";
import 'aos/dist/aos.css';


const Contact = () => {
    useEffect(() => {
        AOS.init();
    }, [])

  return (
    <section className="section__contact" id='contact'>
        <h1 className="title__contact">Get In Touch</h1>
        <div className="wrapper__content">
            <div className="content__first" data-aos="fade-right">
                <iframe title='maps' className='map__contact' src="https://www.google.com/maps/embed?pb=!1m17!1m12!1m3!1d3961.604615928343!2d107.5751029332301!3d-6.817849058167311!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m2!1m1!2zNsKwNDknMDMuMSJTIDEwN8KwMzQnMzEuNSJF!5e0!3m2!1sen!2sid!4v1687437956978!5m2!1sen!2sid"></iframe>
            </div>
            <div className="content__second" data-aos="fade-left">
                <h3 className="title__content-second">Mininako ID</h3>
                <h3 className='subtitle-contact'>Kp.Paneungteung Rt 01/ Rw 16 Kec. Parongpong Kab.Bandung Barat</h3>
                <div className="contact__info" >
                        <div className="contact__card">
                            <AiOutlineMail className='contact__card-icon'/>

                            <h3 className="contact__card-title">Email</h3>
                            <span className="contact__card-data">mininakoid@gmail.com</span>

                            <a href="mailto:rifkyandriansyah444@gmail.com.com" target="_blank" className="contact__button">Write Me {" "} <AiOutlineArrowRight className="bx bx-right-arrow-alt contact__button-icon"></AiOutlineArrowRight></a>
                        </div>

                        <div className="contact__card">
                            <BsWhatsapp className='contact__card-icon'/>

                            <h3 className="contact__card-title">Whatsapp</h3>
                            <span className="contact__card-data">081245609434</span>

                            <a href="https://api.whatsapp.com/send?phone=6281245609434&text=Halo, Admin Mininako" target="_blank" className="contact__button">Write Me {" "} <AiOutlineArrowRight className="bx bx-right-arrow-alt contact__button-icon"></AiOutlineArrowRight></a>
                        </div>

                    </div>
            </div>
        </div>
    </section>
  )
}

export default Contact