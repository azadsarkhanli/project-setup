import { RegisterNewUserDto, UserFragment } from '../graphql';

export const formatAddress = (data: Partial<RegisterNewUserDto>) => {
  const streetPart = [data.street, data.streetNumber]
    .filter(s => !!s)
    .join(' ');
  const cityPart = [data.zipCode, data.city].filter(s => !!s).join(' ');
  if (!streetPart && !cityPart) {
    return '';
  }

  return [streetPart, cityPart].filter(s => !!s).join(', ');
};

export const toRegisterNewUserDto = (
  userInfo: UserFragment['userInfo'],
): Partial<RegisterNewUserDto> => ({
  birthdate: userInfo?.birthdate,
  city: userInfo?.address.city || '',
  email: userInfo?.email,
  firstName: userInfo?.firstName,
  lastName: userInfo?.lastName,
  phone: userInfo?.phone || '',
  street: userInfo?.address.street,
  streetNumber: userInfo?.address.streetNumber,
  zipCode: userInfo?.address.zipCode,
  marketingAgreement: false,
});
