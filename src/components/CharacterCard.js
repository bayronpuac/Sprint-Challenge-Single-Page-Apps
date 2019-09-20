import React from 'react';
import {
  Card, CardImg, CardText, CardBody,
  CardTitle, CardSubtitle
} from 'reactstrap';


const CharacterCard = props => {
  const { image, name, species, status} = props.character;
  return (
      <Card>
        <CardImg top width="20%" src={image} alt="Card image cap" />
        <CardBody>
          <CardTitle>Name: {name}</CardTitle>
          <CardSubtitle>Species: {species}</CardSubtitle>
          <CardText>Status: {status}</CardText>
        </CardBody>
      </Card>
  );
};

export default CharacterCard;