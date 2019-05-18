import React, { Component } from "react";
import styled from "styled-components";
import FirstMember from "../first-member/FirstMember";
import SekondMember from "../second-member/SekondMember";

let RightCont = styled.div`
    border-top: 1px solid #61585847;
    display: grid;
    grid-template-rows: 82% 18%;
    background: #e9ecf1;
    height: 568px;
`;

let MessageArchive = styled.div`
    height: 10%;
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

    render() {
        return (
            <>
            <RightCont>
              <MessageArchive>
                  <FirstMember 
                    visiTime="12:03"
                    letText="
                        Lorem ipsum dolor sit amet,
                         consectetur adipiscing elit,
                          sed do eiusmod tempor incididunt
                           ut labore et dolore."
                    />
                    <FirstMember 
                    visiTime="12:11"
                    letText="
                        Lorem ipsum dolor sit amet,
                         consectetur adipiscing elit,
                          sed do eiusmod tempor incididunt
                           ut labore et dolore."
                    />   
                    <SekondMember
                        visiTime="12:13"
                        letText="
                            Lorem ipsum dolor sit amet,
                             consectetur adipiscing elit."
                    />
              </MessageArchive>
              <MessageInp>
                  <div className="clip">
                    <div className="clipLogo"/>
                  </div>
                  <input type="text"></input>
                    <div className="emojiSend">
                        <div className="send"/>
                    </div>
              </MessageInp>
            </RightCont>
            </>
        );
    }
}

export default Right;