// ProjectCard.jsx - Project card component

export default function ProjectCard({ project }) {
  return (
    <div className="project-card">
      <h3>{project?.name || 'Project Name'}</h3>
      <p>{project?.description || 'Project description'}</p>
    </div>
  );
}
