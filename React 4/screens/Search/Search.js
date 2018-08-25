import React, { Component } from 'react';
import logo from '../../logo.svg';
import '../../App.css';

class Search extends Component {
  constructor() {
    super();

    this.state = {
      list: ['Beef Pulao', 'Chapli Kabab', 'Kaleji', 'Gola Kabab', 'Pae', 'Reshmi Kabab', 'Behari Boti', 'Dhaga Kabab', 'Hunter Beef', 'Sajji'],
      numbers: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10],
      result: [],
      numberResult: []
    }
  }

  search(e) {
    const { list, numbers } = this.state;
    const text = e.target.value;
    const result = list.filter(item => {
      const lowerItem = item.toLowerCase();
      const lowerText = text.toLowerCase();

      return lowerItem.substring(0, lowerText.length).indexOf(lowerText) !== -1
    })
    const numberResult = numbers.filter(item => {
      return item === +text
    })

    this.setState({result, text, numberResult});
  }

  renderHeader() {
    return <input placeholder="Search Any Food" onChange={this.search.bind(this)}/>
  }

  renderBody() {
    const {list, result, text, numbers, numberResult} = this.state;
    const items = text ? result : list;
    const numberItems = text ? numberResult : numbers;

    return (
      <div>
        {text && <h3>You are searching this "{text}"</h3>}
        <h1>Khao Peo Jan Banao List</h1>
        <ol>
          {items.map(function(item, index){
            return <li key={`${item}_${index}`}>{item}</li>
          })}
        </ol>
        <ul>
          {numberItems.map(function(item, index){
            return <li key={`${item}_${index}`}>{item}</li>
          })}
        </ul>
      </div>
    )
  }

  render() {
    return (
      <div className="App">
        {this.renderHeader()}
        {this.renderBody()}
      </div>
    );
  }
}

export default Search;
