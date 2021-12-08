import React from 'react';
import axios from 'axios';
import Task from './Task'
import './App.css';

class App extends React.Component {

    state = {
        quote: '',
        latestQuote: ''
    };

    displayPrevQuote = () => {
        if (this.state.latestQuote.length > 1) {
            const prevQuote = [...this.state.latestQuote]
            let index = prevQuote.length - 1
            prevQuote.pop()
            this.setState({ quote: prevQuote[--index] })
            this.setState({ latestQuote: prevQuote })
        }

    }

    componentDidMount() {
        this.fetchQuote();
    }

    fetchQuote = () => {
        axios.get('https://gist.githubusercontent.com/natebass/b0a548425a73bdf8ea5c618149fe1fce/raw/f4231cd5961f026264bb6bb3a6c41671b044f1f4/quotes.json')
            .then((response) => {
                const randomNumber = Math.floor(Math.random() * response.data.length)
                const data = response.data;
                const { quote } = data[randomNumber];
                this.setState({ quote })
                this.setState({
                    latestQuote: [...this.state.latestQuote, quote]
                })
            })
            .catch((error) => {
                console.log(error)
            });
    }


    render() {

        const { quote } = this.state

        return (
            <div className='app'>
                <Task />
                <h2>{quote}</h2>
                <div>
                    <button onClick={this.displayPrevQuote}>Previous</button>
                    <button onClick={this.fetchQuote}>Next </button>
                </div>

            </div>

        )
    }
}

export default App;