
import React from "react";

// <DefaultLayout title={this.props.title} name={this.props.name}>
//       </DefaultLayout>


export default class Dispatcher extends React.Component {
  render() {
  	var comp = require("./controller/"+this.props.comp+".jsx");
    var props = this.props.renders;
    if(props == null){
      props = this.props.views;
    }
   //  var skiped = {"settings":1,"comp":1,"setting":1,"cache":1,"_locals":1,"render":1};
  	// for(var k in this.props){
   //    if(skiped[k] === 1){
   //      continue;
   //    }
			// props[k] = this.props[k];
  	// }

    var render = function(comp,props,views){
      var datas = JSON.stringify(props);
      var childs = React.renderToString(React.createElement(comp,props)) +
        "<script> window._react_options = "+datas+" </script> ";
      return childs;
    };

  	var DefaultLayout = null;
  	if(this.props.layout == null){
  		DefaultLayout = require('./layouts/default.jsx');
  	}else{
  		DefaultLayout = require('./layouts/'+this.props.layout+'.jsx');
  	}

    var childs = null;
    if(this.props.render){
      childs = this.props.render(comp,props,this.props.views);
    }else{
      childs = render(comp,props,this.props.views);
    }
  	var dev = null;
    if(this.props.mode == "develope"){
      dev = (<script src={"/webpack-dev-server.js"} ></script>);
    }
    return (
      <DefaultLayout title={this.props.title} name={this.props.comp} nav={this.props.nav}>
      	<div id='react-root' dangerouslySetInnerHTML={{__html:childs}}></div>
        {dev}
      </DefaultLayout>
    );
  }
}
