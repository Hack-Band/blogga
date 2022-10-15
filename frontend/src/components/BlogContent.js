import "./BlogContent.css";
import bodyImg from "../assets/body-image.png";
import rightCaret from "../assets/right-caret.svg";
import leftCaret from "../assets/left-caret.svg";

function BlogContent() {
  return (
    <section className="blog-content-container">
      <article className="blog-content">
        <div className="first-text-block">
          <p>
            Design comps, layouts, wireframes—will your clients accept that you
            go about things the facile way? Authorities in our business will
            tell in no uncertain terms that Lorem Ipsum is that huge, huge no no
            to forswear forever.
          </p>

          <p>
            Not so fast, I'd say, there are some redeeming factors in favor of
            greeking text, as its use is merely the symptom of a worse problem
            to take into consideration.
          </p>

          <p>
            The toppings you may chose for that TV dinner pizza slice when you
            forgot to shop for foods, the paint you may slap on your face to
            impress the new boss is your business. But what about your daily
            bread?
          </p>
        </div>

        <div className="img-content">
          <img src={bodyImg} alt="house" />
        </div>

        <div className="second-text-block">
          <p>
            Design comps, layouts, wireframes—will your clients accept that you
            go about things the facile way? Authorities in our business will
            tell in no uncertain terms that Lorem Ipsum is that huge, huge no no
            to forswear forever.
          </p>

          <p>
            Not so fast, I'd say, there are some redeeming factors in favor of
            greeking text, as its use is merely the symptom of a worse problem
            to take into consideration.
          </p>

          <p>
            The toppings you may chose for that TV dinner pizza slice when you
            forgot to shop for foods, the paint you may slap on your face to
            impress the new boss is your business. But what about your daily
            bread?
          </p>
        </div>
      </article>

      <div className="next-post flex">
        <div className="flex">
            <div><img src={leftCaret} alt="previous post" /></div>
            <p>10 Hilarious Cartoons That Depict ...</p>
        </div>

        <div className="flex">
            <p className="second-paragraph">10 Hilarious Cartoons That Depict ...</p>
            <div><img src={rightCaret} alt="next post" /></div>
        </div>
      </div>
    </section>
  );
}

export default BlogContent;
