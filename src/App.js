import React, { Component } from 'react';
import { Form, Menu, Segment, Header, Message, Loader, Responsive, Button, Sidebar, Icon } from 'semantic-ui-react'
import { Route, Link, Switch } from 'react-router-dom'
import About from './components/About'
import Reviews from './components/Reviews'
import NoTfound from './components/NoTfound'
import Home from './components/Home'
import Recources from './components/Recources'
import Contact from './components/Contact'
import ScrollButton from './components/ScrollButton'
import './App.css';

//1. create form to sign up X
//  a. parent name X
//  b. student name x
/*  c. email X
    d. phone X
    e. subject X
    f. radio/checkbox to see if they want more info, set up appointment, ect. X 
    g. message X
    */
const style = {
  card: {
    width: '100vw',
    borderBottom: 'solid darkred 6px',
    height: '7vh'
  },
  menu: {
    float: 'left'
  },
  side: {
    borderBottom: 'solid darkred 6px'
  },
  name: {
    float: 'right'
  },
  contact: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-around'
  },
  main: {
    borderBottom: 'solid darkred 6px'
  },
  footer: {
    borderTop: 'solid darkred 6px',
    display: 'flex',
    justifyContent: 'center'
  }
}

class App extends Component {
  state = {
    checked: false,
    parentFirst: '',
    parentLast: '',
    studentFirst: '',
    studentLast: '',
    value: '',
    email: '',
    phone: '',
    message: '',
    warning: null,
    whenToContact: '',
    loaded: false,
    error: null,
    reviews: [],
    avgReview: 0,
    visible: false
  }

  handleHideClick = () => this.setState({ visible: false })
  handleShowClick = () => this.setState({ visible: true })
  handleSidebarHide = () => this.setState({ visible: false })

  handleItemClick = (e, { name }) => this.setState({ activeItem: name })


  errorHandler = (err) => {
    console.error(err)
    this.setState({ error: true })
  }

  fetchReviews = () => {
    return fetch('https://mat-flow.herokuapp.com/reviews')
      .then(res => res.json())
      .then(res => this.setState({ reviews: res.reviews }))
      .then(this.getAvgReviews)
  }

  getAvgReviews = () => {
    const total = this.state.reviews.reduce((accum, review) => {
      return accum + review.rating
    }, 0)
    const avg = total / this.state.reviews.length
    this.setState({ avgReview: avg.toFixed(2) })
    return avg.toFixed(2)
  }

  concatReviews = (res) => {
    this.setState({ reviews: [...this.state.reviews, res] })
    return res
  }

  componentDidMount() {
    this.fetchReviews()
      .then(() => this.setState({ loaded: true }))
      .catch(this.errorHandler)
  }

  render() {
    const { activeItem, reviews, visible } = this.state
    return (
      <div>
        {this.state.loaded ? <div>
          <Responsive minWidth={768}>
            <div className='nav' style={style.main}>
              <Menu inverted stackable>
              <Menu.Item>
              <Link to='/'>
                <Menu.Item
                  name='Home'
                  active={activeItem === 'Home'}
                  onClick={this.handleItemClick}
                >
                  Home
                </Menu.Item>
                </Link>
                </Menu.Item>
                <Menu.Item>
                <Link to='/about'>
                <Menu.Item
                  name='About'
                  active={activeItem === 'About'}
                  onClick={this.handleItemClick}
                >
                  About
                </Menu.Item>
                </Link>
                </Menu.Item>
                <Menu.Item>
                <Menu.Item as='a' href='#contact' name='Contact' active={activeItem === 'Contact'} onClick={this.handleItemClick}>
                  Contact
                </Menu.Item>
                </Menu.Item>
                <Menu.Item>
                <Link to='/reviews'>
                <Menu.Item
                  name='Reviews'
                  active={activeItem === 'Reviews'}
                  onClick={this.handleItemClick}
                >Reviews
                </Menu.Item>
                </Link>
                </Menu.Item>
                <Menu.Item>
                <Link to='/recources'>
                <Menu.Item
                  name='Recources'
                  active={activeItem === 'Recources'}
                  onClick={this.handleItemClick}
                >
                  Resources
                </Menu.Item>
                </Link>
                </Menu.Item>
              </Menu>
            </div>
            <Switch>
              <Route exact path="/" component={Home} />
              <Route path="/about" component={About} />
              <Route path="/reviews" render={props => <Reviews {...props} reviews={reviews} fetchReviews={this.fetchReviews} concatReviews={this.concatReviews} />} />
              <Route path="/recources" component={Recources} />
              <Route path="/contact" component={Contact} />
              <Route component={NoTfound} />
            </Switch>
            <Menu inverted style={style.footer}>
              <Menu.Item>
                <Link to='/'>Home</Link>
              </Menu.Item>
              <Menu.Item>
              <a href='#contact'>Contact</a>
              </Menu.Item>
              <Menu.Item>
              <a href='mailto:mat.floerke@gmail.com'>Email</a>
              </Menu.Item>
              <Menu.Item>
              <a href='tel: +1-707-772-7442'>Phone</a>
              </Menu.Item>
            </Menu>
          </Responsive>
          <Responsive maxWidth={767} >
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
          </Responsive>
          <ScrollButton scrollStepInPx="100" delayInMs="10.66"/>
        </div> : <div><Loader active>Loading...</Loader></div>}
      </div>
    )
  }
}

export default App;
