import React, {Component} from "react";
import styled from "styled-components";
import api from '../../config/api';

let Cont = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    padding: 0 15px;
    cursor: pointer;
`;

let PhotoCont = styled.div`
   width: 60px;
   height: 60px;
   border-radius: 35px;
   background: url('${(props => props.img)}');
   background-size: cover;
`;

let LineDiv = styled.div`
    width: 60px;
    border-bottom: 1px solid #fffefe47;
    display: flex;
    align-items: center;
    margin: 0 30px 0 0;
`;

let NameCont = styled.div`
    color: white;
    font-family: strong;
    font-size: 16px;
    align-content: baseline;
`;

let EmailCont = styled.div`
    align-items: center;
    align-content: end;
    color:#97a0af;
    font-size: 15px;
`;

class SearchResults extends Component {

    async createChat(id) {
        let response = await api.post('chat', {
            second_member: id,
        });

        if(response) {
            window.location.href = `/chat/${response.data.id}`;
        }
    }

    render() {
        let {imgBg, name, id, email} = this.props;
        return (
            <>
                <Cont onClick={() => this.createChat(id)}>
                    <LineDiv>
                        <PhotoCont img={imgBg}/>
                    </LineDiv>
                    <div style={{marginRight: 'auto'}}>
                        <NameCont>
                            <p className="name">{name}</p>
                        </NameCont>
                        <EmailCont>
                            <p>{email}</p>
                        </EmailCont>
                    </div>
                </Cont>

            </>
        );
    }
}

export default SearchResults;