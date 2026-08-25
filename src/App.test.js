// src/App.test.js
import { render, screen } from '@testing-library/react';
import App from './App';

test('renders OrbitOrbit title', () => {
    render(<App />);
    const titleElement = screen.getByText(/OrbitOrbit/i);
    expect(titleElement).toBeInTheDocument();
});
