import { FaHome, FaTimes } from "react-icons/fa";
import { Link } from "react-router-dom";
import styled from "styled-components";

const Sidebar = () => {
  return (
    <Wrapper>
        <section className="sidebar">
            <div className="inner">
                <div className="flex">
                    <h3>VEENOTES</h3>
                    <FaTimes className="icon"/>
                </div>
                <div className="links">
                    <Link to={"dashboard"}>
                        <FaHome/>
                        Dashboard
                    </Link>
                    <Link to={"dashboard"}>
                        <FaHome/>
                        All Notes
                    </Link>
                    <Link to={"dashboard"}>
                        <FaHome/>
                        Deleted Notes
                    </Link>
                    <Link to={"dashboard"}>
                        <FaHome/>
                        Profile
                    </Link>
                </div>
            </div>
        </section>
    </Wrapper>
  )
}

export default Sidebar;

const Wrapper = styled.div`
    position: fixed;
    height: 100%;
    width: 100%;
    top: 0;
    bottom: 0;
    padding-block: .5rem;
    /* background-color: burlywood; */
    background-color: #f5f5f599;
    .sidebar{
        height: 100%;
        width: 70%;
        background-color: whitesmoke;
        box-shadow: var(--shadowlg);
        /* z-index: -10; */
    }
    .inner{
        /* background-color: green; */
        height: 100%;
        width: 90%;
        margin-inline: auto;
        padding: 1rem;
        /* margin-block: 1rem; */
    }
    .flex{
        display: flex;
        justify-content: space-between;
    }
    h3{
        margin: 0;
    }
    .icon{
        border: 2px solid var(--primaryColor80);
        padding: .3rem;
        border-radius: .25rem;
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