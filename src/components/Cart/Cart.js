import {
  Box,
  Button,
  Center,
  Drawer,
  DrawerBody,
  DrawerContent,
  DrawerFooter,
  DrawerHeader,
  DrawerOverlay,
  Text,
  useToast,
} from "@chakra-ui/react";
import React, { useMemo } from "react";
import CartItem from "./CartItem";
import { ChevronLeftIcon } from "@chakra-ui/icons";
import { formatToCurrency } from "../../utils/formatToCurrenct";
function Cart({ cart, setCart, isOpen, onClose }) {
  const toast = useToast();
  const cartValue = useMemo(() => {
    return cart.reduce((sum, { price, quantity }) => sum + price * quantity, 0);
  }, [cart]);

  const emptyCart = () => {
    setCart([]);
    onClose();
    toast({
      title: "Compra realizada com sucesso",
      description: "Volte sempre!",
      status: "success",
      duration: 5000,
      isClosable: true,
      position: "bottom-right",
    });
  };

  return (
    <Drawer onClose={onClose} isOpen={isOpen}>
      <DrawerOverlay />
      <DrawerContent backgroundColor="#fafdf5">
        <DrawerHeader borderBottomWidth="1px" backgroundColor="#fff">
          <Button onClick={onClose}>
            <ChevronLeftIcon />
          </Button>{" "}
          Carrinho
        </DrawerHeader>
        <DrawerBody>
          <Box display="flex" flexDirection="column" gap={2} height="100%">
            {cart.map((product) => (
              <CartItem key={product.id} product={product} setCart={setCart} />
            ))}
            {cart.length === 0 && (
              <Center height="100%">Seu carrinho está vazio</Center>
            )}
          </Box>
        </DrawerBody>

        <DrawerFooter backgroundColor="#fff" borderTopWidth="1px">
          <Box
            gap={5}
            display="flex"
            alignItems="baseline"
            justifyContent="space-between"
            width="100%"
          >
            <Text size="lg">Total: {formatToCurrency(cartValue)}</Text>

            <Button
              colorScheme="green"
              onClick={emptyCart}
              isDisabled={cartValue === 0}
            >
              Comprar
            </Button>
          </Box>
        </DrawerFooter>
      </DrawerContent>
    </Drawer>
  );
}

export default Cart;
