import { Banner, ChannelImage, Container, ImageBanner, TextCard, TextContainer, Title, TitleContainer } from "./style";

interface Props {
    title: string
    thumbnail: string
    channelImage: string
    channelName: string
    details: string
  }
  
  function VideoCard(props : Props) {
  
    return (
      <Container>
        <Banner alt="thumbnail" src={props.thumbnail}/>
        <TitleContainer>
          <ChannelImage>
            {props.channelImage}
          </ChannelImage>
          <TextContainer>
            <Title>{props.title}</Title>
            <TextCard>{props.channelName}</TextCard>
            <TextCard>{props.details}</TextCard>
          </TextContainer>
        </TitleContainer>
      </Container>
    )
  }
  
  export default VideoCard;