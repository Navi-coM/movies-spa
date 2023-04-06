import React from 'react';
import MovieList from '../components/MovieList';
import Preloader from '../components/Preloader';
import InputSearch from '../components/InputSearch';

class Main extends React.Component {
    state = {
        movieList : [],
        loading: true,
    }
    componentDidMount() {
        let url = 'http://www.omdbapi.com/?apikey=545d2dce&s=terminator';
        fetch(url)
            .then(response => response.json())
            .then(data => this.setState({movieList: data.Search, loading: false}))
    }
    searchMovies = (stringSearch, type = 'all') => {
        this.setState({loading: true}) ;
        let url = `http://www.omdbapi.com/?apikey=545d2dce&s=${stringSearch}${type !== 'all' ? `&type=${type}` : ``}`;
        fetch(url)
            .then(response => response.json())
            .then(data => this.setState({movieList: data.Search, loading: false}))//
    }
    render () {
        const { movieList, loading } = this.state;
        return <main className="main container">
            <h4>SPA Movies Content</h4>
            <InputSearch searchMovies={this.searchMovies}/>

            {                                                   
                loading ? (<Preloader />)                         
                : (<MovieList movieList={movieList}/>)          
            }                                                   

        </main>
    }
}

export default Main;