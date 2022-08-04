import "./index.scss";

export const Slider = () => {
  return (
    <div className="slider">
      <div className="slider__container">
        <div className="slide">
          <h2 className="slide__title">The Power of Simplicity</h2>
          <p className="slide__description">
            Instead of spending time searching for the right app, our AI will
            bring the right app to you.
          </p>
          <button type="button" className="slide__button">
            <span className="slide__button-text">Learn</span>
          </button>
          <ul className="slide__dots">
            <li className="slide__dot"></li>
            <li className="slide__dot"></li>
            <li className="slide__dot slide__dot--active"></li>
            <li className="slide__dot"></li>
            <li className="slide__dot"></li>
          </ul>
        </div>
      </div>
    </div>
  );
};
