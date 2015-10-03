import React from "react";
import Loading from "../components/Loading.jsx";

export default class Index extends React.Component {
  render(){
  return (
      <div>
        <h1></h1>
        
        <div>
          put content here! {this.props.type}
        </div>
        <Loading />
      </div>
    );
  }
}


if(global.window != null){
  React.render(React.createElement(Index,window._react_options), document.getElementById("react-root"));
}

