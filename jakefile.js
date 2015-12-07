/**
 * Created by abhirambarik on 06/12/15.
 */

(function(){
    "use strict"

    var EXPECTED_NODE_VERSION="v4.2.1";
    desc("This is default build")
    task("default", function(){
        console.log("\n\nBUILD OK");
    });

    desc("check node version")
    task("version", function(){
        var actualNodeVersion = process.version;
        if(EXPECTED_NODE_VERSION !== actualNodeVersion)
            fail("Incorrect node version: Expected "+ EXPECTED_NODE_VERSION +" actual "+ actualNodeVersion);

    })

})()