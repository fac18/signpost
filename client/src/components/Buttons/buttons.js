import styled from 'styled-components'
import { ReactComponent as AddSvg } from '../../assets/add.svg'
import { ReactComponent as AboutSvg } from '../../assets/about.svg'
import { ReactComponent as CloseSvg } from '../../assets/close.svg'
import { ReactComponent as HelpSvg } from '../../assets/help.svg'
// import { ReactComponent as SearchSvg } from '../../assets/add.svg'
import { ReactComponent as BackSvg } from '../../assets/back.svg'

const Add = styled(AddSvg)`
  position: fixed;
  right: 1vw;
  top: 1vw;
`

const About = styled(AboutSvg)`
  position: fixed;
  left: 1vw;
  top: 1vw;
`

const Close = styled(CloseSvg)`
  position: fixed;
  left: 0.5vw;
  top: 0.5vw;
`

const Help = styled(HelpSvg)`
  position: fixed;
  right: 1vw;
  top: 1vw;
`

// USE REN'S ONE
// const Search = styled(AddSvg)`
//   position: fixed;
//   right: 22.67%;
//   bottom: 10%;
// `

const Back = styled(BackSvg)`
  position: fixed;
  left: 1vw;
  top: 1vw;
`

export { Add, About, Close, Help, Back }
