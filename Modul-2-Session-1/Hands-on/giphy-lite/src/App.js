import './App.css';
import axios from "axios"
import { Form, Range, FilterList } from './Components/Giphy';
import React from "react";

const API_URL = 'http://api.giphy.com/v1/gifs/search?'
const API_KEY = 'MJbqNrltxCvHeQXq7AWXqWCGaUHKMbiF'

const App = () => {
  const state = {
    list:[],
    searchTerm:"lol",
    rating:[],
    currentRating:'',
    limit:12
  }

  componentDidMount(){
    this.getData();
  }

  getData(){
    axios.get(`${API_URL}q=${this.state.searchTerm}&api_key=${API_KEY}&limit=${this.state.limit}`)
    .then(({data}) => {
      this.setState({
        list:data.data,
        rating: [...new Set(data.data.map(x => x.rating))]
      })
    })
  }

  ratingChange = e => {
    this.setState({
      currentRating: e.target.value
    });
  }

  renderList = () => {
    return this.state.list
    .FilterList(item => this.state.currentRating.trim().length === 0 ? true : (this.state.currentRating === item.rating) ? true: false)
    .map((item,key)=>
    <li key = {item.id}>
      <h2>{item.title} ({item.rating})</h2>
      <img src={item.images.fixed_height.url}
      width={item.images.fixed_height.width}
      height={item.images.fixed_height.height}
      alt={item.title}/>
    </li>
    )
  }

  updateLimit = e => {
    this.setState({
      limit:e.target.value
    })
  }

  searchIt = (event,element) => {
    event.preventDefault();
    this.setState({searchTerm: element.value.replace(/\s/,'+')});
    this.getData();
  }

  return (
    <div className="App">
        <p>Giphy Search</p>
        <span>{this.state.limit}</span>
        <Range limit={this.state.limit} 
          updateLimit={this.updateLimit} />
        <Form searchIt={this.searchIt} />
        <FilterList 
          ratingChange={this.ratingChange} 
          FilterList={this.state.rating} />
        <ul>
          {this.renderList()}
        </ul>
    </div>
  )
}


export default App;