function readFile(fileName, callback) {
  setTimeout(() => {
    if (fileName === "data.txt") {
      callback(null, "file data loaded");
    } else {
      callback(new Error("File not found"), null);
    }
  });
}

function callBack(err, data) {
    if (err) {
        console.log(err.message)
        return
    }
    
    console.log(data);
}

readFile("data.ttyxt", callBack);
