<?php

    function ajouter_clap() {

        // Vérifier si le fichier count clap existe
        $fichier = dirname(__DIR__) . DIRECTORY_SEPARATOR . 'count-clap';
        $clap = 1;
        
        // Si le fichier existe, on incrémente le nombre de clap
        if(file_exists($fichier)){
            $clap = (int)file_get_contents($fichier);
            $clap++;
        }
        // Sinon on crée le fichier et on met le nombre de clap à 1
        file_put_contents($fichier, $clap);
        
    }
    
    ajouter_clap();

    // Fonction qui retourne le nombre de clap

    function numberClick(): string {
        $fichier = dirname(__DIR__) . DIRECTORY_SEPARATOR . 'count-clap';
        return file_get_contents($fichier);
    }

    echo numberClick();

?>