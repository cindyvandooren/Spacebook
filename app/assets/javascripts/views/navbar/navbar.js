Spacebook.Views.Navbar = Backbone.View.extend({
  template: JST["navbar/navbar"],

  events: {
    'submit .search-form': 'searchUsers'
  },

  initialize: function () {
    this.listenTo(this.model, "sync", this.render);
  },

  searchUsers: function () {
    debugger;
  },

  render: function () {
    var renderedContent = this.template({ user: this.model });
    this.$el.html(renderedContent);
    return this;
  }
});
