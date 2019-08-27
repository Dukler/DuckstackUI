const ui = "ui/update/";
const doEndpoint = "do/";
let auxApi;
if (!process.env.NODE_ENV || process.env.NODE_ENV === 'development') {
    auxApi = "http://localhost:8081/api/"
} else {
    auxApi = "https://dsbackend.herokuapp.com/api/"
}
export const constants = {
    api: auxApi,
    ui: {
        uiEndpoint: ui,
        login: doEndpoint + "login",
        home: ui + "Home",
        main: ui + "Main",
    },
    login: auxApi + doEndpoint + "login",
    save: "save/Client",
    httpStatus: { ok: 200 },
};
