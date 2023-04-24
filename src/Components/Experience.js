import React from 'react'

export default function Experience() {
  return (
    <div className='grid md:grid-cols-2 gap-10 py-10 px-[10px] lg:px-[180px] 2xl:px-[300px] w-full '>
<div className='flex flex-col space-y-3 shadow py-5 px-5 rounded shadow-main'>
            <div className='flex flex-col md:flex-row items-center justify-between'>
                <h1 className='text-Cblue font-righteous text-xl'>Projet de stage d'été</h1>
                <p className='text-violet font-lobster'>De juillet 2022 à septembre 2022</p>
            </div>
            <div className='space-y-2 text-md'>
                <p>
                <span className='text-Cgreen font-semibold'>Entreprise : </span>INTELLCAP RABAT(Télétravail)
                </p>
               <p>Création d'une application web de vente des produits terroir marocains.</p>
               <ul className="list-disc ml-5 text-main">
                    <li>
                        <p className="text-sm text-black">
                            <span className="text-main font-semibold">Front End : </span> TailwindCss, NextJs
                        </p>
                    </li>
                    <li>
                        <p className="text-sm text-black">
                        <span className="text-main font-semibold">Back End : </span> python, NextJs
                        </p>
                    </li>
               </ul>
            </div>
        </div>

        <div className='flex flex-col space-y-3 shadow py-5 px-5 rounded shadow-main'>
            <div className='flex flex-col md:flex-row items-center justify-between'>
                <h1 className='text-Cblue font-righteous text-xl'>Stage Fin d'année</h1>
                <p className='text-violet font-lobster'>Marrakech Mai 2021</p>
            </div>
            <div className='space-y-2 text-md'>
                <p>
                <span className='text-Cgreen font-semibold'>Entreprise : </span>TIKO
                </p>
               <p>Création d'une application web de gestion des voyages organisé</p>
               <ul className="list-disc ml-5 text-main">
                    <li>
                        <p className="text-sm text-black">
                            <span className="text-main font-semibold">Front End : </span> Bootstrap, HTML, Css
                        </p>
                    </li>
                    <li>
                        <p className="text-sm text-black">
                        <span className="text-main font-semibold">Back End : </span> Php
                        </p>
                    </li>
               </ul>
            </div>
        </div>

        <div className='flex flex-col space-y-3 shadow py-5 px-5 rounded shadow-main'>
            <div className='flex flex-col md:flex-row items-center justify-between'>
                <h1 className='text-Cblue font-righteous text-xl'>Stage en Service Réception</h1>
                <p className='text-violet font-lobster'>De février 2017 à avril 2017</p>
            </div>
            <div className='space-y-2 text-md'>
                <p>
                <span className='text-Cgreen font-semibold'>Entreprise : </span>Auto Hall Département FORD Casablanca
                </p>
               <p>Accueil des clients et des marchandises et suivi des dossiers</p>
            </div>
        </div>
        
    </div>
  )
}
