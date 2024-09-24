import FeedBack from "./FeedBack";
import Form from "./Form";

const Home = () => {
  return (
    <div className="bg-sky-100 h-screen w-full p-32 flex gap-14">
      <Form />
      <FeedBack/>
    </div>
  );
};

export default Home;
