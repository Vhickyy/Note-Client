import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { FaFacebookF, FaTwitter, FaLinkedinIn } from 'react-icons/fa';
import {AiFillInstagram} from 'react-icons/ai';
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

const Wrapper = styled.footer`
    background-color: var(--primaryColor80);
    color: white;
    letter-spacing: normal;
    /* background: linear-gradient(to top,var(--primaryColor80), var(--primaryColor40)); */
    /* height: 10rem; */
    h5{
        margin-bottom: .8rem;
    }
    .main{
        padding-block: 4rem;
        width: min(var(--maxWidth),90%);
        margin-inline: auto;
    }
    .first{
        display: grid;
        gap: .5rem;
    }
    a{
        font-size: 0.9rem;
    }
    .foot-details{
        width: 100%;
        display: flex;
        justify-content: space-between;
    }
    .logo{
        display: none;
    }
    p{
        margin: 0 auto;
        width: 100%;
        /* text-align: center; */
        /* border-top: 1px solid var(--primaryColor10); */
    }
    .last{
        border-top: 1px solid white;
        padding: 0.5rem;
        p{
            width: fit-content;
            text-align: center;
            font-size: .8rem;
        }
    }
    .socials{
        display: flex;
        gap: 1rem;
    }
    .icon{
        border: 2px solid white;
        padding: .4rem;
        border-radius: 50%;
        color: var(--primaryColor40);
        transition: hover .3s linear;
    }
    .icon:hover{
        background-color: var(--primaryColor40);
        color: white;
        border-color: var(--primaryColor40);
        box-shadow: 0 0 10px var(--primaryColor40);
    }
    .support-contact{
        display: flex;
        flex-direction: column;
        gap: 1rem;
    }
    @media screen and (min-width: 800px) {
        .support-contact{
            width: 42%;
            /* background-color: green; */
            flex-direction: row;
            justify-content: space-between;
        }
    }
`