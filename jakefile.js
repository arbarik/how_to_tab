/**
 * Created by abhirambarik on 06/12/15.
 */

(function(){
    "use strict"


    desc("This is default build")
    task("default",["version"], function(){
        console.log("\n\nBUILD OK");
    });

    desc("check node version")
    task("version", function(){
        console.log("Checking node version");
        var requiredNodeVersion = "v"+require('./package.json').engines.node;
        var actualNodeVersion = process.version;


        if(requiredNodeVersion !== actualNodeVersion)
            fail("Incorrect node version: Expected "+ requiredNodeVersion +" actual "+ actualNodeVersion);

    })

})()