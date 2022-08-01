import './style.scss';
import { Link } from 'react-router-dom';


export default function About() {
    return( 
    <div className='about'>
        <div className="container">
            <div className='abuot-info col-md-7'>
                <div className='animate__animated animate__slideInUp animate__slow'>
                    <p>Hello, my name is Samvel. I am from Armenia.I am 31 years old.</p>
                    <p>I am a junior web developer. </p>
                    <p>I have been working in Armenian Military Forces for 12 years.</p>
                    <p>Then, I started my resarch on programming and decided to become a programmer. </p>
                </div>
            </div>
            <div className='info-continiue col-md-7'>
                <div className='animate__animated animate__slideInUp animate__slower' >
                <p>In so far, I have learned </p>
                <div className='d-flex'> 
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
                <Link to='/contact'>Contact ></Link>
                </div>
                
            </div>            
        </div>
    </div>   
    )
}
