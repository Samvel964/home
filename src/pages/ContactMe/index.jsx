import "./style.scss";
import FacebookOutlinedIcon from "@mui/icons-material/FacebookOutlined";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import EmailIcon from "@mui/icons-material/Email";
import TelegramIcon from "@mui/icons-material/Telegram";
import OnDeviceTrainingIcon from "@mui/icons-material/OnDeviceTraining";
import { useRef } from "react";
import emailjs from "@emailjs/browser";
import { useState } from "react";
import Swal from "sweetalert2";

export default function ContactMe() {
  const [errorName, setErrorName] = useState(false);
  const [errorEmail, setErrorEmail] = useState(false);
  const [errorMessage, setErrorMessage] = useState(false);
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    if (e.target[0].value.trim() === "") {
      setErrorName(true);
    } else {
      setErrorName(false);
    }

    if (e.target[1].value.trim() === "") {
      setErrorEmail(true);
    } else {
      setErrorEmail(false);
    }

    if (e.target[2].value.trim() === "") {
      setErrorMessage(true);
    } else {
      setErrorMessage(false);
    }

    if (
      e.target[0].value.trim() !== "" &&
      e.target[1].value.trim() !== "" &&
      e.target[2].value.trim() !== ""
    ) {
      emailjs
        .sendForm(
          "service_znalssm",
          "template_u3h4ewo",
          form.current,
          "kiPezJirC9_DuHzCg"
        )
        .then(
          (result) => {
            e.target[0].value = "";
            e.target[1].value = "";
            e.target[2].value = "";
            Swal.fire("Your message was sent");
            console.log(result.text);
          },
          (error) => {
            console.log(error.text);
          }
        );
    }
  };

  return (
    <div className="contact container">
      <div className="row animate__animated animate__pulse">
        <div className="col-md-6 form-mail">
          <p className="form-mail-text">
            To contact me fill the following links.
          </p>
          <p className="form-mail-text">I will answer you asap</p>
          <form ref={form} onSubmit={sendEmail}>
            <div className="form-mail-name">
              {errorName ? (
                <label className="error">Name is Required</label>
              ) : (
                <label>Name</label>
              )}
              <input
                type="text"
                name="user_name"
                placeholder="Enter your name"
              />
            </div>
            <div className="form-mail-email">
              {errorEmail ? (
                <label className="error">Email is Required</label>
              ) : (
                <label>Email</label>
              )}
              <input
                type="email"
                name="user_email"
                placeholder="Enter your Email"
              />
            </div>
            <div className="form-mail-message">
              {errorMessage ? (
                <label className="error">Message is Required</label>
              ) : (
                <label>Message</label>
              )}
              <textarea name="message" />
            </div>
            <input
              type="submit"
              value="Send"
              className="btn btn-warning send"
            />
          </form>
        </div>
        <div className="col-md-6 information">
          <p className="text-center text mt-5"> Get in touch </p>
          <div className="row mt-5">
            <div className="col-md-6 left">
              <p className="">
                <OnDeviceTrainingIcon className="phone-icon" />
              </p>
              <p>PHONE</p>
              <p>+374 77 86 48 56</p>
            </div>
            <div className="col-md-6 right">
              <p>
                <EmailIcon className="mail-icon" />
              </p>
              <p>MAIL</p>
              <p>samvel964@gmail.com</p>
            </div>
          </div>
          <div className="row social">
            <p className="follow">Social media links</p>
            <div className="social-links">
              <a href="https://www.facebook.com/samvel.martirosyan.395/" target={'_blank'}>
                <FacebookOutlinedIcon className="soc-icons" />
              </a>
              <a href="https://www.linkedin.com/in/samvel-martirosyan/" target={'_blank'}>
                <LinkedInIcon className="soc-icons" />
              </a>
              <a href="https://t.me/Samvel_Martirosyan_t" target={'_blank'}>
                <TelegramIcon className="soc-icons" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
