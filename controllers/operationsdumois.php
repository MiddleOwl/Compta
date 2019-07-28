<?php
	include(dirname(__FILE__)."/../models/saisie.php");
	
	$action=$_GET['action'];	
	
	
	switch($action){
		case 'read':
			
			$dateDuJour=date('Y-m-d');
			$annee=(isset($_GET['annee'])&& $_GET['annee']!=null) ? $_GET['annee']:explode('-',$dateDuJour)[0];
			$mois=(isset($_GET['mois']) && $_GET['mois']!=null) ? $_GET['mois'] : explode('-',$dateDuJour)[1];
			$anneePrecedente = $mois==01 ? ($annee-1) : $annee;
			$anneeSuivante = $mois==12 ? ($annee+1) : $annee;
			$moisPrecedent = $mois==01 ? 12 : ($mois-1);
			$moisSuivant = $mois==12 ? 1 : ($mois+1);
			$dateDuJourConviviale=date('d-M-Y');
			//$moisConvivial=explode('-',$dateDuJourConviviale)[1];
			switch($mois){
				case 1: $moisConvivial='Janvier';
				break;	
				case 2: $moisConvivial='Février';
				break;
				case 3:$moisConvivial= 'Mars';
				break;
				case 4:$moisConvivial= 'Avril';
				break;
				case 5: $moisConvivial='Mai';
				break;
				case 6: $moisConvivial='Juin';
				break;
				case 7:$moisConvivial= 'Juillet';
				break;
				case 8:$moisConvivial= 'Août';
				break;
				case 9: $moisConvivial='Septembre';
				break;
				case 10: $moisConvivial='Octobre';
				break;
				case 11:$moisConvivial= 'Novembre';
				break;
				case 12:$moisConvivial= 'Décembre';
				break;
				
				
			}
			$operationsDuMois=get_operations_du_mois($annee,$mois);	
			$posteBudgetaire=get_poste_budgetaire();
			
			include(dirname(__FILE__)."/../views/saisie.php");
		break;
		
		case 'solde':			
			$solde=0;
			$montantDepenses=0;
			$montantRecettes=0;			
			$allOperations=get_all_operations($_GET['annee'],$_GET['mois']);
			//print_r($allOperations);
			
			//echo($_GET['annee'].'--'.$_GET['mois']);
			foreach($allOperations as $o){
				if($o['nature'] == 'Dépense'){
					$montantDepenses+=$o['montant'];					
				}
				
				if($o['nature']=='Recette'){
					$montantRecettes+=$o['montant'];
				}				
			}
		
			$solde=$solde+$montantRecettes-$montantDepenses;
			
			echo($solde);			
			
		break;
		
		case 'save':
			$date=$_POST['date'];
			$nature=$_POST['nature'];
			$type=$_POST['type'];
			$idPosteBudgetaire=get_id_poste_budgetaire_from_nom_poste_budgetaire($_POST['poste'])['id'];
			$intitule=$_POST['intitule'];
			$montant=$_POST['montant'];
			$comptabilise=$_POST['comptabilise'];
			//echo($comptabilise);
			if(!empty($date) AND !empty($montant)){
				
				create_operation(
					$date,
					$nature,
					$type,
					$idPosteBudgetaire,
					$intitule,
					$montant,
					$comptabilise
				);			
				
				echo('La '.$_POST['nature'].' a bien été enregistrée');
				
			}
			
			else{
				echo('Saisis toutes les infos');
			}	
			
		break;
		
		case 'update':
			
			$idPosteBudgetaire=get_id_poste_budgetaire_from_nom_poste_budgetaire($_POST['poste'])['id'];
			$id=$_POST['id'];
			$date=$_POST['date'];
			$nature=$_POST['nature'];
			$type=$_POST['type'];
			$posteBudgetaire=$_POST['poste'];
			$intitule=$_POST['intitule'];
			$montant=$_POST['montant'];
			$comptabilise=($_POST['comptabilise']=='true')?1:0;
			update_operation($id,$date,$nature,$type,$idPosteBudgetaire,$intitule,$montant,$comptabilise);
			echo('Opération mise à jour!');
		break;
		
		case'comptabiliser':
		
			$id=$_POST['id'];
			$comptabilise=($_POST['comptabilise']=='true')?1:0;
			comptabiliser_operation($id,$comptabilise);
			
		break;
		
		case 'delete':
		
			$id=$_POST['id'];
			delete_operation($id);
			echo('Opération supprimée!');
			
	}
?>