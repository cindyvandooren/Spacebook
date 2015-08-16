Spacebook.Collections.Invitations = Backbone.Collection.extend({
  model: Spacebook.Models.Invitation,

  url: "/api/invitations",

  getOrFetch: function (id) {
    var collection = this;
    var invitation = collection.get(id);

    if (invitation) {
      invitation.fetch();
    } else {
      invitation = new collection.model({ id: id });
      collection.add(invitation);
      invitation.fetch({
        error: function () { collection.remove(invitation); }
      });
    }

    return invitation;
  }
});
