import React from "react";
import styled from "styled-components";
import { Discipline } from "../../../domain/Discipline";
import { Link } from "react-router-dom";

const DisciplineRoot = styled.div`
  margin-bottom: 5px;
`;

const StyledLink = styled(Link)`
  color: #009;
  text-decoration: none;
  font-size: 1.1em;
  background-color: #def;
  display: block;
  padding: 12px;
  border-radius: 10px;
  &:hover {
    background-color: #ace;
  }
`;

interface Props {
  discipline: Discipline;
}

export const DisciplineNode: React.FC<Props> = ({ discipline }) => (
  <DisciplineRoot>
    <StyledLink to={`/disciplines/${discipline.id}/tournaments`}>
      {discipline.name}
    </StyledLink>
  </DisciplineRoot>
);