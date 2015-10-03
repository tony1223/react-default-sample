
import React from 'react';
import util  from "../helpers/util";
var {asset_url} = util;

export default class DefaultLayout extends React.Component {
  render() {
    return (
      <html>
        <head>
        	<title>{this.props.title}</title>
    			<link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.4/css/bootstrap.min.css" />
    			<link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.4/css/bootstrap-theme.min.css" />
          <link rel="stylesheet" href={asset_url("css/main.css")} />
        </head>
        <body>
        	{this.props.children}
          <script src="https://code.jquery.com/jquery-1.11.3.min.js"></script>
			    <script src="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.4/js/bootstrap.min.js"></script>
          <script src="https://fb.me/react-with-addons-0.13.3.min.js"></script>
          <script src={"/resource/controller/"+this.props.name+".js"} ></script>
        </body>
      </html>
    );

  }
}

