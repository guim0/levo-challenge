import { Header } from "@/components/Header/Header";
import { SideBar } from "@/components/SideBar/SideBar";
import { mockUser } from "@/mocks/users";
import { NunitoText400, NunitoText700 } from "@/utils/Font";
import { ChevronLeftIcon } from "@chakra-ui/icons";
import { Box, Button, Container, Flex, Input, Text } from "@chakra-ui/react";
import { Switch, Select, Divider, Alert } from "antd";
import { useRouter } from "next/router";

import { useState } from "react";

const Register = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [role, setRole] = useState("");
  const [status, setStatus] = useState("");
  const [isActive, setIsActive] = useState(false);
  const [showAlertSuccess, setShowAlertSuccess] = useState(false);
  const [showAlertError, setShowAlertError] = useState(false);

  const router = useRouter();

  const { userName, userEmail, userRole, userStatus } = router.query;

  const switchColor = () => {
    if (userStatus === "true" || isActive === true) {
      return "#00A93E";
    }

    if (userStatus === "false" || isActive === false) {
      return "#D30003";
    }
  };

  const switchDecision = () => {
    if (userStatus === "true" || isActive === true) {
      return true;
    }

    if (userStatus === "false" || isActive === false) {
      return false;
    }
  };

  const handleSubmit = (values: {
    name: string;
    email: string;
    role: string;
    status: string;
  }) => {
    if (values.email === "" || values.name === "" || values.role === "") {
      return setShowAlertError(true);
    }

    if (status === "") return (values.status = "INATIVO");
    setShowAlertSuccess(true);

    mockUser.push(values);
    setTimeout(() => {
      setShowAlertSuccess(false);
      setShowAlertError(false);
    }, 2500);
  };
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
          <Container p={42}>
            <Flex alignItems={"center"} gap={40}>
              <Flex
                cursor={"pointer"}
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
                Cadastrar Usuário
              </Text>
            </Flex>

            <Box mb={50}>
              <Text
                style={NunitoText700.style}
                fontSize={14}
                mb={24}
                color=" #595959;
"
              >
                Dados Pessoais
              </Text>

              <Flex gap={24} alignItems={"center"}>
                <Flex direction="column" gap={5}>
                  <label htmlFor="name" style={NunitoText700.style}>
                    Nome Completo
                  </label>
                  <Input
                    defaultValue={userName ?? ""}
                    onChange={(e) => setName(e.target.value)}
                    name="name"
                    borderRadius={7}
                    placeholder="Digite o nome e sobrenome"
                    style={NunitoText400.style}
                    p={8}
                    w={328}
                    outline={"none"}
                    border="1px solid #59595928"
                    fontSize={16}
                  />
                </Flex>
                <Flex direction="column" gap={5}>
                  <label htmlFor="email" style={NunitoText700.style}>
                    E-mail
                  </label>
                  <Input
                    defaultValue={userEmail ?? ""}
                    onChange={(e) => setEmail(e.target.value)}
                    name="email"
                    placeholder="Digite o email principal"
                    style={NunitoText400.style}
                    borderRadius={7}
                    p={8}
                    w={328}
                    outline={"none"}
                    border="1px solid #59595928"
                    fontSize={16}
                    errorBorderColor="red"
                  />
                </Flex>

                <Flex direction={"column"} w={328} mt={-26.5}>
                  <Text style={NunitoText700.style}>Perfil</Text>
                  <Select
                    onChange={(value: string) => setRole(value)}
                    size="large"
                    style={NunitoText400.style}
                    placeholder={userRole ?? "Selecione um perfil"}
                    options={[
                      { value: "Gerente", label: "Gerente" },
                      { value: "Administrador", label: "Administrador" },
                    ]}
                  />
                </Flex>
              </Flex>
            </Box>

            <Box>
              <Text
                style={NunitoText700.style}
                fontSize={14}
                mb={24}
                color=" #595959;
"
              >
                Status
              </Text>

              <Flex direction="column">
                <Text style={NunitoText700.style}> Inativar e Ativar </Text>

                <Box>
                  <Switch
                    defaultChecked={switchDecision()}
                    onChange={(value: boolean) => {
                      setIsActive(!isActive),
                        setStatus(!value ? "INATIVO" : "ATIVO");
                    }}
                    style={{ background: switchColor() }}
                  />
                </Box>
              </Flex>
            </Box>
            <Divider />

            {showAlertSuccess ? (
              <Box w={350}>
                <Alert
                  message="Novo Usuário Cadastrado!"
                  description={`Você cadastrou ${name} como ${role}, com status ${status}.`}
                  type="success"
                  showIcon
                />
              </Box>
            ) : null}

            {!showAlertSuccess && showAlertError ? (
              <Box w={330}>
                <Alert message="Preencha os campos!" type="error" showIcon />
              </Box>
            ) : null}

            <Flex gap={24} justifyContent={"flex-end"}>
              <Button
                border="none"
                cursor={"pointer"}
                w={152}
                height={48}
                alignItems={"center"}
                borderRadius={12}
                color="#595959"
                style={NunitoText700.style}
                fontSize={16}
                bg={"#5959591a"}
              >
                Cancelar
              </Button>
              <Button
                onClick={() => handleSubmit({ name, role, email, status })}
                border="none"
                cursor={"pointer"}
                w={152}
                height={48}
                alignItems={"center"}
                borderRadius={12}
                style={NunitoText700.style}
                fontSize={16}
                bg={"#73CF71"}
                disabled={true}
              >
                Cadastrar
              </Button>
            </Flex>
          </Container>
        </Box>
      </Container>
    </>
  );
};

export default Register;
