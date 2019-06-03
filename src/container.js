import React from 'react'
import ContactCard from './contactCard.js'

const Container = () => {
  return (
    <div className="Con">
      <ContactCard fullName="Garrison Shepard" email="gt123@me.com"
      mobile="123-456-1345"  work="888-567-4666"></ContactCard>
      <ContactCard fullName="Bob Marely" email="bb@me.com"
      mobile="456-664-6788" work="234-567-3222"></ContactCard>
      <ContactCard fullName="Sam Smith" email="ss23@me.com"
      mobile="345-567-3455" work="667-654-3456"></ContactCard>
    </div>
  )
}
export default Container
