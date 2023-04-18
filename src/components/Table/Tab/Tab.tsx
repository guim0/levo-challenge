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
import { useState } from "react";

interface ITab {
  tabName: string;
  options?: string[];
  choosed?: () => void;
}

export const Tab = ({ tabName, options, choosed }: ITab) => {
  const [option, setOption] = useState<string>();

  function handleChange(optionChoosed: string) {
    setOption(optionChoosed);
  }

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
              <MenuList>
                {options?.map((item, idx) => (
                  <MenuItem key={idx} onClick={() => handleChange(item)}>
                    {item}
                  </MenuItem>
                ))}
              </MenuList>
            </Menu>
          </Flex>
        ) : null}
      </Flex>
    </Box>
  );
};
