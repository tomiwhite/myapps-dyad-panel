// ProjectView.jsx - Project details view component

export default function ProjectView({ projectId }) {
  return (
    <div className="project-view">
      <h2>Project Details</h2>
      <div className="project-content">
        <p>Project ID: {projectId || 'N/A'}</p>
      </div>
    </div>
  );
}
