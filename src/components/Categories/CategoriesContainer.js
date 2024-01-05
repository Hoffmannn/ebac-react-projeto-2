import React, { useEffect, useRef, useState } from "react";
import { fetchCategories } from "../../api";
import Category from "./Category";
import { Box } from "@chakra-ui/react";

function CategoriesContainer({ handleAddProduct }) {
  const [categories, setCategories] = useState([]);
  const isFetchingCategory = useRef(false);

  useEffect(() => {
    if (!isFetchingCategory.current) {
      isFetchingCategory.current = true;
      fetchCategories().then((res) => {
        console.log(res);
        setCategories(res);
      });
    }
  }, []);

  return (
    <Box marginTop="110px">
      {categories?.map((category) => (
        <Category category={category} handleAddProduct={handleAddProduct} />
      ))}
    </Box>
  );
}

export default CategoriesContainer;
