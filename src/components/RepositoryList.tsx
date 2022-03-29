import { useState, useEffect } from "react";
import { RepositoryItem } from "./RepositoryItem";

import '../styles/repositories.scss';
import { Repository } from "../interfaces/RepositoryItemProps";

export function RepositoryList() {
    const [repositories, setRepositories] = useState<Repository[]>([]);

    useEffect(() => {
        fetch('https://api.github.com/orgs/rocketseat/repos')
            .then(response => response.json())
            .then(data => setRepositories(data))
            .catch(error => console.log('get repositories', error));
    }, []);

    return (
        <section className="repository-list">
            <h1>Lista de repositórios</h1>

            <ul>
                {
                    repositories.map((repository: Repository) => <RepositoryItem key={repository.name} repository={repository} />)
                }
            </ul>
        </section>
    )
}