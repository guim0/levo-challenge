import { InputSearch } from "@/components/InputSearch/InputSearch";
import { NunitoText400, NunitoText700 } from "@/utils/Font";
import { UpDownIcon } from "@chakra-ui/icons";
import {
  Box,
  Button,
  Flex,
  Menu,
  MenuButton,
  MenuDivider,
  MenuItem,
  MenuList,
  Text,
} from "@chakra-ui/react";
import Image from "next/image";
import styles from "./Tab.module.css";
import React, { ReactNode, useState } from "react";
import { Checkbox } from "antd";
interface ITab {
  tabName: string;
  options?: string[];
}

export const Tab = ({ tabName, options }: ITab) => {
  const [isOpen, setIsOpen] = useState<boolean>(false);

  return (
    <Box>
      <Flex align={"center"} justifyContent={"space-between"} pl={10}>
        <Text style={NunitoText700.style} fontSize={14}>
          {tabName}
        </Text>

        {options ? (
          <Flex
            align={"center"}
            borderRight={"1.2px solid #59595944"}
            gap={5}
            mr={10}
          >
            <UpDownIcon />
            <Menu isOpen={isOpen}>
              <MenuButton
                outline={"none"}
                border={"none"}
                bg={"transparent"}
                onClick={() => setIsOpen(true)}
              >
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
                      <Checkbox>{item}</Checkbox>
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
                    cursor={"pointer"}
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
                    onClick={() => setIsOpen(false)}
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
