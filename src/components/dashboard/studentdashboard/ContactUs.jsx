import React from 'react';
import './studentdashboardcss/ContactUs.css';
import { BiDialpadAlt, BiCurrentLocation } from "react-icons/bi";
import {BsFillTelephoneFill } from "react-icons/bs";
import {AiOutlineMail } from "react-icons/ai";

function ContactUs() {
  return (
<div className="top-paragraphs">
      <p>
        <BsFillTelephoneFill icon/>
        <a href="tel:(075) 522-5635">(075) 522-5635 (TEL)</a> |{' '}
        <a href="tel:(075) 522-2496">(075) 522-2496 (FAX)</a>
      </p>
      <p>
        <BiDialpadAlt icon />
        <a href="njichole@gmail.com">(DAGUPAN) +63 995-078-5660</a>
      </p>
      <p>
        <BiCurrentLocation icon/>
        Arellano Street, Dagupan City, 2400, Pangasinan
      </p>
      <p>
        <AiOutlineMail icon />
        <a href="https://mail.google.com/mail/u/0/#inbox">EMAIL: info.up@phinmaed.com</a>
      </p>
      <p>Our Story | Our Mission | PHINMA Education</p>
        <p>| Management | College Programs |</p>
        <p>Graduate School | Basic Education </p>
        <p>| Scholarships | Alumni | Admission |</p>
        <p>Parent | Incoming Student</p>
        <p>| Current Student | Stay Updated | Contact</p>
    </div>
  );
}

export default ContactUs;