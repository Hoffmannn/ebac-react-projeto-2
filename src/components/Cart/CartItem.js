import { Box, Button, Card, Image } from "@chakra-ui/react";
import React from "react";
import { formatToCurrency } from "../../utils/formatToCurrenct";
import { MinusIcon, AddIcon, DeleteIcon } from "@chakra-ui/icons";

// import { Container } from './styles';

function CartItem({ product, setCart }) {
  const { quantity, name, photo, price, id } = product;

  const handleRemoveItem = () => {
    if (quantity > 1) {
      setCart((prev) =>
        prev.map((item) => {
          if (item.id === id) {
            return { ...item, quantity: item.quantity - 1 };
          }
          return item;
        })
      );
    } else {
      setCart((prev) => prev.filter((item) => item.id !== id));
    }
  };

  const handleAddItem = () => {
    setCart((prev) =>
      prev.map((item) => {
        if (item.id === id) {
          return { ...item, quantity: item.quantity + 1 };
        }
        return item;
      })
    );
  };
  return (
    <Card
      direction="row"
      alignItems="center"
      justifyContent="space-between"
      padding={5}
      gap={2}
    >
      <Image src={photo} draggable={false} height={"60px"} margin="auto" />
      <Box display="flex" flexDir="column" flex={1} gap={2}>
        <h3>{name}</h3>
        <Box display="flex" flexDir="row" flex={1} alignItems="center" gap={2}>
          <Button height={8} width={8} onClick={() => handleRemoveItem()}>
            {quantity === 1 ? (
              <DeleteIcon boxSize={3} />
            ) : (
              <MinusIcon boxSize={3} />
            )}
          </Button>

          <span>{quantity}</span>

          <Button height={8} width={8} onClick={() => handleAddItem()}>
            <AddIcon boxSize={3} />
          </Button>

          <p>{formatToCurrency(price * quantity)}</p>
        </Box>
      </Box>
    </Card>
  );
}

export default CartItem;
