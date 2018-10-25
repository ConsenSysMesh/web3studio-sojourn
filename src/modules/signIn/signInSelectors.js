import { createSelector } from 'reselect';

const selectSignIn = state => state.signIn;
const selectUPort = createSelector(selectSignIn, signIn => signIn.uport);

export const isSignedIn = createSelector(selectUPort, uport => !!uport.address);
