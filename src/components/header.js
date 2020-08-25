import React from 'react';
import {Link} from "react-router-dom";

class Header extends React.Component {
    render() {
        const linkSpacing = "p-3";
        const textTreatment = "text-dark";
        const headerLinkStyling = linkSpacing + " " + textTreatment;

        const content = [
            Tuple.of(3, key => <Link to="/" className={headerLinkStyling} key={key}>Home</Link>),
            Tuple.of(3, key => <Link to='/about' className={headerLinkStyling} key={key}>About</Link>),
            Tuple.of(3, key => <Link to="/sde" className={headerLinkStyling} key={key}>Engineering</Link>),
            Tuple.of(3, key => <Link to="/amaiya" className={headerLinkStyling} key={key}>Amaiya</Link>)];

        return <div
            className='d-flex flex-column flex-md-row align-items-center p-3 px-md-4 mb-3 bg-white border-bottom shadow-sm'>
            <h5 className='my-2 mr-md-auto font-weight-normal'>Drew Jelani</h5>
            <nav className='my-2 my-md-0 mr-md-3'>
                {content.map((content, index) => content.right(index))}
            </nav>
        </div>
    }
}

class Tuple {
    constructor(left, right) {
        this.left = left;
        this.right = right;
    }

    static of(left, right) {
        return new Tuple(left, right);
    }
}

export default Header;