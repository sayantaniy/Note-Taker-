const express = require('express');
const app = express();
const path = require('path');
const fs = require('fs');

// parsers
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// to use static files
app.use(express.static(path.join(__dirname, '/public')));

// to render ejs pages
app.set('view engine', 'ejs');

app.get("/", function (req, res) {
  fs.readdir(`./files`, function (err, files) {
    res.render("index", { files: files });
  });
});

app.get("/file/:filename", function (req, res) {
  fs.readFile(`./files/${req.params.filename}`, "utf-8", (err,filedata)=>{
    res.render('show', {filename:req.params.filename, filedata: filedata }); 

  })
});

app.get("/edit/:filename", function (req, res) {
  
    res.render('edit', {filename:req.params.filename});

  })

  app.post("/edit", function (req, res) {
    fs.rename(`./files/${req.body.previous}`, `./files/${req.body.new}`, function (err) {
      if (err) {
        return res.send("Rename failed");
      }
      res.redirect('/');
    });
  });
  

  app.post("/create", function (req, res) {
    const { title, details } = req.body;

    // Check for missing input
    if (!title || !details) {
        return res.send("Title and details are required!");
    }

    const filename = title.split(' ').join('') + '.txt';

    fs.writeFile(`./files/${filename}`, details, function (err) {
        if (err) {
            return res.send("Failed to create file");
        }
        res.redirect('/');
    });
});



app.listen(3000, function () {
  console.log("its running");
}); 

