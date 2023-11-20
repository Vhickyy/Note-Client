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
                    <NavLink to={`${link.path}`} onClick={close} end key={index} >
                        {link.icon}
                        {link.link}
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
        width: 90%;
        margin-inline: auto;
        padding: 1rem;
        display: flex;
        flex-direction: column;
        gap: 1rem;
        /* margin-block-start: 2rem; */
        /* justify-content: center; */
        a{
            color: var(--textColor);
            display: flex;
            align-items: center;
            gap: 1rem;
            border: 1px solid var(--primaryColor);
            padding-inline: 1rem;
            padding-block: .7rem;
            border-radius: .5rem;
        }
    }
    .active{
        color: var(--primaryColor);
    }
`