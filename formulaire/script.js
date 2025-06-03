import { createClient } from "https://esm.sh/@supabase/supabase-js@2"

const supabaseUrl = "https://TON-PROJET.supabase.co"
const supabaseKey = "ta-anon-key"
const supabase = createClient(supabaseUrl, supabaseKey)

const form = document.getElementById("contactForm")

form.addEventListener("submit", async (e) => {
  e.preventDefault()

  const email = document.getElementById("email").value.trim()
  const fullname = document.getElementById("fullname").value.trim()
  const statut = document.getElementById("statut").value
  const telephone = document.getElementById("telephone").value.trim()
  const siteweb = document.getElementById("siteweb").value.trim()
  const message = document.getElementById("message").value.trim()

  const { error } = await supabase.from("contacts").insert([
    {
      email,
      fullname,
      statut,
      telephone,
      siteweb,
      message,
    },
  ])

  if (error) {
    Swal.fire("Erreur", "Impossible d'envoyer le formulaire.", "error")
    console.error(error)
  } else {
    // Message de succès avec redirection selon statut
    let redirectURL = "#"

    if (statut === "restaurateur") {
      redirectURL = "https://www.canva.com/design/DAGkHyepW1w/bZeR3AoqZLTk09F7h-HMjg/edit?utm_content=DAGkHyepW1w&utm_campaign=designshare&utm_medium=link2&utm_source=sharebutton"
    } else if (statut === "fournisseur") {
      redirectURL = "https://www.canva.com/design/DAGkObwylvk/J7NWh0sZYqB4ylsoQY_u4g/edit?utm_content=DAGkObwylvk&utm_campaign=designshare&utm_medium=link2&utm_source=sharebutton"
    }

    Swal.fire({
      icon: "success",
      title: "Message envoyé !",
      text: "Vous allez être redirigé dans un instant...",
      timer: 2500,
      showConfirmButton: false,
    }).then(() => {
      window.location.href = redirectURL
    })

    form.reset()
  }
})
