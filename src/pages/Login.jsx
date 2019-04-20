import React, { Component } from "react";
import styled from 'styled-components';
import api from "../config/api";
import ls from "local-storage";

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
`;
let LoginForm = styled.div`
    text-align: center;
    width: 350px;
    box-sizing: border-box;
    padding: 40px;
    background: rgba(0,0,0,.5);
    h2 {
        margin: 0 0 20px;
        padding: 0;
        color: #fff;
        font-size: 30px;
        text-transform: uppercase;
    }
    .input-group {
        position: relative;
        width: 100%;
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
        .submit {
            background: #ff0;
            border: none;
            box-shadow: none;
            text-transform: uppercase;
            cursor: pointer;
            font-weight: 600;
            :hover {
                background: #ffc107;
            }
        }
    }
    .forgottenPassword {
            display: block;
            text-align: center;
            color: #fff;
            a {
                text-decoration: none;
                font-weight: 700;
                color: #fff;
            }
        }
`;


class Login extends Component {
    state = {
        email: '',
        password: '',
        err: false
    };
    
    bind = (field, e) => {
        this.setState({
            [field]: e.target.value
        })
    };
    login = async (e) => {
        e.preventDefault();
        try {
            let response = await api.post('user/login', {
                email: this.state.email,
                password: this.state.password
            });
            ls.set('accessToken', response.data.token);
            this.setState({
                err: false
            });
        } catch(e) {
            this.setState({
                err: true
            });
        }
    };

    render() {
        return (
            <Background>
                <LoginForm err={this.state.err}>
                    <h2>Sign In</h2>
                    <form onSubmit={(e) => this.login(e)}>
                        <div className="input-group">
                            <input type="email" onChange={(e) => {this.bind('email', e)}} value={this.state.email} required/>
                            <span>E-mail</span>
                        </div>
                        <div className="input-group">
                            <input type="password" onChange={(e) => {this.bind('password', e)}} value={this.state.password} required/>
                            <span>Password</span>
                        </div>
                        <div className="input-group">
                            <input className="submit" type="submit" value="Login"/>
                        </div>
                    </form>
                    <span className="forgottenPassword">Forgot Passord? <a href="#">Click Here</a></span>
                </LoginForm>
            </Background>
        );
    }
}

export default Login;