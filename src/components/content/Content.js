const Content = (props) => {
  return (
    <div className="container px-4 text-center">
      <div className="row g-4">
        <div className="col-12 col-lg-8 order-last order-lg-first">
          <div>{props.collection}</div>
        </div>
        <div className="col col-lg-4">
          <div>{props.collectionItemInfo}</div>
        </div>
      </div>
    </div>
  )
}

export default Content
