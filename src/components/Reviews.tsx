import styled from "styled-components"

const Reviews = () => {
    const reviews = [
        {
        name: "vee",
        review: "hdo78w87hdwydgdu8dgddgd"
        },
        {
        name: "vdee",
        review: "hdo78w87hdwydgdu8dgddgd"
        },
        {
        name: "gee",
        review: "hdo78w87hdwydgdu8dgddgd"
        },
        {
        name: "aee",
        review: "hdo78w87hdwydgdu8dgddgd"
        },
        {
        name: "see",
        review: "hdo78w87hdwydgdu8dgddgd"
        },
    ]
  return (
    <Wrapper>
        <h2>Reviews</h2>
        <div className="underline"></div>
        <div className="section">
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
    </Wrapper>
  )
}

export default Reviews

const Wrapper = styled.section`
text-align: center;
padding-bottom: 5rem;
    /* background-color: var(--primaryColor); */
    .section{
        margin-top: 2.5rem;
        /* background-color: green; */
        height: 20rem;
        display: flex;
        flex-direction: column;
        /* row-gap: 1rem; */
        overflow: hidden;
        position: relative;
    }
    .section::before{
        content: "";
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        margin-inline: auto;
        margin: 0 auto;
        height: 1rem;
        background: linear-gradient(100deg, #000 0, hsla(0,0%,0%,0));
        z-index: 1;
    }
    .section::after{
        content: "";
        position: absolute;
        bottom: 0;
        left: 0;
        width: 100%;
        margin-inline: auto;
        margin: 0 auto;
        height: 1rem;
        background: linear-gradient(100deg, #fff 0, hsla(0,0%,100%,0));
        /* z-index: 1; */
    }
    .card-wrapper{
        display: flex;
        flex-direction: column;
        /* row-gap: 1rem; */
        animation: infiniteScroll 20s linear infinite;
        /* background-color: black; */
    }
    .card{
        background-color: var(--primaryColor40);
        background-color: white;
        width: 25rem;
        height: 10rem;
        margin-inline: auto;
        margin-block: .5rem;
    }
    @keyframes infiniteScroll {
        0%{
            transform: translateY(0);
        }
        100%{
            transform: translateY(-100%);
        }
    }
`