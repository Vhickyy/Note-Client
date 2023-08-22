import { NavLink } from "react-router-dom";
import styled from "styled-components";
import links from "../../data/Links";
type Prop = {
    close? : ()=>void;
}
const Sidebar = ({close}:Prop) => {
  return (
    <Wrapper >
        <div className="inner">
            <div className="links">
                {links.map(link=>{
                    return (
                        <NavLink to={`${link.path}`} onClick={close} end>
                            {link.icon}
                            {link.link}
                        </NavLink>
                    )
                })}
            </div>
        </div>
    </Wrapper>
  )
}

export default Sidebar;

const Wrapper = styled.section`
    .inner{
        height: 100%;
        width: 90%;
        margin-inline: auto;
        padding: 1rem;
        /* margin-block: 1rem; */
    }
    .links{
        display: flex;
        flex-direction: column;
        gap: 1rem;
        margin-block-start: 2rem;
        /* justify-content: center; */
        a{
            color: black;
            display: flex;
            align-items: center;
            gap: 1rem;
        }
    }
`