import './App.css';

const App = () => {
  return (
    <section className='bookList'>
      <Book />
      <Book />
      <Book />
      <Book />
      <Book />
      <Book />
      <Book />
      <Book />
    </section>
  );
}

const Book = () => {
  return (
    <article className='book'>
      <img src="https://m.media-amazon.com/images/W/WEBP_402378-T2/images/I/91KmyoOSmwL._AC_UY327_FMwebp_QL65_.jpg" alt="" />
      <h1>The Love of My Life: A Novel Kindle Edition</h1>
      <h4>Rosie Walsh</h4>
    </article>
  )
} 

export default App;
