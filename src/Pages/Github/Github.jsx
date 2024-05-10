import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import axios from "axios";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import { faCss3Alt, faReact } from "@fortawesome/free-brands-svg-icons";
import { faJs } from "@fortawesome/free-brands-svg-icons";
import { faHtml5 } from "@fortawesome/free-brands-svg-icons";

import {
  fetchReposFailure,
  fetchReposRequest,
  fetchReposSuccess,
} from "../../redux/action";

import "./Github.css";

function Github() {
  const dispatch = useDispatch();
  const repos = useSelector((state) => state.repos);
  const error = useSelector((state) => state.error);
  const accessKey = import.meta.env.VITE_ACCESS_KEY;

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
    }
    fetchRepos();
  }, [dispatch]);

  const filteredRepos = repos.filter((repo) =>
    ["To-do-list", "Solaris_FE23-Jonathan_Tirapegui"].includes(repo.name)
  );

  return (
    <div className="github-container">
      <div className="github-title">
        <h1>My GitHub Repositories</h1>
      </div>

      {error && <p>Error: {error}</p>}

      <div className="ul-flexbox">
        {" "}
        <div className="repo-cards">
          {filteredRepos.map((repo, index) => (
            <div className="repo-card" key={repo.id}>
              <a
                className="link-style"
                href={repo.html_url}
                target="_blank"
                rel="noopener noreferrer"
                style={{ width: "60%" }}
              >
                <h3 className="repo-card-title">{repo.name}</h3>

                {index === 0 && ( // Villkorsstyrd rendering för att visa ikonen bara på det första kortet
                  <span className="icons">
                    <FontAwesomeIcon
                      className="javascript-icon"
                      icon={faJs}
                      size="4x"
                    />

                    <FontAwesomeIcon
                      className="css-icon"
                      icon={faCss3Alt}
                      size="4x"
                    />
                    <FontAwesomeIcon
                      className="html-icon"
                      icon={faHtml5}
                      size="4x"
                    />
                  </span>
                )}
                {index === 1 && ( // Villkorsstyrd rendering för att visa ikonen bara på det första kortet
                  <span className="icons-second">
                    <FontAwesomeIcon
                      className="javascript-icon"
                      icon={faReact}
                      size="4x"
                    />

                    <FontAwesomeIcon
                      className="css-icon"
                      icon={faCss3Alt}
                      size="4x"
                    />
                    <FontAwesomeIcon
                      className="html-icon"
                      icon={faHtml5}
                      size="4x"
                    />
                  </span>
                )}
              </a>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Github;
