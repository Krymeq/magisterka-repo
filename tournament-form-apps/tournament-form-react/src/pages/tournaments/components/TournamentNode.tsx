import { connect } from "react-redux";
import styled from "styled-components";
import { Tournament } from "../../../domain/Tournament"
import { AppDispatch } from "../../../redux/store";
import { selectTournament } from "../../../redux/tournaments/Actions";

const Node = styled.div`
  font-size: 1.1em;
  background-color: #def;
  display: flex;
  justify-content: space-between;
  padding: 12px;
  margin-bottom: 10px;
  border-radius: 10px;
`;

const ApplyButton = styled.button`
  all: unset;
  margin-left: 300px;
  text-transform: uppercase;
  letter-spacing: 1px;
  user-select: none;
  color: #00a;
  cursor: pointer;
  &:hover {
    color: #39f;
  }

  &:active {
    color: #6cf;
  }
`;

interface DispatchProps {
  selectTournament: (id: number) => void;
}

interface OwnProps {
  tournament: Tournament;
}

type Props = DispatchProps & OwnProps;

const DisconnectedNode: React.FC<Props> = ({ tournament, selectTournament }) => {
  return (
  <Node>
    {tournament.name}
    <ApplyButton onClick={() => selectTournament(tournament.id)}>
      Sign in
    </ApplyButton>
  </Node>
  );
}

const mapDispatchToProps = (dispatch: AppDispatch): DispatchProps => ({
  selectTournament: (id) => dispatch(selectTournament(id)),
})

export const TournamentNode = connect(() => ({}), mapDispatchToProps)(DisconnectedNode);