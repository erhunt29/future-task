import React, {Component} from 'react';

export default class Top extends Component{
    constructor(props) {
        super(props);


    }
    render() {
        const tops = this.props.data.map((field) => {
            return(<div
                       key={field}
                       className={field}
                       onClick={this.props.sort.bind(this,field)}
                    >
                        {field}
                        <span className={this.props.arrow(field)}>
                            ▲
                        </span>
                    </div>)})

        return (
            <div className={'top'}>
                {tops}
            </div>
            )
    }

}