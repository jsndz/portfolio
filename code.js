const fetchGitHubRepos = async (username) => {
  try {
    const response = await fetch(
      `https://api.github.com/users/${username}/repos`
    );
    if (!response.ok) {
      throw new Error(`GitHub API error: ${response.status}`);
    }
    const data = await response.json();
    const repositories = data.map((repo) => ({
      name: repo.name,
      language: repo.language,
    }));
    console.log(repositories);
  } catch (error) {
    console.error("Error fetching repositories:", error);
  }
};

// Usage
fetchGitHubRepos("jsndz");
