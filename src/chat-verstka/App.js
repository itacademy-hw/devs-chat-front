import React, { Component } from "react";
import styled from "styled-components";
import Search from "./components/search/Search";
import Member from "./components/current-member/Member";
import Left from "./components/columns/Left";
import Right from "./components/columns/Right";
import Profile from "./components/profile/Profile";

let MainDiv = styled.div`
  width: 100%;
  height: auto;
  display: grid;
  grid-template-columns: 30% 70%;
  grid-template-rows: 35% 100px;
`;
class App extends Component {

    render() {
        return (
          <MainDiv>
            <Search/>
            <Member/>
            <Left/>
            <Profile/>
            <Right/>
          </MainDiv>
        );
    }
}
export default App;