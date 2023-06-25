import styled from "styled-components"
import hero from "../../assets/undrawhero.svg"
const Reviews = () => {
    const reviews = [
        {
        name: "vee",
        review: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Fuga eos odio exercitationem placeat! Possimus, pariatur quidem. Soluta sequi deleniti numquam."
        },
        {
        name: "vdee",
        review: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Fuga eos odio exercitationem placeat! Possimus, pariatur quidem. Soluta sequi deleniti numquam."
        },
        {
        name: "gee",
        review: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Fuga eos odio exercitationem placeat! Possimus, pariatur quidem. Soluta sequi deleniti numquam."
        },
        {
        name: "aee",
        review: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Fuga eos odio exercitationem placeat! Possimus, pariatur quidem. Soluta sequi deleniti numquam."
        },
        {
        name: "see",
        review: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Fuga eos odio exercitationem placeat! Possimus, pariatur quidem. Soluta sequi deleniti numquam."
        },
    ]
  return (
    <Wrapper>
        <h2>Reviews</h2>
        <div className="underline"></div>
        <div className="reviews-section">
            <div className="img-holder">
                <img src={hero} alt="" className="img" />
            </div>
            <div className="card-slide-section">
                <div className="card-wrapper">
                {reviews.map((review,index)=>{
                    return (
                            <div className="card" key={index}>
                                <p>{review.name}</p>
                                <p>{review.review}</p>
                            </div>
                    )
                })}
                </div>
                <div className="card-wrapper">
                {reviews.map((review,index)=>{
                    return (
                            <div className="card" key={index}>
                                <p>{review.name}</p>
                                <p>{review.review}</p>
                            </div>
                    )
                })}
                </div>
            </div>
        </div>
    </Wrapper>
  )
}

export default Reviews

const Wrapper = styled.section`
text-align: center;
padding-block: 4.5rem;
    /* background-color: var(--primaryColor); */
    .section{
        
        /* background-color: brown; */
    }
    .reviews-section{
        width: min(90%,var(--maxWidth));
        margin-top: 3.5rem;
        margin-inline: auto;
        display: flex;
        justify-content: center;
        /* align-items: center; */
        column-gap: 3rem;
        /* background-color: yellow; */
    }
    .img-holder{
        display: none;
        /* height: 60vh; */
        /* background-color: blue; */
    }
    .card-slide-section{
        /* margin-top: 2.5rem; */
        /* background-color: green; */
        height: 60vh;
        display: flex;
        flex-direction: column;
        /* row-gap: 1rem; */
        overflow: hidden;
        position: relative;
        
    }
    .card-slide-section::before{
        content: "";
        position: absolute;
        top: 0;
        width: 100%;
        height: 1.5rem;
        background: linear-gradient(to right, whitesmoke, hsla(0,0%,0%,0));
        background: linear-gradient(to right, whitesmoke 0, #f5f5f599);
        z-index: 1;
    }
    .card-slide-section::after{
        content: "";
        position: absolute;
        bottom: 0;
        left: 0;
        width: 100%;
        height: 1.5rem;
        background: linear-gradient(to right, whitesmoke 0, #f5f5f599);
    }
    .card-wrapper{
        display: flex;
        flex-direction: column;
        align-items: end;
        animation: infiniteScroll 20s linear infinite;
        /* background-color: black; */
    }
    .card{
        background-color: var(--primaryColor40);
        background-color: white;
        width: min(90%,25rem);
        height: 15rem;
        margin-inline: auto;
        margin-block: .5rem;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        padding: 1rem 1.5rem;
        text-align: center;
        border-radius: .3rem;
        box-shadow: var(--shadowlg);
        & > p:last-child{
            margin: 0;
            }
    }
    @keyframes infiniteScroll {
        0%{
            transform: translateY(0%);
        }
        100%{
            transform: translateY(-100%);
        }
    }
    @media screen and (min-width:960px){
        .img-holder{
            display: block;
            height: 60vh;
            /* background-color: blue; */
        }
        .card{
            margin-inline: 0;
        }
    }
`