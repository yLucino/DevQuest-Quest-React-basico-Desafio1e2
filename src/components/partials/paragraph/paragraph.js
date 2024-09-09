import './paragraph-style.css';
import React from 'react';

class Paragraph extends React.Component {
  render() {
    return(
      <div className="paragraph">
        <p style={{color: `${this.props.color}`}}>{this.props.text.toUpperCase()}</p>
      </div>
    );
  }
}

export default Paragraph;