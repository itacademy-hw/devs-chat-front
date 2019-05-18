import React, { Component } from "react";
import styled from "styled-components";

let ProfCont = styled.div`
  width: 300px;
  height: 625px;
  display: grid;
  grid-template-rows: 9.1% 90.9%;
  z-index: 1;
  position: absolute;
  left: 78%;
  background: yellow;
`;

let NotificName = styled.div`
  display: grid;
  grid-template-columns: 20% 80%;
  background: white;
  border-bottom: 1px solid #694c4c5c;
    div.notificLogo{ 
      width: 21px;
      height: 21px;
      margin: 18px;
      background: url(https://cdn.pixabay.com/photo/2015/12/16/17/41/bell-1096279_960_720.png)no-repeat;
      background-size: cover;
    }

    div.nameMem{ 
      height: 15px;
      text-align: right;
      padding: 20px;
    }
`;
class Profile extends Component {

    render() {
        return (
          <ProfCont>
            <NotificName>
              <div className="notificLogo"/>
              <div className="nameMem">Mister Bin</div>
            </NotificName>
          </ProfCont>
        );
    }
}
export default Profile;