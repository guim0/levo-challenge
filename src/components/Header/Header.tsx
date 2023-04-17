import { Box } from "@chakra-ui/react";
import Image from "next/image";
import { UserToggler } from "../UserToggler/UserToggler";

export const Header = () => {
  return (
    <Box bg="white" p={5} display={"flex"} justifyContent={"space-between"}>
      <Image alt="Levo" src={"/Logo.svg"} width={100} height={100} />
      <UserToggler />
    </Box>
  );
};
