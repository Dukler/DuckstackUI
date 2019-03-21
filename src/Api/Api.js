//import React from 'react';
import {constants} from '../Constants';


export default class Api {
    constructor(props) {
        //super(props);
        this.props = props;
        this.post = this.post.bind(this);
        this.get= this.get.bind(this);
        this.currentURL= this.currentURL.bind(this);
        this.request= this.request.bind(this);
    }
    request(props){
        fetch(constants.api + props.url,props.config)
            .then(response => {
                if (response.ok) {
                    //return response.json();
                    props.callback(response)
                } else {
                    throw new Error('Something went wrong ...');
                }
            })
            // .then(data => {
            //     props.callback(data);
            // })
            .catch(error => alert(error));
    }
    currentURL(){
        return this.urlTo(this.props.url)
    }
    post(object,props){
        let url;
        if (typeof props === 'undefined'){
            url = this.props.url
        }else {
            url = props.url
        }
        //let response,error;
        (async () => {
            /*const rawResponse =*/ await fetch(this.urlTo(url), {
                method: 'POST',
                headers: {
                    'Accept': 'application/json',
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(object)
            })/*.then((res) => {
                response = res;
            }).catch((err) => {
                error = err;
            });*/
            // const content = await rawResponse.json();
            // console.log(content);
        })();
    }
    get(callback,props){
        fetch(constants.api + props.url)
            .then(response => {
                if (response.ok) {
                    return response.json();
                } else {
                    throw new Error('Something went wrong ...');
                }
            })
            .then(data => {
                callback (data);
            })
            .catch(error => alert(error));
    }

    // render() {
    //     return (
    //         <div></div>
    //     );
    // }
}