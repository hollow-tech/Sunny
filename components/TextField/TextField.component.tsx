import { forwardRef } from "react";
import { TextFieldProps } from "./TextField.types";
import { Error, Input, Wrapper } from "./TextField.styles";

export const TextField = forwardRef<HTMLInputElement, TextFieldProps>(
  ({ className, errorMessage, isError, ...props }, ref) => {
    return (
      <Wrapper className={className} {...props}>
        <Input isError={isError} ref={ref} {...props} />
        {isError && <Error>{errorMessage}</Error>}
      </Wrapper>
    );
  }
);

TextField.displayName = 'TextField'
