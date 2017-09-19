
//I used gulp for my dev enviroment
//it makes it alot eassier to test 
//code and helped me resolve errors a lot quicker

var gulp = require('gulp'),
nodemon = require('gulp-nodemon');
gulp.task('default', function(){
    nodemon({
        script: 'app.js',
        ext: 'js',
        env:{
            port:8000 // set the new paort number if you dop not want to use port: 3000
        },
        ignore:['./node_modules/**']
    })
    .on('restart', function(){
        console.log('Restarting');
    });
});
