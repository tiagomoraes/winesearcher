import React from 'react';
import { Container, Label, LabelTitle } from './ResultItem.styles';

const ResultItem = ({ item, docID }) => {
  const handleClick = () => {
    window.location.href = `http://localhost:8000/static/${docID}.html`;
  };

  const getTitle = (key) => {
    const valuesObject = {
      grape: 'Uva(s)',
      country: 'País',
      year: 'Safra',
      wine_type: 'Tipo',
      alcohol_content: 'Teor',
      classification: 'Classif.',
    };

    const res = valuesObject[key];

    if (res) {
      return res;
    }

    return null;
  };

  return (
    <Container onClick={handleClick} title={item.name} hoverable>
      {Object.entries(item).map(([key, value]) => {
        const title = getTitle(key);

        if (!title || !value) {
          return null;
        }

        return (
          <Label>
            <LabelTitle>{title}: </LabelTitle>
            {value}
          </Label>
        );
      })}
    </Container>
  );
};

export default ResultItem;
