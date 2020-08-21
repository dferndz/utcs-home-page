import React from "react";
import Badge from "./Badge";

type Props = {
  variant?: string;
  data: string[] | null;
  title?: string;
};

const BadgeGroup = ({ variant, data, title }: Props) => {
  if (data)
    return (
      <>
        {title && (
          <>
            <p className="mt-4" style={{ margin: "0" }}>
              {title}
            </p>
            <hr style={{ margin: "0" }} />
          </>
        )}

        <h5 className="mt-2 mb-4">
          {data?.map((permission: string, key: number) => (
            <Badge title={permission} key={key} variant={variant} />
          ))}
        </h5>
      </>
    );
  return null;
};

export default BadgeGroup;
