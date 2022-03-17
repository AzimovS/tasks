import React from 'react';
import ReactPlayer from "react-player";
import styled from 'styled-components';

const StyledVideoWrapper = styled.div`
  padding: 1rem;
`

type Props = {
  url: string;
  onClose?: () => void;
}

const VideoPlayer: React.FC<Props> = ({ url, onClose }) => {
  const closeHandler = () => {
    if (onClose) {
      onClose();
    }
  }

  return (
    <StyledVideoWrapper>
      <button onClick={onClose}>Close</button>
      <ReactPlayer url={url} />
    </StyledVideoWrapper>
  )
}

export default VideoPlayer;