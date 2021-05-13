var GulpConfig = (function () {
    const baseDir = "./";
    const srcDir = "./src/";
    const testDir = "./test/";
    const binDir = "./bin/";

    function gulpConfig() {
      return {
        "source": srcDir,
        "output": "./bin/",
        "tsFiles": srcDir + "**/*.ts",
        "testFiles": testDir + "**/*.ts",
        "jsFiles": binDir + "**/*.js",
        "mainJs": binDir + "index.js",
        "jsDir": binDir,
      };
    }

    return gulpConfig
})();

module.exports = GulpConfig;
