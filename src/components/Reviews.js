import React, { Component } from 'react'
import Review from './Review'
import { List, Segment, Form, Rating, Message, Divider, Header } from 'semantic-ui-react'

const options = [
    { key: 'p', text: 'Physics', value: 'Physics' },
    { key: 's', text: 'Science', value: 'Science' },
    { key: 'c', text: 'Chemistry', value: 'Chemistry' },
    { key: 'm', text: 'Math', value: 'Math' },
    { key: 'u', text: 'Multiple', value: 'Multiple' },
  ]

class Reviews extends Component {
    state={
        reviews: [
            {
                name: 'Jill Jillison',
                description: `The dogs' value to early human hunter-gatherers led to them quickly becoming ubiquitous
                across world cultures. Dogs perform many roles for people, such as hunting, herding, pulling
                loads, protection, assisting police and military, companionship, and, more recently, aiding
                handicapped individuals. This impact on human society has given them the nickname "man's
                best friend" in the Western world. In some cultures, however, dogs are also a source of
                meat.`,
                subject: 'Math',
                rating: 4
            },
            {
                name: 'Bill Williamson',
                description: `The dogs' value to early human hunter-gatherers led to them quickly becoming ubiquitous
                across world cultures. Dogs perform many roles for people, such as hunting, herding, pulling
                loads, protection, assisting police and military, companionship, and, more recently, aiding
                handicapped individuals. This impact on human society has given them the nickname "man's
                best friend" in the Western world. In some cultures, however, dogs are also a source of
                meat.`,
                subject: 'Physics',
                rating: 5
            }
        ],
        name: '',
        description: '',
        subject: '',
        rating: 5
    }

    handleDropChange = (e, { value }) => this.setState({ value })

    handleRate = (e, { rating }) => this.setState({ rating })

    render(){
        const {reviews, value} = this.state
        return(
            <div>
            <Segment>
            <List divided>
                {reviews.map((review ,i) =>{
                    return <Review key={i} review={review}/>
                })}
            </List>
            </Segment>
            <Segment>
            <Header as='h1' textAlign='center' >Please Leave A Review!</Header>
            <Form id='form' >
        <Form.Group widths='equal'>
          <Form.Input onChange={(e) => this.setState({name: e.target.value})} value={this.state.parentFirst} required fluid label='Your name' placeholder='Name..' />
        </Form.Group>
        <Form.Group widths='equal'>
          <Form.Select required fluid selection value={value} onChange={this.handleDropChange} label='Subject Tutored In:' options={options} placeholder='Subject' />
        </Form.Group>
        <Form.TextArea required label='Review:' onChange={(e) => this.setState({description: e.target.value})} value={this.state.message} placeholder='Write your review...' />
        <Rating required style={{marginTop: '1vw', marginBottom: '1vw'}} size='massive' icon='star' onRate={this.handleRate} defaultRating={5} maxRating={5} />
        <Message success header='Form Completed' content="Thank you for your intrest! I will be in contact with you soon!" />
        <Form.Button fluid>Submit</Form.Button>
      </Form>

            </Segment>
            </div>
        )
    }
}
export default Reviews