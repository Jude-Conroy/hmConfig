/**
 * Created by jude on 28/11/2016.
 */
const shell = require('shelljs');

(function() {
        module.exports.gitCheck = function() {
            if (!shell.which('git')) {
                shell.echo('Sorry, this script requires git');
                shell.exit(1);
            }
        }
    }
)();


