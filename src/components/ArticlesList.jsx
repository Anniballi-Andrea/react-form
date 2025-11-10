export default function ArticlesList({ array, setArray }) {



    function handleRemove(index) {

        //console.log(index)

        const filtredArray = array.filter((el) => el.id != index)

        console.log(filtredArray)
        setArray(filtredArray)
    }






    return (
        <>
            {array.length > 0 && (
                <ul className="list-group">
                    {
                        array.map((el) => (
                            <li key={el.id} className="list-group-item d-flex justify-content-between align-items-center">
                                <strong>
                                    {el.name}
                                </strong>
                                <div>
                                    <button className="btn btn-danger py-1" onClick={() => handleRemove(el.id)}>X</button>
                                </div>
                            </li>
                        ))
                    }

                </ul>
            )}

            {array.length === 0 && (
                <p className="px-3"><strong>Add a board game to the list</strong></p>
            )}


        </>
    )
}