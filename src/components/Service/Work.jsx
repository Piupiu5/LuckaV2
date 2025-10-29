import flowchart from "../../assets/flowchart.png"; 

export default function Work() {
  return (
    <section className="py-16 px-6 bg-white">
        <div className="max-w-4xl mx-auto">
      <div className="max-w-3xl">
      {/* Judul */}
      <h2 className="text-3xl text-orange-500 md:text-5xl font-bold mb-6">
          Cara <span className="text-black">Lucka Bekerjasama </span>
        </h2>

      </div>
      </div>
      
      <div className="flex justify-center mt-20">
  <img
    src={flowchart}
    alt="Flowchart Cara Lucka Bekerjasama"
    className="w-4/5 max-w-6xl h-80 object-contain"
  />
</div>


    </section>
  );
}
