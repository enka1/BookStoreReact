import React, {Component} from 'react'
import styled from 'styled-components'
export class Footer extends Component {
  render() {
    return (
      <FooterLayout>
        <div className="row">
          <div className="container">
            <div className="row d-flex align-items-center">
              <div className="col-5">
                <div className="form-group">
                  <input placeholder="Họ và tên *" type="text" className="form-control"/>
                </div>
                <div className="form-group">
                  <input placeholder="Địa chỉ Email *" type="text" className="form-control"/>
                </div>
                <div className="form-group">
                  <textarea placeholder="Nội dung" rows={7} type="text" className="form-control"/>
                </div>
                <div className="btn btn-success py-3 btn-block mt-4">Liên lạc với chúng tôi</div>
              </div>
              <div className="col-7">
                <div className="embed-responsive embed-responsive-16by9">
                  <iframe
                    title="map"
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3918.8038576208005!2d106.68411491472966!3d10.826317261231441!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x317528fa43e44925%3A0x6665aab0a034afee!2zMzcgTmd1eeG7hW4gRHUsIFBoxrDhu51uZyA3LCBHw7IgVuG6pXAsIEjhu5MgQ2jDrSBNaW5oLCBWaeG7h3QgTmFt!5e0!3m2!1svi!2s!4v1535626915954"
                    allowFullScreen></iframe>
                </div>
              </div>
            </div>
          </div>
        </div>
      </FooterLayout>
    )
  }
}

const FooterLayout = styled.div `
  background-image: url(https://static.zerochan.net/Pixiv.Id.420740.full.1717265.jpg);
  background-size: cover;
  background-attachment: fixed;
  background-position: center;
  padding-top: 5rem;
  padding-bottom: 10rem;
  font-size: 1.3rem;  
  margin-top: 3rem;
  .btn{
    font-size: inherit;
  }
  input{
    font-size: 1.2rem;
    height: 3.6rem;
  }
  textarea{
    font-size: 1.2rem;
  }
`