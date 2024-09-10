import './button-style.css';
import React, { createRef } from 'react';

class Button extends React.Component {
  constructor(props) {
    super(props)
    this.buttonRef = createRef();
  }
  
  showAlert = () => {
    alert(`A label desse botão é ${this.props.label}`)
  }
  
  render() {
    return(
      <div className='button'>
        <button ref={this.buttonRef} onClick={this.showAlert}>{this.props.label}</button>
      </div>
    );
  }
}

export default Button;