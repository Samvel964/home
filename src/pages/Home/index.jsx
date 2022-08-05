import "./style.scss";
import { Link } from "react-router-dom";
import TypeAnimation from "react-type-animation";
import { useSelector } from "react-redux";

export default function Home() {
  const homePath = useSelector(state => state.path.home);

  return (
    <div className="home">
      <div className="container home-content">
        <div className="home-left col-md-6">
          {homePath.length <= 2 ? 
          <>
            <TypeAnimation
                cursor={false}
                sequence={["Hi, I'm Samvel..."]}
                wrapper="h2"
                repeat={2}
              />
              <h1 className="animate__animated animate__fadeInUp animate__delay-2s">
                I'm a web developer
              </h1>
              <div className=" animate__animated animate__fadeIn animate__delay-3s">
                <p>Happy to meet you in this page</p>
                <p>A web developer ready to explore everything in programing</p>
                <p>
                  Always welcome new challanges, and do my best to reach the goal
                </p>
                <Link to="/about" className="animate__animated ">
                  Learn more >
                </Link>
              </div>
            </> 
            :
            <>
              <div className="home">
                <div className="home-content">
                  <div className="home-left">
                    <h2>Hi, I'm Samvel...</h2>
                    <h1>I'm a web developer</h1>
                    <div>
                      <p>Happy to meet you in this page</p>
                      <p>
                        A web developer ready to explore everything in programming
                      </p>
                      <p>
                        Always welcome new challanges, and do my best to reach the
                        goal
                      </p>
                      <Link to="/about">Learn more ></Link>
                    </div>
                  </div>
                </div>
              </div>
            </>
            }            
        </div>
      </div>
    </div>
  );
}
