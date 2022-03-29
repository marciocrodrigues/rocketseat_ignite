export interface RepositoryItemProps {
    repository: Repository;
}

export interface Repository {
    name: string;
    description: string;
    html_url: string;
}