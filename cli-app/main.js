const {app, BrowserWindow} = require("electron")

function creatWindow(){
  win = new BrowserWindow({
    width:800, 
    height:600, 
    frame: false,
    transparent: true,
    alwaysOnTop: true,
  });
  win.maximize()
  // win.webContents.openDevTools()
  win.setIgnoreMouseEvents(true)
  win.loadFile('index.html')
  win.on('closed',()=>{
    win = null;
  })
  win.show()
}

app.on('window-all-closed', ()=>{
  if(process.platform !== 'darwin'){
    app.quit()
  }
})

app.on('activate', ()=>{
  if(win === null){
    creatWindow()
  }
})

app.on('ready',creatWindow);