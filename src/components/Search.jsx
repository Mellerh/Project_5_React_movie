import React from "react";

class Search extends React.Component {

    state = {
        search: '',
    }
    
    
    // функция сохраняет введённое значение пользователем в State
    saveRequestToState = (event) => {
        this.setState({search : event.target.value})
    }
    
   
    // ВАЖНО использовать именно стрелочные функции. при обычных методах их нужно привязывать в constructor к this
    // обрабатываем нажатие на Enter и отправляем данные из стэйта в Main для отрисовки фильмов
    handleSubmit = (event) => {
        if (event.key === 'Enter' && this.state.search.trim()) {
            this.props.searchFilms(this.state.search);
        }
    }


    // обрабатываем нажатие на кнопку и отправляем данные в Main для отрисовки фильмов
    handleBtn = () => {
        if(this.state.search.trim()) {
            this.props.searchFilms(this.state.search);
        }
    }
    

    render() {
        return(
            <div className="row">
                <div className="col s12">

                    <div className="row">
                        <div className="input-field col s12" >
                        <input 

                            className=""
                            type="text" 
                            value={this.state.search}
                            onChange={this.saveRequestToState}
                            onKeyDown={this.handleSubmit}

                            placeholder="search"
                        />
                        
                        <a  id='searchbutton'className="waves-effect waves-light btn" onClick={this.handleBtn}
                        >search</a>

                        </div>
                    </div>
                </div>
          </div>
        )
    }
}


export default Search;