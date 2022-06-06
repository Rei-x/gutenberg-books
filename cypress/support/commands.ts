/// <reference types="cypress" />
// ***********************************************
// This example commands.ts shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
import { auth } from "@/firebase";
import { deleteUser, signInAnonymously } from "firebase/auth";
Cypress.Commands.add("deleteUser", () => {
  if (auth.currentUser) {
    deleteUser(auth.currentUser);
  }
});
Cypress.Commands.add("login", () => {
  if (!auth.currentUser) {
    signInAnonymously(auth);
  }
});
//
//
// -- This is a child command --
// Cypress.Commands.add('drag', { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add('dismiss', { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite('visit', (originalFn, url, options) => { ... })
//
declare global {
  namespace Cypress {
    interface Chainable {
      login(): Chainable<void>;
      deleteUser(): Chainable<void>;
    }
  }
}
