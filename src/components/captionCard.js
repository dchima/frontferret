import React from 'react';
import styled from 'styled-components';
import { Basics, Screen } from 'styles';


const Card = styled.div`
  border-radius: 30px;
  box-shadow: 0px 4px 5px ${Basics.colors.chalk};
  position: relative;
  display: flex;
  flex-direction: column;
  margin-right: 30px;
  margin-bottom: 40px;
  height: 250px;
  width: 230px;
  background-color: ${Basics.colors.white};
  ${Screen.largePhone`
    margin: 20px;
    width: 100%;
    height: 210px;
  `};
  ${Screen.smallPhone`
  margin: 10px 3px;
  width: 300px;
`};
`;

const ContentContainer = styled.div`
  padding: 10px 30px;
  overflow: hidden;
  ${Screen.largeScreen`
  padding: 10px 20px;
  `};
  ${Screen.tablet`
    padding: 40px 20px;
  `};
`;

const Text = styled.p`
  color: ${Basics.colors.laserBlue};
  font-weight: 800;
  font-size: 15px;
  padding-top: 50px;
  
  ${Screen.tablet`
    padding-top: 0px;
  `};
`;


const TalkCard = ({ content }) => {
    let caption = [...content.caption];
    caption[0] = caption[0].toUpperCase();
    caption = caption.join('');
    return (
      <Card>
        <ContentContainer>
          <Text>
            {caption}
          </Text>
        </ContentContainer>
      </Card>
    );
};
export default TalkCard;
