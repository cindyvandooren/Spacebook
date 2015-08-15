Spacebook.Views.SearchResultItem = Backbone.View.extend({
  template: JST["navbar/search_result_item"],

  tagName: "li",

  className: "search-result-list-item",

  initialize: function () {
    this.listenTo(this.model, "sync", this.render);
  },

  render: function () {
    var renderedContent = this.template({ user: this.model });
    this.$el.html(renderedContent);
    return this;
  }
});
