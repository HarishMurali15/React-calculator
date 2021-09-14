import styled from "styled-components";

export const Container = styled.div`
  display: grid;
  justify-content: center;
  align-items: center;
  width: 400px;
  margin: 70px auto;
  grid-template-columns: repeat(4, 100px);
  grid-template-rows: minmax(120px, auto) repeat(5, 100px);
  box-shadow: 1px 1px 15px grey;
  border-radius: 10px;
`;
export const Screen = styled.div`
  grid-column: 1/-1;
  height: 100px;
  display: flex;
  padding: 18px;
  justify-content: space-around;
  flex-direction: column;
  word-wrap: break-word;
  background-color: white;
  text-align: right;
  word-break: break-all;
  border-top-left-radius: 10px;
  border-top-right-radius: 10px;
`;
export const Previous = styled.div`
  color: rgba(0,0,0,0.5);
  font-size: 1.5rem;
`;
export const Current = styled.div`
  color: black;
  font-size: 2.5rem;
`;
export const Button = styled.button`
  cursor: pointer;
  font-size: 2.5rem;
  border:0.5px inset white;
  color:white;
  height:6.5rem;
  outline: none;
  background-color: rgba(107, 185, 240, 1);
  &:hover {
    background-color: rgba(255, 255, 255, 0.9);
    color:black;
  }
${({gridSpan})=> gridSpan && `grid-column:span ${gridSpan}`};
${({ operation }) => operation && `background-color:grey`}
${({ control }) => control && `background-color:gold`}
${({ equals }) => equals && `background-color:DodgerBlue;border-bottom-right-radius:10px`}
${({ period }) => period && `background-color:crimson;border-bottom-left-radius:10px`}
`;
