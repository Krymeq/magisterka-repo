const range = (max) => Array(max).fill(0).map((_, ind) => ind)

export const generateTournaments = (amount) => {
    return range(amount).map((num, index) => ({
        id: num,
        name: `Tournament ${num}`,
        participants: Math.ceil(Math.random() * 4),
        disciplineId: index % 10,
    }));
}