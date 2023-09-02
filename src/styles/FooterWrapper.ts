import styled from "styled-components";


const Wrapper = styled.footer`
    /* background-color: whitesmoke; */
    color: var(--textColor50);
    letter-spacing: normal;
    h5{
        margin-bottom: .5rem;
    }
    .main{
        padding-block: 2rem;
        width: min(var(--maxWidth),90%);
        margin-inline: auto;
    }
    .first{
        display: grid;
        gap: .5rem;
    }
    a{
        font-size: 0.9rem;
        color: var(--textColor50);
    }
    .foot-details{
        width: 100%;
        display: grid;
        gap: 1rem;
    }
    .logo{
        display: none;
    }
    p{
        margin: 0 auto;
        width: 100%;
        text-align: center;
    }
    .last{
        border-top: 1px solid var(--primaryColor);
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
        border-radius: 50%;
        color: var(--primaryColor);
        /* transition: hover .3s linear; */
    }
    .icon:hover{
        /* background-color: var(--primaryColor40);
        color: white; */
        /* border-color: var(--primaryColor40); */
        /* box-shadow: 0 0 10px var(--primaryColor40); */
    }
    .support-contact{
        display: grid;
        gap: 1rem;
    }
    @media screen and (min-width: 500px) {
        .foot-details{
            grid-template-columns: 1fr 1fr 1fr;
        }
        .logo{
            display: block;
        }
    }
`
export default Wrapper;