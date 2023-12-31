import styled from 'styled-components'

export const Title = styled.h1<{ fontSize: number; color?: string;  }>`
  font-size: ${({ fontSize }) => `${fontSize}px`};
  font-weight: 700;
  color: ${({ color }) => color};
  margin: 0;
  padding: 0;
  
`
export const StyledTitle = styled.div`
  width: 85%;
  margin-left: auto;
  padding-bottom: 20px;
`