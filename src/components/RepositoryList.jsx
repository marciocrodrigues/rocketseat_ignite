import { useState, useEffect } from "react";
import { RepositoryItem } from "./RepositoryItem";

import '../styles/repositories.scss';

// https://api.github.com/orgs/rocketseat/repos

const repository = {
    name: 'unform',
    description: 'Forms in react',
    link: 'https://www.google.com.br'
}

export function RepositoryList() {
    const [repositories, setRepositories] = useState([]);

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
                    repositories.map((repository) => <RepositoryItem key={repository.name} repository={repository} />)
                }
            </ul>
        </section>
    )
}