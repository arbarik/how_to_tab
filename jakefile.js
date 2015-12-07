/**
 * Created by abhirambarik on 06/12/15.
 */

(function(){
    "use strict"

    jake.addListener('complete', function () {
        console.log("jake completed");
        process.exit();
    });

    console.log("BUILD OK");
    desc("This is default build")
    task("default", function(){
        console.log("default build");
    });

    desc('This creates the bar directory for use with the foo-minified.js file-task.');
    directory('bar');

    desc('This builds a minified JS file for production.');
    file('foo-minified.js', ['bar', 'foo-bar.js', 'foo-baz.js'], function () {
        // Code to concat and minify goes here
    });

    namespace('foo', function () {
        desc('This the foo:bar task');
        task('bar', function () {
            console.log('doing foo:bar task');
        });

        desc('This the foo:baz task');
        task('baz', ['default', 'foo:bar'], function () {
            console.log('doing foo:baz task');
        });
    });

    desc('This is an awesome task.');
    task('awesome', function (a, b, c) {
        console.log(a, b, c);
    });

    desc('This is an awesome process task.');
    task('awesomeprocess', function (a, b, c) {
        console.log(a, b, c);
        console.log(process.env.qux, process.env.frang);
    });



    desc('Calls the foo:bar task and its prerequisites.');
    task('invokeFooBar', function () {
        // Calls foo:bar and its prereqs
        jake.Task['awesome'].invoke();

    });
})()