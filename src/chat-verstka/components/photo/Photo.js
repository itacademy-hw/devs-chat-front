import React, { Component } from "react";
import styled from "styled-components";

let PhotoCont = styled.div`
   width: 60px;
   height: 60px;
   border-radius: 35px;
   background: url('${(props => props.img)}');
   background-size: cover;
   display: grid; 
`;
class Photo extends Component {

    render() {
        let { imgBg } = this.props;
        return (
            <>
             <PhotoCont img={imgBg}/>
            </>
        );
    }
}

export default Photo;