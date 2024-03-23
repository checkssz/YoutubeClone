import KindVideos from "../../components/kindVideos";
import VideoComponent from "../../components/videoComponent";
import { Container } from "./styles";
import { useGlobalContext } from "../../GlobalContext";

function Home(){
    const { state } = useGlobalContext();
    
    return(
        <>
        <KindVideos/>
        <Container openMenu= {state.isMenuOpen}>
            <VideoComponent />
            <VideoComponent />
            <VideoComponent />
            <VideoComponent />
            <VideoComponent />
            <VideoComponent />
            <VideoComponent />
            <VideoComponent />
            <VideoComponent />
            <VideoComponent />
            <VideoComponent />
            <VideoComponent />
            <VideoComponent />
            <VideoComponent />
            <VideoComponent />
        </Container>        
        </>
    )
}

export default Home;