const fs = require('node:fs');
const content = 'Some content!';
fs.writeFile('http://www.example.edu/ ./index.html', content, err => {
  if (err) {
    console.error(err);
  } else {
   console.log("Downloaded and saved 3261 bytes to ./index.html");
  }
});