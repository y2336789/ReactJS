# Movie App

React JS 복습하기~
npm start : react application 실행!
src에서 App.js와 index.js를 제외하고 전부 삭제했음!

react는 우리가 쓰는 모든 요소들을 자바스크립트로 생성하고 index.html 내의 id="root"인 div안에 집어넣음!
왜 하필 id="root"인 div 태그 내에 집어넣을까?

index.js에서 ReactDom.render 함수 때문이다!

React는 component와 함께 동작하는데, component란 HTML을 반환하는 함수이다.
React application은 하나의 component만 랜더링 할 수 있기 때문에 App component안에 다양한 component를 넣어줘야 함!

list내의 child는 unique한 key props를 가져야 함!

prop을 잘 보냈는지 확인하기 위해 npm i prop-types 설치 -> npm i prop-types

Life-Cycle Method!

1. Mounting -> 태어나는 것
   1.1) Component가 생성될 때 constructor()를 호출!
   1.2) render() 실행!
   1.3) componentDidMount() 2) Updating -> component가 업데이트 되는 것 3) Unmounting -> component가 죽는 것
2. Update -> 값이 변경될 때
   2.1) setState 호출시 -> render() 실행!
   2.2) componentDidUpdate()
3. Unmounting -> Component가 죽을 때
   3.1) componentWillUnmount()
