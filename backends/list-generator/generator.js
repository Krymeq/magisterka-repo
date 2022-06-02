export const generateList = () => Array(10000).fill(0).map((_, index) => ({
    id: index + 1, 
    header: `header${index + 1}`, 
    flag: !!(index % 2),
    text: `sampletextsampletextsampletextsampletextsampletextsampletextsampletext${index + 1}`,
    someNumber: index * 20,
}));

