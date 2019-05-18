import React, { Component } from "react";
import styled from "styled-components";

let TimeSetCont = styled.div`
    display: grid; 
    grid-template-rows: 50% 50% ;
`;

let SettingCont = styled.div`
    height: 35px;
    display: grid;
    align-items: center;
    align-content: center;
    color: white;
    padding-top: 5px;
    padding-left: 12px;
    letter-spacing: 2.2px;
`;

let TimeCont = styled.div`
    height: 35px;
    display: grid;
    align-items: center;
    align-content: end;
    color: #bda26e;
    font-size: 15px;
    padding-top: 4px;
`;
class TimeSet extends Component {

    render() {
        let {time} = this.props;
        return (
            <>
             <TimeSetCont>
                <SettingCont>
                    <h3>...</h3>
                </SettingCont>
                <TimeCont>
                  <p>{time}</p>
                </TimeCont>
             </TimeSetCont>
            </>
        );
    }
}

export default TimeSet;