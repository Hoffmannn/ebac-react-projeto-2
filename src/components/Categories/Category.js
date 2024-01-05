import { Box, Text } from "@chakra-ui/react";
import React, { useEffect, useRef, useState } from "react";
import Carousel from "react-multi-carousel";

import "react-multi-carousel/lib/styles.css";
import { fetchProductsByCategory } from "../../api";
import ProductCard from "../ProductCard";

function Category({ category, handleAddProduct }) {
  const responsive = {
    superLargeDesktop: {
      breakpoint: { max: 4000, min: 3000 },
      items: 4,
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3,
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2,
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
    },
  };

  const [products, setProducts] = useState([]);
  const isFetchingCategory = useRef(false);

  useEffect(() => {
    if (!isFetchingCategory.current) {
      isFetchingCategory.current = true;
      fetchProductsByCategory(category.id).then((res) => {
        console.log(res);
        setProducts(res);
      });
    }
  }, [category.id]);

  return (
    <Box
      w="100%"
      marginTop={10}
      paddingLeft={30}
      paddingRight={30}
      key={category.id}
    >
      <Text textAlign="left" fontSize={25}>
        {category.name}
      </Text>
      <Carousel responsive={responsive} infinite centerMode>
        {products.map((product) => (
          <ProductCard
            product={product}
            key={product.id}
            handleAddProduct={handleAddProduct}
          />
        ))}
      </Carousel>
    </Box>
  );
}

export default Category;
