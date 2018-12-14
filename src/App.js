import React, { Component } from 'react';
import { Form, Menu, Segment, Header, Message, Loader, Responsive, Button, Sidebar, Icon } from 'semantic-ui-react'
import { Route, Link, Switch } from 'react-router-dom'
import About from './components/About'
import Reviews from './components/Reviews'
import NoTfound from './components/NoTfound'
import Home from './components/Home'
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
  }
}

const options = [
  { key: 'p', text: 'Physics', value: 'Physics' },
  { key: 's', text: 'Science', value: 'Science' },
  { key: 'c', text: 'Chemistry', value: 'Chemistry' },
  { key: 'm', text: 'Math', value: 'Math' },
  { key: 'u', text: 'Multiple', value: 'Multiple' },
]

class App extends Component {
  state = {
    radioValue: null,
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

  handleChange = (e, { value }) => this.setState({ radioValue: value })
  handleDropChange = (e, { value }) => this.setState({ value })

  postMessage = (e) => {
    e.preventDefault()
    const data = {
      parentFname: this.state.parentFirst,
      parentLname: this.state.parentLast,
      studentFname: this.state.studentFirst,
      studentLname: this.state.studentLast,
      email: this.state.email,
      phone: this.state.phone,
      message: this.state.message,
      subject: this.state.value,
      asap: this.state.checked,
      whenToContact: this.state.whenToContact
    }
    fetch('https://mat-flow.herokuapp.com/send', {
      method: 'POST',
      mode: 'cors',
      headers: {
        "Content-Type": "application/json; charset=utf-8"
      },
      body: JSON.stringify(data)
    })
      .then(res => res.json())
      .then(res => {
        if (res.success) {
          this.setState({
            warning: 'success',
            radioValue: null,
            parentFirst: '',
            parentLast: '',
            studentFirst: '',
            studentLast: '',
            value: '',
            email: '',
            phone: '',
            message: '',
          })
        }
        return res
      })
      .catch(err => console.error(err))
  }

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
    const { value, activeItem, reviews, visible } = this.state
    return (
      <div>
        {this.state.loaded ? <div>
          <Responsive minWidth={768}>
            <div className='nav'>
              <Menu inverted stackable>
                <Menu.Item
                  name='Home'
                  active={activeItem === 'Home'}
                  onClick={this.handleItemClick}
                >
                  <Link to='/'>Home</Link>
                </Menu.Item>
                <Menu.Item
                  name='About'
                  active={activeItem === 'About'}
                  onClick={this.handleItemClick}
                >
                  <Link to='/about'>About</Link>
                </Menu.Item>

                <Menu.Item as='a' href='#form' name='Contact' active={activeItem === 'Contact'} onClick={this.handleItemClick}>
                  Contact
                </Menu.Item>

                <Menu.Item
                  name='Reviews'
                  active={activeItem === 'Reviews'}
                  onClick={this.handleItemClick}
                ><Link to='/reviews'>Reviews</Link></Menu.Item>

                <Menu.Item
                  name='Acolades'
                  active={activeItem === 'Acolades'}
                  onClick={this.handleItemClick}
                >

                  <Link to='/acolades'>Acolades</Link>
                </Menu.Item>
              </Menu>
            </div>
            <Switch>
              <Route exact path="/" component={Home} />
              <Route path="/about" component={About} />
              <Route path="/reviews" render={props => <Reviews {...props} reviews={reviews} fetchReviews={this.fetchReviews} concatReviews={this.concatReviews} />} />
              <Route component={NoTfound} />
            </Switch>
            <Header as='h1' textAlign='center'>Contact:</Header>
            <Segment raised color='black'>
              <Form id='form' onSubmit={this.postMessage} className={this.state.warning}>
                <Form.Group widths='equal'>
                  <Form.Input onChange={(e) => this.setState({ parentFirst: e.target.value })} value={this.state.parentFirst} required fluid label='Your First name' placeholder='First name' />
                  <Form.Input onChange={(e) => this.setState({ parentLast: e.target.value })} value={this.state.parentLast} required fluid label='Your Last name' placeholder='Last name' />
                </Form.Group>
                <Form.Group widths='equal'>
                  <Form.Input onChange={(e) => this.setState({ studentFirst: e.target.value })} value={this.state.studentFirst} required fluid label='Student First name' placeholder='First name' />
                  <Form.Input onChange={(e) => this.setState({ studentLast: e.target.value })} value={this.state.studentLast} required fluid label='Student Last name' placeholder='Last name' />
                  <Form.Select required fluid selection value={value} onChange={this.handleDropChange} label='Subject' options={options} placeholder='Subject' />
                </Form.Group>
                <Form.Group inline>


                  <Form.Radio
                    label='More Info Please'
                    value='sm'
                    checked={this.state.radioValue === 'sm'}
                    onChange={this.handleChange}
                  />
                  <Form.Radio
                    label='Set Up Appointment'
                    value='md'
                    checked={this.state.radioValue === 'md'}
                    onChange={this.handleChange}
                  />
                  <Form.Radio
                    label='Ect'
                    value='lg'
                    checked={this.state.radioValue === 'lg'}
                    onChange={this.handleChange}
                  />
                </Form.Group>
                <Form.Group widths='equal'>
                  <Form.Input required fluid label='Email' onChange={(e) => this.setState({ email: e.target.value })} value={this.state.email} placeholder='Example@example.com' />
                  <Form.Input required fluid label='Phone #' onChange={(e) => this.setState({ phone: e.target.value })} value={this.state.phone} placeholder='Phone #' />
                  <Form.Input fluid onChange={(e) => this.setState({ whenToContact: e.target.value })} value={this.state.whenToContact} label='When is a good time to contact you?' placeholder='Let me know when!' />
                </Form.Group>
                <Form.TextArea label='Message to Matt:' onChange={(e) => this.setState({ message: e.target.value })} value={this.state.message} placeholder='Tell us more about your student...' />
                <Form.Checkbox toggle onChange={() => this.setState({ checked: !this.state.checked })} label='I Would like to get in contact ASAP' />
                <Message success header='Form Completed' content="Thank you for your intrest! I will be in contact with you soon!" />
                <Form.Button fluid>Submit</Form.Button>
              </Form>
            </Segment>
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
                  
                  Home<Icon name='home' />
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
                <Menu.Item as='a' href='https://www.youtube.com/watch?v=dQw4w9WgXcQ' target="_blank">
                  <Icon name='file' />
                  Resume
                </Menu.Item>
                <Menu.Item style={style.contact}>
                  <Menu.Item as='a' href='https://www.linkedin.com/in/mathew-floerke-b71471115/' target="_blank">
                    <Icon name='linkedin' />
                    LinkedIn
                  </Menu.Item>
                  <Menu.Item as='a' href="mailto:mat.floerke@gmail.com ">
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
                  <Route component={NoTfound} />
                </Switch>
                <Header as='h1' textAlign='center'>Contact:</Header>
                <Segment raised color='black'>
                  <Form id='form' onSubmit={this.postMessage} className={this.state.warning}>
                    <Form.Group widths='equal'>
                      <Form.Input onChange={(e) => this.setState({ parentFirst: e.target.value })} value={this.state.parentFirst} required fluid label='Your First name' placeholder='First name' />
                      <Form.Input onChange={(e) => this.setState({ parentLast: e.target.value })} value={this.state.parentLast} required fluid label='Your Last name' placeholder='Last name' />
                    </Form.Group>
                    <Form.Group widths='equal'>
                      <Form.Input onChange={(e) => this.setState({ studentFirst: e.target.value })} value={this.state.studentFirst} required fluid label='Student First name' placeholder='First name' />
                      <Form.Input onChange={(e) => this.setState({ studentLast: e.target.value })} value={this.state.studentLast} required fluid label='Student Last name' placeholder='Last name' />
                      <Form.Select required fluid selection value={value} onChange={this.handleDropChange} label='Subject' options={options} placeholder='Subject' />
                    </Form.Group>
                    <Form.Group inline>


                      <Form.Radio
                        label='More Info Please'
                        value='sm'
                        checked={this.state.radioValue === 'sm'}
                        onChange={this.handleChange}
                      />
                      <Form.Radio
                        label='Set Up Appointment'
                        value='md'
                        checked={this.state.radioValue === 'md'}
                        onChange={this.handleChange}
                      />
                      <Form.Radio
                        label='Ect'
                        value='lg'
                        checked={this.state.radioValue === 'lg'}
                        onChange={this.handleChange}
                      />
                    </Form.Group>
                    <Form.Group widths='equal'>
                      <Form.Input required fluid label='Email' onChange={(e) => this.setState({ email: e.target.value })} value={this.state.email} placeholder='Example@example.com' />
                      <Form.Input required fluid label='Phone #' onChange={(e) => this.setState({ phone: e.target.value })} value={this.state.phone} placeholder='Phone #' />
                      <Form.Input fluid onChange={(e) => this.setState({ whenToContact: e.target.value })} value={this.state.whenToContact} label='When is a good time to contact you?' placeholder='Let me know when!' />
                    </Form.Group>
                    <Form.TextArea label='Message to Matt:' onChange={(e) => this.setState({ message: e.target.value })} value={this.state.message} placeholder='Tell us more about your student...' />
                    <Form.Checkbox toggle onChange={() => this.setState({ checked: !this.state.checked })} label='I Would like to get in contact ASAP' />
                    <Message success header='Form Completed' content="Thank you for your intrest! I will be in contact with you soon!" />
                    <Form.Button fluid>Submit</Form.Button>
                  </Form>
                </Segment>
                
              </Sidebar.Pusher>
            </Sidebar.Pushable>
          </Responsive>
          <ScrollButton scrollStepInPx="50" delayInMs="16.66"/>
        </div> : <div><Loader active>Loading...</Loader></div>}
      </div>
    )
  }
}

export default App;
