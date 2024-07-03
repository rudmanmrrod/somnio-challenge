import styled from 'styled-components';

const ImageContent = styled.div<{
  src: string;
}>`
  width: 100%;
  height: 250px;
  background-image: url('${props => props.src}');
  background-position: center;
  background-repeat: no-repeat;
  background-size: contain;
}
`;

export default ImageContent;

