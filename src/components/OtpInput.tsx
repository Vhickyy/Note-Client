import React, { useEffect, useRef, useState } from 'react'
import styled from 'styled-components';

// \{code,handleChange,handleKey,active,handleClick}
const OtpInput = ({resendCode,verifyState,verifyCode,resendState,code,setCode}:{resendCode:any,verifyState:any,verifyCode:any,resendState:any,code:string[],setCode:any}) => {
    
    const isFilled = code.every(c => c);
  const [active,setActive] = useState(0)
  const inputRef = useRef<HTMLInputElement>(null)


  const handleChange = ({target}: React.ChangeEvent<HTMLInputElement>, index:number ) => {
    const {value} = target;
    if(isNaN(Number(value)) || !value){
        return
    } else{
        const otp:string[] = code.map((inp,i)=> i === index ? value[value.length-1] : inp);
        setActive(index + 1)
        setCode(otp);
    }
  }
  
  const handleKey = ({key}:React.KeyboardEvent<HTMLInputElement>,index:number) => {
      if(key === "Backspace"){
        const otp:string[] = code.map((inp,i)=> i === index ? '' : inp);
        setCode(otp);
        setActive(index - 1);
    }
  }

  const handleClick = (index:number) => {
    setActive(index)
  }
  
  useEffect(()=>{
    inputRef?.current?.focus()
  },[active])

  return (
    <Wrapper>
        
        <div className="code-container">
            {code.map((inp,index)=>{
                return (
                    <input key={index} 
                    type="text" 
                    onChange={(e)=>handleChange(e,index)}
                    onKeyDown={(e)=>handleKey(e,index)}
                    ref={index === active ? inputRef : null}
                    onClick={()=>handleClick(index)}
                    placeholder='x'
                    value={inp}
                     />
                )
            })}
        </div>
        <button disabled={!isFilled || verifyState.loading} onClick={verifyCode}>submit</button>
        {!resendState.timer ? <p>Didn't get a code? <span onClick={resendCode}>Resend Code</span></p> : <p>Request code again in <span>{resendState.time}</span></p>}
    </Wrapper>
  )
}

export default OtpInput

const Wrapper = styled.div`
/* background-color: teal; */
    span{
        color: var(--primaryColor);
        cursor: pointer;
    }
    .code-container{
        display: flex;
        justify-content: center;
        align-items: center;
        gap: .5rem;
        margin-block: 1.5rem;
        input{
            height: 2.5rem;
            width: 2.5rem;
            text-align: center;
            font-size: 1.2rem;
            caret-color: var(--primaryColor);
            border: 1px solid var(--primaryColor);
            border-radius: .3rem;
        }
        input:focus{
            outline: none;
            /* outline: 1px solid var(--primaryColor); */
            border: 2.5px solid var(--primaryColor);
        }
    }
    button{
        width: 100%;
    }
    button:disabled{
        background-color: gray;
    }
`