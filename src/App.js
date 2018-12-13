import React, { Component } from 'react';
import { Form, Menu, Segment, Header, Message, Loader, Responsive } from 'semantic-ui-react'
import { Route, Link, Switch } from 'react-router-dom'
import About from './components/About'
import Reviews from './components/Reviews'
import NoTfound from './components/NoTfound'
import Home from './components/Home'
import MainNav from './components/MainNav'
import MobileNav from './components/MobileNav'
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
    avgReview: 0
  }

  getASAP = () => this.setState({ checked: !this.state.checked })
  getPhone = (e) => this.setState({ phone: e.target.value })
  getEmail = (e) => this.setState({ email: e.target.value })
  getMessage = (e) => this.setState({ message: e.target.value })
  getWhenToContact = (e) => this.setState({ whenToContact: e.target.value })
  getStudentLast = (e) => this.setState({ studentLast: e.target.value })
  getStudentFirst = (e) => this.setState({ studentFirst: e.target.value })
  getParentLast = (e) => this.setState({ parentLast: e.target.value })
  getParentFirst = (e) => this.setState({ parentFirst: e.target.value })
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
    fetch('http://localhost:3222/send',{
      method: 'POST',
      mode: 'cors',
      headers: {
      "Content-Type": "application/json; charset=utf-8"
    },
    body: JSON.stringify(data)
    })
    .then(res => res.json())
    .then(res => {
      if(res.success){
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
    this.setState({error: true})
  }

  fetchReviews = () => {
    return fetch('http://localhost:3222/reviews')
    .then(res => res.json())
    .then(res => this.setState({reviews: res.reviews}))
    .then(this.getAvgReviews)
  }

  getAvgReviews = () => {
    const total = this.state.reviews.reduce((accum, review) => {
      return accum + review.rating
    },0)
    const avg = total/this.state.reviews.length 
    this.setState({avgReview: avg.toFixed(2)})
    return avg.toFixed(2)
  }

  concatReviews = (res) => {
    this.setState({reviews: [...this.state.reviews, res]})
    return res
  } 

  componentDidMount(){
    this.fetchReviews()
      .then(() => this.setState({loaded: true}))
      .catch(this.errorHandler)
  }

  render() {
    const { value, activeItem, reviews } = this.state
    return (
      <div>
      {this.state.loaded ? <div>
      <Responsive minWidth={768}>
      <MainNav 
        getASAP={this.getASAP}
        getPhone={this.getPhone}
        getEmail={this.getEmail}
        getMessage={this.getMessage}
        getWhenToContact={this.getWhenToContact}
        getStudentLast={this.getStudentLast}
        getStudentFirst={this.getStudentFirst}
        getParentLast={this.getParentLast}
        getParentFirst={this.getParentFirst}
        fetchReviews={this.fetchReviews}
        reviews={reviews}
        handleItemClick={this.handleItemClick} 
        activeItem={activeItem}
        postMessage={this.postMessage}
        warning={this.state.warning}
        parentFirst={this.state.parentFirst}
        parentLast={this.state.parentLast}
        studentFirst={this.state.studentFirst}
        studentLast={this.state.studentLast}
        value={value}
        handleDropChange={this.state.handleDropChange}
        options={options}
        radioValue={this.state.radioValue}
        handleChange={this.handleChange}
        email={this.state.email}
        phone={this.state.phone}
        whenToContact={this.state.whenToContact}
        message={this.state.message}
        checked={this.state.checked}
      />
      </Responsive>
      <Responsive maxWidth={767}>
      <MobileNav 
        getASAP={this.getASAP}
        getPhone={this.getPhone}
        getEmail={this.getEmail}
        getMessage={this.getMessage}
        getWhenToContact={this.getWhenToContact}
        getStudentLast={this.getStudentLast}
        getStudentFirst={this.getStudentFirst}
        getParentLast={this.getParentLast}
        getParentFirst={this.getParentFirst}
        fetchReviews={this.fetchReviews}
        reviews={reviews}
        handleItemClick={this.handleItemClick} 
        activeItem={activeItem}
        postMessage={this.postMessage}
        warning={this.state.warning}
        parentFirst={this.state.parentFirst}
        parentLast={this.state.parentLast}
        studentFirst={this.state.studentFirst}
        studentLast={this.state.studentLast}
        value={value}
        handleDropChange={this.state.handleDropChange}
        options={options}
        radioValue={this.state.radioValue}
        handleChange={this.handleChange}
        email={this.state.email}
        phone={this.state.phone}
        whenToContact={this.state.whenToContact}
        message={this.state.message}
        checked={this.state.checked}
      />
      </Responsive> 
      <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/about" component={About} />
          <Route path="/reviews" render={props => <Reviews {...props} reviews={reviews} fetchReviews={this.fetchReviews} concatReviews={this.concatReviews} />} />
          <Route component={NoTfound} />
      </Switch></div>: <div><Loader active>Loading...</Loader></div>}      
      </div>
    )
  }}

export default App;
