const core = require('@actions/core');
const path = require('path');
const fs = require('fs');

function main() {
    const encodedValue = core.getInput('encoded-value', { required: true });
    const destinationFile = core.getInput('destination-file', { required: true });
    const dirname = path.dirname(destinationFile);

    if (!fs.existsSync(dirname)) {
        fs.mkdirSync(dirname, { recursive: true });
    }

    const buff = new Buffer.from(encodedValue, 'base64');
    fs.writeFileSync(destinationFile, buff);
}

main();
