import React from "react";

const Blogs = () => {
  return (
    <div className=" px-4 mx-3 rounded">
      <ul className="p-6  list-disc">
        <li className="">
          <span className="font-bold">Context_Api:</span> In React, data is
          passed top-down (parent to child) via props, but this is very time
          consuming and we need to declare props again and again and required
          components. Context provides a way to share values like these between
          components without having to explicitly pass a prop through every
          level of the tree.
        </li>

        <li>
          {" "}
          <span className="font-bold">Inline:</span> The element doesn't start
          on a new line and take the width it requires and can't set the width
          or height.
          <li>
            {" "}
            <span className="font-bold">Inline-block:</span> It is like the
            inline element but it doesn't start on a new line and can set width
            and height values
          </li>{" "}
          .
        </li>
        <li>
          <span className="font-bold">semantic Tags:</span> semantic Tags are
          types of tags which are meaningfull. If anybody read these tags name,
          they clearly understand the purpose of the tags.{" "}
        </li>
      </ul>
    </div>
  );
};

export default Blogs;
