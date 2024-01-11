import { Link } from "react-router-dom";
import { FaBars, FaTimes } from "react-icons/fa";
import { BsMoonFill, BsSunFill } from "react-icons/bs";
import Wrapper from "../../styles/HomeNavbarWrapper";
import {useRef, useState, useEffect} from "react"
import { useTheme } from "../../context/ThemeContext";

const Navbar = () => {
    const navRef = useRef<HTMLDivElement>(null!);
    const [show,setShow] = useState(false);
    const {theme, toggleTheme} = useTheme()
    const openNav = () => {
        setShow(true)
    }
    const closeNav = () => {
        setShow(false)
    }
    useEffect(()=>{
        const scroll = () => {
            navRef.current.classList.toggle("shadow", window.scrollY > 70);
        }
        window.addEventListener("scroll", scroll)
        return () => {
            window.removeEventListener("scroll",scroll)
        }
    },[])
  return (
    <Wrapper >
        <nav ref={navRef}>
            <div className="nav">
                <Link to={"/"}><h2>NOTES</h2></Link>
                <div className="icon-container">
                    {theme == "dark" ? <BsSunFill className="icon" onClick={toggleTheme}/> : <BsMoonFill className="icon" onClick={toggleTheme}/>}
                    {!show ?<FaBars className="icon ham" onClick={openNav}/> : <FaTimes className="icon ham" onClick={closeNav}/>}
                </div>
                <div className="desktop-links">
                    <Link to={"/"}>Home</Link>
                    <Link to={"#"}>About</Link>
                    <Link to={"#"}>Contact</Link>
                    {theme == "dark" ? <BsSunFill className="icon" onClick={toggleTheme}/> : <BsMoonFill className="icon" onClick={toggleTheme}/>}
                    <div className="btn-container">
                        <Link to={"login"}><button className="login">Log in</button></Link>
                        <Link to={"signup"}><button>sign up</button></Link>
                    </div>
                </div>
            </div>
            <div className="full-mobile">
                {show && <div className="nav-mobile">
                    <Link to={"/"} onClick={closeNav}>Home</Link>
                    <Link to={"/"} onClick={closeNav}>About</Link>
                    <Link to={"/"} onClick={closeNav}>Contact</Link>
                    <Link to={"/"} onClick={closeNav}>FAQs</Link>
                    <Link to={"login"} onClick={closeNav}>Log in</Link>
                    <Link to={"signup"} onClick={closeNav}>sign up</Link>
                </div>}
            </div>
        </nav>
    </Wrapper>
  )
}

export default Navbar
// const Wrapper = styled.div`
    /* color: var(--primaryColor80);
    position: sticky;
    top: 0;
    width: 100%;
    .sticky{
        background-color: white;
        box-shadow: 0px 4px 6px -1px rgb(0 0 0/0.1), 0 4px 6px -4px rgb(0 0 0 / 0.1);
    }
    .head{
        width: min(var(--maxWidth),90%);
        margin-inline: auto;
        display: flex;
        align-items: center;
        justify-content: space-between;
        padding-block: .5rem;
        h2{
            margin: 0;
        }
    }
    .nav-mobile{
        width: min(var(--maxWidth),90%);
        margin-inline: auto;
        display: flex;
        flex-direction: column;
        padding-block: .7rem .5rem;
        gap: .5rem;
    }
    nav{
        display: none;
    }
    span{
        color: var(--primaryColor);
    }
    .ham{
        display: block;
        width: 1.5rem;
        height: 1.5rem;
    }
    .btn-container{
        display: flex;
        gap: 1.5rem;
    }
    .login{
        background-color: transparent;
        border: 1px solid var(--primaryColor);
        color: var(--primaryColor80);
    }
    a{
        color: var(--primaryColor80);
    }
    @media screen and (min-width:960px){
        .ham{
            display: none;
        }
        nav{
            display: flex;
            align-items: center;
            width: 55%;
            justify-content: space-between;
        }
        .nav-mobile{
            display: none;
        }
    } */
// `