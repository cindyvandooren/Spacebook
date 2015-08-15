Spacebook.Views.Navbar = Backbone.View.extend({
  template: JST["navbar/navbar"],

  events: {
    'submit form': 'searchUsers'
  },

  initialize: function () {
    this.listenTo(this.model, "sync", this.render);
  },

  searchUsers: function () {
    
  },

  render: function () {
    var renderedContent = this.template({ user: this.model });
    this.$el.html(renderedContent);
    return this;
  }
});
