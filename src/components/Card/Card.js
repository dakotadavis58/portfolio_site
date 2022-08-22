import { Button } from "../../globalStyles";
import {
  Action,
  Actions,
  Description,
  StyledContainer,
  StyledPhoto,
  Title,
} from "./Card.elements";

const Card = ({ title, description, comments, likes, views, actions }) => (
  <StyledContainer>
    <StyledPhoto src="https://images.unsplash.com/photo-1620325867502-221cfb5faa5f?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1157&q=80" />
    <Title>{title}</Title>
    <Description>{description}</Description>
    <Actions>
      {actions.map(({ label }) => (
        <Button fontBig primary>
          {label}
        </Button>
      ))}
    </Actions>
  </StyledContainer>
);

export default Card;
