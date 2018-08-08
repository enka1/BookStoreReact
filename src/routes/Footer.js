import React, {Component} from 'react'
import styled from 'styled-components'

export class Footer extends Component {
  render() {
    return (
      <FooterLayout></FooterLayout>
    )
  }
}

const FooterLayout = styled.div `
    clip-path: polygon(0 0, 100% 20%, 100% 100%, 0% 100%);
    min-height: 70vh;
    background-attachment:fixed;
    background-position:center;
    background-size: cover;
    background-image: linear-gradient(315deg, rgba(127, 90, 131, 0.2) 0%, rgba(13, 50, 77, 0.7) 74%),url(https://i.pinimg.com/originals/13/e2/31/13e231f172b55a6e6e5deda3889cb5dc.jpg);

`