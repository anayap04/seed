import React from 'react';
import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { useTranslation } from 'react-i18next';
import { useDispatch } from 'react-redux';
import { fetchUser, userUpdateFetch } from '../../../redux/actions/user';
import { getDocumentPerCountry } from '../../../utils/mappers';
import Input from '../../components/atoms/input';
import ListView from '../../components/list-view';
import SecondaryBtn from '../../components/atoms/buttons/Secondary';
import { ProfileInfoInputs, BtnFooter, ContainerProfile, ColProfile, RowProfile } from './styles';
import PhoneNumberInput from '../../components/atoms/input/PhoneNumberInput';

const ProfileSummary = (props) => {
  const { userInfo } = props;
  const { t } = useTranslation();
  const dispatch = useDispatch();
  const { register, handleSubmit } = useForm();
  const [disabled, setDisabled] = useState();
  const [listOpen, setList] = useState(false);
  const [value, setValue] = useState();

  const profileArray = [
    { id: 'firstName', value: userInfo.firstName, label: t('nameField') },
    { id: 'lastName', value: userInfo.lastName, label: t('lastnameField') },
    { id: 'email', value: userInfo.email, label: t('mailField') },
    { id: 'pass', value: '******', label: t('labelPass') },
    {
      id: 'countryCode',
      value: userInfo.countryCode,
      label: t('countryField')
    },
    { id: 'phoneNumber', value: userInfo.phoneNumber, label: t('phoneField') },
    { id: 'identifier', value: userInfo.identifier, label: t('idField') },
    {
      id: 'identifierType',
      value: userInfo.identifierType,
      label: t('documentType'),
      hasList: true
    }
  ];

  const openList = () => setList(true);
  const closeList = () => setList(false);

  const clickPressed = () => (disabled ? setDisabled(!disabled) : null);
  const onSubmit = (data) => {
    dispatch(
      userUpdateFetch({
        firstName: data.firstName,
        lastName: data.lastName,
        phoneNumber: parseInt(data.phoneNumber),
        identifier: data.identifier,
        identifierType: value || data.identifierType
      })
    );
    dispatch(fetchUser());
    setDisabled(true);
  };
  const onError = (errors, e) => console.log(errors, e);

  return (
    <ProfileInfoInputs>
      <form onSubmit={handleSubmit(onSubmit, onError)}>
        <ContainerProfile>
          <RowProfile>
            {profileArray.map((info, e) => (
              <ColProfile xl={3} lg={3} md={4} sm={6} key={e}>
                {info.id === 'phoneNumber' ? (
                  <PhoneNumberInput label={info.label} defaultCountry={userInfo.countryCode} />
                ) : (
                  <Input
                    key={e}
                    labelTitle={info.label}
                    iconName="Edit"
                    disabled={disabled}
                    defaultValue={info.value}
                    value={info.hasList && value}
                    onClick={() => clickPressed()}
                    label={info.id}
                    register={register}
                    onFocus={() => (info.hasList ? openList() : closeList())}
                    onBlur={() => info.hasList && closeList()}
                  />
                )}
                {info.hasList && listOpen && (
                  <ListView
                    arrayItems={getDocumentPerCountry(userInfo.countryCode)}
                    setValue={setValue}
                    setList={setList}
                    width={150}
                  />
                )}
              </ColProfile>
            ))}
          </RowProfile>
        </ContainerProfile>
        <BtnFooter>
          <SecondaryBtn type="submit" label={t('updateBtn')} />
        </BtnFooter>
      </form>
    </ProfileInfoInputs>
  );
};

export default ProfileSummary;
