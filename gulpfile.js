var gulp = require('gulp');
var exec = require('child_process').exec;

gulp.task('mergin',function(cb){
    gulp.src('src/client/**').pipe(gulp.dest('dist/'));  
})
  

gulp.task('packaging',function(cb){

  // exec('electron-packager dist "jz" --platform=darwin --arch=x64 --icon logo.icns --asar --app-version=1.0.4   ', function(err) {
  //   if (err) return cb(err);
  //   cb();
  // });

  //cd dist
  //npm install node-notifier --save

  exec('electron-packager dist "jz" --platform=win32 --arch=x64 --asar --app-version=1.0.0 --electron-version=9.0.3  --icon "favicon.ico" ', function(err) {
    if (err) return cb(err);
    cb();
  });

})


gulp.task('installing', function(done) {

  // var createDMG = require('electron-installer-dmg')
  // createDMG({
  //   appPath:"./jz-darwin-x64/jz.app",
  //   name:"jz"
  // }, function done (err) { })
 
  var electronInstaller = require('electron-winstaller');
  resultPromise = electronInstaller.createWindowsInstaller({
    appDirectory: 'jz-win32-x64',
    outputDirectory: 'jz-win32-x64/release',
    authors: 'jason.liu',
    iconUrl:'https://jingzhun.s3.cn-northwest-1.amazonaws.com.cn/images/icon/favicon.ico',
    setupIcon:'favicon.ico',
    exe: 'jz.exe',
    loadingGif:'loading.gif',
    noMsi: true,
    name:"com.ijingzhun.app"
  });
  resultPromise.then(
    () => console.log("installer"), 
    (e) => console.log(`No dice: ${e.message}`));


});
