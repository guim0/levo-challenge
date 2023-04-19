import { PoppinsText700 } from "@/utils/Font";
import { Box } from "@chakra-ui/react";
interface IBadge {
  status: string;
}
export const Badge = ({ status }: IBadge) => {
  return (
    <Box
      data-testid="badge"
      borderRadius={100}
      w={90}
      height={24}
      color={"white"}
      style={PoppinsText700.style}
      textAlign={"center"}
      bg={status === "ATIVO" ? "#00AB3F" : "#D50003"}
    >
      {status}
    </Box>
  );
};
