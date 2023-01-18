import { FC } from "react";
import styled from "@emotion/styled";

const LoginWrapper = styled.div`
  width:100%;
  height:100%;
  padding:10rem;
  display:inline-flex;
`;
const LoginImageWrapper = styled.div`
 width:50%;
 height:50%;
 background:blue;
`;
const LoginInputWrapper = styled.div`
width:50%;
`;

export const Login: FC = () => {
    return(<LoginWrapper>
     <LoginImageWrapper>A</LoginImageWrapper>
     <LoginInputWrapper></LoginInputWrapper>
    </LoginWrapper>)
}