import React, { Component } from 'react';
import './App.css';
import CardList from "../components/CardList";
/*Components*/

import SearchBox from "../components/SearchBox";
import Scroll from "../components/Scroll";

const initialState = {
    starmen:[],
    searchField:''
}


class App extends Component {
    constructor() {
        super()
        this.state = initialState;
    }

    componentDidMount = async () => {
        let urls=[];
        /*concat an array of StarWars API requests*/
        for (let i=1;i<43;i++){
            urls.push('https://swapi.co/api/people/' + i.toString());
        };
        /*fill an array of promises with fetched data*/
        const arrayOfPromises = urls.map(async url=>{
            const response = await fetch(url);
            return response.json()
        });
        const starmenData = await Promise.all(arrayOfPromises)
        const filteredStarmen = starmenData.filter(starman=>{
            return !starman.detail
        });
        const filledStarmen = filteredStarmen.map(async starman=>{
            /*get a list of all starmen films urls*/
            const starmanFilmsUrls = starman.films;
            /*async fetch all film data*/
            const arrayOfStarmanFilmsPromises = starmanFilmsUrls.map(async filmUrl=>{
                return fetch(filmUrl).then(response=>response.json());
            });
            /*make a data array of all fetched data*/
            const filmsArray = await Promise.all(arrayOfStarmanFilmsPromises);
            starman.films = filmsArray.map(film=>{return film.title});
            const homeworldObject = await fetch(starman.homeworld).then(response=>response.json());
            const homeworldName = homeworldObject.name;
            starman.homeworld = homeworldName
            return starman;
        })
        const fulfilled = await Promise.all(filledStarmen)
        this.setState({
            starmen:fulfilled
        })
        console.log(this.state)
    }

    onSearchChange (event) {
        this.setState({
            searchField:event.target.value
        })
    }



    render() {
        const {starmen,searchField} = this.state;
        const filteredStarmenOnSearch = starmen.filter(starman=>{
            return starman.name.toLowerCase().includes(searchField.toLowerCase())
        })
        if(!starmen.length) {
            return (
                <div className="App tc">
                    <h1>StarMen from StarWars</h1>
                    <SearchBox
                        searchField={this.state.searchField}
                        searchChange={this.onSearchChange.bind(this)}
                    />

                    <h3>Loading some characters from StarWars movies...</h3>
                </div>
            );
        } else {
            return (
                <div className="App tc">
                    <h1>StarMen from StarWars</h1>
                    <SearchBox
                        searchField={this.state.searchField}
                        searchChange={this.onSearchChange.bind(this)}
                    />
                    <Scroll>
                        <CardList
                            starmen={filteredStarmenOnSearch}
                        />
                    </Scroll>

                </div>
            );
        };

  }
}

export default App;
