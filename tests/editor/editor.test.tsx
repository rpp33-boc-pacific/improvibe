import { render, screen } from '@testing-library/react';
import LayerList from '../../components/projectEditor/LayerList';
import Project from '../../sample-data/project';

const sammpleProject = Project;

describe('Layers', () => {
  it('Has a UL to hold layers', () => {
    render(<LayerList layers={ sammpleProject.layers } />);
    const list = screen.getByRole('list-layers');
    expect(list).toBeInTheDocument();
  });

  it('Renders multiple layers', async () => {
    render(<LayerList layers={ sammpleProject.layers } />);
    const layersRendered = await screen.findAllByRole('layer')
    expect(layersRendered).toHaveLength(2);
  });
});
