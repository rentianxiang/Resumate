import { createContext } from "react";

interface InterfacePaperContext {
  paperHeight: number;
  paperWidth: number;
}

export const PaperContext = createContext<InterfacePaperContext>({
  paperHeight: window.innerHeight,
  paperWidth: window.innerWidth,
});

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
