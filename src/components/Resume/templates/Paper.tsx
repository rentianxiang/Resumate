import { createContext } from "react";

export const PaperContext = createContext<any>({});

export const Paper: React.FunctionComponent = ({ children }) => {
  const paperHeight = 2000; // 简历长度
  const paperWidth = (paperHeight * 210) / 297;
  return (
    <PaperContext.Provider value={{ paperHeight, paperWidth }}>
      <div
        style={{
          height: paperHeight,
          width: paperWidth,
          border: "1px solid black",
        }}
      >
        {children}
      </div>
      ;
    </PaperContext.Provider>
  );
};
