import {prisma} from "@/lib/db";

export default async function TestPage(){
    const voice = await prisma.voice.findMany();

    return (
        <div className="p-8">
            <h1 className="text-2xl font-bold mb-4">
                Voices ({voice.length})
            </h1>
            <ul className="space-y-2">
                {voice.map((voice) =>(
                    <li key={voice.id}>
                    {voice.name} - {voice.variant}
                    </li>
                ))}

            </ul>
        </div>
    )
}