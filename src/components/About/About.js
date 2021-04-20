import React, { useEffect} from 'react';
import ParticlesBg from "particles-bg";
import Typical from 'react-typical'
import profile from '../../images/profile.jpg'
import KeyboardIcon from '@material-ui/icons/Keyboard';
import './About.css';

const About = () => {

    return (
        <div className="about">
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
                    <p>I'm a final year graduate pursuing <b>Bachelor of Computer Science and Engingeering</b> in Sri Sairam Engineering College, Chennai.</p>
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
