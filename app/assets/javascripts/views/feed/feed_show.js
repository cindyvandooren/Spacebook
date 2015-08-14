Spacebook.Views.FeedShow = Backbone.CompositeView.extend({
  template: JST["feed/feed_show"],

  className: "feed-main",

  initialize: function () {
    // this.timelinePosts = new Spacebook.Collections.Posts();
    this.listenTo(this.model, "sync change", this.render);
    this.addFeedSideBarView();
    this.addFeedContentView();
  },

  render: function () {
    var renderedContent = this.template({ user: this.model });
    this.$el.html(renderedContent);
    this.attachSubviews();
    return this;
  },

  addFeedSideBarView: function () {
    var subview = new Spacebook.Views.FeedSideBar({
      model: this.model
    });
    this.addSubview(".feed-sidebar", subview);
  },

  addFeedContentView: function () {
    var subview = new Spacebook.Views.FeedContent({
      model: this.model
    });
    this.addSubview(".feed-content", subview);
  }
});