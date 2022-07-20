import './style.scss';
import { Link } from 'react-router-dom';
import TypeAnimation from 'react-type-animation';

export default function Home() {

    return(
        <div className="home">
            <div className='container home-content'>
                <div className='home-left col-md-6'>
                <TypeAnimation
                        cursor={true}
                        sequence={['Hi, I\'m Samvel...']}
                        wrapper="h2"
                        // repeat={2}
                        />
                    {/* <p className='name'>Hi, I'm Samvel.</p> */}
                    <h1 className='animate__animated animate__fadeInUp animate__delay-2s'>I'm a web developer</h1>
                    <div className=" animate__animated animate__fadeIn animate__delay-3s">
                        <p>Happy to meet you in this page</p>
                        <p>A web developer ready to explore everything in programing</p>
                        <p>Always welcome new challages, and do my best to reach the goal</p>
                        <Link to='/about' className='animate__animated '>Learn more ></Link>
                    </div>
                </div>
            </div>                
        </div>
    )
}
