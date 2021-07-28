import React from "react"
import {Link} from "react-router-dom"
const Header = (props) => {
    return <div className="nav">
      <Link to="/">
            <div>
                <span class="istock">
                iStocks
            </span>
            </div>
        </Link>
        <Link to="/stocks">
            <div>Stocks</div>
        </Link>
        <Link to="/about">
            <div>About</div>
        </Link>
    </div>
}

export default Header