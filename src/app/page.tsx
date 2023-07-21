import Carousel from './components/Carousel'

export default function Home() {
  return (
    <main className="w-full mt-7 sm:mt-0 h-screen flex flex-col justify-center items-center">
      <div className="font-GothamBold font-bold text-center">
        <h2 className="text-3xl sm:text-4xl xl:text-5xl">
          Best Seller Gaming PC
        </h2>
        <h4 className="text-xl md:text-2xl xl:text-3xl">Prebuilt & Custom</h4>
      </div>
      <Carousel />
    </main>
  )
}
