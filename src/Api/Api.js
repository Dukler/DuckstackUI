import React from 'react';


export default class Api extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            url:'http://192.168.0.5:8080/api/',
            online:false
        };
        this.post = this.post.bind(this);
        this.get= this.get.bind(this);
        this.getUrl= this.getUrl.bind(this);
    }
    getUrl(){
        return this.state.url + this.props.url;
    }
    post(object){
        //let response,error;
        (async () => {
            /*const rawResponse =*/ await fetch(this.state.url + 'save/Client', {
                method: 'POST',
                headers: {
                    'Accept': 'application/json',
                    'Content-Type': 'application/json'
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
    get(callback){
        fetch(this.getUrl())
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

    render() {
        return (
            <div></div>
        );
    }
}