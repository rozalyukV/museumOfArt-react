import { Component } from 'react'
import ErrorMessage from '../errorMessage/ErrorMessage'
import Spinner from '../spinner/Spinner'
import Service from '../services/Service'

class RandomItem extends Component {
  state = {
    item: {},
    loading: true,
    error: false,
  }

  service = new Service()

  componentDidMount() {
    this.updateItem()
  }

  onItemLoaded = (item) => {
    this.setState({ item, loading: false })
  }

  onError = () => {
    this.setState({
      loading: false,
      error: true,
    })
  }

  updateItem = () => {
    const id = Math.floor(Math.random() * (894313 - 1) + 1)
    this.service.getItem(id).then(this.onItemLoaded).catch(this.onError)
  }

  render() {
    const { item, loading, error } = this.state
    const errorMessage = error ? <ErrorMessage /> : null
    const spinner = loading ? <Spinner /> : null
    const content = !(loading || error) ? <View item={item} /> : null

    return (
      <div className="container px-4 my-4">
        <div className="row row-cols-1 row-cols-md-2 g-4">
          {errorMessage}
          {spinner}
          {content}
          <div className="col">
            <div className="card h-100 shadow-lg">
              <div className="card-body d-flex flex-column justify-content-between">
                <h5 className="card-title">Random work of art for today!</h5>
                <div>
                  <p className="card-text">
                    Want to know more about this work of art?
                  </p>
                  <p className="fw-bold">Or choose another one!</p>
                </div>

                <button
                  type="button"
                  className="btn btn-outline-dark text-uppercase"
                >
                  Try it!
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

const View = ({ item }) => {
  const {
    title,
    objectDate,
    medium,
    city,
    country,
    primaryImageSmall,
    artistDisplayName,
    objectURL,
    objectWikidata_URL,
  } = item

  return (
    <div className="col">
      <div className="card h-100 shadow-lg">
        <div className="row g-0">
          <div className="col-md-4 d-flex align-items-center p-3 justify-content-center">
            <img
              src={primaryImageSmall}
              className="img-fluid"
              alt="Image of Art object"
            />
          </div>
          <div className="col-md-8 d-flex flex-column justify-content-between">
            <div className="card-body">
              <h5 className="card-title">{title}</h5>
              <p className="card-text">
                <span className="fw-bold">Materials:</span> {medium}
              </p>
              <p className="card-text">
                <span className="fw-bold">City:</span> {city}
              </p>
              <p className="card-text">
                <span className="fw-bold">Country:</span> {country}
              </p>
              <p className="card-text">
                <span className="fw-bold">Creation time:</span> {objectDate}
              </p>
              <p className="card-text">
                <span className="fw-bold">Artist:</span> {artistDisplayName}
              </p>
            </div>

            <div className="d-flex justify-content-end me-3 mb-3">
              <a
                href={objectURL}
                className="btn btn-outline-dark text-uppercase"
              >
                Homepage
              </a>
              <a
                href={objectWikidata_URL}
                className="btn btn-outline-dark text-uppercase ms-3"
              >
                Wiki
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default RandomItem
