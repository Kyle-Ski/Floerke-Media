import React from 'react';
import { Segment, Header } from 'semantic-ui-react'
import { Route, Link } from 'react-router-dom'
import Home from './Home'

const NoTfound = () => (
    <Segment>
        <Header as='h1'>404 Not Found</Header>
        <Header as='h2'>Opps, It looks like that page doesnt exist!</Header>
        <Header as='h2'><Link to='/'>Go Back Home</Link></Header>
    </Segment>
)
export default NoTfound