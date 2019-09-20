import React from 'react';
import {
  Card, CardImg, CardText, CardBody,
  CardTitle, CardSubtitle, Button
} from 'reactstrap';

const CharacterCard = props => {
  const { image, name, species, type, status, episode } = props.character;
  return (
    <div class="card">
      <Card>
        <CardImg top width="20%" src={image} alt="Card image cap" />
        <CardBody>
          <CardTitle>Name: {name}</CardTitle>
          <CardSubtitle>Species: {species}</CardSubtitle>
          <CardText>Status: {status}</CardText>
        </CardBody>
      </Card>
    </div>
  );
};

export default CharacterCard;