import styled from 'styled-components'
import theme from '../../styles/theme'

export const Container = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;

  height: ${theme.sizes.buttonHeigth};
  padding: 20px;
  background-color: ${theme.colors.darkGray};
  margin: 15px 0 0px 0;
`
