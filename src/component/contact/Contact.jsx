import React from 'react'
import './contact.css'
import { useRef } from 'react'
import emailjs from 'emailjs-com'

const Contact = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm(process.env.REACT_APP_SERVICE_ID, process.env.REACT_APP_TEMPLATE_ID, form.current, process.env.REACT_APP_PUBLIC_KEY)
      .then((result) => {
          console.log(result.text);
      }, (error) => {
          console.log(error.text);
      });

      e.target.reset();
  };



  return (
    <section id='contact'>
      <h5>Vamos conversar!</h5>
      <h2>Contato</h2>

      <div className='container contact__container'>
          
          <form ref={form} onSubmit={sendEmail}>
            <input type='text' name='name' placeholder='Nome' required></input>
            <input type='email' name='email' placeholder='E-mail' required></input>
            <textarea name='message' rows='7' placeholder='Mensagem' required></textarea>
            <button type='submit' className='btn btn-primary'>Enviar Mensagem</button>
          </form>
      </div>
    </section>
  )
}

export default Contact