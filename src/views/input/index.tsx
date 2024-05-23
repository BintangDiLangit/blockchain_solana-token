import React from "react";

export const InputView = ({
  placeholder,
  name,
  clickhandle,
}: {
  placeholder: string;
  name: string;
  clickhandle?: any;
}) => {
  return (
    <>
      <div className="mb-4">
        <label
          htmlFor="input-label"
          className="text-base/normal text-default-200 block mb-2
    font-semibold"
        >
          {name}
        </label>
        <input
          type="text"
          id="input-label"
          onChange={clickhandle}
          placeholder={placeholder}
          className="border-default-200 block w-full rounded border-white/10 
    bg-transparent py-1.5 px-3 text-white/80 focus:border-white/25
    focus:ring-transparent"
        />
      </div>
    </>
  );
};
