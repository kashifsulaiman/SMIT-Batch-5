import React, { Component } from 'react';

const Container = (props) => {
  return (
    <div className="App" style={{width: '70%', height: '70%', borderRadius: '15%', backgroundColor: 'gray', padding: 30}}>
      YOUR APP LOGO HERE
      <br />
      {props.children}
    </div>
  );
}

export default Container;