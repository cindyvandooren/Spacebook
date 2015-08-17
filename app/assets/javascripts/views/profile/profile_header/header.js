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
    var subview;

    if (this.model.get("id") == Spacebook.CURRENT_USER_ID) {
      subview = new Spacebook.Views.HeaderInfo({ model: this.model });
    } else if (this.model.get("is_a_friend")) {
      subview = new Spacebook.Views.HeaderUnFriender({ model: this.model });
    } else if (this.model.get("invited")) {
      subview = new Spacebook.Views.HeaderWaitingResponse({ model: this.model });
    } else {
      subview = new Spacebook.Views.HeaderFriender({ model: this.model });
    }
    this.addSubview(".profile-header-info", subview);
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
