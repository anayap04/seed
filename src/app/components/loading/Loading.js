import React from "react";
import BeatLoader from "react-spinners/BeatLoader";
import { Modal } from "./styles";

const Loading = (props) => {
  const { isLoading, theme } = props;
  const override = {
    display: "block",
    margin: "0 auto",
    borderColor: theme.primaryColor,
  };
  return (
    <Modal>
      <BeatLoader
        color={theme.primaryColor}
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
