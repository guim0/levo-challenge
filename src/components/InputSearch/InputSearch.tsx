import { SearchIcon } from "@chakra-ui/icons";
import { Input, InputGroup, InputLeftElement } from "@chakra-ui/react";

interface InputSearchProps {
  borderRadius?: number;
  value: (value: string) => void;
}

export const InputSearch = ({ borderRadius, value }: InputSearchProps) => {
  return (
    <InputGroup>
      <InputLeftElement pointerEvents="auto">
        <SearchIcon color="#595959" w={15} m={15} />
      </InputLeftElement>
      <Input
        onChange={(e) => value(e.target.value.toLocaleUpperCase())}
        type="name"
        placeholder="Pesquisar"
        color={"#595959"}
        pl={40}
        w={150}
        h={40}
        borderRadius={borderRadius ?? 100}
        border="1px solid #F5F5F9"
      />
    </InputGroup>
  );
};
