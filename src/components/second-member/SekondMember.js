import React, { Component } from "react";
import styled from "styled-components";

let SecondMem = styled.div`
    display: grid;
    grid-template-columns: 49% 40% 10%;
    height: 100px;

    div.avaTime{
        height: 88px;
        padding: 15px 15px 0 15px;
        display: grid;
        grid-template-rows: 50% 30%;
        grid-row-gap: 5px;
        
        div.avatara{
            width: 45px;
            height: 45px;
            border-radius: 30px;
            background: url("http://ailetravel.net/wp-content/uploads/2018/06/2c99b4b1c05c6f323f05f1c927f18397-990x1296.jpg");no-repeat;
            background-size: cover;
        }

        div.visitTime{
            padding: 5px;

                p{
                    font-size: 15px;
                    display: contents;
                    text-align: center;
                    justify-content: stretch;
                    color: #423c3c;
                }
        }
    }

    div.letter{
        height: 46px;
        border-radius: 5px;
        padding: 12px;
        margin: 14px;
        background: #0084ff;

        p{
            color:#d3d7de;
            text-align: center;
            margin: 0;
        }
    }
`;

class SekondMember extends Component {

    render() {
        let { visiTime, letText} = this.props;
        return (
            <SecondMem>
                <div/>
                <div className="letter">
                  <p>
                      {letText}
                  </p>
               </div>
              <div className="avaTime">
                <div className="avatara"/>
                  <div className="visitTime">
                   <p>{visiTime}</p>
                 </div>
                </div>
            </SecondMem>
        );
    }
}
export default SekondMember;