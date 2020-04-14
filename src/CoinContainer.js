import React from 'react';
import './App.css';
import { choice } from './helpers';
import Coin from './Coin';
import coin1 from './coin1.jpg';
import coin2 from './coin2.jpg';

class CoinContainer extends React.Component {
    static defaultProps = {
        coins: [
            { side: "heads", imgSrc: coin1},
            { side: "tails", imgSrc: coin2}
        ]
    }
    constructor(props){
        super(props)
        this.state = {
            currCoin: null,
            nFlips: 0,
            nHeads: 0,
            nTails: 0,
            rotating: false,
        }
    }
    flipCoin = (e) => {
        const newCoin = choice(this.props.coins)
        // this.setState(st => {
        //     let newState = {
        //         ...st,
        //         currCoin: newCoin,
        //         nFlips: st.nFlips + 1,
        //     }
        //     if(newCoin.side === "heads"){
        //         newState.nHeads += 1
        //     } else {
        //         newState.nTails += 1
        //     }
        //     return newState;
        // })
        setTimeout(() => {
            this.setState({
                rotating: false
            })
        }, 2000)
        this.setState(st => {
            return {
                currCoin: newCoin,
                nFlips: st.nFlips + 1,
                nHeads: st.nHeads + (newCoin.side === "heads" ? 1 : 0),
                nTails: st.nTails + (newCoin.side === "tails" ? 1 : 0),
                rotating: true
            }
        })
    }
    handleClick = (e) => {
        this.flipCoin()
    }
    render(){
        return (
        <div className="CoinContainer">
            <h2>Let's Flip A Coin!</h2>
            {
                this.state.currCoin && <Coin info={this.state.currCoin} rotating={this.state.rotating}/>
            }
            <p>Out of {this.state.nFlips} flips, there have been { this.state.nHeads } Heads and { this.state.nTails } Tails !</p>
            <button onClick={this.handleClick} disabled={this.state.rotating}>Flip Me !</button>
        </div>
        );
    }
}

export default CoinContainer;
