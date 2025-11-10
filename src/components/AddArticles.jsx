import { useState } from "react"

export default function AddArtcles() {

    const [article, setArticle] = useState("Aggiungi un gioco")





    return (
        <form >
            <div className="input-group mt-5">
                <input
                    type="text"
                    className="form-control"
                    value={article}
                    onChange={e => { setArticle(e.target.value) }}

                />
                <button className="btn btn-outline-secondary" type="button">Confirm</button>
            </div>
        </form>
    )


}