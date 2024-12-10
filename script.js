document.querySelectorAll('.module').forEach((module) => {
    module.addEventListener('click', (e) => {
        const confirmation = confirm('Voulez-vous accéder à cette page ?');
        if (!confirmation) {
            e.preventDefault(); // Annule la redirection si l'utilisateur clique sur Annuler
        }
    });
});
