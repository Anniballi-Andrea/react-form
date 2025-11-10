import { useState } from "react"

export default function AddArtcles({ array, setArray }) {

    const [article, setArticle] = useState("")


    const handleAddObject = event => {
        event.preventDefault()

        const newArticles = [...array, { name: article, id: array.length + 1 }]
        setArray(newArticles)



    }



    return (
        <form onSubmit={handleAddObject}>
            <div className="input-group mt-5">
                <input
                    type="text"
                    className="form-control"
                    value={article}
                    onChange={e => { setArticle(e.target.value) }}

                />
                <button className="btn btn-outline-secondary" type="submit">Confirm</button>
            </div>
        </form>
    )


}