import React from "react";
// HashRouter 대신 BrowserRouter를 써도 됨
import { HashRouter, Route } from "react-router-dom";
import Home from "./routes/Home";
import About from "./routes/About";
import Detail from "./routes/Detail";
import Navigation from "./component/Navigation";
import "./App.css";

// 리액트 라우터는 기본적으로 URL을 가져오고, 비교함
//  /home/introduction 에서 /home이 있기 때문에 /home을 포함하는 라우트도 표시함!
// "/" 이것을 라우터로 지정하면 모든 라우터들이 해당 화면을 표시함 -> 주의!
function App() {
  return (
    // <HashRouter>
    //   <Route path="/home">
    //     <h1>Home</h1>
    //   </Route>
    //   <Route path="/home/introduction">
    //     <h1>Introduction</h1>
    //   </Route>
    //   <Route path="/about">
    //     <h1>About</h1>
    //   </Route>
    // </HashRouter>
    <HashRouter>
      <Navigation />
      {/* 라우터가 겹칠 때 겹쳐서 보임으로 exact={true}를 적어줘야함 */}
      <Route path="/" exact={true} component={Home} />
      <Route path="/about" component={About} />
      <Route path="/movie/:id" component={Detail} />
    </HashRouter>
  );
}

export default App;
