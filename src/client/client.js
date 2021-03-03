
const { app, autoUpdater,BrowserWindow, ipcMain, dialog, Tray, Menu, Notification } = require('electron')
const path = require('path')
const url = require('url')
const notifier = require('node-notifier');
const p = require('./package.json');

app.setAppUserModelId("鲸准数据");

let mainWindow
let tray

if (require('electron-squirrel-startup')) return;

function createWindow () {

  mainWindow = new BrowserWindow({
    frame: true,
    show: false, //fullscreen: true,
    maximize:true,
    Menu:null,
    webPreferences: {
      webSecurity: false,
      nodeIntegration: true
    }
  });


  mainWindow.once('ready-to-show', ()=>{


    mainWindow.setMenu(null);    
    mainWindow.maximize()
    mainWindow.show()
  
  })

  setTray();

  mainWindow.loadURL(url.format({
    pathname: path.join(__dirname, 'index.html'),
    protocol: 'file:',
    slashes: true
  }))

  // mainWindow.loadURL(`http://localhost:8080/`)
  // mainWindow.webContents.openDevTools()
  // mainWindow.on('close', function (e) {
  //   //e.preventDefault();
  //   //mainWindow.hide();
  //   mainWindow = null
  // })
}

function setTray(){

  if(tray == null){

    let trayMenuTemplate = [{
      label:'退出',
      click: function () {
        //tray.destroy();
        app.quit();
      }
    }];
    let contextMenu = Menu.buildFromTemplate(trayMenuTemplate);

    tray = new Tray(path.join(__dirname, 'favicon.ico'))  
    tray.setToolTip("鲸准数据")
    tray.setContextMenu(contextMenu)
    tray.on('click', ()=>{     
      mainWindow.maximize();
      mainWindow.show();
    })
  }

}

app.on('ready', function(){

  const server = 'https://download.ijingzhun.com'
  const feed = `${server}/update/win32/${p.version}`

  if(process.argv[1] == '--squirrel-firstrun'){
    createWindow();
    return;
  }

  createWindow();
 
  console.log(feed)
  autoUpdater.setFeedURL(feed)

  autoUpdater.on('update-downloaded',(event, releaseNotes, releaseName)=>{
    dialog.showMessageBox({
      type:"info",
      buttons:[],
      title:'',
      message:process.platform === "win32" ? releaseNotes: releaseName,
      detail: '新版本下载，重启完成更新'

    }).then((returnValue)=>{

      if(returnValue.response === 0) autoUpdater.quitAndInstall()

    })
  })

  autoUpdater.on('error', message=>{
    console.error(message);
  })


  setInterval(() => {
    autoUpdater.checkForUpdates()
  }, 60000)
  
})

app.on('window-all-closed', function () {
  if (process.platform !== 'darwin') {
    app.quit()
  }
})

app.on('activate', function () {

  console.log('activate call')
  if (mainWindow === null) {
    createWindow()
  }
})


ipcMain.on('trace-message',(event,arg)=>{

  console.log(arg);


  // let r = [{
  //   "referenceno": "COSU6054731900",//提单号
  //   "currentnode": "离港",//当前状态
  //   "currenttime": "2020/4/4 10:19:00" //当前节点时间
  //   }]

  // let message = {
  //   appName: "com.ijingzhun.app",
  //   title: r[0].currentnode,
  //   message:  r[0].currenttime +"\r\n"+ r[0].referenceno,
  //   icon: path.join(__dirname, 'favicon.ico'), 
  //   sound: true, 
  //   wait: true 
  // }

  // // let message = {
  // //   title: arg.currentnode,
  // //   message:  arg.currenttime +"\r\n"+ arg.referenceno,
  // //   icon: path.join(__dirname, 'favicon.ico'), 
  // //   sound: true, 
  // //   wait: true 
  // // }

  //notifier.notify(message);



    let options = {
      title: arg.referenceno,
      //subtitle: arg.currenttime,
      icon: path.join(__dirname, 'favicon.ico'), 
      body: arg.currenttime+" ["+arg.currentnode+"]"
    }
    let notification =new Notification(options)
    notification.show()

    let options2 = {
      title: arg.referenceno,
      icon: path.join(__dirname, 'favicon.ico'), 
      message: arg.currenttime+" ["+arg.currentnode+"]",
      sound: true,
      wait: true 
    }
    notifier.notify(options2);

})

