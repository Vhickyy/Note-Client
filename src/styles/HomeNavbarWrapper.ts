import styled from "styled-components";

const Wrapper = styled.header`
/* transition: var(--transition); */
.fixed{
    width: 100%;
    position: fixed;
    top: 0;
    left: 0;
    transform: translateY(50);
    background-color: #ffffff;
    box-shadow: var(--shadowmd);
}
.nav{
    padding-block: 1rem;
    width: min(90%, var(--maxWidth));
    margin-inline: auto;
    display: flex;
    justify-content: space-between;
    align-items: center;
    /* transition: var(--transition); */
    h2{
        margin-bottom: 0;
        color: var(--textColor50);
    }
}
.icon-container{
    display: flex;
    gap: 1rem;
}
.desktop-links{
    display: none;
}
a{
    color: var(--textColor50);
}
a button{
    color: #ffffff;
}
.btn-container{
    display: flex;
    gap: 1.2rem ;
}
.login{
    color: var(--primaryColor);
    background-color: inherit;
    border: 1px solid var(--primaryColor);
}
.full-mobile{
    box-shadow: var(--shadowmd);
}
.nav-mobile{
    width: min(var(--maxWidth),90%);
    margin-inline: auto;
    display: flex;
    flex-direction: column;
    gap: .5rem;
    padding-block: .7rem .5rem;
}
@media screen and (min-width:960px){
        .icon-container{
            display: none;
        }
        .desktop-links{
            width: 60%;
            display: flex;
            justify-content: space-between;
            align-items: center;
        }
    } 
`

export default Wrapper