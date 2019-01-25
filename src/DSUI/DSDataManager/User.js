
export default class User {
    static myInstance = null;
    userID = null;
    loggedIn = false;

    static getInstance(){
        if(User.myInstance == null){
            User.myInstance = new User();
        }
        return this.myInstance
    }

    getID(){
        return this.userID;
    }
    isLoggedIn(){
        return this.loggedIn;
    }
    login(userID){
        this.userID = userID;
        this.loggedIn = true;
    }
    logout(){
        this.loggedIn = false;
    }
}
