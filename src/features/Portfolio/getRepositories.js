export const getRepositories = async () => {
    const response = await fetch("https://api.github.com/users/alajurczak/repos");

    if (!response.ok) {
        throw new Error(response.statusText);
    }

    return await response.json();
};