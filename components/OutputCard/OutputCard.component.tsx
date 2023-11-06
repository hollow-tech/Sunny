import { Typography } from "..";
import { Wrapper, CommisionText, Percent, Title } from "./OutputCard.styles";
import { OutputCardProps } from "./OutputCard.types";

export const OutputCard: React.FC<OutputCardProps> = ({ outputTitle, percent, commision, ...props }) => {
  return (
    <Wrapper {...props}>
      <Title>
        <Typography variants="headline2">{outputTitle}</Typography>
      </Title>
      <Percent>
        <Typography variants="headline3">{percent}</Typography>
      </Percent>
      <CommisionText>
        <Typography variants="body1">{commision}</Typography>
      </CommisionText>
    </Wrapper>
  );
};
