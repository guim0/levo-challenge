import { IUser } from "@/@types/user";
import { Badge } from "@/components/Badge/Badge";
import { NunitoText400 } from "@/utils/Font";
import { EditIcon } from "@chakra-ui/icons";
import { Grid, GridItem, Text } from "@chakra-ui/react";

export const Row = ({ name, email, role, status }: IUser) => {
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
      <GridItem w="20%">
        <EditIcon />
      </GridItem>
    </Grid>
  );
};
