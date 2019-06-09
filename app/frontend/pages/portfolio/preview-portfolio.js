import React, { Component } from 'react'
import AliceCarousel from 'react-alice-carousel'
import 'react-alice-carousel/lib/alice-carousel.css'
import Image from '~base/components/image'
import api from '~base/api'

export default class PreviewBlog extends Component {
  constructor(props) {
    super(props)
    this.state = {
      items: [],
    }
  }

  async componentDidMount() {
    await this.loadData()
  }

  async loadData() {
    const { data } = await api.get('/public/blog')

    this.setState({
      items: data,
    })
  }

  render() {
    const responsive = {
      0: { items: 2 },
      1024: { items: 3 },
    }
    const { items } = this.state
    return (
      <section className="hero is-light">
        <div className="hero-body">
          <div className="container">
            <div className="columns">
              <div className="column is-4" />
              <div className="column">
                <AliceCarousel
                  dotsDisabled
                  buttonsDisabled
                  mouseDragEnabled
                  responsive={responsive}
                >
                  {
                    items.map((item) => (
                      <div className="is-padding-left-small is-padding-right-small">
                        <Image
                          style={{
                            height: 250, width: 600,
                          }}
                          className="is-border-radius"
                          src={item.imagePreview}
                          onDragStart={(e) => this.handleOnDragStart(e)}
                        />
                      </div>
                    ))
                  }

                </AliceCarousel>
              </div>
            </div>
          </div>
        </div>
      </section>
    )
  }
}
