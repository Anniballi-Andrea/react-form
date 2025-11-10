import ArticlesList from "./components/ArticlesList"

function App() {

  const games =
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
        <ArticlesList articles={games} />

      </div>
    </>
  )
}

export default App
