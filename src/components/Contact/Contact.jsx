import React, {useState} from 'react';
import './Contact.css';
import emailjs from '@emailjs/browser';
import { useRef } from "react";
import {themeContext} from "../../Context"
import { useContext } from "react";

function Contact() {
    const theme = useContext(themeContext);
    const darkMode = theme.state.darkMode

    const form = useRef();

    const [done, setDone] = useState(false)

    const sendEmail = (e) => {
      e.preventDefault();
  
      emailjs.sendForm('service_yuninog', 'template_1fywb6o', form.current, 'Wmj74EiKt7bvWQVa1')
        .then((result) => {
            console.log(result.text);
            setDone(true)
        }, (error) => {
            console.log(error.text);
        });
    };

  return (
    <div className='contact-form'>
        <div className="w-left">
            <div className="awesome">
                <span style={{color:darkMode?"white":""}} >Get in touch</span>
                <span>Contact me</span>
                <div className='blur s-blur' style={{background: "#abf1ff94"}}>
                </div>
            </div>
        </div>

<div className="c-right">
    <form ref={form} onSubmit={sendEmail}>
        <input type="text" name='user_name' className='user' placeholder='Name' />
        <input type="email" name='user_email' className='user' placeholder='Email' />
        <textarea name="message" className='user' placeholder='Message' />
        <input type="submit" value="send" className='button' />
        <span>{done && "Thanks for Contact us"}</span>
        <div className='blur c-blur1' style={{background:"var(--purple)"}}>
        </div>

    </form>
</div>

    </div>
  )
}

export default Contact