Privacy = {};

Privacy.privacyTypes = ["public", "friends", "private"];

var privacyMethods = {
    setPrivacy: function(privacy) {
        return this._meteorMethods.setPrivacy.callPromise({_id: this._id, privacy: privacy});
    },
    makePublic: function() {
        return this._meteorMethods.setPrivacy.callPromise({_id: this._id, privacy: "public"});
    },
    makeFriendly: function() {
        return this._meteorMethods.setPrivacy.callPromise({_id: this._id, privacy: "friends"});
    },
    makePrivate: function() {
        return this._meteorMethods.setPrivacy.callPromise({_id: this._id, privacy: "private"});
    }
};

Privacy.enablePrivacy = function(model, options) {
    _.extend(model.prototype, privacyMethods);
    model.appendSchema(Privacy.getSchema(options));
};

Privacy.getSchema = function(options) {

    var privacyTypes = options.privacyTypes || Privacy.privacyTypes;

    return new SimpleSchema({
        "privacy":{
            type: String,
            allowedValues: privacyTypes,
            defaultValue: options.defaultPrivacy || privacyTypes[0]
        }
    });
};