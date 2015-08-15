Spacebook.Views.SearchResult = Backbone.CompositeView.extend({
  template: JST["navbar/search_result"],

  className: "search-result",

  initialize: function () {
    $(document).on('keyup', this.handleKey.bind(this));
    this.listenTo(this.collection, "sync", this.render);
    this.listenTo(this.collection, "add", this.addSearchResultItemView);
    this.collection.each(this.addSearchResultItemView.bind(this));
  },

  events: {
    "click .m-background" : "closeModalView",
    "click .close-button" : "closeModalView",
  },

  render: function () {
    var renderedContent = this.template({ users: this.collection });
    this.$el.html(renderedContent);
    this.attachSubviews();
    this.onRender();
    return this;
  },

  addSearchResultItemView: function (result) {
    this.collection.getOrFetch(result.id);
    var subview = new Spacebook.Views.SearchResultItem({
      model: result,
      collection: this.collection
    });
    this.addSubview(".search-result-list", subview);
  },

  closeModalView: function (event) {
    event.preventDefault();
    this.remove();
    $(".search-form").prop("disabled",false);
  },

  handleKey: function (event) {
    if (event.keyCode === 27) {
      this.remove();
      $(".search-form").prop("disabled",false);
    }
  },

  onRender: function () {
    $(".search-form").prop("disabled",true);
  }
});