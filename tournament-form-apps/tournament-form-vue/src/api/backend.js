export const getDisciplines = () =>
    fetch('http://localhost:3456/disciplines')
        .then(res => res.json());

export const getTournaments = (disciplineId, page = 1) =>
    fetch(`http://localhost:3456/disciplines/${disciplineId}/tournaments?page=${page}`)
        .then(res => res.json()).then(res => res.tournaments);