
import React from 'react'

    function List (props) {
        return (
            <ul>
              {props.numbers.map((num,index) => <li key={index}>{num}</li>)}
            </ul>
          )
    }
export default List