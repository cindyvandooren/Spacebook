Spacebook.Views.FriendsIndexItem = Backbone.View.extend({
  template1: JST["profile/profile_sidebar/friends_index_item"],
  template2: JST["profile/profile_content/friends_index_item"],

  tagName: "li",

  className: "friends-list-item",

  initialize: function (options) {
    this.sidebar = options.sidebar;
    this.template = this["template" + this.sidebar];
    this.listenTo(this.model, "sync", this.render);
  },

  render: function () {
    var renderedContent = this.template({ friend: this.model });
    this.$el.html(renderedContent);
    this.$el.data("id", this.model.id);
    return this;
  }
});
