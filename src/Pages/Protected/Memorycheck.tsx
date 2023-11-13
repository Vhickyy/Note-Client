import styled from "styled-components"
import Navbar from "../../components/Dashboard/Navbar"

const Memorycheck = () => {
  return (
    <Wrapper>
        <Navbar page="How many words do you remember?"/>
        <section>
          <div className="memory-body">
            {/* <div className="text-div"> */}
                <textarea name="" id="" placeholder="write text you want to memorize" className="text-div"></textarea>
            {/* </div> */}
            {/* <div className="text-div"> */}
                <textarea name="" id="" placeholder="try writing the text here" className="text-div"></textarea>
            {/* </div> */}
            <div className="text-div">
                first
            </div>
          </div>    
        </section>
    </Wrapper>
  )
}

export default Memorycheck;

const Wrapper = styled.div`
  background-color: whitesmoke;
  section{
    padding-block: 2rem;
    width: min(90%,var(--maxWidth));
    margin-inline: auto;
    min-height: 86vh;
  }
  .memory-body{
    display: grid;
    gap: 1rem;
  }
  .text-div{
    width: 100%;
    border-radius: 1rem;
    height: 20rem;
    background-color: #fff;
    box-shadow: var(--shadowmd);
    padding: .5rem;
    overflow-y: auto;
  }
  textarea{
    width: 100%;
    /* height: 100%; */
    /* border-radius: 1rem; */
    outline: none;
    border: none;
    resize: none;
  }
  @media screen and (min-width: 1000px) {
    .memory-body{
      grid-template-columns: repeat(3,1fr);
    }
    .text-div{
      height: 76vh;
    }
  }
`