# Privacy #
A package allowing setting a privacy setting on models. The package extends the model's schema adding a `privacy` field. The package provides methods for setting the privacy to 'public', 'friends' and 'private', but it can be set to any value using the `setPrivacy` method (you'll need to specify your allowed values by passing a `privacyTypes` array in the options).

To enable privacy on a model simply call `Privacy.enablePrivacy(model, options)`.

~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ javascript
var Post = BaseModel.extendAndSetupCollection("posts");

var privacyTypes = ["bestFriends", "friends", "public"]
Privacy.enablePrivacy(Post, {privacyTypes: privacyTypes, defaultPrivacy: "friends"}});

var post = new Post({body: "Hello my best friends!"}).save();

post.setPrivacy("bestFriends");
~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

### Prototypal Methods ###
**Model.prototype.setPrivacy(privacy)** - Set the privacy to to the given value.
**Model.prototype.makePublic()** - Set the privacy to "public".
**Model.prototype.makeFriendly()** - Set the privacy to "friends".
**Model.prototype.makePrivate()** - Set the privacy to "private".



