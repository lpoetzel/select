import React from "react";

type SelectOption = {
  label: string;
  value: string;
};

type SelectProps = {
  options: SelectOption[];
  value?: SelectOption;
  onChange: (value: SelectOption | undefined) => void;
};

export default function Select({ value, onChange, options }: SelectProps) {
  return <div>Select</div>;
}
