const COHORT = "2502-FTB-ET-WEB-FT"
const mainAPI = `https://fsa-puppy-bowl.herokuapp.com/api/${COHORT}`

export async function fetchAllPlayers() {
    try {
        const response = await fetch(`${mainAPI}/players`);
        const result = await response.json();
        console.log(result);
        
        return result;
    } catch (error) {
        console.error(error);
    }
}