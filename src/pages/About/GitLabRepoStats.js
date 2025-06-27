import React, { useState, useEffect } from 'react';
import axios from 'axios';

const GitLabRepoStats = ({ username, authorName }) => {
  const [commitCount, setCommitCount] = useState(null);
  const [issueCount, setIssueCount] = useState(null);
  const [error, setError] = useState(null);

  const GITLAB_API_BASE = 'https://gitlab.com/api/v4';
  const PROJECT_ID = '71128845';
  const TOKEN = 'glpat-HynxUcstUbRvdkMkBao_'; // move to backend/env vars for production

  const headers = { 'PRIVATE-TOKEN': TOKEN };

  useEffect(() => {
    if (!username || !authorName) return; // skip if missing

    const fetchStats = async () => {
      try {
        // Fetch commits (first 100)
        const commitsRes = await axios.get(
          `${GITLAB_API_BASE}/projects/${PROJECT_ID}/repository/commits?per_page=100`,
          { headers }
        );
        const commits = commitsRes.data;

        // Filter commits by authorName (case-insensitive)
        const userCommitCount = commits.filter(
          (commit) => commit.author_name.toLowerCase() === authorName.toLowerCase()
        ).length;

        // Fetch issues (first 100)
        const issuesRes = await axios.get(
          `${GITLAB_API_BASE}/projects/${PROJECT_ID}/issues?state=all&per_page=100`,
          { headers }
        );
        const issues = issuesRes.data;

        // Filter issues by username (case-insensitive)
        const userIssueCount = issues.filter(
          (issue) => issue.author?.username?.toLowerCase() === username.toLowerCase()
        ).length;

        setCommitCount(userCommitCount);
        setIssueCount(userIssueCount);
      } catch (err) {
        console.error('GitLab API error:', err);
        setError('Failed to fetch user stats');
      }
    };

    fetchStats();
  }, [username, authorName]);

  if (error) {
    return <p style={{ color: 'red' }}>{error}</p>;
  }

  if (commitCount === null || issueCount === null) {
    return <p>Loading stats...</p>;
  }

  return (
    <div>
      <p><strong>Commits:</strong> {commitCount}</p>
      <p><strong>Issues:</strong> {issueCount}</p>
    </div>
  );
};

export default GitLabRepoStats;