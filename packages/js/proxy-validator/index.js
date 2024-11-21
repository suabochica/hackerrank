function createValidatedUser(user) {
  const { name, email, age } = user;
    checkName(name)
    checkEmail(email)
    checkAge(age)
  
    modifyUser(user)
  }

function modifyUser(user) {
    user.name = 235;
    user.email = "chris@gmailcom"
    user.age = 12
  
    checkName(user.name)
    checkEmail(user.email)
    checkAge(user.age)
}

function checkName (name) {
    return (name.length < 100 && name.length > 0) ? console.log(name) : console.log("Name property is invalid");
}

function checkEmail (email) {
    const emailPattern = /^[a-z0-9]+@[a-z0-9]+\.[a-z]{2,}$/
    
    return emailPattern.test(email) ? console.log(email) : console.log("Email property is invalid");   
}

function checkAge (age) {
    return (18 < age && age <= 120) ? console.log(age) : console.log("Age property is invalid");
}

function main() {
    const ws = fs.createWriteStream(process.env.OUTPUT_PATH);
    const name = readLine();
    const email = readLine();
    const age = parseInt(readLine().trim(), 10);
    const user = createValidatedUser({
        name: name,
        email: email,
        age: age
    });

    let newName = readLine();
    let newEmail = readLine();
    let newAge = parseInt(readLine().trim(), 10);

    ws.write(user.name + '\n');
    ws.write(user.email + '\n');
    ws.write(user.age + '\n');

    try {
        user.name = newName;
        ws.write(user.name + '\n');
    } catch (e) {
        ws.write(e.message + '\n');
    }

    try {
        user.email = newEmail;
        ws.write(user.email + '\n');
    } catch (e) {
        ws.write(e.message + '\n');
    }

    try {
        user.age = newAge;
        ws.write(user.age + '\n');
    } catch (e) {
        ws.write(e.message + '\n');
    }

    ws.end();
}

createValidatedUser({
  name: "alex",
  email: "alex@gmail.com",
  age: 20
})