const fs = require("fs");

fs.readFile("a.txt", "utf-8", (err, content) => {
  if (err) console.log(err);
  content = content.replaceAll(/ +/g, " ");
  console.log(content);
  fs.writeFile("a.txt", content, (err) => {
    if (err) console.log(err);
  });
});
