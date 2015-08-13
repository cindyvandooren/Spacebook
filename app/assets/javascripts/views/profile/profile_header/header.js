Spacebook.Views.ProfileHeader = Backbone.CompositeView.extend({
  template: JST["profile/profile_header/header"],

  className: "profile-header",

  initialize: function () {
    this.listenTo(this.model, "sync change", this.render);
    this.addHeaderPictureView();
    this.addHeaderNameView();
    this.addHeaderInfoView();
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

  addHeaderInfoView: function () {
    if (this.model.get('id') == Spacebook.CURRENT_USER_ID) {
      var subview = new Spacebook.Views.HeaderInfo({ model: this.model });
      this.addSubview(".profile-header-info", subview);
    }
  },

  addHeaderPictureView: function () {
    var subview = new Spacebook.Views.HeaderPicture({ model: this.model });
    this.addSubview(".profile-header-picture", subview);
  },

  addHeaderNameView: function () {
    var subview = new Spacebook.Views.HeaderName({ model: this.model });
    this.addSubview(".profile-header-name", subview);
  }
});
