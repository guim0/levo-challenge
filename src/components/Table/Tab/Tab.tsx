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
import { useState } from "react";
import { Checkbox } from "antd";
import type { CheckboxChangeEvent } from "antd/es/checkbox";
interface ITab {
  tabName: string;
  options?: string[];
  filtered: (value: string) => void;
}

export const Tab = ({ tabName, options, filtered }: ITab) => {
  const [hasValue, setHasValue] = useState();
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
                />
                <Box p={5}>
                  <InputSearch value={filtered} borderRadius={10} />
                </Box>
                <MenuList>
                  {options?.map((item, idx) => (
                    <MenuItem key={idx} border={"none"} bg={"white"} p={12}>
                      <Checkbox
                        value={item}
                        onChange={(e: CheckboxChangeEvent) => {
                          filtered(e.target.value), setHasValue(e.target.value);
                        }}
                      >
                        {item}
                      </Checkbox>
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
                    onClick={() => {
                      hasValue ? location.reload() : filtered("");
                    }}
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
