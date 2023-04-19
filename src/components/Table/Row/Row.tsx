import { IUser } from "@/@types/user";
import { Badge } from "@/components/Badge/Badge";
import { NunitoText400 } from "@/utils/Font";
import { EditIcon } from "@chakra-ui/icons";
import { Grid, GridItem, Text, Tooltip } from "@chakra-ui/react";
import { useRouter } from "next/router";

export const Row = ({ name, email, role, status }: IUser) => {
  const router = useRouter();
  return (
    <Grid
      templateColumns="repeat(5,1fr)"
      paddingLeft={20}
      style={NunitoText400.style}
      borderTop="1px solid #59595927"
      alignItems={"center"}
    >
      <GridItem w="100%">
        <Text>{name}</Text>
      </GridItem>
      <GridItem w="100%">
        <Text>{email}</Text>
      </GridItem>
      <GridItem w="100%">
        <Text>{role}</Text>
      </GridItem>
      <GridItem w="100%">
        <Badge status={status} />
      </GridItem>
      <GridItem
        w="20%"
        cursor="pointer"
        onClick={() => router.push("/register")}
      >
        <Tooltip
          placement={"top"}
          hasArrow
          label={
            <Text style={NunitoText400.style} p={8}>
              Editar
            </Text>
          }
          bg="black"
          color="white"
          pl={5}
          pr={5}
          borderRadius={4}
          fontSize={14}
        >
          <EditIcon />
        </Tooltip>
      </GridItem>
    </Grid>
  );
};
