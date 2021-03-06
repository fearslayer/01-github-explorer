export function RepositoryItem(props) {
    return (
        <li>
            <strong>{props.repository?.name ?? 'Default'}</strong>
            <p>{props.description}</p>

            <a href={props.repository.link}>
                Acessar repositório
            </a>
        </li>
    )
}