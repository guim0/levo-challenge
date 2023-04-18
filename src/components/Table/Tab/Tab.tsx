import { NunitoText700 } from "@/utils/Font";
import { UpDownIcon } from "@chakra-ui/icons";
import {
  Box,
  Flex,
  Menu,
  MenuButton,
  MenuItem,
  MenuList,
  Text,
} from "@chakra-ui/react";
import Image from "next/image";

interface ITab {
  tabName: string;
  options?: string[] | boolean[];
}

export const Tab = ({ tabName, options }: ITab) => {
  return (
    <Box p={10} bg={"#59595944"} maxWidth={380}>
      <Flex align={"center"} justifyContent={"space-between"}>
        <Text style={NunitoText700.style} fontSize={14}>
          {tabName}
        </Text>

        {options ? (
          <Flex align={"center"} borderRight={"1.2px solid #59595944"} gap={5}>
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
              <MenuList>
                {options?.map((item, idx) => (
                  <MenuItem key={idx}>{item}</MenuItem>
                ))}
              </MenuList>
            </Menu>
          </Flex>
        ) : null}
      </Flex>
    </Box>
  );
};
