import React, { Component } from "react";
import styled from 'styled-components';
import api from "../config/api";

let Background = styled.div`
    margin: 0;
    padding: 0;
    width: 100%;
    height: 100vh;
    display: flex;
    justify-content: center;
    flex-direction: column;
    align-items: center;
    background: url('./img/back.jpg');
    background-size: 100%;
    box-sizing: border-box;
    h2 {
        margin: 0 0 130px;
        padding: 0;
        color: #fff;
        font-size: 30px;
        text-transform: uppercase;
    }
`;
let EditForm = styled.div`
    position: relative;
    text-align: center;
    width: 90%;
    box-sizing: border-box;
    border: 3px solid #000;
    padding: 150px 50px 50px 50px;
    background: rgba(0,0,0,.5);
    .change_avatar {
        span {
            color: #fff;
            position: absolute;
            left: 0;
            right: 0;
            margin-left: auto;
            margin-right: auto;
            top: 110px;
            text-transform: uppercase;
            cursor: pointer;
        }
    }
    .avatar {
        width: 200px;
        height: 200px;
        border: 3px solid #000;
        border-radius: 50%;
        position: absolute;
        left: 0;
        right: 0;
        margin-left: auto;
        margin-right: auto;
        top: -100px;
        background: url('./img/test.jpg');
        background-size: 100% 100%;
    }
    .input-group {
        position: relative;
        width: 50%;
        margin-bottom: 25px;
        input {
            height: 50px;
            width: 100%;
            padding: 0 20px;
            box-sizing: border-box;
            font-size: 18px;
            outline: none;
            border: 1px solid #000;
            :focus ~ span, :valid ~ span {
                top: -12px;
                left: 12px;
                font-size: 12px;
                padding: 2px 4px;
                border: 1px solid #000;
                background: #ff0;
            }
            ${props => !!props.err && `
                border: 1px solid red;
                `
            }
        }
        span {
            position: absolute;
            top: 10px;
            left: 20px;
            padding: 0;
            transition: 0.5s;
            pointer-events: none;
            background: #fff;
            text-transform: uppercase;
        }
    }
`

class EditProfile extends Component {
    state = {
        first_name: ''
    }
    componentWillMount() {
        api.get('http://localhost:3000/user/me').then(response => response.json())
        .then(json => this.setState({json}));
    }
    
    render() {
        return (
            <Background>
                <h2>edit your profile</h2>
                <EditForm>
                    <div className="change_avatar">
                        <div className="avatar"></div>
                        <span>Change profile photo</span>
                    </div>
                    <form>
                        <div className="input-group">
                            <input type="email" onChange={(e) => {this.bind('email', e)}} value={this.state.email} required/>
                            <span>{this.state.first_name}</span>
                        </div>
                        <div className="input-group">
                            <input type="password" onChange={(e) => {this.bind('password', e)}} value={this.state.password} required/>
                            <span>Password</span>
                        </div>
                    </form>

                </EditForm>
            </Background>
        );
    }
}

export default EditProfile;