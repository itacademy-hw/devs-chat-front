import React, {Component} from "react";
import styled from "styled-components";
import Setting from "../settingCont/Setting";
import {Link} from 'react-router-dom';

let Cont = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    padding: 0 15px;
    cursor: pointer;
`;

let PhotoCont = styled.div`
   width: 60px;
   height: 60px;
   border-radius: 35px;
   background: url('${(props => props.img)}');
   background-size: cover;
`;

let LineDiv = styled.div`
    width: 60px;
    border-bottom: 1px solid #fffefe47;
    display: flex;
    align-items: center;
    margin: 0 30px 0 0;
`;

let NameCont = styled.div`
    color: white;
    font-family: strong;
    font-size: 16px;
    align-content: baseline;
`;

let MessageCont = styled.div`
    align-items: center;
    align-content: end;
    color:#97a0af;
    font-size: 15px;
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

let Settings = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: end;
`;

class UserCont extends Component {

    render() {
        let {imgBg, name, message, time, id} = this.props;
        return (
            <>
                <Link to={`/chat/${id}`}>
                    <Cont>
                        <LineDiv>
                            <PhotoCont img={imgBg}/>
                        </LineDiv>
                        <div style={{marginRight: 'auto'}}>
                            <NameCont>
                                <p className="name">{name}</p>
                            </NameCont>
                            <MessageCont>
                                <p>{message}</p>
                            </MessageCont>
                        </div>
                        <Settings>
                            <Setting/>
                            <TimeCont>
                                <p>{time}</p>
                            </TimeCont>
                        </Settings>
                    </Cont>
                </Link>

            </>
        );
    }
}

export default UserCont;