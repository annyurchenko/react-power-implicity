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
          <button className="slide__button">
            <span className="slide__button-text">Learn</span>
          </button>
          <div className="slide__dots">
            <div className="slide__dot"></div>
            <div className="slide__dot"></div>
            <div className="slide__dot slide__dot--active"></div>
            <div className="slide__dot"></div>
            <div className="slide__dot"></div>
          </div>
        </div>
      </div>
    </div>
  );
};
