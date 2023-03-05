import { Component } from 'react'

import Header from '../header/Header'
import Content from '../content/Content'
import Collection from '../collection/Collection'
import CollectionItemInfo from '../collectionItemInfo/CollectionItemInfo'
import RandomItem from '../randomItem/RandomItem'
import ErrorBoundary from '../errorBoundary/ErrorBoundary'

class App extends Component {
  state = {
    selectedItem: null,
  }

  onItemSelected = (id) => {
    this.setState({
      selectedItem: id,
    })
  }

  render() {
    return (
      <div className="App">
        <Header />
        <ErrorBoundary>
          <RandomItem />
        </ErrorBoundary>
        <Content
          collection={
            <ErrorBoundary>
              <Collection onItemSelected={this.onItemSelected} />
            </ErrorBoundary>
          }
          collectionItemInfo={
            <ErrorBoundary>
              <CollectionItemInfo itemId={this.state.selectedItem} />
            </ErrorBoundary>
          }
        />
      </div>
    )
  }
}

export default App
