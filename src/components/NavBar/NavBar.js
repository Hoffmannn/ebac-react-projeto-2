import React from "react";

import "./NavBar.css";
import {
  Box,
  Button,
  Divider,
  Image,
  Tab,
  TabList,
  Tabs,
} from "@chakra-ui/react";
import logo from "../../assets/logo-color.png";
import { Cart } from "react-bootstrap-icons";
function NavBar() {
  return (
    <>
      <Tabs
        display="flex"
        alignItems="center"
        backgroundColor="#E6E9E0"
        gap={10}
        padding={5}
      >
        <Image src={logo} w={200} fit="contain" />
        <TabList flex={1} gap={20}>
          <Tab>Início</Tab>
          <Tab>Produtos</Tab>
          <Tab>Sobre nós</Tab>
        </TabList>
        <Button mr={20}>
          <Cart color="#776E9A" size={32} />
        </Button>
      </Tabs>
      <Divider color="#776E9A" />
    </>
  );
}

export default NavBar;
