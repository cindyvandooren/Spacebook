Spacebook.Views.ErrorMessage = Backbone.View.extend({
  template: JST["navbar/error_message"],

  className: "error-message",

  initialize: function (options) {
    this.message = options.message;
    $(document).on("keyup", this.handleKey.bind(this));
  },

  events: {
    "click .m-background" : "closeErrorView",
    "click .close-button" : "closeErrorView"
  },

  render: function () {
    var renderedContent = this.template({ message: this.message });
    this.$el.html(renderedContent);
    this.onRender();
    return this;
  },

  closeErrorView: function (event) {
    event.preventDefault();
    this.removeAndEnable();
  },

  handleKey: function (event) {
    if (event.keyCode === 27) {
      this.removeAndEnable();
    }
  },

  removeAndEnable: function () {
    this.remove();
    $(".search-form").prop("disabled", false);
    $("body").removeClass("modal-preventscroll");
  },

  onRender: function () {
    $("body").addClass("modal-preventscroll");
    $(".search-form").prop("disabled", true);
  }
});
