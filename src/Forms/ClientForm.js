import React from 'react';
import Form from './Form';

class ClientForm extends Form {
    constructor(props) {
        super(props);
        this.state = {
          name: '',
          active: true,
          telephones: [
              {
                number:'',
                type:'',
                default:''
              },
          ] ,
          addresses: [
            {
              street: '',
              number: '',
              location: '',
              default: '' 
            },
        ] 
        };
    
        this.handleInputChange = this.handleInputChange.bind(this);
        
      }
    
      handleInputChange(event) {
        const target = event.target;
        const value = target.type === 'checkbox' ? target.checked : target.value;
        const name = target.name;
        
        if (name === "telephone"){
          let telephonesAux = JSON.parse(JSON.stringify(this.state.telephones));
          let number,type;
          switch (target.id) {
            case "1": 
              number = value;
              break;
            case "2":
              type = value;
              break;
            default:
              break;
          }
          if (number != null){
            telephonesAux[0].number = number
          }
          if (type != null){
            telephonesAux[0].type = type
          }
          this.setState({
            telephones:telephonesAux
          });
        }if (name === "address"){
          let addressesAux = JSON.parse(JSON.stringify(this.state.addresses))
          let street,number,location;
          switch (target.id) {
            case "1": 
              street = value;
              break;
            case "2":
              number = value;
              break;
            case "3":
              location = value;
              break;
            default:
              break;
          }
          if (street != null){
            addressesAux[0].street = street
          }
          if (number != null){
            addressesAux[0].number = number
          }
          if (location != null){
            addressesAux[0].location = location
          }
          this.setState({
            addresses:addressesAux
          });
        }else {
          this.setState({
            [name]: value
          });
        }
      }
      handlePost(){
      }


      render() {
        return (
          <form>
            <label>
              Nombre:
              <input
                name="name"
                type="text"
                value={this.state.name}
                onChange={this.handleInputChange} />
            </label>
            <br />
            <br />
            <label>
              Telefono:
              <input
                name="telephone"
                type="number"
                id = "1"
                value={this.state.telephones[0].number}
                onChange={this.handleInputChange} />
            </label>
            <label>
            Tipo:
            <select 
              name = "telephone" 
              id = "2"
              value={this.state.telephones[0].type} 
              onChange={this.handleInputChange}>
                <option value="1">Movil</option>
                <option value="2">Casa</option>
            </select>
            </label>
            <br />
            <br />
            <label>
              Direccion
            </label>
            <br />
            <label>
              Calle:
              <input
                name="address"
                type="text"
                id = "1"
                value={this.state.addresses[0].street}
                onChange={this.handleInputChange} />
            </label>
            <br />
            <label>
              Numero:
              <input
                name="address"
                type="number"
                id = "2"
                value={this.state.addresses[0].number}
                onChange={this.handleInputChange} />
            </label>
            <br />
            <label>
              Locacion:
              <input
                name="address"
                type="text"
                id= "3"
                value={this.state.addresses[0].location}
                onChange={this.handleInputChange} />
            </label>
            <br />
            <br />
            <label>
              Activo:
              <input
                name="active"
                type="checkbox"
                checked={this.state.active}
                onChange={this.handleInputChange} />
            </label>
            <br />
            <br />
            <button onClick={this.handlePost}>
              Save
            </button>
            </form>
        );
      }
  }
  export default ClientForm;