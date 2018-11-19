import React, {Component} from 'react';
import String from  './String';
import InformationBlock from './InformationBlock';
import Pogination from './Progination';
import Search from './Search';
import Top from './Top';

export default class GetTable extends Component{
    constructor(props){
        super(props);
        let {data} = this.props

        this.state = {
            dataProgination: [0,50],
            dataAll: data,
            openInformationBlockNumber: null,
            buttonActiveNumber: 1,
            sorted: {
                direction: null,
                field: null
            }
        }

        this.sortBy = this.sortBy.bind(this);
    }

    render() {
        let arr = this.state.dataAll.slice(this.state.dataProgination[0],this.state.dataProgination[1]);
        let i = this.state.dataProgination[0] - 1;
        const users = arr.map((user,index) =>  <div key = {user.phone}>
            <String
                user = {user}
                index = {i++}
                openInformationBlock = {this.openInformationBlock.bind(this,i)}
            />
        </div>);

        return (
            <div className={'wrap'}>
                <Search
                    data = {this.props}
                    searchChangeData = { this.searchChangeData.bind(this)}
                />
                <Pogination
                    data = {this.state.dataAll}
                    buttonActiveNumber = {this.state.buttonActiveNumber}
                    changeProgination = {this.changeProgination.bind(this)}
                />
                <div className={'table'}>
                    <Top
                        data = {['id','firstName','lastName','email','phone']}
                        arrow = {this.arrow.bind(this)}
                        sort = {this.sortBy.bind(this,this.state.dataAll)}
                    />
                    <div>
                        {users}
                    </div>
                </div>
                {this.getInformationBlock(this.state.openInformationBlockNumber)}
            </div>
        )
    }

    arrow(field) {
        if(field !== this.state.sorted.field) return 'unsorted';
        if( this.state.sorted.direction ==='up') return 'sorted-up';
        if( this.state.sorted.direction ==='down') return 'sorted-down'
    }

    searchChangeData(arr){
        if(arr.length!==0){
            this.setState({
                    dataAll: arr,
                    openInformationBlockNumber: null,
                    buttonActiveNumber: 1,
                    dataProgination: [0,50]
            })
        } else {
            let {data} = this.props
            this.setState({
                     dataAll: data,
                     openInformationBlockNumber: null,
                     buttonActiveNumber: 1,
                     dataProgination: [0,50]
            })
            alert('Совпадений не найдено');
        }
    }
    openInformationBlock(index) {
        this.setState({
            openInformationBlockNumber:index
        })
    }
    getInformationBlock(index) {
        if(this.state.openInformationBlockNumber !== null) {
            return <InformationBlock data = {this.state.dataAll[index]}/>
        }
        else return null;
    }

    changeProgination(btnNumber) {
        let {data} = this.props
        let number = 50 * btnNumber
        let arrProgination = [number - 50, number]
        this.setState({
            dataProgination: arrProgination,
            buttonActiveNumber:btnNumber
        })
    }

    sortBy(arr,prop) {
        function compare(a,b) {
           return (a[prop] > b[prop]) ? 1 : -1
        }

        function isDifference() {
            let diffA = arr.map((user) => user[prop]).join('');
            arr.sort(compare);
            let diffB = arr.map((user) => user[prop]).join('');
            return (diffA !== diffB)
        }

        if (isDifference()) {
            this.setState ({
                dataAll: arr,
                openInformationBlockNumber: null,
                sorted: {
                    direction: 'up',
                    field: prop
                }
            })
        } else {
            arr.reverse();
            this.setState ({
                dataAll: arr,
                openInformationBlockNumber: null,
                sorted: {
                    direction: 'down',
                    field: prop
                }
            })
        }
    }
}