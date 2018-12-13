import React from 'react'
import { List, Rating } from 'semantic-ui-react'

const Review = ({review}) => (
    <List.Item>
      <List.Icon name='marker' />
      <List.Content>
        <List.Header style={{marginBottom: '1vw'}} as='h3'>{review.name}</List.Header>
        <List.Description>
          {review.description}
        </List.Description>
        <List.Item style={{marginTop: '1vw'}}>
            Subject: {review.subject}
        </List.Item>
        <List.Item>
            <Rating style={{marginTop: '1vw'}} size='large' icon='star' defaultRating={review.rating} maxRating={5} disabled/>
        </List.Item>
      </List.Content>
    </List.Item>
)

export default Review
