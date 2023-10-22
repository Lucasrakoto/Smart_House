import React, { useRef, useEffect } from "react";
import emailjs from "@emailjs/browser";
import {
  FaTwitter,
  FaFacebook,
  FaGithub,
  FaLinkedin,
  FaPhone,
} from "react-icons/fa";
import AOS from "aos";
import "aos/dist/aos.css";

export default function Team() {
  useEffect(() => {
    AOS.init({ duration: 2000 });
  }, []);
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();
    alert("Message envoye");
    emailjs
      .sendForm(
        "service_3l4il8v",
        "template_s62iejs",
        form.current,
        "tEIUVk1Q3SXq2Mge_"
      )
      .then(
        (result) => {
          console.log(result.text);
        },
        (error) => {
          console.log(error.text);
        }
      );
  };
  return (
    <div className="team">
      <div id="_OurTeam" className="card_team"></div>
      <div id="_Contact" className="email">
        <h1 data-aos="fade-up">Contact us</h1>
        <p data-aos="fade-up">
          If you need help or for any info, send us a messages{" "}
        </p>
        <div className="bloc_contact">
          <ul className="list_contact">
            <li className="contact_item" data-aos="fade-right">
              <FaFacebook className="icone" />
              <span>Smart House</span>
            </li>
            <li className="contact_item" data-aos="fade-right">
              <FaPhone className="icone" />
              <span>+261340161978</span>
            </li>
            <li data-aos="fade-right" className="contact_item">
              <FaGithub className="icone" />
              <span>Lucasrakoto</span>
            </li>
          </ul>
          <form ref={form} onSubmit={sendEmail}>
            <div className="form_input">
              <input
                type="text"
                name="user_name"
                className="_inputform"
                placeholder="Enter your name"
                required
                data-aos="zoom-in"
              />

              <input
                type="email"
                name="user_email"
                className="_inputform"
                placeholder="Enter your email"
                required
                data-aos="zoom-in"
              />
            </div>

            <textarea
              name="message"
              className="_textmsg"
              placeholder="Enter your messages"
              required
              data-aos="fade-up"
            />
            <input type="submit" value="Send" className="btn_form" />
          </form>
        </div>
      </div>
    </div>
  );
}
