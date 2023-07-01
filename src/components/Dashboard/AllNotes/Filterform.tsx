import {ChangeEvent} from "react";
import { FaArrowDown, FaSearch } from "react-icons/fa";
import styled from "styled-components";
const Filterform = () => {
  return (
    <Wrapper>
        <div className="flex">
            <h5>Filter Form</h5>
            <FaArrowDown/>
        </div>
        <div className="flex2">
            <div>
                <label htmlFor="seach">Search</label>
                <div className="search">
                    <input type="text" name="search" id="name"/>
                    <FaSearch className="icon"/>
                </div>
            </div>
            <div>
                <label htmlFor="category">Filter</label>
                <select name="category" id="category" value="" onChange={(e:ChangeEvent<HTMLSelectElement>)=>{console.log(e.target.value);
                }}>
                <option value="all">All</option>
                <option value="personal" >Personal</option>
                <option value="work" >Work</option>
                <option value="school" >School</option>
                </select>
            </div>
            <div>
                <label htmlFor="sort">Sort</label>
                <select name="sort" id="sort">
                    <option value="latest">Latest</option>
                    <option value="oldest">Oldest</option>
                    <option value="a-z">A-Z</option>
                    <option value="z-a">Z-A</option>
                </select>
            </div>
        </div>
    </Wrapper>
  )
}

export default Filterform
const Wrapper = styled.form`
    background-color: #ffffff;
    padding: 1rem;
    margin-bottom: 1rem;
    border-radius: var(--borderRadius);
    .flex{
        display: flex;
        justify-content: space-between;
        align-items: center;
        h5{
            margin: 0;
        }
        padding-bottom: 0.5rem;
    }
    .flex2{
        display: flex;
        flex-direction: column;
    }
    label{
        display: block;
    }
    select{
        width: 100%;
        padding: .5rem;
    }
    .search{
        display: flex;
        justify-content: space-between;
        align-items: center;
        /* background-color: goldenrod; */
        border: 1px solid black;
        border-radius: var(--borderRadius);
        padding-inline: .7rem;
        input{
            width: 95%;
            /* padding: .5rem; */
            border: none;
            outline: none;
        }
        .icon{
            width: 1.3rem;
            /* padding: 0.4rem; */
        }
    }
    @media screen and (min-width: 650px) {
        /* .flex{
            display: none;
        } */
        .flex2{
            display: grid;
            grid-template-columns: 2fr 1fr 1fr;
            gap: 1rem;
        }
    }
`