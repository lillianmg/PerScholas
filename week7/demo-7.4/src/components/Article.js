function Article(props) {
    return (
      <article>
        <time datetime={props.time}>{props.time}</time>
        <h3 class="blogpost-title">{props.title}</h3>
        <img src={props.imgSrc} alt={props.imgAlt} />
        <p>{props.text}</p>
  
        <aside>
          <a href="#">Continues ...</a>
        </aside>
      </article>
    );
  }
  
  export default Article;