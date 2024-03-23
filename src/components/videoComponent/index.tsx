import { ChannelImage, Container, ImageBanner, TextCard, TextContainer, Title, TitleContainer } from "./style";

function VideoComponent() {
    return ( 
        <Container>
        <ImageBanner src="https://i.ytimg.com/vi/q0M5FQbgiQY/maxresdefault.jpg"/>
        <TitleContainer>
        <ChannelImage>
            LD
        </ChannelImage>
        <TextContainer>
            <Title>LOUD Valorant: Campeã Mundial da Champions 2022</Title>
            <TextCard>LOUD</TextCard>
            <TextCard>247 mil visualizações - há 1 ano</TextCard>
        </TextContainer>
        </TitleContainer>
        </Container>
     )
}

export default VideoComponent;