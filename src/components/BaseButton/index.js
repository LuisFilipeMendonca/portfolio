import React from "react";

import { Button, LinkButton } from "./styled";

const BaseButton = ({
  children,
  path,
  type,
  role,
  classname,
  clickHandler,
}) => {
  if (role === "link") {
    return (
      <LinkButton to={path} className={classname}>
        {children}
      </LinkButton>
    );
  }

  return (
    <Button type={type} className={classname} onClick={clickHandler}>
      {children}
    </Button>
  );
};

export default BaseButton;
