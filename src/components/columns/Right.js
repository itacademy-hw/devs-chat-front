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
    grid-template-rows: 82% 18%;
    background: #e9ecf1;
    height: 568px;
`;

let MessageArchive = styled.div`
    overflow-x: hidden;
    overflow-y: scroll;
    display: grid;
`;

let MessageInp = styled.div`
    background: #fbfdfc;
    display: grid;
    grid-template-columns: 10% 80% 10%;

        div.clip{
            display: grid;
            padding: 25px;

            div.clipLogo{
                width: 50px;
                height: 50px;
                background: url(https://www.shareicon.net/download/2015/09/12/99863_file_512x512.png)no-repeat;
                background-size: cover;
            }
        }

        input{
            border: none;
            outline: none;
        }

        div.emojiSend{
            display: grid;
            padding: 28px;

                div.send{
                    width: 40px;
                    height: 40px;
                    background: url(https://banner2.kisspng.com/20180715/afz/kisspng-computer-icons-telegram-logo-5b4bb35b8b3a97.7981817315316877715703.jpg)no-repeat;
                    background-size: cover;
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
        await this.refetch();
        console.log(this.state.userId);
    }

    async refetch() {
        let response = await api.get(`/message/${this.props.chat_id}`);
        this.setState({
            messages: response.data
        });
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

    render() {
        return (
            <>
            <RightCont>
              <MessageArchive>
                  {
                      this.state.messages.map((message) => (
                          <>
                              {
                                  message.user_id === this.state.userId && <SekondMember
                                      visiTime={moment(message.createdAt).format('HH:mm')}
                                      letText={message.text}
                                  />
                              }
                              {
                                  message.reciever_id === this.state.userId && <FirstMember
                                      visiTime={moment(message.createdAt).format('HH:mm')}
                                      letText={message.text}
                                  />
                              }
                          </>
                      ))
                  }
              </MessageArchive>
              <MessageInp>
                  <div className="clip">
                    <div className="clipLogo"/>
                  </div>
                  <input
                      type="text" value={this.state.message}
                      onChange={(e) => this.setState({message: e.target.value})} />
                    <div className="emojiSend">
                        <div className="send" onClick={(e) => this.sendMessage()}/>
                    </div>
              </MessageInp>
            </RightCont>
            </>
        );
    }
}

export default Right;