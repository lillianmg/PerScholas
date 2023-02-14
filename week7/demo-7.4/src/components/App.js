import "../style.css";
import Header from "./Header";
import Article from "./Article";
import Footer from "./Footer";

function App() {
  return (
    <>
      <Header />
      <main>
      <Article
        time="11/12/20"
        title="On the Street in Brooklyn"
        imgSrc="./img/blog-image-1.jpg"
        imgAlt="Woman walking down the street"
        text="Cray ipsum, dolor sit amet consectetur adipisicing elit. Proin diam justo, scelerisque non felis porta, placerat vestibulum nisi. Vestibulum ac elementum massa. In rutrum quis risus quis sollicitudin. Pellentesque non eros ante. Vestibulum sed tristique massa. Quisque et feugiat risus, eu tristique felis. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Nulla facilisi. Pellentesque varius ipsum in urna semper volutpat. Etiam ac magna scelerisque, sodales enim at, interdum nibh. Nulla nec blandit orci. Ut suscipit sollicitudin varius. Etiam ut bibendum purus, sit amet tristique lectus."
        />

     <Article
        time="11/11/20"
        title="Vintage in Vogue"
        imgSrc="/img/blog-image-2.jpg"
        imgAlt="Three people attending fashion show"
        text="Selfies ipsum, dolor sit amet consectetur adipisicing elit. Aliquam nonummy, metus id imperdiet sollicitudin, justo ipsum vulputate risus, non rhoncus arcu metus non sapien. Maecenas nonummy ultrices orci. Nunc nec justo a ipsum pharetra accumsan. Etiam ut augue sit amet neque adipiscing posuere. Nunc pharetra erat eu quam. Pellentesque nibh. Aenean quam. In scelerisque sem at dolor. Maecenas mattis. Sed convallis tristique sem. Proin ut ligula vel nunc egestas porttitor. Morbi lectus risus, iaculis vel, suscipit quis, luctu."
        />
        </main>

      <Footer />
    </>
  );
}

export default App;