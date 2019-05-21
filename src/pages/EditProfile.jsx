import React, { Component } from "react";
import styled from 'styled-components';
import api from "../config/api";
import InputMask from 'react-input-mask';
let moment = require('moment');

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
        .change-avatar-btn {
            text-align: center;
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
        margin-bottom: 25px;
        input {
            position: absolute;
            left: 10%;
            height:25px;
            width: 30%;
            box-sizing: border-box;
            font-size: 18px;
            outline: none;
            border: 1px solid #000;
            margin-left: 10px;
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
            color: #fff;
            font-size: 20px;
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
`

class EditProfile extends Component {
    state = {
        first_name: '',
        last_name: '',
        email: '',
        gender: '',
        phone: '',
        dob: '',
    }
    componentWillMount() {
        api.get('user/me')
        .then(response => {
            this.setState(response.data.me);
        });
    }
    bind = (field, e) => {
        this.setState({
            [field]: e.target.value
        })
    };
    edit = async (e) => {
        e.preventDefault();
            let response = await api.put('user/edit-profile', {
                first_name: this.state.first_name,
                last_name: this.state.last_name,
                email: this.state.email,
                gender: this.state.gender,
                phone: this.state.phone,
                dob: this.state.dob,
            });
            this.setState(response.data);
            console.log(response.data)

        }
    render() {
        let { first_name, last_name, email, gender, phone, dob } = this.state;
        console.log();
        return (
            <Background>
                <h2>edit your profile</h2>
                <EditForm>
                    <div className="change_avatar">
                        <div className="avatar"></div>
                        <div className="change-avatar-btn">
                            <span>Change profile photo<input type="file" name="profile_photo" /></span>
                        </div>
                    </div>
                    <form onSubmit={(e) => this.edit(e)}>
                        <div className="input-group">
                            <span>First Name</span>
                            <input type="text" onChange={(e) => this.bind('first_name', e)} value={first_name}/>
                        </div>
                        <div className="input-group">
                            <span>Last Name</span>
                            <input type="text" onChange={(e) => this.bind('last_name', e)} value={last_name}/>
                        </div>
                        <div className="input-group">
                            <span>Gender</span>
                            <select value={gender} onChange={(e) => this.bind('gender', e)}>
                                <option value='' />
                                <option value='m'>Male</option>
                                <option value='w'>Female</option>
                            </select>
                        </div>
                        <div className="input-group">
                            <span>E-mail</span>
                            <input type="email" onChange={(e) => this.bind('email', e)} value={email}/>
                        </div>
                        <div className="input-group">
                            <span>Phone</span>
                            <input type="text" onChange={(e) => this.bind('phone', e)} value={phone}/>
                        </div>
                        <div className="input-group">
                            <span>Date of Birth</span>
                            <input type="date" onChange={(e) => this.bind('dob', e)} name="bday" value={moment(dob).isValid && moment(dob).format("YYYY-MM-DD") } />
                        </div>
                        <div className="input-group">
                            <span>Date of Birth</span>
                            <input type="file" enctype="multipart/form-data" />
                        </div>
                        <div className="input-group">
                            <input className="submit" type="submit" value="Edit"/>
                        </div> 
                    </form>
                </EditForm>
            </Background>
        );
    }
}

export default EditProfile;