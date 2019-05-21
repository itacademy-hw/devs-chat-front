import React, { Component } from "react";
import styled from "styled-components";

let ProfCont = styled.div`
  width: 210px;
  height: 600px;
  display: grid;
  grid-template-rows: 9.5% 90.5%;
  z-index: 1;
  position: absolute;
  left: 84.5%;
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

let MemberData = styled.div`
    display: grid;
    grid-template-rows: 30% 4% 4% 62%;
    background: white;
      div.memImg{
        width: 110px;
        height: 110px;
        display: grid;
        background: url('http://sahro.net/uploads/posts/2014-05/1400003901_shahzoda-matchonova-men-aktrisa-bolmoqchiman-qogirchoq-emas.jpg');
        background-size: cover;
        grid-template-rows: 50% 50%;
        border-radius: 100px;
        margin-top: 30px;
        margin-left: 50px;
      }

      div.nameMem{
          height: 25px;
          text-align: center;
      }

      div.sityName{
          height: 25px;
          color: #00000047;
          font-size: 14px;
          text-align: center;
      }

      div.personalData{
          border-top: 1px solid #332e2e4d; 
          margin-top: 15px;
          padding: 15px;

            div.email{
              height: 25px;
              border-bottom: 1px solid #332e2e4d; 
              font-size: 10px;
              span.mail{
                margin-right: 44px;
              }
            }
            div.phone{
              height: 25px;
              border-bottom: 1px solid #332e2e4d; 
              font-size: 10px;
              span.number{
                margin-right: 35px;
              }
              span.num{
                margin-left: 55px;
              }
            }
            div.birthData{
              height: 25px;
              border-bottom: 1px solid #332e2e4d; 
              font-size: 10px;
              span.birthData{
                margin-right: 60px;
              }
            }
            div.gender{
              height: 25px;
              border-bottom: 1px solid #332e2e4d; 
              font-size: 10px;
              span.gender{
                margin-right: 60px;
              }
              span.value{
                margin-left: 50px;
              }
            }
            div.language{
              height: 25px;
              border-bottom: 1px solid #332e2e4d; 
              font-size: 10px;
              span.language{
                margin-right: 60px;
              }
              span.languageVal{
                margin-left: 40px;
              }
            }
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
            <MemberData>
              <div className="memImg"/>
              <div className="nameMem">
                Adinay A 
              </div>
              <div className="sityName">
                Bishkek
              </div>
              <div className="personalData">
                  <div className="email">
                      <span className="mail">
                        Email:
                      </span>
                      <span>
                        email.email@email.com
                      </span>
                  </div>
                  <div className="phone">
                      <span className="number">
                      Phone:
                      </span>
                      <span className="num">
                        0777777777
                      </span>
                  </div>
                  <div className="birthData">
                      <span className="birthData">
                        Date Of Birth:
                      </span>
                      <span>
                        July 20 1990
                      </span>
                 </div>
                 <div className="gender">
                      <span className="gender">
                        Gender:
                      </span>
                      <span className="value">
                        Female
                      </span>
                 </div>
                 <div className="language">
                      <span className="language">
                      Language:
                      </span>
                      <span className="languageVal">
                        English
                      </span>
                 </div>
              </div>
            </MemberData>
          </ProfCont>
        );
    }
}
export default Profile;