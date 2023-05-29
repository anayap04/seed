import React from 'react';
import BeatLoader from 'react-spinners/BeatLoader';
import { Modal } from './styles';
import { useTheme } from 'styled-components';

const Loading = (props) => {
  const { isLoading } = props;
  const theme = useTheme();
  const override = {
    display: 'block',
    margin: '0 auto',
    borderColor: theme.colors.green
  };
  return (
    <Modal>
      <BeatLoader
        color={theme.colors.green}
        loading={isLoading}
        cssOverride={override}
        size={150}
        aria-label="Loading Spinner"
        data-testid="loader"
      />
    </Modal>
  );
};

export default Loading;
