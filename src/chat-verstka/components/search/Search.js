import React, { Component } from "react";
import styled from "styled-components";

let SearchCont = styled.div`
    padding: 10px 0px 10px 60px;
    display: grid;
    background: #262d35;
`;
let InputCont = styled.div`
    width: 80%;
    height: 35px;
    border: 1px solid #0000005c;
    border-radius: 20px;
    background:#363d43;
    display: grid;
    grid-template-columns: 5% 95%;  

        div{
            margin: 2px 8px;
            width: 30px;
            height: 30px;
            border-radius: 20px;
            background: url(http://nonosina.com/wp-content/uploads/2018/11/icon-search-1.png);
            background-size: cover;
            display: grid;
        }

           input{
            width: 80%;
            margin-left: 12%;
            background: #363d43;
            color: wheat;
            border: none;
            display: grid;
            outline: none;
           }
`;
class Search extends Component {

    render() {
        return (
            <>
            <SearchCont>
                <InputCont>
                    <div/>
                    <input type="text"/>
                </InputCont>
            </SearchCont>
            </>
        );
    }
}

export default Search;