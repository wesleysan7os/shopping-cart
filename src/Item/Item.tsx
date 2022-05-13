import Button from '@material-ui/core/Button';

import { CartItemType } from '../App';
import { Wrapper } from './Item.styles';

type ItemProps = {
  item: CartItemType,
  handleAddToCart: (clickedItem: CartItemType) => void;
}

export function Item({ item, handleAddToCart }: ItemProps) {
  return (
    <Wrapper>
      <img src={item.image} alt={item.title} />
      <div>
        <h3>{item.title}</h3>
        <p>{item.description}</p>
        <h3>${item.price}</h3>
      </div>
      <Button onClick={() => handleAddToCart(item)}>Add to car</Button>
    </Wrapper>
  );
}