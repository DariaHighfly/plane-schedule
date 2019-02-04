import React, { Component } from 'react';
import './App.css';
import AllTable from "./AllTable/AllTable";


class App extends Component {
    constructor() {
        super();
        this.state = {
            typeOfTable: "null",
            flightNumber: 0,
        };

        this.handleChange = this.handleChange.bind(this);
    }

    showTheTable(viewtype) { // метод, который вернет нам таблицу(необходима, чтобы таблица выводилась не сразу)
        if (viewtype !== "null") {
            return <AllTable
                viewType={this.state.typeOfTable}
                num={this.state.flightNumber}
            />
        }
    }

    handleChange(event) { // обработчик изменения значения flightNumber, вводимого пользователем в поиск
        this.setState({flightNumber: event.target.value});
    }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h2>Начни свое путешествие с Шереметьево</h2>
        </header>
        <div className="mainIcons">
          <img src="departure.png"
               className="departureIcon" alt="depart"
               onClick={() => {this.setState({typeOfTable: "depart"})}}/>
          <img src="time.png"
               className="timeIcon" alt="delay"
               onClick={() => {this.setState({typeOfTable: "delay"})}}/>
          <img src="arrival.png"
               className="arrivalIcon" alt="arrive"
               onClick={() => {this.setState({typeOfTable: "arrive"})}}/>
        </div>
          <div className="textsIco">
              <h2 className="textDepart">Вылет</h2>
              <h2 className="textTime">Задержка</h2>
              <h2 className="textArrive">Прилёт</h2>
          </div>
          <div className="search">
              <input type="text" className="searchForm"
                     value={this.state.flightNumber ? this.state.flightNumber : null}
                     onChange={this.handleChange} placeholder="Введите номер рейса..."/>
              <img src="search3.png"
                   className="searchButton"
                   onClick={() => {this.setState({typeOfTable: "custom"})}} alt="search"/> <br/>
          </div>
          <div className="showTheTable">
              <button className="showButton"
                      onClick={() => {this.setState({typeOfTable: "all"})}}>Показать все рейсы</button>
          </div>
          <div id="table">
              {
                  this.showTheTable(this.state.typeOfTable) // отображаем нужную нам таблицу с помощью метода showTheTable
              }
          </div>
          <footer className="footer">
              <p className="author">&copy; DariaHighfly</p>
          </footer>
      </div>
    );
  }
}

export default App;
