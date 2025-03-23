import Container from "@modules/_shared/components/Container";
import Stars from "../Components/Stars";

function Home() {
  return (
    <Container>
      <div className="container-default">
        <div>
          <div className="flex justify-between mb-3.5">
            <h1 className="text-3xl font-bold">Game Name</h1>
            <div className="flex justify-center items-center gap-3">
              <h1 className="text-2xl  font-semibold text-primary font-display">6.4</h1>
              <Stars></Stars>
            </div>
          </div>
          <div className="w-[90] h-[1px]  bg-gradient-to-r  from-accent via-accent to-background"></div>
        </div>
      </div>
    </Container>
  );
}

export default Home;
