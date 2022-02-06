import { PlanetData } from "../data/planets";
import Header from "../components/Header";
import Stats from "../components/Stats";

export async function getStaticPaths() {
  const paths = PlanetData.map((planet) => ({
    params: { planet: planet.name },
  }));
  return { paths, fallback: false };
}

export async function getStaticProps({ params }) {
  const planet = PlanetData.find((planet) => planet.name === params.planet);
  return { props: { planet } };
}

export default function Planet({ planet }) {
  const {
    name,
    overview,
    images,
    revolution,
    rotation,
    temperature,
    radius,
    structure,
    geology,
    active,
  } = planet;
  return (
    <>
      <Header
        name={name}
        images={images}
        overview={overview}
        structure={structure}
        geology={geology}
        active={active}
      />
      <Stats
        name={name}
        revolution={revolution}
        temperature={temperature}
        rotation={rotation}
        radius={radius}
      />
    </>
  );
}
