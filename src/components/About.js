import React from 'react'
import { Container, Header, Image, List, Icon, Segment } from 'semantic-ui-react'

const About = () => (
  <div className='about'>
    <Container fluid textAlign='justified'>
    <Segment raised>
      <Header as='h2' textAlign='center'>Dogs Roles with Humans (About Me)</Header>
    <Image src='/floerke.jpg' size='medium' centered/>
      <p>
        Domestic dogs inherited complex behaviors, such as bite inhibition, from their wolf
        ancestors, which would have been pack hunters with complex body language. These
        sophisticated forms of social cognition and communication may account for their
        trainability, playfulness, and ability to fit into human households and social situations,
        and these attributes have given dogs a relationship with humans that has enabled them to
        become one of the most successful species on the planet today.
      </p>
      <p>
        The dogs' value to early human hunter-gatherers led to them quickly becoming ubiquitous
        across world cultures. Dogs perform many roles for people, such as hunting, herding, pulling
        loads, protection, assisting police and military, companionship, and, more recently, aiding
        handicapped individuals. This impact on human society has given them the nickname "man's
        best friend" in the Western world. In some cultures, however, dogs are also a source of
        meat.
      </p>
      </Segment>
      <Segment raised>
      <Header as='h2' textAlign='center'>Teaching Ideals</Header>
      <p>
      Lorem ipsum dolor amet polaroid four dollar toast lumbersexual shaman swag echo park, 
      knausgaard blue bottle tote bag biodiesel letterpress sustainable squid. Typewriter 
      iceland coloring book cornhole, direct trade wayfarers neutra polaroid. Kitsch retro 
      green juice chia, jianbing austin freegan iceland actually stumptown thundercats wayfarers 
      flannel. Kitsch palo santo adaptogen four loko, vape wolf fanny pack try-hard tumeric 
      cardigan fashion axe butcher umami prism. Aesthetic lumbersexual tote bag, normcore shoreditch 
      ennui shaman yr tumblr marfa stumptown whatever. Sriracha banjo DIY literally. Stumptown yr pug, 
      wayfarers direct trade microdosing salvia polaroid actually prism organic.
      </p>
      <p>
      Godard post-ironic vexillologist fanny pack butcher man braid vaporware beard 
      knausgaard. Snackwave polaroid kogi, flannel raclette viral blog ramps next level 
      jean shorts mustache. Locavore food truck 3 wolf moon, bespoke humblebrag salvia 
      semiotics. Tacos authentic deep v blog jean shorts tilde listicle schlitz. Meggings 
      seitan vice organic, keytar pug chillwave four loko cred pok pok la croix taiyaki 
      vinyl. Man bun migas helvetica tbh authentic echo park 8-bit whatever hell of tumblr 
      deep v snackwave quinoa shabby chic aesthetic.
      </p>
      </Segment>
      <Header as='h2' textAlign='center'>Subjects I Tutor In</Header>
      <List animated verticalAlign='middle' size='huge' style={{display: 'flex', flexDirection: 'column', alignItems: 'center'}}>
        <List.Item>
          <Icon name='superscript'/>
          <List.Content>
            <List.Header>Math</List.Header>
              <List.List>
                <List.Item>
                   - Algebra I & II
                </List.Item>
                <List.Item>
                   - Geometry
                </List.Item>
                <List.Item>
                   - Pre-Calculus
                </List.Item>
                <List.Item>
                   - Calculus I-III
                </List.Item>
              </List.List>
          </List.Content>
        </List.Item>
        <List.Item>
          <Icon name='edit'/>
          <List.Content>
            <List.Header>ACT/SAT Prep</List.Header>
            <List.List>
                <List.Item>
                   - Option I
                </List.Item>
                <List.Item>
                   - Option II
                </List.Item>
                <List.Item>
                   - Option III
                </List.Item>
                <List.Item>
                   - Option IV
                </List.Item>
              </List.List>
          </List.Content>
        </List.Item>
        <List.Item>
          <Icon name='balance scale'/>
          <List.Content>
            <List.Header>Physics</List.Header>
            <List.List>
                <List.Item>
                   - Option I
                </List.Item>
                <List.Item>
                   - Option II
                </List.Item>
                <List.Item>
                   - Option III
                </List.Item>
                <List.Item>
                   - Option IV
                </List.Item>
              </List.List>
          </List.Content>
        </List.Item>
      </List>

    </Container>
  </div>
)

export default About
