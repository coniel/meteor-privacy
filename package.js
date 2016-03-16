Package.describe({
    name: "coniel:privacy",
    summary: "A package allowing setting a privacy setting on models",
    version: "0.0.1",
    git: "https://github.com/coniel/meteor-privacy.git"
});

Package.onUse(function(api) {
    api.versionsFrom("1.0.2.1");

    api.use("coniel:base-model@0.3.0");
    api.imply("coniel:base-model");

    //Add the friend-model files
    api.addFiles("privacy.js");


    api.export(["Privacy"]);
});