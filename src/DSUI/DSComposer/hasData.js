
import * as React from "react";

export const hasData = ({url, params, loadingMessage}) => WrappedComponent => {
    class HasData extends React.Component {
        mounted = false;
        state = {
            data: [],
            hasError: false,
            error: {
                title: 'Cannot retrieve Real Posts',
                message: 'Could not retrieve Real Posts from supplied API.'
            },
            useDefault: false,
            loading: false,
            loadingMessage
        };
        get(url, { params }){
            fetch("http://192.168.0.5:8080/api/" + url)
                .then(response => {
                    if (response.ok) {
                        return response.json();
                    } else {
                        throw new Error('Something went wrong ...');
                    }
                })
                .then(data => {
                    if (this.mounted) {
                        this.initList(data);
                        this.setState({
                            //data,
                            loading: false,
                            hasError: false
                            //useDefault: data.length === 0
                        })
                    }
                })
                .catch(error => {
                    console.log(error);
                    this.setState({
                        hasError: true,
                        loading: false
                    })
                })
        }

        componentDidMount() {
            this.mounted = true;
            console.log("data");
            this.setState({loading: true});
            this.get(url, { params });
        }
        componentWillUnmount() {
            this.mounted = false;
        }

        setData(List){
            this.setState({data:List});
        }
        initList(data){
            for (let index = 0; index < data[this.props.className].length; index++) {
                this.addItem(data[this.props.className][index])
            }
        }
        addItem(props) {
            if (!this.getData().find(wdg => wdg.attributes.id === props.id) ){
                let item = {...this.props.item};
                item.attributes = props;
                let list = [...this.getData()];
                list = list.concat([item]);
                this.setData(list);
            }
        }
        getData(){
            return this.state.data
        }
        replace(target,item,itemName){
            let index = this.getData().findIndex(wdg => wdg.attributes.id === target.id);
            let items = [...this.getData()];
            if(itemName === "widget"){
                items[index] = item;
            }
            items[index] = item;
            this.setData(items)
        }

        render() {
            return (
                <WrappedComponent
                    {...this.state}
                    {...this.props}
                    replace = {this.replace.bind(this)}
                />
            )
        }
    }

    return HasData
};