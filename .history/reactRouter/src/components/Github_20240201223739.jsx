import { useEffect, useState } from "react";
import { useLoaderData } from "react-router-dom";

function Github() {
  const data = useLoaderData();

  return (
    <div className="bg-gray-800 text-white p-8 shadow-lg text-center">
      <img
        src={data.avatar_url}
        alt={`Profile of ${data.login}`}
        className="mx-auto rounded-full mb-4"
        style={{ width: '150px', height: '150px' }}
      />
      <h2 className="text-2xl font-bold mb-2">{data.name}</h2>
      <p className="text-gray-400 mb-4">@{data.login}</p>
      <p className="text-lg">
        GitHub Followers: <span className="text-blue-500">{data.followers}</span>
      </p>
      <p className="text-lg">
        Public Repositories: <span className="text-blue-500">{data.public_repos}</span>
      </p>
      <a
        href={data.html_url}
        target="_blank"
        rel="noopener noreferrer"
        className="text-blue-500 underline hover:text-blue-400"
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

