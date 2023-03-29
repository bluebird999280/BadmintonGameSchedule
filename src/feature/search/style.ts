import styled from "styled-components"

export const Wrapper = styled.div``
export const Container = styled.div`
  text-align: center;
  padding-bottom: 30px;

  & > .search {
    display: flex;
    padding: 10px;
  }

  & > .pagination {
    display: inline-flex;
    border: 1px solid #dde3ec;
  }
`
