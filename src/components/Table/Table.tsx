import { NunitoText700 } from "@/utils/Font";
import {
  Box,
  Button,
  Container,
  Flex,
  Grid,
  GridItem,
  Text,
} from "@chakra-ui/react";
import { InputSearch } from "../InputSearch/InputSearch";
import { AddIcon } from "@chakra-ui/icons";
import { Tab } from "./Tab/Tab";
import { mockUser } from "@/mocks/users";
import { Row } from "./Row/Row";
import { Badge } from "../Badge/Badge";
import { useState } from "react";
import { IUser } from "@/@types/user";

export const Table = () => {
  const [filter, setFilter] = useState<IUser>();

  function handleFilterByTab(newFilter: IUser) {
    setFilter(newFilter);
  }
  return (
    <Container
      bg={"#F5F5F9"}
      w={"90vw"}
      h={"90vh"}
      position={"fixed"}
      left={"15vw"}
      top={"13vh"}
    >
      <Box
        m={10}
        w={"90%"}
        bg={"white"}
        position={"relative"}
        borderRadius={20}
      >
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
          <Grid templateColumns="repeat(5,1fr)">
            <GridItem w="100%">
              <Tab
                choosed={() => handleFilterByTab}
                tabName="Usuários"
                options={mockUser.map((item) => item.name)}
              />
            </GridItem>
            <GridItem w="100%">
              <Tab
                choosed={() => handleFilterByTab}
                tabName="Email"
                options={mockUser.map((item) => item.email)}
              />
            </GridItem>

            <GridItem w="100%">
              <Tab
                choosed={() => handleFilterByTab}
                tabName="Perfil"
                options={mockUser.map((item) => item.role)}
              />
            </GridItem>
            <GridItem w="100%">
              <Tab
                choosed={() => handleFilterByTab}
                tabName="Status"
                options={mockUser.map((item) => item.status)}
              />
            </GridItem>
            <GridItem w="100%">
              <Tab tabName="Ações" />
            </GridItem>
          </Grid>
        </Box>
        <Box>
          {mockUser.map((items, idx) => (
            <Row {...items} key={idx} />
          ))}
        </Box>
      </Box>
    </Container>
  );
};
