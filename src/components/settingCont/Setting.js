import React, {Component} from "react";
import styled from "styled-components";
import Options from "../options/Options";

let SettingCont = styled.div`
    color: #97a0af;
    font-size: 28px;
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
            <SettingCont>
                <i
                    ref={node => {
                        this.node = node;
                    }}
                    onClick={this.handleClick} className="fas fa-ellipsis-h"
                >
                    {this.state.popupVisible && <Options/>}
                </i>
            </SettingCont>
        );
    }
}

export default Setting;