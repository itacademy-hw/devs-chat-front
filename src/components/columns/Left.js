import React, { Component } from "react";
import styled from "styled-components";
import UserCont from "../user_cont/UserCont";
import api from "../../config/api";

let LeftCont = styled.div`
    border-top: 1px solid #fffefe47;
    height: 568px;
    background: #262d35;
    overflow: scroll;
    overflow-x: hidden;
    position: sticky;    
`;
class Left extends Component {

    state = {
        selectedChat: null,
        chats: []
    }

    async componentWillMount() {
        let response = await api.get('/chat');
        this.setState({
            chats: response.data
        })
        console.log(this.state.chats);
    }

    render() {
        return (
            <>
            <LeftCont>
                {
                    this.state.chats.map((chat, key) => (
                        <UserCont 
                            imgBg="http://sahro.net/uploads/posts/2014-05/1400003901_shahzoda-matchonova-men-aktrisa-bolmoqchiman-qogirchoq-emas.jpg"
                            name={`${chat.companion.first_name} ${chat.companion.last_name}`}
                            message="Hello World"
                            time="10 min"
                            id={chat.id}
                            selectedChat={this.state.selectedChat}
                            onSelect={(id) => this.setState({selectedChat: id})}
                            key={key}
                        />
                    ))
                }
            </LeftCont>
            </>
        );
    }
}

export default Left;