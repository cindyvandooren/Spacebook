Spacebook.Views.ProfileHeader = Backbone.CompositeView.extend({
  template: JST["profile/header"],

  initialize: function () {
    var user = this.model;
    this.listenTo(user, "sync", this.render);
    this.addHeaderBackgroundView(user);
  },

  render: function () {
    var renderedContent = this.template();
    this.$el.html(renderedContent);
    this.attachSubviews();
    return this;
  },

  addHeaderBackgroundView: function (user) {
    var subview = new Spacebook.Views.HeaderBackground({ model: user });
    this.addSubview(".profile-header-background", subview);
  }
});
