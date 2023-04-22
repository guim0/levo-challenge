import { IUser } from "@/@types/user";
import { Badge } from "@/components/Badge/Badge";
import { NunitoText400 } from "@/utils/Font";
import { EditIcon } from "@chakra-ui/icons";
import { Grid, GridItem, Text, Tooltip } from "@chakra-ui/react";
import { useRouter } from "next/router";

export const Row = ({ name, email, role, status }: IUser) => {
  const router = useRouter();
  return (
    <>
      <Grid
        templateColumns="repeat(5, 30% 30% 20% 15% 5%)"
        w={"100%"}
        style={NunitoText400.style}
        borderTop="1px solid #59595927"
        alignItems={"center"}
      >
        <GridItem>
          <Text ml={10}>{name}</Text>
        </GridItem>
        <GridItem>
          <Text ml={10}>{email}</Text>
        </GridItem>
        <GridItem>
          <Text ml={10}>{role}</Text>
        </GridItem>
        <GridItem>
          <Badge status={status} />
        </GridItem>
        <GridItem
          cursor="pointer"
          onClick={() =>
            router.push({
              pathname: "/register",
              query: {
                userName: name,
                userEmail: email,
                userRole: role,
                userStatus: status === "ATIVO" ? true : false,
              },
            })
          }
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
    </>
  );
};
