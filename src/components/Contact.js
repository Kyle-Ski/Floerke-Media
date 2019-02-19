import React from 'react'
import AppContext from '../context'
import { Form, Segment, Message, Header } from 'semantic-ui-react'

const Contact = ({state, handleDropChange, postMessage, handleChange}) => (
    <Segment raised color='black'>
    <Header as='h1'>Contact:</Header>
        <Form id='form' onSubmit={postMessage} className={state.warning}>
            <Form.Group widths='equal'>
                <Form.Input name='parentFirst' onChange={handleChange} value={state.parentFirst} required fluid label='Your First name' placeholder='First name' />
                <Form.Input name='parentLast' onChange={handleChange} value={state.parentLast} required fluid label='Your Last name' placeholder='Last name' />
            </Form.Group>
            <Form.Group widths='equal'>
                <Form.Input name='studentFirst' onChange={handleChange} value={state.studentFirst} required fluid label='Student First name' placeholder='First name' />
                <Form.Input name='studentLast' onChange={handleChange} value={state.studentLast} required fluid label='Student Last name' placeholder='Last name' />
            </Form.Group>
            <Form.Group widths='equal'>
                <Form.Select required fluid selection value={state.value} onChange={handleDropChange} label='Subject' options={state.options} placeholder='Subject..' />
                <Form.Select required fluid selection value={state.value} onChange={handleDropChange} label='Grade' options={state.grade} placeholder='Grade..' />
                <Form.Input name='school' required fluid label='School Name' onChange={handleChange} value={state.school} placeholder='School...' />
            </Form.Group>
            <Form.Group widths='equal'>
                <Form.Input name='email' required fluid label='Email' onChange={handleChange} value={state.email} placeholder='Example@example.com' />
                <Form.Input name='phone' required fluid label='Phone #' onChange={handleChange} value={state.phone} placeholder='Phone #' />
                <Form.Input name='whenToContact' fluid onChange={handleChange} value={state.whenToContact} label='When is a good time to contact you?' placeholder='Let me know when!' />
            </Form.Group>
            <Form.TextArea name='message' label='Message to Mathew:' onChange={handleChange} value={state.message} placeholder='Tell us more about your student...' />
            <Form.Input name='refrence' label='How did you find out about me?' onChange={handleChange} value={state.refrence} placeholder='Refrence...' />
            {/* <Form.Checkbox toggle onChange={() => this.setState({ checked: !this.state.checked })} label='I Would like to get in contact ASAP' /> */}
            <Message success header='Form Completed' content="Thank you for your intrest! I will be in contact with you soon!" />
            <Form.Button fluid>Submit</Form.Button>
        </Form>
    </Segment>

)

export default () => (
    <AppContext.Consumer>
        {({data, actions}) => <Contact state={data} postMessage={actions.postMessage} handleDropChange={actions.handleDropChange} handleChange={actions.handleChange}/>}
    </AppContext.Consumer>
)