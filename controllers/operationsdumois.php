<?php
	include(dirname(__FILE__)."/../models/saisie.php");
	
	$action=$_GET['action'];
	
	switch($action){
		case 'read':
			$dateDuJour=date('Y-m-d');
			$annee=explode('-',$dateDuJour)[0];
			$mois=explode('-',$dateDuJour)[1];
			$dateDuJourConviviale=date('d-M-Y');
			$moisConvivial=explode('-',$dateDuJourConviviale)[1];	
			$operationsDuMois=get_operations_du_mois($annee,$mois);
			$posteBudgetaire=get_poste_budgetaire();
			

			include(dirname(__FILE__)."/../views/saisie.php");
			
			break;
		
		case 'save':
			$date=$_POST['date'];
			$nature=$_POST['nature'];
			$type=$_POST['type'];
			$idPosteBudgetaire=get_id_poste_budgetaire_from_nom_poste_budgetaire($_POST['poste'])['id'];
			$intitule=$_POST['intitule'];
			$montant=$_POST['montant'];
			
			
			
			// function update_solde(){
				// $operationsDuMois=get_operations_du_mois(12,2018);
				// $solde=1000;
				// foreach ($operationsDuMois as $oM){
					// $solde=$solde-$oM['montant'];
				// }
				// return($solde);
				
			// }
			
			if(!empty($date) AND !empty($montant)){
				
				create_operation(
					$date,
					$nature,
					$type,
					$idPosteBudgetaire,
					$intitule,
					$montant
				);
				
				// echo(gettype ($montant));
				// $montant=(int)$montant;
				// echo(gettype ($montant));
				
				
				echo('La '.$_POST['nature'].' a bien été enregistrée');
				
			}	
			
			else{
				echo('Saisis toutes les infos');
			}	
			
	break;
	}
?>