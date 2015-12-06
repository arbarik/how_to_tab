/**
 * Created by abhirambarik on 06/12/15.
 */

(function(){
    "use strict"

    console.log("BUILD OK");
    desc("This is default build")
    task("default", function(){
        console.log("default build");
    });
})()