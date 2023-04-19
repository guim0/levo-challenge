import { NunitoText700 } from "@/utils/Font";
import {
  Box,
  Button,
  Checkbox,
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
import { useRouter } from "next/router";

export const Table = () => {
  const router = useRouter();

  return (
    <Container
      bg={"#F5F5F9"}
      w={"85%"}
      position={"absolute"}
      left={"15vw"}
      top={"13vh"}
    >
      <Box
        m={10}
        w={"95%"}
        bg={"white"}
        position={"relative"}
        borderRadius={20}
      >
        <Flex align={"center"} justifyContent={"space-between"} pl={48} pr={48}>
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
              onClick={() => router.push("/register")}
            >
              CADASTRAR USUÁRIOS
            </Button>
          </Flex>
        </Flex>

        <Grid
          templateColumns="repeat(5, 30% 30% 20% 15% 5%)"
          w={"100%"}
          bg={"#59595944"}
        >
          <GridItem>
            <Tab
              tabName="Usuários"
              options={mockUser.map((item) => item.name)}
            />
          </GridItem>
          <GridItem>
            <Tab tabName="Email" options={mockUser.map((item) => item.email)} />
          </GridItem>

          <GridItem>
            <Tab tabName="Perfil" options={mockUser.map((item) => item.role)} />
          </GridItem>
          <GridItem>
            <Tab
              tabName="Status"
              options={mockUser.map((item) => item.status)}
            />
          </GridItem>
          <GridItem>
            <Tab tabName="Ações" />
          </GridItem>
        </Grid>

        <Box>
          {mockUser.map((items, idx) => (
            <Row {...items} key={idx} />
          ))}
        </Box>

        <Box p={20}>
          <Text style={NunitoText700.style} color={"##595959"}>
            Resultados: 1 - {mockUser.length}
          </Text>
        </Box>
      </Box>
    </Container>
  );
};
