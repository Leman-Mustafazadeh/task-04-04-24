class human {
    constructor(name,surname,age=0,gender=women,nationality=azerbaijan){
        this.name = name
        this.surname = surname
        this.age = age
        this.gender = gender
        this.nationality = nationality
        this.getFullName =this.name + this.surname
        this.getBirthYear = getBirthYear.newDate().getFullName()
    }
       
}


// Human classından miras alan User class-ı yaradın.
// User class
// - Username
// - Email
// - isAdmin (true/false)
// - isLogged (true/false) => default false (constructor-da gondermirsiniz bu deyeri)
// - password (minimum 5 simvol olmalidir)
// - bio (maxlength 30 ola biler)
// - changePassword() - method-u var ve 2 parameter qebul edir, currentPassword ve newPassword => yoxlayirki eger currentPassword dogrudursa,
// newPassword-u teyin edib update edir, eger yalnishdirsa, kohne password oldugu kimi qalir ve alert verir
// - changeEmail() - method parameter olaraq users array-i ve newEmail qebul etmelidir ve newEmail-in bashqa user-de olub-olmamasini yoxlayir.
// Eger unique-dirse o zaman email-i update edir, eger unique deyilse, oldugu kimi qalir ve alert verir.


class User {
    constructor(name,surname,age=0,gender=women,nationality=azerbaijan,username,email,isAdmin,isLogged=false,password,bio ='',){
       super(name,surname,age=0,gender=women,nationality=azerbaijan)
        this.username = username 
        this.email = email
        this.isAdmin= isAdmin
        this.isLogged = isLogged;
        this.password = password.length >= 5 ? password : '';
        this.bio = bio.length <= 30 ? bio : bio.substring(0, 30) 
  
    }
    changePassword(currentPassword,newPassword){
        if(currentPassword==this.password){
            this.password = newPassword.length>=5 ? newPassword :this.password
            console.log("dogrudur");
        }else{
            console.log("change");
        }
    }
    
    changeEmail(users, newEmail) {
        const userEmail = users.some(user => user.email === newEmail);
        if (!userEmail) {
            this.email = newEmail;
            console.log('Email changed.');
        } else {
            console.log('unchanged.');
        }
    }
}


// Global functions.

// 1. sortUsersByUsername() - parameter array qəbul edir və geriyə username-ə görə A-Z sort edir.


const sortUsersByUsername = username.sort((x,y)=>y-x,0)
console.log(sortUsersByUsername);

// 2. filterByBirthYear() - parameter olaraq users array-i, bir year qəbul edir və həmin ildən böyük olan user-ləri filter edir.
function filterByBirthYear(users, year) {
    return users.filter(user => user.getBirthYear > year);
}
// 3. Login() - parameter olaraq users array-i, bir username və bir password qəbul edir. Və əgər
// a. username-də bir user tapılmazsa, 'user not found!'

function Login(userArr,logUsername,logPassword) {
    if(logUsername[userArr]==logUsername){
        console.log('user not found!');
    }
}

// b. username ve ya password yalnish olarsa, 'incorrect username or password'

function Login(userArr,logUsername,logPassword) {
    if(logUsername!==username && logPassword!==logPassword){
        console.log('incorrect username or password');
    }
}

// c. her ikisi dogru olarsa, ancaq her hansi bir user-in isLogged deyeri true olarsa, o zaman 'another user currently logged in' return etmelidir


function Login(userArr,logUsername,logPassword) {
    if(logUsername==username && logPassword==logPassword){
        isLogged=true 
        return 'another user currently logged in'
    }
}

// d. her ikisi dogru olarsa hemin user-in isLogged deyeri true olur ve alert('successfully logged in') verir
function Login(userArr,logUsername,logPassword) {
    if(logUsername==username && logPassword==logPassword){
        isLogged=true 
      window.alert('successfully logged in') 
    }
}

// 3. LogOut() - parameter olaraq bir users array-i ve username qebul, Eger,

// a. Daxil olunmush username-de bir user tapmazsa 'user not found'
function LogOut(userFound,usernameFound) {
    if(usernameFound[userFound]===usernameFound){
        console.log('user not found');
    }
}
// b. Daxil olunmush username-de user tapsa, ancaq isLogged deyeri false olarsa o zaman, 'user did not logged in to log out!'
// c. Daxil olunmush username-de user tapsa ve isLogged deyeri true olarsa o zaman, user-in isLogged deyeri false olur ve 'successfully' logged out

// 4. CreateUser() - parameter olaraq bir array ve bir User obj qebul edir ve hemin user-i array-e elave edir


function CreateUser(arr1,newUser) {
    return arr1.push(newUser)
}


// 5. DeleteUser() - parameter olaraq bir array ve bir username qebul edir ve daxil olunmush username-de user tapilarsa hemin User-i silir,
// tapmazsa o zaman 'user not found' return edir. for user in users:

function DeleteUser(logUser,logUsername) {
    if (logUser['logUsername'] == logUsername){
        users.remove(user)
    return 'user not found'
    }
}
       