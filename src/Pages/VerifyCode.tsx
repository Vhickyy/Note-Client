import { useState } from "react";
import styled from "styled-components";

const VerifyCode = () => {
  const [code,setCode] = useState("")
  return (
    <Wrapper>
        <h3>Verify Email</h3>
        <div className="verify-box">
            <h5>Input OTP</h5>
            <div className="code-container">
                {Array.from({length:6}).map((inp,index)=>{
                    return (
                        <>
                        <input type="text" />
                        </>
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
    padding-block: 3rem;
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
        /* display: grid; */
        /* gap: ; */
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
        /* background-color: yellow; */
        input{
            height: 2.5rem;
            width: 2.5rem;
            text-align: center;
            font-size: 1.2rem;
        }
    }
`