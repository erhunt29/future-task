import React from 'react';

export default function InformationBlock(props) {
    let {data} = props
    let {id,firstName,lastName, email, phone, address:{streetAddress,city,zip,state}, description} = data;

    return (
        <div className={'information-block'}>
            <div>Выбран пользователь:<b>{firstName +' ' + lastName}</b></div>
            <div>Описание:<span>{description}</span></div>
            <div>Адрес проживания: <b>{streetAddress}</b></div>
            <div>Город: <b>{city}</b></div>
            <div>Провинция/штат: <b>{state}</b></div>
            <div>Индекс: <b>{zip}</b></div>
        </div>
    )
}