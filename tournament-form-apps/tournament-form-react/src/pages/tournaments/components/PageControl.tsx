import styled from "styled-components";

interface Props {
  currentPage: number,
  setPage: (page: number) => void;
}

const ControlRoot = styled.div`
  margin-bottom: 10px;
`;

const ControlButton = styled.button`
  border: none;
  cursor: pointer;
  padding: 7px 15px;
  border-radius: 5px;
  margin-right: 5px;
`;

export const PageControl: React.FC<Props> = ({currentPage, setPage}) => {
  return (
    <ControlRoot>
      <ControlButton onClick={() => setPage(currentPage + 1)}>
        +1
      </ControlButton>
      {currentPage > 1 && 
      <ControlButton onClick={() => setPage(currentPage - 1)}>
        -1
      </ControlButton>}
      <span>Current page: {currentPage}</span>
    </ControlRoot>
  )
}