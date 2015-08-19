Spacebook.Views.SearchResult = Backbone.CompositeView.extend({
  template: JST["navbar/search_result"],

  className: "search-box",

  initialize: function () {
    $(document).on('keyup', this.handleKey.bind(this));
    this.listenTo(this.collection, "sync", this.render);
    this.listenTo(this.collection, "add", this.addSearchResultItemView);
    this.collection.each(this.addSearchResultItemView.bind(this));
  },

  events: {
    "click .m-background" : "closeModalView",
    "click .close-button" : "closeModalView",
    "click .search-result-list-item" : "removeAndDisable"
  },

  render: function () {
    var renderedContent = this.template({ users: this.collection });
    this.$el.html(renderedContent);
    this.attachSubviews();
    this.onRender();
    return this;
  },

  addSearchResultItemView: function (result) {
    var subview = new Spacebook.Views.SearchResultItem({
      model: result,
      collection: this.collection
    });
    this.addSubview(".search-result-list", subview);
  },

  closeModalView: function (event) {
    event.preventDefault();
    this.removeAndDisable();
  },

  handleKey: function (event) {
    if (event.keyCode === 27) {
      this.removeAndDisable();
    }
  },

  removeAndDisable: function () {
    this.remove();
    $(".search-form").prop("disabled", false);
    $("body").removeClass("modal-scroll");
  },

  onRender: function () {
    $("body").addClass("modal-scroll");
    $(".search-form").prop("disabled",true);
  }
});
