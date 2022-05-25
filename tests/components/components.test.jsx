import { fireEvent, render, screen } from '@testing-library/react';
import AddToProjects from '../../components/reusable/AddToProjects';


describe('Like Button', () => {
  it('Renders "add to projects" button', () => {
    render(<AddToProjects />);

    const addButton = screen.getByRole('button', {
      name: /add-project/i,
    });
    expect(addButton).toBeInTheDocument();
  })
  it('Renders "Clicking "add to projects" removes button from UI', () => {
    render(<AddToProjects />);

    fireEvent.click(screen.getByRole('button', {
      name: /add-project/i,
    }))

    const unlikeButton = screen.queryByRole('button', {
      name: /add-project/i,
    });
    expect(unlikeButton).not.toBeInTheDocument();
  })
})