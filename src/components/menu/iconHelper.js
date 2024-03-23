import HomeIcon from "./../../assets/botao-home.png";
import ShortsIcon from "./../../assets/youtube-shorts-logo.png";
import ReprodutionIcon from "./../../assets/lista-de-reproducao.png";
import LibIcon from "./../../assets/multimidia.png";
import HistoricoIcon from "./../../assets/historia.png";

export function getIconByItemName(itemName) {
  switch (itemName) {
    case 'Início':
      return HomeIcon;
    case 'Shorts':
      return ShortsIcon;
    case 'Inscrições':
      return ReprodutionIcon;
    case 'Biblioteca':
      return LibIcon;
    case 'Histórico':
      return HistoricoIcon;
    default:
      return null;
  }
}
