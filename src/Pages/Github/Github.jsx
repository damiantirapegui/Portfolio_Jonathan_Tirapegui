import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import axios from "axios";
import {
  fetchReposFailure,
  fetchReposRequest,
  fetchReposSuccess,
} from "../../redux/action";
// import {
//   fetchReposFailure,
//   fetchReposRequest,
//   fetchReposSuccess,
// }
//  from "../../redux/actions";
import "./Github.css";

function Github() {
  const dispatch = useDispatch();
  const repos = useSelector((state) => state.repos);
  const error = useSelector((state) => state.error);
  const accessKey = import.meta.env.VITE_ACCESS_KEY;
  console.log(accessKey);
  useEffect(() => {
    async function fetchRepos() {
      dispatch(fetchReposRequest());
      try {
        const response = await axios.get("https://api.github.com/user/repos", {
          headers: {
            Authorization: `Bearer ${accessKey}`,
          },
        });
        dispatch(fetchReposSuccess(response.data));
      } catch (error) {
        dispatch(fetchReposFailure(error.message));
      }
      console.log("hej");
      console.log(accessKey);
    }
    fetchRepos();
  }, [dispatch]);

  return (
    <div className="github-container">
      <div className="github-title">
        <h1>My GitHub Repositories</h1>
      </div>

      {error && <p>Error: {error}</p>}

      <div className="ul-flexbox">
        {" "}
        <div className="repo-card">
          <ul className="list-container">
            {repos &&
              repos.map((repo) => (
                <li className="links" key={repo.id}>
                  <a
                    className="link-style"
                    href={repo.html_url}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    {repo.name}
                  </a>{" "}
                </li>
              ))}
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Github;
