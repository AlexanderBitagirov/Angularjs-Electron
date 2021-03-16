let gulp = require("gulp");
let concat = require("gulp-concat");

let template = ["./App/**/*.html"];


let scripts = [
    "./node_modules/angular/angular.js",
    "./node_modules/angular-material/angular-material.js",
    "./node_modules/angular-aria/angular-aria.min.js",
    "./node_modules/angular-messages/angular-messages.min.js",
    "./node_modules/angular-animate/angular-animate.js",
    "./App/**/*.js"
  ];

  let styles = [
    "./node_modules/angular-material/angular-material.css",
    "./App/**/*.css"
  ];

  gulp.task("css", function() {
    return gulp
      .src(styles)
      .pipe(concat("style.css"))
      .pipe(gulp.dest("./dist/css"))
  });

  gulp.task("scripts", function() {
    return gulp
      .src(scripts)
      .pipe(concat("script.js"))
      .pipe(gulp.dest("./dist/js"))
  });

  gulp.task("html", function() {
    return gulp
      .src(template)
      .pipe(gulp.dest("./dist"))
  });

  gulp.task("serve", function() {
    gulp.watch("./App/**/*.html", gulp.series("html"));
    gulp.watch("./App/**/*.js", gulp.series("scripts"));
    gulp.watch("./App/**/*.css", gulp.series("css"));

  });


  gulp.task("default", gulp.parallel( "css" ,"scripts","html", "serve"));
