import { createClient } from "https://esm.sh/@supabase/supabase-js@2"

const supabaseUrl = "https://TON-PROJET.supabase.co"
const supabaseKey = "ta-anon-key"
const supabase = createClient(supabaseUrl, supabaseKey)

const form = document.getElementById('contactForm')
form.addEventListener('submit', async (e) => {
    e.preventDefault()

    const email = document.getElementById('email').value.trim()
    const fullname = document.getElementById('fullname').value.trim()
    const statut = document.getElementById('statut').value
    const telephone = document.getElementById('telephone').value.trim()
    const siteweb = document.getElementById('siteweb').value.trim()
    const message = document.getElementById('message').value.trim()

    const { error } = await supabase.from('contacts').insert([{
        email, fullname, statut, telephone, siteweb, message
    }])

    if (error) {
        Swal.fire('Erreur', 'Impossible d\'envoyer le formulaire.', 'error')
        console.error(error)
    } else {
        Swal.fire('Merci !', 'Votre message a bien été envoyé.', 'success')
        form.reset()
    }
})