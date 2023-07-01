import { FaArrowDown, FaSearch, FaTimes } from "react-icons/fa";
import styled from "styled-components";
import { sortList, categoryList } from "../../../fakeData/fakedata";
import { Filter } from "../../../types/types";

const Filterform = ({sort,category,setCategory,setSort,showForm,setShowForm}:Filter) => {
    
  return (
    <>
        <p>{category.category[0].toUpperCase()}{category.category.slice(1)}</p>
        <Wrapper>
            <div className="flex" onClick={()=>{setShowForm(pre=>!pre);
            setCategory({...category,show:false});
            setSort({...sort,show:false})
            }}>
                <h5>Filter Form</h5>
                {!showForm ? <FaArrowDown/> : <FaTimes/>}
            </div>
            {showForm && <div>
                <div className="flex2">
                    <div>
                        <label htmlFor="seach">Search</label>
                        <div className="search">
                            <input type="text" name="search" id="name"/>
                            <FaSearch className="icon"/>
                        </div>
                    </div>
                    <div >
                        <p>Categoty</p>
                        <div className="select-container" onClick={()=>setCategory({...category,show:!category.show})}>
                            <p>{category.category}</p>
                            <FaArrowDown/>
                        </div>
                        
                    {category.show && <div className="select">
                            <ul>
                                {categoryList.map(category=>{
                                    return(
                                        <li key={category.li} onClick={()=>{
                                            setCategory({...category,category:category.li,show:false})
                                        }}>
                                            {category.li}
                                        </li>
                                    )
                                })}
                            </ul>
                        </div>}
                    </div>
                    <div >
                        <p>Sort</p>
                        <div className="select-container" onClick={()=>setSort({...sort,show:!sort.show})}>
                            <p>{sort.sort}</p>
                            <FaArrowDown/>
                        </div>
                        
                        {sort.show && <div className="select">
                            <ul>
                                {sortList.map(list=>{
                                    return(
                                        <li key={list.li} onClick={()=>{
                                            setSort({...sort,sort:list.li,show:false})
                                        }}>
                                            {list.li}
                                        </li>
                                    )
                                })}
                            </ul>
                        </div>}
                    </div>
                </div>
                <button>Clear Filters</button>
            </div>}
        </Wrapper>
    </>
  )
}

export default Filterform
const Wrapper = styled.form`
    background-color: #ffffff;
    padding: 1rem;
    margin-bottom: 1rem;
    border-radius: var(--borderRadius);
    button{
        width: 100%;
    }
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
    .search{
        display: flex;
        justify-content: space-between;
        align-items: center;
        /* background-color: goldenrod; */
        border: 1px solid black;
        border-radius: var(--borderRadius);
        padding-inline: .7rem;
        height: 2.5rem;
        input{
            width: 95%;
            /* padding: .5rem; */
            border: none;
            outline: none;
            height: 100%;
        }
        .icon{
            width: 1.2rem;
            /* padding: 0.4rem; */
        }
    }
    .select-container{
        /* background-color: green; */
        margin-bottom: .3rem;
        padding-inline: 0.5rem;
        display: flex;
        justify-content: space-between;
        align-items: center;
        height: 2.5rem;
        border: 1px solid var(--primaryColor);
        border-radius: var(--borderRadius);
        p{
            margin: 0;
        }
    }
    .select{
        border: 1px solid var(--primaryColor);
        background-color: var(--primaryColor20);
        li{
            padding-inline: 0.5rem;
        }
        li:hover{
            width: 100%;
            cursor: pointer;
            background-color: var(--primaryColor30);
        }
    }
    @media screen and (min-width: 650px) {
        .flex2{
            display: grid;
            grid-template-columns: 2fr 1fr 1fr;
            gap: 1rem;
        }
        button{
            width: 30%;
            margin-top: .5rem;
        }
    }
`