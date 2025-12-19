import { describe, it, expect } from 'vitest';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import FilterBar from '../components/FilterBar';

describe('FilterBar', () => {
  it('renders filter buttons', () => {
    render(<FilterBar setFilter={() => {}} setSort={() => {}} setSearch={() => {}} />);
    expect(screen.getByText('All')).toBeInTheDocument();
    expect(screen.getByText('Pending')).toBeInTheDocument();
    expect(screen.getByText('Completed')).toBeInTheDocument();
  });
});