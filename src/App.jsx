import AddArtcles from "./components/AddArticles"
import ArticlesList from "./components/ArticlesList"

function App() {

  const boardGames =
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

    ]

  return (
    <>
      <div className="container">
        <AddArtcles />
        <div className="col sm-6">
          <div className="card mt-5 pt-3">
            <h5>LIST OF FAVORITE BOARD GAMES: </h5>
            <ArticlesList articles={boardGames} />
          </div>
        </div>

      </div>
    </>
  )
}

export default App
