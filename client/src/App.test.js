import { render, screen } from '@testing-library/react';
import App from './App';
test('renders Update Customer and related components', () => {
    render(<Home />)
    const linkElement = screen.getByTestId("add");
    expect(linkElement).toBeInTheDocument();
    //expect(screen.getByRole("heading")).toHaveTextContent(/Admin Panel/);
    expect(screen.getByRole("button", {name: "Add user"})).toBeInTheDocument;
    const inputNode = screen.getByPlaceholderText('Email');
    expect(inputNode).toBeInTheDocument;
    const inputNode2 = screen.getByPlaceholderText('Lastname');
    expect(inputNode2).toBeInTheDocument;
    const inputNode3 = screen.getByPlaceholderText('Firstname');
    expect(inputNode3).toBeInTheDocument;
    const inputNode4 = screen.getByPlaceholderText('Age');
    expect(inputNode4).toBeInTheDocument;
});

test('renders Update Customer and related components', () => {
    render(<Details />)
    const linkElement = screen.getByTestId("add");
    expect(linkElement).toBeInTheDocument();
    expect(screen.getByRole("heading")).toHaveTextContent(/Admin Panel/);
    expect(screen.getByRole("button", {name: "Add user"})).toBeInTheDocument;
    const inputNode = screen.getByPlaceholderText('Email');
    expect(inputNode).toBeInTheDocument;
    const inputNode2 = screen.getByPlaceholderText('Lastname');
    expect(inputNode2).toBeInTheDocument;
    const inputNode3 = screen.getByPlaceholderText('Firstname');
    expect(inputNode3).toBeInTheDocument;
    const inputNode4 = screen.getByPlaceholderText('Age');
    expect(inputNode4).toBeInTheDocument;
});