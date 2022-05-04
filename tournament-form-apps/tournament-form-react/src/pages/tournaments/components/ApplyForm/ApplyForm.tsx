import styled from "styled-components"

const FormCover = styled.div`
  position: fixed;
  display: flex;
  align-items: center;
  justify-content: center;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  background-color: rgba(100, 100, 100, 0.75);
`;

const FormContainer = styled.div`
  background-color: white;
  border-radius: 10px;
  padding: 20px;
`

export const ApplyForm = () => {
  return (
    <FormCover>
      <FormContainer>prraa?</FormContainer>
    </FormCover>
  )
}