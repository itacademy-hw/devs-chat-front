import React, { Component } from "react";
import styled from "styled-components";
import Options from "../options/Options";

let SettingCont = styled.div`
    height: 35px;
    display: grid;
    background: url(https://ncphn.org.au/wp-content/themes/ncphn/img/three-dots.png)no-repeat;
    background-size: cover;
    align-items: center;
    align-content: center;
    color: white;
    padding-top: 5px;
    padding-left: 22px;
    letter-spacing: 2.2px;
    position: relative;
`;

class Setting extends Component {

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
            <SettingCont
               ref={node => { this.node = node; }}
               onClick={this.handleClick}
                >
                  {
                      this.state.popupVisible && 
                    (<Options/>
        )}
            </SettingCont>
        );
    }
}
export default Setting;