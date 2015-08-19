Spacebook.Views.FriendsIndex = Backbone.CompositeView.extend({
  template: JST["profile/profile_sidebar/friends_index"],

  initialize: function (options) {
    this.itemTemplate = options.itemTemplate;
    this.userId = options.userId;
    this.listenTo(this.collection, "sync", this.render);
    this.listenTo(this.collection, "add", this.addFriendsIndexItemView);
    this.listenTo(this.collection, "remove", this.removeFriendsIndexItemView);
    this.collection.each(this.addFriendsIndexItemView.bind(this));
  },

  render: function () {
    var renderedContent = this.template({ friends: this.collection });
    this.$el.html(renderedContent);
    this.attachSubviews();
    return this;
  },

  addFriendsIndexItemView: function (friend) {
    var subview = new Spacebook.Views.FriendsIndexItem({
      model: friend,
      collection: this.collection,
      userId: this.userId,
      itemTemplate: this.itemTemplate
    });
    this.addSubview(".friends-list", subview);
  },

  removeFriendsIndexItemView: function (friend) {
    this.removeModelSubview(".friends-list", friend);
  }
});
