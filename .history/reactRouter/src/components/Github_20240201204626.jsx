import { useEffect, useState } from "react";

function Github() {
  // const {data , setData} = useState([]);

  const [data, setData] = useState([]);

  useEffect(() => {
    fetch("https://api.github.com/users/hiteshchodhary")
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        console.log(data);
        setData(data);
      })
      .catch((error) => console.log(error));
  }, []);

  return (
    <div
      className="bg-gray-500 text-3xl text-white p-4
     text-center m-4"
    >
      Github Followers : {data.followers}
    </div>
  );
}

export default Github;
