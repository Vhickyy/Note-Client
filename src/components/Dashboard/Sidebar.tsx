import { NavLink } from "react-router-dom";
import styled from "styled-components";
import links from "../../data/Links";
type Prop = {
    close? : ()=>void;
}

const Sidebar = ({close}:Prop) => {
// className={({isActive})=>{isActive && "active"}}
  return (
    <Wrapper >
        <nav className="links">
            {links.map((link,index)=>{
                return (
                    <NavLink to={`${link.path}`} onClick={close} end key={index} className={({isActive})=> isActive ? "active" : ""} >
                        {link.icon}
                        {link.link}
                        <span></span>
                    </NavLink>
                )
            })}
        </nav>
    </Wrapper>
  )
}

export default Sidebar;

const Wrapper = styled.section`
    .links{
        height: 100%;
        width: 100%;
        margin-inline: auto;
        padding-left: 3rem;
        display: flex;
        flex-direction: column;
        gap: 1.2rem;
        /* margin-block-start: 2rem; */
        /* justify-content: center; */
        a{
            color: white;
            display: flex;
            align-items: center;
            gap: 1rem;
            font-size: 1.2rem;
            padding-block: .3rem;
            /* border: 1px solid var(--primaryColor); */
            /* padding-inline: 1rem; */
            /* padding-block: .5rem; */
            /* border-radius: .5rem; */
        }
    }
    a:hover{
        color: var(--primaryColor);
        padding-inline: .5rem;
    }
    .active{
        /* color: var(--primaryColor); */
        position: relative;
        /* color: black; */
        /* background-color: var(--primaryColor); */
        span{
            position: absolute;
            right: 0;
            height: 100%;
            width: .3rem;
            border-top-left-radius: 2rem;
            border-bottom-left-radius: 2rem;
            /* border-color: var(--primaryColor); */
            background-color: var(--primaryColor);
        }
    }
`