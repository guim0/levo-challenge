import { InputSearch } from "@/components/InputSearch/InputSearch";
import { NunitoText400, NunitoText700 } from "@/utils/Font";
import { UpDownIcon } from "@chakra-ui/icons";
import {
  Box,
  Button,
  Checkbox,
  Flex,
  Menu,
  MenuButton,
  MenuDivider,
  MenuItem,
  MenuList,
  Text,
} from "@chakra-ui/react";
import Image from "next/image";
import { useState } from "react";

interface ITab {
  tabName: string;
  options?: string[];
  choosed?: () => void;
}

export const Tab = ({ tabName, options, choosed }: ITab) => {
  return (
    <Box bg={"#59595944"}>
      <Flex align={"center"} justifyContent={"space-between"} paddingLeft={10}>
        <Text style={NunitoText700.style} fontSize={14}>
          {tabName}
        </Text>

        {options ? (
          <Flex
            align={"center"}
            borderRight={"1.2px solid #59595944"}
            gap={5}
            marginRight={10}
          >
            <UpDownIcon />
            <Menu>
              <MenuButton outline={"none"} border={"none"} bg={"transparent"}>
                <Image
                  src={"/icon-filter.svg"}
                  alt="filter by"
                  width={16}
                  height={16}
                />
              </MenuButton>

              <MenuList bg={"white"} borderRadius={12}>
                <MenuItem
                  pt={8}
                  bg={"white"}
                  border={"none"}
                  borderTopRightRadius={6}
                  borderTopLeftRadius={6}
                >
                  <InputSearch borderRadius={10} />
                </MenuItem>
                <MenuList>
                  {options?.map((item, idx) => (
                    <MenuItem key={idx} border={"none"} bg={"white"} p={12}>
                      <Flex alignItems={"center"} gap={5}>
                        <Checkbox colorScheme="red" size={"sm"}>
                          {item}
                        </Checkbox>
                      </Flex>
                    </MenuItem>
                  ))}
                </MenuList>
                <MenuDivider />

                <Flex
                  ml={12}
                  mr={12}
                  justifyContent={"space-between"}
                  align={"center"}
                >
                  <Text
                    style={NunitoText400.style}
                    fontSize={14}
                    color="#595959"
                  >
                    Reset
                  </Text>
                  <Button
                    bg={"#73CF71"}
                    w={37}
                    h={24}
                    border={"none"}
                    borderRadius={4}
                    style={NunitoText700.style}
                  >
                    OK
                  </Button>
                </Flex>
              </MenuList>
            </Menu>
          </Flex>
        ) : null}
      </Flex>
    </Box>
  );
};
