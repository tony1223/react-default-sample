var React = require('react');
var util = require("../helpers/util");
var cx = require("classnames");
var {asset_url} = util;

var BootStrapMenu = require("../components/bootStrapMenu.jsx");

var MemberLayout = React.createClass({
  render: function() {
    var items = [
      { 
        key:"home",
        url:"/",
        label:"Home"
      },
      { 
        key:"extension",
        url:"/menu1",
        label:"menu1"
      },
      {
        key:"rank",
        url:"/menu2",
        label:"menu22"
      }
    ];

    return (
      <html>
        <head>
        	<title>{this.props.title}</title>
          <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.4/css/bootstrap.min.css" />
          <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.4/css/bootstrap-theme.min.css" />
          <link rel="stylesheet" href={asset_url("css/main.css")} />

          <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        </head>
        <body>
          <div className="container">
            <nav className="navbar navbar-default">
              <div className="container-fluid">
                <BootStrapMenu name="Test App" items={items} nav={this.props.nav} />
              </div>
            </nav>
            {this.props.children}
            <div className="footer">
              <div className="container" style={{paddingBottom: 20}}>
                <hr />
                <p>Powered by TonyQ, welcome to fork or contribute on our Github projects
                 </p>
              </div>
            </div>
          </div>
          
          <script src="https://code.jquery.com/jquery-1.11.3.min.js"></script>
			    <script src="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.4/js/bootstrap.min.js"></script>
          <script src="https://fb.me/react-with-addons-0.13.3.min.js"></script>
          <script src={"/resource/"+this.props.name+".js"} ></script>

        </body>
      </html>
    );
  }
});

module.exports = MemberLayout;
