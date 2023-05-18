import MyComponent from './MyComponent';
import styled from "styled-components"; 

function App() {
  return (
    <Wrapper>
      <MyComponent image="./img/berlin.jpeg" country="베를린, 독일" star="4.96" distance="869km 거리" days="6월 8일-14일" price="68,191" />
      <MyComponent image="./img/tokyo.jpeg" country="도쿄, 일본" star="4.96" distance="869km 거리" days="6월 8일-14일" price="68,191" />
      <MyComponent image="./img/jeju.jpeg" country="제주, 한국" star="4.97" distance="466km 거리" days="9월 2일-8일" price="720,134" />
      <MyComponent image="./img/paris.webp" country="파리, 프랑스" star="4.96" distance="869km 거리" days="6월 12일-17일" price="2,599,280" />
    </Wrapper>
    
  );
}

const Wrapper = styled.div`
  display: flex;
  width: 850px;
`;


export default App;
