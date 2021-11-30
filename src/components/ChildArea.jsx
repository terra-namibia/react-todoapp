import { memo } from "react"

export const ChildArea = memo((props) => {
  console.log("ChildAreaをレンダリング");

  const {open} = props;
  return (
    <>
    {open ? (
      <div>
        <p>子コンポーネント</p>
      </div>
    ) : null
    }
    </>
  );
});