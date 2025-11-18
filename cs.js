function legalAge(age){
    if (age >= 18){
        console.log("You are of legal age.");
    }else{
        console.log("You are not of legal age.");
    }
}

legalAge(30);

//logical operators <, >, <=, >=, ==, ===, !=, !==
//conditional statements if, else if, else

function computeGrade(grade){
    if(grade >= 94.5){
        console.log("1");
    }else if(grade >=91.5){
        console.log("1.25");
    }else if(grade >= 89.5){
        console.log("1.5");
    }else if(grade >= 86.5){
        console.log("1.75");
    }else if(grade >= 84.5){
        console.log("2");
    }else{
        console.log("Not  within the transmutation.");
    }
}

computeGrade(95);

function login(username, password){
    if(username === "user"){
        console.log("Welcome, " + username + "!");

        if(password === "pass"){
            console.log("Login successful.");
        }else{
            console.log("Invalid Credentials.");
        }
        
    }else{
        console.log("Invalid user.");
    }
}

login("user", "pass1");

function ticketPrice(age){
    if (age <=18){
        if (age <=5){
            console.log("Free Ticket");
        }else{
            console.log("Ticket: Child Price");
        }
    }else{
        if(age >=60){
            console.log("Ticket: Senior Discount");
        }else{
            console.log("Ticket: Adult Price");
        }
    }
}

ticketPrice(70);