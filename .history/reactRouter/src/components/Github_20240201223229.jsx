import { useEffect, useState } from "react";
import { useLoaderData } from "react-router-dom";

function Github() {
  const data = useLoaderData();

  const [repoLanguages, setRepoLanguages] = useState([]);

  useEffect(() => {
    const fetchRepoLanguages = async () => {
      try {
        const repoResponse = await fetch(data.repos_url);
        const repos = await repoResponse.json();

        const languages = repos.reduce((acc, repo) => {
          if (repo.language && !acc.includes(repo.language)) {
            acc.push(repo.language);
          }
          return acc;
        }, []);

        setRepoLanguages(languages);
      } catch (error) {
        console.error("Error fetching repository languages:", error);
      }
    };

    fetchRepoLanguages();
  }, [data.repos_url]);

  return (
    <div className="bg-gray-800 text-white p-8 rounded-lg shadow-lg text-center">
      <img
        src={data.avatar_url}
        alt={`Profile of ${data.login}`}
        className="mx-auto rounded-full mb-4"
        style={{ width: '150px', height: '150px' }}
      />
      <h2 className="text-2xl font-bold mb-2">{data.name || data.login}</h2>
      {data.bio && <p className="text-gray-400 mb-4">{data.bio}</p>}
      <p className="text-lg">
        GitHub Followers: <span className="text-blue-500">{data.followers}</span>
      </p>
      <p className="text-lg">
        Public Repositories: <span className="text-blue-500">{data.public_repos}</span>
      </p>
      {repoLanguages.length > 0 && (
        <p className="text-lg">
          Languages:{" "}
          {repoLanguages.map((language, index) => (
            <span key={index} className="text-blue-500">
              {language}
              {index !== repoLanguages.length - 1 && ", "}
            </span>
          ))}
        </p>
      )}
      {data.location && (
        <p className="text-lg">
          Location: <span className="text-blue-500">{data.location}</span>
        </p>
      )}
      <a
        href={data.html_url}
        target="_blank"
        rel="noopener noreferrer"
        className="text-blue-500 underline hover:text-blue-400 mt-4 block"
      >
        View on GitHub
      </a>
    </div>
  );
}

export default Github;

export const githubInfoLoader = async () => {
  const response = await fetch('https://api.github.com/users/yuv-raj-25');
  return response.json();
};

