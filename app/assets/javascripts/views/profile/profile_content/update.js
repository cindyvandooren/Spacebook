Spacebook.Views.ProfileUpdate = Backbone.View.extend({
  template: JST["profile/profile_content/update"],

  tagName: "form",

  className: "update-profile",

  events: {
    "click .update-profile" : "updateProfile",
    "click .update-profile-picture" : "updateProfilePicture",
    "click .update-background-picture" : "updateBackgroundPicture"
  },

  initialize: function () {
    this.listenTo(this.model, "sync change", this.render);
  },

  render: function () {
    var renderedContent = this.template({ user: this.model });
    this.$el.html(renderedContent);
    return this;
  },

  updateProfile: function (event) {
    var that = this;
    event.preventDefault();

    var attrs = this.$el.serializeJSON();
    $(":input").val("");

    this.model.set(attrs);
    this.model.save({}, {
      success: function () {
        that.collection.add(that.model, { merge: true });
        $(".sidebar-about").click();
      },
      //TODO Make this a helpful message for the user
      error: function () {
        console.log("Something went wrong");
      }
    });
  },

  updateProfilePicture: function (event) {
    event.preventDefault();
    cloudinary.openUploadWidget(CLOUDINARY_OPTIONS, function(error, result) {
      if (error) {
        alert("Your picture was not saved. Please try again!");
      } else {
        var data = result[0];
        var url = data.url;
        var profile_picture_id = url.substring(36);
        this.model.set({ profile_img_id: profile_picture_id });
        this.model.save({}, {
          error: function () {
            alert("Your picture was not saved. Please try again!");
          }
        });
      }
    }.bind(this));
  },

  updateBackgroundPicture: function (event) {
    event.preventDefault();
    cloudinary.openUploadWidget(CLOUDINARY_OPTIONS, function(error, result) {
      if (error) {
        alert("Your picture was not saved. Please try again!");
      } else {
        var data = result[0];
        var url = data.url;
        var background_picture_id = url.substring(36);
        this.model.set({ background_img_id: background_picture_id });
        this.model.save({}, {
          error: function () {
            alert("Your picture was not saved.Please try again!");
          }
        });
      }
    }.bind(this));
  }
});
