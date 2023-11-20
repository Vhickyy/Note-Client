import styled from "styled-components"
import Navbar from "../../components/Dashboard/Navbar"
import { useState } from "react"

const Memorycheck = () => {
  const [mainText,setMainText] = useState("");
  const [tryText,setTryText] = useState("");
  const [result,setResult] = useState<{word:string,match:boolean}[]>([]);

  const changeMain = (e:React.ChangeEvent<HTMLTextAreaElement>) => {
    setMainText(e.target.value.replace("\n",""))
    const newResult = e.target.value.trim().split(" ");
    console.log(newResult.join(" ").trim().split(" "));
    const newRes = result.map((res,index) => res.word.toLowerCase().trim() === newResult[index]?.toLowerCase().trim() ? {word:res.word,match:true} : res.word.toLowerCase().trim() !== newResult[index]?.toLowerCase().trim() ? {word:res.word,match:false} : res);
    // console.log(newRes);
    
    setResult(newRes);
  }

  const changeTry = (e:React.ChangeEvent<HTMLTextAreaElement>) => {
    setTryText(e.target.value.replace("\n",""));
    const newResult = e.target.value.trim().split(" ");
    // console.log(newResult.join(" ").trim());
    
    const mainText2 = mainText.split(" ").slice(0,newResult.length + 1);
    // // console.log(newResult,mainText2)
    // // const newResult2 = newResult.map()
    const newRes = newResult.map((res,index)=> res.toLowerCase() === mainText2[index]?.toLowerCase() ? {word:res.trim(),match:true} : {word:res.trim(),match:false});
    // newRes.filter(res=>!res.word)
    setResult(newRes);
  }
  return (
    <Wrapper>
        <Navbar page="How many words do you remember?"/>
        <section>
          <div className="memory-body">
            {/* <div className="text-div"> */}
                <textarea name="" id="" placeholder="write text you want to memorize" className="text-div" value={mainText} onChange={(e)=>changeMain(e)}></textarea>
            {/* </div> */}
            {/* <div className="text-div"> */}
                <textarea name="" id="" placeholder="try writing the text here" className="text-div" value={tryText} onChange={(e)=>changeTry(e)}></textarea>
            {/* </div> */}
            <div className="text-div">
                {result?.length && result.map((res,index)=>{
                  return(
                    <span key={index} className={res.match ? "green" : "red"}>{`${res.word} `}</span>
                  )
                })}
            </div>
          </div>    
        </section>
    </Wrapper>
  )
}

export default Memorycheck;

const Wrapper = styled.div`
  span{
     margin-right: 2px;
    padding: .2rem;
  }
  .green{
    background-color: green;
   
    
  }
  .red{
    background-color: red;
  }
  section{
    padding-block: 2rem;
    width: min(90%,var(--maxWidth));
    margin-inline: auto;
    min-height: 86vh;
    color:white;
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