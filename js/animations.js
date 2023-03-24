let animations = {
  fadeIn: [
    {
      opacity: 0,
      transform: "translate(-6.25rem)",
      height: 0,
    },

    {
      height: "55px",
      opacity: 1,
    },
  ],
  fadeOut: [
    {
      transform: "translate(0)",
      opacity: 1,
    },
    {
      transform: "translate(-100px)",
      opacity: 0,
      height: "55.8px",
    },
    {
      transform: "translateY(-100px)",
      opacity: 0,
      height: 0,
    },
  ],
};

let fadeIn = animations.fadeIn;
let fadeOut = animations.fadeOut;

const addAnimation = (element, animation, options) => {
  return element.animate(animation, options);
};

export { fadeIn as animationFadeIn, fadeOut as animationFadeOut, addAnimation };
