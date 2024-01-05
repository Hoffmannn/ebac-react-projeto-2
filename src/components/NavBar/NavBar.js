import React from "react";

import { Button, Divider, Image, Tab, TabList, Tabs } from "@chakra-ui/react";
import logo from "../../assets/logo-color.png";
import { Cart } from "react-bootstrap-icons";

function NavBar({ setIsCartOpen }) {
  return (
    <>
      <Tabs
        display="flex"
        alignItems="center"
        backgroundColor="#E6E9E0"
        gap={10}
        padding={1}
        width="100%"
        position="fixed"
        zIndex={1001}
      >
        <Image src={logo} w={200} fit="contain" />
        <TabList flex={1} gap={20}>
          <Tab>Início</Tab>
          <Tab isDisabled>Produtos</Tab>
          <Tab isDisabled>Sobre nós</Tab>
          <Tab isDisabled>Contato</Tab>
          <Tab isDisabled>Minha conta</Tab>
        </TabList>
        <Button mr={20} onClick={() => setIsCartOpen(true)}>
          <Cart color="#776E9A" size={32} />
        </Button>
      </Tabs>
      <Divider color="#776E9A" />
    </>
  );
}

export default NavBar;
