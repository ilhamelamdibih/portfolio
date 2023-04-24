import React from 'react'

export default function Competence() {
  return (
    <div className='grid md:grid-cols-4 gap-10 py-10 px-[10px] lg:px-[180px] 2xl:px-[300px] w-full '>

        <div className='flex flex-col space-y-5 shadow py-5 px-5 rounded shadow-main col-span-2'>
            <div className='flex items-center justify-between'>
                <h1 className='text-Cblue font-righteous text-xl'>Langage de Programmation</h1>
            </div>
            <div className='grid grid-cols-3 gap-y-5 md:gap-y-0 justify-items-center md:justify-items-start md:grid-cols-7 md:space-x-5'>
                <div className='flex flex-col items-center space-y-2'>
                    <img src='prg/js.png' className='w-10 h-10'/>
                    <span className='text-sm font-semibold'>JavaScript</span>
                </div>
                <div className='flex flex-col items-center space-y-2'>
                    <img src='prg/python.png' className='w-10 h-10'/>
                    <span className='text-sm font-semibold'>Python</span>
                </div>
                <div className='flex flex-col items-center space-y-2'>
                    <img src='prg/java.png' className='w-10 h-10'/>
                    <span className='text-sm font-semibold'>Java</span>
                </div>
                <div className='flex flex-col items-center space-y-2'>
                    <img src='prg/php.png' className='w-10 h-10'/>
                    <span className='text-sm font-semibold'>Php</span>
                </div>
                <div className='flex flex-col items-center space-y-2'>
                    <img src='prg/c-sharp.png' className='w-10 h-10'/>
                    <span className='text-sm font-semibold'>C#</span>
                </div>
                <div className='flex flex-col items-center space-y-2'>
                    <img src='prg/c-.png' className='w-10 h-10'/>
                    <span className='text-sm font-semibold'>C++</span>
                </div>
                <div className='flex flex-col items-center space-y-2'>
                    <img src='prg/letter-c.png' className='w-10 h-10'/>
                    <span className='text-sm font-semibold'>C</span>
                </div>
            </div>
        </div>

        
        <div className='flex flex-col space-y-5 shadow py-5 px-5 rounded shadow-main col-span-2'>
            <div className='flex items-center justify-between'>
                <h1 className='text-Cblue font-righteous text-xl'>Frameworks</h1>
            </div>
            <div className='grid grid-cols-3 gap-y-5 md:gap-y-0  md:grid-cols-6 md:space-x-5'>
                <div className='flex flex-col items-center space-y-2'>
                    <img src='prg/spring.png' className='w-10 h-10'/>
                    <span className='text-sm font-semibold'>Spring Boot</span>
                </div>
                <div className='flex flex-col items-center space-y-2'>
                    <img src='prg/dotnet.svg' className='w-10 h-10'/>
                    <span className='text-sm font-semibold'>Dot Net</span>
                </div>
                <div className='flex flex-col items-center space-y-2'>
                    <img src='prg/tkinter.png' className='w-10 h-10'/>
                    <span className='text-sm font-semibold'>Tkinter</span>
                </div>
                <div className='flex flex-col items-center space-y-2'>
                    <img src='prg/next.png' className='w-10 h-10'/>
                    <span className='text-sm font-semibold'>Next js</span>
                </div>
                <div className='flex flex-col items-center space-y-2'>
                    <img src='prg/react.png' className='w-10 h-10'/>
                    <span className='text-sm font-semibold'>React</span>
                </div>
                <div className='flex flex-col items-center space-y-2'>
                    <img src='prg/django.png' className='w-10 h-10 object-contain'/>
                    <span className='text-sm font-semibold'>Djnago</span>
                </div>
            </div>
        </div>

        <div className='flex flex-col space-y-5 shadow py-5 px-5 rounded shadow-main'>
            <div className='flex items-center justify-between'>
                <h1 className='text-Cblue font-righteous text-xl'>Méthode d'analyse</h1>
            </div>
            <div className='grid grid-cols-2  md:gap-y-0   md:space-x-5'>
                <div className='flex flex-col items-center space-y-2'>
                    <img src='prg/merise.png' className='w-10 h-10'/>
                    <span className='text-sm font-semibold'>Merise</span>
                </div>
                <div className='flex flex-col items-center space-y-2'>
                    <img src='prg/uml.png' className='w-10 h-10 object-contain'/>
                    <span className='text-sm font-semibold'>Uml</span>
                </div>
            </div>
        </div>
        <div className='flex flex-col space-y-5 shadow py-5 px-5 rounded shadow-main'>
            <div className='flex items-center justify-between'>
                <h1 className='text-Cblue font-righteous text-xl text-center md:text-left'>Système de contrôle de version</h1>
            </div>

                <div className='flex flex-col items-center space-y-2'>
                    <img src='prg/github.png' className='w-10 h-10'/>
                    <span className='text-sm font-semibold'>github</span>
                </div>
        </div>
        <div className='flex flex-col space-y-5 shadow py-5 px-5 rounded shadow-main col-span-2'>
            <div className='flex items-center justify-between'>
                <h1 className='text-Cblue font-righteous text-xl'>Système de gestion de base de données </h1>
            </div>
            <div className='grid grid-cols-3  space-x-5'>
                <div className='flex flex-col items-center space-y-2'>
                    <img src='prg/sql.png' className='w-10 h-10 object-contain'/>
                    <span className='text-sm font-semibold'>Sql</span>
                </div>
                <div className='flex flex-col items-center space-y-2'>
                    <img src='prg/mysql.png' className='w-10 h-10'/>
                    <span className='text-sm font-semibold'>MySql</span>
                </div>
                <div className='flex flex-col items-center space-y-2'>
                    <img src='prg/oracle.png' className='w-13 h-10'/>
                    <span className='text-sm font-semibold'>Oracle</span>
                </div>
            </div>
        </div>
    </div>
  )
}
