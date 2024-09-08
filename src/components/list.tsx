import React, { Fragment, ReactNode } from 'react';

interface ListProps<ItemType> {
  data: ItemType[];
  getKey: (item: ItemType, index: number) => React.Key;
  getItem: (item: ItemType, index: number) => ReactNode;
}

const List = <ItemType,>({ data, getKey, getItem }: ListProps<ItemType>) => {
  return (
    <>
      {data.map((item, index) => (
        <Fragment key={getKey(item, index)}>{getItem(item, index)}</Fragment>
      ))}
    </>
  );
};

export default List;