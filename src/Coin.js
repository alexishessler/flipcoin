import React from 'react';
import './Coin.css';

class Coin extends React.Component {
  render(){
      return (
        <div className="Coin">
          <img className={this.props.rotating ? 'Coin-rotating' : ''} src={this.props.info.imgSrc} alt={this.props.info.side}/>
        </div> 
      )
  }
}

export default Coin;
