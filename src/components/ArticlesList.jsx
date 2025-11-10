export default function ArticlesList({ articles }) {




    return (
        <ul className="list-group">
            {
                articles.map((el) => (
                    <li key={el.id} className="list-group-item"><strong>{el.name}</strong></li>
                ))
            }

        </ul>
    )
}