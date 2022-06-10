import { render, screen } from '@testing-library/react';
import LayerList from '../../components/projectEditor/LayerList';
import { ProjectContextProvider } from '../../components/projectEditor/ProjectContext';

describe('Layers', () => {
  it('Has a UL to hold layers', () => {
    render(
      <ProjectContextProvider>
        <LayerList />
      </ProjectContextProvider>
      );
    const list = screen.getByRole('list-layers');
    expect(list).toBeInTheDocument();
  });

  // it('Renders multiple layers', async () => {
  //   render(
  //     <ProjectContextProvider>
  //       <LayerList />
  //     </ProjectContextProvider>
  //     );
  //   const layersRendered = await screen.findAllByRole('layer')
  //   expect(layersRendered).toHaveLength(0);
  // });
});
