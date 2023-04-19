import { Header } from "@/components/Header/Header";
import { SideBar } from "@/components/SideBar/SideBar";
import { NunitoText700 } from "@/utils/Font";
import { ChevronLeftIcon } from "@chakra-ui/icons";
import { Box, Container, Flex, Text } from "@chakra-ui/react";
import { useRouter } from "next/router";

const Register = () => {
  const router = useRouter();
  return (
    <>
      <Header />
      <SideBar />
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
          <Flex alignItems={"center"} gap={40}>
            <Flex
              onClick={() => router.push("/")}
              alignItems={"center"}
              ml={12}
              gap={10}
            >
              <ChevronLeftIcon />
              <Text style={NunitoText700.style} fontSize={16}>
                Voltar
              </Text>
            </Flex>
            <Text style={NunitoText700.style} fontSize={24}>
              {" "}
              Cadastrar Usuário
            </Text>
          </Flex>
        </Box>
      </Container>
    </>
  );
};

export default Register;
