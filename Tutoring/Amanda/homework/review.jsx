import React from 'react'

const titles = [
    'reviews',
    'average rating',
    'sentiment analysis'
]

const array = [
    '1,238'
]

class DataBox extends React.Component {
    render() {
        <div>
            <h3>{this.props.title}</h3>
            <p>{this.props.data}</p>
        </div>
    }
}

// const DataBox = (props) => {
//     const { title, data } = props;
//     return (
//         <div>
//             <h3>{title}</h3>
//             <p>{data}</p>
//         </div>
//     )
// }