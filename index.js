import React from 'react';

const textStyle = {
  fontSize: 20,
  fontWeight: 'bold',
  color: '#f00'
};

export default class StyledText extends React.Component {
  render() {
    return (
      <p style={textStyle}>{this.props.children}</p>
    );
  }
}