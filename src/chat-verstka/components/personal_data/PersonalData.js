import React, { Component } from "react";
import styled from "styled-components";

let PerData = styled.div`
    display: grid; 
    grid-template-rows: 50% 50% ;
`;

let NameCont = styled.div`
    height: 35px;
    display: grid;
    color: white;
    font-family: strong;
    font-size: 19px;
    align-content: baseline;
`;

let MessageCont = styled.div`
    height: 35px;
    display: grid;
    align-items: center;
    align-content: end;
    color: #bda26e;
    font-size: 15px;
    padding-top: 4px;
`;
class PersonalData extends Component {

    render() {
        let {name, message} = this.props;
        return (
            <>
             <PerData>
                <NameCont>
                  <p className="name">{name}</p> 
                </NameCont>
                <MessageCont>
                  <p>{message}</p>
                </MessageCont>
             </PerData>
            </>
        );
    }
}

export default PersonalData;