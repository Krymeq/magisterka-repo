import { useEffect } from "react";
import { connect } from "react-redux"
import { fetchDisciplines } from "../../redux/disciplines/Actions";
import { AppDispatch } from "../../redux/store";

interface Props {
    loadDisciplines: () => void;
}

const DisconnectedDisciplines: React.FC<Props> = ({loadDisciplines}) => {
    useEffect(() => { loadDisciplines() }, []);
    return <h1>HEDER</h1>
}

const mapDispatchToProps = (dispatch: AppDispatch): Props => ({
    loadDisciplines: () => dispatch(fetchDisciplines()),
})

export const Disciplines = connect(() => ({}), mapDispatchToProps)(DisconnectedDisciplines)