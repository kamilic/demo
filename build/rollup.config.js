const path = require("path");
const resolve = (p) => path.resolve(__filename, "../../", p);
const type = require("yargs").argv.type;
const projectName = require("yargs").argv.name;
const buildType = {
    cjs: {
        file: resolve(`dist/${projectName}.cjs.js`),
        format: "cjs"
    },
    umd: {
        file: resolve(`dist/${projectName}.js`),
        format: "umd",
        name: projectName
    },
    esm: {
        file: resolve(`dist/${projectName}.esm.js`),
        format: "es"
    }
};

const requestOutput = () => {
    if (Object.keys(buildType).some(v => v === type)) {
        return buildType[type];
    } else {
        throw new Error("build type failed.");
    }
};

module.exports = {
    conf: {
        name : "what",
        input: resolve("src/js/index.js"),
        output: requestOutput(type),
        plugins : []
    }
};
