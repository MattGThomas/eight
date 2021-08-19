import React, { Component } from 'react'
import './App.css';

class App extends Component {
    state = {
        eightBallAnswer: '',
        question: ''
    }


    randomAnswer = () => {
        let answers = [
            "It is certain", 
            "It is decidedly so", 
            "Without a doubt", 
            "Yes - definitely",
            "You may rely on it", 
            "As I see it, yes", 
            "Most likely", 
            "Outlook good", 
            "Yes", "Signs point to yes",
            "Don't count on it", 
            "My reply is no",
            "My sources say no", 
            "Outlook not so good",
            "Very doubtful", 
            "Reply hazy, try again", 
            "Ask again later", 
            "Better not tell you now",
            "Cannot predict now", 
            "Concentrate and ask again"
        ]
        
        let randomIndex = Math.floor(Math.random() * answers.length)
        let answer = answers[randomIndex]
        console.log('this is the random answer function', answer)
        this.setState({
            eightBallAnswer: answer
        })
        
    }

    handleSubmit = (evt) => {
        evt.preventDefault()
        if(!this.state.question) {
            alert('please enter a question before continuing')
        }
        this.randomAnswer()
    }

    handleChange = (evt) => {
        evt.preventDefault()
        this.setState({
            [evt.target.name]: evt.target.value
        })
    }

    render() {
        return (
        <div>
            <h1>
            Magic 8 Ball
            </h1>
            <form onSubmit={this.handleSubmit}>
            <label>
                please tell me your question:<br/>
                <input type='text' name='question' value={this.state.question} onChange={this.handleChange}/>
                <input type='submit' value='Submit'/>
            </label>
            </form>
            <div>
                your question: {this.state.question}<br/>
                answer: {this.state.eightBallAnswer}
            </div>
        </div>
    )
  }
}

export default App;
