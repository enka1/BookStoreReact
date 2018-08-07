import React, {Component} from 'react'
import styled from 'styled-components'
export class BookSlider extends Component {
  render() {
    return (
      <SliderLayout>
        <div id="bookSliders" class="carousel slide" data-ride="carousel">
          <ol class="carousel-indicators">
            <li data-target="#bookSliders" data-slide-to="0" class="active"></li>
            <li data-target="#bookSliders" data-slide-to="1"></li>
            <li data-target="#bookSliders" data-slide-to="2"></li>
          </ol>
          <div class="carousel-inner">
            <div class="carousel-item active"></div>
          </div>
          <a
            class="carousel-control-prev"
            href="#bookSliders"
            role="button"
            data-slide="prev">
            <span class="carousel-control-prev-icon" aria-hidden="true"></span>
            <span class="sr-only">Previous</span>
          </a>
          <a
            class="carousel-control-next"
            href="#bookSliders"
            role="button"
            data-slide="next">
            <span class="carousel-control-next-icon" aria-hidden="true"></span>
            <span class="sr-only">Next</span>
          </a>
        </div>
      </SliderLayout>
    )
  }
}

const SliderLayout = styled.div `
  max-height: 50vh;
`

const SliderItem = styled.div `
    background-size:cover;
    background-attachment: fixed;
    background-position: center;
    background-image: linear-gradient() url(${props => props.image_url});

`