// require
var
  gulp = require("gulp"),
  sass = require("gulp-sass"),
  autoprefixer = require("gulp-autoprefixer"),
  plumber = require("gulp-plumber"),
  browser = require("browser-sync"),
  sourcemaps = require("gulp-sourcemaps")
;

// settings
var
  src = "src", // 編集元のディレクトリを指定
  documentRoot = "htdocs", // サイトのドキュメントルートを指定
  destFiles = "htdocs/common", // CSS/JSファイルの出力先のディレクトリを指定
  watchFiles = [src + "/**/*.scss"] // 監視するファイルを指定
;

// server task
gulp.task("server", function() {
  browser({
    server: { baseDir: documentRoot }
  });
});


// sass task
gulp.task("sass", function () {
  return gulp.src(src + "/**/*scss")
    .pipe(sourcemaps.init())
    .pipe(plumber())
    .pipe(sass())
    .pipe(autoprefixer())
    .pipe(sourcemaps.write( "../sourcemaps" ))
    .pipe(gulp.dest( destFiles + "/css" ))
    .pipe(browser.reload({ stream:true }))
});

// watch task
gulp.task("default", ["server"], function() {
    gulp.watch( watchFiles ,["sass"]);
});
