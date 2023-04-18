import { Box } from "@chakra-ui/react";
import Image from "next/image";
import { UserToggler } from "../UserToggler/UserToggler";
import styles from "./Header.module.css";
export const Header = () => {
  return (
    <Box
      bg="white"
      className={styles.header}
      display={"flex"}
      justifyContent={"space-between"}
    >
      <Image alt="Levo" src={"/Logo.svg"} width={100} height={100} />
      <UserToggler />
    </Box>
  );
};
