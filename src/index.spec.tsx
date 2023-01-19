import { render, screen } from '@testing-library/react';
import { App } from 'app';

describe('index file', () => {
  it('works', () => {
    render(<App />);

    expect(
      screen.getByText(
        /Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam nesciunt, quam voluptatem laborum ducimus/i
      )
    ).toBeInTheDocument();
  });
});
