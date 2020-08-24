import React from 'react';
import Container from "./container";
import {Link} from "react-router-dom";

class Header extends React.Component {
    render() {
        const content = [
            ContainerContent.of(3, <Link to="/">Home</Link>),
            ContainerContent.of(3, <Link to='/about'>About</Link>),
            ContainerContent.of(3,<Link to="/sde">Software Engineering</Link>),
            ContainerContent.of(3,<Link to="/amaiya">Amaiya</Link>)];

        return <Container content={content}/>;
    }
}

class ContainerContent{
    constructor(rowSize, text) {
        this.rowSize = rowSize;
        this.text = text;
    }

    static of(rowSize, text){
        return new ContainerContent(rowSize, text);
    }
}

export default Header;