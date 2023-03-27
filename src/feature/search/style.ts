import styled from "styled-components"

export const Wrapper = styled.div``
export const Container = styled.div`
  text-align: center;

  & > .search {
    display: flex;
    padding: 10px;
  }

  & > .pagination {
    display: inline-flex;
    border: 1px solid #dde3ec;
  }

  & > .pagination > div:nth-child(2n) {
    background-color: #fff;
  }

  & > .pagination > div:nth-child(2n-1) {
    background-color: #f8f8f8;
  }
`
