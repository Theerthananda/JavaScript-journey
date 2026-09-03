function processUser(name, callback) {

    console.log(callback() + " " + name);
    
}

function callback() {
    return "Welcome,"
}

processUser("Theerthananda", callback);

function processUser1(name, callback) {
    const msg = "Welcome, " + name + " !";
    callback(msg);
}

function displayMessage(msg) {
    console.log(msg);
}

processUser1("Theerthananda", displayMessage);