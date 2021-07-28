
import React from "react"

const Stock = (props) => {

    const symbol = props.match.params.symbol

    const loaded = () => {

        const getStock = () => {
        return props.stocks.filter((company)=>{ return company.symbol === symbol })[0]
        }

    return (
    <>
        <h3>Name:{getStock().name}</h3>
        <h3 class="price">Price:${getStock().lastPrice}</h3>
    </>)
    }

    const loading = () => {
        return <h1>Loading... </h1>
    }

    return props.stocks ? loaded() : loading()
}

export default Stock;