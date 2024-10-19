import axios from 'axios';

// Function to fetch data from both APIs
export async function fetchGithubAndDevData() {
  const projectsURL = 'https://api.github.com/users/GKcodebase/repos';
  const devURL = 'https://dev.to/api/articles?username=gokul_gk';
  const itchUrl = 'https://itch.io/api/1/VXhPwiRkgWjRmZMnvP0P0KFAiKALLwMwKQvreyam/my-games';

  try {
    const [projectsResponse, devResponse] = await Promise.all([
      axios.get(projectsURL),
      axios.get(devURL)
    ]);

    return {
      projects: projectsResponse.data,
      articles: devResponse.data
    };
  } catch (error) {
    console.error('Error fetching data:', error);
    return {
      projects: [],
      articles: [],
      itch: []
    };
  }
}

export async function fetchGameData() {
  const itchUrl = 'https://itch.io/api/1/VXhPwiRkgWjRmZMnvP0P0KFAiKALLwMwKQvreyam/my-games';

  // Custom headers
  const customHeaders = {
    'Access-Control-Allow-Origin': '*',
    'Access-Control-Allow-Methods': 'GET',
    'Access-Control-Allow-Headers': 'Content-Type'
  };

  // Axios instance with custom headers
  const axiosInstance = axios.create({
    headers: customHeaders
  });

  try {
    const [ itchResponse] = await Promise.all([
      axiosInstance.get(itchUrl)
    ]);

    return {
      itch: itchResponse.data
    };
  } catch (error) {
    console.error('Error fetching data:', error);
    return {
      itch: []
    };
  }
}
