import {constants} from '../Constants';

export const request = (props) =>{
    fetch(constants.api + props.url,props.config)
        .then(response => {
            if (response.ok) {
                props.callback(response)
            } else {
                throw new Error('Something went wrong ...');
            }
        })
        .catch(error => alert(error));
};

export const requestJson = (props) => {
    const jsonCallback = async (response)=>{
        props.callback(await response.json());
    };
    const requestProps = {
        url:props.url,
        callback:jsonCallback,
        config:props.config
    };
    request(requestProps)
};

export const headerJsonApi = (props) =>{
    let header = null;
    switch (props.type) {
        case 'login':
            header = new Headers({
                'Accept': 'application/xml',
                'Content-Type': 'application/json',
            });
            break;
        default:
            header = new Headers({
                'Accept': 'application/xml',
                'Content-Type': 'application/json',
                'Authorization': 'Bearer ' + localStorage.getItem('bToken'),
            });
    }
    return header;
};

export const headerUIApi = (props) =>{
    let header = null;
    if (props.url !== constants.ui.login){
        header= new Headers({
            'Authorization': 'Bearer ' + localStorage.getItem('bToken'),
        })
    }
    return header;
};