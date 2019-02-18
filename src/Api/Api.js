//import React from 'react';
import {constants} from '../Constants';


export default class Api {
    constructor(props) {
        //super(props);
        this.props = props;
        this.post = this.post.bind(this);
        this.urlTo= this.urlTo.bind(this);
        this.currentURL= this.currentURL.bind(this);
    }
    urlTo(url){
        return constants.api + url;
    }
    currentURL(){
        return this.urlTo(this.props.url)
    }
    post(props){
        let response,error;
        if (typeof props === 'undefined'){
            return
        }
        (async () => {
            const rawResponse = await fetch(this.urlTo(props.url), {
                method: 'POST',
                headers: {
                    'Accept': 'application/json',
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(props.list)
            }).then((res) => {
                props.callback(res);
            }).catch((err) => {
                error = err;
            });
            const content = await rawResponse.json();
            console.log(content);
        })();
    }
    static get(url, callback){
        fetch("http://192.168.0.5:8080/api/" + url)
            .then(response => {
                if (response.ok) {
                    return response.json();
                } else {
                    throw new Error('Something went wrong ...');
                }
            })
            .then(data => {
                callback(data);
            })
            .catch(error => {
                console.log(error);
            })
    }
    static getPromise(url,callback){
        fetch("http://192.168.0.5:8080/api/" + url)
            .then(response => {
                if (response.ok) {
                    return response.json();
                } else {
                    throw new Error('Something went wrong ...');
                }
            })
            .then(data => {
                return new Promise((resolve,reject) =>{

                })
            })
            .catch(error => {
                console.log(error);
            })
    }

}