import React from 'react'
import  './Contact.css'
import msg_icon from '../../assets/edusity_assets/msg-icon.png'
import mail_icon from '../../assets/edusity_assets/mail-icon.png'
import phone_icon from '../../assets/edusity_assets/phone-icon.png'
import loaction_icon from '../../assets/edusity_assets/location-icon.png'
import white_arrow from "../../assets/edusity_assets/white-arrow.png"

const Contact = () => {

    const onSubmit = async (event) => {
      event.preventDefault();
      setResult("Sending....");
      const formData = new FormData(event.target);
  
      formData.append("access_key", "0718b1a2-4d61-4960-b1a8-bc3bf22a0826");
  
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: formData
      });
  
      const data = await response.json();
  
      if (data.success) {
        setResult("Form Submitted Successfully");
        event.target.reset();
      } else {
        console.log("Error", data);
        setResult(data.message);
      }
    };

  return (
    <div className='Contact'>
       <div className="contact-col">
        <h3>Send us a message <img src={msg_icon} alt="" /></h3>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Maiores accusamus, minus nisi ex eaque quam commodi eum ipsa dignissimos vitae tempore nemo quasi earum sunt praesentium, explicabo, officiis cumque facere molestias. Possimus hic atque accusamus nihil aliquid. Magnam, placeat corrupti?</p>
        <ul>
            <li> <img src={mail_icon} alt="" />Contact@GreakStke.dev</li>
            <li> <img src={phone_icon} alt="" />+1 123-456-7890</li>
            <li> <img src={loaction_icon} alt="" /> 77 Massachusetts Ave, Cambridge <br /> MA 01239, United States</li>
        </ul>
       </div>



       <div className="contact-col">
        <form onSubmit={onSubmit}>
            <label>Your name</label>
            <input type="text" name='name' placeholder='Entre your name' required />
            <label >Phone Number</label>
            <input type="tel" name='phone' placeholder='Enter your mobile number' required/>
            <label>Write your message here</label>
            <textarea name="message"  rows="6" placeholder='Enter your message' required></textarea>
            <button type='submit' className='btn dark-btn'>Submit Now <img src={white_arrow} alt="" />
            </button>
        </form>
        {/* <span>{result}</span> */}
       </div>


    </div>
  )
}

export default Contact