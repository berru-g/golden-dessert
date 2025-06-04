import { createClient } from "https://esm.sh/@supabase/supabase-js@2"

const supabase = createClient(
  "https://jcquyvoijndgbhqwccbx.supabase.co",
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImpjcXV5dm9pam5kZ2JocXdjY2J4Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3NDg5NTgyODksImV4cCI6MjA2NDUzNDI4OX0.a4l3jwBt3AEdhpMT6qfzIA1SlmX29NiCWWto1DvysqI",
  {
    db: {
      schema: 'public' // Ceci est CRUCIAL
    }
  }
)

document.addEventListener('DOMContentLoaded', async () => {
  const form = document.getElementById("contactForm")
  
  form.addEventListener('submit', async (e) => {
    e.preventDefault()

    const formData = {
      email: document.getElementById("email").value.trim(),
      fullname: document.getElementById("fullname").value.trim(),
      statut: document.getElementById("statut").value,
      telephone: document.getElementById("telephone").value.trim(),
      siteweb: document.getElementById("siteweb").value.trim(),
      message: document.getElementById("message").value.trim()
    }

    try {
      // Version OPTIMISÉE avec vérification des champs
      const { error } = await supabase
        .from('contacts')
        .insert(formData) // Pas besoin de tableau si un seul objet

      if (error) throw error

      // Redirection
      window.location.href = {
        restaurateur: "https://www.canva.com/design/DAGkHyepW1w/bZeR3AoqZLTk09F7h-HMjg/edit?utm_content=DAGkHyepW1w&utm_campaign=designshare&utm_medium=link2&utm_source=sharebutton",
        fournisseur: "https://www.canva.com/design/DAGkObwylvk/J7NWh0sZYqB4ylsoQY_u4g/edit?utm_content=DAGkObwylvk&utm_campaign=designshare&utm_medium=link2&utm_source=sharebutton"
      }[formData.statut]

    } catch (error) {
      console.error("Erreur complète:", error)
      Swal.fire({
        title: 'Erreur',
        html: `Code: <strong>${error.code}</strong><br>Message: ${error.message}`,
        icon: 'error'
      })
    }
  })
})