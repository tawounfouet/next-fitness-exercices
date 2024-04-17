import { FilterProps } from "@/types";

export async function fetchExercises(filters: FilterProps) {
    let { muscle, difficulty } = filters 

    const headers: HeadersInit = {
        'X-RapidAPI-Key': '287c5058a7mshea84886f4cf6c10p1010f4jsna4227c798ad5',
		'X-RapidAPI-Host': 'exercises-by-api-ninjas.p.rapidapi.com'
        
    }

    const response = await fetch(
        `https://exercises-by-api-ninjas.p.rapidapi.com/v1/exercises?difficulty=${difficulty}&muscle=${muscle}`, {
            headers: headers
        }
    )

    const result = await response.json()

    return result
}

