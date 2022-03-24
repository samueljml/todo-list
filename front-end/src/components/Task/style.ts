import styled from 'styled-components'
import theme from '../../styles/theme'

export const Container = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  height: ${theme.sizes.taskHeigth};
  padding: 20px;
  background-color: ${theme.colors.white};
  border-radius: 25px;
  font-size: 24px;
  text-align: start;
  box-shadow: 0px 4px 4px 0px rgba(0, 0, 0, 0.25);
  margin: 15px 0 0px 0;
`

export const Child = styled.div`
  display: flex;
`

export const CheckedText = styled.div`
  text-decoration: line-through;
`

export const Title = styled.div`
  display: flex;
  padding-left: 20px;
`
