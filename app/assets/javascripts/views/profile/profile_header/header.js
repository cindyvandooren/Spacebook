Spacebook.Views.ProfileHeader = Backbone.CompositeView.extend({
  template: JST["profile/profile_header/header"],

  className: "profile-header",

  initialize: function () {
    var user = this.model;
    this.listenTo(user, "sync change", this.render);
    this.addHeaderPictureView(user);
    this.addHeaderNameView(user);
    this.addHeaderInfoView(user);
  },

  render: function () {
    var renderedContent = this.template();
    this.$el.html(renderedContent);
    this.$el.css({
      "background-image": "url(" + this.model.escape("background_img_url") + ")",
      "background-size": "851px 273px"
    });
    this.attachSubviews();
    return this;
  },

  addHeaderInfoView: function (user) {
    debugger;
    if (user.get('id') == Spacebook.CURRENT_USER_ID) {
      var subview = new Spacebook.Views.HeaderInfo({ model: user });
      this.addSubview(".profile-header-info", subview);
    }
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
