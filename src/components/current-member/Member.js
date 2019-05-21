import React, { Component } from "react";
import styled from "styled-components";
import Profile from "../profile/Profile";
let MemCont = styled.div`
    display: grid;
    background: #e9ecf1;
    grid-template-columns: 30% 5%;
    grid-column-gap: 63%;
`;

let NameInfo = styled.div`
    display: grid;
    border: 1px yellow;
    color: #464b4e;
    font-family: strong;
    font-size: 19px;
    align-content: end;
    padding-left: 20px;
`;

let LeftLine = styled.div`
    display: grid;
    border-left: 1px solid #ccd0d6;

        div{
            margin: 20px;
            width: 25px;
            display: grid;
            background: url(http://simpleicon.com/wp-content/uploads/star.svg)no-repeat;
            background-size: contain;
        }
`;
class Member extends Component {
    constructor() {
        super();
    
        this.handleClick = this.handleClick.bind(this);
        this.handleOutsideClick = this.handleOutsideClick.bind(this);
    
        this.state = {
          popupVisible: false
        };
      }
    
      handleClick() {
        if (!this.state.popupVisible) {
          // attach/remove event handler
          document.addEventListener('click', this.handleOutsideClick, false);
        } else {
          document.removeEventListener('click', this.handleOutsideClick, false);
        }
    
        this.setState(prevState => ({
           popupVisible: !prevState.popupVisible,
        }));
      }
      
      handleOutsideClick(e) {
        // ignore clicks on the component itself
        if (this.node.contains(e.target)) {
          return;
        }
        
        this.handleClick();
      }
    render() {
        return (
            <>
            <MemCont>
                <NameInfo 
                 ref={node => { this.node = node; }}
                 onClick={this.handleClick}>
                     { this.state.popupVisible && <Profile/> }
                  <p className="name">Adinay</p>
                </NameInfo>
                <LeftLine>
                    <div/>
                </LeftLine>
            </MemCont>
            </>
        );
    }
}

export default Member;
