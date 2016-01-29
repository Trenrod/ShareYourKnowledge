var React = require('react');
var ReactDOM = require('react-dom');

/* React.element stuff
var h1 = React.createElement('h1', { className: 'header', key: 'header' }, 'This is React'); 
var p = React.createElement('p', { className: 'content', key: 'content' }, "And that's how it works.");
var reactFragment = [ h1, p ]; 
var section = React.createElement('section', { className: 'container', key: "container" }, reactFragment);

var item1 = React.DOM.li({ className : "item1", key: "item-1" }, "Item1");
var item2 = React.DOM.li({ className : "item2", key: "item-2" }, "Item2");
var item3 = React.DOM.li({ className : "item3", key: "item-3" }, "Item3");

var itemFragment = [item1, item2, item3];
var ul = React.DOM.ul({key: "ul"}, itemFragment)

var overalllFragment = [section, ul];
*/

//Stateful Component
var ReactClass = React.createClass({
    getInitialState : function(){
        return {
          isHeaderHidden : false,
          title : 'Stateful React Component'  
        };
    },
    
    handleClick : function(){
        this.setState({
            isHeaderHidden : !this.state.isHeaderHidden
        });
    },
    
    render : function(){
        if(this.state.isHeaderHidden){
            return null;
        }
        var headerElement = React.createElement('h1', {className : "header", key : "header"}, this.state.title);
        var buttonElement = React.createElement('button', {className : "btn btn-default", key : "button", onClick : this.handleClick }, 'Toggle header');
        
        if(this.state.isHeaderHidden){
            return React.createElement('div', null, [buttonElement]);
        }
        return React.createElement('div', null, [buttonElement, headerElement]);
    }
});

var reactComponentElement = React.createElement(ReactClass);
var reactComponent = ReactDOM.render(reactComponentElement, document.getElementById('react-application'));
