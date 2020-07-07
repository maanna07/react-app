
import React from 'react'
import ReactDOM from 'react-dom'

    function List (props) {
        return (
            <ul>
              {props.numbers.map((num,index) => <li key={index}>{num}</li>)}
            </ul>
          )
    }
    let numbers = [1,2,3,4,5,6]
    ReactDOM.render(
        <List numbers={numbers}></List>,document.getElementById('root')
    )   
export default List