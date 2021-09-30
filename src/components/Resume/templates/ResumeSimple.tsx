import { Box, SimpleGrid, Progress } from "@chakra-ui/react";
import { Paper, PaperContext } from "./Paper";

const Section: React.FunctionComponent = ({ children }) => {
  return <Box m={10}>{children}</Box>;
};

const Header = () => {
  return (
    <Box position="relative">
      <Box textAlign="center">
        <Box fontSize={50} fontWeight="extrabold">
          你的名字
        </Box>
        <Box fontSize={22}>一句话介绍你自己</Box>
        <Box fontSize={22}>年龄|应届生|13800138000|100000000@qq.com</Box>
      </Box>
      <Box
        position="absolute"
        bg="blue.200"
        w={150}
        h={200}
        top={0}
        right={0}
      />
    </Box>
  );
};

const Title = ({ text }: { text: string }) => {
  return (
    <Box py={2} fontSize={30} fontWeight="bold" borderBottom="1px solid black">
      {text}
    </Box>
  );
};

const Experience = () => {
  return (
    <>
      <Box mt={2} fontSize={25} overflow="auto">
        <Box float="left">2019.06 - 2020.09</Box>
        <Box float="right" ml={10}>
          填写专业名称
        </Box>
        <Box float="right">填写公司名称</Box>
      </Box>
    </>
  );
};

const TextBox = ({ text }: { text: string }) => {
  return (
    <Box mt={2} fontSize={25}>
      {text}
    </Box>
  );
};

const Capability = () => {
  const CapabilityItem = () => {
    return (
      <Box>
        <Box mt={2} fontSize={22} overflow="auto">
          <Box float="left">学习能力</Box>
          <Box float="right">熟练</Box>
        </Box>
        <Progress mt={2} value={80} />
      </Box>
    );
  };
  return (
    <SimpleGrid columns={3} rowGap={5} columnGap={20}>
      <CapabilityItem />
      <CapabilityItem />
      <CapabilityItem />
    </SimpleGrid>
  );
};

export const ResumeSimple: React.FunctionComponent = () => {
  return (
    <Paper>
      <Section>
        <Header />
      </Section>
      <Section>
        <Title text="求职意向" />
        <Experience />
        <TextBox text="akshdakjhdlkjahdlkahdklahlkdhakljshd" />
      </Section>
      <Section>
        <Title text="技能特长" />
        <Capability />
      </Section>
      <Section>
        <Title text="求职意向" />
        <Experience />
        <TextBox text="akshdakjhdlkjahdlkahdklahlkdhakljshd" />
      </Section>
      <Section>
        <Title text="求职意向" />
        <Experience />
        <TextBox text="akshdakjhdlkjahdlkahdklahlkdhakljshd" />
      </Section>
      <Section>
        <Title text="求职意向" />
        <Experience />
        <TextBox text="akshdakjhdlkjahdlkahdklahlkdhakljshd" />
      </Section>
    </Paper>
  );
};
