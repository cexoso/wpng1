/*eslint-disable */
var program = require('commander');

program
    .allowUnknownOption(true)
    .option('-e --env [env]', 'environment')
    .parse(process.argv);

module.exports = {
	env: program.env
};
/*eslint-enable */
