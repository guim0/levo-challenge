import { PoppinsText400, PoppinsText700 } from "@/utils/Font";
import { Box, Flex, HStack, Icon, Text } from "@chakra-ui/react";
import { CheckCircleIcon, TriangleDownIcon } from "@chakra-ui/icons";

import styles from "./UserToggler.module.css";

export const UserToggler = () => {
  return (
    <>
      <Box
        p={10}
        maxW={200}
        height={50}
        paddingLeft={30}
        className={styles.toggler}
      >
        <Flex alignItems={"center"} gap={16}>
          <Box bg={"#73CF71"} w={40} h={40} borderRadius={100} />

          <Box>
            <Flex direction={"column"} justifyContent={"flex-end"}>
              <Text size={"14"} style={PoppinsText700.style} h={1}>
                Matheus S.
              </Text>

              <span className={styles.subtitle} style={PoppinsText400.style}>
                Admin
              </span>
            </Flex>
          </Box>
          <TriangleDownIcon w={10} h={10} />
        </Flex>
      </Box>
    </>
  );
};
