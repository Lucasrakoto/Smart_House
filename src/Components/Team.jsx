import React, { useRef, useEffect } from "react";
import emailjs from "@emailjs/browser";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import {
  FaTwitter,
  FaFacebook,
  FaGithub,
  FaLinkedin,
  FaPhone,
} from "react-icons/fa";
import AOS from "aos";
import "aos/dist/aos.css";
import lionel from "./../Assets/lionel.jpeg";
import lucas from "./../Assets/lucas.jpg";
import rija from "./../Assets/rija.jpg";
import santatra from "./../Assets/santatra.jpg";
import naps from "./../Assets/naps.jpeg";
import coco from "./../Assets/coco.jpg";

export default function Team() {
  useEffect(() => {
    AOS.init({ duration: 2000 });
  }, []);
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();
    // alert("Message envoye");
    toast.success("Message sent", {
      position: "top-right",
      autoClose: 3000, // Durée d'affichage en millisecondes
    });
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
      <div id="_OurTeam" className="card_team">
        <div class="wrapper">
          <div class="title">
            <h4 data-aos="zoom-in">Our Team </h4>
            <h5 data-aos="zoom-in">
              the people who helped make this project a reality :
            </h5>
          </div>

          <div class="card_Container">
            <div class="card" data-aos="fade-right">
              <div class="imbBx">
                <img src={lionel} alt="" />
              </div>

              <div class="content">
                <div class="contentBx">
                  <h3>
                    MANOHISOA Fandresena Lionel <br />{" "}
                    <span>Leader, Front-end Developer</span>
                  </h3>
                  <br />
                  <div className="listeso">
                    <a
                      className="SocialLinks"
                      href="https://www.facebook.com/fandresena.manohisoaluonel"
                      target="_blank"
                    >
                      <FaFacebook />
                    </a>
                    <a
                      className="SocialLinks"
                      href="https://github.com/LionelFandresena"
                      target="_blank"
                    >
                      <FaGithub />
                    </a>
                    <a
                      className="SocialLinks"
                      href="https://www.linkedin.com/in/lionel-fandresena-735426276/"
                      target="_blank"
                    >
                      <FaLinkedin />
                    </a>
                  </div>
                </div>
                <ul class="sci"></ul>
              </div>
            </div>

            <div class="card" data-aos="fade-up">
              <div class="imbBx">
                <img src={lucas} alt="" />
              </div>

              <div class="content">
                <div class="contentBx">
                  <h3>
                    RAKOTOARIHANTA Lucas <br />{" "}
                    <span>Front-end Developer, UI/UIX</span>
                  </h3>
                  <br />
                  <div className="listeso">
                    <a
                      className="SocialLinks"
                      href="https://www.facebook.com/lucasrakotoarihanta"
                      target="_blank"
                    >
                      <FaFacebook />
                    </a>
                    <a
                      className="SocialLinks"
                      href="https://github.com/Lucasrakoto"
                      target="_blank"
                    >
                      <FaGithub />
                    </a>
                    <a
                      className="SocialLinks"
                      href="https://www.linkedin.com/in/lucas-rakotoarihanta-642498233/"
                      target="_blank"
                    >
                      <FaLinkedin />
                    </a>{" "}
                  </div>
                </div>
                <ul class="sci"></ul>
              </div>
            </div>

            <div class="card" data-aos="fade-left">
              <div class="imbBx">
                <img src={naps} alt="" />
              </div>

              <div class="content">
                <div class="contentBx">
                  <h3>
                    RAZANAKOTO Nampoina <br />{" "}
                    <span>Designer, Back-end Developer</span>
                  </h3>
                  <br />
                  <div className="listeso">
                    <a
                      className="SocialLinks"
                      href="https://www.facebook.com/nampoinna"
                      target="_blank"
                    >
                      <FaFacebook />
                    </a>
                    <a
                      className="SocialLinks"
                      href="https://github.com/Nampoina-Razanakoto"
                      target="_blank"
                    >
                      <FaGithub />
                    </a>
                    <a
                      className="SocialLinks"
                      href="https://www.linkedin.com/in/nampoina-razanakoto-2953381a4/"
                      target="_blank"
                    >
                      <FaLinkedin />
                    </a>{" "}
                  </div>
                </div>
                <ul class="sci"></ul>
              </div>
            </div>

            <div class="card" data-aos="fade-right">
              <div class="imbBx">
                <img src={santatra} alt="" />
              </div>

              <div class="content">
                <div class="contentBx">
                  <h3>
                    RANDRIAMAMPIANINA Santatra Fanambinantsoa <br />{" "}
                    <span>Arduino, Back-end Developer</span>
                  </h3>
                  <br />
                  <div className="listeso">
                    <a
                      className="SocialLinks"
                      href="https://www.facebook.com/santatrafanambinantsoa.randriamampianina"
                      target="_blank"
                    >
                      <FaFacebook />
                    </a>
                    <a
                      className="SocialLinks"
                      href="https://github.com/LionelFandresena"
                      target="_blank"
                    >
                      <FaGithub />
                    </a>
                    <a className="SocialLinks" href="" target="_blank">
                      <FaLinkedin />
                    </a>{" "}
                  </div>
                </div>
                <ul class="sci"></ul>
              </div>
            </div>
            <div class="card" data-aos="fade-up">
              <div class="imbBx">
                <img src={rija} alt="" />
              </div>

              <div class="content">
                <div class="contentBx">
                  <h3>
                    RAZAKANAIVO Herizo Rija
                    <br /> <span>Arduino Developer, Electronics</span>
                  </h3>
                  <br />
                  <div className="listeso">
                    <a className="SocialLinks" href="" target="_blank">
                      <FaFacebook />
                    </a>
                    <a
                      className="SocialLinks"
                      href="https://github.com/LionelFandresena"
                      target="_blank"
                    >
                      <FaGithub />
                    </a>
                    <a className="SocialLinks" href="" target="_blank">
                      <FaLinkedin />
                    </a>{" "}
                  </div>
                </div>
                <ul class="sci"></ul>
              </div>
            </div>
            <div class="card" data-aos="fade-left">
              <div class="imbBx">
                <img src={coco} alt="" />
              </div>

              <div class="content">
                <div class="contentBx">
                  <h3>
                    HERIVONONA Tafita Liantsoa
                    <br /> <span>Communication, Front-end Developer</span>
                  </h3>
                  <br />
                  <div className="listeso">
                    <a
                      className="SocialLinks"
                      href="https://www.facebook.com/profile.php?id=100033119888463"
                      target="_blank"
                    >
                      <FaFacebook />
                    </a>
                    <a
                      className="SocialLinks"
                      href="https://github.com/LionelFandresena"
                      target="_blank"
                    >
                      <FaGithub />
                    </a>
                    <a className="SocialLinks" href="" target="_blank">
                      <FaLinkedin />
                    </a>{" "}
                  </div>
                </div>
                <ul class="sci"></ul>
              </div>
            </div>
          </div>
        </div>
      </div>

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
          <div className="box">
            <div></div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
          </div>
        </div>
      </div>
    </div>
  );
}
