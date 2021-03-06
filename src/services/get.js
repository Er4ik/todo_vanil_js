"use strict";

const { pathToDB } = require("../common/pathToDB");
const { checkExistsFileDb } = require('../helpers/checkExistsFileDb');

const getTask = () => {
    try {
        checkExistsFileDb(pathToDB.path);

        const tasks = require(pathToDB.path);

        console.log(tasks.tasks);
        return;   
    } catch (err) {
        throw new Error(`Error get tasks --> ${err}`)
    }
};

if (require.main === module) {
    getTask();
}

module.exports = getTask;
