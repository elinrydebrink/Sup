export default function Card(props: {
    title: string; image: string | undefined; 
}) {
    return (
        <div class="w-full h-64 rounded-lg shadow-2xl overflow-hidden relative m-10">
            <img class="absolute inset-0 h-full w-full object-cover" src={props.image} alt="" />
            <div class="absolute inset-0 bg-sage-500 bg-opacity-50"></div>
            <div class="flex h-full items-center justify-center relative">
            <h1 class="text-5xl text-sage-100 tracking-wider drop-shadow-[0_2px_2px_rgba(0,0,0,1)]">{props.title}</h1>
            </div>
        </div>
    )

}