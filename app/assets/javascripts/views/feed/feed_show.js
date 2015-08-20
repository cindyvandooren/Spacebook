Spacebook.Views.FeedShow = Backbone.CompositeView.extend({
  template: JST["feed/feed_show"],

  className: "feed-main",

  initialize: function (options) {
    this.user = options.user;
    this.invitations = options.invitations;
    this.listenTo(this.model, "sync change", this.render);
    this.addFeedSideBarView();
    this.addFeedContentView();
  },

  render: function () {
    var renderedContent = this.template();
    this.$el.html(renderedContent);
    this.attachSubviews();
    return this;
  },

  addFeedSideBarView: function () {
    var subview = new Spacebook.Views.FeedSideBar({
      user: this.user
    });
    this.addSubview(".feed-sidebar", subview);
  },

  addFeedContentView: function () {
    var subview = new Spacebook.Views.FeedContent({
      user: this.user
    });
    this.addSubview(".feed-content", subview);
  }
});
