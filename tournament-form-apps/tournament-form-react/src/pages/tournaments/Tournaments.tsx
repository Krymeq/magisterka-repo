import React, { useEffect, useState } from 'react';
import { connect } from 'react-redux';
import { useParams } from 'react-router-dom';
import styled from 'styled-components';
import { Tournament } from '../../domain/Tournament';
import { AppDispatch, RootState } from '../../redux/store';
import { fetchTournaments } from '../../redux/tournaments/Actions';
import { ApplyForm } from './components/ApplyForm/ApplyForm';
import { PageControl } from './components/PageControl';
import { TournamentNode } from './components/TournamentNode';

interface StateProps {
  tournaments: Tournament[];
}

interface DispatchProps {
  fetchTournaments: (id: number, page: number) => void;
}

const TournamentContainer = styled.div`
  max-width: 1200px;
  margin: 20px auto;
`

type Props = StateProps & DispatchProps;

const DisconnectedTournaments: React.FC<Props> = ({ tournaments, fetchTournaments }) => {
  const { id } = useParams();
  const [page, setPage] = useState(1);
  useEffect(() => { 
    if (id)
      fetchTournaments(parseInt(id), page) 
    }, [page]);

  return (
    <TournamentContainer>
      <ApplyForm />
      <PageControl currentPage={page} setPage={setPage}/>
      {tournaments.map(tournament => <TournamentNode key={tournament.id} tournament={tournament} />)}
    </TournamentContainer>
  )
}

const mapStateToProps = (state: RootState): StateProps => ({
  tournaments: state.tournaments.tournaments,
});

const mapDispatchToProps = (dispatch: AppDispatch): DispatchProps => ({
  fetchTournaments: (id: number, page: number) => dispatch(fetchTournaments({disciplineId: id, page: page})),
});

export const Tournaments = connect(mapStateToProps, mapDispatchToProps)(DisconnectedTournaments);
