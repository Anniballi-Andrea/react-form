export default function ArticlesList({ array }) {




    return (
        <ul className="list-group">
            {
                array.map((el) => (
                    <li key={el.id} className="list-group-item"><strong>{el.name}</strong></li>
                ))
            }

        </ul>
    )
}