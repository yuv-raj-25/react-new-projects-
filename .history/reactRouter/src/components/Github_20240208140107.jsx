import { useEffect } from "react";
import { useLoaderData, Link } from "react-router-dom";

function Github() {
  const data = useLoaderData();

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-900">
      <div className="max-w-md w-full bg-white p-8 rounded-lg shadow-lg text-center transform transition-transform hover:scale-105">
        <img
          src={data.avatar_url}
          alt={`Profile of ${data.login}`}
          className="mx-auto rounded-full mb-4 shadow-lg"
          style={{ width: '150px', height: '150px' }}
        />
        <h2 className="text-3xl font-bold mb-2 text-gray-800 hover:text-blue-500 transition-colors">
          {data.name || data.login}
        </h2>
        <p className="text-gray-500 mb-4">@{data.login}</p>
        <p className="text-lg text-gray-700 mb-2">
          GitHub Followers:{" "}
          <span className="text-blue-500 hover:underline transition-colors">
            {data.followers}
          </span>
        </p>
        <p className="text-lg text-gray-700 mb-4">
          Public Repositories:{" "}
          <span className="text-blue-500 hover:underline transition-colors">
            {data.public_repos}
          </span>
        </p>
        <Link
          to={data.html_url}
          target="_blank"
          className="block bg-blue-500 text-white py-2 px-4 rounded-md hover:bg-blue-400 transition-colors"
        >
          View on GitHub
        </Link>
      </div>
    </div>
  );
}

export default Github;

export const githubInfoLoader = async () => {
  const response = await fetch('https://api.github.com/users/DHRUV-');
  return response.json();
};
