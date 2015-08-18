Spacebook.Views.ProfileHeader = Backbone.CompositeView.extend({
  template: JST["profile/profile_header/header"],

  className: "profile-header",

  initialize: function (options) {
    this.invitations = options.invitations;
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
    this.removeHeaderInfoView();
    var subview;

    if (this.model.get("id") == Spacebook.CURRENT_USER_ID) {
      subview = new Spacebook.Views.HeaderInfo({ model: this.model });
    } else if (this.model.get("is_a_friend")) {
      subview = new Spacebook.Views.HeaderUnFriender({ model: this.model });
    } else if (this.model.get("is_invited") === true) {
      subview = new Spacebook.Views.HeaderWaitingResponse({ model: this.model });
    } else {
      subview = new Spacebook.Views.HeaderFriender({
        model: this.model,
        invitations: this.invitations
       });
    }
    this.addSubview(".profile-header-info", subview);
  },

  removeHeaderInfoView: function () {
    var view = this;
    if (view.subviews(".profile-header-info").length > 0) {
      var firstView = this.subviews(".profile-header-info").first();
      view.removeSubview(".profile-header-info", firstView);
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
