const RandomItem = () => {
  return (
    <div className="container px-4 my-4">
      <div className="row row-cols-1 row-cols-md-2 g-4">
        <div className="col">
          <div className="card h-100">
            <div className="row g-0">
              <div className="col-md-4">
                <img src="..." className="card-img-top" alt="..." />
              </div>
              <div className="col-md-8">
                <div className="card-body">
                  <h5 className="card-title">Card title</h5>
                  <p className="card-text">
                    This is a longer card with supporting text below as a
                    natural lead-in to additional content.
                  </p>
                  <a href="#" className="btn btn-primary me-3">
                    Card link
                  </a>
                  <a href="#" className="btn btn-primary">
                    Another link
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="col">
          <div className="card h-100 text-bg-dark">
            <img src="..." className="card-img" alt="..." />
            <div className="card-img-overlay">
              <h5 className="card-title">Card title</h5>
              <p className="card-text">
                This is a wider card with supporting text below as a natural
                lead-in to additional content. This content is a little bit
                longer.
              </p>
              <button type="button" className="btn btn-primary">
                Primary
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default RandomItem
