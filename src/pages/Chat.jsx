import React, { Component } from "react";
import styled from 'styled-components';
import Search from "../components/search";
import Member from "../components/current-member/Member";
import Left from "../components/columns/Left";
import Right from "../components/columns/Right";

let MainDiv = styled.div`
  width: 100%;
  height: auto;
  display: grid;
  grid-template-columns: 30% 70%;
  grid-template-rows: 35% 100px;
`;

class Chat extends Component {
    componentDidMount() {
        console.log(this.props);
    }
    
    render() {
        let id = this.props.match.params.id;
        return (
            <MainDiv>
                <Search/>
                <Member/>
                <Left/>
                {
                    id && <Right chat_id={id}/>
                }

            </MainDiv>
        );
    }
}

export default Chat;