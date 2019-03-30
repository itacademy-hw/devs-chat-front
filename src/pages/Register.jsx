import React, { Component } from "react";
import styled from 'styled-components';

let RegBackground = styled.div`
    margin: 0;
    padding: 0;
    width: 100%;
    height: 100vh;
    display: flex;
    justify-content: center;
    flex-direction: column;
    align-items: center;
    background: url('./img/back.jpg');
    background-size: cover;
    box-sizing: border-box;
`
let RegisterForm = styled.div`
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
            height: 40px;
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
`


class Register extends Component {
    
    render() {
        return (
            <RegBackground>
                <RegisterForm>
                    <h2>Register</h2>
                    <form>
                        <div className="input-group">
                            <input type="text" required/>
                            <span>First Name</span>
                        </div>
                        <div className="input-group">
                            <input type="password" required/>
                            <span>Last Name</span>
                        </div>
                        <div className="input-group">
                            <input type="text" required/>
                            <span>E-mail</span>
                        </div>
                        <div className="input-group">
                            <input type="password" required/>
                            <span>Password</span>
                        </div>
                        <div className="input-group">
                            <input type="text" required/>
                            <span>Phone Number</span>
                        </div>
                        <div className="input-group">
                            <input className="submit" type="submit" value="Register"/>
                        </div>
                    </form>
                </RegisterForm>
            </RegBackground>
        );
    }
}

export default Register;