import React from 'react';
import Movies from '../components/Movies';
import Preloader from '../components/Preloader';
import Search from '../components/Search';
import RadioBtns from '../components/RadioBtns';
import NotFound from '../components/NotFound';


// локальная переменная из .env.locala
const API_KEY = process.env.REACT_APP_API_KEY



// компонент Main будет классовым. он будет получать данные о фильмах и хранить их в state

class Main extends React.Component {
    // массив с фильмами мы будем передавать через props в Movies
    state = {
        moviesList: [],
        radioBtn: '',
        newReqest: '',
        searching: false
    }


    // метод жизненного цикла. вызывается при первом монтировании сайта
    componentDidMount() {
        this.getFilms()
    }


    // метод для получения списка фильмов с сервера при первой загрузке страницы
    getFilms() {
        fetch(`https://www.omdbapi.com/?apikey=${API_KEY}&s=blade`)
            .then(response => response.json())
            .then(data => this.setState({moviesList: data.Search}))
            .catch(err => console.log(err))
            // ответ с сервера нам приходит как объект в объекта. поэтому сохраняем именно внутренний объект Search в state

        this.setState({newReqest: 'blade'})
    } 


    // стрелочная функция вызывается в компоненте Search при поиске нового фильма
    newFilmsRequest = (newReqest) => {
        fetch(`https://www.omdbapi.com/?apikey=${API_KEY}&s=${newReqest}&type=${this.state.radioBtn}`)
            .then(response => response.json())
            .then(data => this.setState({moviesList: data.Search}))
            .catch(err => console.log(err))

        this.setState({newReqest: newReqest})
        }



    // функция принимает выбранную radio-кнопку в компоненте RadioBtns. сохранеяет значение в state radioBtn и вызвает newFilmsRequest
    radioBtnChange = (selected) => {
        this.setState({radioBtn : selected}, () => {
            this.newFilmsRequest(this.state.newReqest)    
        })
    }
    


    render() {
        return(
            <main className='content container'>
                {/* компонент поисковой строки */}
                <Search 
                    searchFilms={this.newFilmsRequest}
                />
                
                {/* отрисовываем компонент с радио-кнопками */}
                <RadioBtns 
                    radioBtnChange={this.radioBtnChange}
                />

                {
                    // 1-ое условие: если moviesList не undefined, то входим в следуюущую проверку: если moviesList не пустой, вызываем компонент Movies и отрисовываем фильмы, если пустой, то вызываем Preloader. Если 1ое условие false, то есть с сервера пришеёл undefined, то выводим компонент NotFound

                    this.state.moviesList ? 
                    
                    (
                        this.state.moviesList.length ? 
                            <Movies films={this.state.moviesList}/> : 
                        <Preloader />
                    )

                    : <NotFound />
                    
                }
            </main>
        )
    }
}

export default Main;