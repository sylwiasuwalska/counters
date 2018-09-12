

var Counter = React.createClass({
    getInitialState: function() {
        return {
            counter: 0
        };
    },

    increment: function() {
        this.setState({
            counter: this.state.counter + 1
        });
    },

    decrement: function() {
    	this.setState({
    		counter: this.state.counter -1
    	});
    },

    getDefaultProps: function() {
    	console.log('Przekazanie domyślnych wartości do komponentu')
    },

    componentWillMount: function() {
    	console.log('Sprawdzenie, czy wszystkie propsy są przekazane poprawnie');
  	},

  	sholudComponentUpdate: function() {
    	console.log('Sprawdza, czy komponent powinien zostać jeszcze raz wyrenderowany.')
    },

    componentWillUnmount: function() {
    	console.log('Usuniecie komponentu ze strony, np. dodanie animacji')
    },


    render: function() {
        return React.createElement('div', {},
            React.createElement('h3', {}, 'Counter ' + this.state.counter),
            React.createElement('button', {onClick: this.increment, className:'btn btn-dark button'}, "+"),
			React.createElement('button', {onClick: this.decrement, className:'btn btn-dark button'}, "-"),
        );
    }

    


    
});

var countersList = React.createClass({
	render: function() {
	return (
	  React.createElement('div', {className: 'app'},
	  	React.createElement('div', {className: 'row line'},
		    React.createElement('div', {className: 'topLeft container col'}, 
		    	React.createElement(Counter,{})
		    ),
		    React.createElement('div', {className: 'topRight container col'}, 
		    	React.createElement(Counter,{})
		    ),
		),
		React.createElement('div', {className: 'row line'},
		    React.createElement('div', {className: 'botLeft container col'},
		    	React.createElement(Counter,{})
		    ),
		    React.createElement('div', {className: 'botRight container col'}, 
		    	React.createElement(Counter,{})
		    ),
		),
	  )
	)
	}
});



var app = React.createElement(countersList);
ReactDOM.render(app, document.getElementById('app'));