import { NunitoText700 } from "@/utils/Font";
import { Box, Flex, Text } from "@chakra-ui/react";
import { ChevronUpIcon, SettingsIcon } from "@chakra-ui/icons";
import Image from "next/image";
export const SideBar = () => {
  return (
    <Box w={272} height={"85vh"} alignSelf={"flex-start"}>
      <Flex direction={"column"} alignItems={"center"}>
        <Box w={"80%"}>
          <Flex
            align={"center"}
            justifyContent={"space-between"}
            marginBottom={12}
          >
            <Text color="#595959" style={NunitoText700.style} fontSize={14}>
              Conta
            </Text>
            <ChevronUpIcon color={"#595959"} w={20} h={20} />
          </Flex>

          <Flex
            bg={"#73CF71"}
            align={"center"}
            gap={17}
            borderRadius={10}
            paddingLeft={17}
            marginBottom={10}
          >
            <Image
              width={22.1}
              height={15.53}
              alt="Usuários"
              src={"/icon-perfil.svg"}
            />
            <Text style={NunitoText700.style} fontSize={14}>
              Usuários
            </Text>
          </Flex>

          <Flex
            bg={"white"}
            align={"center"}
            gap={18}
            borderRadius={10}
            paddingLeft={18}
          >
            <SettingsIcon />
            <Text style={NunitoText700.style} fontSize={14} marginLeft={5}>
              Configurações
            </Text>
          </Flex>
        </Box>
      </Flex>
    </Box>
  );
};
