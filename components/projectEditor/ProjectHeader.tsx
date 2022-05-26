import PlayProject from "./PlayProject";
import GenreSelector from "./GenreSelector";

function ProjectHeader() {

  return (
    <>
      <PlayProject />
      <h3>Song Name</h3>
      <GenreSelector />
    </>
  );
}

export default ProjectHeader;