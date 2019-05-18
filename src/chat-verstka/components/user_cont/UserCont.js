import React, { Component } from "react";
import styled from "styled-components";
import Setting from "../settingCont/Setting";

let Cont = styled.div`
    display: grid;
    grid-template-columns: 22% 63% 15%;
`;

let PhotoCont = styled.div`
   width: 60px;
   height: 60px;
   border-radius: 35px;
   background: url('${(props => props.img)}');
   background-size: cover;
   display: grid; 
`;

let LineDiv = styled.div`
    width: 60px;
    border-bottom: 1px solid #fffefe47;
    display: grid;
    margin: 0px 10px;
    padding-top: 10px;
`;

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
    color:#97a0af;
    font-size: 15px;
    padding-top: 4px;
`;

let TimeSetCont = styled.div`
    display: grid; 
    grid-template-rows: 50% 50% ;
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

class UserCont extends Component {

    render() {
        let {imgBg, name, message, time, id, selectedChat, onSelect} = this.props;
        return (
            <>
            <Cont>
               <LineDiv>
                 <PhotoCont img={imgBg}/>
               </LineDiv>
               <PerData>
                <NameCont>
                  <p className="name">{name}</p> 
                </NameCont>
                <MessageCont>
                  <p>{message}</p>
                </MessageCont>
             </PerData>
             <TimeSetCont>
               <Setting/>
                <TimeCont>
                  <p>{time}</p>
                </TimeCont>
             </TimeSetCont>
            </Cont>
            </>
        );
    }
}

export default UserCont;