import React, {Component} from 'react';

export default class Search extends Component{
    constructor(props) {
        super(props);
        this.findString = this.findString.bind(this)

        this.state = {
            inputValue: ''
        };

    }

    render() {
        return (
            <div>
                <input className={'search-input'} value = {this.state.inputValue} onChange = {evt => this.updateInputValue(evt)} type="text" placeholder='Введите значение'/>
                <button className={'search-button'} onClick = {this.props.searchChangeData.bind(this,this.findString())}>Найти</button>
            </div>
        )
    }

    updateInputValue(evt) {
        this.setState({
            inputValue: evt.target.value
        });
    }

    findString() {
        const value = this.state.inputValue;
        let arr = this.props.data.data;

        const result = arr.filter((string) => {
            if((string.id + '').indexOf(value) !== -1) return true;
            if(string.firstName.toLowerCase().indexOf(value.toLowerCase()) !== -1) return true;
            if(string.lastName.toLowerCase().indexOf(value.toLowerCase()) !== -1) return true;
            if(string.email.toLowerCase().indexOf(value.toLowerCase()) !== -1) return true;
            if(string.phone.toLowerCase().indexOf(value.toLowerCase()) !== -1) return true;
            return false
        })

        return result

    }

}