import type { Component } from 'solid-js'

import Card from '../components/Card';
import wall from "../assets/wall_2.jpg"
import reach from "../assets/reach.jpg"
import jump from "../assets/jump_1.jpg"


const Schedule: Component = () => {
    return (
        <>
            <div class="w-full h-96 rounded-lg shadow-2xl overflow-hidden relative">
            <img class="absolute inset-0 h-full w-full object-cover" src={wall} alt="" />
            <div class="absolute inset-0 bg-sage-200 bg-opacity-20"></div>
            <div class="flex h-full items-center justify-center relative">
                <h1 class="text-9xl text-sage-500 tracking-wider drop-shadow-[0_2px_2px_rgba(0,0,0,1)]">Midsommar</h1>
            </div>
            </div>
    
            <div class='justify-center bg-sage-500'>
            <div class='grid grid-cols-4 gap-10 my-4 vw-screen bg-black'>
                <Card title="Anmälan" image={reach}/>
                <Card title="Schema" image={jump}/>
            </div>
            </div>
        </>
      
    
        )
}
export default Schedule