Spacebook.Views.ProfileUpdate = Backbone.View.extend({
  template: JST["profile/profile_content/update"],

  tagName: "form",

  className: "update-profile",

  events: {
    "click .update-profile" : "updateProfile",
    "click .update-profile-picture" : "updatePicture",
    "click .update-background-picture" : "updatePicture"
  },

  initialize: function (options) {
    this.user = options.user;
    this.listenTo(this.user, "sync change", this.render);
  },

  render: function () {
    var renderedContent = this.template({ user: this.user });
    this.$el.html(renderedContent);
    return this;
  },

  updateProfile: function (event) {
    var that = this;
    event.preventDefault();

    var attrs = this.$el.serializeJSON();

    this.user.set(attrs);
    this.user.save({}, {
      success: function () {
        $(":input").val("");
        $(".sidebar-about").click();
      },
      error: function () {
        var modal = new Spacebook.Views.ErrorMessage({
          message: "Your profile could not be updated. Please try again!"
        });

        $("body").append(modal.render().$el);
      }
    });
  },

  updatePicture: function (event) {
    event.preventDefault();

    var clickedClass = $(event.currentTarget).attr('class');
    var image_type = "";
    if (clickedClass.indexOf("update-profile-picture") > -1) {
      image_type = "profile_img_id";
    } else {
      image_type = "background_img_id";
    }
    cloudinary.openUploadWidget(CLOUDINARY_OPTIONS, function(error, result) {
      var that = this;
      if (error) {
        var modal = new Spacebook.Views.ErrorMessage({
          message: "Your picture has not been saved."
        });
        $("body").append(modal.render().$el);
      } else {
        var data = result[0];
        var uploaded_picture_id = data.url.substring(36);
        var options = {};
        options[image_type] = uploaded_picture_id;
        that.user.set(options);
        that.user.save({}, {
          success: function () {
            that.user.fetch();
          }
        });
      }
    }.bind(this));
  }
});
