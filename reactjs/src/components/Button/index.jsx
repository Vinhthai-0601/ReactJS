import React from "react";
import PropTypes from "prop-types";

Button.propTypes = {
  onSubmit: PropTypes.func,
};
function Button(props) {
  return (
    <div>
      <button
        type="button"
        class={`text-black-600 w-full text-right text-lg font-bold flex-initial px-4 hover:animate-bounce active:text-pink-600 ${props.class}`}
      >
        {props.name}
      </button>
    </div>
  );
}

export default Button;
