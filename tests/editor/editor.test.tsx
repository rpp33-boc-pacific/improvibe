import { render, screen, fireEvent } from '@testing-library/react';
import LayerList from '../../components/projectEditor/LayerList';

describe('Layers', () => {
  it('Has a UL to hold layers', () => {
    const layers = [{ id: 1 }, { id: 2 }, { id: 3}];
    render(<LayerList layers={ layers } />);
    const list = screen.getByRole('list-layers');
    expect(list).toBeInTheDocument();
  });

  it('Renders multiple layers', async () => {
    const layers = [{ id: 1 }, { id: 2 }, { id: 3}];
    render(<LayerList layers={ layers } />);
    const layersRendered = await screen.findAllByRole('layer')
    expect(layersRendered).toHaveLength(3);
  });
});
