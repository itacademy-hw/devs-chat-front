import React, { Component } from "react";
import styled from "styled-components";
import UserCont from "../user_cont/UserCont";

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
        selectedChat: null
    }

    render() {
        return (
            <>
            <LeftCont>
              <UserCont 
                imgBg="http://sahro.net/uploads/posts/2014-05/1400003901_shahzoda-matchonova-men-aktrisa-bolmoqchiman-qogirchoq-emas.jpg"
                name="Adinay A"
                message="Hallo World"
                time="10 min"
                id="1"
                selectedChat={this.state.selectedChat}
                onSelect={(id) => this.setState({selectedChat: id})}
               />
               <UserCont 
                imgBg="http://ailetravel.net/wp-content/uploads/2018/06/2c99b4b1c05c6f323f05f1c927f18397-990x1296.jpg"
                name="Mister Bin"
                message="Hi Bin"
                time="3 min"
                id="4"
                selectedChat={this.state.selectedChat}
                onSelect={(id) => this.setState({selectedChat: id})}
               />
               <UserCont 
                imgBg="https://static1.squarespace.com/static/573f8286356fb0ac05ae239d/t/5adde815f950b71f65dd11c9/1524492316860/Humans+for+Education+Roxy+Dias?format=1500w"
                name="Tito Ortiz"
                message="Hallo World"
                time="1 min"
                id="3"
                selectedChat={this.state.selectedChat}
                onSelect={(id) => this.setState({selectedChat: id})}
               />
               
            </LeftCont>
            </>
        );
    }
}

export default Left;