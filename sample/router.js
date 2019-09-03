const glob = require("glob");
module.exports= (app) => {
    global.__base = __dirname + '/';
    glob('**/router.*.js', {}, (er, files) => {
        files.forEach((file) => {
            app.use('/', require(__base+file));
        });
    });
}