
export default function Home(props) {

  /* SPA -> Single Page Aplication
  useEffect(() => {
    fetch('http://localhost:3333/episodes')
      .then(res => res.json())
      .then(data => console.log(data))
  }) */
  
  return (
    <div>
      <h1>Index</h1>
    </div>

  )
}

/*SSR -> Server Side Rendering
export async function getServerSideProps() {
  const response =  await fetch('http://localhost:3333/episodes')
  const data = await response.json()
  
  return {
    props: {
      episodes: data,
    }
  }
}   */

//SSG -> Static Site Generator
export async function getStaticProps() {
  const response =  await fetch('http://localhost:3333/episodes')
  const data = await response.json()
  
  return {
    props: {
      episodes: data,
    },
    revalidate: 60 * 60 * 8, //A cada 8 horas uma nova requisição
  }
}
