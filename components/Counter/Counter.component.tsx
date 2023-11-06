import { ChangeEvent, useState } from "react";
import { ButtonDown, ButtonUp, Wrapper, WrapperButtons, Input } from "./Counter.styles";

import { CounterProps } from "./Counter.types";

import ArrowDown from "./icons/arrow-down.svg";
import ArrowUp from "./icons/arrow-up.svg";

export const Counter: React.FC<CounterProps> = ({ onChange, className, ...props }) => {
  const [value, setValue] = useState<string>("");

  const handleCounterInc = () => {
    setValue(String(Number(value) + 1));
  };

  const handleCounterDec = () => {
    if (Number(value) <= 0) {
      setValue("");
    } else {
      setValue(String(Number(value) - 1));
    }
  };

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    const numberValue = Number(e.target.value);

    if (numberValue < 0 || e.target.value.startsWith("-")) {
      setValue("");
    } else {
      if (Number.parseInt(String(numberValue))) {
        setValue(String(numberValue));
        onChange && onChange(e);
      } else {
        setValue("");
      }
    }
  };

  return (
    <Wrapper className={className}>
      <Input
        placeholder="0"
        type="text"
        {...props}
        onChange={handleChange}
        onInput={handleChange}
        value={value}
        min={0}
      />
      <WrapperButtons>
        <ButtonUp onClick={handleCounterInc}>
          <ArrowUp />
        </ButtonUp>
        <ButtonDown onClick={handleCounterDec}>
          <ArrowDown />
        </ButtonDown>
      </WrapperButtons>
    </Wrapper>
  );
};
