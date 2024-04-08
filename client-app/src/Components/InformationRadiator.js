import React, { useState, useEffect } from 'react';
import axios from 'axios';

const ProjectStatus = () => {
  const [owner, setOwner] = useState('');
  const [repo, setRepo] = useState('');
  const [token, setToken] = useState('');
  const [issueStats, setIssueStats] = useState({ total: 0, open: 0, closed: 0 });
  const [collaborationData, setCollaborationData] = useState([]);

  useEffect(() => {
    // Fetch owner, repo, and token from GitHub repo (replace with your repo URL)
    const fetchRepoInfo = async () => {
      try {
        const response = await axios.get('https://github.com/slu-csci-5030/material-donor-mutual-assist');
        const { owner: { login }, name } = response.data;
        setOwner(login);
        setRepo(name);
        // Set your GitHub personal access token here
        setToken('your_personal_access_token');
      } catch (error) {
        console.error('Error fetching repository information:', error);
      }
    };

    fetchRepoInfo();
  }, []);

  useEffect(() => {
    if (owner && repo && token) {
      const fetchData = async () => {
        try {
          // Fetch issue data
          const issueResponse = await axios.get(`https://github.com/slu-csci-5030/material-donor-mutual-assist/repos/${owner}/${repo}/issues`, {
            headers: {
              Authorization: `token ${token}`
            }
          });

          // Calculate issue stats
          const totalIssues = issueResponse.data.length;
          const openIssues = issueResponse.data.filter(issue => issue.state === 'open').length;
          const closedIssues = totalIssues - openIssues;
          setIssueStats({ total: totalIssues, open: openIssues, closed: closedIssues });

          // Fetch collaboration data
          const collaborationResponse = await axios.get(`https://github.com/slu-csci-5030/material-donor-mutual-assist/${owner}/${repo}/stats/contributors`, {
            headers: {
              Authorization: `token ${token}`
            }
          });

          // Calculate collaboration data
          const collaborationData = collaborationResponse.data.map(contributor => ({
            name: contributor.author.login,
            commits: contributor.total
          }));
          setCollaborationData(collaborationData);
        } catch (error) {
          console.error('Error fetching data:', error);
        }
      };

      fetchData();
    }
  }, [owner, repo, token]);

  return (
    <div className="project-status">
      <h2>Project Status</h2>
      <div className="status-summary">
        <p>Total Issues: {issueStats.total}</p>
        <p>Open Issues: {issueStats.open}</p>
        <p>Closed Issues: {issueStats.closed}</p>
      </div>
      <div className="collaboration-graph">
        <h3>Collaboration Graph</h3>
        {/* Render graph using collaborationData */}
        <div className="graph">
          {collaborationData.map((member) => (
            <div key={member.name}>
              <p>{member.name}</p>
              <p>Commits: {member.commits}</p>
              {/* You can use CSS to style the graph */}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ProjectStatus;


