import React, { Component } from "react";
import styled from 'styled-components';
import Search from "../components/search";
import Member from "../components/current-member/Member";
import Left from "../components/columns/Left";
import Right from "../components/columns/Right";
import api from "../config/api";

let MainDiv = styled.div`
  width: 100%;
  height: 100vh;
  display: grid;
  grid-template-columns: 30% 70%;
  overflow: hidden;
`;

class Chat extends Component {

    state = {
        searchResults: []
    };

    async doSearch(value) {
        let response = null;
        if(!value || value === ' ') {
            response = null;
        } else {
            response = await api.get(`/user/search/${value}`);
        }

        this.setState({
            searchResults: response ? response.data : []
        });
    }

    render() {
        let id = this.props.match.params.id;
        return (
            <MainDiv>
                <Search onSearch={(value) => this.doSearch(value)} />
                {
                    <Member chat_id={id}/>
                }
                <Left searchResults={this.state.searchResults}/>
                {
                    id && <Right chat_id={id}/>
                }

            </MainDiv>
        );
    }
}

export default Chat;