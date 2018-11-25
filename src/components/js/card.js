import React from 'react'
import '../css/card.css'

class Card extends React.Component{
    constructor(props) {
        super(props);

        this.state = {
            front: 'hidden',
            back: '',
            keepFliping: true
        }
    }

    handleClick = () => {
            if (this.state.front == '' && this.state.keepFliping) {
                this.setState({ front: 'hidden', back: ''})

            } else if (this.state.front == 'hidden') {
                this.setState({ front: '', back: 'hidden'})
                var carta = {
                    type: this.props.url,
                    callback: this.callback
                }

                this.props.handleFlip(carta)
            }
    }

    callback = (bool) => {
        this.setState({ keepFliping: bool}, () => this.handleClick())

    }

    render() {
        return (
            <div className="card" onClick={this.handleClick}>
                <img className={this.state.back} src="https://i.ebayimg.com/images/g/UPsAAOxyGqZSZjjA/s-l300.jpg" />
                <img className={this.state.front} src={this.props.url}/>
            </div>
        ) 
    }
}
export default Card;