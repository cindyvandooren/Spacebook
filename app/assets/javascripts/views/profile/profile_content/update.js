Spacebook.Views.ProfileUpdate = Backbone.View.extend({
  template: JST["profile/profile_content/update"],

  tagName: "form",

  className: "update-profile",

  events: {
    "click .update-profile" : "updateProfile",
    "click .update-profile-picture" : "updatePicture",
    "click .update-background-picture" : "updatePicture"
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

    this.model.set(attrs);
    this.model.save({}, {
      success: function () {
        $(":input").val("");
        that.collection.add(that.model, { merge: true });
        $(".sidebar-about").click();
      },
      //TODO Make this a helpful message for the user
      error: function () {
        console.log("Something went wrong");
      }
    });
  },

  updatePicture: function (event) {
    event.preventDefault();
    debugger;

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
        alert("Your picture was not saved. Please try again!");
      } else {
        var data = result[0];
        var uploaded_picture_id = data.url.substring(36);
        var options = {};
        options[image_type] = uploaded_picture_id;
        that.model.set(options);
        that.model.save({}, {
          success: function () {
            that.model.fetch();
          }
        });
      }
    }.bind(this));
  }
});
