import React, { Component } from 'react';
import { Form, Menu, Segment, Header, Message, Loader, Responsive } from 'semantic-ui-react'
import { Route, Link, Switch } from 'react-router-dom'
import About from './About'
import Reviews from './Reviews'
import NoTfound from './NoTfound'

const Home = ({getASAP, getParentLast, getPhone, getEmail, getMessage, getWhenToContact, getStudentLast, getStudentFirst, getParentFirst, fetchReviews, reviews, postMessage, warning, parentFirst, parentLast, studentFirst, studentLast, value, handleDropChange, options, radioValue, handleChange, email, phone, whenToContact, message, checked}) => (
    <div>
    <Segment>
        <Header as='h1'>Welcome To Floerke's Tutoring Page!</Header>
    </Segment>
    <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/about" component={About} />
        <Route path="/reviews" render={props => <Reviews {...props} reviews={reviews} fetchReviews={fetchReviews} concatReviews={this.concatReviews} />} />
        <Route component={NoTfound} />
    </Switch>

        <Header as='h1' textAlign='center'>Contact:</Header>
        <Segment raised color='black'>
            <Form id='form' onSubmit={postMessage} className={warning}>
                <Form.Group widths='equal'>
                    <Form.Input onChange={getParentFirst} value={parentFirst} required fluid label='Your First name' placeholder='First name' />
                    <Form.Input onChange={getParentLast} value={parentLast} required fluid label='Your Last name' placeholder='Last name' />
                </Form.Group>
                <Form.Group widths='equal'>
                    <Form.Input onChange={getStudentFirst} value={studentFirst} required fluid label='Student First name' placeholder='First name' />
                    <Form.Input onChange={getStudentLast} value={studentLast} required fluid label='Student Last name' placeholder='Last name' />
                    <Form.Select required fluid selection value={value} onChange={handleDropChange} label='Subject' options={options} placeholder='Subject' />
                </Form.Group>
                <Form.Group inline>


                    <Form.Radio
                        label='More Info Please'
                        value='sm'
                        checked={radioValue === 'sm'}
                        onChange={handleChange}
                    />
                    <Form.Radio
                        label='Set Up Appointment'
                        value='md'
                        checked={radioValue === 'md'}
                        onChange={handleChange}
                    />
                    <Form.Radio
                        label='Ect'
                        value='lg'
                        checked={radioValue === 'lg'}
                        onChange={handleChange}
                    />
                </Form.Group>
                <Form.Group widths='equal'>
                    <Form.Input required fluid label='Email' onChange={getEmail} value={email} placeholder='Example@example.com' />
                    <Form.Input required fluid label='Phone #' onChange={getPhone} value={phone} placeholder='Phone #' />
                    <Form.Input fluid onChange={getWhenToContact} value={whenToContact} label='When is a good time to contact you?' placeholder='Let me know when!' />
                </Form.Group>
                <Form.TextArea label='Message to Matt:' onChange={getMessage} value={message} placeholder='Tell us more about your student...' />
                <Form.Checkbox toggle onChange={getASAP} label='I Would like to get in contact ASAP' />
                <Message success header='Form Completed' content="Thank you for your intrest! I will be in contact with you soon!" />
                <Form.Button fluid>Submit</Form.Button>
            </Form>
        </Segment>     
</div>
)
export default Home