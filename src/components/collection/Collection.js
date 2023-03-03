import { Component } from 'react'
import ErrorMessage from '../errorMessage/ErrorMessage'
import Spinner from '../spinner/Spinner'
import Service from '../services/Service'

import imgNone from '../../resources/img/no-image-100.png'

class Collection extends Component {
  state = {
    collection: [],
    loading: true,
    error: false,
    offset: 3200,
  }

  service = new Service()

  componentDidMount() {
    this.service
      .getCollection(this.state.offset)
      .then(this.onCollectionLoaded)
      .catch(this.onError)
  }

  onCollectionLoaded = (collection) => {
    this.setState({ collection, loading: false })
  }

  onError = () => {
    this.setState({
      loading: false,
      error: true,
    })
  }

  renderItems(arr) {
    const items = arr.map((item) => {
      let styles = null
      if (item.primaryImageSmall === imgNone) {
        styles = { objectFit: 'none' }
      }
      return (
        <div className="col" key={item.objectID}>
          <div className="card h-100 shadow-lg">
            <img
              src={item.primaryImageSmall}
              className="img-fluid p-3"
              style={styles}
              alt="Work of art"
            />
            <div className="card-body d-flex flex-column justify-content-end">
              <h5 className="card-title">{item.title}</h5>
              <p className="card-text">
                {!(item.artistDisplayName === '-')
                  ? item.artistDisplayName
                  : null}
              </p>
              <p className="card-text">
                {!(
                  item.artistBeginDate === '...' && item.artistEndDate === '...'
                )
                  ? `${item.artistBeginDate} - ${item.artistEndDate}`
                  : null}
              </p>
            </div>
          </div>
        </div>
      )
    })

    return (
      <div className="row row-cols-1 row-cols-md-2 row-cols-xl-3 g-4">
        {items}
      </div>
    )
  }

  render() {
    const { collection, loading, error } = this.state
    const items = this.renderItems(collection)

    const errorMessage = error ? <ErrorMessage /> : null
    const spinner = loading ? <Spinner /> : null
    const content = !(loading || error) ? items : null

    return (
      <div className="container p-0 pb-5">
        <div className="row mb-5">
          <div className="col">
            {errorMessage}
            {spinner}
            {content}
          </div>
        </div>
        <div className="row">
          <div className="col">
            <button
              type="button"
              className="btn btn-dark text-uppercase"
              style={{ width: '180px' }}
              onClick={this.updateItem}
            >
              Load more
            </button>
          </div>
        </div>
      </div>
    )
  }
}

export default Collection
