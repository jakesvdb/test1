// js/models/todo.js

var app = app || {};

//Todo models
//------------
//Basic todo model has a title and completed attributes

app.Todo = Backbone.Model.extend({

	//default attributes 
	defaults: {
		title: '',
		completed: false
	},

	//toggle the completed state of todo item
	toggle: function() {
		this.save({
			completed: !this.get('completed')
		});
	}
});

