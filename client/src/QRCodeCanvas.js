import React, { Component } from 'react';
import QRCode from 'qrcode.react';

class QRCodeCanvas extends Component {
  render() {
    return (
      <div>
        <QRCode value={this.props.url} />
      </div>
    )
  }
}

export default QRCodeCanvas
