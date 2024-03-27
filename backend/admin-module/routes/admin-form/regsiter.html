const express = require('express');
const fileUpload = require('express-fileupload');
const csv = require('csv-parser');
const fs = require('fs');

const app = express();
app.use(fileUpload());

// Serve HTML file
app.get('/', (req, res) => {
  res.sendFile(__dirname + '/index.html');
});

// Handle file upload
app.post('/upload', (req, res) => {
  if (!req.files || Object.keys(req.files).length === 0) {
    return res.status(400).send('No files were uploaded.');
  }

  const excelFile = req.files.excelFile;
  const filePath = __dirname + '/uploaded.csv';

  excelFile.mv(filePath, (err) => {
    if (err) {
      return res.status(500).send(err);
    }

    // Process the CSV file
    let data = [];
    fs.createReadStream(filePath)
      .pipe(csv())
      .on('data', (row) => {
        data.push(row);
      })
      .on('end', () => {
        // Processed data is available in the 'data' array
        console.log(data);
        // Here you can send 'data' to the client or perform further processing
        res.send('File uploaded and processed successfully.');
      });
  });
});

const PORT = 3000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
