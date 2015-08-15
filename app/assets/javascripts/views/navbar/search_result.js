Spacebook.Views.SearchResult = Backbone.View.extend({
  template: JST["navbar/search_result"],

  className: "search-result",

  initialize: function () {
    $(document).on('keyup', this.handleKey.bind(this));
    this.listenTo(this.collection, "sync", this.render);
  },

  // This is necessary to remove the modal view when the user wants to
  // Will also help to prevent multiple Search Results existing at the
  // same time. Look at Twitter example.
  // events: {
  //   "click modal-background" : "remove",
  //   "click close-button" : "closeModalView",
  //   "keyup" : "handleKey"
  // },

  render: function () {
    var renderedContent = this.template({ users: this.collection });
    this.$el.html(renderedContent);
    return this;
  },

  // closeModalView: function (event) {
  //   event.preventDefault();
  //   this.remove();
  // },
  //
  handleKey: function (event) {
    if (event.keyCode === 27) {
      this.remove();
    }
  }
});
