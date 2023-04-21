import { NunitoText700 } from "@/utils/Font";
import {
  Box,
  Button,
  Center,
  Checkbox,
  Container,
  Flex,
  Grid,
  GridItem,
  Spinner,
  Text,
  effect,
} from "@chakra-ui/react";
import { InputSearch } from "../InputSearch/InputSearch";
import { AddIcon } from "@chakra-ui/icons";
import { Tab } from "./Tab/Tab";
import { mockUser } from "@/mocks/users";
import { Row } from "./Row/Row";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";

export const Table = () => {
  const [filter, setFilter] = useState<string>("");
  const [loading, setLoading] = useState(false);

  const router = useRouter();

  const handleFilter = (search: string) => {
    if (search === "") {
      return mockUser.map((items, idx) => <Row key={idx} {...items} />);
    }

    if (search !== "") {
      const filtered = mockUser.filter((item) =>
        item.name.toLocaleLowerCase().includes(filter.toLocaleLowerCase())
      );

      return filtered.length <= 0 ? (
        <Flex justifyContent={"center"}>
          <Text style={NunitoText700.style} fontStyle={"24"}>
            Nada foi encontrado 😔
          </Text>
        </Flex>
      ) : (
        filtered.map((items) => (
          <>
            <Row {...items} />
          </>
        ))
      );
    }

    if (filter !== "") {
      if (filter.includes("@")) {
        const filtered = mockUser.filter((item) => item.email === filter);
        console.log(filtered);

        return filtered.length <= 0 ? (
          <Flex justifyContent={"center"}>
            <Text style={NunitoText700.style} fontStyle={"24"}>
              Nada foi encontrado 😔
            </Text>
          </Flex>
        ) : (
          filtered.map((items) => (
            <>
              <Row {...items} />
            </>
          ))
        );
      }
      if (filter.includes("Gerente")) {
        const filtered = mockUser.filter((item) => item.role.includes(filter));
        console.log(filtered);

        return filtered.length <= 0 ? (
          <Flex justifyContent={"center"}>
            <Text style={NunitoText700.style} fontStyle={"24"}>
              Nada foi encontrado 😔
            </Text>
          </Flex>
        ) : (
          filtered.map((items) => (
            <>
              <Row {...items} />
            </>
          ))
        );
      }
    }
  };

  useEffect(() => {
    if (filter !== "") {
      setLoading(true);
      setTimeout(() => setLoading(false), 200);
    }
  }, [filter]);

  return (
    <Container
      bg={"#F5F5F9"}
      w={"85.5%"}
      h={"88vh"}
      position={"absolute"}
      left={"15vw"}
      top={"13vh"}
    >
      <Box
        m={10}
        w={"97%"}
        bg={"white"}
        position={"relative"}
        borderRadius={20}
      >
        <Flex align={"center"} justifyContent={"space-between"} pl={48} pr={48}>
          <Text style={NunitoText700.style} fontSize={24}>
            Usuários
          </Text>

          <Flex gap={10}>
            <InputSearch value={setFilter} />
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
              filtered={setFilter}
              tabName="Usuários"
              options={mockUser.map((item) => item.name)}
            />
          </GridItem>
          <GridItem>
            <Tab
              filtered={setFilter}
              tabName="Email"
              options={mockUser.map((item) => item.email)}
            />
          </GridItem>

          <GridItem>
            <Tab
              filtered={setFilter}
              tabName="Perfil"
              options={mockUser.map((item) => item.role)}
            />
          </GridItem>
          <GridItem>
            <Tab
              filtered={setFilter}
              tabName="Status"
              options={mockUser.map((item) => item.status)}
            />
          </GridItem>
          <GridItem>
            <Tab filtered={setFilter} tabName="Ações" />
          </GridItem>
        </Grid>

        <>
          {loading ? (
            <Flex justify={"center"} h={"50vh"}>
              <Spinner m={50} w={200} height={200} color="#595959" />
            </Flex>
          ) : (
            <Box>{handleFilter(filter)}</Box>
          )}

          <Box p={20}>
            <Text style={NunitoText700.style} color={"##595959"}>
              Resultados: 1 - {mockUser.length}
            </Text>
          </Box>
        </>
      </Box>
    </Container>
  );
};
