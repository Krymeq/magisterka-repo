import { useEffect } from "react";
import { connect } from "react-redux"
import styled from "styled-components";
import { Discipline } from "../../domain/Discipline";
import { fetchDisciplines } from "../../redux/disciplines/Actions";
import { AppDispatch, RootState } from "../../redux/store";
import { DisciplineNode } from "./components/DisciplineNode";

const DisciplineContainer = styled.div`
    max-width: 1200px;
    margin: 20px auto;
`;

interface StateProps {
    disciplines: Discipline[],
}

interface DispatchProps {
    loadDisciplines: () => void;
}

type Props = StateProps & DispatchProps;

const DisconnectedDisciplines: React.FC<Props> = ({loadDisciplines, disciplines}) => {
    useEffect(() => { loadDisciplines() }, []);
    return (
        <DisciplineContainer>
            {disciplines.map(discipline => <DisciplineNode key={discipline.id} discipline={discipline}/>)}
        </DisciplineContainer>
    )
}

const mapStateToProps = (state: RootState): StateProps => ({
    disciplines: state.disciplines.disciplines,
})

const mapDispatchToProps = (dispatch: AppDispatch): DispatchProps => ({
    loadDisciplines: () => dispatch(fetchDisciplines()),
})

export const Disciplines = connect(mapStateToProps, mapDispatchToProps)(DisconnectedDisciplines)