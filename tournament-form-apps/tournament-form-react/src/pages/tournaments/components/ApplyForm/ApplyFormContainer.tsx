import styled from "styled-components"
import { ApplyForm } from "./ApplyForm";

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
  min-width: 700px;
  padding: 20px;
`

export const ApplyFormContainer = () => {
  return (
    <FormCover>
      <FormContainer>
        <ApplyForm />
      </FormContainer>
    </FormCover>
  )
}