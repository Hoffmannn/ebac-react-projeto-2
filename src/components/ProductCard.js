import React from "react";
import {
  Card,
  CardHeader,
  CardBody,
  Text,
  StackDivider,
  Heading,
  Stack,
  Box,
  Image,
  Button,
  useToast,
} from "@chakra-ui/react";
import { CartPlus } from "react-bootstrap-icons";
import { formatToCurrency } from "../utils/formatToCurrenct";

function ProductCard({ product, handleAddProduct }) {
  const { name, photo, price, description } = product || {};
  const toast = useToast();

  const handleAdd = () => {
    handleAddProduct(product);
    toast({
      title: "Carrinho atualizado!",
      status: "success",
      duration: 5000,
      isClosable: true,
      position: "bottom-right",
    });
  };
  return (
    <Card width="xs">
      <CardHeader paddingBottom={0}>
        <Image src={photo} draggable={false} height={"200px"} margin="auto" />
        <Heading size="md">{name}</Heading>
      </CardHeader>

      <CardBody paddingTop={0}>
        <Stack divider={<StackDivider />}>
          <Text pt="2" fontSize="sm">
            {description}
          </Text>
          <Box
            display="flex"
            flexDir="row"
            justifyContent="center"
            alignItems="baseline"
            gap={5}
          >
            <Text pt="2" fontSize="lg">
              {formatToCurrency(price)}
            </Text>
            <Button onClick={handleAdd}>
              Adicionar <CartPlus style={{ marginLeft: 5 }} />
            </Button>
          </Box>
        </Stack>
      </CardBody>
    </Card>
  );
}

export default ProductCard;
