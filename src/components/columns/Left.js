import React, { Component } from "react";
import styled from "styled-components";
import UserCont from "../user_cont/UserCont";
import SearchResults from '../search-results/SearchResults'
import api from "../../config/api";
let moment = require('moment');

let LeftCont = styled.div`
    border-top: 1px solid #fffefe47;
    height: calc(100vh - 61px);
    background: #262d35;
    overflow: auto;
    overflow-x: hidden;
`;
class Left extends Component {

    state = {
        selectedChat: null,
        chats: []
    }

    async componentDidMount() {
        let response = await api.get('/chat');
        this.setState({
            chats: response.data
        });
    }

    render() {
        return (
            <>
            <LeftCont>
                {
                    !this.props.searchResults.length && this.state.chats.map((chat, key) => (
                        <UserCont
                            imgBg="http://sahro.net/uploads/posts/2014-05/1400003901_shahzoda-matchonova-men-aktrisa-bolmoqchiman-qogirchoq-emas.jpg"
                            name={`${chat.companion.first_name} ${chat.companion.last_name}`}
                            message={chat.last_message.text}
                            time={
                                moment(chat.last_message.createdAt).isValid() ?
                                    moment.duration(moment(chat.last_message.createdAt).diff(moment(), 'minutes'), "minutes").humanize() :
                                    ''}
                            id={chat.id}
                            selectedChat={this.state.selectedChat}
                            onSelect={(id) => this.setState({selectedChat: id})}
                            key={key}
                        />
                    ))
                }
                {
                    !!this.props.searchResults.length && this.props.searchResults.map((user, key) => (
                        <SearchResults
                            imgBg="http://sahro.net/uploads/posts/2014-05/1400003901_shahzoda-matchonova-men-aktrisa-bolmoqchiman-qogirchoq-emas.jpg"
                            name={`${user.first_name} ${user.last_name}`}
                            email={user.email}
                            id={user.id}
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