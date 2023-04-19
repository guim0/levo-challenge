import { PoppinsText400, PoppinsText700 } from "@/utils/Font";
import { Box, Flex, Text } from "@chakra-ui/react";
import { TriangleDownIcon } from "@chakra-ui/icons";

export const UserToggler = () => {
  return (
    <>
      <Box
        p={10}
        maxW={200}
        height={50}
        paddingLeft={20}
        borderLeft="1px solid #59595960"
      >
        <Flex alignItems={"center"} gap={16}>
          <Box bg={"#73CF71"} w={40} h={40} borderRadius={100} />

          <Box>
            <Flex direction={"column"} justifyContent={"flex-end"}>
              <Text size={"14"} style={PoppinsText700.style} h={1}>
                Matheus S.
              </Text>

              <span style={PoppinsText400.style}>Admin</span>
            </Flex>
          </Box>
          <TriangleDownIcon w={10} h={10} />
        </Flex>
      </Box>
    </>
  );
};
