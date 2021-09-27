import { useContext } from "react";
import { Paper, PaperContext } from "./Paper";

const Avatar = () => {
  return (
    <div
      style={{
        height: "400px",
        width: "400px",
        border: "1px solid green",
        borderRadius: "50%",
      }}
    ></div>
  );
};

const Sidebar = () => {
  //todo:继续设计sidebar avatar与其他和简历模板有关的组件
  const context: { paperWidth: number } = useContext(PaperContext);
  console.log("context", context);
  const width = context.paperWidth / 3; // 暂定三分之一宽度
  return (
    <div
      style={{
        height: "100%",
        width: `${width}px`,
        border: "1px solid red",
      }}
    >
      <Avatar />
    </div>
  );
};

export const ResumeSidebarLeft: React.FunctionComponent = () => {
  return (
    <PaperContext.Consumer>
      {() => (
        <Paper>
          <Sidebar />
        </Paper>
      )}
    </PaperContext.Consumer>
  );
};
