import styled from 'styled-components'
import theme from '../../styles/theme'

export const Content = styled.button`
  width: 100%;
  height: ${theme.sizes.buttonHeigth};
  background-color: ${theme.colors.darkGray};
  border: 2.5px solid ${theme.colors.gray};
  border-radius: 25px;
  font-size: ${theme.sizes.buttonFontSize};
  text-transform: uppercase;
  text-align: center;
  color: ${theme.colors.gray};
  padding: 8px;
`
