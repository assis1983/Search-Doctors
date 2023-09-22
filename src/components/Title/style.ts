import styled from 'styled-components'

export const Title = styled.h1<{ fontSize: number; color?: string }>`
  font-size: ${({ fontSize }) => `${fontSize}px`};
  font-family: 'Sora', sans-serif;
  font-weight: 700;
  color: ${({ color }) => color};
  margin: 0;
  padding: 0;
`
