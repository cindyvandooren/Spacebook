Spacebook.Views.ProfileHeader = Backbone.CompositeView.extend({
  template: JST["profile/profile_header/header"],

  className: "profile-header",

  initialize: function (options) {
    this.user = options.user;
    this.listenTo(this.user, "sync change", this.render);
    this.addHeaderPictureView();
    this.addHeaderNameView();
    this.addHeaderInfoView();
  },

  render: function () {
    var renderedContent = this.template();
    this.$el.html(renderedContent);
    this.$el.css({
      "background-image": "url(" + this.user.escape("background_img_url") + ")",
      "background-size": "851px 273px"
    });
    this.attachSubviews();
    return this;
  },

  addHeaderInfoView: function () {
    var subview = new Spacebook.Views.HeaderInfo({ user: this.user });
    this.addSubview(".profile-header-info", subview);
  },

  addHeaderPictureView: function () {
    var subview = new Spacebook.Views.HeaderPicture({ user: this.user });
    this.addSubview(".profile-header-picture", subview);
  },

  addHeaderNameView: function () {
    var subview = new Spacebook.Views.HeaderName({ user: this.user });
    this.addSubview(".profile-header-name", subview);
  }
});
