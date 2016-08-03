var ReactDOM = require("react-dom");
var currentMessage ='';

   var HelloWorld = React.createClass({

      



         return {
            message: 'Hello world'
         };
      },

      sendMessage: function() {

      }

      render: function() {
         /* Components */
         var Header = require('./header.jsx');
         /* HTML JSX */
         return (

         );
      }
   });

module.exports = HelloWorld;

var Wrapper = require('./wrapper.jsx');
ReactDOM.render(<Wrapper/>, document.getElementById("container"));
