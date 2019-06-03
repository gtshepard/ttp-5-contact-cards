import React, {Component} from 'react';
import './App.css';
import Label from './label.js'

class ContactCard extends Component {

  constructor(props){
    super(props);
  }
  render(){
    return (
        <div className="Card">
          <Label name="Name" text={this.props.fullName}>
          </Label>
          <Label name="Email" text={this.props.email}>
          </Label>
          <Label name="Mobile Phone " text={this.props.mobile}>
          </Label>
          <Label name="Work Phone " text={this.props.work}>
          </Label>
        </div>
    );
  }
}

export default ContactCard;
