import DotGrid from "@/components/DotGrid"

const page = () => {
  return (
<main className="relative overflow-hidden object-cover">
       <div style={{ width: '100%', height: '600px', position: 'flex' }}>
  <DotGrid
    dotSize={4}
    gap={15}
    baseColor="#5227FF"
    activeColor="#5227FF"
    proximity={120}
    shockRadius={250}
    shockStrength={5}
    resistance={750}
    returnDuration={1.5}
    className="relative flex justify-center items-center"
  />
</div>

</main>

  )
}

export default page
