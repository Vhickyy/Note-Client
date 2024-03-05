import styled from "styled-components";

export const Wrapper = styled.div`
  padding-block: 2rem;
  width: min(var(--maxWidth2),90%);
  margin-inline: auto;
  h4{
    color: var(--primaryColor);
  }
  p{
    margin: 0;
    font-size: 1.2rem;
  }
  .desc{
    h1,h2,h3,h4,h5,h6{
      font-size: 1.2rem;
      font-weight: 300;
    }
  }
  .card-wrapper{
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(300px,1fr));
    gap: 1.1rem;
  }
  .card{
    background-color: var(--cardbg); 
    padding: 1.5rem 1rem;
    border-radius: .5rem;
    box-shadow: var(--shadowmd);
    display: flex;
    flex-direction: column;
    gap: 1rem;
    a{
      color: var(--textColor);
    }
    .flex{
      display: flex;
      gap: .5rem;
      justify-content: flex-end;
    }
  }
  button{
    background-color: transparent;
    padding: 0;
  }
  .btn{
    background-color: var(--primaryColor);
    padding: 1rem;
  }
  .icon{
    color: var(--textColor);
  }
  
  @media screen and (min-width: 1000px){
    .card-wrapper{
      /* grid-template-columns: 1fr 1fr; */
    }
  }
`