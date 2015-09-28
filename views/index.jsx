var React = require('react');

var HelloMessage = React.createClass({
  render: function() {
  return (
      <div>
        <h1>Hello World</h1>
        
        <div>
          put content here!
        </div>
      </div>
    );
  }
});

module.exports = HelloMessage;
