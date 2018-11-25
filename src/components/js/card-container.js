import React from 'react'
import Card from './card'
import '../css/card-container.css'

var urlarray = [
    "https://http2.mlstatic.com/3-cartas-de-blue-eyes-white-dragon-carta-yugioh-original-D_NQ_NP_102215-MLM25197218149_112016-F.jpg",
    "https://http2.mlstatic.com/3-cartas-de-blue-eyes-white-dragon-carta-yugioh-original-D_NQ_NP_102215-MLM25197218149_112016-F.jpg",
    "https://vignette.wikia.nocookie.net/yugiohenespanol/images/2/2e/Renunkuriboh.jpg/revision/latest?cb=20180426143640&path-prefix=es",
    "https://vignette.wikia.nocookie.net/yugiohenespanol/images/2/2e/Renunkuriboh.jpg/revision/latest?cb=20180426143640&path-prefix=es",
    "https://st-listas.20minutos.es/images/2016-06/411838/4993314_640px.jpg?1465993835",
    "https://st-listas.20minutos.es/images/2016-06/411838/4993314_640px.jpg?1465993835",
    "https://http2.mlstatic.com/yu-gi-oh-carta-silver-fang-D_NQ_NP_241211-MLM20480987801_112015-F.jpg",
    "https://http2.mlstatic.com/yu-gi-oh-carta-silver-fang-D_NQ_NP_241211-MLM20480987801_112015-F.jpg",
    "https://www.qtoptens.com/wp-content/uploads/2017/09/jinzo.png",
    "https://www.qtoptens.com/wp-content/uploads/2017/09/jinzo.png",
    "https://usercontent2.hubstatic.com/14085567.png",
    "https://usercontent2.hubstatic.com/14085567.png",
    "https://images.genius.com/187a8db56cef9835c729ea579c03a0db.310x450x1.png",
    "https://images.genius.com/187a8db56cef9835c729ea579c03a0db.310x450x1.png",
    "https://52f4e29a8321344e30ae-0f55c9129972ac85d6b1f4e703468e6b.ssl.cf2.rackcdn.com/products/pictures/177230.jpg",
    "https://52f4e29a8321344e30ae-0f55c9129972ac85d6b1f4e703468e6b.ssl.cf2.rackcdn.com/products/pictures/177230.jpg"
]

class CardContainer extends React.Component{
    constructor(props){
        super(props)
        this.state = {
            cartas: this.renderCards(),
            jugadas: 0,
            contador: 0
        }
    }

    getRandomInt = (min,max) => {
        return Math.floor(Math.random() * (max - min)) + min
    }

    randomCard = () =>{


        let number = this.getRandomInt(0, urlarray.length)
        let cardSelected = urlarray[number]
        urlarray.splice(number, 1)

        return cardSelected
    }

    renderCards = () => {
        let temp = []
        for (var i = 0; i < 16; i++) {
            temp.push(<Card url =  {this.randomCard()} handleFlip={this.handleFlipCard} />)
        }
        return temp;
    }

    handleFlipCard = (newCardUp) => {

        if (this.state.cardUp) {
            if (this.state.cardUp.type == newCardUp.type) {
                newCardUp.callback(false)
                this.setState({ cardUp: undefined})
                this.setState({ jugadas: this.state.jugadas + 1}) 
                this.setState({ contador: this.state.contador + 1}) 

                if(this.state.contador === 7){
                    window.alert("Excelente jugada Yugi! Ganaste")
                }


            } else {
                setTimeout(() => {
                    this.state.cardUp.callback(true)
                    newCardUp.callback(true)
                    this.setState({ cardUp: undefined })
                }, 1000)
            }
            this.setState({jugadas: this.state.jugadas + 1}) 
        } else {
            this.setState({ cardUp: newCardUp }, () => this.state.cardUp.callback(false))
        }
        
    }

    render() {
        return (
            <div className = "header">
            <h1>Memoria Yugioh</h1> 
            <h1> Numero de Jugadas: {this.state.jugadas} </h1>
            <div className = "flip-container" >
                { this.state.cartas }
            </div>
            </div>
        )
    }
}

export default CardContainer;