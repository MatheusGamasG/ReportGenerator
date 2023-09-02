const { app, BrowserWindow, ipcMain } = require('electron');
const path = require('path');

const docx = require("docx");
const fs = require("fs");


let mainWindow;

app.on('ready', () => {
  mainWindow = new BrowserWindow({
    width: 800, height: 600, webPreferences: {
      preload: path.join(__dirname, 'preload.js')
    },
  });
  console.log("Running!")
  mainWindow.loadFile('index.html');
  console.log("File loaded!")

  ipcMain.on('button-clicked', (event, inputValue) => {
    console.log("IPC Reading...");
    console.log("Passed here " + inputValue.data);
    generate(inputValue.data);
  });
});

function generate(value) {
  const doc = new docx.Document({
    sections: [
      {
        properties: {},
        children: [
          new docx.Paragraph({
            children: [
              new docx.TextRun(value),
            ]
          })
        ]
      }
    ]
  });

  docx.Packer.toBuffer(doc).then((buffer) => {
    fs.writeFileSync("monteiro.docx", buffer);
  });
}