import styled from 'styled-components'
import { ReactComponent as AddSvg } from '../../assets/add.svg'
import { ReactComponent as AboutSvg } from '../../assets/about.svg'
import { ReactComponent as CloseSvg } from '../../assets/close.svg'
import { ReactComponent as ClosePopupSvg } from '../../assets/close.svg'
import { ReactComponent as HelpSvg } from '../../assets/help.svg'
import { ReactComponent as SearchSvg } from '../../assets/search-btn.svg'
import { ReactComponent as BackSvg } from '../../assets/back.svg'

const Add = styled(AddSvg)`
  position: fixed;
  right: 1vw;
  top: 1vw;

  @media screen and (min-width: 320px) and (max-width: 640px) {
    position: fixed;
    width: 10vw;
    right: 1vw;
    top: 1vw;
  }
`

const About = styled(AboutSvg)`
  position: fixed;
  left: 1vw;
  top: 1vw;

  @media screen and (min-width: 320px) and (max-width: 640px) {
    position: fixed;
    width: 10vw;
    right: 1vw;
    top: 1vw;
  }
`

const Close = styled(CloseSvg)`
  position: fixed;
  left: 0.5vw;
  top: 0.5vw;

  @media screen and (min-width: 320px) and (max-width: 640px) {
    position: fixed;
    width: 12vw;
    left: 0.5vw;
    top: 0.5vw;
  }
`

const ClosePopup = styled(ClosePopupSvg)`
  position: relative;
  float: left;

  @media screen and (min-width: 320px) and (max-width: 640px) {
    position: relative;
    width: 10vw;
    float: left;
  }
`

const Help = styled(HelpSvg)`
  position: fixed;
  right: 1vw;
  top: 1.25vw;

  @media screen and (min-width: 320px) and (max-width: 640px) {
    position: fixed;
    width: 9vw;
    right: 1vw;
    top: 1.5vw;
  }
`

const Search = styled(SearchSvg)`
  position: relative;
  margin-top: 6vw;
  margin-left: 1vw;
  margin-bottom: -1vw;

  @media screen and (min-width: 320px) and (max-width: 640px) {
    position: relative;
    width: 5vw;
  }
`

const Back = styled(BackSvg)`
  position: fixed;
  left: 1vw;
  top: 1vw;

  @media screen and (min-width: 320px) and (max-width: 640px) {
    position: fixed;
    width: 5vw;
    left: 1.5vw;
    top: 1vw;
  }
`

export { Add, About, Close, Help, Back, Search, ClosePopup }
