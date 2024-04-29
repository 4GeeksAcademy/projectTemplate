export async function addLocation(supabase, locationData) {

const { data, error } = await supabase
.from('location')
.insert([locationData])
.select();   
}