import React from 'react';
import { Segment, Header, List } from 'semantic-ui-react'

const Recources = () => (
    <Segment >
        <Header textAlign='center' as='h1'>Here are some good studying Recources!</Header>
        <List>
    <List.Item style={{alignSelf: 'center'}}>
      <List.Icon name='superscript' size='large' />
      <List.Content>
        <List.Header as='h3'>Math</List.Header>
        <List.Description>
         <List.List>
             <List.Header as='a' href='https://www.khanacademy.org/math/algebra'>Khan Aacdemy</List.Header>
             <List.Description>
                 Great for beginers
             </List.Description>
         </List.List>
         <List.List>
             <List.Header as='a' href='https://www.khanacademy.org/math/algebra'>Khan Aacdemy</List.Header>
             <List.Description>
                 Great for beginers
             </List.Description>
         </List.List>
         <List.List>
             <List.Header as='a' href='https://www.khanacademy.org/math/algebra'>Khan Aacdemy</List.Header>
             <List.Description>
                 Great for beginers
             </List.Description>
         </List.List>
        </List.Description>
      </List.Content>
    </List.Item>
    <List.Item>
    <List.Icon name='edit' size='large' />
      <List.Content>
        <List.Header as='h3'>Test Taking</List.Header>
        <List.Description>
         <List.List>
             <List.Header as='a' href='https://www.khanacademy.org/math/algebra'>ACT Prep</List.Header>
             <List.Description>
                 Great for beginers
             </List.Description>
         </List.List>
         <List.List>
             <List.Header as='a' href='https://www.khanacademy.org/math/algebra'>SAT Prep</List.Header>
             <List.Description>
                 Great for beginers
             </List.Description>
         </List.List>
         <List.List>
             <List.Header as='a' href='https://www.khanacademy.org/math/algebra'>General</List.Header>
             <List.Description>
                 Good tool for all types of test taking
             </List.Description>
         </List.List>
        </List.Description>
      </List.Content>
    </List.Item>
    <List.Item>
      <List.Icon name='balance scale' size='large' />
      <List.Content>
        <List.Header as='h3'>Physics</List.Header>
        <List.Description>
         <List.List>
             <List.Header as='a' href='https://www.khanacademy.org/math/algebra'>Density</List.Header>
             <List.Description>
                 Great for beginers
             </List.Description>
         </List.List>
         <List.List>
             <List.Header as='a' href='https://www.khanacademy.org/math/algebra'>Formulas</List.Header>
             <List.Description>
                 Great for beginers
             </List.Description>
         </List.List>
         <List.List>
             <List.Header as='a' href='https://www.khanacademy.org/math/algebra'>Experiments</List.Header>
             <List.Description>
                 Great for beginers
             </List.Description>
         </List.List>
        </List.Description>
      </List.Content>
    </List.Item>
  </List>
    </Segment>
)
export default Recources