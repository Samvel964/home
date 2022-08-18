import "./style.scss";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";

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
            <div className="d-flex">
              <ul>
                <li>HTML5</li>
                <li>CSS3</li>
                <li>SASS</li>
                <li>Bootstrap</li>
              </ul>
              <ul>
                <li>JavaScript</li>
                <li>JQuery</li>
                <li>React JS</li>
                <li>AJAX</li>
              </ul>
              <ul>
                <li> AXIOS</li>
                <li>git</li>
                <li>github</li>
              </ul>
            </div>
            <p>Programming requires lots of time. In order to develop your skils, you should work hard.
            To chalange myself, I usually think of some tasks and try to solve them.
             Some of my tasks are presented in "Works" section.
            </p>
            <Link to="/contact">Contact {">"}</Link>
          </div>
        </div>
      </div>
    </div>
  );
}
