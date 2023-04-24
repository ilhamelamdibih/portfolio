import React from 'react'

export default function Projet() {
  return (
    <div className='grid md:grid-cols-2 gap-10 py-10 px-[10px] lg:px-[180px] 2xl:px-[300px] w-full '>

        <div className='flex flex-col space-y-3 shadow py-5 px-5 rounded shadow-main'>
            <div className='flex flex-col md:flex-row items-center justify-between'>
                <h1 className='text-Cblue font-righteous text-xl'>Application Bureau de gestion d’une salle de sport</h1>
            </div>
            <ul className="list-disc ml-5 text-main">
                    <li>
                        <p className="text-sm text-black">
                            <span className="text-main font-semibold">Front End : </span> JavaFx, Scene Builder
                        </p>
                    </li>
                    <li>
                        <p className="text-sm text-black">
                        <span className="text-main font-semibold">Back End : </span> Java
                        </p>
                    </li>
               </ul>
        </div>

        <div className='flex flex-col space-y-3 shadow py-5 px-5 rounded shadow-main'>
            <div className='flex flex-col md:flex-row items-center justify-between'>
                <h1 className='text-Cblue font-righteous text-xl'>Mini projet bureau avec langage C#</h1>
            </div>
            <ul className="list-disc ml-5 text-main">
                    <li>
                        <p className="text-sm text-black">
                            Smart Home
                        </p>
                    </li>
                    <li>
                        <p className="text-sm text-black">
                            Gestion de bibliothèque
                        </p>
                    </li>
                    <li>
                        <p className="text-sm text-black">
                        Gestion des stocks de la parapharmacie
                        </p>
                    </li>
                    
               </ul>
        </div>

    </div>
  )
}
