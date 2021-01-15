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
  grid-template-columns: 1fr 1fr;
  max-width: 300px;
  margin:0 auto;
`;

const GridItem = styled.div(({textalign = 'center', marginbottom = 0}) => css`
  font-Size: 14px;
  text-align: ${textalign};
  margin-bottom: ${marginbottom}
`);

const Span =  styled.span(({themeKey}) => css`${Theme.textTypes[themeKey]}`);


const Fonts = () => {
  return (
    <ContainerPage>
      <Title>Tabla de Fuentes</Title>
      <ContainerGrid>
        <>
          <GridItem marginbottom="20px">Fuente</GridItem>
          <GridItem marginbottom="20px">Nombre</GridItem>
          { 
            Theme.textTypes && 
            Object.keys(Theme.textTypes).map((key) => (
              <>
                <GridItem marginbottom="25px"><Span themeKey={key}>Fuente</Span></GridItem>
                <GridItem marginbottom="25px">{key}</GridItem>
              </>
            ))
          }
        </>
      </ContainerGrid>
    </ContainerPage>
  );
};

export default {
  title: "Theme",
  component: Fonts,
};

const Template = (args) => <Fonts {...args} />;

export const fonts = Template.bind({});
fonts.args = {};
