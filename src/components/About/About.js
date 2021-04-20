import React, { useEffect} from 'react';
import ParticlesBg from "particles-bg";
import Typical from 'react-typical'
import profile from '../../images/profile.jpg'
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import GitHubIcon from '@material-ui/icons/GitHub';
import InstagramIcon from '@material-ui/icons/Instagram';
import FacebookIcon from '@material-ui/icons/Facebook';
import './About.css';

const About = () => {

    return (
        <div className="about">
            <div className="socialMedia">
                <a href="https://www.linkedin.com/in/hariharan-k-b3136218a/"  className="social-icon" ><LinkedInIcon/></a>
                <a href="https://github.com/Hariharan-13-06" className="social-icon"><GitHubIcon /></a>
                <a href="https://www.instagram.com/"  className="social-icon"><InstagramIcon/></a>
                <a href="https://www.facebook.com/" className="social-icon"><FacebookIcon /></a>
            </div>
            <div className="about-content">
                <div className="about-name">
                    <img className="profile" src={profile} alt="Profile" />
                    <p className="name">Hi, I am <span>Hariharan K</span></p>
                </div>
                <p className="desc">I'm a {" "}<u>
                    <span className="description">
                    <Typical
                        steps={['Web Developer', 1000, 'Coding Enthusiast', 1000]}
                        loop={Infinity}
                        wrapper="b"
                    />
                    </span>
                    </u>
                </p> 
                <div className="detail">
                    <p>I'm a final year graduate pursuing <span><b>Bachelor of Computer Science and Engingeering</b></span> in Sri Sairam Engineering College, Chennai.</p>
                </div>
                <div class="scroll-downs">
                    <div class="mousey">
                        <div class="scroller"></div>
                    </div>
                </div>
            </div>
            <ParticlesBg type="cobweb" bg={true}/>
        </div>
    )
}

export default About;
