import React, { Component } from "react";
import styled from "styled-components";
import FirstMember from "../first-member/FirstMember";
import SekondMember from "../second-member/SekondMember";
import api from "../../config/api";
import ls from "local-storage";
let moment = require('moment');
let jwt_decode = require('jwt-decode');

let RightCont = styled.div`
    border-top: 1px solid #61585847;
    display: grid;
    background: #e9ecf1;
    height: calc(100vh - 61px);
`;

let MessageArchive = styled.div`
    overflow-x: hidden;
    overflow-y: scroll;
    display: grid;
    height: calc(100vh - 114px);
`;

let MessageInp = styled.div`
    background: #fbfdfc;
    display: grid;
    grid-template-columns: 10% 80% 10%;
    max-height: 50px;

        div.clip{
            display: flex;
            padding: 5px;
            align-items: center;
            justify-content: center;
            
            .fa-paperclip{
                font-size: 30px;
                transform: rotate(-45deg);
                color: #808080;
                transition: all .3s;
                cursor: pointer;
                :hover {
                    color: #262d35;
                }
            }
        }

        input{
            border: none;
            outline: none;
        }

        div.sendButton{
            display: flex;
            padding: 5px;
            align-items: center;
            justify-content: center;
            
            button{
                background: transparent;
                font-size: 30px;
                color: #808080;
                border: none;
                cursor: pointer;
                transition: all .3s;
        
                :hover {
                    color: #262d35;
                }
            }
        }
`;

class Right extends Component {

    state = {
        messages: [],
        message: '',
        userId: jwt_decode(ls.get('accessToken')).userId

    }

    async componentWillMount() {
        setInterval(async () => {
            await this.refetch();
        }, 2000);

    }

    async refetch() {
        let response = await api.get(`/message/${this.props.chat_id}`);
        this.setState({
            messages: response.data
        });
        this.scrollToBottom();
    }

    async sendMessage(){
        let response = await api.post(`message/${this.props.chat_id}`, {
            text: this.state.message,
        });
        this.setState({
            message: ''
        });
        await this.refetch();
    }

    scrollToBottom = () => {
        this.messagesEnd.scrollIntoView({ behavior: "smooth" });
    }

    render() {
        return (
            <>
            <RightCont>
              <MessageArchive>
                  {
                      this.state.messages.map((message, key) => (
                          <>
                              {
                                  message.user_id === this.state.userId && <SekondMember
                                      visiTime={moment(message.createdAt).format('HH:mm')}
                                      letText={message.text}
                                      key={key}
                                  />
                              }
                              {
                                  message.reciever_id === this.state.userId && <FirstMember
                                      visiTime={moment(message.createdAt).format('HH:mm')}
                                      letText={message.text}
                                      key={key}
                                  />
                              }
                          </>
                      ))
                  }
                  <div ref={(el) => { this.messagesEnd = el; }} />
              </MessageArchive>
              <MessageInp>
                  <div className="clip">
                      <i className="fas fa-paperclip"/>
                  </div>
                  <input
                      placeholder="Type something..."
                      type="text" value={this.state.message}
                      onChange={(e) => this.setState({message: e.target.value})} />
                    <div className="sendButton">
                        <button onClick={(e) => this.sendMessage()}><i className="fab fa-telegram"></i></button>
                    </div>
              </MessageInp>
            </RightCont>
            </>
        );
    }
}

export default Right;