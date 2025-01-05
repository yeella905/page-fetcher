const needle = require('needle');
const fs = require('fs');

// URL to fetch the content
const url = 'http://www.example.edu/';

needle.get(url, (err, res) => {
    if (err) throw err;

  // Writing the fetched data to the local file
  fs.writeFile('./index.html', res.body, error => {
    if (error) {
      console.error('Error writing to file:', error);
    } else {
      const fileSizeInBytes = Buffer.byteLength(res.body);
      console.log(`Downloaded and saved ${fileSizeInBytes} bytes to ./index.html`);
    }
  });
});