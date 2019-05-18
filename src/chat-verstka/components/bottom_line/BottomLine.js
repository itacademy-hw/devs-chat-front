import React, { Component } from "react";
import styled from "styled-components";
import Photo from "../photo/Photo";

let LineDiv = styled.div`
    width: 60px;
    height: 69px;
    border-bottom: 1px solid #fffefe47;
    display: grid;
    margin: 0px 10px;
    padding-top: 5px;
`;
class BottomLine extends Component {

    render() {

        let {name, surName, message, day} = this.props;
        return (
            <>
            <LineDiv>
              <Photo imgBg="http://sahro.net/uploads/posts/2014-05/1400003901_shahzoda-matchonova-men-aktrisa-bolmoqchiman-qogirchoq-emas.jpg"/>
            </LineDiv>
            </>
        );
    }
}

export default BottomLine;