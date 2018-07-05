import React from 'react';
import Constants from '../Constants';

class Form extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            name: '',
            active: true,
        }
    }

    handleInputChange(event) {
        const target = event.target;
        const value = target.type === 'checkbox' ? target.checked : target.value;
        const name = target.name;
        const id = target.id;
        
        if (id === "standar") {
            this.setState({
            [name]: value
            });
        }
    }
    handlePost(){
        
    }
    postClient(url){
        fetch(Constants.API, {
            method: 'POST',
            headers: {
            'Content-Type': 'application/json',
            },
            body: JSON.stringify({
            firstParam: 'yourValue',
            secondParam: 'yourOtherValue',
            })
        })
    }

    // render() {
    //     return (
    //         <div>
                
    //         </div>
    //     );
    // }
}

export default Form;