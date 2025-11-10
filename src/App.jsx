import { useState } from "react"
import AddArtcles from "./components/AddArticles"
import ArticlesList from "./components/ArticlesList"

function App() {

  const [boardGames, setBoardGames] = useState(
    [
      {
        name: "monopoly",
        id: 1
      },
      {
        name: "exploding kittens",
        id: 2
      },
      {
        name: "risiko",
        id: 3
      }

    ])

  return (
    <>
      <div className="container">
        <AddArtcles array={boardGames} setArray={setBoardGames} />
        <div className="col sm-6">
          <div className="card mt-5 pt-3">
            <h5 className='px-3'>LIST OF FAVORITE BOARD GAMES: </h5>
            <ArticlesList array={boardGames} setArray={setBoardGames} />
          </div>
        </div>

      </div>
    </>
  )
}

export default App
