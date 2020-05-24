import { useRouter } from "next/router";

const Types = () => {
  const router = useRouter();
  const { type } = router.query;

  return (
    <div>
      <h1>Post: {type}</h1>
    </div>
  );
};

export default Types;
