import React from "react";
import FormControl from '@material-ui/core/FormControl';
import Input from '@material-ui/core/Input';
import InputLabel from '@material-ui/core/InputLabel';

export default class FormInput extends React.PureComponent {
    constructor(props) {
        super(props);
        this.state = {value:''};
        this.getValue = this.getValue.bind(this);
    }
    componentDidMount() {
        //this.setState({value:this.props.attributes.value})
        console.log("mount")
    }
    componentWillUnmount() {
        console.log("unmount");
    }

    getValue(){
        return this.state.value;
    }

    render() {
        return (
            <FormControl margin="normal" required fullWidth>
                <InputLabel htmlFor={this.props.attributes.id}>{this.props.attributes.caption}</InputLabel>
                <Input id={this.props.attributes.id}
                       name={this.props.attributes.name}
                       autoComplete={this.props.attributes.suggested}
                       type={this.props.attributes.type}
                       value={this.props.attributes.value}
                       //onChange={e=> this.setState({value:e.target.value})}
                       onChange={this.props.updateItem}
                       autoFocus={false}
                />
            </FormControl>
        )
    }
}