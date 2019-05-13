var FtpDeploy = require('ftp-deploy');
//import FtpDeploy from "ftp-deploy"
var ftpDeploy = new FtpDeploy();

var config = {
    user: "duckstack",                   // NOTE that this was username in 1.x 
    password: "",           // optional, prompted if none given
    host: "files.000webhost.com",
    port: 21,
    localRoot: __dirname + '/build',
    remoteRoot: '/public_html/',
    // include: ['*', '**/*'],      // this would upload everything except dot files
    include: ['*'],
    exclude: ['dist/**/*.map'],     // e.g. exclude sourcemaps - ** exclude: [] if nothing to exclude **
    deleteRemote: false,              // delete ALL existing files at destination before uploading, if true
    forcePasv: true                 // Passive mode is forced (EPSV command is not sent)
}

// use with promises
ftpDeploy.deploy(config)
    .then(res => console.log('finished:', res))
    .catch(err => console.log(err))

// use with callback
ftpDeploy.deploy(config, function (err, res) {
    if (err) console.log(err)
    else console.log('finished:', res);
});

ftpDeploy.on("uploading", function (data) {
    data.totalFilesCount; // total file count being transferred
    data.transferredFileCount; // number of files transferred
    data.filename; // partial path with filename being uploaded
});
ftpDeploy.on("uploaded", function (data) {
    console.log(data); // same data as uploading event
});
ftpDeploy.on("log", function (data) {
    console.log(data); // same data as uploading event
});
ftpDeploy.on("upload-error", function (data) {
    console.log(data.err); // data will also include filename, relativePath, and other goodies
});