import { ErrorMessage, Field, FieldArray, Form, Formik } from "formik";
import { useDispatch } from "react-redux";
import styled from "styled-components";
import * as Yup from "yup";
import { selectTournament } from "../../../../redux/tournaments/Actions";

const blankParticipant = {
  name: '',
  email: '',
  dateOfBirth: new Date().toISOString().slice(0, 10),
}

const FieldContainer = styled.div`
  display: flex;
  flex-direction: column;
`;

const ParticipantsHolder = styled.div`
  padding: 20px 0;
`

const ParticipantContainer = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  align-items: center;
  grid-template-rows: 1fr 1fr;
  border-bottom: 1px solid #ccc;
  padding-bottom: 10px;
  margin-bottom: 10px;
`

const ErrorLabel = styled.div`
  color: red;
  font-size: 0.7em;
`;

const Header = styled.header`
  display: flex;
  justify-content: space-between;
`

const Button = styled.button`
  all: unset;
  user-select: none;
  cursor: pointer;
  ${props => props.theme === 'primary'
    ? `
      padding: 8px 15px;
      border-radius: 6px;
      background-color: #00a;
      color: white;
    `: `
      color: #00a;
    `}

  &:hover {
    ${props => props.theme === 'primary'
    ? `
      background-color: #39f;
      color: white;
    `: `
      color: #39f;
    `}
  }

  &:active {
    ${props => props.theme === 'primary'
    ? `
      background-color: #6cf;
      color: white;
    `: `
      color: #6cf;
    `}
  }
`;

const StyledTextfield = styled(Field)`
  padding: 6px;
  width: min(300px, 100%);
`

const ButtonContainer = styled.div`
  display: flex;
  gap: 10px;
`

export const ApplyForm = () => {
  const dispatch = useDispatch();

  return (
    <Formik
      onSubmit={form => console.log(form)}

      initialValues={{
        teamName: '',
        teamShortcut: '',
        participants: [{
          ...blankParticipant
        }],
      }}

      validationSchema={Yup.object({
        teamName: Yup.string()
          .required('Required')
          .max(20, 'Must be 20 letters or less'),
        teamShortcut: Yup.string()
          .required('Required')
          .min(2, 'Must contain 2 or 3 letters/digits')
          .max(3, 'Must contain 2 or 3 letters/digits'),
        participants: Yup.array().of(Yup.object({
          name: Yup.string()
            .required('Required'),
          email: Yup.string()
            .email('Field should contain valid e-mail address')
            .required('Required'),
          dateOfBirth: Yup.date()
            .min('01-01-1900', 'Date cannot be earlier than January 1st, 1900')
            .max(new Date(), 'Date cannot come from the future')
        }))
      })}>

      {({ values }) => (
        <Form>
          <FieldContainer>
            <label htmlFor="teamName">Team name</label>
            <StyledTextfield name="teamName" type="text" />
            <ErrorMessage name="teamName" component={ErrorLabel} />
          </FieldContainer>

          <FieldContainer>
            <label htmlFor="teamShortcut">Team shortcut</label>
            <StyledTextfield name="teamShortcut" type="text" />
            <ErrorMessage name="teamShortcut" component={ErrorLabel} />
          </FieldContainer>

          <FieldArray
            name="participants"
            render={({ remove, push }) => (
              <ParticipantsHolder>
                <Header>
                  <div>
                    Participants
                  </div>
                  <Button
                    type="button"
                    theme="primary"
                    onClick={() => push({ ...blankParticipant })}
                  >
                    Add participant
                  </Button>
                </Header>
                {values.participants.map((_, idx) => (
                  <ParticipantContainer key={idx}>
                    <FieldContainer>
                      <label htmlFor={`participants.${idx}.name`}>Name</label>
                      <StyledTextfield name={`participants.${idx}.name`} type="text" />
                      <ErrorMessage name={`participants.${idx}.name`} component={ErrorLabel} />
                    </FieldContainer>

                    <FieldContainer>
                      <label htmlFor={`participants.${idx}.email`}>E-mail</label>
                      <StyledTextfield name={`participants.${idx}.email`} type="email" />
                      <ErrorMessage name={`participants.${idx}.email`} component={ErrorLabel} />
                    </FieldContainer>

                    <FieldContainer>
                      <label htmlFor={`participants.${idx}.dateOfBirth`}>Date of birth</label>
                      <StyledTextfield name={`participants.${idx}.dateOfBirth`} type="date" />
                      <ErrorMessage name={`participants.${idx}.dateOfBirth`} component={ErrorLabel} />
                    </FieldContainer>

                    <div>
                      <Button
                        type="button"
                        onClick={() => remove(idx)}>
                        Remove
                      </Button>
                    </div>
                  </ParticipantContainer>
                ))}
              </ParticipantsHolder>
            )}
          />
          <ButtonContainer>
            <Button type='submit' theme="primary">Submit</Button>
            <Button
              type="button"
              theme="secondary"
              onClick={() => dispatch(selectTournament(undefined))}
            >Cancel</Button>
          </ButtonContainer>
        </Form>
      )}
    </Formik>
  );
}