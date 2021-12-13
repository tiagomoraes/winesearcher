import React, { useState, useEffect, useCallback, useRef } from 'react';
import { Select, Input } from 'antd';
import { useLocation, useNavigate } from 'react-router-dom';
import queryString from 'query-string';

import api from '@services/api';
import { Container, Suggestions } from './SearchBar.styles';

const { Option } = Select;

const SearchBar = () => {
  const { search } = useLocation();
  const navigate = useNavigate();

  const input = useRef(null);

  const [query, setQuery] = useState();
  const [field, setField] = useState('name');
  const [options, setOptions] = useState([]);

  useEffect(() => {
    const queryObject = queryString.parse(search);
    setQuery(queryObject.query);
    setField(queryObject.field || 'name');
  }, [search]);

  const fetchOptions = useCallback(async () => {
    if (field === 'alcohol_content') {
      setOptions([
        { label: '0% - 5%', value: 0 },
        { label: '5% - 10%', value: 1 },
        { label: '10% - 15%', value: 2 },
        { label: '+15%', value: 3 },
      ]);

      return;
    }

    const { data } = await api.get('/suggestions/', {
      params: {
        query,
        field,
      },
    });

    setOptions(data.map((o) => ({ label: o, value: o })));
  }, [field, query]);

  useEffect(() => {
    if (query) {
      fetchOptions();
    }
  }, [fetchOptions, query]);

  const handleQueryInputChange = (value) => {
    setQuery(value);
  };

  const handleTypeInputChange = (e) => {
    setField(e);
    setQuery('');
    fetchOptions();
  };

  const performSearch = (q = query, f = field) => {
    if (!query) {
      return;
    }

    const queryParams = {
      query: q,
      field: f || 'name',
      page: 1,
    };

    input.current?.blur();

    navigate({
      pathname: '/search',
      search: queryString.stringify(queryParams),
    });
  };

  const handleSearch = () => {
    performSearch();
  };

  const handleSelect = (value) => {
    setQuery(value);
    performSearch(value, field);
  };

  return (
    <Container>
      <Select onChange={handleTypeInputChange} value={field}>
        <Option value="name">Nome</Option>
        <Option value="grape">Uva</Option>
        <Option value="country">País</Option>
        <Option value="alcohol_content">Teor Alcoólico</Option>
        <Option value="wine_type">Tipo</Option>
      </Select>
      <Suggestions
        onSelect={handleSelect}
        options={options}
        value={query}
        dropdownMatchSelectWidth={300}
        onChange={handleQueryInputChange}
      >
        <Input.Search
          ref={input}
          onSearch={handleSearch}
          placeholder="input here"
          enterButton
        />
      </Suggestions>
    </Container>
  );
};

export default SearchBar;
