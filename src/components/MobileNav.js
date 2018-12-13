import React, { Component } from 'react'
import { Button, Menu, Segment, Sidebar, Icon } from 'semantic-ui-react'
import Home from './Home'
const style ={
    card: {
        width: '100vw',
        borderBottom: 'solid darkgreen 6px',
        height: '10vh'
    },
    menu: {
        float: 'left'
    }, 
    side: {
        borderBottom: 'solid darkgreen 6px'
    },
    name: {
        float: 'right'
    },
    contact: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-around'
    }
}
    
class MobileNav extends Component {
    
    state = { 
        visible: false
    }
    
    handleHideClick = () => this.setState({ visible: false })
    handleShowClick = () => this.setState({ visible: true })
    handleSidebarHide = () => this.setState({ visible: false })

    render() {
        const { visible } = this.state
        const {getASAP, getPhone, getEmail, getMessage, getWhenToContact, getStudentLast, getStudentFirst, getParentLast, getParentFirst, fetchReviews, reviews, handleItemClick, activeItem, postMessage, warning, parentFirst, parentLast, studentFirst, studentLast, value, handleDropChange, options, radioValue, handleChange, email, phone, whenToContact, message, checked} = this.props
        return (
            <div>              
                <Sidebar.Pushable as={Segment}>
                    <Button color='black' style={style.card} onClick={this.state.visible ? this.handleHideClick : this.handleShowClick}>
                        <Icon style={style.menu} name='bars' />
                        <Menu.Item style={style.name}>Kyle Czajkowski</Menu.Item>
                    </Button>
                    <Sidebar
                        as={Menu}
                        direction='top'
                        animation='overlay'
                        icon='labeled'
                        inverted={true}
                        onHide={this.handleSidebarHide}
                        vertical
                        visible={visible}
                        width='wide'
                        position='fixed' 
                        style={style.side}
                    >
                            <Menu.Item as='a' href='#about-me'>
                                <Icon name='vcard' />
                                About Me
                            </Menu.Item>
                            <Menu.Item as='a' href='#skills'>
                                <Icon name='js square' />
                                Skills
                            </Menu.Item>
                            <Menu.Item as='a' href='#projects'>
                                <Icon name='code' />
                                Projects
                            </Menu.Item>
                            <Menu.Item as='a' href='#resume'>
                                <Icon name='file' />
                                Resume
                            </Menu.Item>
                            <Menu.Item style={style.contact}>
                                <Menu.Item as='a' href='https://www.linkedin.com/in/kyle-czajkowski/' target="_blank">
                                    <Icon name='linkedin' />
                                    LinkedIn
                                </Menu.Item>
                                <Menu.Item as='a' href='https://github.com/Kyle-Ski' target="_blank">
                                    <Icon name='github' />
                                    GitHub
                                </Menu.Item>
                                <Menu.Item as='a' href="mailto:skiroyjenkins@gmail.com">
                                    <Icon name='mail' />
                                    Email
                                </Menu.Item>
                                <Menu.Item as='a' href="tel: +1-303-374-4256">
                                    <Icon name='phone' />
                                    Cell Phone
                                </Menu.Item>
                            </Menu.Item>
                            <Menu.Item disabled={!visible} onClick={this.handleHideClick}>
                                <Icon name='angle double up' />
                            </Menu.Item>
                    </Sidebar>
                    <Sidebar.Pusher dimmed={visible}>
                    <Home 
                        getASAP={getASAP}
                        getPhone={getPhone}
                        getEmail={getEmail}
                        getMessage={getMessage}
                        getWhenToContact={getWhenToContact}
                        getStudentLast={getStudentLast}
                        getStudentFirst={getStudentFirst}
                        getParentLast={getParentLast}
                        getParentFirst={getParentFirst}
                        fetchReviews={fetchReviews}
                        reviews={reviews}
                        handleItemClick={handleItemClick} 
                        activeItem={activeItem}
                        postMessage={postMessage}
                        warning={warning}
                        parentFirst={parentFirst}
                        parentLast={parentLast}
                        studentFirst={studentFirst}
                        studentLast={studentLast}
                        value={value}
                        handleDropChange={handleDropChange}
                        options={options}
                        radioValue={radioValue}
                        handleChange={handleChange}
                        email={email}
                        phone={phone}
                        whenToContact={whenToContact}
                        message={message}
                        checked={checked}
                    />
                    </Sidebar.Pusher>
                    </Sidebar.Pushable>
                </div>
        )
    }
}

export default MobileNav
