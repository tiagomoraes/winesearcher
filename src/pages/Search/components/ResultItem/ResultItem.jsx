import React from 'react';
import { Container, Label, LabelTitle } from './ResultItem.styles';

const ResultItem = ({ item, docID }) => {
  const handleClick = () => {
    if (item?.url) {
      window.location.href = item.url;
    }
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
    <Container
      onClick={handleClick}
      title={`#${docID} - ${item.name}`}
      hoverable={item.url}
    >
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
