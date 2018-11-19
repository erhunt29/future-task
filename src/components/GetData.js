import React, {Component} from 'react';
import GetTable from './GetTable';


export default class GetData extends Component{
    constructor(props) {
        super(props);

        this.state = {
            isLoading: false,
            data: []
        };
    }


    componentWillMount(props) {
        let {url} = this.props;
        let xhr = new XMLHttpRequest();
        xhr.open('GET', url, true);
        xhr.send();

        this.setState({isLoading: true })

        xhr.onreadystatechange = () => {
            if (xhr.readyState !== 4) {
                return false
            }

            if (xhr.status !== 200) {
                console.log(xhr.status + ': ' + xhr.statusText)
            } else {
                this.setState({
                    data: JSON.parse(xhr.responseText),
                    isLoading: false,
                })
            }
        }
    }

    render() {
        const { data, isLoading } = this.state

        if(isLoading) {
            return <img className={'preloader'} src="src/images/preloader.gif"/>
        }

        return(

                <div>{this.getTable(this.state.data)}</div>
            )

    }

    getTable(data) {
        return (
            <GetTable data = {data}/>
        )
    }
}