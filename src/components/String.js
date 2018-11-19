import React,{Component} from 'react';

export default class String extends Component{
    constructor(props){
        super(props);
    }

    render() {
        const {user,index,openInformationBlock} = this.props
        return (
            <div onClick={openInformationBlock}>
                <span className={'id'}>{user.id}</span>
                <span className={'firstName'}>{user.firstName}</span>
                <span className={'lastName'}>{user.lastName}</span>
                <span className={'email'}>{user.email}</span>
                <span className={'phone'}>{user.phone}</span>
            </div>
        )
    }
}