import { PoppinsText400, PoppinsText600 } from "@/utils/Font";
import { Box, Flex, Icon, Text } from "@chakra-ui/react";
import { TriangleDownIcon } from "@chakra-ui/icons";
import styles from "./UserToggler.module.css";

export const UserToggler = () => {
  return (
    <>
      <Box p={10} maxW={190} height={50} className={styles.toggler}>
        <Flex alignItems={"center"} gap={16}>
          <Box bg={"#73CF71"} w={40} h={40} borderRadius={100} />

          <Box>
            <Flex direction={"column"} justifyContent={"flex-end"}>
              <Text size={"14"} style={PoppinsText600.style} h={1}>
                Matheus S.
              </Text>

              <span className={styles.subtitle} style={PoppinsText400.style}>
                Admin
              </span>
            </Flex>
          </Box>

          <Icon as={TriangleDownIcon} />
        </Flex>
      </Box>
    </>
  );
};
