import React from 'react'
import { Button, Sidebar, Icon, Menu} from 'semantic-ui-react'
import { Switch, Route, Link } from 'react-router-dom'
import AppContext from '../context'
import Reviews from './components/Reviews'
import NoTfound from './components/NoTfound'
import Home from './components/Home'
import Recources from './components/Recources'
import Contact from './components/Contact'
import ScrollButton from './components/ScrollButton'


const MobileView = () => (
    <Sidebar.Pushable as={Segment} style={{ marginLeft: '0', marginRight: '0' }}>
    <Button color='black' style={style.card} onClick={this.state.visible ? this.handleHideClick : this.handleShowClick}>
      <Icon style={style.menu} name='bars' />
      <Menu.Item style={style.name}>Mat Floerke</Menu.Item>
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
    <Link to='/'>
      <Menu.Item onClick={this.handleSidebarHide}>
      <Icon name='home' />
        Home
      </Menu.Item>
      </Link>
      <Link to='/about'>
      <Menu.Item onClick={this.handleSidebarHide}>
        <Icon name='vcard' />
        About
      </Menu.Item>
      </Link>
      <Link to='/reviews'>
      <Menu.Item onClick={this.handleSidebarHide}>
        <Icon name='thumbs up outline' />
       Reviews
      </Menu.Item>
      </Link>
      <Link to='/recources'>
      <Menu.Item onClick={this.handleSidebarHide}>
        <Icon name='cogs' />
       Resources
      </Menu.Item>
      </Link>
      <Link to='/contact'>
      <Menu.Item onClick={this.handleSidebarHide}>
        <Icon name='vcard' />
        Contact
      </Menu.Item>
      </Link>
      <Menu.Item style={style.contact}>
      <Menu.Item as='a' href='https://www.youtube.com/watch?v=dQw4w9WgXcQ' target="_blank">
        <Icon name='file' />
        Resume
      </Menu.Item>
        <Menu.Item as='a' href='https://www.linkedin.com/in/mathew-floerke-b71471115/' target="_blank">
          <Icon name='linkedin' />
          LinkedIn
        </Menu.Item>
        <Menu.Item as='a' href="mailto:mat.floerke@gmail.com">
          <Icon name='mail' />
          Email
                      </Menu.Item>
        <Menu.Item as='a' href="tel: +1-707-772-7442">
          <Icon name='phone' />
          Cell Phone
                      </Menu.Item>
      </Menu.Item>
      <Menu.Item disabled={!visible} onClick={this.handleHideClick}>
        <Icon name='angle double up' />
      </Menu.Item>
    </Sidebar>
    <Sidebar.Pusher dimmed={visible}>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/about" component={About} />
        <Route path="/reviews" render={props => <Reviews {...props} reviews={reviews} fetchReviews={this.fetchReviews} concatReviews={this.concatReviews} />} />
        <Route path="/recources" component={Recources} />
        <Route path="/contact" component={Contact} />
        <Route component={NoTfound} />
      </Switch>
      
      
      
    </Sidebar.Pusher>
  </Sidebar.Pushable>
)

export default () => (
    <AppContext.Consumer>
        {({data, actions})=> <MobileView  />}
    </AppContext.Consumer>
)