import React,{Component} from 'react';
import {render} from 'react-dom';
import {url} from "../url";
import GetData from './GetData';


class App extends Component {
    constructor(props) {
        super(props);

        this.state = {
            whoIsOpen: null
        };
    }

    render() {
        return (
            <div className = {''}>
                {this.getBody()}
                {this.getData()}
            </div>
        )
    }

    getBody() {
        if (!this.state.whoIsOpen) {
            return (
                <div className = {'select-data'}>
                    <h3>Выберете объем данных</h3>
                    <button className={'button-small-data'} onClick={ () => {this.openData('smallData')} }>Маленький</button>
                    <button className={'button-big-data'} onClick={ () => {this.openData('bigData')} }>Большой</button>
                </div>
            )
        }

        else return null;

    }

    openData(data) {
        this.setState({
            whoIsOpen: data
        });
    }

    getData() {
        if (this.state.whoIsOpen) {
            return (
                <GetData url = {url[this.state.whoIsOpen]}/>
            )
        }
    }
}

render(<App url = {url}/>,document.querySelector('.container'));