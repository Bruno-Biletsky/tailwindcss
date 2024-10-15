import imagem from "../../assets/user.jpg"

const Home=()=>{
  return(
      <>
      <h1 className="text-4xl underline text-center text-gray-950 font-bold">Perfil Dev</h1>

      <div className="relative w-96 m-3 cursor-pointer border-2 shadow-lg rounded-xl items-center mx-auto">
          <div className="flex h-28 bg-emerald-300 rounded-xl items-center justify-center">
                  <h1 className="absolute mx-auto text-center text-2xl text-blue-900 font-bold">Meu Post</h1>
          </div>
          <div className="p-2 border-b-2">
              <h6>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Maiores at, repudiandae iste autem mollitia quis sunt provident minima optio voluptatum? Repudiandae exercitationem culpa sed? Reiciendis cum sit iste ullam quos.
              </h6>
          </div>
          <div className="flex flex-wrap items-center m-2">
            <span className="border border-emerald-400 rounded-2xl px-2 my-1 mx-1">
              #React
            </span>
            <span className="border border-emerald-400 rounded-2xl px-2 my-1 mx-1">
              #Node
            </span>
            <span className="border border-emerald-400 rounded-2xl px-2 my-1 mx-1">
              #JavaScript
            </span>
          </div>
          <div className="flex flex-wrap items-center rounded-b-xl border-t-2 bg-emerald-400">
            <button className="border rounded-2xl border-x-red-400 text-black shadow-sm p-1 px-2 m-2 cursor-pointer bg-emerald-800 hover:bg-slate-500">
              Projetos
            </button>
            <button className="border rounded-2xl border-x-red-400 text-black shadow-sm p-1 px-2 m-2 cursor-pointer bg-emerald-800 hover:bg-slate-500">
              Comunidade Dev
            </button>
          </div>
      </div>    
          <div className="py-8 px-8 max-w-sm mx-auto bg-slate-300 rounded-xl shadow-lg space-y-2 sm:py-4 sm:flex sm:items-center sm:space-y-0 sm:space-x-6">
            <img className="block mx-auto h-24 rounded-full sm:mx-0 "src={imagem} alt="imagem"></img>
            <div className="text-center space-y-2 sm:text-left">
              <div className="space-y-0.5">
                      <p className='text-lg text-black font-medium'>
                          Wellington
                      </p>
                      <p className="text-slate-900 font-medium">
                          Engenheiro de Software

                      </p>

                  </div>

              </div>
          </div>

      
      </>
  )
}
export default Home