import Header from '../header/Header'
import Content from '../content/Content'
import Collection from '../collection/Collection'
import CollectionItemInfo from '../collectionItemInfo/CollectionItemInfo'
import RandomItem from '../randomItem/RandomItem'

import './App.css'

function App() {
  return (
    <div className="App">
      <Header />
      <RandomItem />
      <Content
        collection={<Collection />}
        collectionItemInfo={<CollectionItemInfo />}
      />
    </div>
  )
}

export default App
