import { Box } from "@chakra-ui/react";
import Image from "next/image";
import { UserToggler } from "../UserToggler/UserToggler";

export const Header = () => {
  return (
    <Box
      bg="white"
      pt={10}
      pr={10}
      pl={10}
      display={"flex"}
      justifyContent={"space-between"}
    >
      <Image
        alt="Levo"
        src={"/Logo.svg"}
        width={100}
        height={100}
        priority={true}
      />
      <UserToggler />
    </Box>
  );
};
