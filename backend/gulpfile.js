const gulp = require("gulp");
const gulpTs = require("gulp-typescript");
const shell = require("gulp-shell");
const nodemon = require("gulp-nodemon");
const sourcemaps = require("gulp-sourcemaps");
const Config = require("./config/gulp.config");

const tsProject = gulpTs.createProject("tsconfig.json")
const config = Config();

gulp.task("transpile:ts", ()=>{
  return gulp.src(config.tsFiles)
    .pipe(sourcemaps.init())
    .pipe(tsProject())
    .pipe(sourcemaps.write(".", { sourceRoot: "../src" }))
    .pipe(gulp.dest(config.jsDir));
});

gulp.task("transpile:html", ()=>{
  return gulp.src(["./src/**/*.html"])
    .pipe(gulp.dest(config.jsDir));
});

gulp.task("transpile", gulp.series("transpile:ts", "transpile:html"));

gulp.task("swagger:generate", shell.task(__dirname + "/node_modules/.bin/tsoa swagger"));

gulp.task("swagger:copy_ui", () => {
  return gulp.src("./src/swagger-ui/**/*")
    .pipe(gulp.dest("./bin/swagger-ui"));
});

gulp.task("swagger:copy_json", () => {
  return gulp.src("./bin/swagger.json")
    .pipe(gulp.dest("./bin/swagger-ui/"))
});

gulp.task("swagger", gulp.series(["swagger:generate", "swagger:copy_ui", "swagger:copy_json"]));

gulp.task("run", () => {
  var server = nodemon({
    script: "./src/index.ts",
    ext: "ts html",
    watch: "src/**/*.ts",
    debug: true,
    exec: "node --inspect --require ts-node/register"

  })
  .on("restart", ()=>{
    console.log("Restarted Nodemon");
  })
});

gulp.task("dev", gulp.series(["swagger", "run"]));

