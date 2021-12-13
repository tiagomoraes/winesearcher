import React, { useState, useEffect, useCallback } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import queryString from 'query-string';
import api from '@services/api';
import ResultItem from '../ResultItem';
import {
  Count,
  Container,
  Content,
  PageSelector,
} from './SearchResults.styles';

const SearchResults = () => {
  const PAGE_SIZE = 10;

  const { search } = useLocation();
  const navigate = useNavigate();
  const [results, setResults] = useState();
  const [total, setTotal] = useState();
  const [page, setPage] = useState();
  const [status, setStatus] = useState('loading');

  const fetchData = useCallback(async () => {
    setStatus('loading');

    try {
      const query = queryString.parse(search);
      query.page_size = PAGE_SIZE;

      setPage(query.page || 1);

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

  const handlePageChange = (p) => {
    if (!search) {
      return;
    }

    const params = {
      ...queryString.parse(search),
      page: p.toString(),
    };

    navigate({
      pathname: '/search',
      search: queryString.stringify(params),
    });
  };

  if (status === 'loading') {
    return <div>Carregando...</div>;
  }

  if (status === 'error') {
    return <div>Deu um Erro, meu chapa</div>;
  }

  if (Object.values(results).length === 0) {
    return <div>Não há resultados, tente mudar os parâmetros da busca</div>;
  }

  return (
    <Container>
      <Count>
        Mostrando {(page - 1) * PAGE_SIZE + 1} -{' '}
        {Math.min(page * PAGE_SIZE, total)} de {total} resultados
      </Count>
      <Content>
        {Object.entries(results).map((e) => (
          <ResultItem key={e[0]} docID={e[0]} item={e[1]} />
        ))}
      </Content>
      <PageSelector
        onChange={handlePageChange}
        current={Number(page)}
        pageSize={PAGE_SIZE}
        pageSizeOptions={[PAGE_SIZE]}
        total={total}
      />
    </Container>
  );
};

export default SearchResults;
