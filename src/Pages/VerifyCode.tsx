import React, { useEffect, useRef } from "react";
import { useState } from "react";
import styled from "styled-components";

const VerifyCode = () => {
  const [code,setCode] = useState<string[]>(Array(6).fill(""));
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
        const otp:string[] = code.map((inp,i)=> i ===index ? '' : inp);
        setCode(otp);
        return setActive(index - 1);
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
        <h3>Verify Email</h3>
        <div className="verify-box">
            <h5>Input OTP</h5>
            <div className="code-container">
                {code.map((inp,index)=>{
                    return (
                        <input key={index} 
                        type="text" 
                        onChange={(e)=>handleChange(e,index)}
                        onKeyDown={(e)=>handleKey(e,index)}
                        ref={index === active ? inputRef : null}
                        onClick={()=>handleClick(index)}
                        value={inp} />
                    )
                })}
            </div>
            <p>Enter the code sent to your email</p>
            <p>Didn't get a code? <span>Resend Code</span></p>
        </div>
    </Wrapper>
  )
}

export default VerifyCode;

const Wrapper = styled.div`
    letter-spacing: var(--letterSpacing);
    color: var(--textColor50);
    background-color: whitesmoke;
    padding-block: 4rem;
    text-align: center;
    display: grid;
    gap: 2rem;
    h3{
        color: var(--primaryColor);
    }
    .verify-box{
        padding-block: 2rem;
        background-color: white;
        width: min(90%,var(--fixedWidth));
        margin-inline: auto;
        box-shadow: var(--shadowmd);
        border-radius: 1rem;
        text-align: center;
    }
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
        }
        input[focus]{
            border: 1px solid var(--primaryColor);
        }
    }
`