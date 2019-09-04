import glob from 'glob';

module.exports = (app : any) => {
    let __base : string = __dirname.replace('dist','');
    glob('**/router.*.js', {}, (er, files) => {
        files.forEach((file) => {
            app.use('/', require(__base+file));
        });
        console.log('loaded all router modules from path : ' + __base);
    });
}