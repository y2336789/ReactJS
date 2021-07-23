import React from "react";
import axios from "axios";
import Movie from "./Movie";
import "./App.css";

// argument로 props를 받을 것이다!
// props object 내에는 fav: kimchi라는 값이 있음
// props.fav와 { fav }는 동일함!

// function Food({ name, picture, rating }) {
//   return (
//     <div>
//       <h1>I like {name}!</h1>
//       <img src={picture} alt={name} />
//       <h4>{rating}/5.0</h4>
//     </div>
//   );
// }

// 동일한 함수!
// function Food({props}) {
//   return <h1>I like {props.fav}</h1>
// }

// const foodILike = [
//   {
//     id: 1,
//     name: "Kimchi",
//     image:
//       "http://aeriskitchen.com/wp-content/uploads/2008/09/kimchi_bokkeumbap_02-.jpg",
//     rating: 5.0,
//   },
//   {
//     id: 2,
//     name: "Samgyeopsal",
//     image:
//       "https://3.bp.blogspot.com/-hKwIBxIVcQw/WfsewX3fhJI/AAAAAAAAALk/yHxnxFXcfx4ZKSfHS_RQNKjw3bAC03AnACLcBGAs/s400/DSC07624.jpg",
//     rating: 4.3,
//   },
//   {
//     id: 3,
//     name: "Bibimbap",
//     image:
//       "http://cdn-image.myrecipes.com/sites/default/files/styles/4_3_horizontal_-_1200x900/public/image/recipes/ck/12/03/bibimbop-ck-x.jpg?itok=RoXlp6Xb",
//     rating: 4.5,
//   },
//   {
//     id: 4,
//     name: "Doncasu",
//     image:
//       "https://s3-media3.fl.yelpcdn.com/bphoto/7F9eTTQ_yxaWIRytAu5feA/ls.jpg",
//     rating: 4.6,
//   },
//   {
//     id: 5,
//     name: "Kimbap",
//     image:
//       "http://cdn2.koreanbapsang.com/wp-content/uploads/2012/05/DSC_1238r-e1454170512295.jpg",
//     rating: 4.9,
//   },
// ];

// prop의 Type을 체크할 Component.propTypes로 적어주기

// Food.propTypes = {
//   name: Proptypes.string.isRequired,
//   picture: Proptypes.string.isRequired,
//   rating: Proptypes.number.isRequired,
// };

// function App() {
//   return (
//     <div>
//       {/* Food Component에 fav = "kimchi"(props)를 전달하는 방법 */}
//       {/* Component에 넘기는 변수명과 Component의 argument로 받는 { 변수명 }은 같아야 함 */}
//       {/* <Food fav="김치" />
//       <Food fav="라면" />
//       <Food fav="삼겹살" />
//       <Food fav="곱창" /> */}

//       {/* map의 argument로 들어가는 변수명은 크게 상관없음, 해당 변수명은 배열에 들어가 있는 각각의 음식 정보 하나를 불러오고,
//       그 정보를 props로 Component에 보내는 것! => array의 각 item에 함수를 적용하고 적용한 후의 array를 받는다. */}
//       {/* [<Food name={dish.name} picture={dish.picture} ... ] */}
//       {foodILike.map((dish) => (
//         <Food
//           key={dish.id}
//           name={dish.name}
//           picture={dish.image}
//           rating={dish.rating}
//         />
//       ))}

//       {/* 동적 데이터를 웹에 추가하는 방법 -> 자바스크립트 함수로 생성 */}
//     </div>
//   );
// }

// 클래스들은 React.Component를 상속받아야 함 -> 얘는 return이 없는 대신 render method를 가지고 있음!
// screen에 표시되는 것은 일반 function Component와 동일하나 표시할 내용을 render() { ... } 안에 넣어줘야 함!
class App extends React.Component {
  // 값이 변하는 정보를 가진 객체 -> state, 이것 때문에 class Component 사용!
  // 그 대신 state의 값을 직접적으로 바꾸면 안됨! -> setState로 새 state를 만들고 render를 부르는 식으로 해야함!

  // state = {
  //   count: 0,
  // };

  // add = () => {
  //   this.setState((current) => ({ count: current.count + 1 }));
  //   // this.setState({ count: this.state.count + 1}); 과 동일
  // };

  // minus = () => {
  //   // this.setState({ count: this.state.count - 1 });
  //   this.setState((current) => ({ count: current.count - 1 }));
  // };

  // clear = () => {
  //   this.setState({ count: 0 });
  // };

  // render() {
  //   return (
  //     <div>
  //       <h1>The number is: {this.state.count}</h1>
  //       <button onClick={this.add}>Add</button>
  //       <button onClick={this.minus}>Minus</button>
  //       <button onClick={this.clear}>Clear</button>
  //     </div>
  //   );
  // }
  state = {
    isLoading: true,
    movies: [],
  };
  // 비동기 함수 async
  getMovies = async () => {
    // axios.get 하는데 오래걸리니까 await을 적어줌 -> axios가 끝날 때까지 기다려줌
    const {
      data: {
        data: { movies },
      },
    } = await axios.get(
      "https://yts-proxy.nomadcoders1.now.sh/list_movies.json?sort_by=rating"
    );
    // this.setState({ movies: movies })와 동일함 -> state의 movies : axios.get에서 불러온 movies
    this.setState({ movies, isLoading: false });
  };
  componentDidMount() {
    this.getMovies();
  }
  render() {
    const { isLoading, movies } = this.state;
    // 이 밑의 부분에서 html을 return하는 jsx 부분에서 각 태그들에 대한 클래스명을 지정해 줄때 className으로 적어줘야함!
    // class Component와 헷갈리기 때문!! HTML 자체에서는 안해도 됨
    return (
      <section className="container">
        {isLoading ? (
          <div className="loader">
            <span className="loader__text">Loading...</span>
          </div>
        ) : (
          <div className="movies">
            {
              // movies.map((movie))의 변수 movie는 어떤 이름이든 상관없음
              movies.map((movie) => {
                console.log(movie);
                return (
                  <Movie
                    key={movie.id}
                    id={movie.id}
                    year={movie.year}
                    title={movie.title}
                    summary={movie.summary}
                    poster={movie.medium_cover_image}
                    genres={movie.genres}
                  />
                );
              })
            }
          </div>
        )}
      </section>
    );
  }
}

export default App;
