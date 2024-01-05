import { Box, Button, Text } from "@chakra-ui/react";
import React from "react";
import { Facebook, Instagram, Twitter } from "react-bootstrap-icons";

// import { Container } from './styles';

function Footer() {
  return (
    <Box
      display="flex"
      alignItems="center"
      backgroundColor="#E6E9E0"
      gap={10}
      padding={10}
      width="100%"
      justifyContent="space-between"
      mt={5}
    >
      <Box>
        <Text>Siga-nos em nossas redes sociais!</Text>
        <Box display="flex" gap={5} dir="row" mt={1}>
          <Button>
            <Instagram />
          </Button>
          <Button>
            <Facebook />
          </Button>
          <Button>
            <Twitter />
          </Button>
        </Box>
      </Box>
      <Box textAlign="left">
        <Text>Cnpj: 00.000.000/0000-00</Text>
        <Text>
          R. Salém Bechara, 140 - conj. 1601 - Centro, Osasco - SP, 06018-180
        </Text>
      </Box>
    </Box>
  );
}

export default Footer;
