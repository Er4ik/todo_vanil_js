const fs = require('fs');

const checkExistsFileDb = (path) => {
    if (!fs.existsSync(path)) {
        fs.writeFile(path, JSON.stringify(basicFileDB), (err) => {
            if (err) throw err;
            console.log("---> File DB was successfully created <---");
        });
    }

    return;
};

module.exports = { checkExistsFileDb };