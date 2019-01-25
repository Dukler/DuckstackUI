//import React from 'react';
import * as constants from './Constants';


export default class Api {
    constructor(props) {
        //super(props);
        this.props = props;
        this.post = this.post.bind(this);
        this.get= this.get.bind(this);
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
    get(props){
        let url;
        if (typeof props === 'undefined'){
            return
        }else {
            url = props.url
        }
        fetch(constants.api + url)
            .then(response => {
                if (response.ok) {
                    return response.json();
                } else {
                    throw new Error('Something went wrong ...');
                }
            })
            .then(data => {
                props.callback (data);
            })
            .catch(error => alert(error));
    }

}