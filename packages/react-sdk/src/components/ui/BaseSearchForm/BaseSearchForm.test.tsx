import { useMemo } from 'react';
import { screen, render, fireEvent } from '@testing-library/react';
import { describe, expect, test, vi } from 'vitest';

import { SearchcraftCore } from '@components/providers/SearchcraftProvider';
import { TEST_REACT_SDK_CONFIGURATION } from '@testing/mocks/testConfig';

import Searchcraft from '../../../Searchcraft/Searchcraft';
import BaseSearchForm from '.';

describe('BaseSearchForm', () => {
  test('The form is rendered with a label, an input, and a submit button', () => {
    const onSubmit = vi.fn();
    const searchcraft = useMemo(
      () => new SearchcraftCore(TEST_REACT_SDK_CONFIGURATION),
      [],
    );
    render(
      <Searchcraft.Provider {...{ searchcraft }}>
        <BaseSearchForm labelForInput='Test label' handleSubmit={onSubmit} />
      </Searchcraft.Provider>,
    );

    expect(screen.getByLabelText('Test label')).toBeInTheDocument();
    expect(screen.getByRole('textbox')).toBeInTheDocument();
    expect(screen.getByRole('button', { name: 'Search' })).toBeInTheDocument();
  });
  test('The form accepts a query value and submits when search button is clicked', () => {
    const onSubmit = vi.fn();
    const searchcraft = useMemo(
      () => new SearchcraftCore(TEST_REACT_SDK_CONFIGURATION),
      [],
    );
    render(
      <Searchcraft.Provider {...{ searchcraft }}>
        <BaseSearchForm handleSubmit={onSubmit} />
      </Searchcraft.Provider>,
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
    const searchcraft = useMemo(
      () => new SearchcraftCore(TEST_REACT_SDK_CONFIGURATION),
      [],
    );
    render(
      <Searchcraft.Provider {...{ searchcraft }}>
        <BaseSearchForm handleSubmit={onSubmit} />
      </Searchcraft.Provider>,
    );

    const submitButton = screen.getByRole('button', { name: 'Search' });

    fireEvent.click(submitButton);

    expect(screen.getByText('Input value is required.')).toBeInTheDocument();
    expect(onSubmit).not.toHaveBeenCalled();
  });
  test('The error is cleared when the input is given a valid query', () => {
    const onSubmit = vi.fn();
    const searchcraft = useMemo(
      () => new SearchcraftCore(TEST_REACT_SDK_CONFIGURATION),
      [],
    );
    render(
      <Searchcraft.Provider {...{ searchcraft }}>
        <BaseSearchForm handleSubmit={onSubmit} />
      </Searchcraft.Provider>,
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
