import Image from "next/image";
import { HeaderWrapper, Wrapper } from "./LayoutAuthorization.styles";
import { LayoutAuthorizationProps } from "./LayoutAuthorization.types";
import { HeaderMain } from "../../modules";

export const LayoutAuthorization: React.FC<LayoutAuthorizationProps> = ({ children }) => {
  return (
    <>
      <HeaderMain />
      <Wrapper>
        <Image src="/content/layouts/space.png" layout="fill" objectFit="cover" />
        <HeaderWrapper>{children}</HeaderWrapper>
      </Wrapper>
    </>
  );
};
