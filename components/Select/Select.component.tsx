import { SelectStyled } from "./Select.styles";
import ReactSelect from "react-select";
import { SelectProps } from "./Select.types";

import Arrow from "./icons/arrow.svg";

const IndicatorSeparator = () => {
  return null;
};

const DropdownIndicator = () => {
  return <Arrow />;
};

export const Select: React.FC<SelectProps> = ({ className, ...props }) => {
  return (
    <SelectStyled className={className}>
      <ReactSelect
        components={{
          IndicatorSeparator,
          DropdownIndicator,
        }}
        {...props}
        classNamePrefix="select"
      />
    </SelectStyled>
  );
};
