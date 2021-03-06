import React, { Component } from 'react'
import Review from './Review'
import { List, Segment, Form, Rating, Message, Header, Button } from 'semantic-ui-react'

const options = [
    { key: 'p', text: 'Physics', value: 'Physics' },
    { key: 's', text: 'Science', value: 'Science' },
    { key: 'c', text: 'Chemistry', value: 'Chemistry' },
    { key: 'm', text: 'Math', value: 'Math' },
    { key: 'u', text: 'Multiple', value: 'Multiple' },
  ]

class Reviews extends Component {
    state = {
        name: '',
        description: '',
        subject: '',
        rating: 5,
        warning: 'null'
    }

    handleDropChange = (e, { value }) => this.setState({ value })

    handleRate = (e, { rating }) => this.setState({ rating })

    postReview = () => {
        const data = {
            name: this.state.name,
            description: this.state.description,
            subject: this.state.value,
            rating: this.state.rating,
        }
        if(data.description.length > 505){
            this.setState({warning: 'warning'})
        } else {
            fetch('http://localhost:3222/reviews',{
                method: 'POST',
                headers: {
                    "Content-Type": "application/json; charset=utf-8"
                },
                body: JSON.stringify(data)
            })
            .then(res => res.json())
            .then(res => {
                console.log(res)
                if(res.error){
                    this.setState({warning: 'warning'})
                    return res
                } else {
                    this.setState({
                        name: '',
                        description: '',
                        subject: '',
                        rating: 5,
                        warning: 'success'
                    })
                }
                return res
            })
            .then(this.props.fetchReviews)
            .then(setTimeout(() => this.setState({warning: null}), 3000))
            .catch(err => console.error(err))
        }
    }

    render(){
        const {reviews} = this.props
        const {value, warning} = this.state
        return(
            <div>
                <Segment>
                    <List divided>
                        <Header as='h1' textAlign='center'>What Others Have Been Saying:</Header>
                        {reviews.map((review, i) => {
                            return <Review key={i} review={review} />
                        })}
                    </List>
                </Segment>
                <Segment>
                    <Header as='h1' textAlign='center' >Please Leave A Review!</Header>
                    <Form id='form' onSubmit={this.postReview} className={warning}>
                        <Message success header='Form Completed' content="Thank you for your review!" />
                        <Message warning header='Input too long' content={`Thank you for the Review! However, ${this.state.description.length} characters is too long. Could you be more concise? (Idealy 505 characters)`} />
                        <Form.Group widths='equal'>
                            <Form.Input onChange={(e) => this.setState({ name: e.target.value })} value={this.state.name} required fluid label='Your name' placeholder='Name..' />
                        </Form.Group>
                        <Form.Group widths='equal'>
                            <Form.Select required fluid selection value={value} onChange={this.handleDropChange} label='Subject Tutored In:' options={options} placeholder='Subject' />
                        </Form.Group>
                        <Form.TextArea required label='Review:' onChange={(e) => this.setState({ description: e.target.value })} value={this.state.description} placeholder='Write your review...' />
                        <Rating required style={{ marginTop: '1vw', marginBottom: '1vw' }} size='massive' icon='star' onRate={this.handleRate} defaultRating={5} maxRating={5} />
                        <Form.Button fluid>Submit</Form.Button>
                    </Form>
                </Segment>
            </div>
        )
    }
}
export default Reviews
