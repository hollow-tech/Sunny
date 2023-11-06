import { CodeStyled } from "./Code.styles";
import { CodeProps } from "./Code.types";

export const Code: React.FC<CodeProps> = () => {
  return <CodeStyled type="text" name="test" fields={6} inputMode="email" />;
};
