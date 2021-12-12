import React, { useState, useEffect, useCallback } from 'react';
import { useLocation } from 'react-router-dom';
import queryString from 'query-string';
import api from '@services/api';
import ResultItem from '../ResultItem';
import { Count, Container, Content } from './SearchResults.styles';

const SearchResults = () => {
  const { search } = useLocation();
  const [results, setResults] = useState();
  const [total, setTotal] = useState();
  const [status, setStatus] = useState('loading');

  const fetchData = useCallback(async () => {
    setStatus('loading');

    try {
      const query = queryString.parse(search);

      const { data } = await api.get('/search/', {
        params: query,
      });

      setTotal(data.total_number_of_docs);
      setResults(data.docs_information);

      setStatus('done');
    } catch (error) {
      setStatus('error');
    }
  }, [search]);

  useEffect(() => {
    fetchData();
  }, [fetchData, search]);

  if (status === 'loading') {
    return <div>Carregando...</div>;
  }

  if (status === 'error') {
    return <div>Deu um Erro</div>;
  }

  if (Object.values(results).length === 0) {
    return <div>Não há resultados, tente mudar os parâmetros da busca</div>;
  }

  return (
    <Container>
      <Count>Mostrando 1-10 de {total} resultados</Count>
      <Content>
        {Object.entries(results).map((e) => (
          <ResultItem key={e[0]} docID={e[0]} item={e[1]} />
        ))}
      </Content>
    </Container>
  );
};

export default SearchResults;
