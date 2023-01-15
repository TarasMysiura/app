import styled from "styled-components";

export default function Page({ children }) {
  return <PageTag>{children}</PageTag>;
}

const PageTag = styled.div`
  /* робимо фон градієнтом */
  background: rgb(2, 0, 36);
  background: radial-gradient(
    circle,
    rgba(2, 0, 36, 1) 0%,
    rgba(193, 26, 155, 1) 46%,
    rgba(0, 212, 255, 1) 100%
  );
  /* робимо фон на всю ширину */
  width: 100%;
`;
