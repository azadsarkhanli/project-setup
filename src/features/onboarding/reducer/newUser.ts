import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { PURGE } from 'redux-persist';

import { RegisterNewUserDto, UserFragment } from '../graphql';
import { toRegisterNewUserDto } from '../lib/userData';

const name = 'newUser' as const;
type RootState = { newUser: NewUserState };

export type NewUserState = {
  prefillUserInfo: UserFragment['userInfo'];
  hasSeenWelcomeScreen: boolean;
  formData: Partial<RegisterNewUserDto>;
};

export const initialState: NewUserState = {
  prefillUserInfo: null,
  hasSeenWelcomeScreen: false,
  formData: {
    firstName: '',
    lastName: '',
    street: '',
    streetNumber: '' || 0,
    zipCode: '',
    city: '',
    marketingAgreement: false,
  },
};

export type SetPrefillUserInfo = {
  prefillUserInfo: UserFragment['userInfo'];
};

export type UpdateData = {
  formData: Partial<RegisterNewUserDto>;
};

export const slice = createSlice({
  name,
  initialState,
  reducers: {
    setPrefillUserInfo: (
      state,
      { payload: { prefillUserInfo } }: PayloadAction<SetPrefillUserInfo>,
    ) => {
      state.prefillUserInfo = prefillUserInfo;
      state.formData = toRegisterNewUserDto(prefillUserInfo);
    },
    resetFormData: state => {
      state.formData = toRegisterNewUserDto(state.prefillUserInfo);
    },
    updateFormData: (state, { payload }: PayloadAction<UpdateData>) => {
      state.formData = {
        ...state.formData,
        ...payload.formData,
      };
    },
    markWelcomeScreenAsSeen: state => {
      state.hasSeenWelcomeScreen = true;
    },
  },
  extraReducers: builder => {
    builder.addCase(PURGE, () => initialState);
  },
});

export const {
  setPrefillUserInfo,
  resetFormData,
  updateFormData,
  markWelcomeScreenAsSeen,
} = slice.actions;

export const prefillUserInfo = (state: RootState) =>
  state.newUser.prefillUserInfo;

export const hasSeenWelcomeScreen = (state: RootState) =>
  state.newUser.hasSeenWelcomeScreen;

export const newUserFormData = (state: RootState) => state.newUser.formData;

export default slice.reducer;
