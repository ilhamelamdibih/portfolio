import React from 'react'

export default function Formation() {
  return (
    <div className='grid md:grid-cols-2 gap-10 py-10 px-[10px] lg:px-[180px] 2xl:px-[300px] w-full '>

        <div className='flex flex-col space-y-3 shadow py-5 px-5 rounded shadow-main'>
            <div className='flex flex-col md:flex-row items-center justify-between'>
                <h1 className='text-Cblue font-righteous text-xl'>2 éme année cycle d'ingenieur</h1>
                <p className='text-violet font-lobster'>Depuis Octobre 2021</p>
            </div>
            <div className='space-y-2 text-md'>
                <p>
                Ecole Marocaine des Sciences de l'Ingénieur (EMSI) Marrakech
                </p>
                <span className='text-main font-semibold text-sm'>Ingénierie Informatique et Réseaux</span>
            </div>
        </div>

        <div className='flex flex-col space-y-3 shadow py-5 px-5 rounded shadow-main'>
            <div className='flex flex-col md:flex-row items-center justify-between'>
                <h1 className='text-Cblue font-righteous text-xl'>Diplôme technicien spécialisé</h1>
                <p className='text-violet font-lobster'>Juillet 2021</p>
            </div>
            <div className='space-y-2 text-md'>
                <p>
                Institut spécialisé de technologie appliquée NTIC - Sidi Youssef Ben Ali Marrakech
                </p>
                <span className='text-main font-semibold text-sm'>Développement informatique</span>
            </div>
        </div>

        <div className='flex flex-col space-y-3 shadow py-5 px-5 rounded shadow-main'>
            <div className='flex flex-col md:flex-row items-center justify-between'>
                <h1 className='text-Cblue font-righteous text-xl'>Diplôme technicien spécialisé</h1>
                <p className='text-violet font-lobster'>Juillet 2018</p>
            </div>
            <div className='space-y-2 text-md'>
                <p>
                Institut de Formation aux Matières de l'Industrie Automobile Casablanca
                </p>
                <span className='text-main font-semibold text-sm'>Maintenance Automobile</span>
            </div>
        </div>

        <div className='flex flex-col space-y-3 shadow py-5 px-5 rounded shadow-main'>
            <div className='flex flex-col md:flex-row items-center justify-between'>
                <h1 className='text-Cblue font-righteous text-xl'>Baccalauréat</h1>
                <p className='text-violet font-lobster'>Juin 2015</p>
            </div>
            <div className='space-y-2 text-md'>
                <p>
                Lycée Rahali El Farouk Attaouia
                </p>
                <span className='text-main font-semibold text-sm'>Science de la Vie et de la Terre</span>
            </div>
        </div>
    </div>
  )
}
