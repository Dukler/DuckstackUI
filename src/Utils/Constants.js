const ui = "ui/update/";
let auxApi;
if (!process.env.NODE_ENV || process.env.NODE_ENV === 'development') {
    auxApi = "http://192.168.0.2:8081/api/"
} else {
    auxApi = "https://duckstackui-backend.herokuapp.com/api/"
}
export const constants = {
    api: auxApi,
    ui:{
        uiEndpoint: ui,
        login: ui + "Login",
        home: ui + "Home",
        main: ui + "Main",
    },
    login :"user/login",
    save: "save/Client",
    httpStatus : {ok:200},
};
