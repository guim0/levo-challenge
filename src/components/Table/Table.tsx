import { NunitoText700 } from "@/utils/Font";
import { Box, Button, Container, Flex, Text } from "@chakra-ui/react";
import { InputSearch } from "../InputSearch/InputSearch";
import { AddIcon } from "@chakra-ui/icons";
import { Tab } from "./Tab/Tab";
import { mockUser } from "@/mocks/users";

export const Table = () => {
  return (
    <Container
      bg={"#F5F5F9"}
      w={"85vw"}
      h={"90vh"}
      position={"fixed"}
      left={"13.5vw"}
      top={"15vh"}
    >
      <Box m={10} w={"98%"} bg={"white"} position={"relative"}>
        <Flex
          align={"center"}
          justifyContent={"space-between"}
          paddingLeft={48}
          paddingRight={48}
        >
          <Text style={NunitoText700.style} fontSize={24}>
            Usuários
          </Text>

          <Flex gap={10}>
            <InputSearch />

            <Button
              cursor="pointer"
              leftIcon={<AddIcon color={"#090C11"} w={14} />}
              bg={"#73CF71"}
              color={"#090C11"}
              style={NunitoText700.style}
              border={"none"}
              p={12}
              borderRadius={25}
            >
              CADASTRAR USUÁRIOS
            </Button>
          </Flex>
        </Flex>

        <Box>
          <Flex>
            <Tab
              tabName="Usuários"
              options={mockUser.map((item) => item.name)}
            />
            <Tab tabName="Email" options={mockUser.map((item) => item.email)} />
            <Tab tabName="Perfil" options={mockUser.map((item) => item.role)} />
            <Tab
              tabName="Status"
              options={mockUser.map((item) => item.status)}
            />
            <Tab tabName="Ações" />
          </Flex>
        </Box>
      </Box>
    </Container>
  );
};
