import React, { useContext } from 'react';
import ReactPlayer from "react-player";
import styled from 'styled-components';
import { MovieContext } from '../../contexts/MovieContext';

const StyledVideoWrapper = styled.div`
  padding: 1rem;
`

type Props = {
  url?: string;
  onClose?: () => void;
  replaceImage?: boolean;
}

const VideoPlayer: React.FC<Props> = ({ url, replaceImage }) => {
  const { movie, changeMovie } = useContext(MovieContext);


  const closeHandler = () => {
    changeMovie(null);
  }

  return movie ? (
    <StyledVideoWrapper>
      <button onClick={closeHandler}>Close</button>
      {!replaceImage && <ReactPlayer url={movie.trailer}/>}
      {replaceImage && (<ReactPlayer url={url} width={"200px"} height={"200px"} playing={true}/>)}
    </StyledVideoWrapper>
  ) : null;
}

export default VideoPlayer;