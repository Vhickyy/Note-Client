import { Link } from 'react-router-dom';
import { FaFacebookF, FaTwitter, FaLinkedinIn } from 'react-icons/fa';
import {AiFillInstagram} from 'react-icons/ai';
import Wrapper from '../../styles/FooterWrapper';
const Footer = () => {
  return (
    <Wrapper>
        <div className='main'>
            <div  className='foot-details'>
                <div className='logo'>logo</div>
                <div className='support-contact'>
                    <div className='logo1'>logo</div>
                    <div>
                        <h5>VeeNotes</h5>
                        <div className='first'>
                            <Link to={"#"}>About us</Link>
                            <Link to={"#"}>Features</Link>
                            <Link to={"#"}>Blog</Link>
                            <Link to={"#"}>FAQs</Link>
                        </div>
                    </div>
                </div>
                <div className='support-contact'>
                    <div>
                        <h5>Support</h5>
                        <div className='first'>
                            <Link to={"#"}>Help</Link>
                            <Link to={"#"}>Developer</Link>
                            <Link to={"#"}>Team</Link>
                        </div>
                    </div>
                    <div>
                        <h5>Contact</h5>
                        <div className='socials'>
                            <Link to={"#"}><FaFacebookF className="icon"/></Link>
                            <Link to={"#"}><FaTwitter className="icon"/></Link>
                            <Link to={"#"}><FaLinkedinIn className="icon"/></Link>
                            <Link to={"#"}><AiFillInstagram className="icon"/></Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div className='last'>
            <p>Built by Okonnah Victoria 💙</p>
            <p>Privacy policy &copy;copyright {new Date().getFullYear()}</p>
        </div>
    </Wrapper>
  )
}

export default Footer;
