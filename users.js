
var admins = [];
var usersArray = [{
        UserName: 'userName',
        UserPass: 'userPass',
        UserEmail: 'userEmail'
        
    }];
localStorage.setItem("users", JSON.stringify(usersArray));
setNewUser = (userName, userPass, userEmail) => {
    var newUser = {
        UserName: userName,
        UserPass: userPass,
        UserEmail: userEmail
        
    }
    users=[]
    // if(!checkUser(userName,userEmail)){
    users.push(newUser);
    alert("Welcome " + newUser.UserName.toUpperCase());
    localStorage.setItem("users", JSON.stringify(users));
    $('#User-Name-Input-signIn').val('');
    $('#PasswordInput-signIn').val('');
    $('#email-signIn').val('');
    $('.curtain-S').css('display','none');
    // }
// else{
//     return false
// }
};
checkUser = (userName, userEmail) => {
    var users = JSON.parse(localStorage.getItem("users"));
    console.log(users)
    if(users.length>0){
    for (var i = 0; users.length; i++) {
        if (users[i].UserName === userName) {
            alert('User name already exist');
            $('#User-Name-Input-signIn').val('');
            console.log('User name already exist')
            return false

        }
        else if (users[i].UserEmail === userEmail) {
            alert('User mail already exist');
           $('#email-signIn').val('');
           console.log('User mail already exist')
            return false
        }
        else {
            return true
        }
    }
    }
    else{
        return true;
    }
}

setAdmin = () => {
    var admin_1 = {
        adminName: 'admin',
        adminPass: 'admin'
    }
    admins.push(admin_1);
    var admin_2 = {
        adminName: 'admin1',
        adminPass: 'admin1'
    }
    admins.push(admin_2);
};


checkAdmin = (adminName, adminPass) => {
    var users = JSON.parse(localStorage.getItem("users"));
    for (var i = 0; i < admins.length; i++) {
        if (admins[i].adminName === adminName && admins[i].adminPass === adminPass) {
            alert('Welcome '+adminName)
            return 'admin'
        }
        for (var i = 0; i < users.length; i++) {
            if (users[i].UserName === adminName && users[i].UserPass === adminPass) {
                alert('Welcome '+adminName)
                return 'user'
            }
        }

    };




}



