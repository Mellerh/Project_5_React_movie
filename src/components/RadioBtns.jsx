import React from 'react';

class RadioBtns extends React.Component {

    state = {
        radioBtn: ''
    }
    
    // функция обрабатывает нажатие на радио кнопку и отправляет выбранное значение в Main для отрисовки
    handleChange = (event) => {
        this.setState({[event.target.name] : event.target.value}, 

            // после сохранения новой radioBtn в state, отправляем значение в Main
            () => { 
                this.props.radioBtnChange(this.state.radioBtn)
        })
    }

    render() {
        return(
            <div className='radioBtns'>
                 <p>
                    <label>
                        <input
                            className="with-gap" name="radioBtn" 
                            type="radio" 
                            value=''
                            onChange={this.handleChange}
                            defaultChecked
                        />
                        <span>All</span>
                    </label>
                </p>
                
                 <p>
                    <label>
                        <input 
                            className="with-gap" name="radioBtn" 
                            type="radio" 
                            value='movie'
                            onChange={this.handleChange}
                        />
                        <span>Movies only</span>
                    </label>
                </p>

                 <p>
                    <label>
                        <input 
                            className="with-gap" name="radioBtn" 
                            type="radio" 
                            value='series'
                            onChange={this.handleChange}
                        />
                        <span>Series only</span>
                    </label>
                </p>
        
            </div>
        )
    }
}


export default RadioBtns;