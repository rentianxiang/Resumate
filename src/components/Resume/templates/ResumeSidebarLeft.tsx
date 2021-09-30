import { useContext } from "react";
import * as React from "react";
import {
  Box,
  Center,
  Flex,
  Grid,
  GridItem,
  List,
  ListItem,
  ListIcon,
} from "@chakra-ui/react";
import {
  FaMale,
  FaChartBar,
  FaSchool,
  FaPhoneSquareAlt,
  FaMailBulk,
} from "react-icons/fa";
import { Paper, PaperContext } from "./Paper";

const Sidebar = () => {
  const context: { paperWidth: number } = useContext(PaperContext);
  const sideBarWidth = context.paperWidth / 3; // 暂定三分之一宽度
  const avatarWidth = sideBarWidth / 2;
  const SubTitle = ({ text }: { text: string }) => {
    return (
      <Box
        h={100}
        color="white"
        fontSize={50}
        fontWeight="bold"
        ml={10}
        mr={10}
        borderBottom="2px solid white"
      >
        {text}
      </Box>
    );
  };
  const BasicInfo = () => {
    return (
      <List fontSize={30} spacing={5}>
        <ListItem color="white">
          <ListIcon as={FaMale} /> 男
        </ListItem>
        <ListItem color="white">
          <ListIcon as={FaChartBar} /> 28
        </ListItem>
        <ListItem color="white">
          <ListIcon as={FaSchool} /> 研究生
        </ListItem>
        <ListItem color="white">
          <ListIcon as={FaPhoneSquareAlt} /> 13812345678
        </ListItem>
        <ListItem color="white">
          <ListIcon as={FaMailBulk} /> 285032439@qq.com
        </ListItem>
        <ListItem color="white">
          <ListIcon as={FaMailBulk} /> 285032439@qq.com
        </ListItem>
        <ListItem color="white">
          <ListIcon as={FaMailBulk} /> 285032439@qq.com
        </ListItem>
        <ListItem color="white">
          <ListIcon as={FaMailBulk} /> 285032439@qq.com
        </ListItem>
      </List>
    );
  };
  return (
    <Grid h="100%" w={sideBarWidth} templateRows="1fr 2fr 2fr 1fr" bg="#292929">
      <Center>
        <Box h={avatarWidth} w={avatarWidth} borderRadius="50%" bg="red.200" />
      </Center>
      <GridItem>
        <SubTitle text="基本信息" />
        <Center h="100%">
          <BasicInfo />
        </Center>
      </GridItem>
      <GridItem border="1px solid black" />
      <GridItem border="1px solid black" />
    </Grid>
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
