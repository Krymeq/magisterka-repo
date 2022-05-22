<script setup>
import { Field, Form, ErrorMessage, FieldArray } from 'vee-validate';
import { useTournaments } from '@/store/tournamentsStore';
import * as Yup from 'yup';

const blankParticipant = {
  name: '',
  email: '',
  dateOfBirth: new Date().toISOString().slice(0, 10),
}

const initialValues = {
  teamName: '',
  teamShortcut: '',
  participants: [{
    ...blankParticipant
  }],
}

const schema = Yup.object({
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
})

const state = useTournaments();
</script>

<template>
  <div class="form-cover">
    <div class="form-container">
      <Form :validation-schema="schema" :initial-values="initialValues">
        <div class="field-container">
          <label for="teamName">Team name</label>
          <Field name="teamName" type="text" />
          <ErrorMessage name="teamName" class="error-message" />
        </div>

        <div class="field-container">
          <label for="teamShortcut">Team shortcut</label>
          <Field name="teamShortcut" type="text" />
          <ErrorMessage name="teamShortcut" class="error-message" />
        </div>

        <FieldArray name="participants" v-slot="{ fields, push, remove }">
          <div class="participants-holder">
            <header>
              <div>
                Participants
              </div>
              <button type="button" class="primary" @click="push({...blankParticipant})">
                Add participant
              </button>
            </header>
            <div v-for="(_, idx) in fields" :key="idx" class="participant-container">
              <div class="field-container">
                <label :for="`participants[${idx}].name`">Name</label>
                <Field :name="`participants[${idx}].name`" type="text" />
                <ErrorMessage :name="`participants[${idx}].name`" class="error-message" />
              </div>

              <div class="field-container">
                <label :for="`participants[${idx}].email`">E-mail</label>
                <Field :name="`participants[${idx}].email`" type="email" />
                <ErrorMessage :name="`participants[${idx}].email`" class="error-message" />
              </div>

              <div class="field-container">
                <label :for="`participants[${idx}].dateOfBirth`">Date of birth</label>
                <Field :name="`participants[${idx}].dateOfBirth`" type="date" />
                <ErrorMessage :name="`participants[${idx}].dateOfBirth`" class="error-message" />
              </div>

              <div>
                <button type="button" @click="remove(idx)" class="secondary">
                  Remove
                </button>
              </div>
            </div>
          </div>
        </FieldArray>

        <div class="button-container">
          <button type="submit" class="primary">Submit</button>
          <button type="button" class="secondary" @click="state.selectTournament(undefined)">Cancel</button>
        </div>
      </Form>
    </div>
  </div>
</template>

<style lang="scss">
.form-cover {
  position: fixed;
  display: flex;
  align-items: center;
  justify-content: center;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  background-color: rgba(100, 100, 100, 0.75);
}

.form-container {
  background-color: white;
  border-radius: 10px;
  min-width: 700px;
  padding: 20px;
}

.field-container {
  display: flex;
  flex-direction: column;
}

.participants-holder {
  padding: 20px 0;
}

.participant-container {
  display: grid;
  grid-template-columns: 1fr 1fr;
  align-items: center;
  grid-template-rows: 1fr 1fr;
  border-bottom: 1px solid #ccc;
  padding-bottom: 10px;
  margin-bottom: 10px;
}

.error-message {
  color: red;
  font-size: 0.7em;
}

header {
  display: flex;
  justify-content: space-between;
}

button {
  all: unset;
  user-select: none;
  cursor: pointer;

  &.primary {
    padding: 8px 15px;
    border-radius: 6px;
    background-color: #00a;
    color: white;

    &:hover {
      background-color: #39f;
      color: white;
    }

    &:active {
      background-color: #6cf;
      color: white;
    }
  }

  &.secondary {
    color: #00a;

    &:hover {
      color: #39f;
    }

    &:active {
      color: #6cf;
    }
  }
}

input {
  padding: 6px;
  width: calc(min(300px, 100%));
}

.button-container {
  display: flex;
  gap: 10px;
}
</style>