import React, { Component } from 'react'
import { Menu } from 'semantic-ui-react'
import { Link } from 'react-router-dom'

class MainNav extends Component {

    render() {
        const {activeItem} = this.props
        return (
            <div className='nav'>
            <Menu inverted stackable>
                <Menu.Item
                    name='Home'
                    active={activeItem === 'Home'}
                    onClick={this.props.handleItemClick}
                >
                    <Link to='/'>Home</Link>
                </Menu.Item>
                <Menu.Item
                    name='About'
                    active={activeItem === 'About'}
                    onClick={this.props.handleItemClick}
                >
                    <Link to='/about'>About</Link>
                </Menu.Item>

                <Menu.Item as='a' href='#form' name='Contact' active={activeItem === 'Contact'} onClick={this.props.handleItemClick}>
                    Contact
                </Menu.Item>

                <Menu.Item
                    name='Reviews'
                    active={activeItem === 'Reviews'}
                    onClick={this.props.handleItemClick}
                ><Link to='/reviews'>Reviews</Link></Menu.Item>

                <Menu.Item
                    name='Acolades'
                    active={activeItem === 'Acolades'}
                    onClick={this.props.handleItemClick}
                >

                    <Link to='/acolades'>Acolades</Link>
                </Menu.Item>
            </Menu>
            </div>
        )
    }
}

export default MainNav