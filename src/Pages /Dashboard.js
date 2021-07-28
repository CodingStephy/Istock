import React from 'react'
import {Link} from 'react-router-dom'


const Dashboard = (props) => {
    console.log(props.stocks)
    return(
     <div className="dashboard">
            <ul className='companies'>
            {props.stocks.map((company)=>{
            const {name, symbol} = company
            return (
               <Link to={`/stocks/${symbol}`} key={symbol}>
                 <li>{name}</li>
                </Link>
                    )
                })}
            </ul>
        </div>
    )
}

export default Dashboard