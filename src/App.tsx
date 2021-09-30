// docx.js.org
// Templates

// Command Bar

// Paper
// A4: 210 * 297 mm

// Portrait
// NameAndIntro
// Contact
// Sidebar
// ContentBlock: 荣誉奖项:xxx

// Timeline
// List (ForceLine,Bullet)

import React from "react";
import { NeutralColors } from "@fluentui/theme";
import { SharedColors } from "@fluentui/theme";
import "./App.css";

import { ResumeSidebarLeft } from "./components/Resume/templates/ResumeSidebarLeft";

interface InterfaceFlexContainer {
  children?: any;
  height?: number;
  backgroundColor?: string;
  style?: object;
}

const FlexContainer = ({
  children,
  height = 50,
  backgroundColor = "#ffffff",
  style,
}: InterfaceFlexContainer) => {
  return (
    <div
      style={{
        display: "flex",
        alignItems: "center",
        height: `${height}px`,
        backgroundColor,
        ...style,
      }}
    >
      {children}
    </div>
  );
};

const Header = () => {
  return (
    <FlexContainer backgroundColor={SharedColors.greenCyan10}>
      Header
    </FlexContainer>
  );
};

const Footer = () => {
  return (
    <FlexContainer backgroundColor={SharedColors.gray40}>Footer</FlexContainer>
  );
};

const Ribbon = () => {
  return (
    <FlexContainer backgroundColor={SharedColors.green10}>Ribbon</FlexContainer>
  );
};

const Sitemap = () => {
  return (
    <FlexContainer
      backgroundColor={SharedColors.orange10}
      style={{ height: "100%", width: "200px" }}
    >
      Sitemap
    </FlexContainer>
  );
};

const Layout = ({ children }: InterfaceFlexContainer) => {
  const height = window.innerHeight - 3 * 50;
  return (
    <>
      <Header />
      <Ribbon />
      <FlexContainer backgroundColor={NeutralColors.gray50} height={height}>
        <Sitemap />
        <div className="hideScrollBar" style={{ height, overflow: "scroll" }}>
          {children}
        </div>
      </FlexContainer>
      <Footer />
    </>
  );
};

export const App: React.FunctionComponent = () => {
  return (
    <div>
      <Layout>
        <ResumeSidebarLeft />
      </Layout>
    </div>
  );
};
