import React, { Component } from 'react';
import glamorous from 'glamorous'
import LogoCard from './components/LogoCard'

const AppDiv = glamorous.div({
  width: '100%',
  height: '100%',
  display: 'flex',
  justifyContent: 'center',
  alignContent: 'center',
  alignItems: 'center',
  flexWrap: 'wrap'
})

class App extends Component {
  render() {
    return (
      <AppDiv>
        <LogoCard />
      </AppDiv>
    );
  }
}

export default App;
