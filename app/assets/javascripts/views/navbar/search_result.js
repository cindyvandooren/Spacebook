Spacebook.Views.SearchResult = Backbone.CompositeView.extend({
  template: JST["navbar/search_result"],

  className: "search-result",

  initialize: function () {
    $(document).on('keyup', this.handleKey.bind(this));
    this.listenTo(this.collection, "sync", this.render);
  },

  events: {
    "click .m-background" : "remove",
    "click .close-button" : "closeModalView",
  },

  render: function () {
    var renderedContent = this.template({ users: this.collection });
    this.$el.html(renderedContent);
    return this;
  },

  closeModalView: function (event) {
    event.preventDefault();
    this.remove();
  },

  handleKey: function (event) {
    if (event.keyCode === 27) {
      this.remove();
    }
  }
});
