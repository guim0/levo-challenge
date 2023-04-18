import { IUser } from "@/@types/user";
import { NunitoText400 } from "@/utils/Font";
import { Badge, Flex, Text } from "@chakra-ui/react";

export const Row = ({ name, email, role, status }: IUser) => {
  return (
    <Flex
      justifyContent={"space-between"}
      alignItems={"center"}
      textAlign={"left"}
      style={NunitoText400.style}
    >
      <Text>{name}</Text>
      <Text>{email}</Text>
      <Text>{role}</Text>

      <Badge variant="solid" colorScheme={status === "ATIVO" ? "green" : "red"}>
        {status}
      </Badge>
    </Flex>
  );
};
