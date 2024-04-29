export async function getContact(supabase) {

let { data: Contact, error } = await supabase
.from('Contact')
.select('*');

return Contact;
        
}