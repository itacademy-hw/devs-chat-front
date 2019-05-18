import React, { Component } from "react";
import styled from "styled-components";

let Body = styled.div`
    border-radius: 5px;
    display: grid;
    grid-template-rows: 25% 25% 25% 25%;
    position: absolute;
    width: 140px;
    height: 160px;
    background: #484b4e;
    right: 10px;
    top: 40px;
    z-index: 9999;
    overflow-y: auto;
`;

let InBody = styled.div`
    border-bottom: 1px solid #8a8a8ab0;
    justify-content: center;
    text-align: center;
    align-items: center;
    padding-top: 10px;
    opasity: hower;
`;
class Options extends Component {
    render() {
        return (
            <Body>
                <InBody onClick={()=> console.log('deleted')}>
                    DELETE
                </InBody>
            </Body>
        );
    }
}

export default Options;