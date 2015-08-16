Spacebook.Models.Invitation = Backbone.Model.extend({
  urlRoot: "/api/invitations",

  inviter_details: function () {
    if (!this._inviter_details) {
      this._inviter_details = new Spacebook.Models.User();
    }
    return this._inviter_details;
  },

  invitee_details: function () {
    if (!this._invitee_details) {
      this._invitee_details = new Spacebook.Models.User();
    }
    return this._invitee_details;
  },

  parse: function (response) {
    if (response.inviter_details) {
      this.inviter_details().set(response.inviter_details);
      delete response.inviter_details;
    }

    if (response.invitee_details) {
      this.invitee_details().set(response.invitee_details);
      delete response.invitee_details;
    }

    return response;
  }
});
