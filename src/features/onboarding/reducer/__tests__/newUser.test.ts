import { AnyAction } from 'redux';

import { RegisterNewUserDto, UserFragment } from '../../graphql';
import reducer, {
  initialState,
  resetFormData,
  setPrefillUserInfo,
  updateFormData,
} from '../newUser';

const mockUserInfo: UserFragment['userInfo'] = {
  __typename: 'UserInfo',
  email: 'name.nameson@mail.com',
  birthdate: '1977-07-01',
  name: 'Alexander Nameson',
  firstName: 'Alexander',
  lastName: 'Nameson',
  phone: '48000102',
  address: {
    __typename: 'UserInfoAddress',
    street: 'Downing street',
    streetNumber: '9',
    zipCode: '100140',
    city: 'London',
  },
  consents: {
    __typename: 'UserConsents',
    improvement: true,
    personalisation: true,
    statistics: true,
  },
};

const mockFormData: Partial<RegisterNewUserDto> = {
  email: 'name.nameson@mail.com',
  birthdate: '1977-07-01',
  firstName: 'Alexander',
  lastName: 'Nameson',
  marketingAgreement: false,
  phone: '48000102',
  street: 'Downing street',
  streetNumber: '9',
  zipCode: '100140',
  city: 'London',
};

describe('readerSettings reducer', () => {
  it('should return the initial state', () => {
    expect(reducer(undefined, {} as AnyAction)).toEqual(initialState);
  });

  it('should handle prefill user info action', () => {
    expect(
      reducer(undefined, setPrefillUserInfo({ prefillUserInfo: mockUserInfo })),
    ).toEqual({
      hasSeenWelcomeScreen: false,
      prefillUserInfo: mockUserInfo,
      formData: mockFormData,
    });
  });

  it('should handle update and reset form data action', () => {
    let state = reducer(
      undefined,
      setPrefillUserInfo({ prefillUserInfo: mockUserInfo }),
    );
    state = reducer(
      state,
      updateFormData({ formData: { zipCode: '000111', firstName: 'Adam' } }),
    );
    expect(state).toEqual({
      hasSeenWelcomeScreen: false,
      prefillUserInfo: mockUserInfo,
      formData: {
        ...mockFormData,
        zipCode: '000111',
        firstName: 'Adam',
      },
    });
    state = reducer(state, resetFormData());
    expect(state).toEqual({
      hasSeenWelcomeScreen: false,
      prefillUserInfo: mockUserInfo,
      formData: mockFormData,
    });
  });
});
