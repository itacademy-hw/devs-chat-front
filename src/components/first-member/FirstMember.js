import React, { Component } from "react";
import styled from "styled-components";

let FirstMem = styled.div`
    display: grid;
    grid-template-columns: 8% 92%;
    grid-column-gap: 3%;
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
            background: url("http://sahro.net/uploads/posts/2014-05/1400003901_shahzoda-matchonova-men-aktrisa-bolmoqchiman-qogirchoq-emas.jpg");no-repeat;
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
        width: 50%;
        height: 46px;
        border-radius: 5px;
        padding: 12px;
        margin: 14px;
        background: #f6f8f7;

        p{
            color: #423c3c;
            text-align: center;
            margin: 0;
        }
    }
`;

class FirstMember extends Component {

    render() {
        let { visiTime, letText} = this.props;
        return (
            <FirstMem>
              <div className="avaTime">
                <div className="avatara"/>
                  <div className="visitTime">
                   <p>{visiTime}</p>
                 </div>
                </div>
               <div className="letter">
                  <p>
                      {letText}
                  </p>
               </div>
            </FirstMem>
        );
    }
}
export default FirstMember;