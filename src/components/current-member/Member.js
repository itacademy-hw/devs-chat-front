import React, {Component} from "react";
import styled from "styled-components";
import Profile from "../profile/Profile";
import api from "../../config/api";

let MemCont = styled.div`
    display: grid;
    background: #e9ecf1;
    grid-template-columns: 90% 10%;
    max-height: 61px;
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
    border-left: 1px solid #ccd0d6;
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 24px;
    
    i {
        color: #808080;
        cursor: pointer;
        transition: all .3s;
        
        :hover {
            color: #262d35;
        }
    }
`;

class Member extends Component {
    constructor() {
        super();

        this.handleClick = this.handleClick.bind(this);
        this.handleOutsideClick = this.handleOutsideClick.bind(this);
        this.componentWillMount = this.componentWillMount.bind(this);
        this.componentWillReceiveProps = this.componentWillReceiveProps.bind(this);

        this.state = {
            popupVisible: false,
            companion: ''
        };
    }

    handleClick() {
        if (!this.state.popupVisible) {
            document.addEventListener('click', this.handleOutsideClick, false);
        } else {
            document.removeEventListener('click', this.handleOutsideClick, false);
        }

        this.setState(prevState => ({
            popupVisible: !prevState.popupVisible,
        }));
    }

    handleOutsideClick(e) {
        if (this.node.contains(e.target)) {
            return;
        }

        this.handleClick();
    }

    async componentWillReceiveProps(nextProps){
        await this.refetch(nextProps.chat_id);
    }

    async componentWillMount() {
        await this.refetch(this.props.chat_id);
    }

    async refetch(chat_id) {
        let response = await api.get(`/user/${chat_id}`);
        this.setState({
            companion: response.data.user
        });
    }

    render() {
        return (
            <>
                <MemCont>
                    <NameInfo
                        ref={node => {
                            this.node = node;
                        }}
                        onClick={this.handleClick}>
                        {this.state.popupVisible && <Profile/>}
                        {this.props.chat_id &&
                        (<p className="name">{this.state.companion.first_name}{' '}{this.state.companion.last_name}</p>)}
                    </NameInfo>
                    <LeftLine>
                        <i className="fas fa-star"/>
                    </LeftLine>
                </MemCont>
            </>
        );
    }
}

export default Member;
