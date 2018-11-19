import React, {Component} from 'react';

export default class Progination extends Component{
    constructor(props) {
        super(props);

    }

    render() {
        return (
            <div>
                {this.getProgination()}
            </div>

        )
    }

    getProgination() {
        let users = this.props.data;
        if (users.length < 50) return null;
        let arr = [];
        for( let i = 0; i < users.length/50; i++) {
            arr.push(i+1);
        }
        const buttons = arr.map((val,index) => {

           return(<button className={(val===this.props.buttonActiveNumber)? 'button-active': ''} key={val} onClick={this.props.changeProgination.bind(this,val)}>{val}</button>)
        })

        return(
            <div>
                {buttons}
            </div>
        )
    }
}