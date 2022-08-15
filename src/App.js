import { Component } from "react";
import axios from "axios";
import "./main.css";
import QuoteText from "./components/QuoteText";
import QuoteFooter from "./components/QuoteFooter";
import QuoteButton from "./components/QuoteBtn";
class App extends Component {
  state = {
    quotes: [],
    randomQuote: 0,
    text: "",
    author: "",
  };
  componentDidMount() {
    axios
      .get(
        "https://gist.githubusercontent.com/camperbot/5a022b72e96c4c9585c32bf6a75f62d9/raw/e3c6895ce42069f0ee7e991229064f167fe8ccdc/quotes.json"
      )
      .then((res) => {
        this.setState({
          quotes: res.data.quotes,
          randomQuote: Math.trunc(Math.random() * res.data.quotes.length),
        });
      });
  }
  componentDidUpdate(prevProps, prevState) {
    if (this.state.randomQuote !== prevState.randomQuote) {
      this.setState({
        text: this.state.quotes[this.state.randomQuote].quote,
        author: this.state.quotes[this.state.randomQuote].author,
      });
    }
  }
  generateQuote = () => {
    function setOpacity(opacity) {
      animate[0].style.cssText = `opacity: ${opacity}; animation: none`;
      animate[1].style.cssText = `opacity: ${opacity}; animation: none`;
    }
    let animate = document.querySelectorAll(".animate");

    setOpacity(0);
    setTimeout(() => {
      setOpacity(1);
      this.setState({
        randomQuote: Math.trunc(Math.random() * this.state.quotes.length),
      });
    }, 1000);
  };
  render() {
    return (
      <div id="quote-box">
        <QuoteText quotes={this.state.quotes} text={this.state.text} />
        <QuoteFooter
          quotes={this.state.quotes}
          randomQuote={this.state.randomQuote}
          text={this.state.text}
          author={this.state.author}
        />
        <QuoteButton generateQuote={this.generateQuote} />
      </div>
    );
  }
}
export default App;
