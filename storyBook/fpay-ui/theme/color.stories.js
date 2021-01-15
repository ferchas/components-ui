import React from "react";
import styled, { css } from "styled-components";

import Theme from ".";


const ContainerPage = styled.div`
  margin-right: 10px;
  text-align: center;
`;

const Title = styled.h4`
  margin-right: 10px;
`;

const ContainerGrid = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  max-width: 300px;
  margin:0 auto;
`;

const GridItem = styled.div(({textalign = 'center', marginbottom = 0}) => css`
  font-Size: 14px;
  text-align: ${textalign};
  margin-bottom: ${marginbottom}
`);

const ColorBox =styled.span(({ color }) => css`
  width: 50px;
  height: 50px; 
  background-color: ${color};
  display: inline-block;
`);

const Colors = ()=> {
  return (
    <ContainerPage>
      <Title>Tabla de colores</Title>
      <ContainerGrid>
        <>
          <GridItem marginbottom="20px">Color</GridItem>
          <GridItem marginbottom="20px"> Name</GridItem>
          <GridItem marginbottom="20px">Code</GridItem>
            {
              Theme.colors && Object.keys(Theme.colors).map((key) => (
                <>
                <GridItem><ColorBox color={Theme.colors[key]} /></GridItem>
                <GridItem align="left">{key}</GridItem>
                <GridItem>{Theme.colors[key]}</GridItem>
                </>
              ))
            }
         </>
      </ContainerGrid>
    </ContainerPage>
  );
};


const exe = { color: "red"};
export default {
  title: "Theme",
  component: Colors,
  parameters: {
    controls: {
      disabled: true,
      hidden: true 
    },
    actions: {
      disabled: true,
      hidden: true 
    },
    previewTabs: {
      canvas: { hidden: true },
      docs:{ selected: true }
    }
  },
};

const Template = (args) => <Colors {...args} />;

export const color = Template.bind({});
