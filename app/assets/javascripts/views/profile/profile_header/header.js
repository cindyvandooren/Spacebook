Spacebook.Views.ProfileHeader = Backbone.CompositeView.extend({
  template: JST["profile/profile_header/header"],

  className: "profile-header",

  initialize: function () {
    var user = this.model;
    this.listenTo(user, "sync change", this.render);
    this.addHeaderBackgroundView(user);
    this.addHeaderInfoView(user);
    this.addHeaderPictureView(user);
    this.addHeaderNameView(user);
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
  },

  addHeaderInfoView: function (user) {
    var subview = new Spacebook.Views.HeaderInfo({ model: user });
    this.addSubview(".profile-header-info", subview);
  },

  addHeaderPictureView: function (user) {
    var subview = new Spacebook.Views.HeaderPicture({ model: user });
    this.addSubview(".profile-header-picture", subview);
  },

  addHeaderNameView: function (user) {
    var subview = new Spacebook.Views.HeaderName({ model: user });
    this.addSubview(".profile-header-name", subview);
  }
});
