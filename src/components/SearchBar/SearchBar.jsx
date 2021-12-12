import React, { useState, useEffect } from 'react';
import { Input, Select } from 'antd';
import { useLocation, useNavigate } from 'react-router-dom';
import queryString from 'query-string';

import { Container } from './SearchBar.styles';

const { Option } = Select;

const SearchBar = () => {
  const { search } = useLocation();
  const navigate = useNavigate();

  const [query, setQuery] = useState();
  const [field, setField] = useState('name');

  useEffect(() => {
    const queryObject = queryString.parse(search);
    setQuery(queryObject.query);
    setField(queryObject.field || 'name');
  }, [search]);

  const handleQueryInputChange = (e) => {
    setQuery(e.target.value);
  };

  const handleTypeInputChange = (e) => {
    setField(e);
  };

  const handleSearch = () => {
    const queryParams = {
      query,
      field: field || 'name',
    };

    navigate({
      pathname: '/search',
      search: queryString.stringify(queryParams),
    });
  };

  const selectAfter = (
    <Select
      onChange={handleTypeInputChange}
      value={field}
      className="select-after"
    >
      <Option value="name">Nome</Option>
      <Option value="grape">Uva</Option>
      <Option value="country">País</Option>
      <Option value="alcohol_content">Teor Alcoólico</Option>
      <Option value="wine_type">Tipo</Option>
    </Select>
  );

  return (
    <Container>
      <Input
        value={query}
        onChange={handleQueryInputChange}
        onPressEnter={handleSearch}
        addonAfter={selectAfter}
      />
    </Container>
  );
};

export default SearchBar;
