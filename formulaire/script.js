import { createClient } from "https://esm.sh/@supabase/supabase-js@2"

// Configuration Supabase (correcte)
const supabaseUrl = "https://jcquyvoijndgbhqwccbx.supabase.co"
const supabaseKey = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImpjcXV5dm9pam5kZ2JocXdjY2J4Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3NDg5NTgyODksImV4cCI6MjA2NDUzNDI4OX0.a4l3jwBt3AEdhpMT6qfzIA1SlmX29NiCWWto1DvysqI"
const supabase = createClient(supabaseUrl, supabaseKey)

// Attendre que le DOM soit chargé
document.addEventListener('DOMContentLoaded', () => {
  const form = document.getElementById("contactForm")
  
  form.addEventListener('submit', async (e) => {
    e.preventDefault()

    // Récupération des valeurs
    const formData = {
      email: document.getElementById("email").value.trim(),
      fullname: document.getElementById("fullname").value.trim(),
      statut: document.getElementById("statut").value,
      telephone: document.getElementById("telephone").value.trim(),
      siteweb: document.getElementById("siteweb").value.trim(),
      message: document.getElementById("message").value.trim()
    }

    try {
      // Insertion avec select() pour retourner les données
      const { data, error } = await supabase
        .from("contacts")
        .insert([formData])
        .select() // Nécessaire pour avoir une réponse

      if (error) throw error

      // Redirection
      const redirectURLs = {
        restaurateur: "https://www.canva.com/design/DAGkHyepW1w/bZeR3AoqZLTk09F7h-HMjg/edit",
        fournisseur: "https://www.canva.com/design/DAGkObwylvk/J7NWh0sZYqB4ylsoQY_u4g/edit"
      }

      await Swal.fire({
        icon: "success",
        title: "Message envoyé !",
        text: "Redirection en cours...",
        timer: 2500,
        showConfirmButton: false
      })

      window.location.href = redirectURLs[formData.statut] || "/"
      
    } catch (error) {
      console.error("Erreur complète:", error)
      Swal.fire(
        "Erreur technique",
        `Détails: ${error.message}`,
        "error"
      )
    }
  })
})