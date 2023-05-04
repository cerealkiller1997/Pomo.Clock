//Este vendria a ser el cuerpo de la aplicacion, es el punto de entrada
const {app, BrowserWindow} = require('electron') 

const CreateWindow = () => {
    const window = new BrowserWindow ( {
        width: 800,
        height: 600,
        minWidth: 315,
        minHeight: 82
    })

    window.loadFile('index.html')
}

app.whenReady().then(() => {
    CreateWindow()
})