import React from 'react';
import "../components/app.css";


const contact = () => {
  return (
    <form className="form">
        <h1>Contact Form 📱 </h1>

        <label>Name</label>
        <input placeholder="Name" />

        <label>Mobile Number</label>
        <input placeholder="Mobile Number" />

        <label>Email</label>
        <input placeholder="Email" />

        <label>Message</label>
        <textarea placeholder="Message"></textarea>

        <button type="submit" >Submit</button>

    </form>
  );
};


export default contact
