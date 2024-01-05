import axios from "axios";

export const fetchCategories = async () => {
  return await axios
    .get("http://localhost:3030/categories")
    .then((res) => res.data);
};

export const fetchProductsByCategory = async (categoryId) => {
  return await axios
    .get(`http://localhost:3030/products?categoryId=${categoryId}`)
    .then((res) => res.data);
};
