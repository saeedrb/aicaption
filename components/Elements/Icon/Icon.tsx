"use client";
import cn from "classnames";

import s from "./Icon.module.css";

type IconProps = {
  icon: string;
  iconPathCount?: number;
  iconSize?: string | number;
  style?: React.CSSProperties | null;
  className?: string;
  prefix?: string;
  onClick?: () => void;
  dataset?: string | null;
}

const Icon = ({
  icon,
  iconPathCount,
  iconSize,
  style,
  className,
  prefix = "sarv",
  onClick = () => {},
  dataset = null
} : IconProps) => {
  return (
    <i
      className={cn(s.container, `${prefix}${icon}`, className)}
      style={{ ...style }}
      onClick={() => onClick()}
      data-type={dataset}
    >
      {iconPathCount &&
        Array(iconPathCount)
          .fill("_")
          .map((_, index) => <i className={`path${index + 1}`} key={index} />)}
    </i>
  );
};

export { Icon };
