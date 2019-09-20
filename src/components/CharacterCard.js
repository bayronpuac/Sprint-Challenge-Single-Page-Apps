import React from 'react';
import { Card, CardText } from 'reactstrap';

const CharacterCard = props => {
  const { name} = props.character;
  return (
    <div class="card">
        <Card>
          <CardText>{name}</CardText>
        </Card>
    </div>
  );
};

export default CharacterCard;