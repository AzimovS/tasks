import React from 'react';
import ReactPlayer from "react-player";
import styled from 'styled-components';

const StyledVideoWrapper = styled.div`
  padding: 1rem;
`

type Props = {
  url: string;
  onClose?: () => void;
  replaceImage?: boolean;
}

const VideoPlayer: React.FC<Props> = ({ url, onClose, replaceImage }) => {
  const closeHandler = () => {
    if (onClose) {
      onClose();
    }
  }

  return (
    <StyledVideoWrapper>
      <button onClick={onClose}>Close</button>
      {!replaceImage && <ReactPlayer url={url}/>}
      {replaceImage && (<ReactPlayer url={url} width={"200px"} height={"200px"} playing={true}/>)}
    </StyledVideoWrapper>
  )
}

export default VideoPlayer;