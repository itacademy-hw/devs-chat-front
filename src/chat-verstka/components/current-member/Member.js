import React, { Component } from "react";
import styled from "styled-components";

let MemCont = styled.div`
    display: grid;
    background: #e9ecf1;
    grid-template-columns: 30% 5%;
    grid-column-gap: 63%;
`;

let NameInfo = styled.div`
    display: grid;
    border: 1px yellow;
    color: #464b4e;
    font-family: strong;
    font-size: 19px;
    align-content: end;
    padding-left: 20px;
`;

let LeftLine = styled.div`
    display: grid;
    border-left: 1px solid #ccd0d6;

        div{
            margin: 20px;
            width: 25px;
            display: grid;
            background: url(http://simpleicon.com/wp-content/uploads/star.svg)no-repeat;
            background-size: contain;
        }
`;
class Member extends Component {
    
    render() {
        return (
            <>
            <MemCont>
                <NameInfo>
                  <p className="name">Adinay A</p>
                </NameInfo>
                <LeftLine>
                    <div/>
                </LeftLine>
            </MemCont>
            </>
        );
    }
}

export default Member;