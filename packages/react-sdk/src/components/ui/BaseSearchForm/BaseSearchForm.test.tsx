import { screen, render, fireEvent } from '@testing-library/react';
import { describe, expect, test, vi } from 'vitest';

import { BaseSearchForm } from '.';
import { SearchcraftProvider } from '@components/providers/SearchcraftProvider';
import { TEST_CONFIG } from '@testing/mocks/testConfig';

describe('BaseSearchForm', () => {
  test('The form is rendered with a label, an input, and a submit button', () => {
    const onSubmit = vi.fn();
    render(
      <SearchcraftProvider {...TEST_CONFIG}>
        <BaseSearchForm labelForInput='Test label' handleSubmit={onSubmit} />
      </SearchcraftProvider>,
    );

    expect(screen.getByLabelText('Test label')).toBeInTheDocument();
    expect(screen.getByRole('textbox')).toBeInTheDocument();
    expect(screen.getByRole('button', { name: 'Search' })).toBeInTheDocument();
  });
  test('The form accepts a query value and submits when search button is clicked', () => {
    const onSubmit = vi.fn();
    render(
      <SearchcraftProvider {...TEST_CONFIG}>
        <BaseSearchForm handleSubmit={onSubmit} />
      </SearchcraftProvider>,
    );

    const input = screen.getByRole('textbox');
    const submitButton = screen.getByRole('button', { name: 'Search' });

    fireEvent.change(input, { target: { value: 'Search term' } });

    expect(input).toHaveValue('Search term');

    fireEvent.click(submitButton);

    expect(onSubmit).toHaveBeenCalledWith('Search term');
    expect(onSubmit).toHaveBeenCalledTimes(1);
  });

  test('An error message appears when the input is empty when a form submission occurs', () => {
    const onSubmit = vi.fn();
    render(
      <SearchcraftProvider {...TEST_CONFIG}>
        <BaseSearchForm handleSubmit={onSubmit} />
      </SearchcraftProvider>,
    );

    const submitButton = screen.getByRole('button', { name: 'Search' });

    fireEvent.click(submitButton);

    expect(screen.getByText('Input value is required.')).toBeInTheDocument();
    expect(onSubmit).not.toHaveBeenCalled();
  });
  test('The error is cleared when the input is given a valid query', () => {
    const onSubmit = vi.fn();
    render(
      <SearchcraftProvider {...TEST_CONFIG}>
        <BaseSearchForm handleSubmit={onSubmit} />
      </SearchcraftProvider>,
    );

    const input = screen.getByRole('textbox');
    const submitButton = screen.getByRole('button', { name: 'Search' });

    fireEvent.click(submitButton);

    expect(screen.getByText('Input value is required.')).toBeInTheDocument();

    fireEvent.change(input, { target: { value: 'Search query' } });

    fireEvent.click(submitButton);

    expect(screen.queryByText('Input value is required.')).toBeNull();

    expect(onSubmit).toHaveBeenCalledWith('Search query');
    expect(onSubmit).toHaveBeenCalledTimes(1);
  });
});
