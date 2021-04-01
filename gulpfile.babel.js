import { src, dest, watch, series, parallel } from "gulp";
import yargs from "yargs";
const PRODUCTION = yargs.argv.prod;
import sass from "gulp-sass";
import cleanCss from "gulp-clean-css";
import gulpif from "gulp-if";
import postcss from "gulp-postcss";
import sourcemaps from "gulp-sourcemaps";
import autoprefixer from "autoprefixer";
import imagemin from "gulp-imagemin";
import del from "del";
import webpack from "webpack-stream";
import browserSync from "browser-sync";
import zip from "gulp-zip";
import info from "./package.json";
import * as variable from "./gulp.config";
import uglify from "gulp-uglify";

/**
 * Style sheet
 */
export const styles = () => {
  return src(variable.dev_scss_file)
    .pipe(gulpif(!PRODUCTION, sourcemaps.init()))
    .pipe(sass().on("error", sass.logError))
    .pipe(gulpif(PRODUCTION, postcss([autoprefixer])))
    .pipe(gulpif(PRODUCTION, cleanCss({ compatibility: "ie8" })))
    .pipe(gulpif(!PRODUCTION, sourcemaps.write()))
    .pipe(dest(variable.prod_css_dir))
    .pipe(server.stream());
};

/**
 * minified image
 */
export const images = () => {
  return src(variable.dev_img_dir + "/**/*")
    .pipe(gulpif(PRODUCTION, imagemin()))
    .pipe(gulpif(PRODUCTION, dest(variable.prod_img_dir + "/")));
};

/**
 * js files
 */
export const scripts = () => {
  return src(variable.dev_js_file)
    .pipe(
      webpack({
        module: {
          rules: [
            {
              test: /\.js$/,
              use: {
                loader: "babel-loader",
                options: {
                  presets: ["@babel/preset-env"],
                },
              },
            },
          ],
        },
        mode: PRODUCTION ? "production" : "development",
        devtool: !PRODUCTION ? "inline-source-map" : false,
        output: {
          filename: "bundle.min.js",
        },
      })
    )
    .pipe(
      uglify().on("error", (uglify) => {
        console.error(uglify.message);
        this.emit("end");
      })
    )
    .pipe(dest(variable.prod_js_dir));
};

/**
 * copy files
 * style, scripts, images, copy, reload.
 */
export const copy = () => {
  return src(
    [
      variable.dev_dir + "/**/*.html",
      variable.dev_dir + "/css/*.css",
      variable.dev_dir + "/js/*.min.js",
      "!" + variable.dev_dir + "/{images,scss}",
      "!" + variable.dev_dir + "/{images,scss}/**/*",
    ],
    { base: variable.dev_dir + "/" }
  ).pipe(dest(variable.prod_dir));
};

/**
 * clean files
 */
export const clean = () => del([variable.prod_dir]);

/**
 * browser sync
 */
const server = browserSync.create();

export const serve = (done) => {
  server.init({
    server: {
      baseDir: variable.dev_dir,
    },
  });
  done();
};

/**
 * reload browser
 */
export const reload = (done) => {
  server.reload(true);
  done();
};

/**
 * watch for changes
 */
export const watchForChanges = () => {
  watch(variable.dev_scss_dir + "/**/*.scss", styles);
  watch(
    variable.dev_img_dir + "/**/*." + variable.img_types,
    series(images, reload)
  );
  watch(
    [
      variable.dev_path + "/**/*",
      "!" + variable.dev_path + "/{images,js,src,css}",
      "!" + variable.dev_path + "/{images,js,src,css}/**/*",
    ],
    series(copy, reload)
  );
  watch(
    [
      variable.dev_js_dir + "/**/*.js",
      "!" + variable.dev_js_dir + "/**/*.min.js",
    ],

    series(scripts, reload)
  );
  watch(variable.dev_dir + "/*.html", reload);
  console.log("Watching.........");
};

/**
 * zip files for production
 */
export const compress = () => {
  return src([
    "**/*",
    "!node_modules{,/**}",
    "!" + variable.prod_zip_dir + "{,/**}",
    "!" + variable.dev_dir + "{,/**}",
    "!.babelrc",
    "!.gitignore",
    "!gulpfile.babel.js",
    "!package.json",
    "!package-lock.json",
  ])
    .pipe(zip(`${info.name}.zip`))
    .pipe(dest(variable.prod_zip_dir));
};

export const dev = series(
  clean,
  parallel(styles, images, copy, scripts),
  serve,
  watchForChanges
);
export const build = series(
  clean,
  parallel(styles, images, copy, scripts),
  compress
);

export default dev;
