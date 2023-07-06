import "./style.scss";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import html from '../../images/toolsImage/html5.png';
import css from '../../images/toolsImage/CSS3_logo.svg.png';
import sass from '../../images/toolsImage/sass.png';
import bootstrap from '../../images/toolsImage/Bootstrap.png';
import javaScript from '../../images/toolsImage/JavaScript.png';
import typeScript from '../../images/Typescript_logo.png';
import react from '../../images/toolsImage/React.png';
import angular from '../../images/Angular_logo.png';
import axios from '../../images/toolsImage/axios.webp';
import git from '../../images/toolsImage/Git.png';
import github from '../../images/toolsImage/github2.png';
import rxjs from '../../images/rxjs-logo.png';

export default function About() {
  const aboutPath = useSelector((state) => state.path.about);

  return (
    <div className="about">
      <div className="container">
        <div className="abuot-info col-md-7">
          <div
            className={
              aboutPath.length <= 1
                ? "animate__animated animate__slideInUp animate__slow"
                : ""
            }
          >
            <p>
              Hello, my name is Samvel. I am from Armenia.
            </p>
            <p>I am a junior web developer. </p>
            <p>I have worked in Armenian Military Forces.</p>
            <p>
              Then, I started my resarch on programming and decided to become a
              programmer.
            </p>
          </div>
        </div>
        <div className="info-continiue col-md-7">
          <div
            className={
              aboutPath.length <= 1
                ? "animate__animated animate__slideInUp animate__slower"
                : ""
            }
          >
            <p>In so far, I have learned </p>
            <div className='row skils'>
              <div className="col-md-3 cols">
                <div><img src={html} className='logo'/> HTML5</div>
                <div><img src={css} className='logo'/> CSS3</div>
                <div><img src={sass} className='logo'/> SASS</div>
                <div><img src={bootstrap} className='logo'/> Bootstrap</div>
              </div>
              <div className="col-md-3 cols">
                <div><img src={javaScript} className='logo'/> JavaScript</div>
                <div><img src={typeScript} className='logo'/> TypeScript</div>
                <div><img src={react} className='logo'/> React JS</div>
                <div><img src={angular} className='logo'/> Angular</div>
              </div>
              <div className="col-md-3 cols">                
                <div><img src={rxjs} className='logo'/> RxJS</div>
                <div><img src={axios} className='logo'/> AXIOS</div>
                <div><img src={git} className='logo'/> git</div>
                <div><img src={github} className='logo'/> github</div>
              </div>
            </div>
            <p>Programming requires lots of time. In order to develop your skils, you should work hard.
            To chalange myself, I usually think of some tasks and try to solve them.
             Some of my tasks are presented in " <Link to='/my-works' >Works</Link> " section.
            </p>
            <Link to="/contact">Contact {">"}</Link>
          </div>
        </div>
      </div>
    </div>
  );
}
