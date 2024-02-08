import { useEffect, useState } from "react";
import { useLoaderData, Link } from "react-router-dom";

function Github() {
  const data = useLoaderData();

  return (
    <div className="h-screen w-screen  flex items-center justify-center">
      <div className="bg-gray-800 text-white p-8 rounded-lg shadow-lg text-center">
        <img
          src={data.avatar_url}
          alt={`Profile of ${data.login}`}
          className="mx-auto rounded-full mb-4"
          style={{ width: '150px', height: '150px' }}
        />
        <h2 className="text-3xl font-bold mb-2">{data.name}</h2>
        <p className="text-gray-400 mb-4">@{data.login}</p>
        <p className="text-lg">
          GitHub Followers: <span className="text-blue-500">{data.followers}</span>
        </p>
        <p className="text-lg">
          Public Repositories: <span className="text-blue-500">{data.public_repos}</span>
        </p>
        <Link
          to={data.html_url}
          target="_blank"
          className="text-blue-500 underline hover:text-blue-400"
        >
          View on GitHub
        </Link>
      </div>
    </div>
  );
}

export default Github;

export const githubInfoLoader = async () => {
  const response = await fetch('https://api.github.com/users/yuv-raj-25');
  return response.json();
};

