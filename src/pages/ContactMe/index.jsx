import "./style.scss";
import FacebookOutlinedIcon from "@mui/icons-material/FacebookOutlined";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import EmailIcon from "@mui/icons-material/Email";
import TelegramIcon from "@mui/icons-material/Telegram";
import CallIcon from '@mui/icons-material/Call';
import OnDeviceTrainingIcon from '@mui/icons-material/OnDeviceTraining';

export default function ContactMe() {
  return (
    <div className="contact container">
      <div className='col-md-6 information'>
        <p className='text-center text mt-5'> Get in touch </p>
        <div className="row mt-5">
          <div className="col-md-6 left">
            <p className=''><OnDeviceTrainingIcon className="phone-icon"/></p>
            <p>PHONE</p>
            <p>+374 77 86 48 56</p>
          </div>
          <div className="col-md-6 right">
            <p><EmailIcon className="mail-icon"/></p>
            <p>MAIL</p>
            <p>samvel964@gmail.com</p>        
          </div>
        </div>
        <div className="row social">
          <p className="follow">Social media links</p>
          <div className="social-links">
            <a href="https://www.facebook.com/samvel.martirosyan.395/">
              <FacebookOutlinedIcon className='soc-icons'/>
            </a>
            <a href="https://www.linkedin.com/in/samvel-martirosyan-635b0b243/">
              <LinkedInIcon className='soc-icons' />
            </a>
            <a href="https://t.me/Samvel_Martirosyan_t">
              <TelegramIcon className='soc-icons'/>
            </a>
          </div> 
        </div>
        
      </div>      
    </div>

  );
}



{/* <p className="contact-text">Get in touch</p> 

      <p className="contact-mail">
        <EmailIcon /> samvel964@gmail.com
      </p>
      <p className="contact-phone">
        <CallIcon /> +374 77 86 48 56
      </p>
      <div className="social-links">
        <a href="https://www.facebook.com/samvel.martirosyan.395/">
          <FacebookOutlinedIcon />
        </a>
        <a href="https://www.linkedin.com/in/samvel-martirosyan-635b0b243/">
          <LinkedInIcon />
        </a>
        <a href="https://t.me/Samvel_Martirosyan_t">
          <TelegramIcon />
        </a>
      </div> */}