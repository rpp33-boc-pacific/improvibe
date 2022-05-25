import LayerList from '../components/projectEditor/LayerList'
import ProjectHeader from '../components/projectEditor/ProjectHeader'
import AddLayer from '../components/projectEditor/AddLayer'
import NewProject from '../components/projectEditor/NewProject'
import ProjectList from '../components/projectEditor/ProjectList'

export default function Editor() {
  return (
    <>
      <h1>Edit Project</h1>
      <div className='main'>
        <div className='layers'>
          <div>
            <ProjectHeader />
            <LayerList />
            <AddLayer />
          </div>
        </div>
        <div className='projects'>
          <h2>My Projects</h2>
          <NewProject />
          <ProjectList />
        </div>
      </div>
    </>
  );
}