import styled from "styled-components";
import OtpInput from "../components/OtpInput";
import { useEffect, useState } from "react";
import { customFetch } from "../api/axios";
import { useNavigate } from "react-router-dom";

const VerifyCode = () => {
    const [resendState,setResendState] = useState({loading:false,error:"",data:"",timer:false,time:"02:00"});
    const [verifyState,setVerifyState] = useState({loading:false,error:"",data:""});
    const [code,setCode] = useState<string[]>(Array(6).fill(""));
    const email = new URLSearchParams(window.location.search).get("email");
    const navigate = useNavigate()
    const resendCode = async () => {
        try {
            setResendState({...resendState,loading:true});
            const {data} = await customFetch.post("/resend-otp",{email});
            setResendState({...resendState,data:data.msg,timer:true});
            console.log(data);
            
        } catch (error) {
            console.log(error);
            
        }
    }

    const verifyCode = async () => {
        try {
            setVerifyState({...verifyState,loading:true});
            const response = await customFetch.post("/verify-email",{email,otpCode:code.join("")});
            console.log(response);
            setVerifyState({...verifyState,loading:false});
            navigate("/login")
        } catch (error) {
            console.log(error);
            setVerifyState({...verifyState,loading:false});
        }
        
    }
    
    useEffect(()=>{
        const int = setInterval(()=>{
            if(resendState.timer){
                const time = resendState.time.slice(3);
                if(time == "00" && resendState.time[1] === "0"){
                    setResendState({...resendState,time:"02:00",timer:false});
                }else if(time == "00" && resendState.time[1] === "2"){
                    setResendState({...resendState,time:"01:59"});
                }else if (time == "00" && resendState.time[1] === "1"){
                    setResendState({...resendState,time:"00:59"});
                }else{
                    let secs: string | number = Number(time) - 1;
                    if(secs.toString().length < 2){
                        secs = `0${secs}`
                    }
                    setResendState({...resendState,time:`0${resendState.time[1]}:${secs}`})
                }
            }
        },1000);
        return () => {
            clearInterval(int)
        }
    },[resendState.timer,resendState.time])

  return (
    <Wrapper>
        <h3>Verify Email</h3>
        <div className="verify-box">
            <h5>Input OTP</h5>
            <p>Enter the code sent to your email</p>
            <OtpInput resendCode={resendCode} verifyState={verifyState} verifyCode={verifyCode} resendState={resendState} code={code} setCode={setCode}/>
        </div>
    </Wrapper>
  )
}

export default VerifyCode;

const Wrapper = styled.div`
    letter-spacing: var(--letterSpacing);
    color: var(--textColor50);
    /* background-color: var(--backgroundColor); */
    padding-block: 4rem;
    text-align: center;
    display: grid;
    gap: 2rem;
    h3{
        color: var(--primaryColor);
    }
    .verify-box{
        padding-inline: 4rem;
        padding-block: 2rem;
        /* background-color: var(--secondaryColor); */
        width: min(90%,var(--fixedWidth));
        margin-inline: auto;
        box-shadow: var(--shadowmd);
        border-radius: 1rem;
        text-align: center;
    }
    input:focus{
        border: 2px solid var(--primaryColor);
    }
`