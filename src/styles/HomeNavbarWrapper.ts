import styled from "styled-components";

const Wrapper = styled.header`
    position: sticky;
    top: 0;
    left: 0;
    z-index: 2;
    background-color: var(--backgroundColor);
.shadow{
    box-shadow: var(--shadowmd);
}
.nav{
    padding-block: .7rem;
    width: min(90%, var(--maxWidth));
    margin-inline: auto;
    display: flex;
    justify-content: space-between;
    align-items: center;
    h2{
        margin-bottom: 0;
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
    color: var(--textColor);
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