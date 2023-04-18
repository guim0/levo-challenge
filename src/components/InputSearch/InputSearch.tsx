import { SearchIcon } from "@chakra-ui/icons";
import { Input, InputGroup, InputLeftElement } from "@chakra-ui/react";

export const InputSearch = () => {
  return (
    <InputGroup>
      <InputLeftElement pointerEvents="auto">
        <SearchIcon color="#595959" w={15} m={15} />
      </InputLeftElement>
      <Input
        type="name"
        placeholder="Pesquisar"
        color={"#595959"}
        paddingLeft={40}
        w={150}
        h={40}
        borderRadius={100}
        border="1px solid #F5F5F9"
      />
    </InputGroup>
  );
};
