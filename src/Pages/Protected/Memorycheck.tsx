import styled from "styled-components"
import Navbar from "../../components/Dashboard/Navbar"

const Memorycheck = () => {
  return (
    <Wrapper>
        <Navbar page="How many words do you remember?"/>
        <section>
            <div>
                <textarea name="" id="" placeholder="write text you want to memorize"></textarea>
            </div>
            <div>
                <textarea name="" id="" placeholder="try writing the text here"></textarea>
            </div>
            <div>
                first
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
  .top{
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 1rem;
  }
`