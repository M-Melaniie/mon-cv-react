import React, { useEffect, useState } from "react";
import "../styles/GitHubProfile.css"; 
function GitHubProfile() {
  const [profile, setProfile] = useState(null);
  const GITHUB_USERNAME = "github-john-doe"; 

  useEffect(() => {
    fetch(`https://api.github.com/users/${GITHUB_USERNAME}`)
      .then((response) => response.json())
      .then((data) => setProfile(data))
      .catch((error) => console.error("Erreur lors du fetch GitHub:", error));
  }, []);

  if (!profile) {
    return <p>Chargement des données GitHub...</p>;
  }

  return (
    <div className="github-profile">
      <h2>Github user</h2>
      <h3>{profile.name}</h3>
      <img src={profile.avatar_url} alt={profile.login} width="150" />
      <p>{profile.bio}</p>
      <p>Abonnés : {profile.followers}</p>
      <p>Abonnements : {profile.following}</p>
      <p>Créé le : {new Date(profile.created_at).toLocaleDateString()}</p>
      <p>Modifié le : {new Date(profile.updated_at).toLocaleDateString()}</p>
      <p>
        <a
          href={profile.repos_url}
          target="_blank"
          rel="noopener noreferrer"
        >
          Voir mes repositories GitHub
        </a>
      </p>
    </div>
  );
}

export default GitHubProfile;